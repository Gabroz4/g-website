import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useContent, useUI } from "@/i18n"

export function Hero() {
  const { profile, experience } = useContent()
  const t = useUI()
  const current = experience[0]

  const specs = [
    { k: t.hero.role, v: profile.role },
    { k: t.hero.focus, v: profile.focus },
    { k: t.hero.based, v: profile.location },
    { k: t.hero.current, v: current ? current.org : "—" },
  ]

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden print:min-h-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[12%] right-[2%] h-[42vh] w-[42vw] rounded-full opacity-[0.13] blur-[120px] print:hidden"
        style={{
          background:
            "conic-gradient(from 40deg, transparent, var(--accent-violet), var(--accent-ice), var(--accent-violet), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] -left-[8%] h-[34vh] w-[36vw] rounded-full opacity-[0.11] blur-[130px] print:hidden"
        style={{
          background:
            "conic-gradient(from 220deg, transparent, var(--accent-violet), var(--accent-ice), var(--accent-violet), transparent)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 md:px-10">
        <div className="grid flex-1 items-center gap-12 pb-12 pt-32 lg:grid-cols-[1.45fr_1fr] lg:gap-16 print:gap-8 print:pb-4 print:pt-10">
          <div>
            <div className="rise flex items-center gap-3">
              <span className="psy-fill h-px w-10" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-violet">
                {profile.role}
              </span>
            </div>

            <h1
              className="rise mt-6 font-display text-[clamp(2.6rem,6vw,4.85rem)] font-medium leading-[1.0] tracking-[-0.03em] print:text-4xl"
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
              className="rise mt-9 flex flex-wrap items-center gap-5 print:hidden"
              style={{ animationDelay: "0.34s" }}
            >
              <Button asChild size="lg" className="rounded-full px-7">
                <a href="#projects">
                  {t.hero.viewWork}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <a
                href="#contact"
                className="group inline-flex items-center text-sm font-medium"
              >
                <span className="border-b border-border pb-1 transition-colors group-hover:border-accent-violet">
                  {t.hero.getInTouch}
                </span>
              </a>
            </div>
          </div>

          <div
            className="rise relative overflow-hidden rounded-2xl border border-border bg-card/55 p-6 backdrop-blur-md sm:p-7"
            style={{ animationDelay: "0.44s" }}
          >
            <span
              aria-hidden="true"
              className="psy-fill absolute inset-x-0 top-0 h-px opacity-70 print:hidden"
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-wide text-muted-foreground">
                // {t.hero.glance}
              </span>
              <span className="relative grid size-2 place-items-center">
                <span className="ping-soft absolute size-2 rounded-full bg-accent-violet print:hidden" />
                <span className="size-2 rounded-full bg-accent-violet" />
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
          className="rise flex items-center justify-between gap-4 border-t border-border py-5 font-mono text-xs text-muted-foreground print:hidden"
          style={{ animationDelay: "0.56s" }}
        >
          <span className="tracking-wide">
            {profile.location}{" "}
            <span className="text-accent-violet/70 max-sm:hidden">
              · 44.36°N 11.71°E
            </span>
          </span>
          <a
            href="#about"
            className="flex items-center gap-2 uppercase tracking-[0.18em] transition-colors hover:text-foreground"
          >
            {t.hero.scroll}
            <ArrowDown className="float-down size-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
