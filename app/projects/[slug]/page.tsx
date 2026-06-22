import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, ListChecks, Layers } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getAllProjects,
} from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getAllProjects()
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article>
          {/* Header */}
          <section className="border-b border-border">
            <div className="mx-auto max-w-4xl px-6 pb-10 pt-32 sm:pt-40">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                Back to all projects
              </Link>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                  {project.category}
                </span>
              </div>

              <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants(), 'group inline-flex items-center gap-2')}
                  title="View on GitHub"
                >
                  <GithubIcon className="size-4 transition-transform group-hover:scale-110" />
                  View on GitHub
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline' }),
                      'group inline-flex items-center gap-2 transition-all hover:border-primary/60',
                    )}
                    title="Live Demo"
                  >
                    <ExternalLink className="size-4 transition-transform group-hover:scale-110" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-4xl px-6 py-12">
            {/* Screenshot */}
            <div className="glass gradient-border overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/10">
              <div className="relative aspect-video bg-muted">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Overview */}
            <section className="mt-12 reveal" id="overview">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layers className="size-4" />
                </span>
                Project Overview
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {project.details.overview}
              </p>
            </section>

            {/* Technologies */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold">Technologies Used</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Methodology */}
            <section className="mt-10">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ListChecks className="size-4" />
                </span>
                Methodology
              </h2>
              <ol className="mt-4 flex flex-col gap-3">
                {project.details.methodology.map((step, i) => (
                  <li
                    key={step}
                    className="glass flex gap-4 rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-sm font-semibold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Sub-projects */}
            {project.subProjects && project.subProjects.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold">Sub-Projects</h2>
                <div className="mt-4 grid gap-4">
                  {project.subProjects.map((sub) => (
                    <div
                      key={sub.title}
                      className="glass gradient-border rounded-xl border border-border p-5 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <h3 className="font-semibold">{sub.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {sub.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {sub.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <section className="border-t border-border bg-card/30">
              <div className="mx-auto max-w-4xl px-6 py-12">
                <h2 className="text-lg font-semibold">
                  More in {project.category}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/projects/${rel.slug}`}
                      className="glass gradient-border group rounded-xl border border-border p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <h3 className="text-pretty font-medium transition-colors group-hover:text-primary">
                        {rel.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                        {rel.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
