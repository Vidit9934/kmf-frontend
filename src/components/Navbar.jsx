import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Artists', href: '#artists' },
  { label: 'Competition', href: '#competition' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(9,10,15,0.96)', borderColor: 'rgba(255,255,255,0.07)' } : {}}
    >
      <div className="section-padding max-w-[1400px] mx-auto flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center font-display font-black text-black text-lg leading-none">
            K
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            KMF <span className="text-gold-DEFAULT">MEDIA</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/65 hover:text-gold-DEFAULT transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#login" className="btn-outline text-sm py-2.5 px-5">
            Log In
          </a>
          <a href="#signup" className="btn-gold text-sm py-2.5 px-5">
            Get Started Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/70 hover:text-gold-DEFAULT p-2 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] border-b border-[#1A1B22]' : 'max-h-0'
        } bg-[#0A0B10]`}
      >
        <nav className="section-padding flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm font-medium text-white/65 hover:text-gold-DEFAULT transition-colors border-b border-[#1A1C25] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <a href="#login" className="btn-outline text-center text-sm py-3">Log In</a>
            <a href="#signup" className="btn-gold text-center text-sm py-3">Get Started Free</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
