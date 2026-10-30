import { Heading } from '@/components/ui/Heading'
import { sites } from '@/data/sites'
import { SiteCard } from './SiteCard'

export function MoreSites() {
  return (
    <section id="more" className="py-12">
      <Heading text="More live websites" />
      <div className="flex flex-wrap justify-center gap-5">
        {sites.map((x, i) => <SiteCard key={x.name} x={x} i={i} />)}
      </div>
    </section>
  )
}
