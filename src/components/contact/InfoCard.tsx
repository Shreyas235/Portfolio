import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, type LucideIcon } from 'lucide-react'
import { chipItem } from '@/utils/animations'

export function InfoCard({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* clipboard blocked */ }
  }
  return (
    <motion.div variants={chipItem} whileHover={{ y: -4 }}>
      <div className="hero-btn card card-glow flex items-center gap-3 rounded-2xl p-4 text-left">
        <a href={href} className="flex min-w-0 flex-1 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><Icon size={20} aria-hidden /></span>
          <span className="min-w-0">
            <span className="muted block text-xs font-medium">{label}</span>
            <span className="block truncate text-sm font-bold sm:text-base">{value}</span>
          </span>
        </a>
        <button onClick={copy} aria-label={`Copy ${label}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-accent/15">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={copied ? 'done' : 'copy'}
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}>
              {copied ? <Check size={16} className="text-accent" aria-hidden /> : <Copy size={16} aria-hidden />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  )
}
