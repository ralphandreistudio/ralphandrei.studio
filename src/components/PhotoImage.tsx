import {
  useEffect,
  useMemo,
  useState,
  type ImgHTMLAttributes,
} from 'react'
import { getImageSrcCandidates } from '../utils/imagePaths'
import { useNearViewport } from '../hooks/useNearViewport'

interface PhotoImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  wrapperClassName?: string
  skeletonClassName?: string
  loaderVariant?: 'light' | 'dark'
  onAllFailed?: () => void
  /** Defer fetching until the image is near the viewport (default: true when loading="lazy") */
  loadWhenNear?: boolean
}

export default function PhotoImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  skeletonClassName = '',
  loaderVariant = 'light',
  onAllFailed,
  loading = 'lazy',
  loadWhenNear,
  ...imgProps
}: PhotoImageProps) {
  const shouldDefer = loadWhenNear ?? loading === 'lazy'
  const { ref, near } = useNearViewport('320px')
  const candidates = useMemo(() => getImageSrcCandidates(src), [src])
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const resolvedSrc = candidates[index]
  const canLoad = !shouldDefer || near

  useEffect(() => {
    setIndex(0)
    setLoaded(false)
    setFailed(false)
  }, [src])

  if (!resolvedSrc || failed) return null

  const loaderClass =
    loaderVariant === 'dark' ? 'photo-loader photo-loader--dark' : 'photo-loader'

  return (
    <div
      ref={ref}
      className={`relative w-full ${!loaded ? 'min-h-24' : ''} ${wrapperClassName}`}
    >
      {!loaded && (
        <div
          className={`${loaderClass} absolute inset-0 ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}
      {canLoad ? (
        <img
          {...imgProps}
          src={resolvedSrc}
          alt={alt}
          loading={loading}
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
              setFailed(true)
              onAllFailed?.()
            }
          }}
        />
      ) : (
        <div className={className} aria-hidden="true" />
      )}
    </div>
  )
}
