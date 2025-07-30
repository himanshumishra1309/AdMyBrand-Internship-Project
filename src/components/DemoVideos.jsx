"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles, PlayCircle } from "lucide-react"

const demoSteps = [
  {
    title: "AI Campaign Creation",
    description: "Watch how our AI creates a complete marketing campaign in seconds",
    duration: 5,
    features: ["Smart targeting", "Content generation", "Budget optimization"],
  },
  {
    title: "Real-time Analytics",
    description: "See live performance metrics and AI-powered insights",
    duration: 4,
    features: ["Live dashboards", "Predictive analytics", "ROI tracking"],
  },
  {
    title: "Automated Optimization",
    description: "Discover how AI continuously improves your campaigns",
    duration: 6,
    features: ["A/B testing", "Smart bidding", "Performance tuning"],
  },
  {
    title: "Team Collaboration",
    description: "Experience seamless team workflows and approvals",
    duration: 3,
    features: ["Real-time collaboration", "Approval workflows", "Team insights"],
  },
]

export default function DemoVideos() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    let interval
    if (isPlaying && showDemo && currentStep < demoSteps.length) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const currentStepData = demoSteps[currentStep]
          if (!currentStepData) return prev

          const stepDuration = currentStepData.duration
          const newProgress = prev + 100 / (stepDuration * 10)

          if (newProgress >= 100) {
            if (currentStep < demoSteps.length - 1) {
              setCurrentStep(currentStep + 1)
              return 0
            } else {
              setIsPlaying(false)
              return 100
            }
          }
          return newProgress
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentStep, showDemo])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!showDemo) setShowDemo(true)
  }

  const handleRestart = () => {
    setCurrentStep(0)
    setProgress(0)
    setIsPlaying(true)
    setShowDemo(true)
  }

  const handleStepClick = (index) => {
    setCurrentStep(index)
    setProgress(0)
    setIsPlaying(false)
  }

  return (
    <section
      id="demo"
      ref={ref}
      className={`py-20 lg:py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-indigo-50/50 to-slate-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/3 left-1/3 w-72 h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-1/3 right-1/3 w-72 h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center">
              <PlayCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h2
              className={`text-3xl lg:text-5xl xl:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Interactive Demo
            </h2>
          </div>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
          >
            Experience the power of ADmyBRAND AI Suite through our interactive demo. See how AI transforms your
            marketing workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Demo Steps */}
          <div
            className={`lg:col-span-1 order-2 lg:order-1 transition-all duration-1000 delay-200 ${
              hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className={`backdrop-blur-sm rounded-2xl lg:rounded-3xl border shadow-xl lg:shadow-2xl p-4 lg:p-6 ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
              }`}
            >
              <h3
                className={`text-lg lg:text-xl font-bold mb-4 lg:mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
              >
                Demo Steps
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {demoSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`w-full p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 transition-all duration-300 text-left hover:scale-[1.02] ${
                      currentStep === index
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                        : theme === "dark"
                          ? "border-slate-600 bg-slate-700/30 hover:bg-slate-600/30"
                          : "border-slate-300 bg-white/50 hover:bg-white/70"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          currentStep === index
                            ? "bg-blue-500 text-white"
                            : theme === "dark"
                              ? "bg-slate-600 text-slate-300"
                              : "bg-slate-300 text-slate-700"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`font-semibold mb-1 text-sm lg:text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                        >
                          {step.title}
                        </h4>
                        <p
                          className={`text-xs lg:text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                        >
                          {step.description}
                        </p>
                        {currentStep === index && showDemo && (
                          <div className="mt-3">
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 lg:h-2">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 lg:h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div
            className={`lg:col-span-2 order-1 lg:order-2 transition-all duration-1000 delay-400 ${
              hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className={`backdrop-blur-sm rounded-2xl lg:rounded-3xl border shadow-xl lg:shadow-2xl overflow-hidden ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
              }`}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-blue-900/50 to-indigo-900 overflow-hidden">
                {!showDemo ? (
                  /* Demo Thumbnail */
                  <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-8">
                    <div className="text-center max-w-md">
                      <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 lg:mb-6 mx-auto border border-white/20">
                        <Sparkles className="w-8 h-8 lg:w-12 lg:h-12 text-blue-400 animate-pulse" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">ADmyBRAND AI Suite</h3>
                      <p className="text-blue-200 mb-4 lg:mb-6 text-sm lg:text-base">Interactive Product Demo</p>
                      <Button
                        onClick={handlePlayPause}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                      >
                        <Play className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                        Start Demo
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Demo Content */
                  <div className="absolute inset-0 p-4 lg:p-6 xl:p-8">
                    <div className="h-full flex flex-col">
                      {/* Step Content */}
                      <div className="flex-1 flex items-center justify-center overflow-hidden">
                        <div className="w-full max-w-lg">
                          {currentStep === 0 && (
                            /* AI Campaign Creation */
                            <div className="w-full">
                              <div className="text-center mb-6 lg:mb-8">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl flex items-center justify-center mb-3 lg:mb-4 mx-auto border border-white/20">
                                  <div className="text-2xl lg:text-3xl">🎯</div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">AI Campaign Creation</h3>
                                <p className="text-blue-200 text-sm">Creating intelligent campaigns in real-time</p>
                              </div>

                              {/* Simulated Campaign Builder */}
                              <div className="space-y-3 lg:space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="flex items-center gap-3 mb-2 lg:mb-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-white text-sm font-medium">Audience Analysis Complete</span>
                                  </div>
                                  <div className="text-xs text-blue-200 ml-9 lg:ml-11">
                                    Target: Tech professionals, 25-45, $50K+ income
                                  </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="flex items-center gap-3 mb-2 lg:mb-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                                      <span className="text-white text-xs">AI</span>
                                    </div>
                                    <span className="text-white text-sm font-medium">Generating Ad Copy...</span>
                                  </div>
                                  <div className="text-xs text-blue-200 ml-9 lg:ml-11">
                                    "Transform your workflow with AI-powered automation"
                                  </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                      <span className="text-white text-xs">$</span>
                                    </div>
                                    <span className="text-white text-sm font-medium">
                                      Budget Optimization: $2,500/month
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {currentStep === 1 && (
                            /* Real-time Analytics */
                            <div className="w-full">
                              <div className="text-center mb-6 lg:mb-8">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500/30 to-blue-500/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl flex items-center justify-center mb-3 lg:mb-4 mx-auto border border-white/20">
                                  <div className="text-2xl lg:text-3xl">📊</div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Real-time Analytics</h3>
                                <p className="text-blue-200 text-sm">Live performance monitoring and insights</p>
                              </div>

                              {/* Analytics Dashboard */}
                              <div className="space-y-3 lg:space-y-4">
                                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20 text-center">
                                    <div className="text-xl lg:text-2xl font-bold text-green-400">24.7%</div>
                                    <div className="text-xs text-blue-200">Conversion Rate</div>
                                    <div className="text-xs text-green-400">↗ +12.3%</div>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20 text-center">
                                    <div className="text-xl lg:text-2xl font-bold text-blue-400">$347</div>
                                    <div className="text-xs text-blue-200">Cost per Acquisition</div>
                                    <div className="text-xs text-green-400">↘ -18.5%</div>
                                  </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="text-white text-sm font-medium mb-3">Campaign Performance</div>
                                  <div className="flex items-end justify-between h-8 lg:h-12 gap-1">
                                    {[60, 45, 80, 70, 95, 85, 75].map((height, index) => (
                                      <div
                                        key={index}
                                        className="bg-gradient-to-t from-blue-500 to-green-500 rounded-t animate-pulse"
                                        style={{
                                          height: `${height}%`,
                                          width: "12%",
                                          animationDelay: `${index * 0.2}s`,
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>

                                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-green-500/30">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-300 text-sm font-medium">Live: 1,247 active users</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {currentStep === 2 && (
                            /* Automated Optimization */
                            <div className="w-full">
                              <div className="text-center mb-6 lg:mb-8">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl flex items-center justify-center mb-3 lg:mb-4 mx-auto border border-white/20">
                                  <div className="text-2xl lg:text-3xl">⚡</div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Automated Optimization</h3>
                                <p className="text-blue-200 text-sm">AI continuously improves your campaigns</p>
                              </div>

                              {/* Optimization Process */}
                              <div className="space-y-3 lg:space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-white text-sm font-medium">A/B Testing</span>
                                    <span className="text-green-400 text-xs">Running</span>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                      <span className="text-blue-200">Variant A</span>
                                      <span className="text-white">18.3% CTR</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-1.5 lg:h-2">
                                      <div
                                        className="bg-blue-500 h-1.5 lg:h-2 rounded-full"
                                        style={{ width: "73%" }}
                                      ></div>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                      <span className="text-blue-200">Variant B</span>
                                      <span className="text-green-400">24.7% CTR</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-1.5 lg:h-2">
                                      <div
                                        className="bg-green-500 h-1.5 lg:h-2 rounded-full"
                                        style={{ width: "98%" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-purple-500 rounded-full flex items-center justify-center animate-spin flex-shrink-0">
                                      <span className="text-white text-xs">⚙</span>
                                    </div>
                                    <span className="text-white text-sm font-medium">Smart Bidding Active</span>
                                  </div>
                                  <div className="text-xs text-blue-200 ml-8 lg:ml-9">
                                    Adjusting bids based on conversion probability
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg lg:rounded-xl p-2 lg:p-3 border border-purple-500/30">
                                    <div className="text-base lg:text-lg font-bold text-purple-300">+40%</div>
                                    <div className="text-xs text-blue-200">Performance Boost</div>
                                  </div>
                                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg lg:rounded-xl p-2 lg:p-3 border border-green-500/30">
                                    <div className="text-base lg:text-lg font-bold text-green-300">-25%</div>
                                    <div className="text-xs text-blue-200">Cost Reduction</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {currentStep === 3 && (
                            /* Team Collaboration */
                            <div className="w-full">
                              <div className="text-center mb-6 lg:mb-8">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl flex items-center justify-center mb-3 lg:mb-4 mx-auto border border-white/20">
                                  <div className="text-2xl lg:text-3xl">👥</div>
                                </div>
                                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Team Collaboration</h3>
                                <p className="text-blue-200 text-sm">Seamless workflows and approvals</p>
                              </div>

                              {/* Collaboration Interface */}
                              <div className="space-y-3 lg:space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="text-white text-sm font-medium mb-3">Campaign Approval Workflow</div>
                                  <div className="space-y-2 lg:space-y-3">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src="/placeholder.svg?height=32&width=32&text=S"
                                        alt="Sarah"
                                        className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-blue-500 flex-shrink-0"
                                      />
                                      <div className="flex-1 min-w-0">
                                        <div className="text-xs text-white">Sarah reviewed "Q1 Campaign"</div>
                                        <div className="text-xs text-green-400">✓ Approved</div>
                                      </div>
                                      <div className="text-xs text-blue-200">2 min ago</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <img
                                        src="/placeholder.svg?height=32&width=32&text=M"
                                        alt="Michael"
                                        className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-green-500 flex-shrink-0"
                                      />
                                      <div className="flex-1 min-w-0">
                                        <div className="text-xs text-white">Michael added comment</div>
                                        <div className="text-xs text-blue-200">"Increase budget by 20%"</div>
                                      </div>
                                      <div className="text-xs text-blue-200">5 min ago</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-white/20">
                                  <div className="text-white text-sm font-medium mb-3">Team Performance</div>
                                  <div className="grid grid-cols-3 gap-2 lg:gap-3">
                                    <div className="text-center">
                                      <div className="text-base lg:text-lg font-bold text-blue-400">12</div>
                                      <div className="text-xs text-blue-200">Active Projects</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-base lg:text-lg font-bold text-green-400">98%</div>
                                      <div className="text-xs text-blue-200">On-time Delivery</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-base lg:text-lg font-bold text-purple-400">4.9</div>
                                      <div className="text-xs text-blue-200">Team Rating</div>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-indigo-500/30">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-indigo-300 text-sm font-medium">5 team members online</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-4 lg:mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white text-sm font-medium">
                            Step {currentStep + 1} of {demoSteps.length}
                          </span>
                          <span className="text-blue-200 text-sm">{Math.round(progress)}% Complete</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-1.5 lg:h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-1.5 lg:h-2 rounded-full transition-all duration-300"
                            style={{ width: `${currentStep * 25 + progress * 0.25}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Play Button Overlay */}
                {!isPlaying && showDemo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    {progress === 100 && currentStep === demoSteps.length - 1 ? (
                      /* Demo Complete */
                      <div className="text-center p-4">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500/30 to-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto border border-white/20">
                          <div className="text-2xl lg:text-3xl">✅</div>
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Demo Complete!</h3>
                        <p className="text-blue-200 mb-4 text-sm lg:text-base">Ready to transform your marketing?</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button
                            onClick={handleRestart}
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl border border-white/30"
                          >
                            <RotateCcw className="w-4 h-4 mr-2 text-white" />
                            <span className="text-white">Watch Again</span>
                          </Button>
                          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl">
                            Start Free Trial
                          </Button>
                        </div>
                      </div>
                    ) : (
                      /* Resume Play Button */
                      <Button
                        onClick={handlePlayPause}
                        className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full border border-white/30"
                      >
                        <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-0.5 lg:ml-1" />
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className={`p-3 lg:p-4 border-t ${theme === "dark" ? "border-slate-700/50" : "border-white/50"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 lg:gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handlePlayPause}
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${
                        theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-3 h-3 lg:w-4 lg:h-4" />
                      ) : (
                        <Play className="w-3 h-3 lg:w-4 lg:h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleRestart}
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${
                        theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      <RotateCcw className="w-3 h-3 lg:w-4 lg:h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-1 lg:gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMuted(!isMuted)}
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${
                        theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      {isMuted ? (
                        <VolumeX className="w-3 h-3 lg:w-4 lg:h-4" />
                      ) : (
                        <Volume2 className="w-3 h-3 lg:w-4 lg:h-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${
                        theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                      }`}
                    >
                      <Maximize className="w-3 h-3 lg:w-4 lg:h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
