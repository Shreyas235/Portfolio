import { useState, type MouseEvent, type ReactNode } from 'react'

export function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [s, setS] = useState({ x: 0, y: 0 })
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setS({ x: ((e.clientY - r.top) / r.height - 0.5) * -12, y: ((e.clientX - r.left) / r.width - 0.5) * 12 })
  }
  return (
    <div style={{ perspective: 900 }} className="h-full">
      <div onMouseMove={move} onMouseLeave={() => setS({ x: 0, y: 0 })}
        style={{ transform: `rotateX(${s.x}deg) rotateY(${s.y}deg)`, transformStyle: 'preserve-3d' }}
        className={`card card-glow h-full rounded-3xl p-6 ${className}`}>
        {children}
      </div>
    </div>
  )
}
