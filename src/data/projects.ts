import wdw from '@/assets/images/wdw.jpg'
import bk from '@/assets/images/bk.jpg'
import music from '@/assets/images/music.jpg'

export type Project = {
  title: string
  tag: string
  url: string
  cta: string
  img: string
  pos: string
  text: string
}

export const projects: Project[] = [
  { title: 'Windreamway CRM', tag: 'React · Material UI · Node.js', url: 'https://windreamway.com/', cta: 'Visit live site', img: wdw, pos: 'object-top', text: 'CRM and membership system: admin dashboards, searchable tables, PDF reports, payments and SMS support.' },
  { title: "BK's Tech Solutions", tag: 'WordPress · Divi · JavaScript', url: 'https://bkstechsolutions.com/', cta: 'Visit live site', img: bk, pos: 'object-top', text: 'Responsive company website with clear service pages, strong calls to action and SEO-friendly structure.' },
  { title: 'Music App UI', tag: 'Figma · UI/UX', url: 'https://www.figma.com/proto/68JkFcDcVlk2zuKHRNFSAh/Music-App?node-id=74-1645&p=f&viewport=204%2C376%2C0.66&t=QcO02V7dDtIML4zS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1', cta: 'Open Figma prototype', img: music, pos: 'object-top', text: 'Ad-free music streaming app design with a bold hero, clear sign-up and a five-tab bottom navigation.' },
]
