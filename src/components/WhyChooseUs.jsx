import { CheckCircle2 } from 'lucide-react'
import { whyChooseUs } from '../data/siteData'
import Reveal from './Reveal'

export default function WhyChooseUs() {
  if (!whyChooseUs.length) return null
  return (
    <section className="bg-navy py-20 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-brand text-sm font-bold tracking-[0.2em] uppercase">Why Choose Us</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
          Why clients <span className="text-brand">trust us</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                <CheckCircle2 className="text-brand" size={30} />
                <h3 className="mt-4 text-xl font-bold">{w.title}</h3>
                <p className="mt-2 text-slate-300 leading-relaxed">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}