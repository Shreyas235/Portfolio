import { useRef } from 'react'
import { motion, useScroll, useSpring, type Variants } from 'framer-motion'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { experiencePoints } from '@/data/experience'
import { listItem, listParent } from '@/utils/animations'

/** Timeline line draws as you scroll, dots pop in. */
export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })
  const dot: Variants = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: 'spring', stiffness: 500, damping: 18 } },
  }
  return (
    <section id="experience" className="py-20">
      <Heading text="Experience" />
      <Reveal delay={0.1}>
        <div ref={ref} className="touch-glow-soft card card-glow-soft rounded-3xl p-6">
          <div className="flex flex-wrap justify-between gap-2">
            <motion.h3 className="text-2xl font-bold"
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              Frontend Web Developer, BK'S Tech Solutions
            </motion.h3>
            <motion.span className="muted"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              Apr 2025 – Present
            </motion.span>
          </div>
          <p className="mt-1 flex items-center gap-2 font-medium text-accent">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Full-time
          </p>

          <div className="relative mt-5 pl-7">
            {/* faint track + gradient line that fills with scroll */}
            <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-accent/20" />
            <motion.div aria-hidden style={{ scaleY: line, originY: 0 }}
              className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-gradient-to-b from-accent to-glow" />
            <motion.ul variants={listParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="muted grid gap-4 text-justify hyphens-auto">
              {experiencePoints.map((t) => (
                <motion.li key={t} variants={listItem} whileHover={{ x: 4 }} className="relative">
                  <motion.span variants={dot} aria-hidden
                    className="absolute -left-7 top-1 h-4 w-4 rounded-full border-2 border-accent bg-white dark:bg-[#12132a]" />
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
