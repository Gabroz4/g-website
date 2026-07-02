import { Section } from "@/components/layout/Section"
import { useContent, useUI } from "@/i18n"

export function Education() {
  const { education, certifications } = useContent()
  const t = useUI()

  return (
    <Section id="education" index="03" label={t.nav.education}>
      <ol className="space-y-9 border-l border-border pl-7">
        {education.map((item) => (
          <li key={item.degree} className="relative break-inside-avoid">
            <span className="absolute -left-[calc(1.75rem+0.25rem)] top-2 size-2 rotate-45 bg-accent-violet ring-4 ring-background" />
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent-violet">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-xl md:text-2xl">
              {item.degree}
            </h3>
            <p className="text-sm text-muted-foreground">{item.institution}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 break-inside-avoid">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {t.certifications}
        </h3>
        <ul className="mt-6 space-y-5">
          {certifications.map((c) => (
            <li key={c.name} className="break-inside-avoid">
              <p className="font-display text-base md:text-lg">{c.name}</p>
              <p className="mt-0.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {c.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
