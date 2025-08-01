"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { Home, Settings, Bell, User } from "lucide-react"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "Projeto",
    href: "/projects",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Contato",
    href: "/contact",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Perfil",
    href: "/profile",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const avatarGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export function NavigationHeader() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isDarkTheme = theme === "dark"

  return (
    <header
      className="
        fixed
        top-0 left-0 right-0
        z-50 flex justify-center p-4
        sm:top-0 sm:left-0 sm:right-0
        sm:bottom-auto
        sm:flex-row
        sm:justify-center
        sm:items-center
        sm:p-4
        bottom-0 w-full
        flex-row
        items-end
        p-2
        sm:rounded-none
        bg-transparent
        sm:bg-transparent
        pointer-events-none
        sm:pointer-events-auto
      "
    >
      <div
        className="
          flex items-center gap-4
          sm:flex-row
          flex-row
          w-full
          max-w-2xl
          justify-between
          sm:justify-center
          pointer-events-auto
        "
      >
        {/* Avatar Profile */}
        <motion.div
          className="relative hidden sm:block"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-r ${
              isDarkTheme
                ? "from-blue-400/40 via-purple-400/40 to-pink-400/40"
                : "from-blue-400/30 via-purple-400/30 to-pink-400/30"
            } rounded-full z-0 pointer-events-none`}
            variants={avatarGlowVariants}
          />
          <Link href="/profile" className="relative z-10 block">
            <motion.div
              className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg border-2 border-border/40 shadow-lg relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/foto_perfil.jpg"
                alt="Eduardo - Foto de Perfil"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Avatar para mobile */}
        <motion.div
          className="relative sm:hidden"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-r ${
              isDarkTheme
                ? "from-blue-400/40 via-purple-400/40 to-pink-400/40"
                : "from-blue-400/30 via-purple-400/30 to-pink-400/30"
            } rounded-full z-0 pointer-events-none`}
            variants={avatarGlowVariants}
          />
          <Link href="/profile" className="relative z-10 block">
            <motion.div
              className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-lg border-2 border-border/40 shadow-lg relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/foto_perfil.jpg"
                alt="Eduardo - Foto de Perfil"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>

        <motion.nav
          className="
            p-2 rounded-2xl
            bg-gradient-to-b from-background/95 to-background/80
            backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden
            w-full
            sm:w-auto
            flex-1
            mx-2
          "
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className={`absolute -inset-2 bg-gradient-radial from-transparent ${
              isDarkTheme
                ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
                : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
            } to-transparent rounded-3xl z-0 pointer-events-none`}
            variants={navGlowVariants}
          />
          <ul
            className="
              flex items-center justify-between gap-2 relative z-10
              sm:justify-center
            "
          >
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.li key={item.label} className="relative flex-1">
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 0.3 : 0,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.div
                      className={`
                        flex items-center gap-2 px-2 py-2 sm:px-4
                        relative z-10 rounded-xl transition-colors
                        justify-center
                        text-xs sm:text-base
                        ${isActive
                          ? "bg-primary/10 text-foreground"
                          : "bg-transparent text-muted-foreground group-hover:text-foreground"
                        }
                      `}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                    >
                      <Link href={item.href} className="flex items-center gap-1 sm:gap-2">
                        <span
                          className={`transition-colors duration-300 ${isActive ? item.iconColor : "text-foreground"}`}
                        >
                          {item.icon}
                        </span>
                        <span className="hidden sm:inline">{item.label}</span>
                      </Link>
                    </motion.div>
                    <motion.div
                      className="
                        flex items-center gap-2 px-2 py-2 sm:px-4
                        absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl
                        justify-center
                        text-xs sm:text-base
                      "
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                    >
                      <Link href={item.href} className="flex items-center gap-1 sm:gap-2">
                        <span className="transition-colors duration-300 text-foreground">{item.icon}</span>
                        <span className="hidden sm:inline">{item.label}</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.li>
              )
            })}
          </ul>
        </motion.nav>

        {/* Theme Toggle Button with enhanced styling */}
        <motion.div
          className="
            p-2 rounded-full
            bg-gradient-to-b from-background/95 to-background/80
            backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden
            hidden sm:block
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={`absolute -inset-2 bg-gradient-radial from-transparent ${
              isDarkTheme
                ? "via-yellow-400/30 via-30% via-purple-400/30 via-60%"
                : "via-blue-400/20 via-30% via-purple-400/20 via-60%"
            } to-transparent rounded-full z-0 pointer-events-none opacity-0`}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <div className="relative z-10">
            <ThemeToggle />
          </div>
        </motion.div>
        {/* Botão de tema para mobile */}
        <motion.div
          className="
            p-2 rounded-full
            bg-gradient-to-b from-background/95 to-background/80
            backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden
            sm:hidden
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={`absolute -inset-2 bg-gradient-radial from-transparent ${
              isDarkTheme
                ? "via-yellow-400/30 via-30% via-purple-400/30 via-60%"
                : "via-blue-400/20 via-30% via-purple-400/20 via-60%"
            } to-transparent rounded-full z-0 pointer-events-none opacity-0`}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <div className="relative z-10">
            <ThemeToggle />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
