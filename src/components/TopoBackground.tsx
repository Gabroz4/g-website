type Hill = {
  cx: number
  cy: number
  count: number
  base: number
  gap: number
  squish: number
  rotate: number
  seed: number
  tone?: "sky"
}

// Concentric, organically-drifting contour rings — a topographic map motif.
const HILLS: Hill[] = [
  { cx: 215, cy: 165, count: 10, base: 22, gap: 19, squish: 0.72, rotate: -24, seed: 0.4 },
  { cx: 1015, cy: 590, count: 13, base: 26, gap: 23, squish: 0.63, rotate: 30, seed: 1.7 },
  { cx: 735, cy: 50, count: 6, base: 18, gap: 17, squish: 0.84, rotate: 12, seed: 3.1, tone: "sky" },
  { cx: 1170, cy: 175, count: 8, base: 15, gap: 15, squish: 0.78, rotate: -10, seed: 2.2, tone: "sky" },
  { cx: 80, cy: 660, count: 7, base: 20, gap: 18, squish: 0.7, rotate: 18, seed: 4.6 },
]

export function TopoBackground() {
  return (
    <div
      aria-hidden="true"
      className="drift pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden"
      style={{
        maskImage:
          "radial-gradient(125% 90% at 50% 32%, transparent 0%, transparent 28%, black 80%)",
        WebkitMaskImage:
          "radial-gradient(125% 90% at 50% 32%, transparent 0%, transparent 28%, black 80%)",
      }}
    >
      <svg
        className="h-[108%] w-full"
        viewBox="0 0 1200 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {HILLS.map((h, hi) => (
          <g
            key={hi}
            stroke={h.tone === "sky" ? "var(--topo-sky)" : "var(--topo-line)"}
            strokeWidth={1.15}
          >
            {Array.from({ length: h.count }).map((_, i) => {
              const rx = h.base + i * h.gap
              const ry = rx * h.squish
              const cx = h.cx + Math.sin(i * 1.7 + h.seed) * h.gap * 0.45
              const cy = h.cy + Math.cos(i * 1.25 + h.seed) * h.gap * 0.32
              const rot = h.rotate + i * 3.4
              return (
                <ellipse
                  key={i}
                  cx={cx}
                  cy={cy}
                  rx={rx}
                  ry={ry}
                  transform={`rotate(${rot} ${cx} ${cy})`}
                />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}
