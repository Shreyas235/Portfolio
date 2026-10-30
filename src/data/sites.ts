import { Stethoscope, UtensilsCrossed, Building2, Leaf, HardHat, type LucideIcon } from 'lucide-react'

export type Site = {
  name: string
  url: string
  type: string
  icon: LucideIcon
  grad: string
  text: string
}

export const sites: Site[] = [
  { name: 'Reha Diagnostics', url: 'https://rehadiagnostics.com/', type: 'Healthcare', icon: Stethoscope, grad: '#35d6ff,#7c6cff', text: 'Reha Diagnostics Center is a diagnostic center focused on dependable testing and patient care, with a clean website that helps patients find services and reach the center easily.' },
  { name: 'Nityotsava Residency', url: 'https://nityotsavaresidency.com/', type: 'Hospitality', icon: UtensilsCrossed, grad: '#ff9a62,#ff4d8d', text: 'Nityotsava Residency is a hotel cum restaurant offering comfortable stays and dining, with a welcoming website that shows the property and makes booking enquiries simple.' },
  { name: 'Ananta Habitat', url: 'https://ananthabitat.com/', type: 'Real estate', icon: Building2, grad: '#7c6cff,#35d6ff', text: 'Ananta Habitat is a builders and developers company creating residential spaces, with a website that presents its projects clearly and builds buyer trust.' },
  { name: 'Vegwings Agro Pvt. Ltd.', url: 'https://vegwingsagro.com/', type: 'Food processing', icon: Leaf, grad: '#3ddc97,#35d6ff', text: 'Vegwings Agro Pvt. Ltd. is a food processing company that prepares fresh vegetables and fruits, cutting, processing and packing them with strict hygiene. Website shows the company and its products.' },
  { name: 'Raksha Engineers', url: 'https://rakshaengineers.com/', type: 'Construction', icon: HardHat, grad: '#ffc857,#ff7a45', text: 'Raksha Engineers is a development and construction company, with a professional website that showcases its work and makes it easy for clients to get in touch.' },
]
