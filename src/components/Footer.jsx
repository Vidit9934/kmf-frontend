import { FiInstagram, FiYoutube, FiTwitter, FiMessageCircle } from 'react-icons/fi'

const navGroups = [
  {
    title: 'Platform',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About KMF', href: '/about' },
      { label: 'Artist Dashboard', href: '/dashboard' },
      { label: 'Monthly Competition', href: '/competition' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Spotify Promotion', href: '/services/spotify' },
      { label: 'YouTube Promotion', href: '/services/youtube' },
      { label: 'Instagram Reels', href: '/services/reels' },
      { label: 'Meta Ads', href: '/services/meta-ads' },
      { label: 'Music Distribution', href: '/services/distribution' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Refund Policy', href: '/refund' },
    ],
  },
]

const socials = [
  { icon: <FiInstagram size={18} />, href: 'https://instagram.com/kmfmedia', label: 'Instagram' },
  { icon: <FiYoutube size={18} />, href: 'https://youtube.com/@kmfmedia', label: 'YouTube' },
  { icon: <FiTwitter size={18} />, href: 'https://twitter.com/kmfmedia', label: 'Twitter' },
  {
    icon: <FiMessageCircle size={18} />,
    href: 'https://wa.me/919220545506',
    label: 'WhatsApp',
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#090A0E', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="section-padding max-w-[1400px] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center font-display font-black text-black text-lg">
                K
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                KMF <span className="text-gold-DEFAULT">MEDIA</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              India's leading music marketing platform. Real promotions for real artists —
              Spotify, YouTube, Reels & beyond.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.color='#C9A84C'; e.currentTarget.style.borderColor='rgba(201,168,76,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white text-xs font-mono font-semibold tracking-widest uppercase mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-7 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-white/25 text-xs font-mono">
            © {new Date().getFullYear()} KMF Media. All rights reserved. Built by Vidit Vaibhav.
          </p>
          <div className="flex items-center gap-2 text-white/25 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All campaigns are 100% organic
          </div>
        </div>
      </div>
    </footer>
  )
}
