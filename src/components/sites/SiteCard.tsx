import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { Tilt } from '@/components/ui/Tilt'
import type { Site } from '@/data/sites'

export function SiteCard({ x, i }: { x: Site; i: number }) {
  const [c1, c2] = x.grad.split(',')
  return (
    <Reveal delay={(i % 3) * 0.1} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]">
                      <Tilt className="touch-glow !p-0 overflow-hidden">
                        <a href={x.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col">
                          <motion.div className="relative grid h-32 place-items-center overflow-hidden"
                            style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2}, ${c1})`, backgroundSize: '200% 200%' }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 9 + i, repeat: Infinity, ease: 'linear' }}>
                            <motion.div aria-hidden animate={{ x: [0, -18, 0], y: [0, 14, 0] }} transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
                              className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/30 blur-xl" />
                            <motion.span className="relative" animate={{ y: [0, -7, 0], rotate: [0, -5, 5, 0] }} transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}>
                              <x.icon size={52} className="text-white drop-shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-125" aria-hidden />
                            </motion.span>
                            <span aria-hidden className="pointer-events-none absolute inset-y-0 left-[-40%] w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/45 to-transparent opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
                            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                              <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                              </span>
                              {x.type}
                            </span>
                          </motion.div>
                          <div className="flex flex-1 flex-col p-5">
                            <h3 className="flex items-center justify-between text-xl font-bold"><span>{x.name}</span><span className="text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden>↗</span></h3>
                            <p className="muted mt-2 flex-1 text-sm">{x.text}</p>
                            <span className="mt-4 w-fit bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-bottom bg-no-repeat pb-0.5 text-sm font-bold text-accent transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">{x.url.replace('https://', '').replace('/', '')}</span>
                          </div>
                        </a>
                      </Tilt>
                    </Reveal>

  )
}
