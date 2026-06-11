import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import { SiSpotify, SiYoutube, SiInstagram, SiFacebook, SiGoogle } from 'react-icons/si'
import { FiMic, FiGlobe, FiEdit3 } from 'react-icons/fi'

const SERVICES = [
  { icon: <SiSpotify size={28}/>, iconColor: '#1DB954', title: 'Spotify Promotion', description: 'Playlist pitching & curator outreach. Real streams from real listeners.', price: '₹5,500', from: 'Tester Bag plan', href: '/services/spotify', badge: 'Most Popular' },
  { icon: <SiYoutube size={28}/>, iconColor: '#FF4444', title: 'YouTube Promotion', description: 'Targeted views, subscriber growth, and influencer placements.', price: '₹5,000', from: 'Testers Bag plan', href: '/services/youtube' },
  { icon: <SiInstagram size={28}/>, iconColor: '#E1306C', title: 'Instagram Reels', description: 'Get featured on 200+ genre-specific pages. Reach millions of music fans.', price: '₹10,000', from: 'Testers Bag plan', href: '/services/reels' },
  { icon: <SiFacebook size={28}/>, iconColor: '#1877F2', title: 'Meta Ads', description: 'Precision-targeted Facebook & Instagram campaigns for your release.', price: 'Custom', from: 'Contact for quote', href: '/services/meta-ads' },
  { icon: <SiGoogle size={28}/>, iconColor: '#4285F4', title: 'Google Ads', description: 'Search & display campaigns that put your music in front of the right people.', price: 'Custom', from: 'Contact for quote', href: '/services/google-ads' },
  { icon: <FiEdit3 size={28}/>, iconColor: '#C9A84C', title: 'Press Release', description: 'Professional PR writing & distribution to top Indian music blogs and media.', price: '\u20b92,500', from: 'Starting price', href: '/services/press-release' },
  { icon: <FiMic size={28}/>, iconColor: '#ffffff', title: 'Consultation', description: 'Book a 1-on-1 strategy call with the KMF team. Plan your next release right.', price: 'Free', from: 'First session', href: '/services/consultation' },
  { icon: <FiGlobe size={28}/>, iconColor: '#C9A84C', title: 'Music Distribution', description: 'Worldwide distribution across 150+ platforms via our Tunfry partner.', price: '\u20b9999', from: 'Per release', href: '/services/distribution' },
]

function ServiceCard({ service, inView, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative flex-shrink-0 flex flex-col group"
      style={{
        background: '#13151C',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        padding: '24px',
        width: '280px',
        minHeight: '320px',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease',
      }}
      whileHover={{
        y: -7,
        boxShadow: `0 20px 55px rgba(0,0,0,0.65), 0 0 20px ${service.iconColor}18`,
        borderColor: `${service.iconColor}40`,
      }}
    >
      {/* Top neon border line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(90deg, transparent, ${service.iconColor}, transparent)` }} />

      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${service.iconColor}10, transparent 70%)` }} />

      {/* Badge */}
      {service.badge && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-bold z-10"
          style={{ background: 'linear-gradient(135deg, #B8922A, #D4AF5A)', color: '#fff', boxShadow: '0 2px 12px rgba(201,168,76,0.4)' }}>
          {service.badge}
        </div>
      )}

      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${service.iconColor}15`, border: `1px solid ${service.iconColor}30` }}>
        <span style={{ color: service.iconColor }}>{service.icon}</span>
      </div>

      <h3 className="font-display text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-white/45 text-sm leading-relaxed flex-1">{service.description}</p>

      <div className="mt-6 pt-5 flex items-end justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div>
          <div className="font-mono font-black text-2xl" style={{ color: service.iconColor }}>{service.price}</div>
          <div className="text-white/30 text-xs mt-0.5">{service.from}</div>
        </div>
        <a href={service.href} className="flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white transition-colors">
          Learn More <FiArrowRight size={13}/>
        </a>
      </div>
    </motion.div>
  )
}

export default function ServicesGrid() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * 304, behavior: 'smooth' })
    setTimeout(() => {
      setAtStart(el.scrollLeft <= 10)
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10)
    }, 420)
  }

  return (
    <section ref={ref} id="services" className="py-24 overflow-hidden" style={{ background: '#0A0B10' }}>
      <div className="section-padding max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-5"
        >
          <div>
            <span className="section-label">Services</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-3">
              Grow Your Music—<br/>
              <span className="text-gold-gradient">Starting from ₹5,000</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll(-1)} disabled={atStart}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.45)'; e.currentTarget.style.color='#C9A84C'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='rgba(255,255,255,0.5)'; }}
            >
              <FiChevronLeft size={20}/>
            </button>
            <button onClick={() => scroll(1)} disabled={atEnd}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-25"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.45)'; e.currentTarget.style.color='#C9A84C'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='rgba(255,255,255,0.5)'; }}
            >
              <FiChevronRight size={20}/>
            </button>
          </div>
        </motion.div>

        {/* pt-4 gives headroom — cards use internal badge so no overflow clip */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto pb-6"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory', msOverflowStyle: 'none' }}
          onScroll={(e) => {
            const el = e.currentTarget
            setAtStart(el.scrollLeft <= 10)
            setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10)
          }}
        >
          {SERVICES.map((service, i) => (
            <div key={service.title} style={{ scrollSnapAlign: 'start' }}>
              <ServiceCard service={service} inView={inView} index={i} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm text-white/25"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          All promotions are 100% organic — no bots, no fake plays, no shortcuts
        </motion.div>
      </div>
    </section>
  )
}




