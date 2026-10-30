import { motion, type MotionValue } from 'framer-motion'

export function ScrollProgress({ progress }: { progress: MotionValue<number> }) {
  return (
    <motion.div aria-hidden style={{ scaleX: progress }} className="shimmer-bar fixed inset-x-0 top-0 z-[60] h-1 origin-left" />
  )
}
