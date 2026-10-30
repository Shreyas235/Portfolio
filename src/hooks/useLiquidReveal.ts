import { useEffect, useRef, useState } from 'react'
import { trailPath, type Pt } from '@/utils/liquidTrail'
import { prefersReducedMotion } from '@/utils/media'

const TRAIL_N = 16      // points along the body
const TRAIL_LAG = 42    // ms between each body point (longer = longer tail)
const DESKTOP_RADIUS = 130  // desktop blob size while the mouse moves (old one was 150)
const MOBILE_RADIUS = 68    // snake size on phones (was 85)
const IDLE_MS = 120

export function useLiquidReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    const el = ref.current
    const sec = el?.parentElement
    if (!enabled || !el || !sec) return
    const touch = matchMedia('(hover: none), (pointer: coarse)').matches
    const isAuto = () => touch || window.innerWidth < 768

    const s = { x: 0, y: 0, vx: 0, vy: 0, r: 0, tx: 0, ty: 0, tr: 0 }
    const last = { x: 0, y: 0, has: false }
    const hist: { x: number; y: number; t: number }[] = []
    let lastMove = 0
    let inside = false

    const setW = () => el.style.setProperty('--hero-w', `${sec.clientWidth}px`)
    setW()
    const ro = new ResizeObserver(setW)
    ro.observe(sec)

    const update = () => {
      if (isAuto() || !last.has) return
      const b = el.getBoundingClientRect()
      s.tx = last.x - b.left
      s.ty = last.y - b.top
      inside = last.y >= b.top && last.y <= b.bottom
    }
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch' || isAuto()) return
      last.x = e.clientX; last.y = e.clientY; last.has = true
      lastMove = performance.now()
      update()
    }
    const onLeave = () => { inside = false }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', update, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    let raf = 0
    let prev = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(Math.max((now - prev) / 16.67, 0.1), 3)
      prev = now
      const k = (f: number) => 1 - Math.pow(1 - f, dt)
      const auto = isAuto()

      if (auto) {
        const w = el.clientWidth, h = el.clientHeight
        const lap = 0.5 - 0.5 * Math.cos(now / 2400)
        s.ty = h * (0.1 + 0.8 * lap)
        s.tx = w * (0.5 + 0.3 * Math.sin(now / 850) + 0.06 * Math.sin(now / 370))
        s.tr = MOBILE_RADIUS
      } else {
        // desktop: visible only while the cursor is moving
        const moving = inside && now - lastMove < IDLE_MS
        const speed = Math.hypot(s.vx, s.vy)
        s.tr = moving ? Math.min(DESKTOP_RADIUS, 75 + speed * 6) : 0
        // when fully hidden, jump to the cursor so it never slides in from the old spot
        if (s.r < 1 && last.has) {
          const b = el.getBoundingClientRect()
          s.x = s.tx = last.x - b.left
          s.y = s.ty = last.y - b.top
          s.vx = s.vy = 0
          hist.length = 0
        }
      }

      const px = s.x, py = s.y
      s.x += (s.tx - s.x) * k(auto ? 0.25 : 0.22)
      s.y += (s.ty - s.y) * k(auto ? 0.25 : 0.22)
      s.vx += ((s.x - px) / dt - s.vx) * k(0.25)
      s.vy += ((s.y - py) / dt - s.vy) * k(0.25)
      // grows quickly, melts away a bit slower like water draining
      s.r += (s.tr - s.r) * k(s.tr > s.r ? 0.2 : 0.09)

      hist.push({ x: s.x, y: s.y, t: now })
      const keep = TRAIL_N * TRAIL_LAG + 200
      while (hist.length > 2 && hist[0].t < now - keep) hist.shift()

      if (s.r < 1) {
        el.style.clipPath = 'circle(0px at 0 0)'
      } else {
        const pts: Pt[] = []
        let j = hist.length - 1
        for (let i = 0; i < TRAIL_N; i++) {
          const target = now - i * TRAIL_LAG
          while (j > 0 && hist[j].t > target) j--
          const a = hist[j], b = hist[Math.min(j + 1, hist.length - 1)]
          const span = b.t - a.t
          const f = span > 0 ? Math.min(Math.max((target - a.t) / span, 0), 1) : 0
          pts.push([a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f])
        }
        el.style.clipPath = `path('${trailPath(pts, s.r, now)}')`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', update)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  return { ref, enabled }
}
