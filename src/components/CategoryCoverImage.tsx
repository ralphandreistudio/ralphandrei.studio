import { useEffect, useMemo, useState } from 'react'
import { getCoverSrcCandidates } from '../utils/imagePaths'
import { useNearViewport } from '../hooks/useNearViewport'

interface CategoryCoverImageProps {
  slug: string
  alt: string
  className?: string
  onAllFailed?: () => void
}

export default function CategoryCoverImage({
  slug,
  alt,
  className = '',
  onAllFailed,
}: CategoryCoverImageProps) {
  const { ref, near } = useNearViewport('400px')
  const candidates = useMemo(() => getCoverSrcCandidates(slug), [slug])
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setIndex(0)
    setLoaded(false)
  }, [slug])

  const src = candidates[index]

  if (!src) {
    onAllFailed?.()
    return null
  }

  return (
    <div ref={ref} className="absolute inset-0">
      {!loaded && <div className="photo-loader absolute inset-0" aria-hidden="true" />}
      {near ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`${className} transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (index < candidates.length - 1) {
              setIndex((i) => i + 1)
              setLoaded(false)
            } else {
              onAllFailed?.()
            }
          }}
        />
      ) : null}
    </div>
  )
}
