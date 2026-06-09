"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { Section } from "./Section";
import { ease } from "./motion";

function ProjectDetails({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
      transition={{ duration: 0.45, ease }}
      className="space-y-8"
    >
      <p className="hidden font-mono text-xs tracking-wider text-muted-foreground lg:block">
        {String(index + 1).padStart(2, "0")}
        <span className="text-muted-foreground/40"> / </span>
        {String(total).padStart(2, "0")}
      </p>

      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          {project.icon}
          <h3 className="font-bricolage text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {project.name}
          </h3>
          <p className="ml-auto shrink-0 font-mono text-xs tracking-wider text-muted-foreground lg:hidden">
            {String(index + 1).padStart(2, "0")}
            <span className="text-muted-foreground/40"> / </span>
            {String(total).padStart(2, "0")}
          </p>
        </div>
        <p className="mt-5 max-w-md line-clamp-2 text-base leading-relaxed text-muted-foreground lg:line-clamp-none">
          {project.description}
        </p>
      </div>

      {/* <ul className="space-y-4">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-xs leading-relaxed text-foreground/85">
            <Sparkle
              className="mt-0.5 size-4 shrink-0 text-primary"
              strokeWidth={1.75}
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul> */}

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
      <div className="hidden lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              data-index={index}
              className="min-h-[60vh] "
            >
              <div
                className={`h-full min-h-[420px] overflow-hidden rounded-3xl p-1.5 bg-card border transition-opacity duration-500 ${activeIndex === index
                  ? "border-border/80 opacity-100"
                  : "border-border/40 opacity-55"
                  }`}
              >
                <div className="rounded-3xl overflow-hidden">
                  {project.thumbnail}
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="sticky top-40 py-4">
            <AnimatePresence mode="wait">
              <ProjectDetails
                project={activeProject}
                index={activeIndex}
                total={projects.length}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="space-y-16 lg:hidden">
        {projects.map((project, index) => (
          <article key={project.name} className="space-y-8">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-card p-1">
              <div className="h-[308px] overflow-hidden rounded-2xl">
                {project.thumbnail}
              </div>
            </div>
            <ProjectDetails
              project={project}
              index={index}
              total={projects.length}
            />
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group mx-auto inline-flex items-center gap-2 self-center rounded-full px-6 py-3 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          See more projects
          <ArrowUpRight
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>

    </Section>
  );
}