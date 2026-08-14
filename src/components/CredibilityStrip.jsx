import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const artists = [
  {
    name: 'Krantiveer',
    song: 'Kagaz',
    genre: 'Hindi Pop',
    streams: '5M+ Streams',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Riar Saab',
    song: 'Waade',
    genre: 'Punjabi Indie',
    streams: '12M+ Streams',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Aditya Rikhari',
    song: 'Lajwab',
    genre: 'Soul Pop',
    streams: '8M+ Streams',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Gajendra Verma',
    song: 'Good Vibes Only',
    genre: 'Commercial Pop',
    streams: '15M+ Streams',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Shubh',
    song: 'Supreme',
    genre: 'Hip-Hop',
    streams: '25M+ Streams',
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mehak Singh',
    song: 'Teri Yaadon Mein',
    genre: 'Indie Ballad',
    streams: '4.2M+ Streams',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80',
  },
]

function ArtistCard({ artist, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative rounded-2xl overflow-hidden flex-shrink-0 w-[390px] grid grid-cols-[43%_57%] card-3d"
      style={{
        background: 'linear-gradient(160deg, rgba(22,24,31,0.96) 0%, rgba(12,13,18,0.95) 100%)',
        border: '1px solid rgba(201,168,76,0.18)',
        boxShadow: '0 18px 30px rgba(0,0,0,0.45)',
      }}
      whileHover={{ y: -8, rotateY: 4, rotateX: 2, borderColor: 'rgba(201,168,76,0.36)' }}
      whileTap={{ scale: 0.98 }}
      transformTemplate={({ rotateY, rotateX, y }) =>
        `perspective(900px) rotateY(${rotateY || 0}deg) rotateX(${rotateX || 0}deg) translateY(${y || 0}px)`
      }
    >
      <div className="relative h-full min-h-[220px] overflow-hidden">
        <img
          src={artist.image}
          alt={`${artist.name} performing`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,9,12,0.82) 0%, rgba(8,9,12,0.2) 55%, transparent 100%)' }} />
      </div>

      <div className="relative p-5">
        <div className="mesh-overlay" aria-hidden="true" />
        <p className="text-white font-display text-[1.5rem] leading-[1.02]">{artist.name}</p>
        <p className="text-white/62 text-[0.68rem] mt-1 tracking-[0.18em] uppercase">{artist.genre}</p>
        <p className="text-white/88 text-[1rem] mt-3 leading-snug">"{artist.song}"</p>
        <p className="text-gold-DEFAULT text-xs font-mono font-medium mt-3 numeric-accent">{artist.streams}</p>
      </div>
    </motion.article>
  )
}

export default function CredibilityStrip() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const movingArtists = [...artists, ...artists]

  return (
    <section ref={ref} id="artists" className="py-20 overflow-x-hidden overflow-y-visible border-y" style={{ background: 'rgba(13,15,22,0.72)', borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="section-padding max-w-[1400px] mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">Artists We Have Worked With</span>
          <h2 className="premium-section-title soft-title-glow text-white mt-2">
            Trusted by Artists You Know
          </h2>
          <p className="premium-subtext mt-3 max-w-2xl mx-auto">
            From indie to Bollywood, we have worked with artists across genres and built campaigns around their unique sound.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden mb-10 pt-3">
        <div
          className="flex gap-6 items-stretch w-max"
          style={{ animation: 'marquee 38s linear infinite' }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {movingArtists.map((artist, i) => (
            <ArtistCard key={`${artist.name}-${artist.song}-${i}`} artist={artist} index={i % artists.length} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
