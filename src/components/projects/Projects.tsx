import { Heading } from '@/components/ui/Heading'
import { ProjectFan } from './ProjectFan'

export function Projects() {
  return (
    <section id="projects" className="py-20">
              <Heading text="Selected work" className="mb-12 text-4xl font-extrabold sm:text-6xl" lettersClass="justify-center" />
              <ProjectFan />
            </section>
  )
}
