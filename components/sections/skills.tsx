'use client'

import { useEffect, useRef } from 'react'
import { Code2, BrainCircuit, BarChart3, Wrench, GitBranch } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { skillGroups } from '@/data/profile'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Programming:       Code2,
  'Machine Learning': BrainCircuit,
  'Data Analysis':   BarChart3,
  Tools:             Wrench,
  'Version Control': GitBranch,
}

// Maps category → rough proficiency percentages for each skill (display only)
const proficiencyMap: Record<string, number[]> = {
  Programming:       [95, 80],
  'Machine Learning': [88, 82, 78, 75, 72, 85, 80],
  'Data Analysis':   [92, 90, 85, 80, 88, 83, 86],
  Tools:             [85, 88, 75, 70],
  'Version Control': [88, 85, 72],
}

function SkillBar({ skill, pct, delay }: { skill: string; pct: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => { el.style.width = `${pct}%` }, delay)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [pct, delay])

  return (
    <div className="group flex flex-col gap-1">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium text-foreground/80">{skill}</span>
        <span className="text-muted-foreground">{pct}%</span>
      </div>
      <div className="progress-bar">
        <div
          ref={barRef}
          className="progress-bar-fill"
          style={{ width: '0%', transitionDelay: `${delay}ms` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={skill}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <ScrollReveal variant="up">
          <SectionHeading
            eyebrow="Skills"
            title="A practical, end-to-end ML toolkit"
            description="The technologies I use to take a problem from raw data to an evaluated, deployable model."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.category] ?? Code2
            const profs = proficiencyMap[group.category] ?? group.skills.map(() => 80)
            return (
              <ScrollReveal key={group.category} variant="zoom" delay={gi * 80}>
                <div className="glass gradient-border group flex h-full flex-col rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <Icon className="size-4" />
                    </span>
                    <h3 className="font-semibold">{group.category}</h3>
                  </div>

                  {/* Skill pill tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Progress bars for top skills */}
                  <div className="mt-5 flex flex-col gap-3">
                    {group.skills.slice(0, 3).map((skill, si) => (
                      <SkillBar
                        key={skill}
                        skill={skill}
                        pct={profs[si] ?? 80}
                        delay={gi * 80 + si * 120}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
