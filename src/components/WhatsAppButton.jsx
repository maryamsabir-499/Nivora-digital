import { MessageCircle } from 'lucide-react'
import { site } from '../data/siteData'

export default function WhatsAppButton() {
  if (!site.whatsapp) return null
  return (
    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white
        flex items-center justify-center shadow-xl border-2 md:border-4 border-white hover:scale-110 transition">
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
    </a>
  )
}