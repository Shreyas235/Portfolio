import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function Letters({ text, className = '' }: { text: string; className?: string }) {
  const from = [124, 108, 255]
  const to = [53, 214, 255]
  const colorAt = (f: number) => `rgb(${from.map((v, c) => Math.round(v + (to[c] - v) * f)).join(',')})`
  const last = Math.max(text.replace(/ /g, '').length - 1, 1)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  let idx = 0
  return (
    <motion.span ref={ref} aria-label={text} className={`flex flex-wrap gap-x-[0.3em] ${className}`}
      initial="hidden" animate={inView ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden className="inline-flex">
          {word.split('').map((ch) => {
            const i = idx++
            return (
              <motion.span key={i} className="inline-block" style={{ color: colorAt(i / last) }}
                variants={{
                  hidden: { y: 70, rotateX: -90, opacity: 0 },
                  show: { y: 0, rotateX: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 14 } },
                }}
                whileHover={{ y: -14, rotate: i % 2 ? 8 : -8, scale: 1.2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
                {ch}
              </motion.span>
            )
          })}
        </span>
      ))}
    </motion.span>
  )
}
