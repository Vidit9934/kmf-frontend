/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#A07830',
        },
        dark: {
          DEFAULT: '#0A0B10',
          alt: '#0D0F16',
          card: '#13151C',
          elevated: '#1B1D26',
          border: 'rgba(255,255,255,0.07)',
          muted: '#2A2D3A',
        },
      },
      fontFamily: {
        display: ['Bodoni Moda', 'Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'scroll-left': 'scrollLeft 35s linear infinite',
        'scroll-left-slow': 'scrollLeft 50s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(201,168,76,0.5)' },
        },
      },
    },
  },
  plugins: [],
}
