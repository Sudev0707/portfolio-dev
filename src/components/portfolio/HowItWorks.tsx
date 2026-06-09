"use client";

import type { LucideIcon } from "lucide-react";
import { Lightbulb, PenTool, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "./Section";
import { ease, viewport } from "./motion";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  rotate: number;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell me what you need — a new app, redesign, or feature build. We'll discuss your goals and vision clearly, together.",
    icon: Lightbulb,
    rotate: -6,
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "I'll craft a modern, responsive interface and bring it to life with clean architecture, smooth interactions, and reliable code.",
    icon: PenTool,
    rotate: 0,
  },
  {
    number: "03",
    title: "Launch & Care",
    description:
      "Once you're happy, we'll ship it. I'll also provide post-launch support to make sure everything runs smoothly.",
    icon: Rocket,
    rotate: 6,
  },
];

function FlowArrows() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      <svg
        className="absolute left-[28%] top-[18%] h-24 w-32 text-border"
        viewBox="0 0 128 96"
        fill="none"
      >
        <path
          d="M4 72 C40 20, 72 8, 124 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M116 24 L124 28 L118 36"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="absolute left-[58%] top-[52%] h-24 w-32 text-border"
        viewBox="0 0 128 96"
        fill="none"
      >
        <path
          d="M4 20 C48 72, 80 84, 124 64"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M116 60 L124 64 L118 72"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;

  return (
    <motion.article
      custom={step.rotate}
      variants={{
        hidden: {
          opacity: 0,
          y: 36,
          rotate: 0,
          scale: 0.96,
          filter: "blur(6px)",
        },
        visible: (rotate: number) => ({
          opacity: 1,
          y: 0,
          rotate,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease },
        }),
      }}
      className="group relative mx-auto flex min-h-[240px] max-w-[260px] flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ transformOrigin: "center center" }}
    >
      <span className="text-sm font-medium text-muted-foreground/60">
        {step.number}
      </span>

      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
        {step.title}
      </h3>

      <div className="relative my-auto flex flex-1 items-center justify-center py-6">
        <Icon
          className="size-24 text-border/80 transition-colors group-hover:text-border"
          strokeWidth={1}
        />
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </motion.article>
  );
}

export function HowItWorks() {
  return (
    <Section
      id="process"
      eyebrow="How it works"
      title={<>Here&apos;s what working together looks like</>}
      centered
    >
      <div className="relative">
        <FlowArrows />
        <motion.div
          className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
