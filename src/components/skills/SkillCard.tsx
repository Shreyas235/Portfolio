import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Skill } from '@/data/skills'
import { chipList } from '@/utils/animations'
import { ChipView } from './ChipView'
import { Repel } from './Repel'

const gradText = 'bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent'

export function SkillCard({ k, i }: { k: Skill; i: number }) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const mx = useMotionValue(-9999)
  const my = useMotionValue(-9999)
  const rx = useSpring(useTransform(py, [0, 1], [12, -12]), { stiffness: 200, damping: 18 })
  const ry = useSpring(useTransform(px, [0, 1], [-12, 12]), { stiffness: 200, damping: 18 })
  const gx = useTransform(px, (v) => `${v * 100}%`)
  const gy = useTransform(py, (v) => `${v * 100}%`)
  const spot = useMotionTemplate`radial-gradient(280px circle at ${gx} ${gy}, rgba(124,108,255,.30), transparent 70%)`

  return (
    <motion.div className="h-full" style={{ perspective: 1000 }}
      initial={{ opacity: 0, rotateY: i % 2 ? 80 : -80, y: 80, scale: 0.8 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 14, delay: i * 0.12 }}>
      <motion.div
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          px.set((e.clientX - r.left) / r.width)
          py.set((e.clientY - r.top) / r.height)
          mx.set(e.clientX)
          my.set(e.clientY)
        }}
        onPointerLeave={() => { px.set(0.5); py.set(0.5); mx.set(-9999); my.set(-9999) }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.03 }}
        className="group relative h-full overflow-hidden rounded-3xl p-[2px]">
        {/* spinning rainbow border */}
        <motion.div aria-hidden className="absolute -inset-[50%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'conic-gradient(from 0deg, #7c6cff, #35d6ff, #ff4d8d, #ffc857, #3ddc97, #7c6cff)' }}
          animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
        <div className="card relative h-full overflow-hidden rounded-[1.4rem] p-6 !bg-white dark:!bg-[#12132a]">
          {/* cursor spotlight */}
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spot }} />
          <h3 className="relative mb-4 flex items-center gap-3 text-2xl font-bold" style={{ transform: 'translateZ(40px)' }}>
            <motion.span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent"
              animate={{ y: [0, -4, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ rotate: 360, scale: 1.25 }}>
              <k.icon size={20} aria-hidden />
            </motion.span>
            <span className={gradText}>{k.title}</span>
          </h3>
          <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative flex flex-wrap gap-2" style={{ transform: 'translateZ(25px)' }}>
            {k.chips.map((c) => (
              <Repel key={c.label} mx={mx} my={my}><ChipView c={c} /></Repel>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
