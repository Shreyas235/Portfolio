/** A single-path brand glyph (Simple Icons style, 24x24 viewBox). */
export function BrandIcon({ path, size = 20 }: { path: string; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  )
}
