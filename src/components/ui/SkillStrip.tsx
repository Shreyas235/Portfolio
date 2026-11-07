import ScrollVelocity from '@/components/reactbits/ScrollVelocity'

/** Full-width marquee that speeds up with scroll velocity (React Bits). Sits between hero and about. */
export function SkillStrip() {
  return (
    <div aria-hidden className="relative left-1/2 -mt-4 mb-4 w-screen -translate-x-1/2">
      <ScrollVelocity
        texts={['React ✦ JavaScript ✦ Figma ✦ WordPress', 'UI/UX ✦ Responsive ✦ Material UI ✦ Divi']}
        velocity={60} fadeEdges outlineAlternate fontSize="clamp(2.2rem, 7vw, 5rem)" fontWeight={800}
        color="#7c6cff" className="uppercase" parallaxClassName="py-1" scrollerClassName="" gap={28} />
    </div>
  )
}
