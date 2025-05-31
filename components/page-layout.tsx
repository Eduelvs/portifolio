"use client"

import type React from "react"

import { NavigationHeader } from "./navigation-header"
import { WhatsAppButton } from "./whatsapp-button"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <WhatsAppButton />

      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">{children}</main>
    </div>
  )
}
