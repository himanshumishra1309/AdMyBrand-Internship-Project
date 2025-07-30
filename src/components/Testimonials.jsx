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
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "ADmyBRAND AI Suite transformed our marketing efficiency by 300%. The AI-generated content is indistinguishable from our best copywriters, and the automation features have saved us countless hours.",
    rating: 5,
    metrics: { roi: "+247%", time_saved: "20hrs/week" },
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupBoost",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The automation features saved us 20 hours per week. Our ROI improved dramatically within the first month of using the platform. It's like having a team of marketing experts working 24/7.",
    rating: 5,
    metrics: { roi: "+180%", time_saved: "25hrs/week" },
  },
  {
    name: "Emily Rodriguez",
    role: "Growth Manager",
    company: "ScaleUp Solutions",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The analytics insights are game-changing. We can now predict campaign performance with 95% accuracy before launch. The AI recommendations have consistently outperformed our manual strategies.",
    rating: 5,
    metrics: { roi: "+320%", time_saved: "15hrs/week" },
  },
]

export default function Testimonials() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-r from-slate-900/50 to-purple-900/50"
          : "bg-gradient-to-r from-slate-50/50 to-blue-50/50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-5xl lg:text-6xl font-bold mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
            }`}
          >
            Trusted by
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Marketing Leaders
            </span>
          </h2>

          <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            See what our customers are saying about their experience with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`relative backdrop-blur-sm rounded-3xl border shadow-2xl p-8 lg:p-12 overflow-hidden ${
              theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
            }`}
          >
            {/* Quote Icon */}
            <Quote
              className={`absolute top-8 right-8 w-16 h-16 opacity-10 ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}
            />

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* User Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl mx-auto lg:mx-0"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className={`text-xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className={`text-sm mb-1 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-blue-500 font-medium">{testimonials[currentIndex].company}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div
                    className={`p-3 rounded-xl backdrop-blur-sm border ${
                      theme === "dark" ? "bg-slate-700/30 border-slate-600/30" : "bg-white/30 border-white/30"
                    }`}
                  >
                    <div className="text-2xl font-bold text-green-500">{testimonials[currentIndex].metrics.roi}</div>
                    <div className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      ROI Increase
                    </div>
                  </div>
                  <div
                    className={`p-3 rounded-xl backdrop-blur-sm border ${
                      theme === "dark" ? "bg-slate-700/30 border-slate-600/30" : "bg-white/30 border-white/30"
                    }`}
                  >
                    <div className="text-2xl font-bold text-blue-500">
                      {testimonials[currentIndex].metrics.time_saved}
                    </div>
                    <div className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      Time Saved
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  className={`text-xl lg:text-2xl leading-relaxed mb-6 ${
                    theme === "dark" ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className={`w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                      theme === "dark"
                        ? "bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 text-slate-300"
                        : "bg-white/50 border-white/50 hover:bg-white/70 text-slate-600"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex
                            ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-500"
                            : `w-3 h-3 ${theme === "dark" ? "bg-slate-600" : "bg-slate-300"}`
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className={`w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                      theme === "dark"
                        ? "bg-slate-700/50 border-slate-600/50 hover:bg-slate-600/50 text-slate-300"
                        : "bg-white/50 border-white/50 hover:bg-white/70 text-slate-600"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-sm ${
              theme === "dark" ? "text-slate-400 hover:text-slate-300" : "text-slate-500 hover:text-slate-600"
            } transition-colors duration-300`}
          >
            {isAutoPlaying ? "Pause" : "Resume"} auto-play
          </button>
        </div>
      </div>
    </section>
  )
}
