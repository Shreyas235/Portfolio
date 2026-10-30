export type Pt = [number, number]

// One continuous "water" body: many overlapping circles along the trail.
// Overlapping subpaths merge (nonzero fill), so sharp turns never fold or pinch.
export function trailPath(pts: Pt[], R: number, t: number) {
  const n = pts.length
  const segLen: number[] = []
  let total = 0
  for (let i = 0; i < n - 1; i++) {
    const l = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1])
    segLen.push(l)
    total += l
  }
  // dense enough to look smooth, capped so it stays fast
  const step = Math.max(R * 0.16, total / 90, 3)

  let d = ''
  const circle = (x: number, y: number, r: number) => {
    d += `M${(x - r).toFixed(1)},${y.toFixed(1)}a${r.toFixed(1)},${r.toFixed(1)} 0 1,0 ${(2 * r).toFixed(1)},0a${r.toFixed(1)},${r.toFixed(1)} 0 1,0 ${(-2 * r).toFixed(1)},0Z`
  }
  const radiusAt = (f: number) =>
    R * (1 - 0.68 * Math.pow(f, 0.75)) * (1 + 0.05 * Math.sin(t / 380 + f * 9))

  circle(pts[0][0], pts[0][1], R) // head

  let pos = 0
  let nextAt = step
  for (let i = 0; i < n - 1; i++) {
    const L = segLen[i]
    if (L > 0.01) {
      while (nextAt <= pos + L) {
        const u = (nextAt - pos) / L
        const x = pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u
        const y = pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u
        circle(x, y, radiusAt((i + u) / (n - 1)))
        nextAt += step
      }
    }
    pos += L
  }
  // tail tip so it always ends rounded, even when the cursor is still
  circle(pts[n - 1][0], pts[n - 1][1], radiusAt(1))
  return d
}
