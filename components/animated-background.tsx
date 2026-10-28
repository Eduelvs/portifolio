"use client"

import type React from "react"
import SideRays from "./SideRays"

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0">
        <SideRays
          rayColor1="#FFC46B"
          rayColor2="#96c8ff"
          origin="top-right"
          speed={2.5}
          intensity={2}
          spread={2}
          density={5}
          followMouse={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
