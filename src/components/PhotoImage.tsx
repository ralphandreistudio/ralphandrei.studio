import { useEffect, useMemo, useState, type ImgHTMLAttributes } from 'react'
import { getImageSrcCandidates } from '../utils/imagePaths'

interface PhotoImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string
}

export default function PhotoImage({ src, alt, ...props }: PhotoImageProps) {
  const candidates = useMemo(() => getImageSrcCandidates(src), [src])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [src])

  const resolvedSrc = candidates[index]
  if (!resolvedSrc) return null

  return (
    <img
      {...props}
      src={resolvedSrc}
      alt={alt}
      onError={() => {
        if (index < candidates.length - 1) {
          setIndex((i) => i + 1)
        }
      }}
    />
  )
}
