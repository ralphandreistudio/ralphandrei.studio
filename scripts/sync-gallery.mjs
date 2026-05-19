import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const photosRoot = path.join(root, 'public', 'photos')
const outFile = path.join(root, 'src', 'data', 'gallery.generated.ts')
const captionsFile = path.join(root, 'src', 'data', 'captions.json')

const IMAGE_RE = /\.(jpe?g|png|webp)$/i
const COVER_RE = /^cover/i

function listGalleryFiles(slugDir) {
  if (!fs.existsSync(slugDir)) return []
  try {
    return fs
      .readdirSync(slugDir)
      .filter(
        (f) =>
          IMAGE_RE.test(f) && !COVER_RE.test(f) && !f.startsWith('.'),
      )
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }),
      )
  } catch (err) {
    if (err && (err.code === 'EBUSY' || err.code === 'EPERM')) {
      console.warn(`[gallery] skipped ${slugDir} (file locked — try again)`)
      return []
    }
    throw err
  }
}

function loadCaptionsJson() {
  if (!fs.existsSync(captionsFile)) return {}
  try {
    return JSON.parse(fs.readFileSync(captionsFile, 'utf8'))
  } catch (err) {
    console.warn('[gallery] could not read captions.json:', err.message)
    return {}
  }
}

/** One-time rescue: import titles from an old gallery.generated.ts backup file. */
export function importCaptionsFromGalleryFile(backupPath) {
  const content = fs.readFileSync(backupPath, 'utf8')
  const jsonStart = content.indexOf('= {')
  if (jsonStart === -1) throw new Error('Not a gallery.generated.ts file')

  const data = JSON.parse(content.slice(jsonStart + 2))
  const captions = {}

  for (const [slug, photos] of Object.entries(data)) {
    captions[slug] = {}
    for (const photo of photos) {
      const filename = photo.src?.split('/').pop()
      if (!filename) continue
      const entry = {}
      if (photo.title) entry.title = photo.title
      if (photo.description) entry.description = photo.description
      if (photo.tags?.length) entry.tags = photo.tags
      if (photo.aspect) entry.aspect = photo.aspect
      if (Object.keys(entry).length > 0) {
        captions[slug][filename] = entry
      }
    }
  }

  fs.writeFileSync(captionsFile, JSON.stringify(captions, null, 2) + '\n')
  return captions
}

export function syncGallery() {
  const captions = loadCaptionsJson()
  /** @type {Record<string, Array<{ id: string, src: string }>>} */
  const galleryBySlug = {}

  if (fs.existsSync(photosRoot)) {
    let entries
    try {
      entries = fs.readdirSync(photosRoot, { withFileTypes: true })
    } catch (err) {
      if (err && (err.code === 'EBUSY' || err.code === 'EPERM')) {
        console.warn('[gallery] sync skipped (photos folder locked)')
        return
      }
      throw err
    }
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const slug = entry.name
      const dir = path.join(photosRoot, slug)
      galleryBySlug[slug] = listGalleryFiles(dir).map((filename) => {
        const base = filename.replace(/\.[^.]+$/i, '')
        return {
          id: `${slug}-${base}`,
          src: `/photos/${slug}/${filename}`,
        }
      })
    }
  }

  const lines = [
    '// ═══════════════════════════════════════════════════════════════',
    '// AUTO-GENERATED — photo list only (id + src). Never edit.',
    '//',
    '// Captions: src/data/captions.json  OR  src/data/photo-meta.ts',
    '// ═══════════════════════════════════════════════════════════════',
    "import type { GalleryEntry } from '../types'",
    '',
    'export const galleryBySlug: Record<string, GalleryEntry[]> = ' +
      JSON.stringify(galleryBySlug, null, 2),
    '',
  ]

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, lines.join('\n'))

  const count = Object.values(galleryBySlug).flat().length
  const captionCount = Object.values(captions).reduce(
    (n, cat) => n + Object.keys(cat).length,
    0,
  )
  console.log(
    `[gallery] synced ${count} photos` +
      (captionCount > 0 ? ` · ${captionCount} captions in captions.json` : ''),
  )
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])
if (isMain) {
  const backupArg = process.argv.find((a) => a.startsWith('--import='))
  if (backupArg) {
    const backupPath = backupArg.replace('--import=', '')
    importCaptionsFromGalleryFile(path.resolve(backupPath))
    console.log(`[gallery] imported captions into ${captionsFile}`)
  } else {
    syncGallery()
  }
}
