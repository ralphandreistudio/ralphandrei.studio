import { useEffect, useMemo, useRef, useState } from 'react'
import { getCoverSrcCandidates } from '../utils/imagePaths'

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
  const candidates = useMemo(() => getCoverSrcCandidates(slug), [slug])
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setIndex(0)
    setLoaded(false)
  }, [slug])

  const src = candidates[index]

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src, index])
  if (!src) {
    onAllFailed?.()
    return null
  }

  return (
    <div className="absolute inset-0">
      {!loaded && <div className="photo-loader absolute inset-0" aria-hidden="true" />}
      <img
        ref={imgRef}
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
    </div>
  )
}
