import { siGithub } from 'simple-icons'
import { Magnetic } from '@/components/ui/Magnetic'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { GITHUB_URL, LINKEDIN_PATH, LINKEDIN_URL } from '@/data/contact'

export function HeroActions() {
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
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-btn card card-glow inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold">
          <BrandIcon path={LINKEDIN_PATH} />
          LinkedIn
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-btn card card-glow inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold">
          <BrandIcon path={siGithub.path} />
          GitHub
        </a>
      </div>
    </div>
  )
}
