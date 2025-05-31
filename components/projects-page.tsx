"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Grid3X3, List, ExternalLink, Github, Calendar, Tag } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

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
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com painel administrativo",
    longDescription:
      "Sistema completo de e-commerce desenvolvido com React e Node.js, incluindo carrinho de compras, sistema de pagamento, painel administrativo para gerenciamento de produtos, pedidos e usuários. Implementa autenticação JWT, integração com APIs de pagamento e dashboard com métricas em tempo real.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Web Development",
    status: "Concluído",
    date: "2024-01",
    githubUrl: "https://github.com/usuario/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
    gradient: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-400/30",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo colaborativo de gerenciamento de tarefas",
    longDescription:
      "Aplicação web para gerenciamento de tarefas em equipe com funcionalidades de colaboração em tempo real. Inclui sistema de notificações, drag-and-drop para organização de tarefas, comentários, anexos e relatórios de produtividade. Desenvolvido com Next.js e Socket.io para atualizações em tempo real.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma", "Tailwind"],
    category: "Productivity",
    status: "Em Desenvolvimento",
    date: "2024-02",
    githubUrl: "https://github.com/usuario/task-manager",
    gradient: "from-green-500/20 to-blue-500/20",
    borderColor: "border-green-400/30",
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "Interface moderna para chat com inteligência artificial",
    longDescription:
      "Interface de chat intuitiva e moderna para interação com modelos de IA. Suporta múltiplas conversas, histórico persistente, formatação de código, upload de arquivos e integração com diferentes provedores de IA. Desenvolvido com foco na experiência do usuário e performance.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "OpenAI API", "Tailwind", "Framer Motion"],
    category: "AI/ML",
    status: "Concluído",
    date: "2024-03",
    githubUrl: "https://github.com/usuario/ai-chat",
    liveUrl: "https://ai-chat-demo.com",
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-400/30",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Site pessoal com design moderno e animações",
    longDescription:
      "Website pessoal desenvolvido com Next.js e Framer Motion, apresentando projetos, habilidades e experiências profissionais. Inclui sistema de temas (claro/escuro), animações suaves, design responsivo e otimização para SEO. Integrado com CMS headless para fácil atualização de conteúdo.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "MDX"],
    category: "Portfolio",
    status: "Concluído",
    date: "2024-04",
    githubUrl: "https://github.com/usuario/portfolio",
    liveUrl: "https://meuportfolio.com",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/30",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico com previsões detalhadas",
    longDescription:
      "Dashboard completo para visualização de dados meteorológicos com previsões de 7 dias, mapas interativos, alertas climáticos e histórico de dados. Integra múltiplas APIs meteorológicas e apresenta os dados através de gráficos e visualizações interativas.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Chart.js", "Weather API", "Leaflet"],
    category: "Data Visualization",
    status: "Planejado",
    date: "2024-05",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-400/30",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "Aplicativo para controle de gastos pessoais",
    longDescription:
      "Aplicação para controle financeiro pessoal com categorização automática de gastos, relatórios detalhados, metas de economia e sincronização entre dispositivos. Inclui gráficos interativos, exportação de dados e notificações inteligentes para ajudar no controle financeiro.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Firebase", "Chart.js", "AsyncStorage"],
    category: "Mobile App",
    status: "Em Desenvolvimento",
    date: "2024-06",
    githubUrl: "https://github.com/usuario/expense-tracker",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-400/30",
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
