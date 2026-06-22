'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  priority?: boolean
  onPreview?: (project: Project) => void
}

export function ProjectCard({ project, priority = false, onPreview }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  // 3D tilt effect
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -6
    const rotY = ((x - cx) / cx) * 6
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (card) card.style.transform = ''
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass gradient-border group relative flex flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
      style={{ transition: 'transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease' }}
    >
      {/* Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-16/10 overflow-hidden bg-muted"
        aria-label={`View ${project.title} details`}
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? 'eager' : 'lazy'}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2.5 py-1 font-mono text-xs font-medium text-primary backdrop-blur">
          {project.category}
        </span>
        {/* Quick preview button */}
        {onPreview && (
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); onPreview(project) }}
            className="absolute bottom-3 right-3 translate-y-2 rounded-md bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur transition-all duration-200 hover:bg-primary hover:text-primary-foreground group-hover:translate-y-0 group-hover:opacity-100"
          >
            Quick view
          </button>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-primary"
            >
              {project.title}
            </Link>
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>

        {/* Tech tags */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            View details
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>
    </article>
  )
}
