import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const photosTs = path.join(root, 'src', 'data', 'photos.ts')
const publicDir = path.join(root, 'public')

function getSiteUrl() {
  const envPath = path.join(root, '.env')
  if (fs.existsSync(envPath)) {
    const match = fs
      .readFileSync(envPath, 'utf8')
      .match(/^VITE_SITE_URL=(.+)$/m)
    if (match) return match[1].trim().replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, '')}`
  }
  return (
    process.env.VITE_SITE_URL || 'https://ralphandrei-studio.vercel.app'
  ).replace(/\/$/, '')
}

function getCategorySlugs() {
  const source = fs.readFileSync(photosTs, 'utf8')
  return [...source.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
}

export function generateSitemap() {
  const siteUrl = getSiteUrl()
  const slugs = getCategorySlugs()
  const today = new Date().toISOString().slice(0, 10)

  const urls = [
    { loc: `${siteUrl}/`, priority: '1.0' },
    ...slugs.map((slug) => ({
      loc: `${siteUrl}/work/${slug}`,
      priority: '0.8',
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8')
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8')
  console.log(`[sitemap] wrote ${urls.length} URLs → public/sitemap.xml, public/robots.txt`)
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  generateSitemap()
}
