import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMusic } from 'react-icons/fi'

const artists = [
  { name: 'Aditya Rikhari', song: 'Lajwab', streams: '8M+ Streams', color: '#7C3AED' },
  { name: 'Riar Saab', song: 'Waade', streams: '12M+ Streams', color: '#DC2626' },
  { name: 'Gajendra Verma', song: 'Good Vibes Only', streams: '15M+ Streams', color: '#059669' },
  { name: 'Shubh', song: 'Supreme', streams: '25M+ Streams', color: '#D97706' },
  { name: 'Krantiveer', song: 'Kagaz', streams: '5M+ Streams', color: '#C9A84C' },
  { name: 'Shubh', song: 'Moves', streams: '20M+ Streams', color: '#D97706' },
]

const labels = [
  'Zee Music', 'Saregama', 'Meet Bros', 'B-Town Music',
  'Town Films', 'Myra Music', 'Indie Independent', 'KMF Production',
]

function ArtistCard({ artist }) {
  const initials = artist.name.split(' ').map(n => n[0]).join('')
  return (
      <div className="flex-shrink-0 rounded-xl p-4 flex items-center gap-3 mx-3 min-w-[200px] transition-all duration-300 group"
        style={{ background: '#13151C', border: '1px solid rgba(255,255,255,0.07)' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.30)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; }}
      >
      {/* Avatar placeholder */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${artist.color}88, ${artist.color}33)` }}
      >
        {initials}
      </div>
      <div>
        <p className="text-white text-sm font-semibold leading-tight">{artist.name}</p>
        <p className="text-white/50 text-xs">{artist.song}</p>
        <p className="text-xs font-mono font-medium mt-0.5" style={{ color: artist.color }}>{artist.streams}</p>
      </div>
    </div>
  )
}

function LabelPill({ label }) {
  return (
    <div className="flex-shrink-0 mx-3 px-5 py-2.5 rounded-full transition-colors duration-300"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.35)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; }}
    >
      <span className="text-white/70 text-sm font-medium tracking-wide">{label}</span>
    </div>
  )
}

export default function CredibilityStrip() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  // Duplicate for seamless loop
  const doubledArtists = [...artists, ...artists]
  const doubledLabels = [...labels, ...labels]

  return (
    <section ref={ref} id="artists" className="py-20 overflow-hidden border-y" style={{ background: '#0D0F16', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="section-padding max-w-[1400px] mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Artist Credibility</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2">
            Trusted by Artists You Know
          </h2>
          <p className="text-white/50 mt-3 text-sm max-w-lg mx-auto">
            From indie to Bollywood — KMF Media has promoted the artists defining Indian music right now
          </p>
        </motion.div>
      </div>

      {/* Artists row */}
      <div className="relative mb-5 overflow-hidden">
        <div
          className="flex"
          style={{ animation: 'marquee 35s linear infinite' }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubledArtists.map((artist, i) => (
            <ArtistCard key={i} artist={artist} />
          ))}
        </div>
      </div>

      {/* Labels row */}
      <div className="relative overflow-hidden">
        <div
          className="flex items-center"
          style={{ animation: 'marquee 55s linear infinite' }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {doubledLabels.map((label, i) => (
            <LabelPill key={i} label={label} />
          ))}
          {/* Label with icon separator */}
          {doubledLabels.map((label, i) => (
            <LabelPill key={`b-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}
