"use client"

import type React from "react"

import { NavigationHeader } from "./navigation-header"
import { ThemeToggle } from "./theme-toggle"

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">{children}</main>
    </div>
  )
}
