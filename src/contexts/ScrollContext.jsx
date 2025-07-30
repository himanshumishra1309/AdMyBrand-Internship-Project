"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ScrollContext = createContext()

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider")
  }
  return context
}

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState("down")

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up")
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <ScrollContext.Provider value={{ scrollY, scrollDirection }}>{children}</ScrollContext.Provider>
}
