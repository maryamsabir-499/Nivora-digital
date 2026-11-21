import { Link, useParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { services, site } from '../data/siteData'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  if (!service) return <NotFound />

  return (
    <>
      <Seo title={service.title} description={service.short} path={`/services/${service.slug}`} />
      <PageHeader eyebrow="Service" title={service.title} text={service.short} />

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-5">
          <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>

          <ul className="mt-8 space-y-4">
            {service.features.map(f => (
              <li key={f} className="flex items-start gap-3 text-navy font-medium">
                <CheckCircle2 className="text-brand-dark shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-navy text-brand font-semibold px-8 py-4 rounded-xl text-center hover:bg-brand hover:text-navy transition">
              Request this service
            </Link>
            {site.whatsapp && (
              <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello, I am interested in ${service.title}.`)}`}
                 target="_blank" rel="noreferrer"
                 className="border border-slate-300 text-navy font-semibold px-8 py-4 rounded-xl text-center hover:border-brand transition">
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}