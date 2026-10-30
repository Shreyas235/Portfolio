import type { Variants } from 'framer-motion'

export const chipList: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
export const chipItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 22 } },
}
export const listParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
export const listItem: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
