'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FileText, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/data/profile'
import { getAllProjects } from '@/data/projects'

const TITLES = [
  'AI / ML Enthusiast',
  'Aspiring Machine Learning Engineer',
  'Open to AI/ML Engineer roles',
  'Open to working on AI/ML projects',
  // 'Data Scientist',
  // 'Deep Learning Engineer',
  // 'Python Developer',
  // 'ML Pipeline Builder',
]

function TypingText() {
  const [displayed, setDisplayed] = useState('')
  const [titleIdx, setTitleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const current = TITLES[titleIdx]
    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
    } else {
      const speed = deleting ? 40 : 80
      timeoutRef.current = setTimeout(() => {
        setDisplayed(deleting ? displayed.slice(0, -1) : current.slice(0, displayed.length + 1))
      }, speed)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, titleIdx])

  return (
    <span className="typing-cursor text-xl font-medium text-primary sm:text-2xl">
      {displayed}
    </span>
  )
}

export function Hero() {
  const projectCount = getAllProjects().length

  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />

      {/* Gradient orbs */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[50rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 size-[30rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pb-24 pt-36 sm:pt-44">

        {/* Availability badge */}
        <span
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          style={{ animationDelay: '0ms' }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Open to AI/ML Engineer roles · {profile.graduationYear} graduate
        </span>

        {/* Name & typing title */}
        <div
          className="animate-fade-up flex flex-col gap-3"
          style={{ animationDelay: '80ms' }}
        >
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <TypingText />
        </div>

        {/* Short intro */}
        <p
          className="animate-fade-up max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: '160ms' }}
        >
          {profile.shortIntro}
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up flex flex-wrap items-center gap-3"
          style={{ animationDelay: '240ms' }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden"
            nativeButton={false}
            render={<a href={profile.resumeUrl} target="_blank" rel="noreferrer" />}
          >
            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            <FileText className="size-4" />
            Download Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group transition-all hover:border-primary/60"
            nativeButton={false}
            render={<a href={profile.social.github} target="_blank" rel="noreferrer" />}
          >
            <GithubIcon className="size-4 transition-transform group-hover:scale-110" />
            GitHub
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group transition-all hover:border-primary/60"
            nativeButton={false}
            render={<a href={profile.social.linkedin} target="_blank" rel="noreferrer" />}
          >
            <LinkedinIcon className="size-4 transition-transform group-hover:scale-110" />
            LinkedIn
          </Button>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-2 grid w-full grid-cols-2 gap-4 sm:max-w-2xl sm:grid-cols-4"
          style={{ animationDelay: '320ms' }}
        >
          {[
            { value: `${projectCount}+`, label: 'AI/ML Projects' },
            { value: 'BE ECE',           label: profile.graduationYear },
            { value: 'Python',           label: 'Core Stack' },
            { value: 'ML · DL',          label: 'Focus Areas' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Explore link */}
        <Link
          href="/projects"
          className="animate-fade-up group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          style={{ animationDelay: '400ms' }}
        >
          Explore all projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
