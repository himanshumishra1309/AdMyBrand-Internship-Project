import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Users, 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Lightbulb
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms analyze your brand's performance and predict optimal strategies for maximum growth and engagement.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      highlights: ["Predictive Analytics", "Smart Recommendations", "Auto-Optimization"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Targeting",
      description: "Identify and reach your ideal customers with laser-focused targeting based on behavior, demographics, and purchase intent.",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
      highlights: ["Audience Segmentation", "Behavioral Tracking", "Intent Analysis"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Acceleration",
      description: "Supercharge your marketing ROI with data-driven insights that identify high-impact opportunities and eliminate wasteful spending.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
      highlights: ["ROI Optimization", "Performance Tracking", "Growth Metrics"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Automation",
      description: "Automate complex marketing workflows with intelligent triggers that respond to customer actions and market changes instantly.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
      highlights: ["Smart Workflows", "Trigger-Based Actions", "24/7 Monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection for your data.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
      highlights: ["256-bit Encryption", "SOC 2 Compliance", "Advanced Monitoring"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scalability",
      description: "Expand worldwide with multi-language support, regional compliance, and localized marketing strategies powered by AI.",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20",
      highlights: ["Multi-Language Support", "Regional Compliance", "Local Insights"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of AI-powered tools designed to transform 
            your marketing strategy and accelerate your business growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500`} />
              
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=')] opacity-20" />
            
            <div className="relative z-10">
              <Lightbulb className="w-12 h-12 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Marketing?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of brands already using ADmyBRAND AI Suite to drive unprecedented growth.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
