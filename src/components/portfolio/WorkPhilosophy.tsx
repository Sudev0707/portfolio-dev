"use client";

import { useState } from "react";
import { Linkedin, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Section } from "./Section";
import profileImg from "@/assets/image/profileImg.png";
import { socialLinks } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { ease, fadeUp, slideInRight, staggerContainer, staggerItem, viewport } from "./motion";

type Principle = {
  number: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Prototype early, decide fast",
    description:
      "Rough drafts beat endless planning. Ship something tangible quickly, learn from real feedback, and commit to a direction instead of polishing in a vacuum.",
  },
  {
    number: "02",
    title: "Engineers should write more",
    description:
      "Clear docs, thoughtful PR descriptions, and concise updates save teams hours. Writing forces clarity — and clarity is half the job.",
  },
  {
    number: "03",
    title: "Systems over one-offs",
    description:
      "Reusable patterns, design tokens, and shared components scale better than bespoke solutions. Consistency isn't boring — it's how products feel intentional.",
  },
  {
    number: "04",
    title: "Defaults are decisions",
    description:
      "Every framework default, every config you skip, every \"we'll fix it later\" is a choice. Own the defaults or they'll own your product.",
  },
  {
    number: "05",
    title: "AI in the loop, not in the driver's seat",
    description:
      "AI accelerates exploration and boilerplate — but architecture, trade-offs, and what ships still need human judgment. Use it as a co-pilot, not autopilot.",
  },
  {
    number: "06",
    title: "Question the new shiny thing",
    description:
      "New tools are exciting, but the best stack is the one that solves the problem reliably. Hype fades; maintainability and user outcomes don't.",
  },
];

const linkedInHref =
  socialLinks.find((link) => link.label === "LinkedIn")?.href ??
  "https://linkedin.com/in/sudevmajhi-dev";

function PrincipleRow({
  principle,
  isOpen,
  onToggle,
}: {
  principle: Principle;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div variants={staggerItem}>
      <div
        className={cn(
          "overflow-hidden rounded-2xl border bg-card transition-colors",
          isOpen ? "border-border" : "border-border hover:border-foreground/10",
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center gap-4 px-6 py-2.5 text-left"
        >
          {!isOpen && (
            <span className="w-8 shrink-0 text-sm font-medium text-muted-foreground/50">
              {principle.number}
            </span>
          )}
          <span className="flex-1 text-base font-semibold tracking-tight text-foreground">
            {principle.title}
          </span>
          <span className="shrink-0 text-muted-foreground">
            {isOpen ? (
              <Minus className="size-4" strokeWidth={1.5} />
            ) : (
              <Plus className="size-4" strokeWidth={1.5} />
            )}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="overflow-hidden"
            >
              <div className="border-t border-border px-6 pb-6 pt-5">
                <div className="flex flex-col items-center">
                  <span
                    className="mb-4 block size-1.5 rounded-full bg-foreground"
                    aria-hidden
                  />
                  <p className="w-full text-sm leading-relaxed text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function LinkedInCard() {
  return (
    <motion.aside
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={slideInRight}
    >
      <div className="flex items-center gap-2">
        <img
          src={profileImg}
          alt="Sudev Majhi"
          className="size-12 rounded-full border border-border object-cover grayscale"
        />
        <div className="flex items-center gap-1">
          <p className="text-lg font-bricolage font-me text-foreground">Sudev Majhi</p>
          <svg
            className="size-[18px] shrink-0"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Verified"
          >
            <path
              d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
              fill="#1D9BF0"
            />
            <path
              d="m9 12 2 2 4-4"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight md:text-xl">
        <span className="text-muted-foreground">Curious about my work? </span>
        <span className="text-foreground">Find me on LinkedIn</span>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Always up for a conversation about engineering, AI, or what you&apos;re
        building.
      </p>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-200 hover:scale-[1.02]"
      >
        <Linkedin className="size-4" />
        Connect on LinkedIn
      </a>
    </motion.aside>
  );
}

export function WorkPhilosophy() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="philosophy" eyebrow="Philosophy" title={<></>} className="relative">
      <div className="mx-auto max-w-6xl py-0 md:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.h2
              className="font-bricolage text-xl font-bold tracking-tight md:text-2xl lg:text-[2.75rem] lg:leading-[1.1]"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeUp}
            >
              <span className="text-foreground">How I think </span>
              <span className="text-muted-foreground">about my work</span>
            </motion.h2>

            <motion.div
              className="mt-8 space-y-2.5"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer}
            >
              {principles.map((principle, index) => (
                <PrincipleRow
                  key={principle.number}
                  principle={principle}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                />
              ))}
            </motion.div>
          </div>

          <div className="lg:sticky lg:top-32">
            <LinkedInCard />
          </div>
        </div>
      </div>
    </Section>
  );
}
