"use client"

import { useState } from "react"
import { Button } from "./ui/button.jsx"
import { Input } from "./ui/input.jsx"
import { Textarea } from "./ui/textarea.jsx"
import { toast } from "sonner"
import { useTheme } from "../contexts/ThemeContext.jsx"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver.js"
import { Mail, MessageSquare, User, Send, MapPin, Phone, Clock } from "lucide-react"

export default function Contact() {
  const { theme } = useTheme()
  // const { toast } = useToast()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "123 Innovation Drive, Tech Valley, CA 94025",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50"
          : "bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 ${
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
            Get in
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Ready to transform your marketing with AI? Contact us today for a personalized demo and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              className={`backdrop-blur-sm rounded-3xl border shadow-2xl p-8 lg:p-12 ${
                theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label
                      className={`text-sm font-medium flex items-center gap-2 ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      <User className="w-4 h-4 text-blue-500" />
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className={`h-14 rounded-2xl border-2 transition-all duration-300 focus:scale-[1.02] ${
                        theme === "dark"
                          ? "bg-slate-700/30 border-slate-600/50 focus:border-blue-500 text-white placeholder:text-slate-400"
                          : "bg-white/50 border-white/50 focus:border-blue-500 focus:bg-white/70"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`text-sm font-medium flex items-center gap-2 ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      <Mail className="w-4 h-4 text-blue-500" />
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className={`h-14 rounded-2xl border-2 transition-all duration-300 focus:scale-[1.02] ${
                        theme === "dark"
                          ? "bg-slate-700/30 border-slate-600/50 focus:border-blue-500 text-white placeholder:text-slate-400"
                          : "bg-white/50 border-white/50 focus:border-blue-500 focus:bg-white/70"
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`text-sm font-medium flex items-center gap-2 ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 text-blue-500" />
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your marketing goals and how we can help..."
                      rows={6}
                      required
                      className={`rounded-2xl border-2 transition-all duration-300 focus:scale-[1.02] resize-none ${
                        theme === "dark"
                          ? "bg-slate-700/30 border-slate-600/50 focus:border-blue-500 text-white placeholder:text-slate-400"
                          : "bg-white/50 border-white/50 focus:border-blue-500 focus:bg-white/70"
                      }`}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              hasIntersected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div
                className={`backdrop-blur-sm rounded-3xl border shadow-xl p-8 ${
                  theme === "dark" ? "bg-slate-800/20 border-slate-700/30" : "bg-white/40 border-white/50"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                          {info.title}
                        </h4>
                        <p className={`${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response Promise */}
              <div
                className={`backdrop-blur-sm rounded-3xl border shadow-xl p-8 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-blue-700/30"
                    : "bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-blue-200/50"
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Quick Response Guarantee
                  </h4>
                  <p className={`${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                    We respond to all inquiries within 2 hours during business hours and within 24 hours on weekends.
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
