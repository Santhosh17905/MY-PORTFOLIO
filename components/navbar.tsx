'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/data/profile'
import { ThemeToggle } from '@/components/theme-toggle'
import { ScrollProgress } from '@/components/scroll-progress'

const navLinks = [
  { label: 'About',          href: '/#about' },
  { label: 'Skills',         href: '/#skills' },
  { label: 'Projects',       href: '/projects' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Achievements',   href: '/#achievements' },
  { label: 'Contact',        href: '/#contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    if (pathname !== '/') return
    const sectionIds = ['about', 'skills', 'featured', 'certifications', 'achievements', 'contact']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [pathname])

  useEffect(() => { setOpen(false) }, [pathname])

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function isActive(href: string) {
    if (href === '/projects') return pathname === '/projects'
    const id = href.replace('/#', '')
    return activeSection === id
  }

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass border-b border-border shadow-lg shadow-black/10'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/40">
              S
            </span>
            <span className="hidden sm:inline transition-colors group-hover:text-primary">{profile.name}</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm transition-colors duration-200',
                  isActive(link.href)
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3 bottom-0.5 h-px rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              title="Resume"
              className={cn(buttonVariants({ size: 'sm' }))}
            >
              Resume
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="glass animate-menu-in border-t border-border md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2.5 text-sm transition-colors',
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                title="Download Resume"
                className={cn(buttonVariants({ size: 'default' }), 'mt-2 w-full')}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
