"use client";

import { motion } from "motion/react";

const techStack = [
  { label: "React", x: 95, y: 268, delay: 0.4 },
  { label: "Node", x: 148, y: 238, delay: 0.55 },
  { label: "AWS", x: 198, y: 208, delay: 0.7 },
  { label: "TS", x: 248, y: 178, delay: 0.85 },
  { label: "RN", x: 298, y: 148, delay: 1.0 },
] as const;

const appScreens = [
  { x: 368, y: 72, w: 52, h: 88, delay: 0 },
  { x: 408, y: 48, w: 48, h: 82, delay: 0.35 },
  { x: 442, y: 28, w: 44, h: 76, delay: 0.7 },
] as const;

function TechTile({
  label,
  x,
  y,
  delay,
}: {
  label: string;
  x: number;
  y: number;
  delay: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6, y: y + 12 }}
      animate={{ opacity: 1, scale: 1, y }}
      transition={{ duration: 0.6, delay: delay + 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <rect
          x={x - 22}
          y={y - 22}
          width={44}
          height={44}
          rx={8}
          fill="oklch(0.19 0.005 260 / 0.85)"
          stroke="oklch(0.62 0.14 162 / 0.35)"
          strokeWidth={1}
        />
        <text
          x={x}
          y={y + 4}
          textAnchor="middle"
          className="fill-foreground/80"
          style={{ fontSize: 10, fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}
        >
          {label}
        </text>
      </motion.g>
    </motion.g>
  );
}

function AppScreen({
  x,
  y,
  w,
  h,
  delay,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  delay: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, x: x - 20 }}
      animate={{ opacity: 1, x }}
      transition={{ duration: 0.8, delay: 1.2 + delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <g transform={`translate(${x}, ${y}) skewY(-12)`}>
          <rect
            width={w}
            height={h}
            rx={6}
            fill="oklch(0.19 0.005 260 / 0.7)"
            stroke="oklch(0.62 0.14 162 / 0.4)"
            strokeWidth={1}
          />
          <rect x={6} y={8} width={w - 12} height={h * 0.35} rx={3} fill="oklch(0.62 0.14 162 / 0.15)" />
          <rect x={6} y={h * 0.45} width={w - 12} height={6} rx={2} fill="oklch(1 0 0 / 0.08)" />
          <rect x={6} y={h * 0.58} width={w * 0.6} height={6} rx={2} fill="oklch(1 0 0 / 0.06)" />
          <rect x={6} y={h * 0.72} width={w - 12} height={6} rx={2} fill="oklch(1 0 0 / 0.05)" />
        </g>
      </motion.g>
    </motion.g>
  );
}

export function DevPipelineIllustration({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-[8] hidden w-[58%] max-w-[640px] md:block"
      aria-hidden
    >
      {/* Fade into hero text on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

      <motion.div
        className="absolute inset-y-0 right-0 flex items-center justify-end pr-4 lg:pr-8"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          viewBox="0 0 520 380"
          className="h-[min(72vh,520px)] w-full max-w-[520px] opacity-90"
          fill="none"
        >
          <defs>
            <linearGradient id="pipe-glow" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.62 0.14 162 / 0.1)" />
              <stop offset="50%" stopColor="oklch(0.62 0.14 162 / 0.5)" />
              <stop offset="100%" stopColor="oklch(0.62 0.14 162 / 0.8)" />
            </linearGradient>
            <linearGradient id="cube-right" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.62 0.14 162 / 0.9)" />
              <stop offset="100%" stopColor="oklch(0.52 0.12 162 / 0.7)" />
            </linearGradient>
            <linearGradient id="cube-left" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.23 0.005 260)" />
              <stop offset="100%" stopColor="oklch(0.16 0.005 260)" />
            </linearGradient>
            <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.28 0.01 260)" />
              <stop offset="100%" stopColor="oklch(0.22 0.005 260)" />
            </linearGradient>
            <filter id="cube-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id="iso-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M24 0 L0 0 L0 24"
                fill="none"
                stroke="oklch(1 0 0 / 0.04)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          {/* Isometric floor grid */}
          <rect width="520" height="380" fill="url(#iso-grid)" opacity={0.6} />

          {/* Pipeline path */}
          <motion.path
            d="M 58 310 Q 140 260 210 210 T 340 130"
            stroke="url(#pipe-glow)"
            strokeWidth={1.5}
            strokeDasharray="6 8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
          />

          {/* Traveling pulse along pipeline */}
          <motion.circle
            r={4}
            fill="oklch(0.62 0.14 162)"
            style={{ filter: "drop-shadow(0 0 6px oklch(0.62 0.14 162 / 0.9))" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              begin="1.5s"
              path="M 58 310 Q 140 260 210 210 T 340 130"
            />
          </motion.circle>

          {/* Idea — user figure */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              {/* Person */}
              <circle cx={48} cy={298} r={10} fill="oklch(0.62 0.14 162 / 0.25)" stroke="oklch(0.62 0.14 162 / 0.5)" strokeWidth={1} />
              <path
                d="M 38 312 Q 48 305 58 312 L 58 328 L 38 328 Z"
                fill="oklch(0.23 0.005 260 / 0.9)"
                stroke="oklch(0.62 0.14 162 / 0.3)"
                strokeWidth={1}
              />
              {/* Thought bubble */}
              <rect
                x={18}
                y={248}
                width={88}
                height={32}
                rx={10}
                fill="oklch(0.19 0.005 260 / 0.9)"
                stroke="oklch(0.62 0.14 162 / 0.35)"
                strokeWidth={1}
              />
              <text
                x={62}
                y={268}
                textAnchor="middle"
                fill="oklch(0.62 0.14 162)"
                style={{ fontSize: 9, fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.15em" }}
              >
                YOUR IDEA
              </text>
              <circle cx={52} cy={282} r={3} fill="oklch(0.19 0.005 260 / 0.9)" stroke="oklch(0.62 0.14 162 / 0.3)" />
              <circle cx={48} cy={288} r={2} fill="oklch(0.19 0.005 260 / 0.9)" stroke="oklch(0.62 0.14 162 / 0.3)" />
            </motion.g>
          </motion.g>

          {/* Tech stack tiles */}
          {techStack.map((tech) => (
            <TechTile key={tech.label} {...tech} />
          ))}

          {/* Central build cube */}
          <motion.g
            transform="translate(228, 168)"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.g
              animate={{ filter: ["brightness(1)", "brightness(1.15)", "brightness(1)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M0,0 L43.3,25 L43.3,75 L0,50 Z" fill="url(#cube-right)" filter="url(#cube-glow)" />
              <path d="M0,0 L-43.3,25 L-43.3,75 L0,50 Z" fill="url(#cube-left)" stroke="oklch(1 0 0 / 0.06)" />
              <path d="M0,0 L43.3,25 L0,50 L-43.3,25 Z" fill="url(#cube-top)" stroke="oklch(1 0 0 / 0.08)" />
              {/* Code brackets on front face */}
              <text
                x={0}
                y={38}
                textAnchor="middle"
                fill="oklch(0.16 0.005 260 / 0.9)"
                style={{ fontSize: 18, fontFamily: "JetBrains Mono, monospace", fontWeight: 700 }}
              >
                {"</>"}
              </text>
            </motion.g>
            <motion.text
              x={0}
              y={92}
              textAnchor="middle"
              fill="oklch(0.68 0.01 260)"
              style={{ fontSize: 8, fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.2em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.4 }}
            >
              BUILD
            </motion.text>
          </motion.g>

          {/* Output — app screens */}
          {appScreens.map((screen, i) => (
            <AppScreen key={i} {...screen} />
          ))}

          {/* Ship label */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <rect
              x={388}
              y={8}
              width={72}
              height={22}
              rx={11}
              fill="oklch(0.62 0.14 162 / 0.15)"
              stroke="oklch(0.62 0.14 162 / 0.4)"
              strokeWidth={1}
            />
            <text
              x={424}
              y={22}
              textAnchor="middle"
              fill="oklch(0.62 0.14 162)"
              style={{ fontSize: 9, fontFamily: "Bebas Neue, sans-serif", letterSpacing: "0.2em" }}
            >
              SHIPPED
            </text>
          </motion.g>

          {/* Ambient particles near cube */}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={i}
              cx={228 + (i - 1.5) * 28}
              cy={120 + (i % 2) * 20}
              r={1.5}
              fill="oklch(0.62 0.14 162 / 0.6)"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: [0, -12, 0],
              }}
              transition={{
                duration: 2.5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
