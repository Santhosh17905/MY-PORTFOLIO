'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  Award, ExternalLink, ShieldCheck, X, Tag,
  ChevronRight, ChevronDown, Grid3x3,
  Briefcase, BookOpen, Layers, Users, Wrench,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import {
  microsoftCerts,
  naanMudhalvanCerts,
  internshipCerts,
  workshopCerts,
  participationCerts,
} from '@/data/certifications'
import type { CertificateItem } from '@/lib/types'
import { cn } from '@/lib/utils'

// ─── colours ─────────────────────────────────────────────────────────────────
const CAT_CLR: Record<string, string> = {
  'LinkedIn Learning': 'bg-blue-500/10 text-blue-400 border-blue-500/25',
  'Microsoft':         'bg-sky-500/10 text-sky-400 border-sky-500/25',
  'Naan Mudhalvan':    'bg-orange-500/10 text-orange-400 border-orange-500/25',
  'freeCodeCamp':      'bg-green-500/10 text-green-400 border-green-500/25',
  'Internship':        'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  'Workshop':          'bg-purple-500/10 text-purple-400 border-purple-500/25',
  'Participation':     'bg-rose-500/10 text-rose-400 border-rose-500/25',
  'Hackathon':         'bg-amber-500/10 text-amber-400 border-amber-500/25',
}
const cc = (cat: string) => CAT_CLR[cat] ?? 'bg-primary/10 text-primary border-primary/25'

// ─── tiny skill pill ──────────────────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-muted-foreground">
      {label}
    </span>
  )
}

// ─── detail modal (shared) ────────────────────────────────────────────────────
function CertModal({ cert, onClose }: { cert: CertificateItem; onClose: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cm-title"
      className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div aria-hidden onClick={onClose}
        className="animate-overlay-in absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="animate-modal-in relative z-10 w-full max-w-lg overflow-y-auto rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl" style={{ maxHeight: '90vh' }}>        <div className="h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
        <button ref={ref} onClick={onClose} aria-label="Close"
          className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <X className="size-4" />
        </button>
        <div className="p-6 sm:p-7">
          {/* image preview */}
          {cert.image && (
            <div className="mb-5 overflow-hidden rounded-xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cert.image} alt={cert.title} className="w-full object-cover" />
            </div>
          )}
          <div className="flex items-start gap-4 pr-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Award className="size-6" />
            </span>
            <div>
              <h2 id="cm-title" className="text-pretty text-lg font-semibold leading-snug">{cert.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', cc(cert.category))}>
              {cert.category}
            </span>
            <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
              {cert.year}
            </span>
            {cert.verified && (
              <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                <ShieldCheck className="size-3" />Verified
              </span>
            )}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
          <div className="mt-5">
            <p className="mb-2.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
              <Tag className="size-3" />Skills Covered
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map(s => (
                <span key={s} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-foreground/80">{s}</span>
              ))}
            </div>
          </div>
          {cert.credentialUrl && cert.credentialUrl !== '#' && (
            <a href={cert.credentialUrl} target="_blank" rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              View Credential <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── individual certificate card ──────────────────────────────────────────────
function CertCard({ cert, index, onClick }: {
  cert: CertificateItem; index: number; onClick: (c: CertificateItem) => void
}) {
  return (
    <button type="button" onClick={() => onClick(cert)}
      aria-label={`Open details for ${cert.title}`}
      style={{ animationDelay: `${index * 60}ms` }}
      className={cn(
        'group animate-fade-up relative flex h-full w-full cursor-pointer flex-col gap-3 rounded-xl border border-border bg-card/70 p-5 text-left',
        'backdrop-blur-sm transition-all duration-300',
        'hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}>
      <div className="flex items-start justify-between gap-2">
        <span aria-hidden className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-md group-hover:shadow-primary/20">
          <Award className="size-[18px]" />
        </span>
        <div className="flex items-center gap-1.5">
          {cert.verified && (
            <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
              <ShieldCheck className="size-3" />Verified
            </span>
          )}
          <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground">{cert.year}</span>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-pretty text-sm font-semibold leading-snug">{cert.title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{cert.issuer}</p>
        <span className={cn('mt-2 inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium', cc(cert.category))}>
          {cert.category}
        </span>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{cert.description}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {cert.skills.slice(0, 3).map(s => <Pill key={s} label={s} />)}
        {cert.skills.length > 3 && <Pill label={`+${cert.skills.length - 3}`} />}
      </div>
      <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary">
        View details <ChevronRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px rounded-b-xl bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  )
}

// ─── "View all" full list drawer ──────────────────────────────────────────────
function ViewAllDrawer({ title, certs, onClose, onCard }: {
  title: string; certs: CertificateItem[]
  onClose: () => void; onCard: (c: CertificateItem) => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    return () => { document.removeEventListener('keydown', fn); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="va-title"
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div aria-hidden onClick={onClose} className="animate-overlay-in absolute inset-0 bg-black/65 backdrop-blur-sm" />
      <div className="animate-modal-in relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl sm:rounded-2xl" style={{ maxHeight: '85vh' }}>
        <div className="h-1 w-full shrink-0 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
        <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <Grid3x3 className="size-4 text-primary" />
            <h2 id="va-title" className="font-semibold">{title}</h2>
            <span className="rounded-full border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground">{certs.length}</span>
          </div>
          <button ref={ref} onClick={onClose} aria-label="Close"
            className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <X className="size-4" />
          </button>
        </div>
        <div className="overflow-y-auto p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certs.map((c, i) => (
              <CertCard key={c.title} cert={c} index={i} onClick={(cert) => { onClose(); setTimeout(() => onCard(cert), 60) }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── collapsible sub-section inside Professional panel ────────────────────────
const PREVIEW = 5
function SubGroup({ heading, certs, onCard }: {
  heading: string; certs: CertificateItem[]; onCard: (c: CertificateItem) => void
}) {
  const [open, setOpen] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const extra = certs.length - PREVIEW

  return (
    <div className="rounded-xl border border-border/60 overflow-hidden">
      {/* sub-heading toggle */}
      <button type="button" onClick={() => setOpen(v => !v)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary">
        <div className="flex items-center gap-3">
          <span className="h-5 w-0.5 rounded-full bg-primary" aria-hidden />
          <span className="font-medium">{heading}</span>
          <span className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground">{certs.length}</span>
        </div>
        <ChevronDown className={cn('size-4 text-muted-foreground transition-transform duration-300', open && 'rotate-180')} />
      </button>

      {/* cards panel */}
      {open && (
        <div className="border-t border-border/60 p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {certs.slice(0, PREVIEW).map((c, i) => (
              <CertCard key={c.title} cert={c} index={i} onClick={onCard} />
            ))}
          </div>
          {extra > 0 && (
            <div className="mt-4">
              <button type="button" onClick={() => setDrawer(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/8 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <ChevronDown className="size-4" />
                View all {heading} certificates
                <span className="font-mono text-xs opacity-60">+{extra} more</span>
              </button>
            </div>
          )}
        </div>
      )}

      {drawer && (
        <ViewAllDrawer title={heading} certs={certs} onClose={() => setDrawer(false)} onCard={onCard} />
      )}
    </div>
  )
}

// ─── Professional Certifications — big expandable panel ───────────────────────
function ProfessionalPanel({ onCard }: { onCard: (c: CertificateItem) => void }) {
  const [open, setOpen] = useState(false)
  const total = microsoftCerts.length + naanMudhalvanCerts.length
    + workshopCerts.length + participationCerts.length

  return (
    <ScrollReveal variant="up">
      <div className={cn(
        'rounded-2xl border transition-all duration-500',
        open
          ? 'border-primary/40 bg-card shadow-xl shadow-primary/8'
          : 'border-border bg-card/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
      )}>
        {/* ── main toggle button ── */}
        <button type="button" onClick={() => setOpen(v => !v)}
          className="flex w-full items-center gap-5 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:p-7">
          {/* icon */}
          <span className={cn(
            'flex size-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-300',
            open ? 'bg-primary/20 text-primary shadow-lg shadow-primary/25' : 'bg-primary/10 text-primary',
          )}>
            <BookOpen className="size-7" />
          </span>

          {/* text */}
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold leading-tight">Professional Certifications</p>
            <p className="mt-1 text-sm text-muted-foreground">
              LinkedIn Learning · Microsoft Essentials · Naan Mudhalvan · Workshops · Participation
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-sky-500/25 bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                {microsoftCerts.length} LinkedIn & Microsoft
              </span>
              <span className="rounded-full border border-orange-500/25 bg-orange-500/10 px-2.5 py-0.5 text-xs font-medium text-orange-400">
                {naanMudhalvanCerts.length} Naan Mudhalvan
              </span>
              <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                {total} total
              </span>
            </div>
          </div>

          {/* chevron */}
          <ChevronDown className={cn(
            'size-5 shrink-0 text-muted-foreground transition-transform duration-400',
            open && 'rotate-180 text-primary',
          )} />
        </button>

        {/* ── expandable content ── */}
        {open && (
          <div className="border-t border-border/60 px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
            <div className="flex flex-col gap-4">
              <SubGroup heading="Microsoft Essentials" certs={microsoftCerts} onCard={onCard} />
              <SubGroup heading="Naan Mudhalvan" certs={naanMudhalvanCerts} onCard={onCard} />

              {/* divider */}
              <div className="my-2 flex items-center gap-3">
                <div className="h-px flex-1 bg-border/50" />
                <span className="text-xs text-muted-foreground/50">also in this section</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>

              <SubGroup heading="Workshops & Events" certs={workshopCerts} onCard={onCard} />
              <SubGroup heading="Hackathons & Participation" certs={participationCerts} onCard={onCard} />
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}

// ─── Internship timeline card ─────────────────────────────────────────────────
function TimelineCard({ cert, index, onClick, isLast }: {
  cert: CertificateItem; index: number; isLast: boolean; onClick: (c: CertificateItem) => void
}) {
  return (
    <div className="relative flex gap-5" style={{ animationDelay: `${index * 120}ms` }}>
      {/* vertical line */}
      <div className="flex flex-col items-center">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card text-primary shadow-md shadow-primary/20 z-10">
          <Briefcase className="size-4" />
        </div>
        {!isLast && <div className="mt-1 w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-border/30" />}
      </div>

      {/* card */}
      <div className="pb-8 flex-1 min-w-0">
        <button type="button" onClick={() => onClick(cert)}
          aria-label={`Open details for ${cert.title}`}
          className={cn(
            'group relative w-full rounded-xl border border-border bg-card/70 p-5 text-left',
            'backdrop-blur-sm transition-all duration-300',
            'hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          )}>
          {/* year badge on top-right */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              {cert.verified && (
                <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                  <ShieldCheck className="size-3" />Verified
                </span>
              )}
            </div>
            <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground shrink-0">
              {cert.year}
            </span>
          </div>

          <p className="font-semibold leading-snug">{cert.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
          <span className={cn('mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', cc(cert.category))}>
            {cert.category}
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cert.description}</p>

          {/* skills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {cert.skills.map(s => (
              <span key={s} className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground">{s}</span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-muted-foreground/50 transition-colors group-hover:text-primary">
            View details <ChevronRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
          </div>

          <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px rounded-b-xl bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function Certifications() {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null)
  const openModal  = useCallback((c: CertificateItem) => setActiveCert(c), [])
  const closeModal = useCallback(() => setActiveCert(null), [])

  return (
    <>
      <section
        id="certifications"
        className="scroll-mt-24 border-t border-border bg-card/20"
        aria-labelledby="certifications-heading"
      >
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">

          <ScrollReveal variant="up">
            <SectionHeading
              eyebrow="Certifications"
              title="Credentials & learning"
              description="Click any section to explore certificates. Internships are shown below as a timeline."
            />
          </ScrollReveal>

          {/* ══ 1. Professional Certifications — expandable panel ══ */}
          <div className="mt-14">
            <ProfessionalPanel onCard={openModal} />
          </div>

          {/* ══ 2. Internships — timeline ══ */}
          <ScrollReveal variant="up" delay={80}>
            <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 sm:p-7">
              {/* header */}
              <div className="mb-8 flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Briefcase className="size-6" />
                </span>
                <div>
                  <p className="text-lg font-semibold">Internships</p>
                  <p className="text-sm text-muted-foreground">
                    {internshipCerts.length} internship certificates · click any to view details
                  </p>
                </div>
                <span className="ml-auto rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400">
                  {internshipCerts.length} certificates
                </span>
              </div>

              {/* timeline */}
              <div>
                {internshipCerts.map((cert, i) => (
                  <TimelineCard
                    key={cert.title}
                    cert={cert}
                    index={i}
                    isLast={i === internshipCerts.length - 1}
                    onClick={openModal}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Detail modal */}
      {activeCert && <CertModal cert={activeCert} onClose={closeModal} />}
    </>
  )
}
