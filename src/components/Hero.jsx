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
      className={`relative min-h-screen flex items-center justify-center px-2 sm:px-4 py-16 sm:py-20 overflow-hidden transition-colors duration-500 ${
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

      <div className="container mx-auto max-w-7xl relative z-10 px-2 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${
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
            <div className="space-y-2 sm:space-y-4">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
                }`}
              >
                ADmyBRAND
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  AI Suite
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl max-w-2xl leading-relaxed ${
                theme === "dark" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Transform your marketing strategy with cutting-edge AI technology. Create, optimize, and scale your
              campaigns with <span className="font-semibold text-blue-500">unprecedented precision</span> and
              efficiency.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "bg-slate-800/30 border-slate-700/50 text-slate-300"
                      : "bg-white/50 border-white/30 text-slate-700"
                  }`}
                >
                  <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                  <span className="whitespace-nowrap">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base font-semibold"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base font-semibold ${
                  theme === "dark"
                    ? "border-slate-600 bg-slate-800/40 hover:bg-slate-700/60 text-slate-200 hover:border-blue-400"
                    : "border-slate-300 bg-white/50 hover:bg-white/70 text-slate-700 hover:border-blue-400"
                }`}
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap items-center gap-3 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="whitespace-nowrap">No Credit Card Required</span>
              </div>
              <div className="whitespace-nowrap">14-Day Free Trial</div>
              <div className="whitespace-nowrap">Cancel Anytime</div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-2 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    theme === "dark" ? "bg-slate-800/30 border-slate-700/40" : "bg-white/40 border-white/50"
                  }`}
                >
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-blue-500" />
                  <div
                    className={`text-lg sm:text-xl lg:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-xs sm:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {stat.label}
                  </div>
                  <div className="text-xs text-green-500 font-medium mt-0.5 sm:mt-1">
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
              className={`relative w-full h-80 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl sm:rounded-3xl backdrop-blur-sm border shadow-2xl overflow-hidden group ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50"
                  : "bg-gradient-to-br from-white/60 to-white/80 border-white/40"
              }`}
            >
              {/* Dashboard Header */}
              <div className={`relative p-3 sm:p-6 border-b backdrop-blur-sm ${theme === "dark" ? "border-slate-700/50 bg-slate-800/20" : "border-slate-200/50 bg-white/10"}`}>
                <div className="flex items-center justify-center">
                  
                  {/* Center - Main Title */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className={`p-1.5 sm:p-2 rounded-lg ${theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"}`}>
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent`}>
                      ADmyBRAND Dashboard
                    </h3>
                  </div>
                </div>
                
                {/* Subtle gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
              </div>

              {/* Dashboard Content */}
              <div className="p-3 sm:p-6 space-y-4 sm:space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                  {dashboardStats.map((stat, index) => (
                    <div
                      key={index}
                      className={`p-2 sm:p-4 rounded-lg sm:rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                        theme === "dark" 
                          ? "bg-slate-800/40 border-slate-700/30" 
                          : "bg-white/50 border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`p-1 sm:p-2 rounded-lg ${
                          stat.trend === "up" 
                            ? "bg-green-500/20 text-green-500" 
                            : stat.trend === "down" 
                            ? "bg-red-500/20 text-red-500"
                            : "bg-blue-500/20 text-blue-500"
                        }`}>
                          <stat.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`text-xs sm:text-sm truncate ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                            {stat.label}
                          </div>
                          <div className={`text-sm sm:text-lg font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Performance Chart */}
                <div className={`h-32 sm:h-44 rounded-lg sm:rounded-xl border backdrop-blur-sm p-2 sm:p-4 ${
                  theme === "dark" 
                    ? "border-slate-700/50 bg-slate-800/30" 
                    : "border-slate-300/50 bg-white/50"
                }`}>
                  <div className="flex items-center justify-between mb-2 sm:mb-4">
                    <h4 className={`text-xs sm:text-sm font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                      📊 Campaign Performance
                    </h4>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className={`text-xs font-medium ${theme === "dark" ? "text-green-400" : "text-green-600"}`}>
                        Live Data
                      </span>
                    </div>
                  </div>
                  
                  {/* Chart Visualization */}
                  <div className="flex items-end justify-between h-16 sm:h-24 gap-0.5 sm:gap-1 px-1 sm:px-2">
                    {[
                      { height: 40, value: "2.3K", color: "bg-gradient-to-t from-blue-500 to-blue-400", day: "Mon" },
                      { height: 55, value: "3.8K", color: "bg-gradient-to-t from-green-500 to-green-400", day: "Tue" },
                      { height: 30, value: "1.9K", color: "bg-gradient-to-t from-purple-500 to-purple-400", day: "Wed" },
                      { height: 60, value: "4.2K", color: "bg-gradient-to-t from-indigo-500 to-indigo-400", day: "Thu" },
                      { height: 45, value: "2.7K", color: "bg-gradient-to-t from-blue-500 to-blue-400", day: "Fri" },
                      { height: 65, value: "5.1K", color: "bg-gradient-to-t from-green-500 to-green-400", day: "Sat" },
                      { height: 50, value: "3.4K", color: "bg-gradient-to-t from-purple-500 to-purple-400", day: "Sun" },
                    ].map((bar, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center cursor-pointer">
                        <div 
                          className={`w-full ${bar.color} rounded-t-sm sm:rounded-t-md transition-all duration-700 hover:scale-110 relative shadow-sm sm:shadow-lg hover:shadow-xl group`}
                          style={{ 
                            height: `${bar.height}px`,
                            minHeight: '15px',
                            maxHeight: '50px'
                          }}
                        >
                          {/* Animated shimmer effect */}
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ 
                              animation: `shimmer 2s infinite`,
                              animationDelay: `${index * 0.2}s`
                            }}
                          ></div>
                          
                          {/* Tooltip */}
                          <div className={`absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap z-10 ${
                            theme === "dark" 
                              ? "bg-slate-800 text-white border border-slate-600" 
                              : "bg-white text-slate-900 border border-slate-300"
                          } shadow-lg`}>
                            {bar.value}
                            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 ${
                              theme === "dark" 
                                ? "border-l-2 border-r-2 border-t-4 border-transparent border-t-slate-800"
                                : "border-l-2 border-r-2 border-t-4 border-transparent border-t-white"
                            }`}></div>
                          </div>
                        </div>
                        
                        <div className={`text-xs mt-1 sm:mt-2 font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                          {bar.day}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Legend */}
                  <div className="flex items-center justify-center gap-3 sm:gap-6 mt-2 sm:mt-4 text-xs">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm shadow-sm"></div>
                      <span className={`font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>Clicks</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-t from-green-500 to-green-400 rounded-sm shadow-sm"></div>
                      <span className={`font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>Conversions</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm shadow-sm"></div>
                      <span className={`font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>Revenue</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 sm:space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg backdrop-blur-sm ${
                        theme === "dark" ? "bg-slate-800/30" : "bg-white/40"
                      }`}
                    >
                      <achievement.icon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className={`text-xs sm:text-sm font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
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
              <div className="absolute top-4 sm:top-10 right-1 sm:right-2 p-1.5 sm:p-2 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg text-white animate-pulse">
                <div className="text-xs font-medium">Live Performance</div>
                <div className="text-sm sm:text-lg font-bold">+347% ROI</div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div
              className={`absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 backdrop-blur-sm rounded-2xl sm:rounded-3xl border flex items-center justify-center shadow-2xl animate-bounce ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border-slate-700/50"
                  : "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-white/30"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400" />
            </div>

            <div
              className={`absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 h-16 sm:w-28 sm:h-28 backdrop-blur-sm rounded-xl sm:rounded-2xl border shadow-2xl animate-bounce flex items-center justify-center ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-slate-700/50"
                  : "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-white/30"
              }`}
              style={{ animationDelay: "1s" }}
            >
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
