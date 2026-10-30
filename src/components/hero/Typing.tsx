import { useEffect, useState } from 'react'
import { roles } from '@/data/hero'
import { prefersReducedMotion } from '@/utils/media'

export function Typing() {
  const [txt, setTxt] = useState(roles[0])
  useEffect(() => {
    if (prefersReducedMotion()) return
    let r = 0, c = 0, del = false
    const id = setInterval(() => {
      const w = roles[r]
      c += del ? -1 : 1
      setTxt(w.slice(0, c))
      if (!del && c === w.length) { del = true; c = w.length + 12 }
      else if (del && c <= 0) { del = false; r = (r + 1) % roles.length; c = 0 }
    }, 70)
    return () => clearInterval(id)
  }, [])
  return <>{txt}<span aria-hidden className="ml-0.5 animate-pulse">|</span></>
}
