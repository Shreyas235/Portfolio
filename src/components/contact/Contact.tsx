import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Heading } from '@/components/ui/Heading'
import { Reveal } from '@/components/ui/Reveal'
import { EMAIL, PHONE_DISPLAY, PHONE_LINK, socials } from '@/data/contact'
import { chipList } from '@/utils/animations'
import { AppIcon } from './AppIcon'
import { ContactForm } from './ContactForm'
import { InfoCard } from './InfoCard'

export function Contact() {
  return (
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
  )
}
