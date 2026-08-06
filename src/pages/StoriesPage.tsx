import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollReveal from '../components/ScrollReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { stories } from '../data/stories'

export default function StoriesPage() {
  usePageMeta({
    title: 'Stories · Studio Ralph Andrei',
    description:
      'Articles and published writing from Studio Ralph Andrei — covering events, partnerships, and the stories behind the work.',
    path: '/stories',
  })

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className="px-6 pt-28 pb-12 md:px-10 lg:px-16">
        <Link
          to="/"
          className="text-sm text-brand-black hover-fine-opacity"
        >
          ← Home
        </Link>
        <ScrollReveal>
          <h1 className="mt-8 text-4xl font-extrabold text-brand-black md:text-5xl lg:text-6xl">
            Stories
          </h1>
          <p className="mt-4 max-w-xl text-brand-gray">
            Articles and published writing from the studio.
          </p>
        </ScrollReveal>
      </header>

      <main className="px-6 pb-24 md:px-10 lg:px-16">
        {stories.length === 0 ? (
          <p className="py-24 text-center text-brand-gray">
            No stories yet — check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-px bg-[#e5e5e5] md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <ScrollReveal key={story.slug} className="h-full" delay={index * 60}>
                <Link
                  to={`/stories/${story.slug}`}
                  className="group flex h-full flex-col bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-light">
                    <img
                      src={story.cover}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out-strong motion-reduce:transition-none group-hover-zoom"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-[background-color] duration-250 ease-out-strong group-hover-dim" />
                  </div>
                  <div className="flex flex-1 flex-col px-4 py-5">
                    <p className="text-xs uppercase tracking-[0.15em] text-brand-gray">
                      {story.date}
                    </p>
                    <h2 className="mt-2 text-base font-extrabold leading-snug text-brand-black transition-opacity duration-250 ease-out-strong group-hover-subtle">
                      {story.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm text-brand-gray">
                      {story.excerpt}
                    </p>
                    <span className="mt-auto inline-block pt-4 text-xs text-brand-black transition-opacity duration-250 ease-out-strong group-hover-subtle">
                      Read more →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
