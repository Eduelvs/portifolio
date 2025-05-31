"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import {
  Code,
  Globe,
  Zap,
  Coffee,
  Heart,
  GraduationCap,
  Award,
  Calendar,
  ExternalLink,
  MapPin,
  Briefcase,
  Star,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "next-themes"

const languages = [
  {
    name: "JavaScript",
    icon: "🟨",
    description: "Linguagem versátil para web",
    level: "Avançado",
    gradient: "from-yellow-400/20 to-yellow-600/20",
    borderColor: "border-yellow-400/30",
    experience: "3+ anos",
  },
  {
    name: "React",
    icon: "⚛️",
    description: "Biblioteca para interfaces",
    level: "Avançado",
    gradient: "from-blue-400/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    experience: "2+ anos",
  },
  {
    name: "PHP",
    icon: "🐘",
    description: "Desenvolvimento backend",
    level: "Intermediário",
    gradient: "from-purple-400/20 to-indigo-500/20",
    borderColor: "border-purple-400/30",
    experience: "2+ anos",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    description: "Banco de dados relacional",
    level: "Intermediário",
    gradient: "from-orange-400/20 to-red-500/20",
    borderColor: "border-orange-400/30",
    experience: "2+ anos",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Automação e análise",
    level: "Intermediário",
    gradient: "from-green-400/20 to-blue-500/20",
    borderColor: "border-green-400/30",
    experience: "1+ ano",
  },
  {
    name: "C",
    icon: "⚙️",
    description: "Programação de sistemas",
    level: "Básico",
    gradient: "from-gray-400/20 to-gray-600/20",
    borderColor: "border-gray-400/30",
    experience: "1 ano",
  },
]

const courses = [
  {
    title: "Desenvolvimento Web Full Stack",
    institution: "Rocketseat",
    duration: "6 meses",
    year: "2023",
    description: "Curso completo de desenvolvimento web com React, Node.js e banco de dados",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-purple-500/20 to-blue-500/20",
    borderColor: "border-purple-400/30",
    icon: "🚀",
  },
  {
    title: "JavaScript Moderno (ES6+)",
    institution: "Udemy",
    duration: "40 horas",
    year: "2023",
    description: "Curso avançado de JavaScript com foco em ES6+ e programação funcional",
    skills: ["JavaScript", "ES6+", "Async/Await", "Modules"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-400/30",
    icon: "⚡",
  },
  {
    title: "React Native - Mobile Development",
    institution: "Alura",
    duration: "3 meses",
    year: "2024",
    description: "Desenvolvimento de aplicativos móveis com React Native e Expo",
    skills: ["React Native", "Expo", "Mobile UI", "APIs"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-400/30",
    icon: "📱",
  },
  {
    title: "UI/UX Design Fundamentals",
    institution: "Coursera",
    duration: "2 meses",
    year: "2024",
    description: "Princípios de design de interface e experiência do usuário",
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    certificate: "https://certificado.exemplo.com",
    status: "Concluído",
    gradient: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-400/30",
    icon: "🎨",
  },
  {
    title: "DevOps e Cloud Computing",
    institution: "AWS Training",
    duration: "4 meses",
    year: "2024",
    description: "Infraestrutura em nuvem, CI/CD e práticas DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    certificate: "https://certificado.exemplo.com",
    status: "Em Andamento",
    gradient: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-400/30",
    icon: "☁️",
  },
  {
    title: "Machine Learning com Python",
    institution: "DataCamp",
    duration: "5 meses",
    year: "2024",
    description: "Introdução ao aprendizado de máquina e análise de dados",
    skills: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    certificate: "https://certificado.exemplo.com",
    status: "Planejado",
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-400/30",
    icon: "🤖",
  },
]

const timeline = [
  {
    year: "2020",
    title: "Início da Jornada",
    description: "Primeiros passos na programação com HTML, CSS e JavaScript básico",
    icon: <Star className="h-5 w-5" />,
    color: "from-yellow-500 to-orange-500",
    achievements: ["Primeiro 'Hello World'", "Criação do primeiro site", "Descoberta da paixão por código"],
  },
  {
    year: "2021",
    title: "Aprofundamento Frontend",
    description: "Foco em React e desenvolvimento de interfaces modernas",
    icon: <Code className="h-5 w-5" />,
    color: "from-blue-500 to-cyan-500",
    achievements: ["Domínio do React", "Primeiros projetos pessoais", "Aprendizado de Git/GitHub"],
  },
  {
    year: "2022",
    title: "Expansão Backend",
    description: "Desenvolvimento full-stack com Node.js e bancos de dados",
    icon: <Briefcase className="h-5 w-5" />,
    color: "from-green-500 to-emerald-500",
    achievements: ["APIs REST", "Integração com bancos de dados", "Primeiro projeto full-stack"],
  },
  {
    year: "2023",
    title: "Profissionalização",
    description: "Entrada no mercado de trabalho e projetos comerciais",
    icon: <MapPin className="h-5 w-5" />,
    color: "from-purple-500 to-pink-500",
    achievements: ["Primeiro emprego tech", "Projetos em produção", "Trabalho em equipe"],
  },
  {
    year: "2024",
    title: "Especialização",
    description: "Foco em tecnologias avançadas e liderança técnica",
    icon: <GraduationCap className="h-5 w-5" />,
    color: "from-indigo-500 to-purple-500",
    achievements: ["Certificações AWS", "Mentoria de juniors", "Arquitetura de sistemas"],
  },
  {
    year: "2025",
    title: "Futuro",
    description: "Metas e objetivos para continuar evoluindo",
    icon: <Globe className="h-5 w-5" />,
    color: "from-teal-500 to-blue-500",
    achievements: ["Projetos internacionais", "Contribuições open source", "Palestras técnicas"],
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
  hidden: { y: 30, opacity: 0 },
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
  hidden: { scale: 0.8, opacity: 0 },
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
    scale: 1.05,
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

const getStatusColor = (status: string) => {
  switch (status) {
    case "Concluído":
      return "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30"
    case "Em Andamento":
      return "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30"
    case "Planejado":
      return "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30"
    default:
      return "bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30"
  }
}

export function HomePage() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(2) // Default to 2022

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect for sections
  const aboutY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const timelineY = useTransform(scrollYProgress, [0.1, 0.4], [50, -50])
  const coursesY = useTransform(scrollYProgress, [0.3, 0.6], [50, -50])
  const languagesY = useTransform(scrollYProgress, [0.5, 0.8], [50, -50])
  const ctaY = useTransform(scrollYProgress, [0.7, 1], [50, -20])

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-4 py-8">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <motion.div
              className={`absolute -inset-4 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-pink-400/30 via-90%"
                  : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-pink-400/20 via-90%"
              } to-transparent rounded-full pointer-events-none`}
              variants={glowVariants}
              whileHover="hover"
              initial="initial"
            />
            <Avatar className="w-32 h-32 border-4 border-border/40 relative z-10">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Minha foto" />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                EU
              </AvatarFallback>
            </Avatar>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Olá, eu sou Eduardo! <span className="inline-block animate-bounce">👋</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Desenvolvedor apaixonado por tecnologia e inovação. Transformo ideias em código e código em soluções que
            fazem a diferença.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Code className="w-4 h-4 mr-2" />
              Full Stack Developer
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Coffee className="w-4 h-4 mr-2" />
              Movido a café
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              <Heart className="w-4 h-4 mr-2" />
              Apaixonado por código
            </Badge>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Button
              size="lg"
              className="mr-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Globe className="w-4 h-4 mr-2" />
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg">
              <Zap className="w-4 h-4 mr-2" />
              Entre em Contato
            </Button>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: aboutY }}>
          <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
            <motion.div
              className={`absolute -inset-2 bg-gradient-radial from-transparent ${
                isDarkTheme
                  ? "via-green-400/20 via-30% via-blue-400/20 via-60% via-purple-400/20 via-90%"
                  : "via-green-400/10 via-30% via-blue-400/10 via-60% via-purple-400/10 via-90%"
              } to-transparent rounded-3xl pointer-events-none`}
              variants={glowVariants}
              whileHover="hover"
              initial="initial"
            />
            <CardContent className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-center mb-6 text-foreground">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                Sou um desenvolvedor em constante evolução, sempre buscando aprender novas tecnologias e aprimorar
                minhas habilidades. Tenho experiência em desenvolvimento web full-stack, desde a criação de interfaces
                intuitivas até a implementação de sistemas robustos no backend. Acredito que a tecnologia pode
                transformar vidas e estou aqui para fazer parte dessa transformação.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Timeline Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: timelineY }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Minha Jornada</h2>
            <p className="text-muted-foreground">Uma linha do tempo da minha evolução como desenvolvedor</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transform -translate-y-1/2" />

            {/* Timeline Items */}
            <div className="flex justify-between items-center relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setSelectedTimelineItem(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Timeline Point */}
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg mb-4 relative z-10 ${
                      selectedTimelineItem === index ? "ring-4 ring-white/50" : ""
                    }`}
                    animate={{
                      scale: selectedTimelineItem === index ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Year */}
                  <div className="text-sm font-bold text-foreground mb-2">{item.year}</div>

                  {/* Title (visible on hover or selection) */}
                  <motion.div
                    className="text-xs text-center text-muted-foreground max-w-20"
                    animate={{
                      opacity: selectedTimelineItem === index ? 1 : 0.7,
                    }}
                  >
                    {item.title}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Selected Item Details */}
            <motion.div
              className="mt-12"
              key={selectedTimelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${timeline[selectedTimelineItem].color} text-white mb-4`}
                    >
                      {timeline[selectedTimelineItem].icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {timeline[selectedTimelineItem].year} - {timeline[selectedTimelineItem].title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{timeline[selectedTimelineItem].description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {timeline[selectedTimelineItem].achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        <span className="text-sm text-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Education & Courses Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: coursesY }}>
          <div className="relative">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground relative z-10">
              <GraduationCap className="inline-block w-8 h-8 mr-3 mb-1" />
              Formação & Cursos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`relative overflow-hidden border ${course.borderColor} bg-gradient-to-br ${course.gradient} backdrop-blur-lg group cursor-pointer h-full`}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <CardContent className="p-6 relative z-10 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-3xl">{course.icon}</div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge className={`${getStatusColor(course.status)} border text-xs`}>{course.status}</Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {course.year}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{course.institution}</p>
                      <p className="text-xs text-muted-foreground mb-4">{course.duration}</p>

                      <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {course.certificate && course.status === "Concluído" && (
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <a href={course.certificate} target="_blank" rel="noopener noreferrer">
                              <Award className="h-4 w-4 mr-2" />
                              Ver Certificado
                              <ExternalLink className="h-3 w-3 ml-2" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Languages Section */}
        <motion.section variants={itemVariants} className="mb-16" style={{ y: languagesY }}>
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Minhas Linguagens & Tecnologias</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden border ${language.borderColor} bg-gradient-to-br ${language.gradient} backdrop-blur-lg group cursor-pointer`}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{language.icon}</div>
                      <Badge
                        variant={
                          language.level === "Avançado"
                            ? "default"
                            : language.level === "Intermediário"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {language.level}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{language.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{language.description}</p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Experiência:</span>
                      <span className="text-xs font-medium text-foreground">{language.experience}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section variants={itemVariants} className="text-center" style={{ y: ctaY }}>
          <Card className="border border-border/40 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vamos trabalhar juntos?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Estou sempre aberto a novos desafios e oportunidades. Se você tem um projeto interessante ou quer apenas
                conversar sobre tecnologia, não hesite em entrar em contato!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Vamos Conversar!
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  )
}
