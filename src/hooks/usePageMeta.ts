import { useEffect } from 'react'
import { getSiteUrl } from '../config/site'

export interface PageMetaOptions {
  title: string
  description: string
  path: string
  image?: string
}

function upsertMeta(
  key: string,
  content: string,
  attr: 'name' | 'property' = 'name',
) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export function usePageMeta({ title, description, path, image }: PageMetaOptions) {
  useEffect(() => {
    const siteUrl = getSiteUrl()
    const canonical = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
    const imagePath = image?.startsWith('http') ? image : `${siteUrl}${image ?? '/og-image.png'}`

    document.title = title
    upsertCanonical(canonical)
    upsertMeta('description', description)
    upsertMeta('og:type', 'website', 'property')
    upsertMeta('og:site_name', 'studio ralph andrei', 'property')
    upsertMeta('og:title', title, 'property')
    upsertMeta('og:description', description, 'property')
    upsertMeta('og:url', canonical, 'property')
    upsertMeta('og:image', imagePath, 'property')
    upsertMeta('og:image:secure_url', imagePath, 'property')
    upsertMeta('twitter:card', 'summary_large_image')
    upsertMeta('twitter:title', title)
    upsertMeta('twitter:description', description)
    upsertMeta('twitter:image', imagePath)
  }, [title, description, path, image])
}
