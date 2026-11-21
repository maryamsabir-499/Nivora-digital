import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ShoppingCart,
  Package,
  Plane,
  Truck,
  Handshake,
  Code,
} from 'lucide-react'
import { services } from '../data/siteData'
import Reveal from './Reveal'

const icons = {
  cart: ShoppingCart,
  package: Package,
  plane: Plane,
  truck: Truck,
  handshake: Handshake,
  code: Code,
}

export default function Services() {
  return (
    <section className="bg-soft py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase">What We Do</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy">
          Our <span className="text-brand-dark">Services</span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] || Briefcase
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block h-full overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-navy to-[#1c2c47]">
                    {s.image && (
                      <img
                        src={s.image}
                        alt={s.imageAlt || s.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    )}
                    <span className="absolute top-4 left-4 bg-navy/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-navy flex items-center justify-center group-hover:bg-brand transition">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>

                  <div className="p-7">
                    <div className="w-12 h-12 rounded-xl bg-navy text-brand flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-slate-500 leading-relaxed">{s.short}</p>

                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <span className="inline-flex items-center gap-2 text-brand-dark font-semibold">
                        Explore Service <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}