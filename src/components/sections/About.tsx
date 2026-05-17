import { Section } from "@/components/layout/Section"
import { about } from "@/content"

export function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="max-w-2xl">
        <p className="font-display text-2xl font-medium leading-[1.3] tracking-[-0.01em] md:text-[2rem]">
          {about[0]}
        </p>
        {about.length > 1 && (
          <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {about.slice(1).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
