"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "../contexts/ThemeContext"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import { BookOpen, Calendar, Clock, ArrowRight, Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Marketing: 10 Trends to Watch in 2025",
    excerpt:
      "Discover the cutting-edge AI technologies that will reshape digital marketing strategies and customer engagement in the coming year.",
    author: "Sarah Johnson",
    authorRole: "Head of AI Research",
    authorImage: "/placeholder.svg?height=40&width=40&text=SJ",
    publishDate: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/placeholder.svg?height=300&width=600&text=AI+Marketing+Future",
    tags: ["AI", "Marketing Trends", "Future Tech"],
    featured: true,
  },
  {
    id: 2,
    title: "How to Increase ROI by 300% with AI-Powered Campaign Optimization",
    excerpt:
      "Learn the proven strategies and techniques that top marketers use to dramatically improve their campaign performance using artificial intelligence.",
    author: "Michael Chen",
    authorRole: "Marketing Strategist",
    authorImage: "/placeholder.svg?height=40&width=40&text=MC",
    publishDate: "2025-01-12",
    readTime: "6 min read",
    category: "Strategy",
    image: "/placeholder.svg?height=300&width=600&text=ROI+Optimization",
    tags: ["ROI", "Optimization", "AI Campaigns"],
  },
  {
    id: 3,
    title: "Complete Guide to Marketing Automation in 2025",
    excerpt:
      "Everything you need to know about implementing marketing automation that actually works, with real examples and actionable insights.",
    author: "Emily Rodriguez",
    authorRole: "Automation Expert",
    authorImage: "/placeholder.svg?height=40&width=40&text=ER",
    publishDate: "2025-01-10",
    readTime: "12 min read",
    category: "Automation",
    image: "/placeholder.svg?height=300&width=600&text=Marketing+Automation",
    tags: ["Automation", "Workflows", "Efficiency"],
  },
  {
    id: 4,
    title: "Data-Driven Marketing: Analytics That Actually Matter",
    excerpt:
      "Cut through the noise and focus on the metrics that truly impact your business growth and customer acquisition.",
    author: "David Kim",
    authorRole: "Data Scientist",
    authorImage: "/placeholder.svg?height=40&width=40&text=DK",
    publishDate: "2025-01-08",
    readTime: "10 min read",
    category: "Analytics",
    image: "/placeholder.svg?height=300&width=600&text=Data+Analytics",
    tags: ["Analytics", "Data Science", "KPIs"],
  },
  {
    id: 5,
    title: "Building High-Converting Landing Pages with AI",
    excerpt:
      "Discover how artificial intelligence can help you create landing pages that convert visitors into customers at unprecedented rates.",
    author: "Lisa Thompson",
    authorRole: "Conversion Expert",
    authorImage: "/placeholder.svg?height=40&width=40&text=LT",
    publishDate: "2025-01-05",
    readTime: "7 min read",
    category: "Conversion",
    image: "/placeholder.svg?height=300&width=600&text=Landing+Pages",
    tags: ["Landing Pages", "Conversion", "AI Design"],
  },
  {
    id: 6,
    title: "The Psychology of AI-Enhanced Customer Experiences",
    excerpt:
      "Learn how to combine psychological principles with AI technology to create customer experiences that drive loyalty and growth.",
    author: "Alex Park",
    authorRole: "UX Researcher",
    authorImage: "/placeholder.svg?height=40&width=40&text=AP",
    publishDate: "2025-01-03",
    readTime: "9 min read",
    category: "Customer Experience",
    image: "/placeholder.svg?height=300&width=600&text=Customer+Experience",
    tags: ["Psychology", "CX", "AI Personalization"],
  },
]

const categories = [
  "All",
  "AI & Technology",
  "Strategy",
  "Automation",
  "Analytics",
  "Conversion",
  "Customer Experience",
]

function BlogResource() {
  const { theme } = useTheme()
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  useEffect(() => {
    let filtered = blogPosts

    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section
      id="blog"
      ref={ref}
      className={`py-32 px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"
          : "bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
        <div
          className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-4xl lg:text-6xl font-bold ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Resources & Insights
            </h2>
          </div>
          <p className={`text-xl max-w-3xl mx-auto ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
            Stay ahead of the curve with expert insights, actionable strategies, and the latest trends in AI-powered
            marketing.
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  theme === "dark" ? "text-slate-400" : "text-slate-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-2xl border backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === "dark"
                    ? "bg-slate-800/40 border-slate-700/50 text-white placeholder-slate-400"
                    : "bg-white/60 border-white/50 text-slate-900 placeholder-slate-500"
                }`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : theme === "dark"
                        ? "bg-slate-800/40 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50"
                        : "bg-white/60 text-slate-700 hover:bg-white/80 border border-white/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.find((post) => post.featured) && (
          <div
            className={`mb-16 transition-all duration-1000 delay-300 ${
              hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {(() => {
              const featuredPost = filteredPosts.find((post) => post.featured)
              return (
                <div
                  className={`backdrop-blur-sm rounded-3xl border shadow-2xl overflow-hidden ${
                    theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className={`text-sm font-medium px-3 py-1 rounded-full ${
                            theme === "dark" ? "bg-purple-900/40 text-purple-300" : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {featuredPost.category}
                        </span>
                        <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h3
                        className={`text-2xl lg:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                      >
                        {featuredPost.title}
                      </h3>
                      <p className={`text-lg mb-6 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredPost.authorImage || "/placeholder.svg"}
                            alt={featuredPost.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className={`font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                              {featuredPost.author}
                            </p>
                            <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                              {formatDate(featuredPost.publishDate)}
                            </p>
                          </div>
                        </div>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Blog Grid */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <article
                  key={post.id}
                  className={`backdrop-blur-sm rounded-3xl border shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${
                    theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          theme === "dark" ? "bg-slate-800/80 text-slate-300" : "bg-white/80 text-slate-700"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
                        <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                          {formatDate(post.publishDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className={`w-4 h-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`} />
                        <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>{post.readTime}</span>
                      </div>
                    </div>
                    <h3
                      className={`text-xl font-bold mb-3 line-clamp-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`text-sm mb-4 line-clamp-3 ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 text-xs rounded-full ${
                            theme === "dark" ? "bg-slate-700/50 text-slate-300" : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className={`text-sm font-medium ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                            {post.author}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-blue-500 hover:text-blue-600 ${
                          theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-100"
                        }`}
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <BookOpen
                className={`w-16 h-16 mx-auto mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}
              />
              <h3 className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                No articles found
              </h3>
              <p className={`${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-700 ${
            hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className={`backdrop-blur-sm rounded-3xl border shadow-2xl p-12 ${
              theme === "dark" ? "bg-slate-800/40 border-slate-700/50" : "bg-white/60 border-white/50"
            }`}
          >
            <h3 className={`text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Stay Updated
            </h3>
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
              Get the latest insights, strategies, and industry updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-3 rounded-2xl border backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  theme === "dark"
                    ? "bg-slate-800/40 border-slate-700/50 text-white placeholder-slate-400"
                    : "bg-white/60 border-white/50 text-slate-900 placeholder-slate-500"
                }`}
              />
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-2xl">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogResource;