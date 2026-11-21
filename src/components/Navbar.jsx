import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `transition hover:text-brand ${isActive ? 'text-brand' : 'text-slate-300'}`

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-24 flex items-center justify-between">
        <Link to="/">
          <img src="/nivora-logo-transparent.png" alt="Nivora Digital logo" className="h-20 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          {links.map(l => <NavLink key={l.to} to={l.to} end className={linkClass}>{l.label}</NavLink>)}
        </nav>

        <Link to="/contact" className="hidden md:block bg-brand text-navy font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition">
          Get a Quote
        </Link>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu"
          className="md:hidden border border-white/20 text-brand rounded-xl p-3">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)} className={linkClass}>{l.label}</NavLink>
          ))}
        </div>
      )}
    </header>
  )
}