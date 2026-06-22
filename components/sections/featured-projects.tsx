'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ProjectCard } from '@/components/project-card'
import { ProjectModal } from '@/components/project-modal'
import { getFeaturedProjects } from '@/data/projects'
import type { Project } from '@/lib/types'

export function FeaturedProjects() {
  const featured = getFeaturedProjects()
  const [modalProject, setModalProject] = useState<Project | null>(null)

  return (
    <>
      <section id="featured" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <ScrollReveal variant="up">
              <SectionHeading
                eyebrow="Featured Work"
                title="Selected AI/ML projects"
                description="A handful of projects that best represent how I approach modeling, evaluation, and delivery."
              />
            </ScrollReveal>
            <ScrollReveal variant="left" delay={100}>
              <Button
                variant="outline"
                className="shrink-0 group transition-all hover:border-primary/60"
                render={<Link href="/projects" />}
              >
                View all projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollReveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ScrollReveal key={project.slug} variant="zoom" delay={i * 100}>
                <ProjectCard
                  project={project}
                  priority={i < 3}
                  onPreview={setModalProject}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal variant="up" delay={200}>
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" className="group" render={<Link href="/projects" />}>
                Browse all {getFeaturedProjects().length}+ projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </>
  )
}
