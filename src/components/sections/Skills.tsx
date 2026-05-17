import { Section } from "@/components/layout/Section"
import { skills } from "@/content"

export function Skills() {
  return (
    <Section id="skills" index="04" label="Skills">
      <div className="space-y-7">
        {skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground sm:pt-2">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-foreground/90 transition-colors hover:border-accent-green hover:text-accent-green"
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
