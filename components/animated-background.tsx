"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Generate random positions for the blobs
  const blobs = [
    { x: "10%", y: "20%", size: "30rem", color: isDarkTheme ? "blue" : "blue" },
    { x: "70%", y: "60%", size: "40rem", color: isDarkTheme ? "purple" : "purple" },
    { x: "30%", y: "80%", size: "35rem", color: isDarkTheme ? "green" : "green" },
    { x: "80%", y: "15%", size: "25rem", color: isDarkTheme ? "pink" : "pink" },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated blobs that follow mouse with delay */}
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[100px] opacity-[0.15] dark:opacity-[0.07] pointer-events-none`}
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background:
              blob.color === "blue"
                ? "linear-gradient(135deg, #60a5fa, #3b82f6)"
                : blob.color === "purple"
                  ? "linear-gradient(135deg, #a78bfa, #8b5cf6)"
                  : blob.color === "green"
                    ? "linear-gradient(135deg, #4ade80, #22c55e)"
                    : "linear-gradient(135deg, #f472b6, #ec4899)",
            zIndex: 0,
          }}
          animate={{
            x: mousePosition.x * (0.02 + index * 0.01) - 150,
            y: mousePosition.y * (0.02 + index * 0.01) - 150,
          }}
          transition={{
            type: "spring",
            stiffness: 50 - index * 10,
            damping: 20 + index * 5,
            mass: 1 + index * 0.5,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundSize: "30px 30px",
          backgroundImage: `linear-gradient(to right, ${
            isDarkTheme ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
          } 1px, transparent 1px), 
          linear-gradient(to bottom, ${
            isDarkTheme ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
          } 1px, transparent 1px)`,
        }}
      />

      {/* Mouse follower */}
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-0"
        style={{
          background: isDarkTheme
            ? "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)"
            : "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 70%)",
        }}
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute rounded-full pointer-events-none ${isDarkTheme ? "bg-white/10" : "bg-black/5"}`}
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
