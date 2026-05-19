import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import PhotoImage from '../components/PhotoImage'
import { getCategoryBySlug } from '../data/photos'

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <p className="lowercase text-brand-gray">not found</p>
      </div>
    )
  }

  const { photos } = category

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 pt-10 pb-12 md:px-10 lg:px-16">
        <Link
          to="/#work"
          className="text-sm lowercase text-brand-black transition-opacity hover:opacity-60"
        >
          ← all work
        </Link>
        <h1 className="mt-8 text-4xl font-extrabold lowercase text-brand-black md:text-5xl lg:text-6xl">
          {category.name.toLowerCase()}
        </h1>
        <p className="mt-4 max-w-xl text-brand-gray lowercase">
          {category.description.toLowerCase()}
        </p>
      </header>

      <main className="px-6 pb-24 md:px-10 lg:px-16">
        {photos.length === 0 ? (
          <p className="py-24 text-center lowercase text-brand-gray">
            photos coming soon
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className="group relative block w-full cursor-pointer overflow-hidden"
                onClick={() => setLightboxIndex(index)}
              >
                <PhotoImage
                  src={photo.src}
                  alt={photo.title || 'Photo'}
                  className="block w-full transition-transform duration-200 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 flex items-end bg-black/0 p-4 transition-colors duration-200 group-hover:bg-black/30">
                  <span className="text-sm font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {photo.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>

      {lightboxIndex !== null && photos.length > 0 && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  )
}
