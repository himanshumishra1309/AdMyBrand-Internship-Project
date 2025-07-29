import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle, 
  BookOpen, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How does ADmyBRAND's AI actually improve my marketing results?",
      answer: "Our AI analyzes over 200+ data points from your marketing campaigns, customer behavior, and market trends in real-time. It identifies patterns humans miss, predicts customer actions, and automatically optimizes your campaigns for maximum ROI. Most clients see 2-5x improvement in conversion rates within the first 30 days.",
      category: "AI Technology",
      popular: true
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Absolutely! We have native integrations with 150+ popular tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, Shopify, and more. Our API allows custom integrations, and our team provides white-glove setup assistance to ensure seamless data flow across all your platforms.",
      category: "Integrations",
      popular: true
    },
    {
      question: "What kind of results can I expect and how quickly?",
      answer: "While results vary by industry and campaign complexity, our clients typically see: 40-60% improvement in ad performance within 2 weeks, 2-3x increase in qualified leads within 30 days, and 25-45% reduction in customer acquisition costs within 60 days. We provide detailed analytics dashboards to track your progress.",
      category: "Results",
      popular: true
    },
    {
      question: "Is my data secure and compliant with privacy regulations?",
      answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and CCPA ready. All data is encrypted in transit and at rest using 256-bit encryption. We never sell your data and provide granular privacy controls. Your data remains yours, and you can export or delete it anytime.",
      category: "Security",
      popular: false
    },
    {
      question: "Do I need technical expertise to use ADmyBRAND AI Suite?",
      answer: "Not at all! Our platform is designed for marketers, not developers. The intuitive interface requires no coding knowledge. We provide comprehensive onboarding, video tutorials, and 24/7 support. Most users are running optimized campaigns within hours of setup. For advanced users, we offer API access and custom configurations.",
      category: "Ease of Use",
      popular: false
    },
    {
      question: "What happens if I need to cancel or downgrade my plan?",
      answer: "You can change or cancel your plan anytime with no cancellation fees or long-term contracts. If you downgrade, you'll retain access to your data and can export everything. We also offer plan pausing for seasonal businesses. Our customer success team will work with you to find the best solution for your needs.",
      category: "Billing",
      popular: false
    },
    {
      question: "How is ADmyBRAND different from other marketing automation tools?",
      answer: "Unlike traditional tools that require manual setup and constant monitoring, our AI works autonomously. It continuously learns from your data, predicts market changes, and adjusts strategies in real-time. We combine predictive analytics, automated optimization, and personalized customer journeys in one platform, eliminating the need for multiple tools.",
      category: "Comparison",
      popular: false
    },
    {
      question: "Can ADmyBRAND work for small businesses or is it only for enterprises?",
      answer: "ADmyBRAND scales with businesses of all sizes. Our Starter plan is perfect for small businesses with limited budgets, while our Enterprise plan serves Fortune 500 companies. The AI adapts to your data volume and complexity, providing relevant insights whether you have 100 customers or 100 million.",
      category: "Business Size",
      popular: false
    }
  ]

  const supportOptions = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "24/7 Live Chat",
      description: "Get instant answers from our AI-powered support bot or chat with human experts.",
      action: "Start Chat"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Browse our comprehensive library of guides, tutorials, and best practices.",
      action: "Browse Docs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Forum",
      description: "Connect with other ADmyBRAND users and share marketing strategies.",
      action: "Join Community"
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const popularFAQs = faqs.filter(faq => faq.popular)
  const otherFAQs = faqs.filter(faq => !faq.popular)

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/10 to-cyan-200/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Questions?
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              We Have Answers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Our support team is here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            {/* Popular FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Most Popular Questions
                </h3>
              </div>

              <div className="space-y-4">
                {popularFAQs.map((faq, index) => (
                  <motion.div
                    key={`popular-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                            {faq.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                More Questions
              </h3>

              <div className="space-y-4">
                {otherFAQs.map((faq, index) => (
                  <motion.div
                    key={`other-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(popularFAQs.length + index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                            {faq.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openIndex === popularFAQs.length + index ? (
                          <Minus className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === popularFAQs.length + index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Support Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="sticky top-8"
            >
              {/* Quick Help */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/30 dark:border-blue-800/30 rounded-3xl p-8 mb-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Still Need Help?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our support team is available 24/7 to assist you with any questions.
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Support</span>
                </motion.button>
              </div>

              {/* Support Options */}
              <div className="space-y-4">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {option.description}
                        </p>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                          <span>{option.action}</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-white/20 dark:border-slate-600/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of successful businesses using ADmyBRAND AI Suite to transform their marketing.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
