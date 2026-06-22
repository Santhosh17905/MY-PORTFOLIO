'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Trophy, Star, BookOpen, Mic2, Users, ClipboardCheck,
  X, ExternalLink, ChevronRight, Calendar,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { achievements } from '@/data/profile'
import type { Achievement, AchievementCategory } from '@/lib/types'
import { cn } from '@/lib/utils'

// ─── Category meta ────────────────────────────────────────────────────────────
const CAT_META: Record<
  AchievementCategory,
  { icon: React.ElementType; colour: string; label: string }
> = {
  Assessment: {
    icon: ClipboardCheck,
    colour: 'bg-primary/10 text-primary border-primary/25',
    label: 'Assessment',
  },
  Academic: {
    icon: BookOpen,
    colour: 'bg-blue-500/10 text-blue-400 border-blue-500/25',
    label: 'Academic',
  },
  Competition: {
    icon: Trophy,
    colour: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
    label: 'Competition',
  },
  Professional: {
    icon: Star,
    colour: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
    label: 'Professional',
  },
  Cultural: {
    icon: Users,
    colour: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
    label: 'Cultural',
  },
  Symposium: {
    icon: Mic2,
    colour: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
    label: 'Symposium',
  },
}

// ─── Detail modal ─────────────────────────────────────────────────────────────
function AchievementModal({
  achievement,
  onClose,
}: {
  achievement: Achievement
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const meta = CAT_META[achievement.category] ?? CAT_META['Professional']
  const Icon = meta.icon

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="achievement-modal-title"
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
    >
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={onClose}
        className="animate-overlay-in absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="animate-modal-in relative z-10 w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl" style={{ maxHeight: '90vh' }}>
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />

        {/* Close */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="size-4" />
        </button>

        <div className="p-6 sm:p-7">
          {/* certificate / achievement image */}
          {achievement.image && (
            <div className="mb-5 overflow-hidden rounded-xl border border-border bg-secondary/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={achievement.image} alt={achievement.title} className="w-full object-contain max-h-48" />
            </div>
          )}
          {/* Icon + title */}
          <div className="flex items-start gap-4 pr-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-6" />
            </span>
            <div>
              <h2 id="achievement-modal-title" className="text-pretty text-lg font-semibold leading-snug">
                {achievement.title}
              </h2>
              {achievement.subtitle && (
                <p className="mt-1 text-sm text-muted-foreground">{achievement.subtitle}</p>
              )}
            </div>
          </div>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className={cn('inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium', meta.colour)}>
              <Icon className="size-3" />
              {meta.label}
            </span>
            <span className="flex items-center gap-1 rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
              <Calendar className="size-3" />
              {achievement.year}
            </span>
          </div>

          {/* Detail description */}
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {achievement.detailDescription ?? achievement.description}
          </p>

          {/* Meta key-value table */}
          {achievement.meta && achievement.meta.length > 0 && (
            <div className="mt-6 rounded-xl border border-border bg-secondary/30 p-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                Details
              </p>
              <div className="flex flex-col gap-2">
                {achievement.meta.map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-4 text-sm">
                    <span className="shrink-0 text-muted-foreground">{label}</span>
                    <span className="text-right font-medium text-foreground/90">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Optional proof link */}
          {achievement.link && achievement.link !== '#' ? (
            <a
              href={achievement.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Credential <ExternalLink className="size-3.5" />
            </a>
          ) : (
            <div className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-muted-foreground cursor-not-allowed">
              Credential link coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Achievement card ─────────────────────────────────────────────────────────
function AchievementCard({
  achievement,
  index,
  onClick,
}: {
  achievement: Achievement
  index: number
  onClick: (a: Achievement) => void
}) {
  const meta = CAT_META[achievement.category] ?? CAT_META['Professional']
  const Icon = meta.icon

  return (
    <ScrollReveal variant="zoom" delay={index * 70}>
      <button
        type="button"
        onClick={() => onClick(achievement)}
        aria-label={`Open details for ${achievement.title}`}
        className={cn(
          'group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-card/70 text-left',
          'backdrop-blur-sm transition-all duration-300',
          'hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        )}
      >
        {/* Colour header strip */}
        <div className="h-1 w-full bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 transition-all duration-300 group-hover:from-primary/50 group-hover:via-primary group-hover:to-primary/50" />

        <div className="flex flex-1 flex-col gap-3 p-5">
          {/* Icon + category badge + year */}
          <div className="flex items-start justify-between gap-2">
            <span
              aria-hidden
              className={cn(
                'flex size-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20',
                meta.colour,
              )}
            >
              <Icon className="size-5" />
            </span>
            <span className="flex items-center gap-1 rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
              <Calendar className="size-3" />
              {achievement.year}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-pretty text-sm font-semibold leading-snug">{achievement.title}</p>
            {achievement.subtitle && (
              <p className="mt-0.5 text-xs text-muted-foreground">{achievement.subtitle}</p>
            )}
            <span className={cn('mt-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium', meta.colour)}>
              <Icon className="size-3" />
              {meta.label}
            </span>
            <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {achievement.description}
            </p>
          </div>

          {/* View hint */}
          <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary">
            View details
            <ChevronRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Bottom glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </button>
    </ScrollReveal>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function Achievements() {
  const [active, setActive] = useState<Achievement | null>(null)
  const open  = useCallback((a: Achievement) => setActive(a), [])
  const close = useCallback(() => setActive(null), [])

  if (!achievements || achievements.length === 0) return null

  // Group by category for sub-section rendering
  const assessments = achievements.filter(a => a.category === 'Assessment')
  const others      = achievements.filter(a => a.category !== 'Assessment')

  return (
    <>
      <section
        id="achievements"
        className="scroll-mt-24 border-t border-border"
        aria-labelledby="achievements-heading"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <ScrollReveal variant="up">
            <SectionHeading
              eyebrow="Achievements"
              title="Milestones & recognition"
              description="Click any card to see full details — assessments passed, awards won, and competitions reached."
            />
          </ScrollReveal>

          {/* ── Assessments & Qualifications sub-section ── */}
          {assessments.length > 0 && (
            <ScrollReveal variant="up" delay={60}>
              <div className="mt-14">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-6 w-0.5 rounded-full bg-primary" aria-hidden />
                  <h3 className="text-base font-semibold tracking-tight">Assessments & Qualifications</h3>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                    {assessments.length}
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {assessments.map((a, i) => (
                    <AchievementCard key={a.title} achievement={a} index={i} onClick={open} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Divider */}
          {assessments.length > 0 && others.length > 0 && (
            <div className="my-12 h-px bg-border/50" aria-hidden />
          )}

          {/* ── Other achievements ── */}
          {others.length > 0 && (
            <ScrollReveal variant="up" delay={40}>
              <div className={assessments.length === 0 ? 'mt-14' : ''}>
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-6 w-0.5 rounded-full bg-primary" aria-hidden />
                  <h3 className="text-base font-semibold tracking-tight">Awards & Competitions</h3>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                    {others.length}
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {others.map((a, i) => (
                    <AchievementCard key={a.title} achievement={a} index={i} onClick={open} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

        </div>
      </section>

      {/* Detail modal */}
      {active && <AchievementModal achievement={active} onClose={close} />}
    </>
  )
}
