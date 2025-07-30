"use client"

import { useScroll } from "../contexts/ScrollContext"

export default function ScrollProgress() {
  const { scrollProgress } = useScroll()

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 bg-transparent z-50">
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
