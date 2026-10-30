import { ArrowUp } from 'lucide-react'
import { motion, type MotionValue } from 'framer-motion'

export function BackToTop({ visible, progress }: { visible: boolean; progress: MotionValue<number> }) {
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" tabIndex={visible ? 0 : -1}
            className={`gloss fixed right-5 z-50 grid h-12 w-12 place-items-center rounded-full transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
            style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}>
            <svg aria-hidden viewBox="0 0 48 48" className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" fill="none" strokeWidth="3" strokeLinecap="round">
              <defs>
                <linearGradient id="topRing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#7c6cff" />
                  <stop offset="1" stopColor="#35d6ff" />
                </linearGradient>
              </defs>
              <circle cx="24" cy="24" r="21.5" stroke="currentColor" opacity="0.15" />
              <motion.circle cx="24" cy="24" r="21.5" stroke="url(#topRing)" style={{ pathLength: progress }} />
            </svg>
            <ArrowUp size={20} className="relative" />
          </button>
  )
}
