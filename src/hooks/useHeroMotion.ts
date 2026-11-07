import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Hero 3D column: eases in on load, then drifts upward a little as the page scrolls. */
export function useHeroMotion<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from(el, { scale: 0.8, opacity: 0, rotate: -6, duration: 1.4, ease: 'power3.out', delay: 0.3 })
      gsap.to(el, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: el, start: 'top 20%', end: 'bottom top', scrub: true } })
    })
    return () => ctx.revert()
  }, [])
  return ref
}
