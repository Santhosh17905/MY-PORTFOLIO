import { FileText, Download, Eye, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/scroll-reveal'
import { profile } from '@/data/profile'

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <ScrollReveal variant="zoom">
          <div className="glass gradient-border relative overflow-hidden rounded-2xl border border-border p-8 sm:p-12 animate-pulse-glow">
            {/* Decorative orbs */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 left-0 size-48 rounded-full bg-primary/6 blur-3xl"
              aria-hidden
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform hover:scale-110">
                  <FileText className="size-6" />
                </span>
                <div className="mt-4 flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
                    Resume
                  </span>
                </div>
                <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Want the full picture?
                </h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  My resume details my education, technical skills, project highlights,
                  and certifications in a single recruiter-friendly document.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  size="lg"
                  className="group relative overflow-hidden"
                  render={<a href={profile.resumeUrl} download />}
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
                  <Download className="size-4" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group transition-all hover:border-primary/60"
                  render={<a href={profile.resumeUrl} target="_blank" rel="noreferrer" />}
                >
                  <Eye className="size-4 transition-transform group-hover:scale-110" />
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
