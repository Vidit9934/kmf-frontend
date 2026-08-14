import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLink, FiArrowRight, FiZap } from 'react-icons/fi'

export default function PackageWidget() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [url, setUrl] = useState('')
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: check login state, redirect to dashboard with pre-loaded URL
    if (url.trim()) {
      window.location.href = `/login?redirect=/dashboard&track=${encodeURIComponent(url)}`
    }
  }

  return (
    <section ref={ref} id="dev" className="py-20" style={{ background: 'rgba(13,15,22,0.72)' }}>
      <div className="section-padding max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl p-8 md:p-12 transition-all duration-500 ${
            focused ? 'shadow-[0_0_50px_rgba(201,168,76,0.15)]' : ''
          }`}
          style={{
            background: '#13151C',
            border: focused
              ? '1px solid rgba(201,168,76,0.45)'
              : '1px solid rgba(255,255,255,0.09)',
          }}
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg gold-gradient flex items-center justify-center">
              <FiZap size={14} className="text-black" />
            </div>
            <span className="text-gold-DEFAULT text-xs font-mono font-medium tracking-widest uppercase">
              Dev + AI Recommender
            </span>
          </div>

          <h2 className="premium-section-title no-title-glow text-white mb-3 leading-tight">
            Paste Your Track Link.<br />
            <span className="text-gold-gradient">Get Your Growth Plan.</span>
          </h2>
          <p className="premium-subtext mb-8 max-w-lg leading-relaxed">
            Our AI analyses your Spotify or YouTube link and recommends the perfect promotion
            package for your genre, audience, and budget. Free. Instant.
          </p>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div
              className="flex items-center gap-3 flex-1 rounded-xl px-4 py-3.5 border transition-all duration-300"
              style={{
                background: '#0A0B10',
                borderColor: focused ? 'rgba(201,168,76,0.45)' : 'rgba(255,255,255,0.10)',
              }}
            >
              <FiLink className="text-white/30 flex-shrink-0" size={18} />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="Paste your Spotify or YouTube link..."
                className="flex-1 bg-transparent text-white placeholder-white/25 text-sm outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              className="btn-gold px-6 py-3.5 text-sm flex-shrink-0 whitespace-nowrap"
            >
              Analyse My Track <FiArrowRight />
            </button>
          </form>

          {/* Sub-note */}
          <p className="text-white/25 text-xs mt-4 font-mono">
            Free to use · Login required to view full recommendation · No payment needed
          </p>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              'Spotify Promotion',
              'YouTube Campaigns',
              'Reels Promotion',
              'Premium Bundle',
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full text-xs text-white/40 bg-white/[0.03] border border-white/[0.06]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
