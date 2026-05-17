import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile, experience } from "@/content"

export function Hero() {
  const current = experience[0]

  const specs = [
    { k: "role", v: profile.role },
    { k: "focus", v: profile.focus },
    { k: "based", v: profile.location },
    { k: "current", v: current ? current.org : "—" },
  ]

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[12%] right-[2%] h-[42vh] w-[42vw] rounded-full bg-accent-green/[0.1] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] -left-[8%] h-[34vh] w-[36vw] rounded-full bg-accent-sky/[0.09] blur-[130px]"
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
              className="rise mt-6 font-display text-[clamp(2.6rem,6vw,4.85rem)] font-medium leading-[1.0] tracking-[-0.03em]"
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
              <Button asChild size="lg" className="rounded-full px-7">
                <a href="#projects">
                  View work
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <a
                href="#contact"
                className="group inline-flex items-center text-sm font-medium"
              >
                <span className="border-b border-border pb-1 transition-colors group-hover:border-accent-green">
                  Get in touch
                </span>
              </a>
            </div>
          </div>

          <div
            className="rise relative rounded-2xl border border-border bg-card/55 p-6 backdrop-blur-md sm:p-7"
            style={{ animationDelay: "0.44s" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-wide text-muted-foreground">
                // at a glance
              </span>
              <span className="relative grid size-2 place-items-center">
                <span className="ping-soft absolute size-2 rounded-full bg-accent-green" />
                <span className="size-2 rounded-full bg-accent-green" />
              </span>
            </div>

            <dl className="mt-5 divide-y divide-border/60">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
                >
                  <dt className="font-mono text-xs lowercase tracking-wide text-muted-foreground">
                    {s.k}
                  </dt>
                  <dd className="text-right text-sm font-medium">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div
          className="rise flex items-center justify-between gap-4 border-t border-border py-5 font-mono text-xs text-muted-foreground"
          style={{ animationDelay: "0.56s" }}
        >
          <span className="tracking-wide">
            {profile.location}{" "}
            <span className="text-accent-green/70">· 44.36°N 11.71°E</span>
          </span>
          <a
            href="#about"
            className="flex items-center gap-2 uppercase tracking-[0.18em] transition-colors hover:text-foreground"
          >
            Scroll
            <ArrowDown className="float-down size-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
