import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile, experience } from "@/content"
import { cn } from "@/lib/utils"

const CORNERS = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "left-0 bottom-0 border-l border-b",
  "right-0 bottom-0 border-r border-b",
]

export function Hero() {
  const year = new Date().getFullYear()
  const current = experience[0]

  const specs = [
    { k: "Role", v: profile.role },
    { k: "Focus", v: profile.focus },
    { k: "Based", v: profile.location },
    { k: "Current", v: current ? current.org : "—" },
  ]

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[15%] right-[5%] h-[40vh] w-[40vw] rounded-full bg-accent-green/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 md:px-10">
        <div className="grid flex-1 items-center gap-12 pb-12 pt-32 lg:grid-cols-[1.45fr_1fr] lg:gap-16">
          <div>
            <div className="rise flex items-center gap-3">
              <span className="h-px w-10 bg-accent-green" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-green">
                {profile.role}
              </span>
            </div>

            <h1
              className="rise mt-6 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.035em]"
              style={{ animationDelay: "0.1s" }}
            >
              {profile.name}
            </h1>

            <p
              className="rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "0.22s" }}
            >
              {profile.tagline}
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-5"
              style={{ animationDelay: "0.34s" }}
            >
              <Button asChild size="lg" className="rounded-md px-6">
                <a href="#projects">
                  View work
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <a
                href="#contact"
                className="group inline-flex items-center font-mono text-sm uppercase tracking-wider"
              >
                <span className="border-b border-border pb-1 transition-colors group-hover:border-accent-green">
                  Get in touch
                </span>
              </a>
            </div>
          </div>

          <div
            className="rise relative border border-border bg-card/40 p-6 backdrop-blur-sm sm:p-7"
            style={{ animationDelay: "0.44s" }}
          >
            {CORNERS.map((c) => (
              <span
                key={c}
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute size-2.5 border-accent-green",
                  c,
                )}
              />
            ))}

            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Profile
              </span>
              <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-accent-green">
                <span className="relative grid size-1.5 place-items-center">
                  <span className="ping-soft absolute size-1.5 rounded-full bg-accent-green" />
                  <span className="size-1.5 rounded-full bg-accent-green" />
                </span>
                Active
              </span>
            </div>

            <dl className="mt-5">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="flex items-baseline justify-between gap-4 border-t border-border/70 py-3 first:border-t-0 first:pt-0"
                >
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="text-right text-sm font-medium">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div
          className="rise flex items-center justify-between border-t border-border py-5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground"
          style={{ animationDelay: "0.56s" }}
        >
          <span>Curriculum Vitæ — {year}</span>
          <a
            href="#about"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            Scroll
            <ArrowDown className="float-down size-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
