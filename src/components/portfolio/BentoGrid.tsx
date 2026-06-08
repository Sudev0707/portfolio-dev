"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Code2,
  Mail,
  Shield,
  Star,
} from "lucide-react";
import { scaleIn, staggerContainer, staggerItem, viewport } from "./motion";

const processSteps = ["Plan & Design", "Build & Ship", "Launch & Scale"] as const;

const statFeatures = [
  { icon: Check, label: "Delivered on Time" },
  { icon: Shield, label: "High-Quality Code" },
  { icon: Star, label: "Client Satisfaction" },
] as const;

function ProcessPattern() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 text-primary/15"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden
    >
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={20 + i * 8}
          y={20 + i * 8}
          width={80 - i * 16}
          height={80 - i * 16}
          rx={12 - i * 2}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      ))}
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="pointer-events-none absolute -right-4 bottom-0 top-0 hidden w-[45%] sm:block" aria-hidden>
      <svg viewBox="0 0 280 320" className="h-full w-full" fill="none">
        <defs>
          <linearGradient id="bento-hero-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.97 0 0 / 0.15)" />
            <stop offset="100%" stopColor="oklch(0.97 0 0 / 0)" />
          </linearGradient>
        </defs>
        <ellipse cx="200" cy="180" rx="90" ry="110" fill="url(#bento-hero-glow)" />
        {/* Silhouette */}
        <circle cx="195" cy="95" r="38" fill="oklch(0.16 0.005 260 / 0.35)" />
        <path
          d="M130 280 C130 220 160 195 195 195 C230 195 260 220 260 280 Z"
          fill="oklch(0.16 0.005 260 / 0.35)"
        />
        {/* Tablet / screen */}
        <rect x="215" y="155" width="52" height="72" rx="6" fill="oklch(0.97 0 0 / 0.9)" />
        <rect x="222" y="165" width="38" height="4" rx="2" fill="oklch(0.62 0.14 162 / 0.6)" />
        <rect x="222" y="175" width="30" height="3" rx="1.5" fill="oklch(0.16 0.005 260 / 0.2)" />
        <rect x="222" y="183" width="34" height="3" rx="1.5" fill="oklch(0.16 0.005 260 / 0.15)" />
        <rect x="222" y="191" width="26" height="3" rx="1.5" fill="oklch(0.16 0.005 260 / 0.15)" />
        <rect x="222" y="205" width="38" height="14" rx="4" fill="oklch(0.62 0.14 162)" />
      </svg>
    </div>
  );
}

function KeyboardIllustration() {
  const keys = Array.from({ length: 12 });
  return (
    <div className="relative mx-auto mb-5 w-full max-w-[180px]" aria-hidden>
      <div className="rounded-xl border border-border/60 bg-muted/50 p-3 shadow-sm">
        <div className="grid grid-cols-4 gap-1.5">
          {keys.map((_, i) => (
            <div
              key={i}
              className={`flex h-7 items-center justify-center rounded-md text-[10px] ${
                i === 7
                  ? "bg-primary text-primary-foreground shadow-[0_0_12px_oklch(0.62_0.14_162/0.5)]"
                  : "bg-background/60 text-muted-foreground"
              }`}
            >
              {i === 7 ? <Mail className="h-3.5 w-3.5" /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PublishMockup() {
  return (
    <svg
      className="pointer-events-none absolute -right-2 bottom-0 top-0 hidden w-[55%] md:block"
      viewBox="0 0 260 200"
      fill="none"
      aria-hidden
    >
      <rect x="60" y="30" width="160" height="110" rx="10" fill="oklch(0.23 0.005 260)" stroke="oklch(1 0 0 / 8%)" />
      <rect x="72" y="44" width="60" height="6" rx="3" fill="oklch(1 0 0 / 12%)" />
      <rect x="72" y="58" width="100" height="4" rx="2" fill="oklch(1 0 0 / 8%)" />
      <rect x="72" y="68" width="80" height="4" rx="2" fill="oklch(1 0 0 / 6%)" />
      <rect x="72" y="90" width="50" height="22" rx="6" fill="oklch(0.62 0.14 162)" />
      <text x="97" y="105" textAnchor="middle" fill="oklch(0.16 0.005 260)" style={{ fontSize: 9, fontWeight: 600 }}>
        Deploy
      </text>
      <rect x="140" y="20" width="70" height="50" rx="8" fill="oklch(0.19 0.005 260)" stroke="oklch(0.62 0.14 162 / 0.3)" transform="rotate(6 175 45)" />
      <rect x="30" y="70" width="55" height="40" rx="6" fill="oklch(0.19 0.005 260)" stroke="oklch(1 0 0 / 6%)" transform="rotate(-8 57 90)" />
      <circle cx="200" cy="150" r="30" fill="oklch(0.62 0.14 162 / 0.15)" />
      <circle cx="200" cy="150" r="18" fill="oklch(0.62 0.14 162 / 0.25)" />
    </svg>
  );
}

function SatisfactionShape() {
  return (
    <svg
      className="pointer-events-none absolute right-4 top-4 h-20 w-20 text-white/10"
      viewBox="0 0 80 80"
      fill="currentColor"
      aria-hidden
    >
      <path d="M40 8 L72 28 L60 68 L20 68 L8 28 Z" />
    </svg>
  );
}

function BentoCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-[28px] p-8 ${className}`}
      variants={scaleIn}
      whileHover={{ y: -2, transition: { duration: 0.25 } }}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section id="highlights" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {/* Hero card — spans 2 cols */}
          <BentoCard className="relative min-h-[320px] bg-gradient-to-br from-primary via-primary to-[oklch(0.55_0.12_162)] text-primary-foreground sm:col-span-2 lg:row-span-1">
            <HeroIllustration />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="max-w-[55%] space-y-3">
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Sudev Majhi
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                  Full-Stack Engineering & Product Development
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                  <Code2 className="h-3.5 w-3.5" />
                  FULL-STACK EXPERT
                </span>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-primary-foreground px-5 py-2.5 text-sm font-medium text-primary transition-transform hover:scale-[1.02]"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </BentoCard>

          {/* Process card */}
          <BentoCard className="min-h-[240px] bg-card text-card-foreground">
            <ProcessPattern />
            <h4 className="text-lg font-semibold tracking-tight">
              3 steps for your success
            </h4>
            <motion.ul className="mt-6 space-y-3" variants={staggerContainer}>
              {processSteps.map((step) => (
                <motion.li
                  key={step}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                  variants={staggerItem}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {step}
                </motion.li>
              ))}
            </motion.ul>
          </BentoCard>

          {/* Stats card */}
          <BentoCard className="min-h-[240px] bg-card text-card-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Code2 className="h-4 w-4" />
            </div>
            <p className="mt-5 text-4xl font-semibold tracking-tight text-primary">40+</p>
            <p className="mt-1 text-sm text-muted-foreground">Projects Complete</p>
            <ul className="mt-6 space-y-2.5">
              {statFeatures.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 text-xs text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
                  {label}
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Support card */}
          <BentoCard className="min-h-[220px] bg-card text-card-foreground">
            <KeyboardIllustration />
            <h4 className="text-lg font-semibold tracking-tight">24-Hour Email Support</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Reach out anytime, and get help within 24 hours.
            </p>
          </BentoCard>

          {/* Client satisfaction card */}
          <BentoCard className="min-h-[220px] bg-foreground text-background">
            <SatisfactionShape />
            <p className="text-4xl font-semibold tracking-tight">100%</p>
            <p className="mt-1 text-sm text-background/70">Happy Clients</p>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-background text-background" />
              ))}
            </div>
          </BentoCard>

          {/* Value proposition — spans 2 cols */}
          <BentoCard className="relative min-h-[220px] bg-foreground text-background sm:col-span-2">
            <PublishMockup />
            <div className="relative z-10 max-w-[60%]">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-background/10">
                <Code2 className="h-4 w-4" />
              </div>
              <h4 className="text-lg font-semibold tracking-tight md:text-xl">
                Build and launch products with confidence
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                A streamlined process to design, customize, and ship modern web
                applications faster.
              </p>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
