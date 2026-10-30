import { Code, Palette, Globe, GraduationCap, PenTool, Smartphone, Search, Gauge, LayoutTemplate, Webhook, type LucideIcon } from 'lucide-react'
import { siHtml5, siCss, siJavascript, siReact, siMui, siFigma, siWordpress, siTailwindcss, siTypescript, siRedux, siNextdotjs, siGit, siAxios, siReactrouter, type SimpleIcon } from 'simple-icons'

export type Chip = { label: string; si?: SimpleIcon; lu?: LucideIcon }
export type Skill = { title: string; icon: LucideIcon; chips: Chip[] }

export const skills: Skill[] = [
  { title: 'Build', icon: Code, chips: [{ label: 'HTML5', si: siHtml5 }, { label: 'CSS3', si: siCss }, { label: 'JavaScript', si: siJavascript }, { label: 'React.js', si: siReact }, { label: 'Material UI', si: siMui }] },
  { title: 'Design', icon: Palette, chips: [{ label: 'Figma', si: siFigma }, { label: 'UI/UX design', lu: PenTool }, { label: 'Responsive layouts', lu: Smartphone }] },
  { title: 'Websites', icon: Globe, chips: [{ label: 'WordPress', si: siWordpress }, { label: 'Divi Builder', lu: LayoutTemplate }, { label: 'SEO basics', lu: Search }, { label: 'Performance', lu: Gauge }] },
  { title: 'Learning now', icon: GraduationCap, chips: [{ label: 'React Hooks', lu: Webhook }, { label: 'React Router', si: siReactrouter }, { label: 'Axios', si: siAxios }, { label: 'Redux Toolkit', si: siRedux }, { label: 'Tailwind CSS', si: siTailwindcss }, { label: 'TypeScript', si: siTypescript }, { label: 'Next.js', si: siNextdotjs }, { label: 'Git', si: siGit }] },
]
