'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import type { Project } from '@/lib/types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="animate-overlay-in fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="animate-modal-in glass relative w-full max-h-[92vh] overflow-y-auto rounded-t-2xl border border-border sm:max-w-2xl sm:rounded-2xl">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        {/* Image */}
        <div className="relative aspect-16/9 overflow-hidden rounded-t-2xl bg-muted sm:rounded-t-2xl">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2.5 py-1 font-mono text-xs font-medium text-primary backdrop-blur">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 p-6">
          <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

          {/* Technologies */}
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
            <Link
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View full details
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
