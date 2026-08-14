import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'

function getDeadline() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0)
}

function useCountdown(deadline) {
  const [timeLeft, setTimeLeft] = useState({})
  useEffect(() => {
    const calc = () => {
      const diff = deadline - Date.now()
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [deadline])
  return timeLeft
}

const WINNERS = [
  { artist: 'Mehak Singh', track: 'Teri Yaadon Mein', month: 'May 2026', streams: '+42K streams', clr: '#1DB954' },
  { artist: 'Arjun Rawat', track: 'Dil Ki Baat', month: 'Apr 2026', streams: '+38K streams', clr: '#C9A84C' },
  { artist: 'Priya Nair', track: 'Aakash', month: 'Mar 2026', streams: '+55K streams', clr: '#EC4899' },
]

// Bokeh orbs for concert atmosphere
const BOKEH = [
  { size: 320, x: 70, y: 10, clr: 'rgba(201,168,76,0.16)', dur: 8 },
  { size: 220, x: 5, y: 60, clr: 'rgba(201,168,76,0.09)', dur: 11 },
  { size: 160, x: 88, y: 75, clr: 'rgba(201,168,76,0.07)', dur: 7 },
  { size: 120, x: 35, y: 85, clr: 'rgba(201,168,76,0.06)', dur: 13 },
  { size: 90, x: 55, y: 15, clr: 'rgba(201,168,76,0.05)', dur: 9 },
]

function CountFlip({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-black text-3xl text-white numeric-accent"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}>
        {String(value ?? 0).padStart(2, '0')}
      </div>
      <div className="text-white/35 text-xs mt-2 tracking-widest uppercase font-mono">{label}</div>
    </div>
  )
}

export default function CompetitionBanner() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const deadline = getDeadline()
  const time = useCountdown(deadline)

  return (
    <section ref={ref} id="competition" className="relative py-28 overflow-hidden">
      {/* Concert atmosphere — layered gradient spotlights */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 55% at 50% -5%, rgba(124,58,237,0.35) 0%, transparent 55%),
          radial-gradient(ellipse 55% 50% at 92% 100%, rgba(244,63,126,0.22) 0%, transparent 55%),
          radial-gradient(ellipse 40% 45% at 0% 55%, rgba(34,211,238,0.10) 0%, transparent 55%),
          linear-gradient(180deg, #080820 0%, #05050F 45%, #08080F 100%)
        `
      }}/>

      {/* Animated bokeh orbs */}
      {BOKEH.map((b, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{ width: b.size, height: b.size, left: `${b.x}%`, top: `${b.y}%`, background: b.clr, transform: 'translate(-50%,-50%)' }}
          animate={{ scale: [1, 1.25, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 1.6 }}
        />
      ))}

      {/* Microphone SVG watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none select-none translate-x-1/4">
        <svg width="520" height="620" viewBox="0 0 24 28" fill="white">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
          <path d="M19 10c0 3.866-3.134 7-7 7s-7-3.134-7-7H3c0 4.418 3.582 8.157 8 8.854V22H9v2h6v-2h-2v-3.146c4.418-.697 8-4.436 8-8.854h-2z"/>
        </svg>
      </div>

      {/* Horizontal grid lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px,transparent 1px)', backgroundSize: '100% 80px' }}/>

      <div className="relative z-10 section-padding max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full"
              style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.22)' }}>
              <span className="text-xl">&#127942;</span>
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-gold-DEFAULT">Monthly Competition</span>
            </div>

            <h2 className="premium-section-title text-white mb-5">
              Win Free<br/>
              <span className="text-gold-gradient">Music Promotion</span>
            </h2>

            <p className="premium-subtext mb-2 max-w-lg">
              Every month, one artist wins a complete{' '}
              <span className="text-white font-semibold">Spotify Playlist Magic</span> campaign worth{' '}
              <span className="text-gold-DEFAULT font-mono font-bold">₹11,000</span> plus KMF social shoutout and a dedicated blog feature.
            </p>
            <p className="text-white/30 text-sm mb-8 font-mono">Zero cost. Just your Spotify track.</p>

            <div className="space-y-3 mb-9">
              {[
                { n: '01', txt: 'Sign up or log in to KMF Media' },
                { n: '02', txt: 'Submit your Spotify track link + genre' },
                { n: '03', txt: 'Wait for the monthly winner announcement' },
              ].map(s => (
                <div key={s.n} className="flex items-center gap-4">
                  <span className="font-mono text-gold-DEFAULT font-bold text-sm w-6 opacity-70">{s.n}</span>
                  <span className="text-white/55 text-sm">{s.txt}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/competition" className="btn-gold px-8 py-3.5">
                Enter This Month <FiArrowRight />
              </a>
              <span className="text-white/25 text-xs font-mono">500+ artists competed so far</span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Countdown */}
            <div className="rounded-3xl p-8"
              style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.18)', boxShadow: '0 0 40px rgba(201,168,76,0.04)' }}>
              <p className="text-white/30 text-xs font-mono tracking-widest uppercase text-center mb-8">Submissions close in</p>
              <div className="flex items-end justify-center gap-4">
                <CountFlip value={time.d} label="Days" />
                <span className="text-gold-DEFAULT/30 text-4xl font-thin pb-7">:</span>
                <CountFlip value={time.h} label="Hrs" />
                <span className="text-gold-DEFAULT/30 text-4xl font-thin pb-7">:</span>
                <CountFlip value={time.m} label="Min" />
                <span className="text-gold-DEFAULT/30 text-4xl font-thin pb-7">:</span>
                <CountFlip value={time.s} label="Sec" />
              </div>
            </div>

            {/* Winners */}
            <div>
              <p className="text-white/25 text-xs font-mono tracking-widest uppercase mb-4">Recent Winners</p>
              <div className="space-y-3">
                {WINNERS.map((w) => (
                  <motion.div key={w.artist}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5"
                    style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                        style={{ background: w.clr }}>
                        {w.artist[0]}
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{w.artist}</p>
                        <p className="text-white/30 text-xs">"{w.track}" · {w.month}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full flex-shrink-0 numeric-accent"
                      style={{ background: `${w.clr}18`, color: w.clr, border: `1px solid ${w.clr}28` }}>
                      {w.streams}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

