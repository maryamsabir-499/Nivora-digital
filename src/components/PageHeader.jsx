export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-brand text-sm font-bold tracking-[0.2em] uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">{title}</h1>
        {text && <p className="mt-4 text-slate-300 max-w-2xl">{text}</p>}
      </div>
    </section>
  )
}