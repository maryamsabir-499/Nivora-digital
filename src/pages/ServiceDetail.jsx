import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { services, site } from '../data/siteData'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  if (!service) return <NotFound />

  const others = services.filter(s => s.slug !== service.slug)

  return (
    <>
      <Seo title={service.title} description={service.short} path={`/services/${service.slug}`} />
      <PageHeader eyebrow="Service" title={service.title} text={service.short} />

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>

            <ul className="mt-8 space-y-4">
              {service.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-navy font-medium">
                  <CheckCircle2 className="text-brand-dark shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-navy text-brand font-semibold px-8 py-4 rounded-xl text-center hover:bg-brand hover:text-navy transition"
              >
                Request this service
              </Link>
              {site.whatsapp && (
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello, I am interested in ${service.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-slate-300 text-navy font-semibold px-8 py-4 rounded-xl text-center hover:border-brand transition"
                >
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </div>

          {service.image && (
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl"
            />
          )}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase">More services</p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">Explore what else we do</h2>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map(s => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-slate-500 text-sm">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-brand-dark font-semibold text-sm">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}