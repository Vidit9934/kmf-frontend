import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Editorial testimonials — no star ratings
const QUOTES = [
  { name: 'Akshay Pandey', genre: 'Hindi Pop', initials: 'AP', color: '#7C3AED', result: '22K streams in 2 weeks',
    quote: 'KMF got my track on 40+ playlists in 10 days. The stream count jumped from 800 to 22,000 in two weeks. Completely blown away.' },
  { name: 'Pritam Arora', genre: 'Punjabi Folk', initials: 'PA', color: '#DC2626', result: '35K organic streams',
    quote: 'I was skeptical at first, but the results spoke for themselves. 35K real streams, zero fake plays. Sourav and the team are the real deal.' },
  { name: 'Sakshi Garg', genre: 'Indie / Alternative', initials: 'SG', color: '#059669', result: '18K+ streams under budget',
    quote: 'The Smart Recommender picked exactly the right package for where I was in my journey. Saved me from overspending and still got amazing results.' },
  { name: 'Suraj Arora', genre: 'Hindi Rap / DHH', initials: 'SA', color: '#D97706', result: '120K+ streams delivered',
    quote: 'Brand Builder package — \u20b935,000 and 120K+ streams. Do the math. KMF delivers. Will be back for my next release for sure.' },
  { name: 'Drishti Jain', genre: 'Electronic / EDM', initials: 'DJ', color: '#0EA5E9', result: 'Spotify editorial discovery',
    quote: 'Not just streams — I got discovered by a Spotify editorial curator through one of the playlists KMF pitched me to. Career-changing.' },
  { name: 'Rahul Mishra', genre: 'Indie Pop', initials: 'RM', color: '#EC4899', result: '55K streams from prize',
    quote: "The competition was the best thing that happened to me. Won it in March, got 55K streams from the prize campaign." },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const id = setInterval(() => { setDir(1); setCurrent(c => (c + 1) % QUOTES.length) }, 5200)
    return () => clearInterval(id)
  }, [])

  const t = QUOTES[current]
  const prev = () => { setDir(-1); setCurrent(c => (c - 1 + QUOTES.length) % QUOTES.length) }
  const next = () => { setDir(1); setCurrent(c => (c + 1) % QUOTES.length) }

  return (
    <section ref={ref} className="py-28" style={{ background: 'rgba(10,11,16,0.72)' }}>
      <div className="section-padding max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Artist Stories</span>
          <h2 className="premium-section-title text-white mt-3">
            Results That <span className="text-gold-gradient">Speak for Themselves</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main quote card */}
          <div className="relative rounded-3xl overflow-hidden"
            style={{ background: '#13151C', border: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Colored top bar */}
            <div className="h-[3px] w-full transition-all duration-500"
              style={{ background: `linear-gradient(90deg, ${t.color}, transparent 70%)` }} />

            {/* Large decorative quote */}
            <div className="absolute top-0 left-0 font-display font-black select-none pointer-events-none leading-none"
              style={{ fontSize: '200px', color: t.color, opacity: 0.04, transform: 'translate(-5px, 5px)' }}>
              "
            </div>

            <div className="p-10 md:p-14">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div key={current}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * 48 }}
                  transition={{ duration: 0.32, ease: 'easeInOut' }}
                >
                  <blockquote className="font-display text-2xl md:text-3xl text-white/90 leading-[1.45] mb-10">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between gap-6 flex-wrap">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-black text-sm flex-shrink-0"
                        style={{ background: t.color }}>
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-white font-semibold">{t.name}</p>
                        <p className="text-white/40 text-sm">{t.genre}</p>
                      </div>
                    </div>
                    {/* Result chip — replaces stars */}
                    <div className="px-4 py-2 rounded-full text-xs font-mono font-semibold"
                      style={{ background: `${t.color}14`, border: `1px solid ${t.color}28`, color: t.color }}>
                      ✦ {t.result}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {QUOTES.map((q, i) => (
                <button key={i}
                  onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i) }}
                  className="transition-all duration-300 rounded-full"
                  style={{ width: i === current ? '28px' : '8px', height: '8px', background: i === current ? t.color : 'rgba(255,255,255,0.14)' }}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={prev}
                className="w-11 h-11 rounded-full text-white/40 flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.45)'; e.currentTarget.style.color='#C9A84C'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='rgba(255,255,255,0.4)'; }}>
                <FiChevronLeft size={18}/>
              </button>
              <button onClick={next}
                className="w-11 h-11 rounded-full text-white/40 flex items-center justify-center transition-all duration-200"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.45)'; e.currentTarget.style.color='#C9A84C'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.12)'; e.currentTarget.style.color='rgba(255,255,255,0.4)'; }}>
                <FiChevronRight size={18}/>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
