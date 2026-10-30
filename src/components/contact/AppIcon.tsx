import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import type { Social } from '@/data/contact'
import { chipItem } from '@/utils/animations'

export function AppIcon({ label, href, path, bg, glow }: Social) {
  const external = !href.startsWith('mailto:')
  return (
    <motion.a variants={chipItem} whileHover={{ y: -5 }} whileTap={{ scale: 0.94 }} href={href} aria-label={label}
      target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
      style={{ '--glow': glow } as CSSProperties}
      className="group flex w-14 flex-col items-center gap-2">
      <span className="grid h-12 w-12 place-items-center rounded-full text-white shadow-md transition-shadow duration-300 group-hover:shadow-[0_8px_26px_2px_var(--glow)] [@media(hover:none)]:shadow-[0_8px_26px_2px_var(--glow)]" style={{ background: bg }}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden><path d={path} /></svg>
      </span>
      <span className="muted text-xs font-medium">{label}</span>
    </motion.a>
  )
}
