import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Knot() {
  const ref = useRef<Mesh>(null)
  useFrame(({ pointer }, dt) => {
    if (!ref.current) return
    ref.current.rotation.x += dt * 0.25
    ref.current.rotation.y += (pointer.x * 1.2 - ref.current.rotation.y * 0.0) * dt * 0.6 + dt * 0.2
    ref.current.position.x += (pointer.x * 0.4 - ref.current.position.x) * 0.05
    ref.current.position.y += (pointer.y * 0.3 - ref.current.position.y) * 0.05
  })
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.34, 220, 32]} />
      <meshPhysicalMaterial color="#7c6cff" metalness={0.5} roughness={0.12} clearcoat={1} clearcoatRoughness={0.05} />
    </mesh>
  )
}
export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4.6], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={50} color="#35d6ff" />
      <Knot />
    </Canvas>
  )
}
