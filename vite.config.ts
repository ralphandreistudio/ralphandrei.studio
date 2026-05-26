import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { execFileSync } from 'node:child_process'
import { syncGallery } from './scripts/sync-gallery.mjs'

function runGenerateSitemap(root: string) {
  execFileSync(process.execPath, [path.join(root, 'scripts', 'generate-sitemap.mjs')], {
    cwd: root,
    stdio: 'inherit',
  })
}

function gallerySyncPlugin(): Plugin {
  let root = process.cwd()

  return {
    name: 'gallery-sync',
    configResolved(config) {
      root = config.root
    },
    buildStart() {
      syncGallery()
      runGenerateSitemap(root)
    },
    configureServer(server) {
      syncGallery()
      runGenerateSitemap(root)
      const photosDir = path.join(root, 'public', 'photos')
      server.watcher.add(photosDir)

      let syncTimer: ReturnType<typeof setTimeout> | undefined
      const scheduleGallerySync = () => {
        clearTimeout(syncTimer)
        syncTimer = setTimeout(() => {
          try {
            syncGallery()
            server.ws.send({ type: 'full-reload' })
          } catch (err) {
            console.warn('[gallery] sync failed:', err)
          }
        }, 500)
      }

      const onPhotosChange = (file: string) => {
        if (file.includes(`${path.sep}photos${path.sep}`)) {
          scheduleGallerySync()
        }
      }
      server.watcher.on('add', onPhotosChange)
      server.watcher.on('unlink', onPhotosChange)
      server.watcher.on('change', onPhotosChange)
    },
  }
}

function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'site-url-meta',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', siteUrl.replace(/\/$/, ''))
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl =
    env.VITE_SITE_URL || 'https://studio-ralph-andrei.vercel.app'

  return {
    plugins: [siteUrlPlugin(siteUrl), gallerySyncPlugin(), react()],
  }
})
