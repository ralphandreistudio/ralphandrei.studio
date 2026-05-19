import { useNavigate } from 'react-router-dom'

interface NavbarProps {
  onScrollTo?: (id: string) => void
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const navigate = useNavigate()

  const handleNavClick = (id: string) => {
    onScrollTo?.(id)
  }

  const handleLogoClick = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          type="button"
          onClick={handleLogoClick}
          className="text-left text-brand-black lowercase"
        >
          <span className="font-normal">studio </span>
          <span className="font-bold">ralph andrei</span>
        </button>

        <ul className="flex items-center gap-8 text-sm lowercase text-brand-black">
          <li>
            <button
              type="button"
              onClick={() => handleNavClick('work')}
              className="transition-opacity hover:opacity-60"
            >
              work
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className="transition-opacity hover:opacity-60"
            >
              about
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="transition-opacity hover:opacity-60"
            >
              contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
