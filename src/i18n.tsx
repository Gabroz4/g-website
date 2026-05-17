import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { resolveContent, type Lang, type SiteContent } from "@/content"

export type { Lang } from "@/content"

type UIStrings = {
  nav: {
    about: string
    experience: string
    education: string
    skills: string
    languages: string
    work: string
    contact: string
  }
  hero: {
    viewWork: string
    getInTouch: string
    scroll: string
    glance: string
    role: string
    focus: string
    based: string
    current: string
  }
  contact: { prompt: string }
  footer: { top: string; selfHosted: string }
  cv: string
  downloadCv: string
  language: string
  certifications: string
}

/** UI chrome strings — everything that isn't CV content. */
const ui: Record<Lang, UIStrings> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      viewWork: "View work",
      getInTouch: "Get in touch",
      scroll: "Scroll",
      glance: "at a glance",
      role: "role",
      focus: "focus",
      based: "based",
      current: "current",
    },
    contact: {
      prompt: "Have an idea, a role, or just want to say hello?",
    },
    footer: {
      top: "Top",
      selfHosted: "Self-hosted on a homelab",
    },
    cv: "Curriculum Vitæ",
    downloadCv: "Download CV",
    language: "Language",
    certifications: "Certifications",
  },
  it: {
    nav: {
      about: "Chi sono",
      experience: "Esperienza",
      education: "Formazione",
      skills: "Competenze",
      languages: "Lingue",
      work: "Progetti",
      contact: "Contatti",
    },
    hero: {
      viewWork: "Vedi i progetti",
      getInTouch: "Contattami",
      scroll: "Scorri",
      glance: "in breve",
      role: "ruolo",
      focus: "focus",
      based: "sede",
      current: "ora",
    },
    contact: {
      prompt: "Hai un'idea, una posizione aperta, o vuoi solo salutare?",
    },
    footer: {
      top: "Su",
      selfHosted: "Self-hosted su un homelab",
    },
    cv: "Curriculum Vitæ",
    downloadCv: "Scarica il CV",
    language: "Lingua",
    certifications: "Certificazioni",
  },
}

type LanguageCtx = {
  lang: Lang
  setLang: (lang: Lang) => void
  content: SiteContent
  t: UIStrings
}

const LanguageContext = createContext<LanguageCtx | null>(null)

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("lang")
    if (saved === "en" || saved === "it") return saved
  } catch {
    void 0
  }
  if (
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("it")
  ) {
    return "it"
  }
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem("lang", lang)
    } catch {
      void 0
    }
  }, [lang])

  const value = useMemo<LanguageCtx>(
    () => ({
      lang,
      setLang,
      content: resolveContent(lang),
      t: ui[lang],
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguageContext() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage hooks must be used within <LanguageProvider>")
  }
  return ctx
}

export function useLang() {
  const { lang, setLang } = useLanguageContext()
  return { lang, setLang }
}

export function useContent() {
  return useLanguageContext().content
}

export function useUI() {
  return useLanguageContext().t
}
