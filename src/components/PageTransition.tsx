import { useEffect, useState, type ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [children])

  return (
    <div
      className={`transition-[opacity,transform] duration-[250ms] ease-out-strong motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}
