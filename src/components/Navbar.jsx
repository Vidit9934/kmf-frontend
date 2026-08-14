import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Artist', href: '#artists' },
  { label: 'Competition', href: '#competition' },
  { label: 'Dev', href: '#dev' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
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
          : 'backdrop-blur-md border-b'
      }`}
      style={{
        background: scrolled ? 'rgba(8,9,12,0.96)' : 'rgba(8,9,12,0.86)',
        borderColor: 'rgba(201,168,76,0.16)',
      }}
    >
      <div className="section-padding max-w-[1400px] mx-auto py-2 lg:py-3">
        <div className="h-14 lg:h-16 rounded-full border border-[#C9A84C]/20 bg-black/55 backdrop-blur-xl px-4 lg:px-6 flex items-center justify-between shadow-[0_14px_34px_rgba(0,0,0,0.35)]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center font-display font-black text-black text-lg leading-none">
              K
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              KMF <span className="text-gold-DEFAULT">MEDIA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
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
              Get Started
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
            <a href="#signup" className="btn-gold text-center text-sm py-3">Get Started</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
