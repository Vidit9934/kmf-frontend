import { motion } from 'framer-motion'
import { FiArrowRight, FiUsers } from 'react-icons/fi'
import { SiSpotify, SiYoutube } from 'react-icons/si'

export default function Hero() {
  return (
    <section id="home" className="hero-premium relative overflow-hidden pt-20 pb-14 lg:min-h-screen lg:pt-28 lg:pb-0">
      <div className="hero-premium-noise" aria-hidden="true" />
      <div className="hero-premium-wave" aria-hidden="true" />

      <div className="section-padding max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold-DEFAULT uppercase tracking-[0.24em] text-xs mb-4"
            >
              KMF Media
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="hero-premium-title text-white leading-[0.92]"
            >
              Ready to
              <br />
              <span className="text-gold-gradient">Amplify</span>
              <br />
              Your Music
              <br />
              Career?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/60 text-lg leading-relaxed mt-6 max-w-[510px]"
            >
              Join <span className="text-gold-DEFAULT font-semibold numeric-accent">2,000+ artists</span> who trust KMF Media for real
              growth on Spotify, YouTube, and beyond. Your next chapter starts here.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#signup" className="btn-gold px-8 py-4 text-base">
                <span className="inline-flex items-end gap-[2px]">
                  <span className="waveform-bar h-3" />
                  <span className="waveform-bar h-4" style={{ animationDelay: '0.1s' }} />
                  <span className="waveform-bar h-2" style={{ animationDelay: '0.2s' }} />
                </span>
                Get Started Free <FiArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-outline px-8 py-4 text-base text-white/85 border-white/25">
                Talk to Our Team
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-6 lg:mt-0"
          >
            <div className="hero-trust-chip">
              <FiUsers />
              <div>
                <p>Worked With</p>
                <strong className="numeric-accent">2,000+ Artists</strong>
              </div>
            </div>

            <motion.div
              className="vinyl-stage"
              animate={{ y: [0, -8, 0], rotateY: [-7, 7, -7] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="vinyl-disc"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <span className="vinyl-marker" aria-hidden="true" />
                <div className="vinyl-center-label" aria-hidden="true">
                  <span>KMF</span>
                  <small>Certified Banger</small>
                </div>
                <span className="vinyl-shine" aria-hidden="true" />
              </motion.div>
            </motion.div>

            <div className="hero-growth-card">
              <div className="hero-growth-chart" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div>
                <h3>Real Growth. Real Results.</h3>
                <p>Proven strategies that take your music further.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="hero-premium-bottom mt-12 lg:mt-9"
        >
          <div className="hero-platform-strip" aria-label="Platforms supported">
            <span><SiSpotify className="spotify-icon" /> Spotify</span>
            <span><SiYoutube className="youtube-icon" /> YouTube</span>
            <span>&amp; Beyond</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
