import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/Reveal"

type SectionProps = {
  id: string
  index: string
  label: string
  className?: string
  children: ReactNode
}

export function Section({ id, index, label, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-border", className)}
    >
      <div className="cv-section mx-auto grid w-full max-w-5xl gap-x-12 gap-y-10 px-6 py-20 md:grid-cols-[10rem_1fr] md:px-10 md:py-32">
        <div className="md:sticky md:top-28 md:self-start print:!static">
          <div className="flex items-center gap-4 md:flex-col md:items-start">
            <span className="grid size-7 shrink-0 rotate-45 place-items-center border border-accent-violet/50">
              <span className="-rotate-45 font-mono text-[0.65rem] text-accent-violet">
                {index}
              </span>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {label}
            </span>
          </div>
        </div>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  )
}
