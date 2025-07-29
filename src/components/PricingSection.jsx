import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  Star, 
  Crown, 
  Zap, 
  Shield, 
  Users, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  Globe
} from 'lucide-react'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with AI marketing",
      monthlyPrice: 49,
      annualPrice: 39,
      icon: <Target className="w-6 h-6" />,
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50",
      features: [
        "Up to 5,000 monthly visitors",
        "Basic AI insights & recommendations",
        "Email marketing automation",
        "Social media scheduling",
        "Basic analytics dashboard",
        "Email support",
        "1 brand workspace"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Advanced AI tools for growing businesses and agencies",
      monthlyPrice: 149,
      annualPrice: 119,
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
      features: [
        "Up to 50,000 monthly visitors",
        "Advanced AI-powered analytics",
        "Predictive customer insights",
        "Multi-channel campaign automation",
        "A/B testing with AI optimization",
        "Custom integrations & API access",
        "Priority support",
        "5 brand workspaces",
        "White-label reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete AI marketing suite for large organizations",
      monthlyPrice: 499,
      annualPrice: 399,
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      features: [
        "Unlimited monthly visitors",
        "Full AI marketing suite",
        "Advanced predictive modeling",
        "Custom AI model training",
        "Enterprise-grade security",
        "Dedicated account manager",
        "24/7 phone & chat support",
        "Unlimited brand workspaces",
        "Custom onboarding & training",
        "SLA guarantee"
      ],
      popular: false
    }
  ]

  const additionalFeatures = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Support",
      description: "Dedicated success team and 24/7 technical support"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Scale",
      description: "99.9% uptime with global CDN and data centers"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/10 to-pink-200/10 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Simple Pricing</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Start free, scale as you grow. All plans include our core AI features 
            with no hidden fees or setup costs.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/20 dark:border-slate-700/30 rounded-2xl p-2 inline-flex">
            <span className={`px-4 py-2 text-sm font-medium transition-colors ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span className={`px-4 py-2 text-sm font-medium transition-colors ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500`} />
              
              <div className={`relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-white/20 dark:border-slate-700/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${plan.popular ? 'ring-2 ring-blue-500/20' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${plan.gradient} rounded-2xl text-white mb-4`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Billed annually (${(isAnnual ? plan.annualPrice : plan.monthlyPrice) * 12}/year)
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30'
                        : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </motion.button>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-white/20 dark:border-slate-600/30">
            <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Schedule a personalized demo with our team to discover how ADmyBRAND AI Suite 
              can transform your marketing strategy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              <span>Schedule Demo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
