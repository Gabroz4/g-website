import { useLang, type Lang } from "@/i18n"
import { cn } from "@/lib/utils"

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
]

export function LanguageSelector({ className }: { className?: string }) {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex items-center gap-0.5 rounded-xl border border-border p-0.5",
        className,
      )}
    >
      {LANGS.map((l) => {
        const active = lang === l.code
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            className={cn(
              "rounded-lg px-2 py-1 font-mono text-xs transition-colors",
              active
                ? "bg-accent-green/15 text-accent-green"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l.label}
          </button>
        )
      })}
    </div>
  )
}
