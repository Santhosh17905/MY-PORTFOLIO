import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { Certifications } from '@/components/sections/certifications'
import { Achievements } from '@/components/sections/achievements'
import { Resume } from '@/components/sections/resume'
import { Contact } from '@/components/sections/contact'
import { BackToTop } from '@/components/back-to-top'
import { MouseSpotlight } from '@/components/mouse-spotlight'

export default function HomePage() {
  return (
    <>
      <MouseSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
