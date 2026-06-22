'use client'

import { useEffect, useRef, useState } from 'react'
import { Target, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { profile } from '@/data/profile'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const step = Math.ceil(to / 40)
          const timer = setInterval(() => {
            start += step
            if (start >= to) { setCount(to); clearInterval(timer) }
            else setCount(start)
          }, 40)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to])

  return <span ref={ref}>{count}{suffix}</span>
}

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <ScrollReveal variant="up">
          <SectionHeading
            eyebrow="About"
            title="Turning data into dependable decisions"
            description="A snapshot of who I am and what I aim to do next."
          />
        </ScrollReveal>

        {/* Animated stat highlights */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {[
            { value: 30, suffix: '+', label: 'Projects Delivered' },
            { value: 7,  suffix: '+', label: 'Skill Domains' },
            { value: 10,  suffix: '+',  label: 'Certifications' },
            { value: 10,  suffix: '+', label: 'Achievements' },
          ].map((s, i) => (
            <ScrollReveal key={s.label} variant="zoom" delay={i * 100}>
              <div className="glass gradient-border rounded-xl border border-border p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-3xl font-bold text-gradient-primary">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <ScrollReveal variant="left" delay={100} className="lg:col-span-3">
            <div className="glass gradient-border h-full rounded-2xl border border-border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary animate-pulse-glow">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Professional Summary</h3>
              </div>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {profile.summary}
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/30">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Education</dt>
                  <dd className="mt-1 text-sm font-medium">{profile.degree} · {profile.graduationYear}</dd>
                </div>
                <div className="rounded-lg border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/30">
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">Location</dt>
                  <dd className="mt-1 text-sm font-medium">{profile.location}</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={200} className="lg:col-span-2">
            <div className="glass gradient-border h-full rounded-2xl border border-border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="size-5" />
                </span>
                <h3 className="text-lg font-semibold">Career Objective</h3>
              </div>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                {profile.objective}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
