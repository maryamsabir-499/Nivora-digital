const steps = [
  { n: '01', title: 'Tell Us Your Needs', text: 'Share your requirements, goals and timeline with our team.' },
  { n: '02', title: 'Plan the Solution', text: 'We discuss suitable options and agree on the next steps.' },
  { n: '03', title: 'We Get to Work', text: 'Our team starts the work and keeps you updated at every stage.' },
  { n: '04', title: 'Delivery & Support', text: 'We deliver on time and stay available for ongoing support.' },
]

export default function Steps() {
  return (
    <section className="bg-soft py-20">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase">Our Process</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-navy">
          Simple steps. <span className="text-brand-dark">Real progress.</span>
        </h2>
        <p className="mt-4 text-slate-600 max-w-xl">
          A straightforward process designed around your requirements and the services you need.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          {steps.map(s => (
            <div key={s.n}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-navy text-brand font-bold flex items-center justify-center">{s.n}</div>
                <div className="hidden md:block flex-1 h-px bg-slate-300" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-slate-500">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}