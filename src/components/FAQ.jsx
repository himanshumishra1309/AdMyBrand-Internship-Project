"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext.jsx"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver.js"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced natural language processing models trained on millions of high-performing marketing materials. Simply input your brand guidelines, target audience, and campaign goals, and our AI will generate compelling content tailored to your specific needs. The system learns from your feedback and continuously improves its output quality.",
    category: "AI Technology",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite offers seamless integrations with over 50 popular marketing platforms including Google Ads, Facebook Ads Manager, HubSpot, Salesforce, Mailchimp, and many more. Our robust API also allows for custom integrations with your proprietary systems.",
    category: "Integrations",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support for Pro and Enterprise plans, extensive documentation, video tutorials, and dedicated account managers for Enterprise customers. Basic plan users receive email support with response times under 24 hours. We also provide onboarding assistance and regular training sessions.",
    category: "Support",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We use enterprise-grade security measures including AES-256 encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is never used to train our models or shared with third parties. We also offer on-premise deployment options for Enterprise customers with additional security requirements.",
    category: "Security",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees or penalties. Your account will remain active until the end of your current billing period, and you'll retain access to all your generated content and analytics data. We also offer a 30-day money-back guarantee for new subscribers.",
    category: "Billing",
  },
]

export default function FAQ() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={ref} className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-indigo-500" : "bg-indigo-400"
          }`}
        />
        <div
          className={`absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
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
            <HelpCircle className="w-4 h-4 text-blue-500" />
            FAQ
          </div>

          <h2
            className={`text-5xl lg:text-6xl font-bold mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
            }`}
          >
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className={`text-xl max-w-2xl mx-auto ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-3xl backdrop-blur-sm border transition-all duration-300 overflow-hidden ${
                theme === "dark"
                  ? "bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/40"
                  : "bg-white/40 border-white/50 hover:bg-white/60"
              } ${openIndex === index ? "shadow-2xl scale-[1.02]" : "hover:shadow-xl"}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-8 text-left flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-blue-500/5 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className={`text-sm font-medium mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                    {faq.category}
                  </div>
                  <h3
                    className={`text-lg lg:text-xl font-semibold ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    } group-hover:text-blue-500 transition-colors duration-300`}
                  >
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`ml-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white rotate-180"
                      : theme === "dark"
                        ? "bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50"
                        : "bg-slate-100/50 text-slate-600 group-hover:bg-slate-200/50"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-8 pb-8">
                  <div
                    className={`w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6 ${
                      theme === "dark" ? "via-slate-600" : "via-slate-300"
                    }`}
                  />
                  <p className={`leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
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
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className={`text-lg font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Still have questions? Contact our support team
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
