import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiMessageCircle } from 'react-icons/fi'

export default function FinalCTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} id="contact" className="py-28 relative overflow-hidden" style={{ background: '#0D0F16' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 65%)', filter: 'blur(70px)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 section-padding max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="section-label">Start Today</span>

          {/* Headline */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black mt-4 mb-6 leading-tight">
            <span className="text-gold-gradient">Ready to Amplify</span>
            <br />
            Your Music Career?
          </h2>

          {/* Subtext */}
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Join <span className="text-white font-medium">2,000+ artists</span> who trust KMF Media for real growth
            on Spotify, YouTube, and beyond. Your next chapter starts here.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#signup" className="btn-gold text-base px-10 py-4">
              Get Started Free <FiArrowRight />
            </a>
            <a href="#contact-form" className="btn-outline text-base px-10 py-4">
              Talk to Our Team
            </a>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919220545506"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 group"
          >
            <FiMessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-sm font-semibold">Chat on WhatsApp</div>
              <div className="text-xs text-[#25D366]/60">+91 9220545506 · Usually replies within 1hr</div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
