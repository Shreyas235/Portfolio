import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { About } from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import { Experience } from '@/components/experience/Experience'
import { Hero } from '@/components/hero/Hero'
import { BackToTop } from '@/components/layout/BackToTop'
import { Header } from '@/components/layout/Header'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import ClickSpark from '@/components/reactbits/ClickSpark'
import { SkillStrip } from '@/components/ui/SkillStrip'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'
import { MoreSites } from '@/components/sites/MoreSites'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { useTheme } from '@/hooks/useTheme'
import { startSmoothScroll } from '@/utils/smooth'

export default function App() {
  const { dark, toggle } = useTheme()
  const scrolled = useScrolledPast(120)
  const progress = useScrollProgress()
  useEffect(() => startSmoothScroll(), [])

  return (
    <MotionConfig reducedMotion="user">
      <ClickSpark sparkColor={['#7c6cff', '#35d6ff']} shape="star" sparkCount={8} sparkSize={16} sparkRadius={34} duration={650} glow={0.4}>
      <ScrollProgress progress={progress} />
      <Header dark={dark} onToggleTheme={toggle} />

      <main id="top" className="mx-auto w-full max-w-6xl px-6">
        <Hero />
        <SkillStrip />
        <About />
        <Skills />
        <Projects />
        <MoreSites />
        <Experience />
        <Contact />
      </main>

      <BackToTop visible={scrolled} progress={progress} />
      </ClickSpark>
    </MotionConfig>
  )
}
