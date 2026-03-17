import { PageLayout } from "@/components/page-layout"
import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SpeedInsights />
          <PageLayout>{children}</PageLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}
