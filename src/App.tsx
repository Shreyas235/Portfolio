import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties, type FormEvent, type MouseEvent, type ReactNode } from 'react'
import { motion, AnimatePresence, MotionConfig, animate, useAnimationControls, useInView, useScroll, useSpring, useMotionValue, useTransform, useMotionTemplate, type MotionValue, type Variants } from 'framer-motion'
import { Code, Palette, Globe, GraduationCap, PenTool, Smartphone, Search, Gauge, LayoutTemplate, Webhook, ArrowUp, ChevronLeft, ChevronRight, Mail, Phone, Copy, Check, Stethoscope, UtensilsCrossed, Building2, Leaf, HardHat, type LucideIcon } from 'lucide-react'
import { siGithub, siWhatsapp, siInstagram, siGmail, siHtml5, siCss, siJavascript, siReact, siMui, siFigma, siWordpress, siTailwindcss, siTypescript, siRedux, siNextdotjs, siGit, siAxios, siReactrouter, type SimpleIcon } from 'simple-icons'
import photo from './profile.jpg'
import music from './shots/music.jpg'
import bk from './shots/bk.jpg'
import wdw from './shots/wdw.jpg'
import './consoleArt'

const Hero3D = lazy(() => import('./Hero3D'))

const gradText = 'bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent'

const links = [['About', '#about'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]

const projects = [
  { title: 'Windreamway CRM', tag: 'React · Material UI · Node.js', url: 'https://windreamway.com/', cta: 'Visit live site', img: wdw, pos: 'object-top', text: 'CRM and membership system: admin dashboards, searchable tables, PDF reports, payments and SMS support.' },
  { title: "BK's Tech Solutions", tag: 'WordPress · Divi · JavaScript', url: 'https://bkstechsolutions.com/', cta: 'Visit live site', img: bk, pos: 'object-top', text: 'Responsive company website with clear service pages, strong calls to action and SEO-friendly structure.' },
  { title: 'Music App UI', tag: 'Figma · UI/UX', url: 'https://www.figma.com/proto/68JkFcDcVlk2zuKHRNFSAh/Music-App?node-id=74-1645&p=f&viewport=204%2C376%2C0.66&t=QcO02V7dDtIML4zS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1', cta: 'Open Figma prototype', img: music, pos: 'object-top', text: 'Ad-free music streaming app design with a bold hero, clear sign-up and a five-tab bottom navigation.' },
]
const sites = [
  { name: 'Reha Diagnostics', url: 'https://rehadiagnostics.com/', type: 'Healthcare', icon: Stethoscope, grad: '#35d6ff,#7c6cff', text: 'Reha Diagnostics Center is a diagnostic center focused on dependable testing and patient care, with a clean website that helps patients find services and reach the center easily.' },
  { name: 'Nityotsava Residency', url: 'https://nityotsavaresidency.com/', type: 'Hospitality', icon: UtensilsCrossed, grad: '#ff9a62,#ff4d8d', text: 'Nityotsava Residency is a hotel cum restaurant offering comfortable stays and dining, with a welcoming website that shows the property and makes booking enquiries simple.' },
  { name: 'Ananta Habitat', url: 'https://ananthabitat.com/', type: 'Real estate', icon: Building2, grad: '#7c6cff,#35d6ff', text: 'Ananta Habitat is a builders and developers company creating residential spaces, with a website that presents its projects clearly and builds buyer trust.' },
  { name: 'Vegwings Agro Pvt. Ltd.', url: 'https://vegwingsagro.com/', type: 'Food processing', icon: Leaf, grad: '#3ddc97,#35d6ff', text: 'Vegwings Agro Pvt. Ltd. is a food processing company that prepares fresh vegetables and fruits, cutting, processing and packing them with strict hygiene. Website shows the company and its products.' },
  { name: 'Raksha Engineers', url: 'https://rakshaengineers.com/', type: 'Construction', icon: HardHat, grad: '#ffc857,#ff7a45', text: 'Raksha Engineers is a development and construction company, with a professional website that showcases its work and makes it easy for clients to get in touch.' },
]

type Chip = { label: string; si?: SimpleIcon; lu?: LucideIcon }
const skills: { title: string; icon: LucideIcon; chips: Chip[] }[] = [
  { title: 'Build', icon: Code, chips: [{ label: 'HTML5', si: siHtml5 }, { label: 'CSS3', si: siCss }, { label: 'JavaScript', si: siJavascript }, { label: 'React.js', si: siReact }, { label: 'Material UI', si: siMui }] },
  { title: 'Design', icon: Palette, chips: [{ label: 'Figma', si: siFigma }, { label: 'UI/UX design', lu: PenTool }, { label: 'Responsive layouts', lu: Smartphone }] },
  { title: 'Websites', icon: Globe, chips: [{ label: 'WordPress', si: siWordpress }, { label: 'Divi Builder', lu: LayoutTemplate }, { label: 'SEO basics', lu: Search }, { label: 'Performance', lu: Gauge }] },
  { title: 'Learning now', icon: GraduationCap, chips: [{ label: 'React Hooks', lu: Webhook }, { label: 'React Router', si: siReactrouter }, { label: 'Axios', si: siAxios }, { label: 'Redux Toolkit', si: siRedux }, { label: 'Tailwind CSS', si: siTailwindcss }, { label: 'TypeScript', si: siTypescript }, { label: 'Next.js', si: siNextdotjs }, { label: 'Git', si: siGit }] },
]

const experiencePoints = [
  'Build responsive websites, landing pages and web applications using HTML5, CSS3, JavaScript, React.js and WordPress (Divi Builder).',
  'Built around 10 client websites, mostly in WordPress, extended with custom HTML, CSS and JavaScript.',
  'Design UI/UX for web applications in Figma and build the designs in code, from layout to final interface.',
  'Work directly with clients to turn business requirements into user-friendly, visually appealing interfaces.',
  'Apply SEO best practices, performance optimization and mobile-first design so sites work well on every device.',
  'Collaborate with the development team to deliver scalable web solutions.',
]

/* ---------- contact details: replace the phone placeholders ---------- */
const EMAIL = 'skowndinya518@gmail.com'
const PHONE_DISPLAY = '+91 99017 87660'
const PHONE_LINK = '+919901787660'
const WHATSAPP_NUMBER = PHONE_LINK.replace(/\D/g, '') // digits only, used by wa.me
const WHATSAPP_GREETING = "Hi Shreyas, I saw your portfolio and I'd like to connect." // pre-filled in the chat
const INSTAGRAM_USER = '_shreyas_kowndinya_' // the part after instagram.com/

const socials = [
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`, path: siWhatsapp.path, bg: '#25D366', glow: 'rgba(37, 211, 102, .9)' },
  { label: 'Instagram', href: `https://instagram.com/${INSTAGRAM_USER}`, path: siInstagram.path, bg: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)', glow: 'rgba(214, 41, 118, .9)' },
  { label: 'Email', href: `mailto:${EMAIL}`, path: siGmail.path, bg: '#EA4335', glow: 'rgba(234, 67, 53, .9)' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyas-kowndinya-r-89811528a/', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', bg: '#0A66C2', glow: 'rgba(10, 102, 194, .9)' },
  { label: 'GitHub', href: 'https://github.com/Shreyas235', path: siGithub.path, bg: '#24292f', glow: 'rgba(110, 118, 129, .9)' },
]

/* ---------- animation helpers ---------- */
const chipList: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const chipItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 22 } },
}
const listParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const listItem: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })
  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="inline-block"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

function ChipView({ c }: { c: Chip }) {
  return (
    <motion.span variants={chipItem} whileHover={{ y: -3 }} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium" style={{ borderColor: 'var(--line)' }}>
      {c.si ? (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill={c.si.hex === '000000' ? 'currentColor' : `#${c.si.hex}`}><path d={c.si.path} /></svg>
      ) : c.lu ? <c.lu size={16} className="text-accent" aria-hidden /> : null}
      {c.label}
    </motion.span>
  )
}

function InfoCard({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* clipboard blocked */ }
  }
  return (
    <motion.div variants={chipItem} whileHover={{ y: -4 }}>
      <div className="hero-btn card card-glow flex items-center gap-3 rounded-2xl p-4 text-left">
        <a href={href} className="flex min-w-0 flex-1 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent"><Icon size={20} aria-hidden /></span>
          <span className="min-w-0">
            <span className="muted block text-xs font-medium">{label}</span>
            <span className="block truncate text-sm font-bold sm:text-base">{value}</span>
          </span>
        </a>
        <button onClick={copy} aria-label={`Copy ${label}`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-accent/15">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={copied ? 'done' : 'copy'}
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15 }}>
              {copied ? <Check size={16} className="text-accent" aria-hidden /> : <Copy size={16} aria-hidden />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  )
}

function AppIcon({ label, href, path, bg, glow }: { label: string; href: string; path: string; bg: string; glow: string }) {
  const external = !href.startsWith('mailto:')
  return (
    <motion.a variants={chipItem} whileHover={{ y: -5 }} whileTap={{ scale: 0.94 }} href={href} aria-label={label}
      target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
      style={{ '--glow': glow } as CSSProperties}
      className="group flex w-14 flex-col items-center gap-2">
      <span className="grid h-12 w-12 place-items-center rounded-full text-white shadow-md transition-shadow duration-300 group-hover:shadow-[0_8px_26px_2px_var(--glow)] [@media(hover:none)]:shadow-[0_8px_26px_2px_var(--glow)]" style={{ background: bg }}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden><path d={path} /></svg>
      </span>
      <span className="muted text-xs font-medium">{label}</span>
    </motion.a>
  )
}

const roles = ['Frontend Developer', 'UI/UX Designer', 'WordPress Builder']
function Typing() {
  const [txt, setTxt] = useState(roles[0])
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
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

type FormKey = 'name' | 'email' | 'msg'
type FormErrors = Partial<Record<FormKey, string>>

function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sent, setSent] = useState(false)
  const shake = useAnimationControls()

  const update = (k: FormKey, v: string) => {
    setF({ ...f, [k]: v })
    if (errors[k]) setErrors({ ...errors, [k]: undefined })
  }

  const send = (e: FormEvent) => {
    e.preventDefault()
    const found: FormErrors = {}
    if (!f.name.trim()) found.name = 'Please enter your name'
    if (!f.email.trim()) found.email = 'Please enter your email'
    else if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) found.email = 'Please enter a valid email'
    if (!f.msg.trim()) found.msg = 'Please write a short message'
    setErrors(found)
    if (Object.keys(found).length) {
      shake.start({ x: [0, -10, 10, -8, 8, -4, 4, 0], transition: { duration: 0.45 } })
      return
    }
    setSent(true)
    const text = encodeURIComponent(`Hi Shreyas, I'm ${f.name.trim()} (${f.email.trim()}).\n\n${f.msg.trim()}`)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const field = (k: FormKey) => `card field-glow touch-field w-full rounded-2xl px-4 py-3 outline-none ${errors[k] ? '!border-red-400' : ''}`
  const errorText = (k: FormKey) => (
    <AnimatePresence>
      {errors[k] && (
        <motion.p role="alert" initial={{ opacity: 0, height: 0, y: -4 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden pl-2 pt-1 text-sm font-medium text-red-500">{errors[k]}</motion.p>
      )}
    </AnimatePresence>
  )

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div key="ok" role="status"
          initial={{ opacity: 0, scale: 0.9, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="card mx-auto mt-10 max-w-xl rounded-3xl p-8 text-center"
          style={{ border: '1px solid rgba(34, 197, 94, .55)', boxShadow: '0 12px 40px rgba(34, 197, 94, .25)' }}>
          <svg viewBox="0 0 52 52" className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <motion.circle cx="26" cy="26" r="23" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6 }} />
            <motion.path d="M15 27l8 8 14-16" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
          </svg>
          <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-4 text-2xl font-extrabold">
            Thanks, {f.name.trim().split(' ')[0]}!
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="muted mt-2">
            WhatsApp is opening with your message ready. Just press send there to deliver it.
          </motion.p>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
            onClick={() => { setF({ name: '', email: '', msg: '' }); setSent(false) }}
            className="mt-6 font-bold text-accent underline underline-offset-4">Send another message</motion.button>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={send} animate={shake} exit={{ opacity: 0, y: -10 }}
          className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
          <div>
            <input className={field('name')} placeholder="Your name" aria-label="Your name" aria-invalid={!!errors.name} value={f.name} onChange={(e) => update('name', e.target.value)} />
            {errorText('name')}
          </div>
          <div>
            <input className={field('email')} type="email" placeholder="Your email" aria-label="Your email" aria-invalid={!!errors.email} value={f.email} onChange={(e) => update('email', e.target.value)} />
            {errorText('email')}
          </div>
          <div>
            <textarea className={field('msg')} rows={4} placeholder="Tell me about the role or project" aria-label="Message" aria-invalid={!!errors.msg} value={f.msg} onChange={(e) => update('msg', e.target.value)} />
            {errorText('msg')}
          </div>
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d={siWhatsapp.path} /></svg>
            Send on WhatsApp
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
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

/* ---------- liquid cursor reveal (hero) ---------- */
const REVEAL_RADIUS = 150
const TRAIL_N = 16      // points along the body
const TRAIL_LAG = 42    // ms between each body point (longer = longer tail)

type Pt = [number, number]

// One continuous "water" body: many overlapping circles along the trail.
// Overlapping subpaths merge (nonzero fill), so sharp turns never fold or pinch.
function trailPath(pts: Pt[], R: number, t: number) {
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

const DESKTOP_RADIUS = 130  // desktop blob size while the mouse moves (old one was 150)
const MOBILE_RADIUS = 68    // snake size on phones (was 85)
const IDLE_MS = 120

function useLiquidReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled] = useState(() => !matchMedia('(prefers-reduced-motion: reduce)').matches)

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

function HeroActions({ ghost = false }: { ghost?: boolean }) {
  const liPath = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  const liIcon = <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d={liPath} /></svg>
  const ghIcon = <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d={siGithub.path} /></svg>

  if (ghost) {
    // same sizes as the real buttons so everything lines up; one filled, the rest dotted outlines
    const ring = 'rounded-full border border-dashed border-white/60 font-bold text-white dark:border-[#14152b]/50 dark:text-[#14152b]'
    return (
      <div className="mt-8 w-fit max-w-full">
        <div className="flex flex-wrap gap-3">
          <div className="inline-block"><span className="inline-block rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">See my work</span></div>
          <span className={`${ring} px-6 py-3`}>Contact me</span>
          <span className={`${ring} px-6 py-3`}>Download resume</span>
        </div>
        <div className="mt-3 flex flex-wrap justify-start gap-3 sm:justify-center">
          <span className={`${ring} inline-flex items-center gap-2 px-5 py-2.5`}>{liIcon}LinkedIn</span>
          <span className={`${ring} inline-flex items-center gap-2 px-6 py-3`}>{ghIcon}GitHub</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-8 w-fit max-w-full">
      <div className="flex flex-wrap gap-3">
        <Magnetic>
          <a href="#projects" className="inline-block rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">See my work</a>
        </Magnetic>
        <a href="#contact" className="hero-btn card card-glow rounded-full px-6 py-3 font-bold">Contact me</a>
        <a href="/resume.pdf" download="Shreyas_Kowndinya_Resume.pdf" className="hero-btn card card-glow rounded-full px-6 py-3 font-bold">Download resume</a>
      </div>
      <div className="mt-3 flex flex-wrap justify-start gap-3 sm:justify-center">
        <a href="https://www.linkedin.com/in/shreyas-kowndinya-r-89811528a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-btn card card-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold">
          {liIcon}
          LinkedIn
        </a>
        <a href="https://github.com/Shreyas235" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-btn card card-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold">
          {ghIcon}
          GitHub
        </a>
      </div>
    </div>
  )
}

/* ---------- selected work: fan of cards ---------- */
function ProjectFan() {
  const n = projects.length
  const [active, setActive] = useState(0)
  const [interacted, setInteracted] = useState(false)
  const [w, setW] = useState(300)
  const stage = useRef<HTMLDivElement>(null)
  const panned = useRef(false)
  const inView = useInView(stage, { once: true, margin: '-120px' })

  useEffect(() => {
    const f = () => setW(Math.min(340, Math.round(window.innerWidth * 0.62)))
    f()
    window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])

  const show = (i: number) => { setInteracted(true); setActive(i) }
  const go = (d: number) => show((active + d + n) % n)
  const offsetOf = (i: number) => {
    let o = (((i - active) % n) + n) % n
    if (o > n / 2) o -= n
    return o
  }
  const pick = (i: number, o: number) => {
    if (o === 0) window.open(projects[i].url, '_blank', 'noopener,noreferrer')
    else show(i)
  }
  const h = Math.round(w * 1.4)
  const p = projects[active]

  return (
    <div>
      <motion.div ref={stage} className="relative mx-auto w-full max-w-3xl select-none" style={{ height: h + 70, touchAction: 'pan-y' }}
        onPointerDown={() => { panned.current = false }}
        onPan={(_, info) => { if (Math.abs(info.offset.x) > 8) panned.current = true }}
        onPanEnd={(_, info) => { if (Math.abs(info.offset.x) > 50) go(info.offset.x < 0 ? 1 : -1) }}>
        {projects.map((pr, i) => {
          const o = offsetOf(i)
          const target = { opacity: 1, x: o * w * 0.74, y: Math.abs(o) * 34, rotate: o * 9, scale: o === 0 ? 1 : 0.9 }
          return (
            <motion.div key={pr.title} role="button" tabIndex={0}
              aria-label={o === 0 ? `Open ${pr.title}` : `Show ${pr.title}`}
              onClick={() => { if (!panned.current) pick(i, o) }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(i, o) } }}
              initial={{ opacity: 0, x: 0, y: 160, rotate: 0, scale: 0.6 }}
              animate={inView ? { ...target, transition: { type: 'spring', stiffness: 150, damping: 18, delay: interacted || o === 0 ? 0 : 0.2 } } : undefined}
              whileHover={inView ? { y: target.y - 10, transition: { type: 'spring', stiffness: 300, damping: 20 } } : undefined}
              style={{ width: w, height: h, zIndex: 10 - Math.abs(o) }}
              className="absolute inset-x-0 top-0 mx-auto cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl shadow-accent/25 outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <img src={pr.img} alt={`${pr.title} screenshot`} draggable={false} className={`h-full w-full object-cover ${pr.pos}`} />
              <div aria-hidden className={`absolute inset-0 transition-colors duration-300 ${o === 0 ? 'bg-transparent' : 'bg-black/30'}`} />
              {o === 0 && <span aria-hidden className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black">Open ↗</span>}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16 text-white">
                <p className="text-xs font-medium text-white/70">{pr.tag}</p>
                <p className="text-xl font-extrabold">{pr.title}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <Reveal delay={0.3}>
        <div className="mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
              <p className="text-sm font-medium text-accent">{p.tag}</p>
              <h3 className="mt-1 text-3xl font-extrabold sm:text-4xl">{p.title}</h3>
              <p className="muted mx-auto mt-3 max-w-xl">{p.text}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-accent underline underline-offset-4">{p.cta} ↗</a>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous project" className="hero-btn card card-glow grid h-11 w-11 place-items-center rounded-full"><ChevronLeft size={20} aria-hidden /></button>
            <div className="flex gap-2">
              {projects.map((q, i) => (
                <button key={q.title} onClick={() => show(i)} aria-label={`Show ${q.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-accent' : 'w-2.5 bg-accent/30'}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next project" className="hero-btn card card-glow grid h-11 w-11 place-items-center rounded-full"><ChevronRight size={20} aria-hidden /></button>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

/* ---------- What I do: crazy section ---------- */
function Letters({ text, className = '' }: { text: string; className?: string }) {
  const from = [124, 108, 255]
  const to = [53, 214, 255]
  const colorAt = (f: number) => `rgb(${from.map((v, c) => Math.round(v + (to[c] - v) * f)).join(',')})`
  const last = Math.max(text.replace(/ /g, '').length - 1, 1)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  let idx = 0
  return (
    <motion.span ref={ref} aria-label={text} className={`flex flex-wrap gap-x-[0.3em] ${className}`}
      initial="hidden" animate={inView ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden className="inline-flex">
          {word.split('').map((ch) => {
            const i = idx++
            return (
              <motion.span key={i} className="inline-block" style={{ color: colorAt(i / last) }}
                variants={{
                  hidden: { y: 70, rotateX: -90, opacity: 0 },
                  show: { y: 0, rotateX: 0, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 14 } },
                }}
                whileHover={{ y: -14, rotate: i % 2 ? 8 : -8, scale: 1.2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}>
                {ch}
              </motion.span>
            )
          })}
        </span>
      ))}
    </motion.span>
  )
}

// A chip that gets pushed away from the cursor, then springs back
function Repel({ children, mx, my }: { children: ReactNode; mx: MotionValue<number>; my: MotionValue<number> }) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useSpring(0, { stiffness: 220, damping: 12 })
  const y = useSpring(0, { stiffness: 220, damping: 12 })
  useEffect(() => {
    const run = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      // subtract the current push so the chip's "home" position stays stable
      const dx = r.left + r.width / 2 - x.get() - mx.get()
      const dy = r.top + r.height / 2 - y.get() - my.get()
      const d = Math.hypot(dx, dy)
      const R = 110
      if (d < R && d > 0) {
        const f = (1 - d / R) * 46
        x.set((dx / d) * f)
        y.set((dy / d) * f)
      } else {
        x.set(0)
        y.set(0)
      }
    }
    const a = mx.on('change', run)
    const b = my.on('change', run)
    return () => { a(); b() }
  }, [mx, my, x, y])
  return <motion.span ref={ref} style={{ x, y }} className="inline-block">{children}</motion.span>
}

function SkillCard({ k, i }: { k: (typeof skills)[number]; i: number }) {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const mx = useMotionValue(-9999)
  const my = useMotionValue(-9999)
  const rx = useSpring(useTransform(py, [0, 1], [12, -12]), { stiffness: 200, damping: 18 })
  const ry = useSpring(useTransform(px, [0, 1], [-12, 12]), { stiffness: 200, damping: 18 })
  const gx = useTransform(px, (v) => `${v * 100}%`)
  const gy = useTransform(py, (v) => `${v * 100}%`)
  const spot = useMotionTemplate`radial-gradient(280px circle at ${gx} ${gy}, rgba(124,108,255,.30), transparent 70%)`

  return (
    <motion.div className="h-full" style={{ perspective: 1000 }}
      initial={{ opacity: 0, rotateY: i % 2 ? 80 : -80, y: 80, scale: 0.8 }}
      whileInView={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 14, delay: i * 0.12 }}>
      <motion.div
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          px.set((e.clientX - r.left) / r.width)
          py.set((e.clientY - r.top) / r.height)
          mx.set(e.clientX)
          my.set(e.clientY)
        }}
        onPointerLeave={() => { px.set(0.5); py.set(0.5); mx.set(-9999); my.set(-9999) }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.03 }}
        className="group relative h-full overflow-hidden rounded-3xl p-[2px]">
        {/* spinning rainbow border */}
        <motion.div aria-hidden className="absolute -inset-[50%] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'conic-gradient(from 0deg, #7c6cff, #35d6ff, #ff4d8d, #ffc857, #3ddc97, #7c6cff)' }}
          animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} />
        <div className="card relative h-full overflow-hidden rounded-[1.4rem] p-6 !bg-white dark:!bg-[#12132a]">
          {/* cursor spotlight */}
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: spot }} />
          <h3 className="relative mb-4 flex items-center gap-3 text-2xl font-bold" style={{ transform: 'translateZ(40px)' }}>
            <motion.span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent"
              animate={{ y: [0, -4, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ rotate: 360, scale: 1.25 }}>
              <k.icon size={20} aria-hidden />
            </motion.span>
            <span className={gradText}>{k.title}</span>
          </h3>
          <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative flex flex-wrap gap-2" style={{ transform: 'translateZ(25px)' }}>
            {k.chips.map((c) => (
              <Repel key={c.label} mx={mx} my={my}><ChipView c={c} /></Repel>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Skills() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 160])
  return (
    <section id="skills" ref={ref} className="relative py-12">
      <motion.div aria-hidden style={{ y: y1 }} className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
      <motion.div aria-hidden style={{ y: y2 }} className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-glow/25 blur-3xl" />
      <Heading text="What I do" className="relative mb-8 text-4xl font-extrabold sm:text-5xl" />
      <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skills.map((k, i) => <SkillCard key={k.title} k={k} i={i} />)}
      </div>
    </section>
  )
}

/* ---------- shared heading: gradient text + underline that draws in ---------- */
function Heading({ text, className = 'mb-8 text-4xl font-extrabold sm:text-5xl', lettersClass = '' }: { text: string; className?: string; lettersClass?: string }) {
  return <h2 className={className}><Letters text={text} className={lettersClass} /></h2>
}

/* ---------- Experience: timeline line draws as you scroll, dots pop in ---------- */
function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })
  const dot: Variants = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { type: 'spring', stiffness: 500, damping: 18 } },
  }
  return (
    <section id="experience" className="py-20">
      <Heading text="Experience" />
      <Reveal delay={0.1}>
        <div ref={ref} className="touch-glow-soft card card-glow-soft rounded-3xl p-6">
          <div className="flex flex-wrap justify-between gap-2">
            <motion.h3 className="text-2xl font-bold"
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              Frontend Web Developer, BK'S Tech Solutions
            </motion.h3>
            <motion.span className="muted"
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              Apr 2025 – Present
            </motion.span>
          </div>
          <p className="mt-1 flex items-center gap-2 font-medium text-accent">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            Full-time
          </p>

          <div className="relative mt-5 pl-7">
            {/* faint track + gradient line that fills with scroll */}
            <div aria-hidden className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-accent/20" />
            <motion.div aria-hidden style={{ scaleY: line, originY: 0 }}
              className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-gradient-to-b from-accent to-glow" />
            <motion.ul variants={listParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
              className="muted grid gap-4 text-justify hyphens-auto">
              {experiencePoints.map((t) => (
                <motion.li key={t} variants={listItem} whileHover={{ x: 4 }} className="relative">
                  <motion.span variants={dot} aria-hidden
                    className="absolute -left-7 top-1 h-4 w-4 rounded-full border-2 border-accent bg-white dark:bg-[#12132a]" />
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- About me ---------- */
const aboutText = "I'm a frontend developer and UI/UX designer who builds responsive, user-friendly websites and web apps. I work with HTML5, CSS3, JavaScript, React.js and WordPress, and design in Figma. I've delivered around 10 client websites, and I enjoy turning ideas into clean, intuitive digital experiences. I'm always learning, sharpening my JavaScript through daily problem solving and going deeper into React and TypeScript. I'm looking for an internship or entry-level role where I can grow with a team and build products people enjoy using."

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

function About() {
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [10, -10]), { stiffness: 160, damping: 16 })
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 160, damping: 16 })
  const words = aboutText.split(' ')
  const wordParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.025 } } }
  const word: Variants = {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    show: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } },
  }
  const stats = [
    { n: 10, s: '+', label: 'Client websites' },
    { n: 1, s: '+', label: 'Year building' },
    { n: sites.length, s: '', label: 'Live sites shown' },
  ]

  return (
    <section id="about" className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-[auto_1fr]">
      {/* photo */}
      <motion.div className="relative mx-auto h-60 w-60 sm:h-72 sm:w-72" style={{ perspective: 900 }}
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          px.set((e.clientX - r.left) / r.width)
          py.set((e.clientY - r.top) / r.height)
        }}
        onPointerLeave={() => { px.set(0.5); py.set(0.5) }}>
        {/* spinning glow ring */}
        <div aria-hidden className="absolute -inset-2 overflow-hidden rounded-[3rem] opacity-70 blur-md">
          <motion.div className="absolute -inset-[50%]"
            style={{ background: 'conic-gradient(from 0deg, #7c6cff, #35d6ff, #ff4d8d, #7c6cff)' }}
            animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
        </div>
        <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="h-full w-full"
          animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="gloss relative h-full w-full overflow-hidden rounded-[2.5rem] p-1.5">
            <img src={photo} alt="Shreyas Kowndinya R" className="h-full w-full rounded-[2.1rem] object-cover" />
          </div>
        </motion.div>
        {/* floating badges */}
        <motion.span aria-hidden className="gloss absolute -right-3 top-6 rounded-full px-3 py-1 text-xs font-bold"
          animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
          ⚛ React
        </motion.span>
        <motion.span aria-hidden className="gloss absolute -left-3 bottom-8 rounded-full px-3 py-1 text-xs font-bold"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
          ✦ Figma
        </motion.span>
      </motion.div>

      {/* text */}
      <div>
        <Heading text="About me" className="mb-3 text-4xl font-extrabold sm:text-5xl" lettersClass="justify-center md:justify-start" />
        <Reveal delay={0.1}>
          <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-accent md:justify-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Open to internships and entry-level roles
          </p>
        </Reveal>
        <motion.p variants={wordParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
          className="muted text-justify text-lg hyphens-auto md:hyphens-none">
          {words.map((w, i) => (
            <span key={i}><motion.span variants={word}>{w}</motion.span>{' '}</span>
          ))}
        </motion.p>
        <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <motion.div key={s.label} variants={chipItem} whileHover={{ y: -4, scale: 1.04 }} className="card card-glow rounded-2xl p-3 text-center">
              <p className="text-3xl font-extrabold text-accent"><Counter to={s.n} suffix={s.s} /></p>
              <p className="muted text-xs font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [show3d, setShow3d] = useState(false)
  const [top, setTop] = useState(false)
  const spot = useLiquidReveal()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
  useEffect(() => {
    const f = () => setTop(window.scrollY > 120)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])
  useEffect(() => {
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
    const gl = !!document.createElement('canvas').getContext('webgl')
    setShow3d(!calm && gl)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <motion.div aria-hidden style={{ scaleX }} className="shimmer-bar fixed inset-x-0 top-0 z-[60] h-1 origin-left" />

      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <nav aria-label="Main" className="gloss relative flex items-center gap-1 rounded-full px-3 py-2">
          <motion.a href="#top" aria-label="Back to top"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.12, rotate: -4 }} whileTap={{ scale: 0.95 }}
            className="shimmer inline-block px-3 text-lg font-extrabold tracking-tight">SK</motion.a>
          {links.map(([n, h]) => (
            <a key={n} href={h} className="hidden rounded-full px-3 py-1.5 text-sm font-medium hover:bg-white/20 sm:block">{n}</a>
          ))}
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark and light theme"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-accent text-white shadow-lg">{dark ? '☀' : '☾'}</button>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-6">
        <section className="relative grid min-h-screen grid-cols-1 items-center gap-6 pt-28 md:grid-cols-2">
          <motion.div aria-hidden
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -left-32 top-24 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
            <p className="muted mb-3 font-medium">Hi, I'm</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">Shreyas<br />Kowndinya R</h1>
            <p className="shimmer mt-4 h-9 text-2xl font-bold" aria-label="Frontend Developer, UI/UX Designer, WordPress Builder"><Typing /></p>
            <p className="mt-3 max-w-md text-lg">I design and build fast, good-looking websites and web apps that people enjoy using.</p>
            <HeroActions />
          </motion.div>
          <div className="relative h-80 md:h-[30rem]">
            {show3d && <Suspense fallback={null}><Hero3D /></Suspense>}
          </div>

          {spot.enabled && (
            <div ref={spot.ref} aria-hidden
              style={{ clipPath: 'circle(0px at 0 0)', left: '50%', width: '100vw', marginLeft: '-50vw' }}
              className="pointer-events-none absolute inset-y-0 z-20 overflow-hidden bg-[#0e0f22] [background-image:radial-gradient(rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:22px_22px] dark:bg-[#f4f5ff] dark:[background-image:radial-gradient(rgba(20,21,43,.16)_1px,transparent_1px)]">
              <div style={{ width: 'var(--hero-w, min(69rem, calc(100vw - 3rem)))' }} className="mx-auto grid h-full grid-cols-1 items-center gap-6 pt-28 md:grid-cols-2">
                <div className="relative">
                  <p className="mb-3 font-medium text-white/60 dark:text-[#14152b]/60">Hi, I'm</p>
                  <div className="relative w-fit outline outline-1 outline-offset-4 outline-dashed outline-white/40 dark:outline-[#14152b]/40">
                    <h1 className="shimmer text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">Shreyas<br />Kowndinya R</h1>
                    <span className="absolute -top-[1.4rem] right-0 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-white outline-none">H1 · 72px</span>
                  </div>
                  <p className="mt-4 h-9 text-2xl font-bold text-white dark:text-[#14152b]">Figma → React</p>
                  <p className="mt-3 max-w-md text-lg text-white/80 dark:text-[#14152b]/80">Pixel-perfect in Figma, production-ready in React. One workflow, from layout to launch.</p>
                  <HeroActions ghost />
                </div>
                <div className="relative h-80 md:h-[30rem]">
                  <div className="absolute inset-8 rounded-2xl border border-dashed border-white/40 dark:border-[#14152b]/40">
                    {['-left-1.5 -top-1.5', '-right-1.5 -top-1.5', '-bottom-1.5 -left-1.5', '-bottom-1.5 -right-1.5'].map((c) => (
                      <span key={c} className={`absolute h-3 w-3 border border-white bg-[#0e0f22] dark:border-[#14152b] dark:bg-[#f4f5ff] ${c}`} />
                    ))}
                    <span className="absolute -top-7 left-0 rounded bg-accent px-2 py-0.5 font-mono text-xs text-white">Hero3D · 3D scene</span>
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-40 w-40 rounded-full bg-gradient-to-br from-accent to-glow opacity-80 blur-2xl" />
                    </div>
                    <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-white/80 dark:text-[#14152b]/80">
                      <span className="inline-flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: '#7c6cff' }} />#7C6CFF</span>
                      <span className="inline-flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: '#35d6ff' }} />#35D6FF</span>
                      <span className="inline-flex items-center gap-1.5"><i className="h-3 w-3 rounded-full" style={{ background: '#0e0f22', border: '1px solid rgba(255,255,255,.5)' }} />#0E0F22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <About />

        <Skills />

        <section id="projects" className="py-20">
          <Heading text="Selected work" className="mb-12 text-4xl font-extrabold sm:text-6xl" lettersClass="justify-center" />
          <ProjectFan />
        </section>

        <section id="more" className="py-12">
          <Heading text="More live websites" />
          <div className="flex flex-wrap justify-center gap-5">
            {sites.map((x, i) => {
              const [c1, c2] = x.grad.split(',')
              return (
                <Reveal key={x.name} delay={(i % 3) * 0.1} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]">
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
            })}
          </div>
        </section>

        <Experience />

        <section id="contact" className="pb-24 pt-20 text-center">
          <Reveal>
            <Heading text="Let's build something" className="text-5xl font-extrabold sm:text-7xl" lettersClass="justify-center" />
            <p className="muted mx-auto mt-4 max-w-md">Open to frontend internships and entry-level roles in Bengaluru.</p>
            <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 flex flex-wrap justify-center gap-5">
              {socials.map((x) => <AppIcon key={x.label} {...x} />)}
            </motion.div>
          </Reveal>
          <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            <InfoCard icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
            <InfoCard icon={Phone} label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE_LINK}`} />
          </motion.div>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </section>
      </main>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" tabIndex={top ? 0 : -1}
        className={`gloss fixed right-5 z-50 grid h-12 w-12 place-items-center rounded-full transition-all duration-300 ${top ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}>
        <svg aria-hidden viewBox="0 0 48 48" className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" fill="none" strokeWidth="3" strokeLinecap="round">
          <defs>
            <linearGradient id="topRing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7c6cff" />
              <stop offset="1" stopColor="#35d6ff" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="21.5" stroke="currentColor" opacity="0.15" />
          <motion.circle cx="24" cy="24" r="21.5" stroke="url(#topRing)" style={{ pathLength: scaleX }} />
        </svg>
        <ArrowUp size={20} className="relative" />
      </button>
    </MotionConfig>
  )
}