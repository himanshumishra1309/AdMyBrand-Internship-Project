import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { ScrollProvider } from './contexts/ScrollContext'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <main>
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
