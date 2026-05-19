import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ImgHTMLAttributes,
} from 'react'
import { getImageSrcCandidates } from '../utils/imagePaths'

interface PhotoImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
  wrapperClassName?: string
  skeletonClassName?: string
  loaderVariant?: 'light' | 'dark'
  onAllFailed?: () => void
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
  ...imgProps
}: PhotoImageProps) {
  const candidates = useMemo(() => getImageSrcCandidates(src), [src])
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const resolvedSrc = candidates[index]

  useEffect(() => {
    setIndex(0)
    setLoaded(false)
  }, [src])

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [resolvedSrc, index])

  if (!resolvedSrc) return null

  const loaderClass =
    loaderVariant === 'dark' ? 'photo-loader photo-loader--dark' : 'photo-loader'

  return (
    <div className={`relative ${wrapperClassName}`}>
      {!loaded && (
        <div
          className={`${loaderClass} absolute inset-0 ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}
      <img
        {...imgProps}
        ref={imgRef}
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
            onAllFailed?.()
          }
        }}
      />
    </div>
  )
}
