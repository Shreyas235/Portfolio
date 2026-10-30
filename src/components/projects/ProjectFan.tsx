import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { projects } from '@/data/projects'

/** Selected work: a fan of cards you can swipe, click or step through. */
export function ProjectFan() {
  const n = projects.length
  const [active, setActive] = useState(0)
  const [interacted, setInteracted] = useState(false)
  const [w, setW] = useState(300)
  const stage = useRef<HTMLDivElement>(null)
  const panned = useRef(false)
  const inView = useInView(stage, { once: true, margin: '-120px' })

  useEffect(() => {
    const f = () => setW(Math.min(340, Math.round(window.innerWidth * 0.62)))
    f()
    window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])

  const show = (i: number) => { setInteracted(true); setActive(i) }
  const go = (d: number) => show((active + d + n) % n)
  const offsetOf = (i: number) => {
    let o = (((i - active) % n) + n) % n
    if (o > n / 2) o -= n
    return o
  }
  const pick = (i: number, o: number) => {
    if (o === 0) window.open(projects[i].url, '_blank', 'noopener,noreferrer')
    else show(i)
  }
  const h = Math.round(w * 1.4)
  const p = projects[active]

  return (
    <div>
      <motion.div ref={stage} className="relative mx-auto w-full max-w-3xl select-none" style={{ height: h + 70, touchAction: 'pan-y' }}
        onPointerDown={() => { panned.current = false }}
        onPan={(_, info) => { if (Math.abs(info.offset.x) > 8) panned.current = true }}
        onPanEnd={(_, info) => { if (Math.abs(info.offset.x) > 50) go(info.offset.x < 0 ? 1 : -1) }}>
        {projects.map((pr, i) => {
          const o = offsetOf(i)
          const target = { opacity: 1, x: o * w * 0.74, y: Math.abs(o) * 34, rotate: o * 9, scale: o === 0 ? 1 : 0.9 }
          return (
            <motion.div key={pr.title} role="button" tabIndex={0}
              aria-label={o === 0 ? `Open ${pr.title}` : `Show ${pr.title}`}
              onClick={() => { if (!panned.current) pick(i, o) }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(i, o) } }}
              initial={{ opacity: 0, x: 0, y: 160, rotate: 0, scale: 0.6 }}
              animate={inView ? { ...target, transition: { type: 'spring', stiffness: 150, damping: 18, delay: interacted || o === 0 ? 0 : 0.2 } } : undefined}
              whileHover={inView ? { y: target.y - 10, transition: { type: 'spring', stiffness: 300, damping: 20 } } : undefined}
              style={{ width: w, height: h, zIndex: 10 - Math.abs(o) }}
              className="absolute inset-x-0 top-0 mx-auto cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl shadow-accent/25 outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <img src={pr.img} alt={`${pr.title} screenshot`} draggable={false} className={`h-full w-full object-cover ${pr.pos}`} />
              <div aria-hidden className={`absolute inset-0 transition-colors duration-300 ${o === 0 ? 'bg-transparent' : 'bg-black/30'}`} />
              {o === 0 && <span aria-hidden className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black">Open ↗</span>}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16 text-white">
                <p className="text-xs font-medium text-white/70">{pr.tag}</p>
                <p className="text-xl font-extrabold">{pr.title}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <Reveal delay={0.3}>
        <div className="mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              <p className="text-sm font-medium text-accent">{p.tag}</p>
              <h3 className="mt-1 text-3xl font-extrabold sm:text-4xl">{p.title}</h3>
              <p className="muted mx-auto mt-3 max-w-xl">{p.text}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-accent underline underline-offset-4">{p.cta} ↗</a>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous project" className="hero-btn card card-glow grid h-11 w-11 place-items-center rounded-full"><ChevronLeft size={20} aria-hidden /></button>
            <div className="flex gap-2">
              {projects.map((q, i) => (
                <button key={q.title} onClick={() => show(i)} aria-label={`Show ${q.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-accent' : 'w-2.5 bg-accent/30'}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next project" className="hero-btn card card-glow grid h-11 w-11 place-items-center rounded-full"><ChevronRight size={20} aria-hidden /></button>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
