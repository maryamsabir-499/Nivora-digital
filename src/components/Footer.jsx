import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site, services } from '../data/siteData'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  const contacts = [
    site.email && { icon: Mail, text: site.email, href: `mailto:${site.email}` },
    site.phone && { icon: Phone, text: site.phone, href: `tel:${site.phone}` },
    site.address && { icon: MapPin, text: site.address },
  ].filter(Boolean)

  return (
    <footer className="bg-[#070D16] border-t-2 border-brand text-slate-300">
      <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <img src="/nivora-logo-transparent.png" alt="Nivora Digital logo" className="h-20 w-auto" />
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {links.map(l => (
              <li key={l.to}><Link to={l.to} className="hover:text-brand transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            {services.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-brand transition">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            {contacts.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={18} className="text-brand shrink-0 mt-0.5" />
                {href ? <a href={href} className="hover:text-brand transition break-all">{text}</a> : <span>{text}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-5 pt-5 pb-20 md:pb-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}