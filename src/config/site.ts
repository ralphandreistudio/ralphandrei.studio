export const SITE_NAME = 'studio ralph andrei'

export function getSiteUrl(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (typeof window !== 'undefined') return window.location.origin
  return 'https://ralphandrei-studio.vercel.app'
}

export const DEFAULT_PAGE_META = {
  title: `${SITE_NAME} · photography`,
  description:
    'Freelance photographer in Metro Manila — events, portraits, celebrations, sports, dance, real estate, and more.',
  path: '/',
  image: '/og-image.png',
} as const
