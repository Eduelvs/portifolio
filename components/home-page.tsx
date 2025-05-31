"use client"

import { motion } from "framer-motion"
import { Code, Globe, Zap, Coffee, Heart } from "lucide-react"
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

export function HomePage() {
  const { theme } = useTheme()
  const isDarkTheme = theme === "dark"

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
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
            Olá, eu sou Eduardo! 👋
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
        <motion.section variants={itemVariants} className="mb-16">
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

        {/* Languages Section */}
        <motion.section variants={itemVariants}>
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
        <motion.section variants={itemVariants} className="text-center mt-16">
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
