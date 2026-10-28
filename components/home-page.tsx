"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero"
import { TestimonialsSection } from "@/components/testimonials-section"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Download, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const whatsappUrl =
  "https://wa.me/5512988864279?text=" +
  encodeURIComponent("Olá! Vim do seu portfólio e gostaria de conversar.")

const projects = [
  {
    src: "/password.png",
    alt: "Password Manager",
  },
  {
    src: "/brasildle.png",
    alt: "Brasildle",
  },
  {
    src: "/portifolio-larissa.png",
    alt: "Portfólio Larissa Tofanello",
  },
  {
    src: "/evento.png",
    alt: "eVento",
  },
  {
    src: "/saas.png",
    alt: "Saas ChatBot",
  },
  {
    src: "/dashboard.png",
    alt: "Dashboard Services",
  },
]

export function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const projectsBandRef = useRef<HTMLDivElement>(null)
  const projectsCopyRef = useRef<HTMLDivElement>(null)

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/curriculo-eduardo-alves.pdf"
    link.download = "Curriculo-Eduardo-Alves-Carvalho.pdf"
    link.click()
  }

  useEffect(() => {
    if (!projectsRef.current) return

    const ctx = gsap.context(() => {
      const trigger = projectsRef.current
      const timeline = gsap.timeline({ paused: true })

      timeline.fromTo(
        projectsBandRef.current,
        { y: "14vh" },
        { y: "0vh", ease: "power1.out", duration: 1 },
        0,
      )
      timeline.fromTo(
        projectsCopyRef.current,
        { y: 64, opacity: 0 },
        { y: 0, opacity: 1, ease: "power3.out", duration: 1 },
        0,
      )
      timeline.to(
        projectsCopyRef.current,
        { y: -80, opacity: 0, ease: "power2.in", duration: 1 },
        2.4,
      )
      timeline.to(
        projectsBandRef.current,
        { y: "-14vh", ease: "power2.in", duration: 1 },
        2.4,
      )

      ScrollTrigger.create({
        animation: timeline,
        trigger,
        start: "top 45%",
        end: "bottom bottom",
        scrub: 1,
      })
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className="relative z-20 min-h-screen rounded-b-3xl bg-background/35 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-8 text-center">
          <div className="relative mb-4">
            <div className="absolute -inset-4 rounded-full bg-gradient-radial from-transparent via-blue-400/30 via-30% via-purple-400/30 via-60% via-pink-400/30 via-90% to-transparent" />
            <Avatar className="relative z-10 h-24 w-24 border-4 border-border/40">
              <AvatarImage src="/foto_perfil.jpg" alt="Eduardo Alves Carvalho" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-2xl text-white">
                EA
              </AvatarFallback>
            </Avatar>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Software Engineer · Front-end
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Eduardo Alves Carvalho
          </h1>

          <p className="mb-5 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Engenheiro de Software Front-end, com experiência como Pleno em produtos de crédito para fintech usando React, Next.js e TypeScript. Gosto de trabalhar perto de Produto e Design, cuidar de cada detalhe da interface e transformar problemas complexos em experiências simples. Hoje estou em busca de uma nova oportunidade como Front-end Pleno.
          </p>

          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <Badge variant="secondary" className="px-4 py-2">
              <Code className="mr-2 h-4 w-4" />
              React · Next.js · TypeScript
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <MapPin className="mr-2 h-4 w-4" />
              São Paulo, Brasil
            </Badge>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Vamos conversar
              </a>
            </Button>
            <Button size="lg" variant="ghost" onClick={downloadResume}>
              <Download className="mr-2 h-4 w-4" />
              Currículo
            </Button>
          </div>
        </div>
      </section>

      <div
        id="projetos"
        ref={projectsRef}
        className="relative h-[450vh] w-full"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <section className="fixed bottom-0 left-0 flex h-screen w-full flex-col overflow-hidden rounded-b-3xl bg-background/35 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
          <div
            ref={projectsCopyRef}
            className="pointer-events-none z-10 flex shrink-0 flex-col items-center px-6 pb-20 pt-12 text-center md:pb-28 md:pt-16"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
              Trabalhos
            </p>
            <h2 className="text-4xl font-bold text-foreground md:text-6xl">
              Projetos
            </h2>
          </div>
          <div ref={projectsBandRef} className="relative min-h-0 w-full flex-1 [transform-style:preserve-3d]">
            <TiltedGridHero images={projects} axis={46} className="h-full w-full" />
          </div>
        </section>
      </div>

      <TestimonialsSection className="relative z-20 rounded-b-3xl bg-background/35 px-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]" />

      <CinematicFooter />
    </>
  )
}
