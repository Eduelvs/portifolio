"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, ExternalLink, Github, Grid3X3, List, Tag } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  status: "Concluído" | "Em Desenvolvimento" | "Planejado"
  date: string
  githubUrl?: string
  liveUrl?: string
  gradient: string
  borderColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hora de Aventura",
    description: "Aplicação Completa",
    longDescription:
      "Modelagem de Classes, Banco de Dados, Telas e Funcionalidades, Utilizando Java com a biblioteca Java Swing",
    image: "/hora_aventura.png",
    technologies: ["Java", "Database", "Java Swing"],
    category: "Aplicação em Java",
    status: "Concluído",
    date: "2023-01",
    githubUrl: "https://github.com/Eduelvs/Projeto-com-Java-Swing",
    gradient: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-400/30",
  },
  {
    id: 2,
    title: "BLE.h",
    description: "Compilador",
    longDescription:
      "Desenvolvimento de uma linguagem BLE.h, compilada e convertida em python, 100% Funcional",
    image: "/preg.png",
    technologies: ["Python", "BLE.h", "Compilador"],
    category: "Compilador",
    status: "Concluído",
    date: "2024-02",
    githubUrl: "https://github.com/Eduelvs/Desenvolvimento-de-um-Compilador",
    gradient: "from-green-500/20 to-blue-500/20",
    borderColor: "border-green-400/30",
  },
  {
    id: 3,
    title: "eVento",
    description: "TCC da Faculdade, Plataforma de Gerência de eventos",
    longDescription: "Plataforma de Gerência de eventos, utilizando Laravel e MySQL",
    image: "/evento.png",
    technologies: ["Next.js", "Laravel", "MySQL", "IBM Quantum"],
    category: "TCC",
    status: "Concluído",
    date: "2025-12",
    liveUrl: "https://evento.up.railway.app",
    gradient: "from-red-500/20 to-purple-500/20",
    borderColor: "border-red-400/30",
  },
  {
    id: 4,
    title: "Saas ChatBot",
    description: "Saas de ChatBot para empresas",
    longDescription: "Saas de ChatBot para empresas, utilizando React e Node.js",
    image: "/saas.png",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "Saas",
    status: "Em Desenvolvimento",
    date: "2026-06",
    liveUrl: "https://saas-chatbot-pi.vercel.app",
    gradient: "from-teal-500/20 to-yellow-500/20",
    borderColor: "border-green-400/30",
  },
  {
    id: 5,
    title: "Dashboard Services",
    description: "Dashboard de Serviços",
    longDescription: "Dashboard de Serviços, utilizando React e Node.js",
    image: "/dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "Dashboard",
    status: "Em Desenvolvimento",
    date: "2026-03",
    liveUrl: "https://dashboard-services-iota.vercel.app",
    gradient: "from-indigo-500/20 to-sky-500/20",
    borderColor: "border-indigo-400/30",
  },
  {
    id: 6,
    title: "Portifolio Larissa Tofanello",
    description: "Portifolio da Larissa Tofanello, utilizando Next.js",
    longDescription: "Portifolio da Larissa Tofanello, utilizando Next.js",
    image: "/portifolio-larissa.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Portifolio",
    status: "Concluído",
    date: "2026-03",
    liveUrl: "https://v0-larissatofanello.vercel.app",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-400/30",
  },
  {
    id: 7,
    title: "Brasildle",
    description: "Jogo de adivinhação de estados brasileiros, utilizando React e Vite",
    longDescription: "Jogo de adivinhação de estados brasileiros, utilizando React e Vite",
    image: "/brasildle.png",
    technologies: ["React", "Vite", "Tailwind CSS"],
    category: "Jogo",
    status: "Concluído",
    date: "2026-03",
    liveUrl: "https://brasildle.vercel.app",
    gradient: "from-green-500/20 to-blue-500/20",
    borderColor: "border-green-400/30",
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

export function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30"
      case "Em Desenvolvimento":
        return "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30"
      case "Planejado":
        return "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30"
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Meus Projetos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes, desde aplicações web até projetos de inteligência artificial.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "Todos" : category}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="p-2"
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="p-2"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
              className={viewMode === "list" ? "w-full" : ""}
            >
              <Card
                className={`relative overflow-hidden border ${project.borderColor} bg-gradient-to-br ${project.gradient} backdrop-blur-lg group cursor-pointer h-full ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Project Image */}
                <div className={`relative ${viewMode === "list" ? "md:w-1/3" : "w-full"}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full object-cover ${viewMode === "list" ? "h-48 md:h-full" : "h-48"}`}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={`${getStatusColor(project.status)} border`}>{project.status}</Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-6 relative z-10 flex flex-col ${viewMode === "list" ? "md:w-2/3" : "flex-1"}`}>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {new Date(project.date).toLocaleDateString("pt-BR", { month: "short", year: "numeric" })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex-1">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {viewMode === "list" ? project.longDescription : project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver Projeto
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div variants={itemVariants} className="text-center py-12">
            <p className="text-xl text-muted-foreground">Nenhum projeto encontrado para esta categoria.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
