import { Link } from 'react-router-dom'
import { site } from '../data/siteData'
import Reveal from './Reveal'

export default function ContactCTA() {
  return (
    <section className="bg-navy py-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Ready to <span className="text-brand">get started?</span>
          </h2>
          <p className="mt-4 text-slate-300">Tell us about your requirements and our team will get back to you.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-brand text-navy font-semibold px-8 py-4 rounded-xl hover:bg-brand-dark hover:text-white transition">
              Contact Us
            </Link>
            {site.whatsapp && (
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"
                 className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:border-brand hover:text-brand transition">
                Chat on WhatsApp
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}