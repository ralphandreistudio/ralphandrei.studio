import type { Category } from '../types'
import { galleryBySlug } from './gallery.generated'
import { applyPhotoMeta } from './photo-meta'

// ─────────────────────────────────────────────────────────────
// PHOTO MANAGEMENT
// Cover: drop cover.jpg in /public/photos/<slug>/
// Gallery: drop images (01.jpg, 02.JPG, …) in the same folder (auto-listed).
// Captions/titles: edit src/data/captions.json (safe — never auto-deleted)
// ─────────────────────────────────────────────────────────────

const categoryDefs = [
  {
    slug: 'events',
    name: 'Events & Corporate',
    description: 'Conferences, launches, galas, brand activations',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'portraits',
    name: 'Portraits',
    description: 'Editorial, fashion, and personal portrait work',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'celebrations',
    name: 'Intimate Celebrations',
    description: 'Debuts, adult parties, milestone nights',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'graduations',
    name: 'Graduations',
    description: 'Ceremony photos with weight',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'bts',
    name: 'BTS',
    description: 'Behind the scenes — the making of the frame',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'dance',
    name: 'Dance Competitions',
    description: 'Movement, expression, a second of flight',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'sports',
    name: 'Sports & Action',
    description: 'Action, grit, and peak moments',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Interior, exterior, lifestyle',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
  {
    slug: 'kids',
    name: 'Kids & Family',
    description: 'Kiddie parties, portraits, pure joy',
    coverAspect: '4/5' as const,
    coverPosition: 'top' as const,
  },
]

export const categories: Category[] = categoryDefs.map((def) => ({
  ...def,
  photos: applyPhotoMeta(
    def.slug,
    (galleryBySlug[def.slug] ?? []).map((entry) => ({
      ...entry,
      title: '',
    })),
  ),
}))

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
