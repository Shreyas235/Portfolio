import { lazy, Suspense, useEffect, useState, type CSSProperties, type FormEvent, type MouseEvent, type ReactNode } from 'react'
import { motion, AnimatePresence, MotionConfig, useAnimationControls, useScroll, useSpring, useMotionValue, type Variants } from 'framer-motion'
import { Code, Palette, Globe, GraduationCap, PenTool, Smartphone, Search, Gauge, LayoutTemplate, Webhook, ArrowUp, Mail, Phone, Copy, Check, Stethoscope, UtensilsCrossed, Building2, Leaf, HardHat, type LucideIcon } from 'lucide-react'
import { siGithub, siWhatsapp, siInstagram, siGmail, siHtml5, siCss, siJavascript, siReact, siMui, siFigma, siWordpress, siTailwindcss, siTypescript, siRedux, siNextdotjs, siGit, siAxios, siReactrouter, type SimpleIcon } from 'simple-icons'
import photo from './profile.jpg'
import music from './shots/music.jpg'
import bk from './shots/bk.jpg'
import wdw from './shots/wdw.jpg'

const Hero3D = lazy(() => import('./Hero3D'))

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

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const [show3d, setShow3d] = useState(false)
  const [top, setTop] = useState(false)
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
            <div className="mt-8 w-fit max-w-full">
              <div className="flex flex-wrap gap-3">
                <Magnetic>
                  <a href="#projects" className="inline-block rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">See my work</a>
                </Magnetic>
                <a href="#contact" className="hero-btn card card-glow rounded-full px-6 py-3 font-bold">Contact me</a>
                <a href="/resume.pdf" download className="hero-btn card card-glow rounded-full px-6 py-3 font-bold">Download resume</a>
              </div>
              <div className="mt-3 flex flex-wrap justify-start gap-3 sm:justify-center">
                <a href="https://www.linkedin.com/in/shreyas-kowndinya-r-89811528a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-btn card card-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/Shreyas235" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-btn card card-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden><path d={siGithub.path} /></svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
          <div className="relative h-80 md:h-[30rem]">
            {show3d && <Suspense fallback={null}><Hero3D /></Suspense>}
          </div>
        </section>

        <section id="about" className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-[auto_1fr]">
          <Reveal>
            <div className="gloss relative mx-auto h-60 w-60 overflow-hidden rounded-[2.5rem] p-1.5 sm:h-72 sm:w-72">
              <img src={photo} alt="Shreyas Kowndinya R" className="h-full w-full rounded-[2.1rem] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="mb-4 text-center text-3xl font-extrabold md:text-left">About me</h2>
            <p className="muted text-justify text-lg hyphens-auto md:hyphens-none">I'm a frontend developer and UI/UX designer who builds responsive, user-friendly websites and web apps. I work with HTML5, CSS3, JavaScript, React.js and WordPress, and design in Figma. I've delivered around 10 client websites, and I enjoy turning ideas into clean, intuitive digital experiences. I'm always learning, sharpening my JavaScript through daily problem solving and going deeper into React and TypeScript. I'm looking for an internship or entry-level role where I can grow with a team and build products people enjoy using.</p>
          </Reveal>
        </section>

        <section id="skills" className="py-12">
          <Reveal><h2 className="mb-8 text-3xl font-extrabold">What I do</h2></Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skills.map((k, i) => (
              <Reveal key={k.title} delay={i * 0.1} className="h-full">
                <Tilt className="touch-glow">
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-bold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent"><k.icon size={20} aria-hidden /></span>{k.title}</h3>
                  <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-wrap gap-2">
                    {k.chips.map((c) => <ChipView key={c.label} c={c} />)}
                  </motion.div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <Reveal><h2 className="mb-8 text-3xl font-extrabold">Selected work</h2></Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="h-full">
                <Tilt className="touch-glow">
                  <motion.div variants={chipList} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" className={`mb-5 h-52 w-full rounded-2xl object-cover ${p.pos}`} />
                    <p className="text-sm font-medium text-accent">{p.tag}</p>
                    <motion.h3 variants={chipItem} whileHover={{ y: -3 }} className="mt-2 w-fit text-2xl font-bold">{p.title}</motion.h3>
                    <p className="muted mt-3">{p.text}</p>
                    {p.url && <motion.a variants={chipItem} whileHover={{ y: -3 }} href={p.url} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-accent underline underline-offset-4">{p.cta}</motion.a>}
                  </motion.div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="more" className="py-12">
          <Reveal><h2 className="mb-8 text-3xl font-extrabold">More live websites</h2></Reveal>
          <div className="flex flex-wrap justify-center gap-5">
            {sites.map((x, i) => {
              const [c1, c2] = x.grad.split(',')
              return (
                <Reveal key={x.name} delay={(i % 3) * 0.1} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]">
                  <Tilt className="touch-glow !p-0 overflow-hidden">
                    <a href={x.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col">
                      <div className="relative grid h-32 place-items-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
                        <div aria-hidden className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/25 blur-xl" />
                        <x.icon size={52} className="relative text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden />
                        <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-bold text-white backdrop-blur">{x.type}</span>
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="flex items-center justify-between text-lg font-bold"><span>{x.name}</span><span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden>↗</span></h3>
                        <p className="muted mt-2 flex-1 text-sm">{x.text}</p>
                        <span className="mt-4 text-sm font-bold text-accent">{x.url.replace('https://', '').replace('/', '')}</span>
                      </div>
                    </a>
                  </Tilt>
                </Reveal>
              )
            })}
          </div>
        </section>

        <section id="experience" className="py-20">
          <Reveal><h2 className="mb-8 text-3xl font-extrabold">Experience</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="touch-glow-soft card card-glow-soft rounded-3xl p-6">
              <div className="flex flex-wrap justify-between gap-2">
                <h3 className="text-xl font-bold">Frontend Web Developer, BK'S Tech Solutions</h3>
                <span className="muted">Apr 2025 – Present</span>
              </div>
              <p className="mt-1 font-medium text-accent">Full-time</p>
              <motion.ul variants={listParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
                className="muted mt-4 grid list-disc gap-2 pl-5 text-justify hyphens-auto">
                {experiencePoints.map((t) => <motion.li key={t} variants={listItem}>{t}</motion.li>)}
              </motion.ul>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="pb-24 pt-20 text-center">
          <Reveal>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Let's build something</h2>
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
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}><ArrowUp size={20} /></button>
    </MotionConfig>
  )
}