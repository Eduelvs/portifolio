"use client"

import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials"
import { cn } from "@/lib/utils"

type Testimonial = {
  quote: string
  name: string
  role: string
  relation?: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "O título de pleno nunca fez jus ao tamanho da entrega dele. O Edu tem essência de dono. Tem uma vontade genuína de fazer o negócio girar e faz questão de dominar o produto a fundo.",
    name: "Josue Carvalho",
    role: "Engenheiro de Software Backend",
    relation: "Trabalhamos no mesmo time",
  },
  {
    quote:
      "Quando eu criava algo mais complexo, ele buscava entender a intenção e encontrar uma forma de levar aquilo para o código. […] Além de um excelente desenvolvedor, o Edu é curioso, colaborativo e uma das melhores parcerias que tive no trabalho.",
    name: "Marina Paiolla Forastiere",
    role: "Product Designer Pleno",
    relation: "Parceria entre Design e Desenvolvimento",
  },
  {
    quote:
      "O Edu é um daqueles profissionais de Engenharia que fazem a parceria com Produto e Design acontecer de verdade. […] O Eduardo consegue equilibrar muito bem visão de produto e viabilidade técnica, ajudando o time a tomar decisões melhores e transformar problemas complexos em soluções concretas.",
    name: "Laura Neves",
    role: "Product Designer",
    relation: "Trabalhamos juntos no Consig360",
  },
  {
    quote:
      "Posso dizer que ele é um profissional extremamente competente tecnicamente. Além do conhecimento técnico, é uma pessoa muito atenta aos detalhes, proativa e sempre disposta a contribuir com o time.",
    name: "Wallace Leonardo",
    role: "Mid-Level Software Engineer",
    relation: "Trabalhamos no mesmo time",
  },
  {
    quote:
      "Diante de tarefas complexas, o companheirismo e a proatividade dele fizeram toda a diferença. […] Com um domínio sólido de React e Angular e uma postura extremamente educada e colaborativa, o Eduardo é o tipo de profissional que eleva o nível de qualquer time.",
    name: "Kennedy Cordeiro",
    role: "Mid Level Developer · Front-end",
    relation: "Trabalhamos no mesmo time",
  },
]

function portrait(name: string) {
  const letters = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="240" height="240" fill="#1c1c1c"/><text x="120" y="132" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="72" font-weight="600" fill="#fafafa">${letters}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function TestimonialsSection({
  items = TESTIMONIALS,
  className,
}: {
  items?: Testimonial[]
  className?: string
}) {
  if (!items.length) return null

  const reel = items.map((item) => ({
    quote: item.quote,
    author: `${item.name} · ${item.role}`,
    image: portrait(item.name),
    alt: item.name,
  }))

  return (
    <section
      id="recomendacoes"
      aria-labelledby="recomendacoes-title"
      className={cn("relative py-24 sm:py-32", className)}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Recomendações
          </p>
          <h2
            id="recomendacoes-title"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            O que dizem sobre mim
          </h2>
        </div>

        <ScrollReelTestimonials testimonials={reel} className="bg-background/60" />

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Recomendações originais no{" "}
          <a
            href="https://linkedin.com/in/eduardo-alves-edualves/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/60"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  )
}

export default TestimonialsSection
