import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '@/utils/media'

/** The 3D hero only renders when WebGL exists and the visitor hasn't asked for reduced motion. */
export function useCanShow3D() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const gl = !!document.createElement('canvas').getContext('webgl')
    setShow(!prefersReducedMotion() && gl)
  }, [])
  return show
}
