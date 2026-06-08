"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import type { LucideIcon } from "lucide-react";
import { BookOpen, Component, Database, FileText } from "lucide-react";
import shoplyThumbnail from "@/assets/image/shoply-thumbnail.png";
import { cn } from "@/lib/utils";
import { ease, fadeUp, slideInLeft, viewport } from "./motion";

type Project = {
  name: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  thumbnail: string;
  image?: string;
};

const projects: Project[] = [
  {
    name: "Shoply",
    description:
      "Multi-vendor ecommerce mobile app with MapBox integration, pixel-perfect UI, and 40+ coded screens — organized layers and reusable components.",
    tags: ["Flutter", "MapBox", "Mobile"],
    year: "2025",
    href: "#",
    icon: BookOpen,
    accent: "from-orange-500/25 via-orange-950/50 to-card",
    thumbnail: "bg-[radial-gradient(circle_at_30%_20%,oklch(0.72_0.14_162/0.35),transparent_55%),radial-gradient(circle_at_80%_80%,oklch(0.55_0.12_162/0.2),transparent_50%)]",
    image: shoplyThumbnail,
  },
  {
    name: "Northwind UI",
    description:
      "Open-source component library focused on data-dense applications — tables, command palettes, and keyboard-first flows.",
    tags: ["React", "Radix", "Design System"],
    year: "2024",
    href: "#",
    icon: Component,
    accent: "from-sky-500/25 via-sky-950/50 to-card",
    thumbnail: "bg-[radial-gradient(circle_at_25%_75%,oklch(0.65_0.14_240/0.3),transparent_55%),radial-gradient(circle_at_70%_25%,oklch(0.5_0.1_240/0.18),transparent_50%)]",
  },
  {
    name: "Atlas Edge",
    description:
      "Globally distributed key-value store running on Cloudflare Workers. Sub-20ms reads from any continent.",
    tags: ["Rust", "Workers", "Infra"],
    year: "2024",
    href: "#",
    icon: Database,
    accent: "from-violet-500/25 via-violet-950/50 to-card",
    thumbnail: "bg-[radial-gradient(circle_at_40%_30%,oklch(0.62_0.18_290/0.32),transparent_55%),radial-gradient(circle_at_85%_70%,oklch(0.48_0.14_290/0.2),transparent_50%)]",
  },
  {
    name: "Quill Editor",
    description:
      "A collaborative markdown editor with CRDT-powered offline-first sync and AI-assisted rewrites.",
    tags: ["TypeScript", "Yjs", "AI"],
    year: "2023",
    href: "#",
    icon: FileText,
    accent: "from-amber-500/25 via-amber-950/50 to-card",
    thumbnail: "bg-[radial-gradient(circle_at_35%_65%,oklch(0.75_0.14_75/0.28),transparent_55%),radial-gradient(circle_at_75%_30%,oklch(0.58_0.12_75/0.18),transparent_50%)]",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 28 : -28,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? -28 : 28,
    filter: "blur(6px)",
    transition: { duration: 0.35, ease },
  }),
};

function ProjectThumbnail({ project }: { project: Project }) {
  const Icon = project.icon;

  if (project.image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-card">
        <img
          src={project.image}
          alt={`${project.name} project preview`}
          className="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-card",
        project.thumbnail,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80",
          project.accent,
        )}
      />
      <div className="relative flex flex-col items-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm">
          <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {project.year}
        </span>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0 0 / 0.8) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0 0 / 0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {project.name}
        </h3>
        <span className="font-mono text-sm text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-border px-2.5 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.href}
        className="group mt-8 inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        View case study
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextIndex = Math.min(
      Math.max(0, Math.floor(progress * projects.length)),
      projects.length - 1,
    );

    if (nextIndex !== prevIndexRef.current) {
      setDirection(nextIndex > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = nextIndex;
    }
    setActiveIndex(nextIndex);
  });

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="border-t border-border/60 pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${projects.length * 100}dvh` }}
        >
          <div className="sticky top-24 flex h-[calc(100dvh-3.5rem)] flex-col justify-start">
            <motion.div
              className="mb-10 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12, delayChildren: 0.05 },
                },
              }}
            >
              <motion.div
                className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                variants={slideInLeft}
              >
                <span className="h-px w-6 bg-primary/70" />
                Selected work
              </motion.div>
              <motion.h2
                className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
                variants={fadeUp}
              >
                Projects I'm proud of.
              </motion.h2>
              {/* <motion.p
                className="mt-4 text-base leading-relaxed text-muted-foreground"
                variants={fadeUp}
              >
                A short list of recent work. More available on request.
              </motion.p> */}
            </motion.div>

            <div className="grid w-full items-start gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
              <div className="relative min-h-[200px] md:min-h-[320px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeProject.name}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <ProjectThumbnail project={activeProject} />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col">
                <div className="relative min-h-[280px] md:min-h-[300px]">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeProject.name}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0"
                    >
                      <ProjectDetails project={activeProject} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex flex-1 gap-2">
                    {projects.map((project, index) => (
                      <div
                        key={project.name}
                        className={cn(
                          "h-1 flex-1 rounded-full transition-colors duration-300",
                          index === activeIndex ? "bg-primary" : "bg-border",
                        )}
                      />
                    ))}
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
