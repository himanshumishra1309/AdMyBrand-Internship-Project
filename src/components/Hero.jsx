"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { useParallax } from "../hooks/useParallax"
import { ArrowRight, Sparkles, Play, Star, Users, Zap } from "lucide-react"

export default function Hero() {
  const { theme, mounted } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const parallaxOffset = useParallax(0.3)
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const phrases = ["Marketing Revolution", "AI-Powered Growth", "Brand Excellence", "Smart Automation"]
  const currentPhrase = phrases[Math.floor(currentIndex / 20) % phrases.length]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
      const phraseIndex = Math.floor(currentIndex / 20) % phrases.length
      const charIndex = currentIndex % 20

      if (charIndex < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex + 1))
      } else {
        setTypedText(currentPhrase)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [currentIndex, currentPhrase])

  const stats = [
    { icon: Users, value: "10K+", label: "Active Users" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
    { icon: Star, value: "4.9/5", label: "Rating" },
  ]

  // Fallback for SSR
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                ADmyBRAND
                <span className="block text-4xl lg:text-6xl">AI Suite</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                Transform your marketing strategy with cutting-edge AI technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${
            theme === "dark" ? "bg-blue-500/20" : "bg-blue-400/20"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${
            theme === "dark" ? "bg-purple-500/20" : "bg-purple-400/20"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30 ${
            theme === "dark" ? "bg-indigo-500/10" : "bg-indigo-400/10"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${
              hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm text-sm font-medium transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-slate-800/40 border-slate-700/50 text-slate-300"
                  : "bg-white/20 border-white/30 text-slate-700"
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
              <span>{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className={`text-5xl lg:text-8xl font-bold leading-tight ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                }`}
              >
                ADmyBRAND
              </h1>
              <div className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  AI Suite
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className={`text-xl lg:text-2xl max-w-2xl leading-relaxed ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Transform your marketing strategy with cutting-edge AI technology. Create, optimize, and scale your
              campaigns with <span className="font-semibold text-blue-500">unprecedented precision</span> and
              efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={`group px-8 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "border-slate-600 bg-slate-800/40 hover:bg-slate-700/60 text-slate-200 hover:border-blue-400"
                    : "border-slate-300 bg-white/50 hover:bg-white/70 text-slate-700 hover:border-blue-400"
                }`}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                No Credit Card Required
              </div>
              <div>14-Day Free Trial</div>
              <div>Cancel Anytime</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    theme === "dark" ? "bg-slate-800/20 border-slate-700/30" : "bg-white/20 border-white/30"
                  }`}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Illustration */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`relative w-full h-96 lg:h-[600px] rounded-3xl backdrop-blur-sm border shadow-2xl overflow-hidden group ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50"
                  : "bg-gradient-to-br from-white/40 to-white/10 border-white/30"
              }`}
            >
              <img
                src="/placeholder.svg?height=600&width=600&text=AI+Marketing+Suite+Visualization"
                alt="AI Marketing Suite Visualization"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20" />

              {/* Floating UI Elements */}
              <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-slate-700">AI Active</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 p-4 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm rounded-2xl shadow-lg text-white animate-pulse">
                <div className="text-sm font-medium">Campaign Performance</div>
                <div className="text-2xl font-bold">+247%</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl animate-float">
              <Sparkles className="w-12 h-12 text-blue-400 animate-spin-slow" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  )
}
