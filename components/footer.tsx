import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/data/profile'

const footerLinks = [
  { label: 'About',          href: '/#about' },
  { label: 'Skills',         href: '/#skills' },
  { label: 'Projects',       href: '/projects' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Contact',        href: '/#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="section-divider" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="group flex items-center gap-2.5 text-base font-semibold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-300 group-hover:scale-110">
                S
              </span>
              {profile.name}
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              AI/ML Engineer focused on building reliable, well-evaluated machine
              learning systems from data to deployment.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:scale-110 hover:text-primary"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:scale-110 hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary hover:scale-110 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Navigate
            </span>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Quick contact */}
          <div className="flex flex-col gap-2.5">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Get in touch
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-3.5 transition-transform group-hover:scale-110" />
              {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Download Resume →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground/60">
            Overfitting to my passion, underfitting to excuses.
          </p>
        </div>
      </div>
    </footer>
  )
}
