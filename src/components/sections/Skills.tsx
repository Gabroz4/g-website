import { Section } from "@/components/layout/Section"
import { useContent, useUI } from "@/i18n"

export function Skills() {
  const { skills } = useContent()
  const t = useUI()

  return (
    <Section id="skills" index="04" label={t.nav.skills}>
      <div className="space-y-7">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 break-inside-avoid sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:pt-2">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border px-3.5 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent-violet hover:text-accent-violet"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
