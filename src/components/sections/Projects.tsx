import { ArrowUpRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { projects } from "@/content"
import { cn } from "@/lib/utils"

export function Projects() {
  return (
    <Section id="projects" index="05" label="Work">
      <ul>
        {projects.map((project, i) => {
          const Wrapper = project.link ? "a" : "div"
          const num = String(i + 1).padStart(2, "0")
          return (
            <li
              key={project.title}
              className="border-b border-border first:border-t"
            >
              <Wrapper
                {...(project.link
                  ? { href: project.link, target: "_blank", rel: "noreferrer" }
                  : {})}
                className={cn(
                  "group flex flex-col gap-3 py-8 transition-[padding] duration-300 md:flex-row md:gap-8",
                  project.link && "md:hover:pl-4",
                )}
              >
                <span className="font-mono text-xs text-accent-green md:pt-2.5">
                  {num}
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-accent-green md:text-3xl">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-green" />
                    )}
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {project.tags.join("  /  ")}
                  </p>
                </div>
              </Wrapper>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
