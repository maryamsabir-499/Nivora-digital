import { Link } from 'react-router-dom'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ShieldCheck, Globe, Handshake, Sparkles } from 'lucide-react'

export default function Hero() {
  const mx = useMotionValue(70)
  const my = useMotionValue(50)

  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  const imgX = useTransform(sx, [0, 100], ['3%', '-3%'])
  const imgY = useTransform(sy, [0, 100], ['2%', '-2%'])

  const spotlight = useMotionTemplate`radial-gradient(circle 450px at ${sx}% ${sy}%, rgba(13,21,32,0) 0%, rgba(13,21,32,0.3) 100%)`

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set(((e.clientX - rect.left) / rect.width) * 100)
    my.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  const handleLeave = () => {
    mx.set(70)
    my.set(50)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden bg-navy"
    >
      <motion.img
        style={{ x: imgX, y: imgY, scale: 1.1 }}
        src="/hero.webp"
        alt="Container ships being loaded at a busy international port"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <motion.div
        style={{ background: spotlight }}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
           className="[text-shadow:0_2px_12px_rgba(10,18,30,0.6)]"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-0.5 bg-brand" />
            <span className="text-brand text-sm font-bold tracking-[0.2em] uppercase">
              Consulting · Technology · Growth
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Your Business.<br />
            <span className="text-brand">Our Expertise.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-xl">
            We provide reliable, professional services that help your business grow,
            connect with new customers and succeed in competitive markets.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-brand text-navy font-semibold px-8 py-4 rounded-xl text-center hover:bg-brand-dark hover:text-white transition"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-center hover:border-brand hover:text-brand transition"
            >
              Contact Us
            </Link>
          </div>

          <ul className="mt-10 space-y-4 text-slate-200 font-semibold">
            <li className="flex items-center gap-3"><ShieldCheck className="text-brand" /> Business-focused approach</li>
            <li className="flex items-center gap-3"><Globe className="text-brand" /> Global reach</li>
            <li className="flex items-center gap-3"><Handshake className="text-brand" /> Multiple services, one partner</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-5 max-w-md md:ml-auto"
        >
          <div className="relative rounded-2xl h-44 w-full overflow-hidden">
            <img
              src="/images/ecommerce.webp"
              alt="Online store packages and laptop showing e-commerce support"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/10 to-transparent pointer-events-none" />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-navy/80 text-brand text-xs font-bold px-3 py-1.5 rounded-full">
              <Sparkles size={14} /> Your growth partner
            </span>
          </div>
          <p className="mt-5 text-xs font-bold tracking-[0.2em] text-brand-dark uppercase">Trusted Partnership</p>
          <h3 className="mt-2 text-2xl font-extrabold text-navy">Built on Trust</h3>
          <p className="mt-1 text-slate-500">Connecting markets. Creating opportunities.</p>
        </motion.div>
      </div>
    </section>
  )
}