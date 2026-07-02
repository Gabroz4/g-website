type Stack = {
  cx: number
  cy: number
  sides: number
  count: number
  base: number
  gap: number
  squish: number
  rotate: number
  twist: number
  seed: number
  grad: "iv" | "vi"
}

// Concentric polygon rings, each twisted a few degrees past the last —
// the topographic contour motif sharpened into a quiet op-art terrain.
const STACKS: Stack[] = [
  { cx: 215, cy: 165, sides: 6, count: 10, base: 22, gap: 19, squish: 0.78, rotate: -24, twist: 4.2, seed: 0.4, grad: "iv" },
  { cx: 1015, cy: 590, sides: 5, count: 12, base: 26, gap: 23, squish: 0.7, rotate: 30, twist: -3.6, seed: 1.7, grad: "vi" },
  { cx: 735, cy: 50, sides: 4, count: 6, base: 18, gap: 17, squish: 0.88, rotate: 12, twist: 6.5, seed: 3.1, grad: "vi" },
  { cx: 1170, cy: 175, sides: 6, count: 8, base: 15, gap: 15, squish: 0.82, rotate: -10, twist: -5, seed: 2.2, grad: "iv" },
  { cx: 80, cy: 660, sides: 5, count: 7, base: 20, gap: 18, squish: 0.75, rotate: 18, twist: 4.6, seed: 4.6, grad: "vi" },
]

// Straight rays fanning in from off-canvas top-right.
const RAYS: [number, number][] = [
  [0, 150],
  [0, 330],
  [0, 520],
  [120, 720],
  [380, 720],
  [650, 720],
  [910, 720],
]

function ringPath(
  cx: number,
  cy: number,
  r: number,
  squish: number,
  sides: number,
  rotateDeg: number,
) {
  const rot = (rotateDeg * Math.PI) / 180
  const pts = Array.from({ length: sides }, (_, i) => {
    const a = rot + (i * 2 * Math.PI) / sides
    const x = cx + Math.cos(a) * r
    const y = cy + Math.sin(a) * r * squish
    return `${x.toFixed(1)} ${y.toFixed(1)}`
  })
  return `M${pts.join(" L")}Z`
}

const GRADS: Record<Stack["grad"], [string, string]> = {
  iv: ["var(--accent-ice)", "var(--accent-violet)"],
  vi: ["var(--accent-violet)", "var(--accent-ice)"],
}

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
        <defs>
          {Object.entries(GRADS).map(([id, [from, to]]) => (
            <linearGradient key={id} id={`geo-${id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" style={{ stopColor: from }} />
              <stop offset="100%" style={{ stopColor: to }} />
            </linearGradient>
          ))}
        </defs>
        <g
          stroke="url(#geo-vi)"
          strokeWidth={0.9}
          style={{ opacity: "calc(var(--geo-opacity) * 0.6)" }}
        >
          {RAYS.map(([x, y], i) => (
            <line key={i} x1={1420} y1={-220} x2={x} y2={y} />
          ))}
        </g>
        {STACKS.map((s, si) => (
          <g
            key={si}
            stroke={`url(#geo-${s.grad})`}
            strokeWidth={1.1}
            strokeLinejoin="round"
            style={{ opacity: "var(--geo-opacity)" }}
          >
            {Array.from({ length: s.count }).map((_, i) => {
              const r = s.base + i * s.gap
              const cx = s.cx + Math.sin(i * 1.7 + s.seed) * s.gap * 0.35
              const cy = s.cy + Math.cos(i * 1.25 + s.seed) * s.gap * 0.28
              const rot = s.rotate + i * s.twist
              return (
                <path key={i} d={ringPath(cx, cy, r, s.squish, s.sides, rot)} />
              )
            })}
          </g>
        ))}
      </svg>
    </div>
  )
}
