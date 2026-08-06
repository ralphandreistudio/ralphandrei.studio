import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollReveal from '../components/ScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { getStoryBySlug } from '../data/stories'

export default function StoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const story = slug ? getStoryBySlug(slug) : undefined

  usePageMeta(
    story
      ? {
          title: `${story.title} · Studio Ralph Andrei`,
          description: story.excerpt,
          path: `/stories/${story.slug}`,
          image: story.cover,
        }
      : {
          title: 'Not Found · Studio Ralph Andrei',
          description: 'This story could not be found.',
          path: slug ? `/stories/${slug}` : '/stories',
        },
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!story) {
    return (
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <div className="flex flex-1 items-center justify-center px-6 pt-24">
          <p className="text-brand-gray">Not found</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Article header */}
      <header className="px-6 pt-28 pb-10 md:px-10 lg:px-16">
        <Link
          to="/stories"
          className="text-sm text-brand-black hover-fine-opacity"
        >
          ← Stories
        </Link>
        <ScrollReveal>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-brand-gray">
            {story.date}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-brand-black md:text-5xl lg:text-6xl">
            {story.title}
          </h1>
        </ScrollReveal>
      </header>

      {/* Cover image */}
      <ScrollReveal variant="clip">
        <div className="flex justify-center bg-brand-light px-6 md:px-10 lg:px-16">
          <img
            src={story.cover}
            alt={story.title}
            className="max-h-[90vh] w-auto object-contain"
          />
        </div>
      </ScrollReveal>

      {/* Article body */}
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 lg:px-0">
        {story.sections.map((section, si) => (
          <ScrollReveal key={si} className="mb-12">
            {section.heading && (
              <h2 className="mb-5 text-2xl font-extrabold text-brand-black md:text-3xl">
                {section.heading}
              </h2>
            )}
            <div className="space-y-5">
              {section.paragraphs.map((para, pi) => (
                <p key={pi} className="text-base leading-relaxed text-brand-gray">
                  {para}
                </p>
              ))}
            </div>
          </ScrollReveal>
        ))}

        {story.credit && (
          <ScrollReveal>
            <p className="mt-4 border-t border-[#e5e5e5] pt-8 text-xs italic text-brand-gray">
              {story.credit}
            </p>
          </ScrollReveal>
        )}
      </main>

      {/* Featured photos */}
      {story.photos.length > 0 && (
        <section className="border-t border-[#e5e5e5] px-6 pb-24 pt-16 md:px-10 lg:px-16">
          <ScrollReveal>
            <p className="mb-10 text-xs uppercase tracking-[0.2em] text-brand-gray">
              Photos from the Event
            </p>
          </ScrollReveal>
          <div className="columns-1 gap-1 space-y-1 md:columns-2 lg:columns-3">
            {story.photos.map((photo, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 50}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full break-inside-avoid transition-transform duration-500 ease-out-strong motion-reduce:transition-none hover-fine-zoom"
                />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
