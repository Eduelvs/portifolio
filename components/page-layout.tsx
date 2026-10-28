"use client"

import type React from "react"

import { AnimatedBackground } from "./animated-background"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-transparent">

        <main>{children}</main>
      </div>
    </AnimatedBackground>
  )
}
