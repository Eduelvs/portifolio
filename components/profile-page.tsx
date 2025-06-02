"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Calendar,
  Mail,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Heart,
  Users,
  Lightbulb,
  Target,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"
import Link from "next/link"

const skills = [
  { name: "Database", level: 90, color: "bg-blue-500" },
  { name: "C", level: 85, color: "bg-red-600" },
  { name: "Python", level: 88, color: "bg-gray-800" },
  { name: "React", level: 80, color: "bg-green-600" },
  { name: "BI", level: 90, color: "bg-yellow-500" },
  { name: "UI/UX Design", level: 70, color: "bg-purple-500" },
]

const projects = [
  {
    title: "Dashboard em Power BI",
    description: "Relatório completo em PowerBI",
    tech: ["Power BI", "Docker"],
    status: "Finalizado",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    title: "eVento",
    description: "TCC da Faculdade, Plataforma de Gerência de eventos",
    tech: ["Next.js", "Laravel", "MySQL"],
    status: "Em Andamento",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Jogo em Python",
    description: "Jogo simples em Python utilizando a biblioteca Tkinter",
    tech: ["Python", "UI", "TCL/TK"],
    status: "Planejado",
    gradient: "from-orange-500/20 to-red-500/20",
  },
]

const personalityTraits = [
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Empático",
    description: "Compreendo as necessidades dos usuários e crio soluções centradas no humano",
    color: "text-red-500",
    gradient: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Colaborativo",
    description: "Trabalho bem em equipe e ajudo a motivar outros desenvolvedores",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Visionário",
    description: "Vejo o potencial em projetos e ajudo a transformar ideias em realidade",
    color: "text-yellow-500",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Orientado a Objetivos",
    description: "Foco em entregar resultados que realmente fazem diferença",
    color: "text-green-500",
    gradient: "from-green-500/20 to-emerald-500/20",
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

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export function ProfilePage() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header Section */}
        <motion.div variants={itemVariants}>
          <Card className="relative overflow-hidden border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
            <motion.div
              className={`absolute -inset-2 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-blue-400/20 via-30% via-purple-400/20 via-60% via-pink-400/20 via-90%"
                  : "via-blue-400/10 via-30% via-purple-400/10 via-60% via-pink-400/10 via-90%"
              } to-transparent rounded-3xl pointer-events-none`}
              variants={glowVariants}
              whileHover="hover"
              initial="initial"
            />
            <CardContent className="p-8 relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative">
                  <motion.div
                    className="relative flex flex-col items-center"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Avatar com efeito de respiração */}
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                      <Avatar className="w-32 h-32 border-2 border-border/40 relative z-10">
                        <AvatarImage src="/foto_perfil.jpg" alt="Profile" />
                        <AvatarFallback className="text-2xl">ED</AvatarFallback>
                      </Avatar>
                    </div>
                  </motion.div>

                  {/* Stats estilo Instagram */}
                  <motion.div
                    className="flex justify-center gap-8 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {[
                      { value: "21", label: "projetos", emoji: "📁" },
                      { value: "168", label: "commits", emoji: "💻" },
                      { value: "2", label: "estrelas", emoji: "⭐" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <div className="text-lg font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>

                        {/* Emoji que aparece no hover */}
                        <motion.div
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl opacity-0 group-hover:opacity-100"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {stat.emoji}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">Eduardo Alves Carvalho</h1>
                      <p className="text-xl text-muted-foreground">Full Stack Developer</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => {
                          // Simular download do currículo
                          const link = document.createElement("a")
                          link.href = "/curriculo-eduardo-alves.pdf"
                          link.download = "Curriculo-Eduardo-Alves-Carvalho.pdf"
                          link.click()
                        }}
                      >
                        <Download className="h-4 w-4" />
                        Baixar Currículo
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground max-w-2xl">
                    Sou Eduardo Alves Carvalho, estudante de Engenharia da Computação na UNIFEI e Técnico em Informática
                    pela ETEC. Atuo como desenvolvedor full stack, com experiência em React, Node.js, PostgreSQL/PostGIS
                    e soluções com Power BI, IA e machine learning em Python.
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      São Paulo, Brasil
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Desde 2018
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      eduardo15022003@gmail.com
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href="https://github.com/Eduelvs">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com/in/eduardo-alves-edualves/">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="https://x.com/EduardinhoSbb">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="eduelvs.vercel.app">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Globe className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Skills Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Habilidades</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personality Section */}
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-foreground">ENFJ-A</span>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">Protagonista</h2>
                  <p className="text-sm text-muted-foreground">
                    "Líderes inspiradores, capazes de cativar seus ouvintes"
                  </p>
                </div>

                <div className="space-y-4">
                  {personalityTraits.map((trait, index) => (
                    <motion.div
                      key={trait.title}
                      className={`p-4 rounded-lg bg-gradient-to-r ${trait.gradient} border border-border/20`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${trait.color} mt-0.5`}>{trait.icon}</div>
                        <div>
                          <h3 className="font-medium text-foreground text-sm">{trait.title}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{trait.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-xs text-muted-foreground text-center">
                    Como ENFJ-A, trago uma perspectiva única ao desenvolvimento, focando em soluções que realmente
                    impactam as pessoas e promovem colaboração efetiva em equipes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Projetos Recentes</h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`p-4 rounded-lg bg-gradient-to-r ${project.gradient} border border-border/20 hover:border-border/40 transition-all duration-300`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-foreground">{project.title}</h3>
                          <Badge
                            variant={
                              project.status === "Finalizado"
                                ? "default"
                                : project.status === "Em Andamento"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
