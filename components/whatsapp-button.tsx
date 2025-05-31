"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "5512988864279" // Seu número de WhatsApp
  const message = "Olá! Vim do seu portfólio e gostaria de conversar."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-green-500/20 via-green-500/10 to-transparent rounded-full z-0 pointer-events-none"
        animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {isHovered && (
        <motion.div
          className="absolute -top-10 right-0 bg-white dark:bg-gray-800 text-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          Fale comigo!
        </motion.div>
      )}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg text-white relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Image
          src="/images/whatsapp-icon.png"
          alt="WhatsApp"
          width={28}
          height={28}
          className="filter brightness-0 invert"
        />
        <span className="sr-only">Contato via WhatsApp</span>
      </motion.a>

      <motion.div
        className="absolute -inset-1.5 border-2 border-green-500/50 rounded-full z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.5, 0.7] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.div>
  )
}

export default WhatsAppButton
