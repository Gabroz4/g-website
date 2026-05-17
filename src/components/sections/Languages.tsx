import { Section } from "@/components/layout/Section"
import { useContent, useUI } from "@/i18n"

export function Languages() {
  const { languages } = useContent()
  const t = useUI()

  return (
    <Section id="languages" index="05" label={t.nav.languages}>
      <ul className="divide-y divide-border/60">
        {languages.map((l) => (
          <li
            key={l.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 break-inside-avoid py-3.5 first:pt-0"
          >
            <span className="font-display text-lg md:text-xl">{l.name}</span>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {l.level}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
