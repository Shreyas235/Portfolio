import { useEffect, useRef, type ReactNode } from 'react'
import { motion, useSpring, type MotionValue } from 'framer-motion'

export function Repel({ children, mx, my }: { children: ReactNode; mx: MotionValue<number>; my: MotionValue<number> }) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useSpring(0, { stiffness: 220, damping: 12 })
  const y = useSpring(0, { stiffness: 220, damping: 12 })
  useEffect(() => {
    const run = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      // subtract the current push so the chip's "home" position stays stable
      const dx = r.left + r.width / 2 - x.get() - mx.get()
      const dy = r.top + r.height / 2 - y.get() - my.get()
      const d = Math.hypot(dx, dy)
      const R = 110
      if (d < R && d > 0) {
        const f = (1 - d / R) * 46
        x.set((dx / d) * f)
        y.set((dy / d) * f)
      } else {
        x.set(0)
        y.set(0)
      }
    }
    const a = mx.on('change', run)
    const b = my.on('change', run)
    return () => { a(); b() }
  }, [mx, my, x, y])
  return <motion.span ref={ref} style={{ x, y }} className="inline-block">{children}</motion.span>
}
