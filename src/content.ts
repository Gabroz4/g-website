export type Lang = "en" | "it"

type L = Record<Lang, string>

const profile = {
  name: "Gabriele Broccoli",
  email: "gabriele.broccoli@protonmail.com",
  role: "Software Engineer",
  location: { en: "Imola, Italy", it: "Imola, Italia" },
  focus: {
    en: "Infrastructure · Kubernetes · Cloud",
    it: "Infrastrutture · Kubernetes · Cloud",
  },
  tagline: {
    en: "I build software and automate the infrastructure it runs on — then self-host most of it.",
    it: "Sviluppo software e automatizzo l'infrastruttura su cui gira — e gran parte me la self-hosto.",
  },
}

const about: Record<Lang, string[]> = {
  en: [
    "I'm a software engineer based in Imola, Italy. I studied Computer Systems Technology and I'm drawn to the systems behind the software — server infrastructure, Kubernetes, cloud computing, and the embedded world where code meets hardware.",
    "I like working hands-on: understanding how a system actually behaves, then finding the solution that makes it run reliably without babysitting. Most of what I build, I also run — a Kubernetes homelab on recycled hardware self-hosts my photos, files and media, managed declaratively through GitOps, where a single git commit is the only way anything changes.",
    "Away from the keyboard I have plenty of other passions — sport, camping, music, motorsport, gaming, and the occasional DIY project.",
  ],
  it: [
    "Sono un software engineer di Imola. Ho studiato Tecnologie dei Sistemi Informatici e mi appassionano i sistemi dietro al software — infrastrutture server, Kubernetes, cloud computing e il mondo embedded, dove il codice incontra l'hardware.",
    "Mi piace lavorare in modo pratico: capire come si comporta davvero un sistema e trovare la soluzione che lo fa girare in modo affidabile, senza doverlo sorvegliare. Gran parte di ciò che costruisco lo gestisco anch'io — un homelab Kubernetes su hardware recuperato ospita le mie foto, i file e i media, gestito in modo dichiarativo con GitOps, dove un singolo commit git è l'unico modo per cambiare qualcosa.",
    "Lontano dalla tastiera ho parecchie altre passioni — sport, campeggio, musica, motorsport, gaming e qualche progetto fai-da-te.",
  ],
}

const skills: { category: L; items: string[] }[] = [
  {
    category: { en: "Languages", it: "Linguaggi" },
    items: ["Java", "TypeScript", "Go", "Python", "Rust", "C++", "C#", "Kotlin"],
  },
  {
    category: { en: "Platform", it: "Piattaforma" },
    items: ["Kubernetes", "k3s", "Docker", "Helm"],
  },
  {
    category: { en: "Automation", it: "Automazione" },
    items: ["Flux", "GitOps", "Renovate", "Ansible"],
  },
  {
    category: { en: "Observability", it: "Osservabilità" },
    items: ["Prometheus", "Grafana", "Loki"],
  },
  {
    category: { en: "Infra & Net", it: "Infra & Rete" },
    items: ["Linux", "Traefik", "Cloudflare", "Longhorn", "cert-manager"],
  },
  {
    category: { en: "Web", it: "Web" },
    items: ["React", "Tailwind CSS", "Vite"],
  },
]

const experience: { title: L; org: string; period: L; description: L }[] = [
  {
    title: { en: "Software Developer", it: "Software Developer" },
    org: "Imola Informatica",
    period: { en: "2026 — Present", it: "2026 — Oggi" },
    description: {
      en: "Developing enterprise software in Java with a consultancy rooted in the Imola tech scene.",
      it: "Sviluppo di software aziendale in Java in una società di consulenza radicata nella scena tech di Imola.",
    },
  },
  {
    title: {
      en: "Software Developer — Intern",
      it: "Software Developer — Stage",
    },
    org: "Quinck",
    period: { en: "2024 — 2025", it: "2024 — 2025" },
    description: {
      en: "Back-end development across TypeScript, Go and Python, database design through ORMs, and embedded systems written in Rust.",
      it: "Sviluppo back-end tra TypeScript, Go e Python, progettazione di database tramite ORM e sistemi embedded scritti in Rust.",
    },
  },
  {
    title: {
      en: "Quality Assurance Technician",
      it: "Tecnico assicurazione qualità",
    },
    org: "Agrimola",
    period: { en: "2021 — 2022", it: "2021 — 2022" },
    description: {
      en: "Business process analysis and workflow optimisation, with compliance against IFS Food and ISO 9001 standards — plus a spell in technical sales.",
      it: "Analisi dei processi aziendali e ottimizzazione dei workflow, con conformità agli standard IFS Food e ISO 9001 — più un periodo nelle vendite tecniche.",
    },
  },
  {
    title: { en: "Data Analyst — Intern", it: "Analista dati — Stage" },
    org: "Hera",
    period: { en: "2020", it: "2020" },
    description: {
      en: "Cleaning and processing raw sensor data from environmental services into reports and charts.",
      it: "Pulizia ed elaborazione dei dati grezzi dei sensori dei servizi ambientali, trasformati in report e grafici.",
    },
  },
  {
    title: {
      en: "Stage Audio Technician",
      it: "Tecnico audio di palco",
    },
    org: "Top Service",
    period: { en: "2019 — 2020", it: "2019 — 2020" },
    description: {
      en: "Setting up and mixing audio, light and video systems for live events.",
      it: "Installazione e mixaggio di impianti audio, luci e video per eventi dal vivo.",
    },
  },
]

const education: { degree: L; institution: string; period: string; detail: L }[] =
  [
    {
      degree: {
        en: "BSc — Computer Engineering",
        it: "Laurea triennale — Tecnologie dei Sistemi Informatici",
      },
      institution: "Alma Mater Studiorum — University of Bologna",
      period: "2022 — 2025",
      detail: {
        en: "Software development, data analysis, computer systems and networking.",
        it: "Sviluppo software, analisi dei dati, sistemi informatici e reti.",
      },
    },
    {
      degree: {
        en: "Linguistic High School Diploma",
        it: "Diploma di Liceo Linguistico",
      },
      institution: "Liceo Linguistico Alessandro da Imola",
      period: "2012 — 2018",
      detail: {
        en: "A language-focused secondary education, with English at its core.",
        it: "Un percorso di scuola superiore incentrato sulle lingue, con l'inglese al centro.",
      },
    },
  ]

const languages: { name: L; level: L }[] = [
  {
    name: { en: "Italian", it: "Italiano" },
    level: { en: "Native", it: "Madrelingua" },
  },
  {
    name: { en: "English", it: "Inglese" },
    level: {
      en: "Full professional · IELTS Band 8",
      it: "Professionale completa · IELTS Band 8",
    },
  },
  {
    name: { en: "French", it: "Francese" },
    level: { en: "Basic", it: "Base" },
  },
  {
    name: { en: "German", it: "Tedesco" },
    level: { en: "Basic", it: "Base" },
  },
]

const certifications: { name: L; detail: L }[] = [
  {
    name: { en: "IELTS — English, Band 8", it: "IELTS — Inglese, Band 8" },
    detail: { en: "2018", it: "2018" },
  },
  {
    name: { en: "CSQA Junior Auditor", it: "CSQA Junior Auditor" },
    detail: {
      en: "IFS Food, IFS Broker, ISO 9001, ISO 17021:2015, ISO 19011:2018",
      it: "IFS Food, IFS Broker, ISO 9001, ISO 17021:2015, ISO 19011:2018",
    },
  },
  {
    name: {
      en: "Perito Industriale Laureato",
      it: "Perito Industriale Laureato",
    },
    detail: {
      en: "Italian professional title",
      it: "Titolo professionale",
    },
  },
]

const projects: {
  title: string
  description: L
  tags: string[]
  link?: string
}[] = [
  {
    title: "k-homelab",
    description: {
      en: "A two-node Kubernetes homelab on recycled hardware, self-hosting cloud services — photos, files, media — and managed end to end with GitOps. Every change flows through git and Flux reconciles the cluster automatically, with monitoring, encrypted backups and automated dependency updates built in.",
      it: "Un homelab Kubernetes a due nodi su hardware recuperato, che self-hosta servizi cloud — foto, file, media — gestito end-to-end con GitOps. Ogni modifica passa da git e Flux riconcilia il cluster automaticamente, con monitoraggio, backup cifrati e aggiornamento automatico delle dipendenze.",
    },
    tags: ["Kubernetes", "Flux", "GitOps", "Self-hosted"],
    link: "https://github.com/Gabroz4/k-homelab",
  },
  {
    title: "g-website",
    description: {
      en: "The site you're looking at — a portfolio built with React, TypeScript and Tailwind, containerised with Docker and served from the homelab through a Cloudflare Tunnel.",
      it: "Il sito che stai guardando — un portfolio costruito con React, TypeScript e Tailwind, containerizzato con Docker e servito dall'homelab tramite un Cloudflare Tunnel.",
    },
    tags: ["React", "TypeScript", "Docker"],
    link: "https://github.com/Gabroz4/g-website",
  },
]

const socials: {
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
  {
    label: "Email",
    href: "mailto:gabriele.broccoli@protonmail.com",
    icon: "mail",
  },
]

/** Flatten the bilingual data into plain strings for the given language. */
export function resolveContent(lang: Lang) {
  return {
    profile: {
      name: profile.name,
      email: profile.email,
      role: profile.role,
      location: profile.location[lang],
      focus: profile.focus[lang],
      tagline: profile.tagline[lang],
    },
    about: about[lang],
    skills: skills.map((s) => ({ category: s.category[lang], items: s.items })),
    experience: experience.map((e) => ({
      title: e.title[lang],
      org: e.org,
      period: e.period[lang],
      description: e.description[lang],
    })),
    education: education.map((e) => ({
      degree: e.degree[lang],
      institution: e.institution,
      period: e.period,
      detail: e.detail[lang],
    })),
    languages: languages.map((l) => ({
      name: l.name[lang],
      level: l.level[lang],
    })),
    certifications: certifications.map((c) => ({
      name: c.name[lang],
      detail: c.detail[lang],
    })),
    projects: projects.map((p) => ({
      title: p.title,
      description: p.description[lang],
      tags: p.tags,
      link: p.link,
    })),
    socials,
  }
}

export type SiteContent = ReturnType<typeof resolveContent>
