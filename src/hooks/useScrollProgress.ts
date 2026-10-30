import { useScroll, useSpring } from 'framer-motion'

/** Smoothed 0 to 1 value for how far the page has been scrolled. */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll()
  return useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
}
