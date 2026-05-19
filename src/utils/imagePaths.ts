/** Tried in order when a gallery/cover path 404s (case & format). */
export const IMAGE_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'webp',
  'JPG',
  'JPEG',
  'PNG',
  'WEBP',
] as const

export function getImageSrcCandidates(src: string): string[] {
  const match = src.match(/^(.+)\.[^./]+$/i)
  if (!match) return [src]
  const base = match[1]
  return IMAGE_EXTENSIONS.map((ext) => `${base}.${ext}`)
}

export function getCoverSrcCandidates(slug: string): string[] {
  return getImageSrcCandidates(`/photos/${slug}/cover.jpg`)
}
