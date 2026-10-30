import { useEffect, useMemo, useRef, useState } from 'react'

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

interface ScrambleTextProps {
  text: string
  className?: string
  duration?: number
}

export default function ScrambleText({ text, className = '', duration = 1100 }: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(text)
  const revealOrder = useMemo(
    () => text.split('').map((_, index) => index).sort(() => Math.random() - 0.5),
    [text],
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text)
      return
    }

    let frame = 0
    let startedAt = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      startedAt = performance.now()

      const update = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1)
        const revealedCount = Math.floor(progress * text.length)
        setDisplay(
          text
            .split('')
            .map((character, index) => {
              if (character === ' ' || revealOrder[index] < revealedCount) return character
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
            })
            .join(''),
        )

        if (progress < 1) frame = requestAnimationFrame(update)
        else setDisplay(text)
      }

      frame = requestAnimationFrame(update)
    }, { threshold: 0.35 })

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [duration, revealOrder, text])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </span>
  )
}
