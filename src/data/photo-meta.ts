import type { Photo } from '../types'
import captionsJson from './captions.json'

// ─────────────────────────────────────────────────────────────
// CAPTIONS — edit captions.json (easier) or this file
// gallery.generated.ts is rebuilt when photos change — never edit it
// ─────────────────────────────────────────────────────────────

type CaptionFields = Pick<Photo, 'title' | 'description' | 'tags' | 'aspect'>

export const photoMeta: Record<string, Record<string, CaptionFields>> = {
  ...captionsJson,
}

function lookupMeta(
  meta: Record<string, CaptionFields>,
  filename: string,
): CaptionFields | undefined {
  if (meta[filename]) return meta[filename]
  const lower = filename.toLowerCase()
  const key = Object.keys(meta).find((k) => k.toLowerCase() === lower)
  return key ? meta[key] : undefined
}

export function applyPhotoMeta(slug: string, photos: Photo[]): Photo[] {
  const meta = photoMeta[slug]
  if (!meta) {
    return photos.map((p) => ({ ...p, title: p.title ?? '' }))
  }

  return photos.map((photo) => {
    const filename = photo.src.split('/').pop() ?? ''
    const extra = lookupMeta(meta, filename)
    return {
      ...photo,
      title: extra?.title ?? photo.title ?? '',
      ...(extra ?? {}),
    }
  })
}
