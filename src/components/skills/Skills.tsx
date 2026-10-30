import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heading } from '@/components/ui/Heading'
import { skills } from '@/data/skills'
import { SkillCard } from './SkillCard'

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 160])
  return (
    <section id="skills" ref={ref} className="relative py-12">
      <motion.div aria-hidden style={{ y: y1 }} className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <motion.div aria-hidden style={{ y: y2 }} className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-glow/25 blur-3xl" />
      <Heading text="What I do" className="relative mb-8 text-4xl font-extrabold sm:text-5xl" />
      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((k, i) => <SkillCard key={k.title} k={k} i={i} />)}
      </div>
    </section>
  )
}
