import { BadgeCheck } from 'lucide-react'
import { registrations } from '../data/siteData'
import Reveal from './Reveal'

export default function Registrations() {
  if (!registrations.length) return null
  return (
    <section className="bg-soft py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase">Credentials</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy">
          Registrations & <span className="text-brand-dark">Affiliations</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {registrations.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white border border-slate-200 p-7 shadow-sm">
                <BadgeCheck className="text-brand-dark" size={32} />
                <h3 className="mt-4 text-xl font-bold text-navy">{r.name}</h3>
                {r.detail && <p className="mt-2 text-slate-500">{r.detail}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}