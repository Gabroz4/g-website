export const profile = {
  name: "Gabriele Broccoli",
  role: "Software Engineer",
  location: "Imola, Italy",
  focus: "Infrastructure · Kubernetes · Cloud",
  tagline:
    "I build software and automate the infrastructure it runs on — then self-host most of it.",
  email: "gabriele.broccoli@protonmail.com",
}

export const about: string[] = [
  "I'm a software engineer based in Imola, Italy. I studied Computer Systems Technology and I'm drawn to the systems behind the software — server infrastructure, Kubernetes, cloud computing, and the embedded world where code meets hardware.",
  "I like working hands-on: understanding how a system actually behaves, then finding the solution that makes it run reliably without babysitting. Most of what I build, I also run — a Kubernetes homelab on recycled hardware self-hosts my photos, files and media, managed declaratively through GitOps, where a single git commit is the only way anything changes.",
  "Away from the keyboard I have plenty of other passions — sport, camping, music, motorsport, gaming, and the occasional DIY project.",
]

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "Go", "Python", "Rust"],
  },
  { category: "Platform", items: ["Kubernetes", "k3s", "Docker", "Helm"] },
  { category: "GitOps", items: ["Flux", "GitOps", "Renovate"] },
  { category: "Observability", items: ["Prometheus", "Grafana", "Loki"] },
  {
    category: "Infra & Net",
    items: ["Linux", "Traefik", "Cloudflare", "Longhorn", "cert-manager"],
  },
  { category: "Web", items: ["React", "Tailwind CSS", "Vite"] },
]

export const experience: {
  title: string
  org: string
  period: string
  description: string
}[] = [
    {
      title: "Software Developer",
      org: "Imola Informatica",
      period: "2026 — Present",
      description:
        "Developing enterprise software in Java with a consultancy rooted in the Imola tech scene.",
    },
    {
      title: "Software Developer — Intern",
      org: "Quinck",
      period: "2024 — 2025",
      description:
        "Back-end development across TypeScript, Go and Python, database design through ORMs, and embedded systems written in Rust.",
    },
    {
      title: "Quality Assurance Technician",
      org: "Agrimola",
      period: "2021 — 2022",
      description:
        "Business process analysis and workflow optimisation, with compliance against IFS Food and ISO 9001 standards — plus a spell in technical sales.",
    },
    {
      title: "Data Analyst — Intern",
      org: "Hera",
      period: "2020",
      description:
        "Cleaning and processing raw sensor data from environmental services into reports and charts.",
    },
    {
      title: "Stage Audio Technician",
      org: "Top Service",
      period: "2019 — 2020",
      description:
        "Setting up and mixing audio, light and video systems for live events.",
    },
  ]

export const education: {
  degree: string
  institution: string
  period: string
  detail: string
}[] = [
    {
      degree: "BSc — Computer Systems Technology",
      institution: "Alma Mater Studiorum — University of Bologna",
      period: "2022 — 2025",
      detail:
        "Software development, data analysis, computer systems and networking.",
    },
    {
      degree: "Linguistic High School Diploma",
      institution: "Liceo Linguistico Alessandro da Imola",
      period: "2012 — 2018",
      detail: "A language-focused secondary education, with English at its core.",
    },
  ]

export const projects: {
  title: string
  description: string
  tags: string[]
  link?: string
}[] = [
    {
      title: "k-homelab",
      description:
        "A two-node Kubernetes homelab on recycled hardware, self-hosting cloud services — photos, files, media — and managed end to end with GitOps. Every change flows through git and Flux reconciles the cluster automatically, with monitoring, encrypted backups and automated dependency updates built in.",
      tags: ["Kubernetes", "Flux", "GitOps", "Self-hosted"],
      link: "https://github.com/Gabroz4/k-homelab",
    },
    {
      title: "g-website",
      description:
        "The site you're looking at — a portfolio built with React, TypeScript and Tailwind, containerised with Docker and served from the homelab through a Cloudflare Tunnel.",
      tags: ["React", "TypeScript", "Docker"],
      link: "https://github.com/Gabroz4/g-website",
    },
  ]

export const socials: {
  label: string
  href: string
  icon: "github" | "linkedin" | "mail"
}[] = [
    { label: "GitHub", href: "https://github.com/Gabroz4", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gabriele-broccoli/",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:gabriele.broccoli@gmail.com", icon: "mail" },
  ]
