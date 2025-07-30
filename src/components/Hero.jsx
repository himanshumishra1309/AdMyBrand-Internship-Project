"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { 
  ArrowRight, 
  Sparkles, 
  Play, 
  Star, 
  Users, 
  Zap, 
  TrendingUp, 
  BarChart3,
  Target,
  Rocket,
  Shield,
  Globe,
  Award,
  Brain,
  DollarSign
} from "lucide-react"

export default function Hero() {
  const { theme, mounted } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const phrases = ["Marketing Revolution", "AI-Powered Growth", "Brand Excellence", "Smart Automation"]

  useEffect(() => {
    const interval = setInterval(() => {
      const phraseIndex = Math.floor(currentIndex / 30) % phrases.length
      const charIndex = currentIndex % 30
      const currentPhrase = phrases[phraseIndex]

      if (charIndex < currentPhrase.length) {
        setTypedText(currentPhrase.slice(0, charIndex + 1))
      } else if (charIndex < currentPhrase.length + 10) {
        setTypedText(currentPhrase)
      } else {
        setTypedText("")
      }

      setCurrentIndex((prev) => prev + 1)
    }, 100)

    return () => clearInterval(interval)
  }, [currentIndex, phrases])

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users", change: "+23%" },
    { icon: Zap, value: "99.9%", label: "Uptime", change: "24/7" },
    { icon: Star, value: "4.9/5", label: "Rating", change: "2.1K reviews" },
  ]

  const features = [
    { icon: TrendingUp, text: "Boost ROI by 300%" },
    { icon: Sparkles, text: "AI-Powered Insights" },
    { icon: Zap, text: "Real-time Analytics" },
  ]

  const dashboardStats = [
    { icon: BarChart3, label: "Revenue Growth", value: "+347%", trend: "up" },
    { icon: Target, label: "Conversion Rate", value: "23.5%", trend: "up" },
    { icon: DollarSign, label: "Cost Per Lead", value: "-56%", trend: "down" },
    { icon: Globe, label: "Global Reach", value: "180+", trend: "up" },
    { icon: Brain, label: "AI Accuracy", value: "98.7%", trend: "up" },
    { icon: Shield, label: "Data Security", value: "100%", trend: "stable" },
  ]

  const achievements = [
    { icon: Award, title: "Best AI Tool 2024", subtitle: "TechCrunch Awards" },
    { icon: Rocket, title: "Fastest Growing", subtitle: "Marketing Platform" },
    { icon: Shield, title: "SOC 2 Compliant", subtitle: "Enterprise Ready" },
  ]

  // Show loading state until theme is mounted
  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="animate-pulse">
                <div className="h-8 bg-slate-200 rounded-full w-64 mb-4"></div>
                <div className="h-16 bg-slate-200 rounded-lg w-full mb-4"></div>
                <div className="h-6 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-96 lg:h-[600px] bg-slate-200 rounded-3xl animate-pulse"></div>
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
      className={`relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse ${
            theme === "dark" ? "bg-blue-500/10" : "bg-blue-400/10"
          }`}
        />
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-400/10"
          }`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-indigo-500/5" : "bg-indigo-400/5"
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
                  : "bg-white/60 border-white/30 text-slate-700"
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-500 animate-spin" />
              <span>{typedText}</span>
              <span className="animate-pulse text-blue-500">|</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                className={`text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                }`}
              >
                ADmyBRAND
              </h1>
              <div className="text-3xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  AI Suite
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className={`text-lg lg:text-xl xl:text-2xl max-w-2xl leading-relaxed ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Transform your marketing strategy with cutting-edge AI technology. Create, optimize, and scale your
              campaigns with <span className="font-semibold text-blue-500">unprecedented precision</span> and
              efficiency.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "bg-slate-800/30 border-slate-700/50 text-slate-300"
                      : "bg-white/50 border-white/30 text-slate-700"
                  }`}
                >
                  <feature.icon className="w-4 h-4 text-blue-500" />
                  {feature.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-base font-semibold"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={`group px-8 py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-base font-semibold ${
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
              className={`flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm ${
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
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    theme === "dark" ? "bg-slate-800/30 border-slate-700/40" : "bg-white/40 border-white/50"
                  }`}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                  <div
                    className={`text-xl lg:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-xs lg:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {stat.label}
                  </div>
                  <div className="text-xs text-green-500 font-medium mt-1">
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Dashboard Preview */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`relative w-full h-96 lg:h-[600px] rounded-3xl backdrop-blur-sm border shadow-2xl overflow-hidden group ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50"
                  : "bg-gradient-to-br from-white/60 to-white/80 border-white/40"
              }`}
            >
              {/* Dashboard Header */}
              <div className={`relative p-6 border-b backdrop-blur-sm ${theme === "dark" ? "border-slate-700/50 bg-slate-800/20" : "border-slate-200/50 bg-white/10"}`}>
                <div className="flex items-center justify-center">
                  
                  {/* Center - Main Title */}
                  <div className="flex items-center justify-center gap-3">
                    <div className={`p-2 rounded-lg ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"}`}>
                      <BarChart3 className="w-5 h-5 text-blue-500" />
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent`}>
                      ADmyBRAND Dashboard
                    </h3>
                  </div>
                </div>
                
                {/* Subtle gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {dashboardStats.map((stat, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                        theme === "dark" 
                          ? "bg-slate-800/40 border-slate-700/30" 
                          : "bg-white/50 border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          stat.trend === "up" 
                            ? "bg-green-500/20 text-green-500" 
                            : stat.trend === "down" 
                            ? "bg-red-500/20 text-red-500"
                            : "bg-blue-500/20 text-blue-500"
                        }`}>
                          <stat.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                            {stat.label}
                          </div>
                          <div className={`text-lg font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Performance Chart Placeholder */}
                <div className={`h-32 rounded-xl border-2 border-dashed flex items-center justify-center ${
                  theme === "dark" ? "border-slate-700/50" : "border-slate-300/50"
                }`}>
                  <div className="text-center">
                    <BarChart3 className={`w-8 h-8 mx-auto mb-2 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`} />
                    <div className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      Interactive Analytics Chart
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm ${
                        theme === "dark" ? "bg-slate-800/30" : "bg-white/40"
                      }`}
                    >
                      <achievement.icon className="w-5 h-5 text-yellow-500" />
                      <div>
                        <div className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                          {achievement.title}
                        </div>
                        <div className={`text-xs ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                          {achievement.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Performance Indicator */}
              <div className="absolute top-10 right-2 p-2 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-xl shadow-lg text-white animate-pulse">
                <div className="text-xs font-medium">Live Performance</div>
                <div className="text-lg font-bold">+347% ROI</div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div
              className={`absolute -top-6 -left-6 w-32 h-32 backdrop-blur-sm rounded-3xl border flex items-center justify-center shadow-2xl animate-bounce ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border-slate-700/50"
                  : "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-white/30"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <Sparkles className="w-12 h-12 text-blue-400" />
            </div>

            <div
              className={`absolute -bottom-6 -right-6 w-28 h-28 backdrop-blur-sm rounded-2xl border shadow-2xl animate-bounce flex items-center justify-center ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-slate-700/50"
                  : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-white/30"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <Target className="w-8 h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
