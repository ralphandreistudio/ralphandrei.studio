import { useEffect, useRef, useState, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  variant?: 'fade' | 'clip'
  delay?: number
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

export default function ScrollReveal({
  children,
  className = '',
  variant = 'fade',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (isInViewport(el)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.01, rootMargin: '0px 0px -24px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const fadeClasses = visible
    ? 'translate-y-0 opacity-100'
    : 'translate-y-2 opacity-0'

  const clipClasses = visible ? 'clip-revealed' : 'clip-hidden'

  return (
    <div
      ref={ref}
      className={`${
        variant === 'clip'
          ? `clip-reveal overflow-hidden ${clipClasses}`
          : `transition-[transform,opacity] duration-500 ease-out-strong motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${fadeClasses}`
      } ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
