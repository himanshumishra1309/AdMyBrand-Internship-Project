"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button.jsx"
import { useTheme } from "../contexts/ThemeContext"
import { useScroll } from "../contexts/ScrollContext"
import { Moon, Sun, Menu, X, Sparkles, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, toggleTheme } = useTheme()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMoreOpen && !event.target.closest('.dropdown-container')) {
        setIsMoreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMoreOpen])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'demo', 'pricing', 'pricing-calculator', 'testimonials', 'faq', 'blog', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Reset active section if at top
      if (window.scrollY < 100) {
        setActiveSection("hero")
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Demo", href: "#demo", id: "demo" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Calculator", href: "#pricing-calculator", id: "pricing-calculator", shortName: "Calc" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials", shortName: "Reviews" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Blog", href: "#blog", id: "blog" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  // Condensed nav items for medium screens (1024px)
  const condensedNavItems = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "Features", href: "#features", id: "features" },
    { name: "Demo", href: "#demo", id: "demo" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
    { name: "Reviews", href: "#testimonials", id: "testimonials" },
    { name: "Blog", href: "#blog", id: "blog" },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? `backdrop-blur-md border-b ${
              theme === "dark" 
                ? "border-slate-800/50 bg-slate-950/80" 
                : "border-slate-200/50 bg-white/80"
            }`
          : ""
      }`}
    >
      <div className="mx-auto px-3 md:px-4 lg:px-6 xl:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Simplified Logo */}
          <div 
            className="flex items-center gap-2 md:gap-3 group cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg md:text-xl font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                } group-hover:text-blue-500 transition-colors duration-300`}
              >
                ADmyBRAND
              </span>
              <span className={`text-xs font-medium ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                AI Suite
              </span>
            </div>
          </div>

          {/* Desktop Navigation with responsive styling */}
          <div className="hidden md:flex items-center gap-1 lg:gap-6 flex-1 justify-center max-w-5xl">
            {/* Show condensed nav on medium screens (768px-1279px), full nav on xl screens (1280px+) */}
            <div className="md:flex xl:hidden items-center gap-1">
              {condensedNavItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-1.5 py-2 text-xs font-medium transition-all duration-300 hover:scale-105 group bg-transparent border-none whitespace-nowrap ${
                      theme === "dark" ? "text-white hover:text-purple-300" : "text-blue-900 hover:text-purple-600"
                    }`}
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Purple underline for active section */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    } rounded-full`} />
                    
                    {/* Hover underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
                  </button>
                )
              })}
              
              {/* More dropdown for medium screens */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`relative px-1.5 py-2 text-xs font-medium transition-all duration-300 hover:scale-105 group bg-transparent border-none whitespace-nowrap flex items-center gap-1 ${
                    theme === "dark" ? "text-white hover:text-purple-300" : "text-blue-900 hover:text-purple-600"
                  }`}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <span className="relative z-10">More</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown menu */}
                {isMoreOpen && (
                  <div className={`absolute top-full right-0 mt-1 py-2 w-32 rounded-lg shadow-lg border z-50 ${
                    theme === "dark" 
                      ? "bg-slate-900 border-slate-700" 
                      : "bg-white border-slate-200"
                  }`}>
                    <button
                      onClick={() => { scrollToSection("#pricing-calculator"); setIsMoreOpen(false); }}
                      className={`block w-full text-left px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Calculator
                    </button>
                    <button
                      onClick={() => { scrollToSection("#faq"); setIsMoreOpen(false); }}
                      className={`block w-full text-left px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      FAQ
                    </button>
                    <button
                      onClick={() => { scrollToSection("#contact"); setIsMoreOpen(false); }}
                      className={`block w-full text-left px-3 py-2 text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
                        theme === "dark" ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Contact
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Full navigation for extra large screens */}
            <div className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group bg-transparent border-none whitespace-nowrap ${
                      theme === "dark" ? "text-white hover:text-purple-300" : "text-blue-900 hover:text-purple-600"
                    }`}
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Purple underline for active section */}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    } rounded-full`} />
                    
                    {/* Hover underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-lg transition-all duration-300 hover:scale-105 ${
                theme === "dark" 
                  ? "hover:bg-slate-800 text-slate-300 hover:text-white" 
                  : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300" />
              ) : (
                <Moon className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300" />
              )}
            </Button>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 lg:px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium text-xs md:text-sm">
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden w-8 h-8 rounded-lg transition-all duration-300 hover:scale-105 ${
                theme === "dark" 
                  ? "hover:bg-slate-800 text-slate-300" 
                  : "hover:bg-slate-100 text-slate-600"
              } ${isOpen ? 'rotate-180' : ''}`}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
            isOpen ? "max-h-[600px] opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-3 space-y-1 ${
              theme === "dark" 
                ? "bg-slate-950/95 border-slate-800/50" 
                : "bg-white/95 border-slate-200/50"
            } backdrop-blur-md rounded-2xl border shadow-lg p-3`}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl group relative bg-transparent border-none ${
                    isActive
                      ? `${theme === "dark" ? "text-white" : "text-slate-900"} scale-105`
                      : `${
                          theme === "dark"
                            ? "text-slate-300 hover:text-white hover:bg-slate-800/30"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/80"
                        } hover:scale-105`
                  }`}
                  style={{ backgroundColor: 'transparent' }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    )}
                  </span>
                  
                  {/* Purple underline for active section in mobile */}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-purple-500 transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  } rounded-full`} />
                </button>
              )
            })}
            
            {/* Mobile CTA */}
            <div className="pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
