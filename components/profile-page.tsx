"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  Calendar,
  Download,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Target,
  Twitter,
  Users,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

const GITHUB_USERNAME = "Eduelvs"

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
    title: "Dashboard de Serviços",
    description: "Dashboard de Serviços, utilizando React e Node.js",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Desenvolvimento",
    gradient: "from-orange-500/20 to-red-500/20",
    url: "https://dashboard-services-iota.vercel.app",
  },
  {
    title: "eVento",
    description: "TCC da Faculdade, Plataforma de Gerência de eventos",
    tech: ["Next.js", "Laravel", "MySQL"],
    status: "Finalizado",
    gradient: "from-blue-500/20 to-purple-500/20",
    url: "https://evento.up.railway.app",
  },
  {
    title: "Saas ChatBot",
    description: "Saas de ChatBot para empresas",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Desenvolvimento",
    gradient: "from-orange-500/20 to-red-500/20",
    url: "https://saas-chatbot-pi.vercel.app",
  },
  {
    title: "Portifolio Larissa Tofanello",
    description: "Portifolio da Larissa Tofanello, utilizando Next.js",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Finalizado",
    gradient: "from-green-500/20 to-blue-500/20",
    url: "https://v0-larissatofanello.vercel.app",
  },
  {
    title: "Brasildle",
    description: "Jogo de adivinhação de estados brasileiros, utilizando React e Vite",
    tech: ["React", "Vite", "Tailwind CSS"],
    status: "Finalizado",
    gradient: "from-green-500/20 to-blue-500/20",
    url: "https://brasildle.vercel.app",
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
  const [selectedProject, setSelectedProject] = useState(projects[0]?.title ?? "")

  const [githubStats, setGithubStats] = useState({
    projects: 0,
    commits: 0,
    followers: 0,
    loading: true,
  })

  useEffect(() => {
    let cancelled = false
    const headers: HeadersInit = { Accept: "application/vnd.github.v3+json" }

    async function fetchGitHubStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers })
        if (cancelled) return
        if (!userRes.ok) throw new Error("GitHub API error")

        const user = await userRes.json()
        const publicRepos = user.public_repos ?? 0
        const followers = user.followers ?? 0

        let commits = 0
        try {
          const commitsRes = await fetch(
            `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
            { headers: { ...headers, Accept: "application/vnd.github.cloak-preview+json" } }
          )
          if (commitsRes.ok) {
            const data = await commitsRes.json()
            commits = data.total_count ?? 0
          }
        } catch {
          // Search/commits pode falhar por rate limit ou auth; mantém 0
        }

        if (!cancelled) {
          setGithubStats({ projects: publicRepos, commits, followers, loading: false })
        }
      } catch {
        if (!cancelled) {
          setGithubStats((prev) => ({ ...prev, loading: false }))
        }
      }
    }
    fetchGitHubStats()
    return () => { cancelled = true }
  }, [])

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
                      { value: githubStats.loading ? "—" : String(githubStats.projects), label: "projetos", emoji: "📁" },
                      { value: githubStats.loading ? "—" : String(githubStats.commits), label: "commits", emoji: "💻" },
                      { value: githubStats.loading ? "—" : String(githubStats.followers), label: "seguidores", emoji: "👥" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <div className="text-lg font-bold text-foreground tabular-nums">{stat.value}</div>
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

          {/* Preview dos Projetos */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="p-5 pb-0">
                  <h2 className="text-xl font-semibold mb-1 text-foreground">Preview dos Projetos</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Selecione um projeto para visualizar
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects.map((project) => {
                      const isSelected = selectedProject === project.title
                      return (
                        <motion.button
                          key={project.title}
                          type="button"
                          onClick={() => setSelectedProject(project.title)}
                          className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                            isSelected
                              ? `bg-gradient-to-r ${project.gradient} border-border/60 shadow-md text-foreground`
                              : "bg-muted/50 border-border/30 text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {project.title}
                        </motion.button>
                      )
                    })}
                  </div>
                  {(() => {
                    const current = projects.find((p) => p.title === selectedProject)
                    if (!current) return null
                    return (
                      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                        <p className="text-muted-foreground">{current.description}</p>
                        <a
                          href={current.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Abrir em nova aba
                        </a>
                      </div>
                    )
                  })()}
                </div>
                <div className="relative mt-4 mx-4 mb-4 rounded-xl overflow-hidden border border-border/40 bg-muted/20 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/20 pointer-events-none z-10 rounded-xl" />
                  <div className="w-full h-[480px] min-h-[320px] overflow-hidden rounded-xl" style={{ position: "relative" }}>
                    <iframe
                      key={selectedProject}
                      src={projects.find((p) => p.title === selectedProject)?.url ?? ""}
                      className="rounded-xl origin-top-left"
                      title={selectedProject}
                      style={{
                        width: `${100 / 0.3}%`,
                        height: `${480 / 0.3}px`,
                        minHeight: `${320 / 0.3}px`,
                        transform: `scale(${0.3})`,
                        transformOrigin: "top left",
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
