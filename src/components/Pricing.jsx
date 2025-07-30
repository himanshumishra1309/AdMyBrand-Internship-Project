"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$29",
    period: "/month",
    yearlyPrice: "$290",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 10,000 AI-generated content pieces",
      "Basic analytics dashboard",
      "Email support",
      "5 team members",
      "Standard templates",
      "Basic integrations",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    icon: Crown,
    price: "$79",
    period: "/month",
    yearlyPrice: "$790",
    description: "Ideal for growing marketing teams",
    features: [
      "Unlimited AI-generated content",
      "Advanced analytics & insights",
      "Priority support",
      "25 team members",
      "Custom templates",
      "API access",
      "A/B testing tools",
      "Advanced integrations",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "Custom",
    period: "",
    yearlyPrice: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "SLA guarantee",
      "Advanced security features",
      "Custom AI model training",
    ],
    popular: false,
    color: "from-emerald-500 to-teal-500",
  },
]

export default function Pricing() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>

          <p className={`text-xl max-w-3xl mx-auto mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Choose the perfect plan for your business. All plans include our core AI features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div
            className={`inline-flex items-center p-1 rounded-2xl backdrop-blur-sm border ${
              theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/40 border-white/50"
            }`}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                !isYearly
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                isYearly
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                  : theme === "dark"
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 hover:scale-105 ${plan.popular ? "lg:scale-110" : ""} ${
                hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`bg-gradient-to-r ${plan.color} text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg`}
                  >
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 h-full ${
                  plan.popular
                    ? theme === "dark"
                      ? "bg-gradient-to-b from-slate-800/60 to-slate-900/60 border-purple-500/50 shadow-2xl shadow-purple-500/20"
                      : "bg-gradient-to-b from-blue-50/80 to-indigo-50/80 border-blue-200/50 shadow-2xl shadow-blue-500/20"
                    : theme === "dark"
                      ? "bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/40"
                      : "bg-white/40 border-white/50 hover:bg-white/60"
                }`}
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.color} opacity-0 hover:opacity-10 transition-opacity duration-300 blur-xl`}
                />

                {/* Plan Header */}
                <div className="text-center mb-8 relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>

                  <p className={`mb-6 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                        {isYearly && plan.yearlyPrice !== "Custom" ? plan.yearlyPrice : plan.price}
                      </span>
                      {plan.period && (
                        <span className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                          {isYearly ? "/year" : plan.period}
                        </span>
                      )}
                    </div>
                    {isYearly && plan.price !== "Custom" && (
                      <div className="text-sm text-green-500 font-medium mt-1">
                        Save $
                        {Number.parseInt(plan.price.replace("$", "")) * 12 -
                          Number.parseInt(plan.yearlyPrice.replace("$", ""))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className={`${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} hover:shadow-lg hover:shadow-purple-500/25 text-white`
                      : theme === "dark"
                        ? "bg-slate-700/60 hover:bg-slate-600/60 text-white border border-slate-600"
                        : "bg-white/60 hover:bg-white/80 text-slate-900 border border-slate-200"
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
            All plans include 24/7 support, 99.9% uptime SLA, and 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
