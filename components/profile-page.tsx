const timeline = [
  {
    period: "2026",
    title: "Engenheiro de Software Front-end Pleno",
    detail: "Promoção na Teddy Open Finance.",
  },
  {
    period: "2025",
    title: "Teddy Open Finance",
    detail: "Entrada como front-end, em produtos de crédito consignado no Consig360.",
  },
  {
    period: "2025",
    title: "Certificações",
    detail: "Junior Cybersecurity Analyst (Cisco) e NLW Agents Avançado (Rocketseat).",
  },
  {
    period: "2021 — atual",
    title: "Engenharia da Computação",
    detail: "UNIFEI.",
  },
  {
    period: "2018 — 2020",
    title: "Técnico em Informática",
    detail: "ETEC.",
  },
]

const practices = [
  {
    title: "Interfaces de produto",
    detail: "Telas, fluxos e componentes em React, Next.js e Angular, com TypeScript.",
  },
  {
    title: "Design System",
    detail: "Componentes reutilizáveis e alinhamento fino com o Figma.",
  },
  {
    title: "Qualidade e performance",
    detail: "Acessibilidade, HTML semântico, performance e manutenção de código.",
  },
  {
    title: "Dados de produto",
    detail: "Tracking e Microsoft Clarity para entender o comportamento do usuário e apoiar decisões de Design.",
  },
]

const stacks = [
  {
    label: "Principal",
    items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS"],
  },
  {
    label: "Também uso",
    items: ["Node.js", "NestJS", "PostgreSQL", "Git", "CI/CD"],
  },
  {
    label: "Produto e Design",
    items: ["Figma", "Design System", "Microsoft Clarity", "Acessibilidade"],
  },
]

export function ProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-foreground">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
        Sobre mim
      </p>
      <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl">Eduardo Alves Carvalho</h1>

      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          Sou Engenheiro de Software Front-end com base em Engenharia da Computação. Hoje trabalho na Teddy Open
          Finance, desenvolvendo produtos de crédito consignado, com foco em arquitetura de aplicações, performance,
          acessibilidade e experiência do usuário.
        </p>
        <p>
          O que mais gosto no front-end é ficar no meio do caminho entre Produto, Design e Engenharia: participar da
          discussão desde o problema, propor alternativas técnicas e construir a solução junto com o time, em vez de
          só receber uma task e implementar.
        </p>
      </div>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">O que eu faço</h2>
        <ul className="space-y-5">
          {practices.map((item) => (
            <li key={item.title}>
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="mt-1 text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Linha do tempo</h2>
        <ol className="border-l border-white/15">
          {timeline.map((item) => (
            <li key={`${item.period}-${item.title}`} className="relative pb-8 pl-6 last:pb-0">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <p className="mt-1 font-medium text-foreground">{item.title}</p>
              <p className="mt-1 text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-semibold">Stack</h2>
        <div className="space-y-6">
          {stacks.map((group) => (
            <div key={group.label}>
              <p className="mb-3 text-sm text-muted-foreground">{group.label}</p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-16 text-muted-foreground">
        Também já trabalhei com back-end em Node.js e PHP, dashboards em Power BI e projetos de machine learning em
        Python.
      </p>

      <blockquote className="mt-12 border-l border-white/15 pl-6 text-xl leading-snug text-foreground">
        “O Edu tem essência de dono.”
        <footer className="mt-3 text-sm text-muted-foreground">Josue Carvalho</footer>
      </blockquote>
    </div>
  )
}
