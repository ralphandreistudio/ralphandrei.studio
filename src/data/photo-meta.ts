import type { Photo } from '../types'

/**
 * Optional titles, descriptions, and tags for gallery files.
 * Key = category slug, then filename as stored on disk (e.g. "04.JPG").
 */
export const photoMeta: Record<
  string,
  Record<string, Pick<Photo, 'title' | 'description' | 'tags' | 'aspect'>>
> = {
  // portraits: {
  //   '01.jpg': { title: 'Editorial portrait', aspect: 'portrait' },
  // },
}

export function applyPhotoMeta(slug: string, photos: Photo[]): Photo[] {
  const meta = photoMeta[slug]
  if (!meta) return photos

  return photos.map((photo) => {
    const filename = photo.src.split('/').pop() ?? ''
    const extra = meta[filename]
    return extra ? { ...photo, ...extra } : photo
  })
}
