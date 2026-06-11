import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi'

function LiveCounter() {
  const [val, setVal] = useState(100427891)
  useEffect(() => {
    const id = setInterval(() => setVal(v => v + Math.floor(Math.random() * 70 + 20)), 700)
    return () => clearInterval(id)
  }, [])
  return val.toLocaleString('en-IN')
}

const EVENTS = [
  { text: 'Mehak Singh pitched to 12 playlists', delta: '+3.2K streams', color: '#C9A84C' },
  { text: 'Krantiveer — Kagaz crossed 5M', delta: 'Milestone', color: '#E8C97A' },
  { text: 'Reels campaign hit 500K reach', delta: '+15K reach', color: '#C9A84C' },
  { text: 'Arjun Rawat — Brand Builder done', delta: '+118K views', color: '#E8C97A' },
  { text: 'SMR Music campaign now live', delta: 'Active', color: '#C9A84C' },
]

const HEADLINE = ['Your', 'Music.', 'The', 'Right', 'Audience.', 'Real', 'Growth.']

export default function Hero() {
  const [eventIdx, setEventIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setEventIdx(i => (i + 1) % EVENTS.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0A0B10' }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -right-40 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 60%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 60%)', filter: 'blur(60px)' }} />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 section-padding max-w-[1400px] w-full mx-auto pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-[calc(100vh-100px)]">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full"
              style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-green-400 text-xs font-mono tracking-wide">2,000+ Artists Growing Right Now</span>
            </motion.div>

            <h1 className="font-display font-black leading-[1.0] tracking-tight mb-6 text-5xl sm:text-6xl xl:text-[72px]">
              {HEADLINE.map((word, i) => (
                <motion.span key={i}
                  initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className={`inline-block mr-3 mb-1 ${word === 'Real' || word === 'Growth.' ? 'text-gold-gradient' : 'text-white'}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.88 }}
              className="text-white/55 text-lg max-w-[460px] mb-10 leading-relaxed"
            >
              {'India\'s leading music marketing platform \u2014 '}
              <span className="text-white font-medium">100M+ streams</span>{' '}
              delivered for <span className="text-white font-medium">2,000+ artists</span>{' '}
              on Spotify, YouTube &amp; Reels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.08 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#signup" className="btn-gold text-sm px-8 py-4">
                Get Started Free <FiArrowRight size={16} />
              </a>
              <a href="https://wa.me/919220545506" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300"
                style={{ border: '1px solid rgba(37,211,102,0.28)', color: '#25D366' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.07)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <FiMessageCircle size={17} />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.35 }}
              className="flex gap-8 xl:gap-12"
            >
              {[
                { num: '100M+', lbl: 'Streams Delivered' },
                { num: '2K+', lbl: 'Artists Promoted' },
                { num: '\u20b95K', lbl: 'Starting Price' },
              ].map(s => (
                <div key={s.lbl}>
                  <div className="metric-number text-3xl xl:text-4xl text-gold-DEFAULT">{s.num}</div>
                  <div className="text-white/35 text-[11px] mt-1 font-medium tracking-[0.16em] uppercase">{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Artist image with live stats */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            {/* Glow halo */}
            <div className="absolute -inset-3 rounded-[32px] opacity-40 blur-2xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.35) 0%, transparent 65%)' }} />

            {/* Main card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[24px] overflow-hidden"
              style={{
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                background: '#0D0F18',
                transform: 'perspective(1200px) rotateY(-3deg) rotateX(1deg)',
              }}
            >
              {/* Artist photo */}
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=80"
                alt="Artist performing live"
                className="w-full h-[420px] object-cover"
                style={{ filter: 'saturate(0.8) brightness(0.6)' }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0A0B10 0%, rgba(10,11,16,0.65) 40%, transparent 80%)' }} />

              {/* Gold top line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C 30%, #E8C97A 70%, transparent)' }} />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    <span className="text-white/50 text-xs font-mono">Live Streams</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded-full"
                    style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ade80' }}>
                    +24.7% this month
                  </span>
                </div>

                <div className="font-mono text-3xl font-black text-white mb-3 tracking-tight">
                  <LiveCounter />
                </div>

                <div className="rounded-xl p-3"
                  style={{ background: 'rgba(16,18,26,0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <AnimatePresence mode="wait">
                    <motion.div key={eventIdx}
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: EVENTS[eventIdx].color }} />
                        <span className="text-white/50 text-xs truncate">{EVENTS[eventIdx].text}</span>
                      </div>
                      <span className="text-xs font-mono font-semibold flex-shrink-0"
                        style={{ color: EVENTS[eventIdx].color }}>
                        {EVENTS[eventIdx].delta}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Floating badge: track */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-8 rounded-xl px-4 py-3 flex items-center gap-3"
              style={{ background: '#13151C', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(201,168,76,0.1)' }}>&#127925;</div>
              <div>
                <div className="text-white text-xs font-semibold">Kagaz — Krantiveer</div>
                <div className="text-xs font-mono" style={{ color: '#C9A84C' }}>+5.2K streams today</div>
              </div>
            </motion.div>

            {/* Floating badge: achievement */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -right-6 rounded-xl px-4 py-3 flex items-center gap-2.5"
              style={{ background: '#13151C', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 8px 30px rgba(0,0,0,0.5)' }}
            >
              <span className="text-sm">&#127942;</span>
              <div>
                <div className="text-white text-xs font-semibold">Brand Builder</div>
                <div className="text-xs font-mono" style={{ color: '#C9A84C' }}>100K+ streams</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
