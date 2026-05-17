import { Download } from "lucide-react"
import { useUI } from "@/i18n"
import { cn } from "@/lib/utils"

/** Triggers the browser print dialog; the print stylesheet reflows the page
 *  into a clean A4 CV that the user can save as PDF. */
export function printCV() {
  const previous = document.title
  document.title = "Gabriele Broccoli — CV"
  const restore = () => {
    document.title = previous
    window.removeEventListener("afterprint", restore)
  }
  window.addEventListener("afterprint", restore)
  window.print()
}

export function DownloadCV({
  className,
  onClick,
  variant = "full",
}: {
  className?: string
  onClick?: () => void
  variant?: "full" | "icon"
}) {
  const t = useUI()
  const handle = () => {
    onClick?.()
    printCV()
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handle}
        aria-label={t.downloadCv}
        title={t.downloadCv}
        className={cn(
          "grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-accent-green hover:text-foreground",
          className,
        )}
      >
        <Download className="size-4" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handle}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-foreground transition-colors hover:border-accent-green hover:text-accent-green",
        className,
      )}
    >
      <Download className="size-3.5" />
      {t.downloadCv}
    </button>
  )
}
