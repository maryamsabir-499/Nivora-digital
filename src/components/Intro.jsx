import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { site } from '../data/siteData'
import Reveal from './Reveal'

export default function Intro() {
  if (!site.intro) return null
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <Reveal>
          <p className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase">Welcome</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy">
            Meet <span className="text-brand-dark">{site.name}</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">{site.intro}</p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-dark transition">
            More about us <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}