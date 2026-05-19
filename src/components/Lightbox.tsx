import { useCallback, useEffect } from 'react'
import PhotoImage from './PhotoImage'
import type { Photo } from '../types'

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const photo = photos[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < photos.length - 1

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1)
  }, [currentIndex, hasPrev, onNavigate])

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1)
  }, [currentIndex, hasNext, onNavigate])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, goPrev, goNext])

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 z-10 text-2xl text-white transition-opacity hover:opacity-60"
        aria-label="Close"
      >
        ✕
      </button>

      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goPrev()
          }}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 px-4 py-8 text-4xl text-white opacity-40 transition-opacity hover:opacity-80"
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}

      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goNext()
          }}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 px-4 py-8 text-4xl text-white opacity-40 transition-opacity hover:opacity-80"
          aria-label="Next photo"
        >
          ›
        </button>
      )}

      <div
        className="flex max-h-[90vh] w-full flex-col items-center px-6 pt-16 pb-8"
        onClick={onClose}
      >
        <PhotoImage
          key={photo.id}
          src={photo.src}
          alt={photo.title || 'Photo'}
          loading="eager"
          loaderVariant="dark"
          wrapperClassName="flex min-h-[50vh] w-full max-w-[85vw] items-center justify-center"
          className="relative z-10 max-h-[80vh] max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        <div
          className="mt-6 max-w-2xl text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-extrabold text-white">{photo.title}</h2>
          {photo.description && (
            <p className="mt-2 text-sm text-gray-400">{photo.description}</p>
          )}
          {photo.tags && photo.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {photo.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white px-3 py-1 text-xs text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
