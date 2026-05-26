import type { Category } from '../types'
import { SITE_NAME } from '../config/site'

export function getCategoryPageMeta(category: Category) {
  const name = category.name.toLowerCase()
  const desc = category.description.toLowerCase()
  const title = `${name} · ${SITE_NAME}`
  const description = `${desc} — photography by ${SITE_NAME}, metro manila.`
  const path = `/work/${category.slug}`
  const image =
    category.photos[0]?.src ?? `/photos/${category.slug}/cover.jpg`

  return { title, description, path, image }
}
