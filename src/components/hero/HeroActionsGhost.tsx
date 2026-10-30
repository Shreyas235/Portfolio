import { siGithub } from 'simple-icons'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { LINKEDIN_PATH } from '@/data/contact'

/** Wireframe twin of HeroActions, shown inside the liquid cursor reveal. Same sizes so everything lines up. */
export function HeroActionsGhost() {
  // one filled button, the rest dotted outlines
  const ring = 'rounded-full border border-dashed border-white/60 font-bold text-white dark:border-[#14152b]/50 dark:text-[#14152b]'
  return (
    <div className="mt-8 w-fit max-w-full">
      <div className="flex flex-wrap gap-3">
        <div className="inline-block"><span className="inline-block rounded-full bg-accent px-6 py-3 font-bold text-white shadow-lg shadow-accent/40">See my work</span></div>
        <span className={`${ring} px-6 py-3`}>Contact me</span>
        <span className={`${ring} px-6 py-3`}>Download resume</span>
      </div>
      <div className="mt-3 flex flex-wrap justify-start gap-3 sm:justify-center">
        <span className={`${ring} inline-flex items-center gap-2 px-5 py-2.5`}><BrandIcon path={LINKEDIN_PATH} />LinkedIn</span>
        <span className={`${ring} inline-flex items-center gap-2 px-6 py-3`}><BrandIcon path={siGithub.path} />GitHub</span>
      </div>
    </div>
  )
}
