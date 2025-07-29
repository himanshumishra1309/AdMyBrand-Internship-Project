import React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Sparkles,
  Heart,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Integration', href: '#integrations' },
        { name: 'API Documentation', href: '#api' },
        { name: 'Mobile App', href: '#mobile' },
        { name: 'Security', href: '#security' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press Kit', href: '#press' },
        { name: 'Partners', href: '#partners' },
        { name: 'Investors', href: '#investors' },
        { name: 'Blog', href: '#blog' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'Tutorials', href: '#tutorials' },
        { name: 'Case Studies', href: '#cases' },
        { name: 'Webinars', href: '#webinars' },
        { name: 'Templates', href: '#templates' }
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' },
        { name: 'Compliance', href: '#compliance' },
        { name: 'Data Processing', href: '#data' }
      ]
    }
  }

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#twitter', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: '#facebook', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#instagram', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#linkedin', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: '#youtube', color: 'hover:text-red-500' }
  ]

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: '+1 (555) 123-4567', label: 'Call us' },
    { icon: <Mail className="w-5 h-5" />, text: 'hello@admybrand.ai', label: 'Email us' },
    { icon: <MapPin className="w-5 h-5" />, text: 'San Francisco, CA', label: 'Visit us' }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Stay Updated</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Get the Latest AI Marketing Insights
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                Join 50,000+ marketers receiving weekly insights, tips, and exclusive offers.
              </p>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                <div className="flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                No spam, unsubscribe at any time. Read our Privacy Policy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    ADmyBRAND
                  </h1>
                  <p className="text-sm text-gray-400">AI Marketing Suite</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
                Revolutionizing marketing with AI-powered insights, automation, and 
                predictive analytics. Transform your brand's future today.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium">{contact.text}</p>
                      <p className="text-sm text-gray-400">{contact.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4 }}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <p>© 2024 ADmyBRAND AI Suite. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                  <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy</a>
                  <a href="#terms" className="hover:text-blue-400 transition-colors">Terms</a>
                  <a href="#cookies" className="hover:text-blue-400 transition-colors">Cookies</a>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>for innovative marketers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer