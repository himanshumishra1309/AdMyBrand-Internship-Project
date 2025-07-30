"use client"

import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Brain, Target, BarChart3, Zap, Shield, Users, ArrowRight, Sparkles } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling ad copy, social media posts, and marketing materials with advanced AI algorithms.",
    color: "from-blue-500 to-cyan-500",
    delay: "delay-0",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Identify and reach your ideal audience with precision targeting powered by machine learning.",
    color: "from-purple-500 to-pink-500",
    delay: "delay-100",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track campaign performance with real-time analytics and AI-driven insights for optimization.",
    color: "from-green-500 to-emerald-500",
    delay: "delay-200",
  },
  {
    icon: Zap,
    title: "Automation Tools",
    description: "Automate repetitive marketing tasks and workflows to save time and increase efficiency.",
    color: "from-yellow-500 to-orange-500",
    delay: "delay-300",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Monitor and protect your brand reputation across all digital channels with AI surveillance.",
    color: "from-red-500 to-rose-500",
    delay: "delay-400",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team on campaigns with shared workspaces and real-time updates.",
    color: "from-indigo-500 to-purple-500",
    delay: "delay-500",
  },
]

export default function Features() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()

  return (
    <section id="features" ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm text-sm font-medium mb-6 ${
              theme === "dark"
                ? "bg-slate-800/40 border-slate-700/50 text-slate-300"
                : "bg-white/20 border-white/30 text-slate-700"
            }`}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            Powerful Features
          </div>

          <h2
            className={`text-5xl lg:text-6xl font-bold mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
            }`}
          >
            Modern Marketing
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Redefined
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Everything you need to create, manage, and optimize your marketing campaigns with the power of artificial
            intelligence and cutting-edge automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                theme === "dark"
                  ? "bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/40"
                  : "bg-white/40 border-white/50 hover:bg-white/60"
              } ${feature.delay} ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
              />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3
                  className={`text-xl font-semibold mb-4 group-hover:text-blue-500 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p className={`leading-relaxed mb-4 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div
                  className={`flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-700 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`inline-flex items-center gap-4 px-8 py-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-pointer ${
              theme === "dark"
                ? "bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60"
                : "bg-white/40 border-white/50 hover:bg-white/60"
            }`}
          >
            <span className={`text-lg font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Ready to transform your marketing?
            </span>
            <ArrowRight className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
