import { Github, Linkedin, Mail } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { profile, socials } from "@/content"

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export function Contact() {
  return (
    <Section id="contact" index="06" label="Contact">
      <p className="max-w-lg font-display text-2xl leading-snug md:text-3xl">
        Have an idea, a role, or just want to say hello?
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-6 inline-block font-display text-xl leading-tight text-accent-green sm:text-2xl md:text-3xl"
      >
        <span className="break-all border-b border-accent-green/40 pb-1 transition-colors group-hover:border-accent-green">
          {profile.email}
        </span>
      </a>
      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
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
                <Icon className="size-4 transition-colors group-hover:text-accent-green" />
                {social.label}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
