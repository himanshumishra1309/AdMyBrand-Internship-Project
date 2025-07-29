import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CMO",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b632?w=150&h=150&fit=crop&crop=face",
      content: "ADmyBRAND AI Suite transformed our marketing ROI by 340% in just 3 months. The predictive analytics helped us identify high-value customers we never knew existed.",
      rating: 5,
      results: {
        metric: "ROI Increase",
        value: "340%",
        period: "3 months"
      },
      tags: ["AI Analytics", "Customer Insights", "ROI Growth"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The automation features are incredible. What used to take our team 20 hours per week now runs automatically with better results. It's like having a team of marketing experts working 24/7.",
      rating: 5,
      results: {
        metric: "Time Saved",
        value: "20hrs",
        period: "weekly"
      },
      tags: ["Automation", "Efficiency", "Team Productivity"]
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Marketing Director",
      company: "RetailForward",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The real-time insights and A/B testing powered by AI helped us optimize our campaigns instantly. Our conversion rates doubled, and customer acquisition costs dropped by 45%.",
      rating: 5,
      results: {
        metric: "Conversion Rate",
        value: "2x",
        period: "improvement"
      },
      tags: ["A/B Testing", "Conversion Optimization", "Cost Reduction"]
    },
    {
      id: 4,
      name: "David Park",
      role: "VP Marketing",
      company: "ScaleUp Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "ADmyBRAND's AI predicted market trends 2 months before our competitors. We launched campaigns early and captured 60% more market share than expected.",
      rating: 5,
      results: {
        metric: "Market Share",
        value: "+60%",
        period: "vs target"
      },
      tags: ["Trend Prediction", "Market Analysis", "Competitive Advantage"]
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Head of Growth",
      company: "InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      content: "The customer segmentation AI found micro-audiences we never considered. Personalized campaigns to these segments generated 85% of our new revenue this quarter.",
      rating: 5,
      results: {
        metric: "New Revenue",
        value: "85%",
        period: "this quarter"
      },
      tags: ["Customer Segmentation", "Personalization", "Revenue Growth"]
    }
  ]

  const stats = [
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-5 h-5" /> },
    { number: "500K+", label: "Brands Powered", icon: <Users className="w-5 h-5" /> },
    { number: "4.9/5", label: "Average Rating", icon: <Award className="w-5 h-5" /> }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-indigo-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Customer Success</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Loved by
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how forward-thinking companies are achieving extraordinary 
            results with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="pt-6"
              >
                {/* Content */}
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex items-center mb-6 md:mb-0">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-lg mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                      <div className="flex items-center mt-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {currentTestimonial.results.value}
                    </div>
                    <div className="text-sm text-green-700 dark:text-green-300">
                      {currentTestimonial.results.metric}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400">
                      {currentTestimonial.results.period}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {currentTestimonial.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Video Testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=')] opacity-20" />
            
            <div className="relative z-10">
              <TrendingUp className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                See ADmyBRAND in Action
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Watch how leading brands are transforming their marketing with AI-powered insights.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                  <span>Watch Success Stories</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <span>Start Your Success Story</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
