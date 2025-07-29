import { motion, useScroll, useTransform } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingNav } from "@/components/floating-nav"
import { LoadingScreen } from "@/components/loading-screen"
import { ErrorBoundary } from "@/components/error-boundary"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer);
  }, [])

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div
          className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden transition-colors duration-500">
          {/* Enhanced Animated Background */}
          <motion.div
            className="fixed inset-0 opacity-40 dark:opacity-30"
            style={{ y: backgroundY }}>
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse" />
            <div
              className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-bounce"
              style={{ animationDuration: "6s" }} />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-bounce"
              style={{ animationDuration: "8s", animationDelay: "2s" }} />
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/15 dark:bg-pink-400/8 rounded-full blur-2xl animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "1s" }} />
          </motion.div>

          {/* Floating Navigation */}
          <FloatingNav />

          {/* Enhanced Theme Toggle */}
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>

          {/* Main Content */}
          <main className="relative z-10">
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <Footer />
          </main>

          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform-gpu z-50"
            style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
