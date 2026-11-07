import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

/** The running Lenis instance (null when smooth scrolling is off, e.g. reduced motion). */
export const getLenis = () => lenis

/**
 * Starts Lenis smooth scrolling and drives it from GSAP's ticker so that
 * ScrollTrigger animations stay perfectly in sync with the smoothed scroll.
 * Returns a cleanup function.
 */
export function startSmoothScroll() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  lenis = new Lenis({
    lerp: 0.1,
    anchors: true, // #links glide to their section (Lenis honours the scroll-padding-top already set in index.css)
  })

  lenis.on('scroll', ScrollTrigger.update)
  const tick = (time: number) => lenis?.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  // images and fonts change the page height after load, so re-measure the scroll triggers
  const refresh = () => ScrollTrigger.refresh()
  window.addEventListener('load', refresh)

  return () => {
    window.removeEventListener('load', refresh)
    gsap.ticker.remove(tick)
    lenis?.destroy()
    lenis = null
  }
}
