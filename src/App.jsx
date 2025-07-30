"use client"

import { ThemeProvider } from "./contexts/ThemeContext"
import { ScrollProvider } from "./contexts/ScrollContext"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import PriceCalculator from "./components/PriceCalculator"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import BlogResource from "./components/BlogResource"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"
import ScrollProgress from "./components/ScrollProgress"
import { Toaster } from "sonner"
import DemoVideos from "./components/DemoVideos"

// Create a separate component for the app content
function AppContent() {
  return (
    <ScrollProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        <ParticleBackground />
        <ScrollProgress />
        <Navigation />
        <main className="relative z-10">
          <Hero />
          <Features />
          <DemoVideos />
          <Pricing />
          <PriceCalculator />
          <Testimonials />
          <FAQ />
          <BlogResource />
          <Contact />
          <Footer />
        </main>
        <Toaster />
      </div>
    </ScrollProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
