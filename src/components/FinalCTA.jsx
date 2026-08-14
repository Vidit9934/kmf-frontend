import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMinus, FiPlus } from 'react-icons/fi'

const faqs = [
  {
    q: 'What platforms do you promote music on?',
    a: 'We run growth campaigns across Spotify, YouTube, Instagram Reels, and partner ecosystem channels aligned with your genre and audience.',
  },
  {
    q: 'Are the streams and views real?',
    a: 'Yes. KMF campaigns focus on real audience discovery, organic engagement signals, and platform-safe growth methods.',
  },
  {
    q: 'How quickly can I see campaign results?',
    a: 'Most artists start seeing movement in the first week, while stronger momentum typically compounds over 2-4 weeks with ongoing optimization.',
  },
  {
    q: 'Do you support both independent artists and labels?',
    a: 'Yes. We work with independent artists, managers, and labels, with strategy depth adjusted to your release scale and goals.',
  },
  {
    q: 'Can you help choose the right package for my budget?',
    a: 'Absolutely. Our team and recommendation workflow suggest a package based on current traction, genre, release timeline, and budget.',
  },
  {
    q: 'Do you provide reporting and transparency?',
    a: 'Yes. You get clear reporting snapshots and campaign updates so you can track what is working and where we are scaling.',
  },
]

export default function FinalCTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section ref={ref} id="faq" className="py-28 relative overflow-hidden" style={{ background: 'rgba(13,15,22,0.76)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(8,9,12,0.12)' }} />

      <div className="relative z-10 section-padding max-w-[900px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="premium-section-title soft-title-glow mt-4 mb-6 text-white">
            Frequently Asked Questions
          </h2>

          <p className="premium-subtext max-w-2xl mx-auto mb-10 leading-relaxed">
            Everything artists usually ask before starting with KMF Media.
          </p>

          <div className="text-left space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <motion.article
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border overflow-hidden"
                  style={{
                    background: 'rgba(19,21,28,0.92)',
                    borderColor: isOpen ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.09)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-white font-medium text-sm md:text-base">{item.q}</span>
                    <span className="text-gold-DEFAULT text-lg flex-shrink-0">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-6 pb-5 text-white/55 text-sm md:text-base leading-relaxed border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                          <p className="pt-4">{item.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            })}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
