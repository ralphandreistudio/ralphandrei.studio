import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface NavbarProps {
  onScrollTo?: (id: string) => void
}

type NavItem =
  | { type: 'scroll'; id: string; label: string }
  | { type: 'link'; href: string; label: string }

const navItems: NavItem[] = [
  { type: 'scroll', id: 'work', label: 'work' },
  { type: 'scroll', id: 'about', label: 'about' },
  { type: 'link', href: '/stories', label: 'stories' },
  { type: 'scroll', id: 'contact', label: 'contact' },
]

export default function Navbar({ onScrollTo }: NavbarProps) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleScrollClick = (id: string) => {
    setMenuOpen(false)
    if (onScrollTo) {
      onScrollTo(id)
      return
    }
    navigate(`/#${id}`)
  }

  const handleLogoClick = () => {
    setMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          type="button"
          onClick={handleLogoClick}
          className="pressable text-left text-brand-black lowercase"
        >
          <span className="font-normal">studio </span>
          <span className="font-bold">ralph andrei</span>
        </button>

        <ul className="hidden items-center gap-8 text-sm lowercase text-brand-black md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === 'link' ? (
                <Link to={item.href} className="hover-fine-opacity">
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleScrollClick(item.id)}
                  className="hover-fine-opacity"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="pressable flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-6 bg-brand-black transition-transform duration-200 ease-out-strong ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-brand-black transition-opacity duration-200 ease-out-strong ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-brand-black transition-transform duration-200 ease-out-strong ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <button
        type="button"
        className="mobile-nav-backdrop fixed inset-0 top-[73px] z-30 bg-black/20 md:hidden"
        data-open={menuOpen}
        aria-label="Close menu"
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="mobile-nav"
        className="mobile-nav-panel absolute left-0 right-0 top-full z-40 border-b border-[#e5e5e5] bg-white md:hidden"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 text-lg lowercase text-brand-black">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.type === 'link' ? (
                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="pressable block w-full py-3 hover-fine-opacity"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => handleScrollClick(item.id)}
                  className="pressable block w-full py-3 text-left hover-fine-opacity"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
