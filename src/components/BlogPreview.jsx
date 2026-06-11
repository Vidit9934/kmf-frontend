import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiClock } from 'react-icons/fi'

const posts = [
  {
    category: 'Spotify',
    title: 'How to Get Your Song on Spotify Playlists in 2026 — A Complete Guide',
    excerpt:
      'From editorial pitching to independent curator outreach — the full playbook that KMF uses for every artist.',
    readTime: '8 min read',
    date: 'Jun 5, 2026',
    accent: '#1DB954',
    slug: 'how-to-get-on-spotify-playlists-2026',
  },
  {
    category: 'YouTube',
    title: 'YouTube Shorts vs Long-Form: What Actually Works for Indian Artists Right Now',
    excerpt:
      'We analysed 200+ campaigns. Here\'s what the data says about which format drives real subscriber growth.',
    readTime: '6 min read',
    date: 'May 28, 2026',
    accent: '#FF0000',
    slug: 'youtube-shorts-vs-longform-indian-artists',
  },
  {
    category: 'Artist Strategy',
    title: 'The Release Strategy That Got a Hindi Rap Track to 100K Streams in 21 Days',
    excerpt:
      'A behind-the-scenes breakdown of a real KMF campaign — from pre-release to playlist placement to final numbers.',
    readTime: '10 min read',
    date: 'May 20, 2026',
    accent: '#C9A84C',
    slug: 'hindi-rap-100k-streams-21-days',
  },
]

function PostCard({ post, index, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col"
      style={{ background: '#13151C', border: '1px solid rgba(255,255,255,0.07)' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(201,168,76,0.28)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,0.5)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none'; }}
    >
      {/* Thumbnail placeholder */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${post.accent}14, #0D0F18)`,
          borderBottom: `1px solid ${post.accent}18`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${post.accent} 0, ${post.accent} 1px, transparent 0, transparent 50%)`,
            backgroundSize: '10px 10px',
          }}
        />
        <span
          className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide border"
          style={{
            color: post.accent,
            background: `${post.accent}15`,
            borderColor: `${post.accent}30`,
          }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-white leading-snug mb-3 group-hover:text-gold-DEFAULT transition-colors">
          {post.title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed flex-1">{post.excerpt}</p>

          <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3 text-xs text-white/30">
            <span className="flex items-center gap-1"><FiClock size={11} /> {post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
          <a
            href={`/blog/${post.slug}`}
            className="text-xs font-medium text-white/45 hover:text-gold-DEFAULT flex items-center gap-1 transition-colors"
          >
            Read <FiArrowRight size={12} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function BlogPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} id="blog" className="py-24" style={{ background: '#0A0B10' }}>
      <div className="section-padding max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="section-label">Blog</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-3">
              Music Marketing<br />
              <span className="text-gold-gradient">Insights & Strategy</span>
            </h2>
          </div>
          <a
            href="/blog"
            className="btn-outline px-5 py-2.5 text-sm flex-shrink-0"
          >
            All 90+ Articles <FiArrowRight size={14} />
          </a>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
