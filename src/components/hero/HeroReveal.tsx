import type { RefObject } from 'react'
import { HeroActionsGhost } from './HeroActionsGhost'

/**
 * Dark/light "blueprint" copy of the hero. It's clipped to a liquid blob that follows the cursor
 * (see useLiquidReveal), so moving the mouse reveals the wireframe underneath.
 */
export function HeroReveal({ revealRef }: { revealRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={revealRef} aria-hidden
      style={{ clipPath: 'circle(0px at 0 0)', left: '50%', width: '100vw', marginLeft: '-50vw' }}
      className="pointer-events-none absolute inset-y-0 z-20 overflow-hidden bg-[#0e0f22] [background-image:radial-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[#f4f5ff] dark:[background-image:radial-gradient(rgba(20,21,43,.16)_1px,transparent_1px)]">
      <div style={{ width: 'var(--hero-w, min(69rem, calc(100vw - 3rem)))' }} className="mx-auto grid h-full grid-cols-1 items-center gap-6 pt-28 md:grid-cols-2">
        <div className="relative">
          <p className="mb-3 font-medium text-white/60 dark:text-[#14152b]/60">Hi, I'm</p>
          <div className="relative w-fit outline outline-1 outline-offset-4 outline-dashed outline-white/40 dark:outline-[#14152b]/40">
            <h1 className="shimmer text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">Shreyas<br />Kowndinya R</h1>
            <span className="absolute -top-[1.4rem] right-0 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white outline-none">H1 · 72px</span>
          </div>
          <p className="mt-4 h-9 text-2xl font-bold text-white dark:text-[#14152b]">Figma → React</p>
          <p className="mt-3 max-w-md text-lg text-white/80 dark:text-[#14152b]/80">Pixel-perfect in Figma, production-ready in React. One workflow, from layout to launch.</p>
          <HeroActionsGhost />
        </div>
        <div className="relative h-80 md:h-[30rem]">
          <div className="absolute inset-8 rounded-2xl border border-dashed border-white/40 dark:border-[#14152b]/40">
            {['-left-1.5 -top-1.5', '-right-1.5 -top-1.5', '-bottom-1.5 -left-1.5', '-bottom-1.5 -right-1.5'].map((c) => (
              <span key={c} className={`absolute h-3 w-3 border border-white bg-[#0e0f22] dark:border-[#14152b] dark:bg-[#f4f5ff] ${c}`} />
            ))}
            <span className="absolute -top-7 left-0 rounded bg-accent px-2 py-0.5 font-mono text-xs text-white">Hero3D · 3D scene</span>
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-accent to-glow opacity-80 blur-2xl" />
            </div>
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-white/80 dark:text-[#14152b]/80">
              <span className="inline-flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: '#7c6cff' }} />#7C6CFF</span>
              <span className="inline-flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: '#35d6ff' }} />#35D6FF</span>
              <span className="inline-flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: '#0e0f22', border: '1px solid rgba(255,255,255,.5)' }} />#0E0F22</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
