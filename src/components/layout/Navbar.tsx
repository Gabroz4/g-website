import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

function Monogram({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={cn(
        "grid size-9 place-items-center rounded-sm border border-border font-mono text-sm font-semibold tracking-tight transition-colors hover:border-accent-green hover:text-accent-green",
        className,
      )}
    >
      GB
    </a>
  )
}

export function Navbar() {
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
    for (const { href } of LINKS) {
      const el = document.getElementById(href.slice(1))
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
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
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

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "font-mono text-xs uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "text-accent-green"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid size-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-accent-green hover:text-foreground lg:hidden"
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
              className="grid size-9 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-accent-green hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center px-6">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-5 border-b border-border py-5 first:border-t"
              >
                <span className="font-mono text-xs text-accent-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl transition-colors group-hover:text-accent-green">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <p className="px-6 py-8 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Gabriele Broccoli — Curriculum Vitæ
          </p>
        </div>
      )}
    </header>
  )
}
