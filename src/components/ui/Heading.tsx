import { Letters } from './Letters'

/** Section heading: gradient letters that spring in one by one. */
export function Heading({ text, className = 'mb-8 text-4xl font-extrabold sm:text-5xl', lettersClass = '' }: { text: string; className?: string; lettersClass?: string }) {
  return <h2 className={className}><Letters text={text} className={lettersClass} /></h2>
}
