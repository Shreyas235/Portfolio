import { MotionConfig } from 'framer-motion'
import { About } from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import { Experience } from '@/components/experience/Experience'
import { Hero } from '@/components/hero/Hero'
import { BackToTop } from '@/components/layout/BackToTop'
import { Header } from '@/components/layout/Header'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'
import { MoreSites } from '@/components/sites/MoreSites'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { useTheme } from '@/hooks/useTheme'

export default function App() {
  const { dark, toggle } = useTheme()
  const scrolled = useScrolledPast(120)
  const progress = useScrollProgress()

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress progress={progress} />
      <Header dark={dark} onToggleTheme={toggle} />

      <main id="top" className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <MoreSites />
        <Experience />
        <Contact />
      </main>

      <BackToTop visible={scrolled} progress={progress} />
    </MotionConfig>
  )
}
