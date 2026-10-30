import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import { siWhatsapp } from 'simple-icons'
import { WHATSAPP_NUMBER } from '@/data/contact'

type FormKey = 'name' | 'email' | 'msg'
type FormErrors = Partial<Record<FormKey, string>>

export function ContactForm() {
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
