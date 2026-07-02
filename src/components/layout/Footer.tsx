import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { useContent, useUI } from "@/i18n"

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Footer() {
  const { profile, socials } = useContent()
  const t = useUI()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border print:hidden">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-6 py-9 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center rounded-lg border border-border font-mono text-xs font-semibold tracking-tight">
              <span>
                <span className="text-accent-violet">/</span>gb
              </span>
            </span>
            <p className="font-mono text-xs text-muted-foreground">
              © {year} {profile.name}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socials.map((social) => {
              const Icon = ICONS[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-lg border border-transparent text-muted-foreground transition-colors hover:border-border hover:text-accent-violet"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
            <a
              href="#top"
              className="group ml-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.footer.top}
              <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-2">
            <span className="relative grid size-1.5 place-items-center">
              <span className="ping-soft absolute size-1.5 rounded-full bg-accent-violet" />
              <span className="size-1.5 rounded-full bg-accent-violet" />
            </span>
            {t.footer.selfHosted}
          </span>
          <span>React · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
