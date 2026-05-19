/** Listed by gallery sync — captions come from captions.json */
export interface GalleryEntry {
  id: string
  src: string
}

export interface Photo {
  id: string
  src: string
  title: string
  description?: string
  tags?: string[]
  aspect?: 'landscape' | 'portrait' | 'square'
}

export interface Category {
  slug: string
  name: string
  description: string
  /** Home grid tile ratio — use 4/5 for portrait covers */
  coverAspect?: '4/3' | '4/5'
  /** Which part of the cover stays visible when cropping (default: center) */
  coverPosition?: 'top' | 'center' | 'bottom'
  photos: Photo[]
}
