'use client'

import { useEffect } from 'react'

export function MouseSpotlight() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      aria-hidden
      className="spotlight pointer-events-none fixed inset-0 z-0"
    />
  )
}
