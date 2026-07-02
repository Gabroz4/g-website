import { Section } from "@/components/layout/Section"
import { useContent, useUI } from "@/i18n"

export function Experience() {
  const { experience } = useContent()
  const t = useUI()

  return (
    <Section id="experience" index="02" label={t.nav.experience}>
      <ol className="space-y-9 border-l border-border pl-7">
        {experience.map((item) => (
          <li
            key={`${item.org}-${item.period}`}
            className="relative break-inside-avoid"
          >
            <span className="absolute -left-[calc(1.75rem+0.25rem)] top-2 size-2 rotate-45 bg-accent-violet ring-4 ring-background" />
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent-violet">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-xl md:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.org}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
