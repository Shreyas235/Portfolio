import { motion } from 'framer-motion'
import { navLinks } from '@/data/nav'

export function Header({ dark, onToggleTheme }: { dark: boolean; onToggleTheme: () => void }) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
            <nav aria-label="Main" className="gloss relative flex items-center gap-1 rounded-full px-3 py-2">
              <motion.a href="#top" aria-label="Back to top"
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.12, rotate: -4 }} whileTap={{ scale: 0.95 }}
                className="shimmer inline-block px-3 text-lg font-extrabold tracking-tight">SK</motion.a>
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href} className="hidden rounded-full px-3 py-1.5 text-sm font-medium hover:bg-white/20 sm:block">{label}</a>
              ))}
              <button onClick={onToggleTheme} aria-label="Toggle dark and light theme"
                className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-accent text-white shadow-lg">{dark ? '☀' : '☾'}</button>
            </nav>
          </header>
  )
}
