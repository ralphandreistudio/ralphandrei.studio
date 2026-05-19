import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { syncGallery } from './scripts/sync-gallery.mjs' // types: scripts/sync-gallery.d.ts

function gallerySyncPlugin(): Plugin {
  let root = process.cwd()

  return {
    name: 'gallery-sync',
    configResolved(config) {
      root = config.root
    },
    buildStart() {
      syncGallery()
    },
    configureServer(server) {
      syncGallery()
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

// https://vite.dev/config/
export default defineConfig({
  plugins: [gallerySyncPlugin(), react()],
})
