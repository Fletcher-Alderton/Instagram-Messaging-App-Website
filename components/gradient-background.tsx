"use client"

import type React from "react"
import { type ReactNode, useState, useEffect } from "react"

interface GradientBackgroundProps {
  children: ReactNode
  className: string
  primaryColor?: string
  secondaryColor?: string
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  primaryColor = "#c7b3b4",
  secondaryColor = "#7c999d",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Set initial position to center of screen
    setMousePosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${primaryColor}80, ${secondaryColor}40 70%, transparent 100%)`,
      }}
      className={`${className} pointer-events-none`}
    >
      {children}
    </div>
  )
}

export default GradientBackground

