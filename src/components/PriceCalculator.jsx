"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Calculator, Check, ArrowRight, Sparkles } from "lucide-react"

const features = {
  campaigns: { name: "Active Campaigns", basePrice: 29, pricePerUnit: 15 },
  users: { name: "Team Members", basePrice: 0, pricePerUnit: 25 },
  analytics: { name: "Advanced Analytics", basePrice: 49, pricePerUnit: 0 },
  aiInsights: { name: "AI Insights", basePrice: 79, pricePerUnit: 0 },
  whiteLabel: { name: "White Label", basePrice: 199, pricePerUnit: 0 },
}

const plans = {
  starter: { name: "Starter", campaigns: 5, users: 3, features: [] },
  professional: { name: "Professional", campaigns: 25, users: 10, features: ["analytics"] },
  enterprise: { name: "Enterprise", campaigns: 100, users: 50, features: ["analytics", "aiInsights", "whiteLabel"] },
}

export default function PriceCalculator() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [selectedPlan, setSelectedPlan] = useState("professional")
  const [customValues, setCustomValues] = useState({
    campaigns: 25,
    users: 10,
    analytics: true,
    aiInsights: false,
    whiteLabel: false,
  })
  const [isCustom, setIsCustom] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [animatedPrice, setAnimatedPrice] = useState(0)

  useEffect(() => {
    let price = 99 // Base price

    if (isCustom) {
      price += Math.max(0, customValues.campaigns - 5) * features.campaigns.pricePerUnit
      price += Math.max(0, customValues.users - 3) * features.users.pricePerUnit
      if (customValues.analytics) price += features.analytics.basePrice
      if (customValues.aiInsights) price += features.aiInsights.basePrice
      if (customValues.whiteLabel) price += features.whiteLabel.basePrice
    } else {
      const plan = plans[selectedPlan]
      price += Math.max(0, plan.campaigns - 5) * features.campaigns.pricePerUnit
      price += Math.max(0, plan.users - 3) * features.users.pricePerUnit
      plan.features.forEach((feature) => {
        price += features[feature].basePrice
      })
    }

    setTotalPrice(price)
  }, [selectedPlan, customValues, isCustom])

  useEffect(() => {
    const duration = 1000
    const steps = 50
    const increment = (totalPrice - animatedPrice) / steps
    let currentStep = 0
    const timer = setInterval(() => {
      if (currentStep < steps) {
        setAnimatedPrice((prev) => Math.round(prev + increment))
        currentStep++
      } else {
        setAnimatedPrice(totalPrice)
        clearInterval(timer)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [totalPrice])

  return (
    <section
      id="pricing-calculator"
      ref={ref}
      className={`py-20 lg:py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-r from-slate-900/50 to-indigo-900/50"
          : "bg-gradient-to-r from-slate-50/50 to-indigo-50/50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-72 h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-indigo-500" : "bg-indigo-400"
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
              <Calculator className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <h2
              className={`text-3xl lg:text-5xl xl:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
            >
              Pricing Calculator
            </h2>
          </div>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
          >
            Calculate your custom pricing based on your specific needs. No hidden fees, complete transparency.
          </p>
        </div>

        {/* Main Content with Sticky Layout */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Calculator Controls (Scrollable) */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div
                className={`backdrop-blur-sm rounded-2xl lg:rounded-3xl border shadow-xl lg:shadow-2xl p-6 lg:p-8 ${
                  theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
                }`}
              >
                {/* Plan Selection */}
                <div className="mb-8">
                  <h3
                    className={`text-xl lg:text-2xl font-bold mb-4 lg:mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                  >
                    Choose Your Plan
                  </h3>
                  <div className="grid grid-cols-1 gap-3 lg:gap-4">
                    {Object.entries(plans).map(([key, plan]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedPlan(key)
                          setIsCustom(false)
                        }}
                        className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 transition-all duration-300 text-left hover:scale-[1.02] ${
                          selectedPlan === key && !isCustom
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                            : theme === "dark"
                              ? "border-slate-600 bg-slate-700/30 hover:bg-slate-600/30"
                              : "border-slate-300 bg-white/50 hover:bg-white/70"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4
                              className={`font-semibold text-sm lg:text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                            >
                              {plan.name}
                            </h4>
                            <p
                              className={`text-xs lg:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                            >
                              {plan.campaigns} campaigns • {plan.users} users
                            </p>
                          </div>
                          {selectedPlan === key && !isCustom && (
                            <Check className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
                          )}
                        </div>
                      </button>
                    ))}

                    <button
                      onClick={() => setIsCustom(true)}
                      className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 transition-all duration-300 text-left hover:scale-[1.02] ${
                        isCustom
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                          : theme === "dark"
                            ? "border-slate-600 bg-slate-700/30 hover:bg-slate-600/30"
                            : "border-slate-300 bg-white/50 hover:bg-white/70"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4
                            className={`font-semibold text-sm lg:text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                          >
                            Custom Plan
                          </h4>
                          <p className={`text-xs lg:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                            Configure your own requirements
                          </p>
                        </div>
                        {isCustom && <Check className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />}
                      </div>
                    </button>
                  </div>
                </div>

                {/* Custom Configuration */}
                {isCustom && (
                  <div className="space-y-6 lg:space-y-8">
                    <h3
                      className={`text-lg lg:text-xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      Customize Your Plan
                    </h3>

                    {/* Campaigns Slider */}
                    <div>
                      <label
                        className={`block text-sm font-medium mb-3 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Active Campaigns: <span className="font-bold text-blue-500">{customValues.campaigns}</span>
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="200"
                          value={customValues.campaigns}
                          onChange={(e) =>
                            setCustomValues((prev) => ({ ...prev, campaigns: Number.parseInt(e.target.value) }))
                          }
                          className="w-full h-3 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #6366f1 ${
                              (customValues.campaigns / 200) * 100
                            }%, ${theme === "dark" ? "#374151" : "#e2e8f0"} ${
                              (customValues.campaigns / 200) * 100
                            }%, ${theme === "dark" ? "#374151" : "#e2e8f0"} 100%)`,
                          }}
                        />
                        <div className="flex justify-between text-xs mt-2">
                          <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>1</span>
                          <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>200</span>
                        </div>
                      </div>
                    </div>

                    {/* Users Slider */}
                    <div>
                      <label
                        className={`block text-sm font-medium mb-3 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Team Members: <span className="font-bold text-blue-500">{customValues.users}</span>
                      </label>
                      <div className="relative">
                        <input
                          type="range"
                          min="1"
                          max="100"
                          value={customValues.users}
                          onChange={(e) =>
                            setCustomValues((prev) => ({ ...prev, users: Number.parseInt(e.target.value) }))
                          }
                          className="w-full h-3 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #6366f1 ${
                              (customValues.users / 100) * 100
                            }%, ${theme === "dark" ? "#374151" : "#e2e8f0"} ${(customValues.users / 100) * 100}%, ${
                              theme === "dark" ? "#374151" : "#e2e8f0"
                            } 100%)`,
                          }}
                        />
                        <div className="flex justify-between text-xs mt-2">
                          <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>1</span>
                          <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>100</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Toggles */}
                    <div className="space-y-4">
                      <h4
                        className={`text-base lg:text-lg font-semibold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        Additional Features
                      </h4>
                      {Object.entries(features)
                        .slice(2)
                        .map(([key, feature]) => (
                          <label
                            key={key}
                            className={`flex items-center gap-4 p-3 lg:p-4 rounded-xl lg:rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                              customValues[key]
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg"
                                : theme === "dark"
                                  ? "border-slate-600 bg-slate-700/30 hover:bg-slate-600/30"
                                  : "border-slate-300 bg-white/50 hover:bg-white/70"
                            }`}
                          >
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={customValues[key]}
                                onChange={(e) => setCustomValues((prev) => ({ ...prev, [key]: e.target.checked }))}
                                className="sr-only"
                              />
                              <div
                                className={`w-5 h-5 lg:w-6 lg:h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                                  customValues[key]
                                    ? "bg-blue-500 border-blue-500"
                                    : theme === "dark"
                                      ? "border-slate-500 bg-slate-700"
                                      : "border-slate-300 bg-white"
                                }`}
                              >
                                {customValues[key] && <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" />}
                              </div>
                            </div>
                            <div className="flex-1">
                              <span
                                className={`font-medium block text-sm lg:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                              >
                                {feature.name}
                              </span>
                              <span
                                className={`text-xs lg:text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}
                              >
                                +${feature.basePrice}/month
                              </span>
                            </div>
                            {customValues[key] && (
                              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
                              </div>
                            )}
                          </label>
                        ))}
                    </div>

                    {/* Extra spacing to ensure proper scrolling */}
                    <div className="h-20"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Price Display (Sticky) */}
            <div className="lg:relative">
              <div
                className={`lg:sticky lg:top-8 transition-all duration-1000 delay-400 ${
                  hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                <div
                  className={`backdrop-blur-sm rounded-2xl lg:rounded-3xl border shadow-xl lg:shadow-2xl p-6 lg:p-8 text-center ${
                    theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500 animate-pulse" />
                    <h3
                      className={`text-xl lg:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      Your Custom Price
                    </h3>
                  </div>
                  <div className="mb-6 lg:mb-8">
                    <div
                      className={`text-5xl lg:text-7xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      ${animatedPrice}
                    </div>
                    <p className={`text-lg lg:text-xl ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                      per month
                    </p>
                  </div>

                  {/* Features Summary */}
                  <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm lg:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Active Campaigns
                      </span>
                      <span
                        className={`font-semibold text-sm lg:text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        {isCustom ? customValues.campaigns : plans[selectedPlan].campaigns}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm lg:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                      >
                        Team Members
                      </span>
                      <span
                        className={`font-semibold text-sm lg:text-base ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        {isCustom ? customValues.users : plans[selectedPlan].users}
                      </span>
                    </div>
                    {(isCustom
                      ? Object.entries(customValues).filter(([key, value]) => typeof value === "boolean" && value)
                      : plans[selectedPlan].features.map((feature) => [feature, true])
                    ).map(([feature]) => (
                      <div key={feature} className="flex items-center justify-between">
                        <span
                          className={`text-sm lg:text-base ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}
                        >
                          {features[feature]?.name}
                        </span>
                        <Check className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
                  </Button>
                  <p className={`text-xs lg:text-sm mt-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    14-day free trial • No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
