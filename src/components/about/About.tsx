import { motion, useMotionValue, useSpring, useTransform, type Variants } from 'framer-motion'
import photo from '@/assets/images/profile.jpg'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { aboutStats, aboutText } from '@/data/about'
import { chipItem, chipList } from '@/utils/animations'
import { Counter } from './Counter'

export function About() {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [10, -10]), { stiffness: 160, damping: 16 })
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 160, damping: 16 })
  const words = aboutText.split(' ')
  const wordParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.025 } } }
  const word: Variants = {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-[auto_1fr]">
      {/* photo */}
      <motion.div className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72" style={{ perspective: 900 }}
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          px.set((e.clientX - r.left) / r.width)
          py.set((e.clientY - r.top) / r.height)
        }}
        onPointerLeave={() => { px.set(0.5); py.set(0.5) }}>
        {/* spinning glow ring */}
        <div aria-hidden className="absolute -inset-2 overflow-hidden rounded-[3rem] opacity-70 blur-md">
          <motion.div className="absolute -inset-[50%]"
            style={{ background: 'conic-gradient(from 0deg, #7c6cff, #35d6ff, #ff4d8d, #7c6cff)' }}
            animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
        </div>
        <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="h-full w-full"
          animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="gloss relative h-full w-full overflow-hidden rounded-[2.5rem] p-1.5">
            <img src={photo} alt="Shreyas Kowndinya R" className="h-full w-full rounded-[2.1rem] object-cover" />
          </div>
        </motion.div>
        {/* floating badges */}
        <motion.span aria-hidden className="gloss absolute -right-3 top-6 rounded-full px-3 py-1 text-xs font-bold"
          animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
          ⚛ React
        </motion.span>
        <motion.span aria-hidden className="gloss absolute -left-3 bottom-8 rounded-full px-3 py-1 text-xs font-bold"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          ✦ Figma
        </motion.span>
      </motion.div>

      {/* text */}
      <div>
        <Heading text="About me" className="mb-3 text-4xl font-extrabold sm:text-5xl" lettersClass="justify-center md:justify-start" />
        <Reveal delay={0.1}>
          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-accent md:justify-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Open to internships and entry-level roles
          </p>
        </Reveal>
        <motion.p variants={wordParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          className="muted text-justify text-lg hyphens-auto md:hyphens-none">
          {words.map((w, i) => (
            <span key={i}><motion.span variants={word}>{w}</motion.span>{' '}</span>
          ))}
        </motion.p>
        <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-6 grid grid-cols-3 gap-3">
          {aboutStats.map((s) => (
            <motion.div key={s.label} variants={chipItem} whileHover={{ y: -4, scale: 1.04 }} className="card card-glow rounded-2xl p-3 text-center">
              <p className="text-3xl font-extrabold text-accent"><Counter to={s.n} suffix={s.s} /></p>
              <p className="muted text-xs font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
