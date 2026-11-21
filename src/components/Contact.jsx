import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

export default function Contact() {
  const rows = [
    site.email && { icon: Mail, text: site.email, href: `mailto:${site.email}` },
    site.phone && { icon: Phone, text: site.phone, href: `tel:${site.phone}` },
    site.address && { icon: MapPin, text: site.address },
    site.whatsapp && { icon: MessageCircle, text: 'Chat on WhatsApp', href: `https://wa.me/${site.whatsapp}` },
  ].filter(Boolean)

  return (
    <section className="bg-soft py-20">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-brand-dark text-sm font-bold tracking-[0.2em] uppercase">Get In Touch</p>
          <h2 className="mt-4 text-4xl font-extrabold text-navy">Contact <span className="text-brand-dark">{site.name}</span></h2>
          <ul className="mt-8 space-y-5 text-navy font-medium">
            {rows.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-center gap-4">
                <Icon className="text-brand-dark shrink-0" />
                {href ? <a href={href} className="hover:text-brand-dark">{text}</a> : text}
              </li>
            ))}
          </ul>
        </div>

        {/* YOUR_ID: formspree.io par management ke Gmail se free form banayein */}
        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
          <input name="name" placeholder="Your Name" required className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-brand" />
          <input name="email" type="email" placeholder="Your Email" required className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-brand" />
          <input name="phone" placeholder="Phone (optional)" className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-brand" />
          <textarea name="message" rows="4" placeholder="How can we help?" required className="w-full border border-slate-200 rounded-xl p-4 outline-none focus:border-brand" />
          <button type="submit" className="w-full bg-navy text-brand font-semibold px-8 py-4 rounded-xl hover:bg-brand hover:text-navy transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}