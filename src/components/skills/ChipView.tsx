import { motion } from 'framer-motion'
import type { Chip } from '@/data/skills'
import { chipItem } from '@/utils/animations'

export function ChipView({ c }: { c: Chip }) {
  return (
    <motion.span variants={chipItem} whileHover={{ y: -3 }} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium" style={{ borderColor: 'var(--line)' }}>
      {c.si ? (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill={c.si.hex === '000000' ? 'currentColor' : `#${c.si.hex}`}><path d={c.si.path} /></svg>
      ) : c.lu ? <c.lu size={16} className="text-accent" aria-hidden /> : null}
      {c.label}
    </motion.span>
  )
}
