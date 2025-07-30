"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button.jsx"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote:
      "ADmyBRAND AI Suite transformed our marketing efficiency by 300%. The AI-generated content is indistinguishable from our best copywriters, and the automation features have saved us countless hours.",
    rating: 5,
    metrics: { roi: "+247%", time_saved: "20hrs/week" },
    location: "San Francisco, CA",
    companySize: "500+ employees",
  },
  {
    name: "Michael Chen",
    role: "CEO & Founder",
    company: "StartupBoost",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    quote:
      "The automation features saved us 20 hours per week. Our ROI improved dramatically within the first month of using the platform. It's like having a team of marketing experts working 24/7.",
    rating: 5,
    metrics: { roi: "+180%", time_saved: "25hrs/week" },
    location: "Austin, TX",
    companySize: "50-100 employees",
  },
  {
    name: "Emily Rodriguez",
    role: "Growth Manager",
    company: "ScaleUp Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    quote:
      "The analytics insights are game-changing. We can now predict campaign performance with 95% accuracy before launch. The AI recommendations have consistently outperformed our manual strategies.",
    rating: 5,
    metrics: { roi: "+320%", time_saved: "15hrs/week" },
    location: "New York, NY",
    companySize: "200+ employees",
  },
  {
    name: "David Kim",
    role: "VP of Marketing",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote:
      "The AI-powered insights helped us identify untapped market opportunities worth $2M in revenue. The platform pays for itself within weeks, not months.",
    rating: 5,
    metrics: { roi: "+412%", time_saved: "30hrs/week" },
    location: "Seattle, WA",
    companySize: "1000+ employees",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Marketing Lead",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    quote:
      "Our conversion rates improved by 85% in just 3 months. The AI content optimization is incredibly sophisticated - it's like having a data scientist on our team.",
    rating: 5,
    metrics: { roi: "+285%", time_saved: "18hrs/week" },
    location: "Miami, FL",
    companySize: "100-200 employees",
  },
]

export default function Testimonials() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Reset image loading state when currentIndex changes
  useEffect(() => {
    setImageLoading(true)
    setImageError(false)
  }, [currentIndex])

  const handleImageLoad = () => {
    setImageLoading(false)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageLoading(false)
    setImageError(true)
  }

  const nextTestimonial = () => {
    setIsTransitioning(true)
    setIsAutoPlaying(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setImageLoading(true)
      setImageError(false)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const prevTestimonial = () => {
    setIsTransitioning(true)
    setIsAutoPlaying(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setImageLoading(true)
      setImageError(false)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const goToTestimonial = (index) => {
    if (index === currentIndex) return
    setIsTransitioning(true)
    setIsAutoPlaying(false)
    setTimeout(() => {
      setCurrentIndex(index)
      setImageLoading(true)
      setImageError(false)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-16 sm:py-20 md:py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-r from-slate-900/50 to-purple-900/50"
          : "bg-gradient-to-r from-slate-50/50 to-blue-50/50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border backdrop-blur-sm text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "bg-slate-800/40 border-slate-700/50 text-slate-300"
                : "bg-white/60 border-white/50 text-slate-700"
            }`}
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            <span className="hidden sm:inline">Trusted by 50,000+ Marketing Teams</span>
            <span className="sm:hidden">50K+ Teams Trust Us</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
            }`}
          >
            Loved by
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
          >
            Join thousands of marketing professionals who've transformed their campaigns with AI-powered precision and
            efficiency.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`relative backdrop-blur-sm rounded-2xl sm:rounded-3xl border shadow-xl sm:shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl sm:hover:shadow-3xl hover:scale-[1.01] sm:hover:scale-[1.02] ${
              theme === "dark"
                ? "bg-gradient-to-br from-slate-800/60 to-slate-900/40 border-slate-700/50"
                : "bg-gradient-to-br from-white/80 to-white/60 border-white/60"
            }`}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            {/* Quote Icon */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm">
              <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-500" />
            </div>

            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className={`flex flex-col lg:grid lg:grid-cols-5 gap-6 sm:gap-8 lg:items-center transition-all duration-500 ${
                isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
              }`}>
                {/* Enhanced User Info */}
                <div className="lg:col-span-2 text-center lg:text-left order-2 lg:order-1">
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <div className="relative">
                      {/* Loading placeholder */}
                      {imageLoading && (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 animate-pulse mx-auto lg:mx-0 border-2 sm:border-4 border-white/50 shadow-xl sm:shadow-2xl" />
                      )}
                      
                      {/* Actual image */}
                      <img
                        src={imageError ? "/sarah-johnson.jpg" : testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl sm:rounded-3xl object-cover border-2 sm:border-4 border-white/50 shadow-xl sm:shadow-2xl mx-auto lg:mx-0 transition-all duration-700 hover:scale-105 ${
                          imageLoading ? "opacity-0 absolute inset-0" : "opacity-100"
                        }`}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        loading="eager"
                      />
                      
                      {/* Professional badge */}
                      <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white" />
                      </div>

                      {/* Verified badge */}
                      <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <h4 className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="space-y-1">
                      <p className={`text-sm sm:text-base font-medium transition-all duration-500 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-500">
                        {testimonials[currentIndex].company}
                      </p>
                      <div className={`text-xs sm:text-sm transition-all duration-500 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        <p>{testimonials[currentIndex].location}</p>
                        <p className="hidden sm:block">{testimonials[currentIndex].companySize}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Metrics */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-slate-700/40 to-slate-800/40 border-slate-600/40"
                          : "bg-gradient-to-br from-white/60 to-white/40 border-white/40"
                      }`}
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500 mb-1 transition-all duration-500">
                        {testimonials[currentIndex].metrics.roi}
                      </div>
                      <div className={`text-xs font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        ROI Increase
                      </div>
                    </div>
                    <div
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-slate-700/40 to-slate-800/40 border-slate-600/40"
                          : "bg-gradient-to-br from-white/60 to-white/40 border-white/40"
                      }`}
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 mb-1 transition-all duration-500">
                        {testimonials[currentIndex].metrics.time_saved}
                      </div>
                      <div className={`text-xs font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                        Time Saved
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Content - Mobile Layout */}
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <div className="flex flex-col">
                    {/* Rating - Mobile Responsive */}
                    <div className="flex justify-center lg:justify-start mb-4 sm:mb-6 order-1 lg:order-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current transition-all duration-300" />
                      ))}
                    </div>

                    {/* Quote - Mobile Optimized */}
                    <blockquote
                      className={`text-lg sm:text-xl lg:text-2xl leading-relaxed mb-4 sm:mb-6 transition-all duration-700 order-2 lg:order-2 ${
                        theme === "dark" ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      "{testimonials[currentIndex].quote}"
                    </blockquote>

                    {/* Navigation - Mobile Optimized */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 order-3 lg:order-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={prevTestimonial}
                        disabled={isTransitioning}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                          theme === "dark"
                            ? "bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 text-slate-300"
                            : "bg-white/50 border-white/50 hover:bg-white/70 text-slate-600"
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>

                      {/* Dots - Mobile Responsive */}
                      <div className="flex gap-1.5 sm:gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            disabled={isTransitioning}
                            className={`transition-all duration-500 rounded-full disabled:cursor-not-allowed ${
                              index === currentIndex
                                ? "w-6 h-2.5 sm:w-8 sm:h-3 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg"
                                : `w-2.5 h-2.5 sm:w-3 sm:h-3 ${theme === "dark" ? "bg-slate-600" : "bg-slate-300"} hover:bg-blue-400 ${isTransitioning ? "opacity-50" : "opacity-100"}`
                            }`}
                          />
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={nextTestimonial}
                        disabled={isTransitioning}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${
                          theme === "dark"
                            ? "bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 text-slate-300"
                            : "bg-white/50 border-white/50 hover:bg-white/70 text-slate-600"
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-play indicator - Mobile Responsive */}
        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs sm:text-sm ${
              theme === "dark" ? "text-slate-400 hover:text-slate-300" : "text-slate-500 hover:text-slate-600"
            } transition-colors duration-300 flex items-center gap-1.5 sm:gap-2 mx-auto`}
          >
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-slate-400"}`} />
            {isAutoPlaying ? "Pause" : "Resume"} auto-play
          </button>
        </div>
      </div>
    </section>
  )
}
