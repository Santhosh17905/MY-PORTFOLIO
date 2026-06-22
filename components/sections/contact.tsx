import { Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Button } from '@/components/ui/button'
import { profile } from '@/data/profile'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    description: 'Best for detailed inquiries',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.social.linkedin,
    description: 'Professional network',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'View my code',
    href: profile.social.github,
    description: 'Browse all repositories',
  },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <ScrollReveal variant="up">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Let's build something intelligent"
            description="I'm actively seeking AI/ML Engineer opportunities. Whether you're a recruiter or fellow engineer, I'd love to hear from you."
          />
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {contactMethods.map((method, i) => (
            <ScrollReveal key={method.label} variant="zoom" delay={i * 80}>
              <a
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="glass gradient-border group flex flex-col items-center gap-4 rounded-xl border border-border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <method.icon className="size-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold">{method.label}</div>
                  <div className="mt-0.5 text-xs font-medium text-primary">{method.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{method.description}</div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden"
              render={<a href={`mailto:${profile.email}`} />}
            >
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
              <Mail className="size-4" />
              Send me an email
            </Button>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              Based in {profile.location} · Open to remote &amp; on-site
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
