"use client"

import type React from "react"

import { NavigationHeader } from "./navigation-header"
import { WhatsAppButton } from "./whatsapp-button"
import { AnimatedBackground } from "./animated-background"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <AnimatedBackground>
      <div className="min-h-screen bg-transparent">
        <NavigationHeader />
        <WhatsAppButton />

        {/* Main content with top padding to account for fixed header */}
        <main className="pt-20">{children}</main>
      </div>
    </AnimatedBackground>
  )
}
