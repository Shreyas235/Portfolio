import { useEffect, useState } from 'react'

/** True once the page has been scrolled further than `offset` pixels. */
export function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const f = () => setPast(window.scrollY > offset)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [offset])
  return past
}
