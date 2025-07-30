"use client"

import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext.jsx"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver.js"
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Mail, BookOpen, Clock, CheckCircle } from "lucide-react"

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI uses advanced natural language processing models trained on millions of high-performing marketing materials. Simply input your brand guidelines, target audience, and campaign goals, and our AI will generate compelling content tailored to your specific needs. The system learns from your feedback and continuously improves its output quality.",
    category: "AI Technology",
    icon: "🤖"
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite offers seamless integrations with over 50 popular marketing platforms including Google Ads, Facebook Ads Manager, HubSpot, Salesforce, Mailchimp, and many more. Our robust API also allows for custom integrations with your proprietary systems.",
    category: "Integrations",
    icon: "🔗"
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support for Pro and Enterprise plans, extensive documentation, video tutorials, and dedicated account managers for Enterprise customers. Basic plan users receive email support with response times under 24 hours. We also provide onboarding assistance and regular training sessions.",
    category: "Support",
    icon: "💬"
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We use enterprise-grade security measures including AES-256 encryption, SOC 2 Type II compliance, and GDPR compliance. Your data is never used to train our models or shared with third parties. We also offer on-premise deployment options for Enterprise customers with additional security requirements.",
    category: "Security",
    icon: "🔒"
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no cancellation fees or penalties. Your account will remain active until the end of your current billing period, and you'll retain access to all your generated content and analytics data. We also offer a 30-day money-back guarantee for new subscribers.",
    category: "Billing",
    icon: "💳"
  },
  {
    question: "How accurate is the AI-generated content?",
    answer:
      "Our AI achieves 95%+ accuracy in content generation based on your brand guidelines and campaign objectives. The system continuously learns from your feedback and performance data to improve output quality. Most customers see immediate improvements in engagement rates and conversion metrics.",
    category: "Performance",
    icon: "📊"
  }
]

export default function FAQ() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
      ref={ref} 
      className={`py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
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
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm text-sm font-medium mb-6 transition-all duration-300 hover:scale-105 ${
            theme === "dark" 
              ? "bg-slate-800/40 border-slate-700/50 text-slate-300" 
              : "bg-white/60 border-white/50 text-slate-700"
          }`}>
            <HelpCircle className="w-4 h-4 text-blue-500" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2
            className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
              theme === "dark"
                ? "bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent"
            }`}
          >
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>

          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Everything you need to know about ADmyBRAND AI Suite and how it can transform your marketing campaigns.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className={`space-y-4 transition-all duration-1000 delay-300 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-3xl backdrop-blur-sm border shadow-lg transition-all duration-500 overflow-hidden hover:shadow-2xl hover:scale-[1.01] ${
                theme === "dark"
                  ? "bg-gradient-to-br from-slate-800/60 to-slate-900/40 border-slate-700/50"
                  : "bg-gradient-to-br from-white/80 to-white/60 border-white/60"
              } ${openIndex === index ? "shadow-2xl scale-[1.02] ring-2 ring-blue-500/20" : ""}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 lg:p-8 text-left flex items-start gap-4 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-2xl backdrop-blur-sm border border-blue-500/20">
                  {faq.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    theme === "dark" 
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" 
                      : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                  }`}>
                    <Sparkles className="w-3 h-3" />
                    {faq.category}
                  </div>
                  <h3 className={`text-lg lg:text-xl font-bold leading-tight ${
                    theme === "dark" ? "text-white" : "text-slate-900"
                  } group-hover:text-blue-500 transition-colors duration-300`}>
                    {faq.question}
                  </h3>
                </div>

                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white rotate-180 shadow-lg"
                    : theme === "dark"
                      ? "bg-slate-700/50 text-slate-400 hover:bg-slate-600/50"
                      : "bg-slate-100/50 text-slate-600 hover:bg-slate-200/50"
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
              } overflow-hidden`}>
                <div className="px-6 lg:px-8">
                  <div className="ml-16">
                    <div className={`w-full h-px bg-gradient-to-r from-transparent ${
                      theme === "dark" 
                        ? "via-blue-400/40" 
                        : "via-blue-500/40"
                    } to-transparent mb-6`} />
                    <div className={`rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-slate-700/30 to-slate-800/20 border-slate-600/30"
                        : "bg-gradient-to-br from-blue-50/50 to-white/30 border-blue-100/50"
                    }`}>
                      <p className={`text-base lg:text-lg leading-relaxed ${
                        theme === "dark" ? "text-slate-200" : "text-slate-700"
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div
          className={`mt-16 p-8 lg:p-12 rounded-3xl backdrop-blur-sm border text-center transition-all duration-1000 delay-500 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-800/60 to-slate-900/40 border-slate-700/50"
              : "bg-gradient-to-br from-white/80 to-white/60 border-white/60"
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className={`text-sm font-semibold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                Still Have Questions?
              </span>
            </div>
            
            <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Need More Help?
            </h3>
            <p className={`text-lg mb-8 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              Our support team is ready to assist you with any questions or concerns about our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-2xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Contact Support
              </button>
              <button className={`inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 group ${
                theme === "dark"
                  ? "bg-slate-700/50 text-white border border-slate-600/50 hover:bg-slate-600/50"
                  : "bg-white/60 text-slate-900 border border-white/80 hover:bg-white/80"
              }`}>
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Browse Documentation
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-6 text-sm">
              <div className={`flex items-center gap-2 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className={`w-px h-4 ${theme === "dark" ? "bg-slate-600" : "bg-slate-300"}`} />
              <div className={`flex items-center gap-2 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Average 2min Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
