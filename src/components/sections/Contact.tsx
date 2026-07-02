import { Github, Linkedin, Mail } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { useContent, useUI } from "@/i18n"

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Contact() {
  const { profile, socials } = useContent()
  const t = useUI()

  return (
    <Section id="contact" index="07" label={t.nav.contact}>
      <p className="max-w-lg font-display text-2xl leading-snug md:text-3xl print:text-xl">
        {t.contact.prompt}
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-6 inline-block font-display text-xl leading-tight sm:text-2xl md:text-3xl print:text-lg"
      >
        <span className="psy-text border-b border-accent-violet/40 pb-1 transition-colors group-hover:border-accent-violet">
          {profile.email.split("@")[0]}
          <wbr />@{profile.email.split("@")[1]}
        </span>
      </a>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 print:mt-6">
        {socials.map((social) => {
          const Icon = ICONS[social.icon]
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4 transition-colors group-hover:text-accent-violet" />
                {social.label}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
