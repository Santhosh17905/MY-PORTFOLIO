import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { ProjectsExplorer } from '@/components/projects-explorer'
import { BackToTop } from '@/components/back-to-top'
import { getAllProjects, getProjectCategories } from '@/data/projects'

export const metadata: Metadata = {
  title: 'All Projects',
  description:
    'A complete archive of Santhosh S\u2019s AI/ML projects spanning machine learning, deep learning, computer vision, NLP, and data analysis.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  const categories = getProjectCategories()

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 pb-12 pt-36 sm:pt-44">
            <SectionHeading
              eyebrow="Project Archive"
              title="All AI/ML Projects"
              description="An end-to-end collection of projects across the machine learning lifecycle. Filter by category or search by technology to explore."
            />
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                {projects.length} projects total
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary/60" />
                {categories.length} categories
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-12">
            <ProjectsExplorer projects={projects} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
