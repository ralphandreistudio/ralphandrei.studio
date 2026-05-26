export const SITE_NAME = 'studio ralph andrei'

export function getSiteUrl(): string {
  const url = import.meta.env.VITE_SITE_URL || 'https://studio-ralph-andrei.vercel.app'
  return url.replace(/\/$/, '')
}

export const DEFAULT_PAGE_META = {
  title: `${SITE_NAME} · photography`,
  description:
    'Freelance photographer in Metro Manila — events, portraits, celebrations, sports, dance, real estate, and more.',
  path: '/',
  image: '/og-image.png',
} as const
