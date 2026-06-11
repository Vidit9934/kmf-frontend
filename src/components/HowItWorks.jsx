import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUserPlus, FiPackage, FiTrendingUp, FiArrowRight } from 'react-icons/fi'

const steps = [
  {
    number: '01',
    icon: <FiUserPlus size={28} />,
    title: 'Sign Up & Analyse',
    description:
      'Create your free account, paste your Spotify link, and get AI-powered insights about your music and ideal promotion strategy.',
    highlight: 'Free · No credit card needed',
  },
  {
    number: '02',
    icon: <FiPackage size={28} />,
    title: 'Choose Your Plan',
    description:
      'Our Smart Recommender analyses your track and suggests the perfect package matched to your genre, budget, and current stream count.',
    highlight: 'AI-Powered Recommendation',
  },
  {
    number: '03',
    icon: <FiTrendingUp size={28} />,
    title: 'Watch Your Music Grow',
    description:
      'We pitch playlists, run campaigns, and report results. Track everything live from your dashboard — streams, playlists, and progress.',
    highlight: 'Real results. Real data.',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} id="how-it-works" className="py-24 relative" style={{ background: '#0D0F16' }}>
      <div className="section-padding max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            From Signup to Streams —<br />
            <span className="text-gold-gradient">In 3 Simple Steps</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            No complicated onboarding. No back-and-forth emails. Just your music, our platform, and real growth.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(100%-160px)] h-px">
            <div className="w-full h-full" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex flex-col"
              >
                {/* Arrow connector (desktop, not last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-14 -right-4 z-10 items-center">
                    <FiArrowRight style={{ color: 'rgba(201,168,76,0.4)' }} size={20} />
                  </div>
                )}

                {/* Card */}
                <div className="card-dark rounded-2xl p-8 flex flex-col flex-1 group"
                  style={{
                    background: '#13151C',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.30)'
                    e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.55)'
                    e.currentTarget.style.transform = 'translateY(-6px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <span className="font-mono text-5xl font-bold text-white/5 leading-none select-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{step.description}</p>

                  {/* Highlight badge */}
                  <div className="mt-5">
                    <span className="text-xs font-mono px-3 py-1.5 rounded-full"
                      style={{ color: '#C9A84C', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.20)' }}>
                      ✦ {step.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a href="#signup" className="btn-gold text-base px-10 py-4">
            Start for Free — No Credit Card Needed <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
