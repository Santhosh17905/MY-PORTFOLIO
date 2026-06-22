'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { ProjectModal } from '@/components/project-modal'
import { cn } from '@/lib/utils'
import type { Project, ProjectCategory } from '@/lib/types'

interface ProjectsExplorerProps {
  projects: Project[]
  categories: ProjectCategory[]
}

export function ProjectsExplorer({ projects, categories }: ProjectsExplorerProps) {
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')
  const [query, setQuery] = useState('')
  const [modalProject, setModalProject] = useState<Project | null>(null)

  const filters: (ProjectCategory | 'All')[] = ['All', ...categories]

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = active === 'All' || p.category === active
      const q = query.trim().toLowerCase()
      const matchesQuery =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [projects, active, query])

  return (
    <>
      <div className="flex flex-col gap-8">
        {/* Filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200',
                  active === filter
                    ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground',
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full rounded-lg border border-border bg-card/50 py-2 pl-9 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20"
              aria-label="Search projects"
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filtered.length}</span> of {projects.length} projects
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <div
                key={project.slug}
                className="reveal"
                style={{ transitionDelay: `${(i % 9) * 60}ms` }}
                ref={(el) => {
                  if (!el) return
                  requestAnimationFrame(() => {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) {
                          el.classList.add('revealed')
                          observer.unobserve(el)
                        }
                      },
                      { threshold: 0.1 }
                    )
                    observer.observe(el)
                  })
                }}
              >
                <ProjectCard
                  project={project}
                  priority={i < 6}
                  onPreview={setModalProject}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass rounded-xl border border-dashed border-border p-16 text-center">
            <div className="text-4xl">🔍</div>
            <p className="mt-3 text-muted-foreground">No projects match your filters.</p>
            <button
              type="button"
              onClick={() => { setActive('All'); setQuery('') }}
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </>
  )
}
