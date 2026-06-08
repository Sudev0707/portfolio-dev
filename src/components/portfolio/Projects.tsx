"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";
import {
  SiCloudflare,
  SiNextdotjs,
  SiPostgresql,
  SiRadixui,
  SiReact,
  SiRust,
  SiTypescript,
} from "react-icons/si";
import { Section } from "./Section";
import { ease } from "./motion";

type Project = {
  name: string;
  description: string;
  features: string[];
  tags: { label: string; icon?: ReactNode }[];
  year: string;
  href: string;
  thumbnail: ReactNode;
};

const projects: Project[] = [
  {
    name: "Ledger OS",
    description:
      "Double-entry accounting platform built for SaaS finance teams. Real-time reconciliation across 12+ payment processors.",
    features: [
      "Automated double-entry ledger with audit trails",
      "Real-time sync across Stripe, PayPal, and 10+ processors",
      "Role-based dashboards for finance and ops teams",
      "Export-ready reports for tax and compliance workflows",
    ],
    tags: [
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Postgres", icon: <SiPostgresql className="size-3" /> },
      { label: "Next.js", icon: <SiNextdotjs className="size-3" /> },
    ],
    year: "2025",
    href: "#",
    thumbnail: (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[oklch(0.14_0.01_260)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.14_162/0.18),transparent_55%)]" />
        <div className="relative">
          <p className="font-bricolage text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Entrepreneurs
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Finance operations at startup speed.
          </p>
        </div>
        <div className="relative mt-8 space-y-3">
          <div className="h-10 rounded-lg border border-border/60 bg-card/80 px-4 text-sm leading-10 text-muted-foreground">
            Search transactions…
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Revenue", "Burn", "Runway"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-border/50 bg-card/60 p-3"
              >
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-mono text-sm text-foreground">$24.8k</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Northwind UI",
    description:
      "Open-source component library focused on data-dense applications — tables, command palettes, and keyboard-first flows.",
    features: [
      "Accessible primitives built on Radix UI",
      "Data tables with sorting, filtering, and virtualization",
      "Command palette and keyboard-first navigation patterns",
      "Theming tokens for consistent design systems",
    ],
    tags: [
      { label: "React", icon: <SiReact className="size-3" /> },
      { label: "Radix", icon: <SiRadixui className="size-3" /> },
      { label: "Design System" },
    ],
    year: "2024",
    href: "#",
    thumbnail: (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[oklch(0.22_0.04_280)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.62_0.14_162/0.25),transparent_50%)]" />
        <p className="relative max-w-md text-lg leading-relaxed text-foreground/90 md:text-xl">
          An intuitive component kit for organizing dense data and building
          keyboard-first product UIs.
        </p>
        <div className="relative mt-8 grid grid-cols-2 gap-3">
          {["Table", "Dialog", "Command", "Tabs"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground/80 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <ArrowUpRight className="absolute right-6 top-6 size-5 text-foreground/40" />
      </div>
    ),
  },
  {
    name: "Atlas Edge",
    description:
      "Globally distributed key-value store running on Cloudflare Workers. Sub-20ms reads from any continent.",
    features: [
      "Edge-replicated storage with strong consistency options",
      "Sub-20ms reads from any global PoP",
      "Rust-powered runtime with minimal cold starts",
      "Built for high-throughput serverless workloads",
    ],
    tags: [
      { label: "Rust", icon: <SiRust className="size-3" /> },
      { label: "Workers", icon: <SiCloudflare className="size-3" /> },
      { label: "Infra" },
    ],
    year: "2024",
    href: "#",
    thumbnail: (
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-[oklch(0.18_0.02_220)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.62_0.14_162/0.12),transparent_65%)]" />
        <div className="relative grid w-full max-w-sm grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-full border border-primary/30 bg-primary/10"
              style={{ opacity: 0.4 + (i % 3) * 0.2 }}
            />
          ))}
        </div>
        <p className="absolute bottom-8 left-8 font-mono text-xs uppercase tracking-[0.2em] text-primary/80">
          Global edge mesh
        </p>
      </div>
    ),
  },
  {
    name: "Quill Editor",
    description:
      "A collaborative markdown editor with CRDT-powered offline-first sync and AI-assisted rewrites.",
    features: [
      "CRDT sync for conflict-free collaborative editing",
      "Offline-first with automatic merge on reconnect",
      "AI-assisted rewrites and inline suggestions",
      "Markdown-native with live preview panes",
    ],
    tags: [
      { label: "TypeScript", icon: <SiTypescript className="size-3" /> },
      { label: "Yjs" },
      { label: "AI" },
    ],
    year: "2023",
    href: "#",
    thumbnail: (
      <div className="relative flex h-full flex-col overflow-hidden bg-[oklch(0.17_0.015_260)] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,oklch(0.62_0.14_162/0.08),transparent_50%)]" />
        <div className="relative flex-1 space-y-2 font-mono text-sm text-muted-foreground">
          <p>
            <span className="text-primary"># </span>Draft notes
          </p>
          <p className="text-foreground/70">Collaborative editing session</p>
          <p>— offline changes queued</p>
          <p className="text-primary/80">+ AI rewrite suggestion</p>
        </div>
        <div className="relative mt-6 h-1.5 overflow-hidden rounded-full bg-border">
          <div className="h-full w-2/3 rounded-full bg-primary/70" />
        </div>
      </div>
    ),
  },
];

function ProjectDetails({ project }: { project: Project }) {
  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
      transition={{ duration: 0.45, ease }}
      className="space-y-8"
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <h3 className="font-bricolage text-xl font-semibold tracking-tight text-foreground md:text-3xl">
            {project.name}
          </h3>
        </div>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <ul className="space-y-4">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
            <Sparkle
              className="mt-0.5 size-4 shrink-0 text-primary"
              strokeWidth={1.75}
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
          >
            {tag.icon}
            {tag.label}
          </span>
        ))}
      </div>

      <a
        href={project.href}
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        View case study
        <ArrowUpRight
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden
        />
      </a>
    </motion.div>
  );
}

function useActiveProjectIndex(itemCount: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratiosRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (Number.isNaN(index)) return;

          if (entry.isIntersecting) {
            ratiosRef.current.set(index, entry.intersectionRatio);
          } else {
            ratiosRef.current.delete(index);
          }
        });

        let bestIndex = 0;
        let bestRatio = 0;
        ratiosRef.current.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });

        if (ratiosRef.current.size > 0) {
          setActiveIndex(bestIndex);
        }
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    itemRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [itemCount]);

  return { activeIndex, itemRefs };
}

export function Projects() {
  const { activeIndex, itemRefs } = useActiveProjectIndex(projects.length);
  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Projects I'm proud of.</>}
      // description="A short list of recent work. More available on request."
      className="pb-24"
    >
      {/* Desktop: sticky scroll reveal */}
      <div className="hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-index={index}
              className="min-h-[70vh]"
            >
              <div
                className={`h-full min-h-[420px] overflow-hidden rounded-3xl border transition-opacity duration-500 ${
                  activeIndex === index
                    ? "border-border/80 opacity-100"
                    : "border-border/40 opacity-55"
                }`}
              >
                {project.thumbnail}
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-40 py-4">
            <AnimatePresence mode="wait">
              <ProjectDetails project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="space-y-16 lg:hidden">
        {projects.map((project) => (
          <article key={project.name} className="space-y-8">
            <div className="min-h-[320px] overflow-hidden rounded-3xl border border-border/60">
              {project.thumbnail}
            </div>
            <ProjectDetails project={project} />
          </article>
        ))}
      </div>
    </Section>
  );
}
