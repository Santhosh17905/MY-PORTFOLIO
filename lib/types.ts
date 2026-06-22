// Core type definitions for the portfolio.

export type ProjectCategory =
  | 'Machine Learning'
  | 'Deep Learning'
  | 'Data Analysis'
  | 'Computer Vision'
  | 'NLP'
  | 'Time Series'

export type CertificationCategory =
  | 'Internships'
  | 'Professional Certifications'
  | 'Workshops'
  | 'Assessments'
  | 'Participation Certificates'

export type AchievementCategory =
  | 'Academic'
  | 'Competition'
  | 'Professional'
  | 'Cultural'
  | 'Symposium'
  | 'Assessment'

// ── Certificate types ─────────────────────────────────────────────────────────
export type CertSection =
  | 'linkedin'
  | 'microsoft'
  | 'naan-mudhalvan'
  | 'internships'
  | 'workshops'
  | 'participation'

export interface CertificateItem {
  title: string
  issuer: string
  year: string
  /** Which sub-section this certificate belongs to */
  section: CertSection
  /** Badge label shown on card */
  category: string
  description: string
  skills: string[]
  verified?: boolean
  credentialUrl?: string
  /** Optional certificate image path inside /public — you can add later */
  image?: string
}

// ── Achievement types ─────────────────────────────────────────────────────────
export interface Achievement {
  title: string
  /** Short subtitle shown on card (e.g., "Novitech Solutions · 2025") */
  subtitle?: string
  description: string
  /** Detailed description shown in modal */
  detailDescription?: string
  year: string
  category: AchievementCategory
  image?: string
  link?: string
  /** Extra detail fields shown in modal (e.g., Score, Rank) */
  meta?: { label: string; value: string }[]
}

// ── Project types ─────────────────────────────────────────────────────────────
export interface ProjectResult {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  category: ProjectCategory
  featured?: boolean
  image: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  details: {
    overview: string
    methodology: string[]
    problemStatement?: string
    dataset?: string
    results?: string
    metrics?: ProjectResult[]
  }
  subProjects?: SubProject[]
}

export interface SubProject {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Certification {
  title: string
  issuer: string
  year: string
  credentialUrl?: string
  description?: string
  category?: CertificationCategory
  verified?: boolean
  image?: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  title: string
  degree: string
  graduationYear: string
  location: string
  email: string
  shortIntro: string
  summary: string
  objective: string
  resumeUrl: string
  social: {
    github: string
    linkedin: string
  }
}
