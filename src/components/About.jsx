import { site } from '../data/siteData'

export default function About() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="max-w-4xl mx-auto px-5">
        <p className="text-brand text-sm font-bold tracking-[0.2em] uppercase">Our Story</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold">
          We are <span className="text-brand">{site.name}.</span>
        </h2>
        {(site.about || []).map(p => (
          <p key={p} className="mt-6 text-slate-300 leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  )
}