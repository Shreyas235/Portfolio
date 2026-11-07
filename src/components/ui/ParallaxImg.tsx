import { useLayoutEffect, useRef, type ImgHTMLAttributes } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Image that drifts slowly inside its frame while you scroll past (put it in an overflow-hidden box). */
export function ParallaxImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { yPercent: -7, scale: 1.15 }, {
        yPercent: 7, scale: 1.15, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    })
    return () => ctx.revert()
  }, [])
  return <img ref={ref} {...props} />
}
