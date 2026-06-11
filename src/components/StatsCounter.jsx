import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const GOLD = '#C9A84C'
const GOLD_GLOW = 'rgba(201,168,76,0.35)'

const stats = [
  { value: 10000, label: 'Campaigns',  sub: 'Completed',         icon: '\uD83C\uDFAF' },
  { value: 2000,  label: 'Artists',    sub: 'Promoted',           icon: '\uD83C\uDFA4' },
  { value: 100,   label: 'Streams',    sub: 'Delivered',          icon: '\uD83D\uDCC8' },
  { value: 5,     label: 'Experience', sub: 'In Music Marketing', icon: '\uD83C\uDFC6' },
]

function useCountUp(target, duration = 2200, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 4)
      setCount(Math.floor(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setCount(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, active])
  return count
}

function StatCard({ stat, active, index }) {
  const count = useCountUp(stat.value, 2200, active)
  const display = active
    ? stat.label === 'Streams'
      ? `${count}M+`
      : stat.label === 'Experience'
      ? `${count} Yrs`
      : `${count.toLocaleString()}+`
    : '0'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center px-6 py-10 group cursor-default"
      style={{
        background: '#13151C',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '20px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease, border-color 0.3s ease',
      }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(201,168,76,0.32)',
        boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 24px ${GOLD_GLOW}`,
      }}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 90%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

      {/* Top accent line on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-2/3 transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />

      <div className="text-3xl mb-4 group-hover:-translate-y-1 transition-transform duration-300">{stat.icon}</div>

      <div
        className="metric-number leading-none mb-2"
        style={{
          fontSize: 'clamp(44px, 5vw, 66px)',
          color: GOLD,
          textShadow: active ? `0 0 24px rgba(201,168,76,0.30)` : 'none',
        }}
      >
        {display}
      </div>

      <div className="metric-label text-lg text-white mb-1">{stat.label}</div>
      <div className="text-white/35 text-xs font-medium tracking-[0.14em] uppercase">{stat.sub}</div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-1/4 group-hover:w-2/3 rounded-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
    </motion.div>
  )
}

export default function StatsCounter() {
  const { ref, inView } = useInView({ threshold: 0.25, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ background: '#0D0F16' }}>
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 65%)', filter: 'blur(60px)' }} />
      </div>

      <div className="section-padding max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">By The Numbers</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-3">
            Five Years of <span className="text-gold-gradient">Real Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {['360\u00b0 Marketing Team', '500+ YouTube Channels Monetized', '48hr Response Time', '100% Client Satisfaction'].map(item => (
            <span key={item}
              className="px-4 py-2 rounded-full text-xs font-mono tracking-wide text-white/45 cursor-default transition-colors duration-200 hover:text-white/70"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
