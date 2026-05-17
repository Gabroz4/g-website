import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageSelector } from "@/components/LanguageSelector"
import { DownloadCV } from "@/components/DownloadCV"
import { useUI } from "@/i18n"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "education", key: "education" },
  { id: "skills", key: "skills" },
  { id: "languages", key: "languages" },
  { id: "projects", key: "work" },
  { id: "contact", key: "contact" },
] as const

function Monogram({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={cn(
        "grid size-9 place-items-center rounded-xl border border-border font-mono text-sm font-semibold tracking-tight transition-colors hover:border-accent-green hover:text-accent-green",
        className,
      )}
    >
      GB
    </a>
  )
}

export function Navbar() {
  const t = useUI()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, y / max) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 print:hidden",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px">
        <div
          className="h-full bg-accent-green"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10">
        <Monogram />

        <ul className="hidden items-center gap-6 lg:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "text-accent-green"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t.nav[s.key]}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <DownloadCV variant="icon" className="max-lg:hidden" />
          <LanguageSelector />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent-green hover:text-foreground lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden">
          <div className="grain" aria-hidden="true" />
          <div className="flex h-16 items-center justify-between px-6">
            <Monogram />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent-green hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-6">
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-5 border-b border-border py-5 first:border-t"
              >
                <span className="font-mono text-xs text-accent-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl transition-colors group-hover:text-accent-green">
                  {t.nav[s.key]}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-4 px-6 py-8">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Gabriele Broccoli — {t.cv}
            </span>
            <DownloadCV onClick={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  )
}
