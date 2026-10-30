import { siGithub, siWhatsapp, siInstagram, siGmail } from 'simple-icons'

export type Social = { label: string; href: string; path: string; bg: string; glow: string }

/* ---------- contact details: replace the phone placeholders ---------- */
export const EMAIL = 'skowndinya518@gmail.com'
export const PHONE_DISPLAY = '+91 99017 87660'
export const PHONE_LINK = '+919901787660'
export const WHATSAPP_NUMBER = PHONE_LINK.replace(/\D/g, '') // digits only, used by wa.me
export const WHATSAPP_GREETING = "Hi Shreyas, I saw your portfolio and I'd like to connect." // pre-filled in the chat
export const INSTAGRAM_USER = '_shreyas_kowndinya_' // the part after instagram.com/

export const LINKEDIN_URL = 'https://www.linkedin.com/in/shreyas-kowndinya-r-89811528a/'
export const GITHUB_URL = 'https://github.com/Shreyas235'
export const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

export const socials: Social[] = [
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`, path: siWhatsapp.path, bg: '#25D366', glow: 'rgba(37, 211, 102, .9)' },
  { label: 'Instagram', href: `https://instagram.com/${INSTAGRAM_USER}`, path: siInstagram.path, bg: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)', glow: 'rgba(214, 41, 118, .9)' },
  { label: 'Email', href: `mailto:${EMAIL}`, path: siGmail.path, bg: '#EA4335', glow: 'rgba(234, 67, 53, .9)' },
  { label: 'LinkedIn', href: LINKEDIN_URL, path: LINKEDIN_PATH, bg: '#0A66C2', glow: 'rgba(10, 102, 194, .9)' },
  { label: 'GitHub', href: GITHUB_URL, path: siGithub.path, bg: '#24292f', glow: 'rgba(110, 118, 129, .9)' },
]
