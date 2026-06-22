'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealVariant = 'up' | 'left' | 'right' | 'zoom' | 'blur' | 'fade'

interface ScrollRevealProps {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
  threshold?: number
}

const variantClass: Record<RevealVariant, string> = {
  up:    'reveal',
  left:  'reveal-right',
  right: 'reveal-left',
  zoom:  'reveal-zoom',
  blur:  'reveal-blur',
  fade:  'reveal',
}

export function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={ref} className={cn(variantClass[variant], className)}>
      {children}
    </div>
  )
}
