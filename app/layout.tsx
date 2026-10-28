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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
          <SpeedInsights />
          <PageLayout>{children}</PageLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: "Eduardo Alves — Software Engineer Front-end",
  description:
    "Engenheiro de Software Front-end Pleno. Produtos em React, Next.js e TypeScript, perto de Produto e Design.",
  generator: "v0.dev",
}
