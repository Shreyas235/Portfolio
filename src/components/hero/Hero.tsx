import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useCanShow3D } from '@/hooks/useCanShow3D'
import { useLiquidReveal } from '@/hooks/useLiquidReveal'
import { HeroActions } from './HeroActions'
import { HeroReveal } from './HeroReveal'
import { Typing } from './Typing'

const Hero3D = lazy(() => import('./Hero3D'))

export function Hero() {
  const reveal = useLiquidReveal()
  const show3d = useCanShow3D()
  return (
    <section className="relative grid min-h-screen grid-cols-1 items-center gap-6 pt-28 md:grid-cols-2">
              <motion.div aria-hidden
                animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="pointer-events-none absolute -left-32 top-24 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-3xl" />
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
                <p className="muted mb-3 font-medium">Hi, I'm</p>
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">Shreyas<br />Kowndinya R</h1>
                <p className="shimmer mt-4 h-9 text-2xl font-bold" aria-label="Frontend Developer, UI/UX Designer, WordPress Builder"><Typing /></p>
                <p className="mt-3 max-w-md text-lg">I design and build fast, good-looking websites and web apps that people enjoy using.</p>
                <HeroActions />
              </motion.div>
              <div className="relative h-80 md:h-[30rem]">
                {show3d && <Suspense fallback={null}><Hero3D /></Suspense>}
              </div>

              {reveal.enabled && <HeroReveal revealRef={reveal.ref} />}
            </section>
  )
}
