import { lazy, Suspense, useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Globe, GraduationCap, PenTool, Smartphone, Search, Gauge, LayoutTemplate, Webhook, ArrowUp, Stethoscope, UtensilsCrossed, Building2, Leaf, HardHat, type LucideIcon } from 'lucide-react'
import { siHtml5, siCss, siJavascript, siReact, siMui, siFigma, siWordpress, siTailwindcss, siTypescript, siRedux, siNextdotjs, siGit, siAxios, siReactrouter, type SimpleIcon } from 'simple-icons'
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
function ChipView({ c }: { c: Chip }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium" style={{ borderColor: 'var(--line)' }}>
      {c.si ? (
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill={c.si.hex === '000000' ? 'currentColor' : `#${c.si.hex}`}><path d={c.si.path} /></svg>
      ) : c.lu ? <c.lu size={16} className="text-accent" aria-hidden /> : null}
      {c.label}
    </span>
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

function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', msg: '' })
  const send = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const body = encodeURIComponent(`${f.msg}\n\n— ${f.name} (${f.email})`)
    window.location.href = `mailto:skowndinya518@gmail.com?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${body}`
  }
  const field = 'card field-glow w-full rounded-2xl px-4 py-3 outline-none'
  return (
    <div className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
      <input className={field} placeholder="Your name" aria-label="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input className={field} type="email" placeholder="Your email" aria-label="Your email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      <textarea className={field} rows={4} placeholder="Tell me about the role or project" aria-label="Message" value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
      <button onClick={send} className="rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">Send message</button>
    </div>
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
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <nav aria-label="Main" className="gloss relative flex items-center gap-1 rounded-full px-3 py-2">
          <a href="#top" className="px-3 font-extrabold">SK</a>
          {links.map(([n, h]) => (
            <a key={n} href={h} className="hidden rounded-full px-3 py-1.5 text-sm font-medium hover:bg-white/20 sm:block">{n}</a>
          ))}
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark and light theme"
            className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-accent text-white shadow-lg">{dark ? '☀' : '☾'}</button>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-6xl px-6">
        <section className="relative grid min-h-screen grid-cols-1 items-center gap-6 pt-28 md:grid-cols-2">
          <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
            <p className="muted mb-3 font-medium">Hi, I'm</p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">Shreyas<br />Kowndinya R</h1>
            <p className="mt-4 h-9 text-2xl font-bold text-accent" aria-label="Frontend Developer, UI/UX Designer, WordPress Builder"><Typing /></p>
            <p className="mt-3 max-w-md text-lg">I design and build fast, good-looking websites and web apps that people enjoy using.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">See my work</a>
              <a href="#contact" className="card card-glow rounded-full px-6 py-3 font-bold">Contact me</a>
              <a href="/resume.pdf" download className="card card-glow rounded-full px-6 py-3 font-bold">Download resume</a>
            </div>
          </motion.div>
          <div className="relative h-80 md:h-[30rem]">
            {show3d && <Suspense fallback={null}><Hero3D /></Suspense>}
          </div>
        </section>

        <section id="about" className="grid grid-cols-1 items-center gap-10 py-20 md:grid-cols-[auto_1fr]">
          <div className="gloss relative mx-auto h-60 w-60 overflow-hidden rounded-[2.5rem] p-1.5 sm:h-72 sm:w-72">
            <img src={photo} alt="Shreyas Kowndinya R" className="h-full w-full rounded-[2.1rem] object-cover" />
          </div>
          <div>
            <h2 className="mb-4 text-center text-3xl font-extrabold md:text-left">About me</h2>
            <p className="muted text-justify text-lg hyphens-auto md:hyphens-none">I'm a frontend developer and UI/UX designer who builds responsive, user-friendly websites and web apps. I work with HTML5, CSS3, JavaScript, React.js and WordPress, and design in Figma. I've delivered around 10 client websites, and I enjoy turning ideas into clean, intuitive digital experiences. I'm always learning, sharpening my JavaScript through daily problem solving and going deeper into React and TypeScript. I'm looking for an internship or entry-level role where I can grow with a team and build products people enjoy using.</p>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className="mb-8 text-3xl font-extrabold">What I do</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skills.map((k) => (
              <Tilt key={k.title}>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent"><k.icon size={20} aria-hidden /></span>{k.title}</h3>
                <div className="flex flex-wrap gap-2">{k.chips.map((c) => <ChipView key={c.label} c={c} />)}</div>
              </Tilt>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="mb-8 text-3xl font-extrabold">Selected work</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Tilt key={p.title}>
                <img src={p.img} alt={`${p.title} screenshot`} loading="lazy" className={`mb-5 h-52 w-full rounded-2xl object-cover ${p.pos}`} />
                <p className="text-sm font-medium text-accent">{p.tag}</p>
                <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                <p className="muted mt-3">{p.text}</p>
                {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="mt-5 inline-block font-bold text-accent underline underline-offset-4">{p.cta}</a>}
              </Tilt>
            ))}
          </div>
        </section>

        <section id="more" className="py-12">
          <h2 className="mb-8 text-3xl font-extrabold">More live websites</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {sites.map((x) => {
              const [c1, c2] = x.grad.split(',')
              return (
                <div key={x.name} className="w-full md:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]">
                  <Tilt className="!p-0 overflow-hidden">
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
                </div>
              )
            })}
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="mb-8 text-3xl font-extrabold">Experience</h2>
          <div className="card card-glow-soft rounded-3xl p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl font-bold">Frontend Web Developer, BK'S Tech Solutions</h3>
              <span className="muted">Apr 2025 – Present</span>
            </div>
            <p className="mt-1 font-medium text-accent">Full-time</p>
            <ul className="muted mt-4 grid list-disc gap-2 pl-5 text-justify hyphens-auto">
              <li>Build responsive websites, landing pages and web applications using HTML5, CSS3, JavaScript, React.js and WordPress (Divi Builder).</li>
              <li>Built around 10 client websites, mostly in WordPress, extended with custom HTML, CSS and JavaScript.</li>
              <li>Design UI/UX for web applications in Figma and build the designs in code, from layout to final interface.</li>
              <li>Work directly with clients to turn business requirements into user-friendly, visually appealing interfaces.</li>
              <li>Apply SEO best practices, performance optimization and mobile-first design so sites work well on every device.</li>
              <li>Collaborate with the development team to deliver scalable web solutions.</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="pb-24 pt-20 text-center">
          <h2 className="text-4xl font-extrabold sm:text-5xl">Let's build something</h2>
          <p className="muted mx-auto mt-4 max-w-md">Open to frontend internships and entry-level roles in Bengaluru.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:skowndinya518@gmail.com" className="rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">Email me</a>
            <a href="https://www.linkedin.com/in/shreyas-kowndinya-r-89811528a/" target="_blank" rel="noreferrer" className="card card-glow rounded-full px-6 py-3 font-bold">LinkedIn</a>
            <a href="https://github.com/Shreyas235" target="_blank" rel="noreferrer" className="card card-glow rounded-full px-6 py-3 font-bold">GitHub</a>
          </div>
          <ContactForm />
        </section>
      </main>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" tabIndex={top ? 0 : -1}
        className={`gloss fixed right-5 z-50 grid h-12 w-12 place-items-center rounded-full transition-all duration-300 ${top ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}><ArrowUp size={20} /></button>
    </>
  )
}
