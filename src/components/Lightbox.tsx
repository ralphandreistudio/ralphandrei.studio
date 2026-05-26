import { useCallback, useEffect, useRef } from 'react'
import PhotoImage from './PhotoImage'
import type { Photo } from '../types'

interface LightboxProps {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

const SWIPE_THRESHOLD = 48

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const photo = photos[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < photos.length - 1
  const touchStart = useRef<{ x: number; y: number } | null>(null)

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return
    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return
    if (dx > 0) goPrev()
    else goNext()
  }

  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center touch-pan-y"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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
          className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 px-4 py-8 text-4xl text-white opacity-40 transition-opacity hover:opacity-80 sm:block"
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
          className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 px-4 py-8 text-4xl text-white opacity-40 transition-opacity hover:opacity-80 sm:block"
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
          loadWhenNear={false}
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
          <p className="mt-4 text-xs text-white/40 sm:hidden">swipe to navigate</p>
        </div>
      </div>
    </div>
  )
}
