import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
} from '../components/ContactIcons'
import CategoryCoverImage from '../components/CategoryCoverImage'
import { categories } from '../data/photos'

const coverAspectClass = {
  '4/3': 'aspect-[4/3]',
  '4/5': 'aspect-[4/5]',
} as const

const coverPositionClass = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom',
} as const

function CategoryCard({
  slug,
  name,
  coverAspect = '4/3',
  coverPosition = 'center',
}: {
  slug: string
  name: string
  coverAspect?: '4/3' | '4/5'
  coverPosition?: 'top' | 'center' | 'bottom'
}) {
  const [coverMissing, setCoverMissing] = useState(false)

  useEffect(() => {
    setCoverMissing(false)
  }, [slug])

  return (
    <Link
      to={`/work/${slug}`}
      className={`group relative block overflow-hidden bg-brand-light ${coverAspectClass[coverAspect]}`}
    >
      {!coverMissing && (
        <CategoryCoverImage
          slug={slug}
          alt={name}
          className={`h-full w-full object-cover ${coverPositionClass[coverPosition]}`}
          onAllFailed={() => setCoverMissing(true)}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/40">
        <span className="px-4 text-center text-lg font-extrabold lowercase text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {name.toLowerCase()}
        </span>
      </div>
    </Link>
  )
}

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (id) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const scrollToWork = useCallback(() => {
    scrollToSection('work')
  }, [scrollToSection])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onScrollTo={scrollToSection} />

      {/* Hero */}
      <section className="flex min-h-screen flex-col justify-center px-6 pt-24 md:px-10 lg:px-16">
        <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold lowercase leading-[1.05] text-brand-black">
          every frame
          <br />
          tells a story
        </h1>
        <p className="mt-8 max-w-3xl text-xs uppercase tracking-[0.2em] text-brand-gray">
          {categories.map((c) => c.name.toLowerCase()).join(' · ')}
        </p>
        <button
          type="button"
          onClick={scrollToWork}
          className="mt-10 w-fit text-sm lowercase text-brand-black transition-opacity hover:opacity-60"
        >
          view work ↓
        </button>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20 px-6 py-24 md:px-10 lg:px-16">
        <p className="mb-10 text-xs uppercase tracking-[0.2em] text-brand-gray">
          selected work
        </p>
        <div className="grid grid-cols-1 gap-px bg-[#e5e5e5] md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              slug={category.slug}
              name={category.name}
              coverAspect={category.coverAspect}
              coverPosition={category.coverPosition}
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 border-t border-[#e5e5e5] px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <h2 className="text-3xl font-extrabold lowercase leading-snug text-brand-black md:text-4xl lg:text-5xl">
            nearly eight years.
            <br />
            self-taught.
            <br />
            still curious.
          </h2>
          <div className="space-y-6 text-brand-gray lowercase">
            <p>
              for nearly eight years, i have honed my craft as a self-taught
              photographer—learning through shoots, mistakes, and the quiet
              discipline of showing up with a camera. every assignment sharpens
              the eye; every frame is a chance to see something true.
            </p>
            <p>
              the studio covers events, portraits, intimate
              celebrations, graduations, kids and family, dance competitions,
              sports and action, real estate, and behind-the-scenes across metro
              manila. whether it is a gala, a lookbook, or a championship
              moment, the goal is the same: honest imagery that holds the weight
              of the day.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 border-t border-[#e5e5e5] pt-16 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-extrabold lowercase text-brand-black md:text-4xl">
              8+
            </p>
            <p className="mt-2 text-sm lowercase text-brand-gray">years active</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold lowercase text-brand-black md:text-4xl">
              Sony αlpha
            </p>
            <p className="mt-2 text-sm lowercase text-brand-gray">primary system</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold lowercase text-brand-black md:text-4xl">
              metro manila
            </p>
            <p className="mt-2 text-sm lowercase text-brand-gray">based in</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 border-t border-[#e5e5e5] px-6 py-24 md:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold lowercase text-brand-black md:text-4xl">
              let&apos;s work together
            </h2>
            <p className="mt-4 text-brand-gray lowercase">
              available for bookings across metro manila and beyond.
            </p>
          </div>
          <ul className="flex flex-col gap-5 text-lg lowercase">
            <li>
              <a
                href="https://www.instagram.com/studioralphandrei/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-brand-black transition-opacity hover:opacity-60"
              >
                <InstagramIcon />
                instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:r.andreitomas@gmail.com"
                className="inline-flex items-center gap-3 text-brand-black transition-opacity hover:opacity-60"
              >
                <EmailIcon />
                email
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/studio.randreit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-brand-black transition-opacity hover:opacity-60"
              >
                <FacebookIcon />
                facebook
              </a>
            </li>
            <li>
              <a
                href="tel:+639957413090"
                className="inline-flex items-center gap-3 text-brand-black transition-opacity hover:opacity-60"
              >
                <PhoneIcon />
                +63 995 7413090
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
