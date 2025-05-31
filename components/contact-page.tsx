"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Globe,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"

interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  color: string
  gradient: string
}

interface SocialLink {
  icon: React.ReactNode
  label: string
  href: string
  color: string
  hoverColor: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "eduardo15022003@gmail.com",
    href: "mailto:eduardo15022003@gmail.com",
    color: "text-blue-600",
    gradient: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telefone",
    value: "+55 (12) 98886-4279",
    href: "tel:+5512988864279",
    color: "text-green-600",
    gradient: "from-green-500/20 to-green-600/20",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "https://maps.google.com/?q=São+Paulo,+Brasil",
    color: "text-red-600",
    gradient: "from-red-500/20 to-red-600/20",
  },
]

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    href: "https://github.com/eduelvs",
    color: "text-gray-800 dark:text-gray-200",
    hoverColor: "hover:text-gray-600 dark:hover:text-white",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/eduardo-alves-edualves",
    color: "text-blue-600",
    hoverColor: "hover:text-blue-700",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    label: "X",
    href: "https://x.com/EduardinhoSbb",
    color: "text-sky-500",
    hoverColor: "hover:text-sky-600",
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    label: "Instagram",
    href: "https://instagram.com/sou.duzin",
    color: "text-pink-600",
    hoverColor: "hover:text-pink-700",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    label: "Website",
    href: "https://eduelvs.vercel.app",
    color: "text-purple-600",
    hoverColor: "hover:text-purple-700",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem um projeto em mente? Quer colaborar ou apenas bater um papo sobre tecnologia? Ficarei feliz em conversar
            com você!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
              <motion.div
                className={`absolute -inset-2 bg-gradient-radial from-transparent ${
                  isDarkTheme
                    ? "via-blue-400/20 via-30% via-purple-400/20 via-60% via-green-400/20 via-90%"
                    : "via-blue-400/10 via-30% via-purple-400/10 via-60% via-green-400/10 via-90%"
                } to-transparent rounded-3xl pointer-events-none`}
                variants={glowVariants}
                whileHover="hover"
                initial="initial"
              />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Nome *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Seu nome completo"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="seu@email.com"
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground">
                        Assunto *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Sobre o que você gostaria de falar?"
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Conte-me mais sobre seu projeto ou ideia..."
                        rows={6}
                        className="bg-background/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="h-4 w-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground">Obrigado pelo contato! Responderei em breve.</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Contact Details */}
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <User className="h-6 w-6" />
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r ${info.gradient} border border-border/20 hover:border-border/40 transition-all duration-300 group`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border border-border/20 hover:border-border/40 transition-all duration-300 group ${social.color} ${social.hoverColor}`}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">{social.icon}</div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-foreground">Disponível para novos projetos</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atualmente aceitando novos projetos freelance e oportunidades de colaboração. Tempo de resposta médio:
                  24 horas.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-12">
          <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Prefere uma conversa rápida?</h2>
              <p className="text-muted-foreground mb-6">
                Se preferir, pode me chamar diretamente no WhatsApp para uma conversa mais rápida e informal.
              </p>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() =>
                  window.open(
                    "https://wa.me/5512988864279?text=Olá! Vim do seu portfólio e gostaria de conversar.",
                    "_blank",
                  )
                }
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
