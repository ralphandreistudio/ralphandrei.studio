import { useEffect, useMemo, useState } from 'react'
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
  className,
  onAllFailed,
}: CategoryCoverImageProps) {
  const candidates = useMemo(() => getCoverSrcCandidates(slug), [slug])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [slug])

  const src = candidates[index]
  if (!src) {
    onAllFailed?.()
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        if (index < candidates.length - 1) {
          setIndex((i) => i + 1)
        } else {
          onAllFailed?.()
        }
      }}
    />
  )
}
