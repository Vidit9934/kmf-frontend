import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import CompetitionBanner from './components/CompetitionBanner'
import ServicesGrid from './components/ServicesGrid'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import BlogPreview from './components/BlogPreview'
import PackageWidget from './components/PackageWidget'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ServicesGrid />
        <HowItWorks />
        <CompetitionBanner />
        <Testimonials />
        <BlogPreview />
        <PackageWidget />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
