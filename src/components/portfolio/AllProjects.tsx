"use client";

import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects, type Project } from "@/lib/projects";
import { fadeUp, staggerContainer, staggerItem } from "./motion";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-colors hover:border-border/80"
    >
      <div className="h-[240px] overflow-hidden p-1 sm:h-[280px]">
        <div className="h-full overflow-hidden rounded-2xl">{project.thumbnail}</div>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <div className="flex items-center gap-3">
          {project.icon}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-bricolage truncate text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h2>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {project.year}
              </span>
            </div>
          </div>
          <span className="font-mono text-xs tracking-wider text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
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
          className="group/link mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          View case study
          <ArrowUpRight
            className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden
          />
        </a>
      </div>
    </motion.article>
  );
}

export function AllProjects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        <Link
          to="/"
          hash="projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-6 bg-primary/70" />
            All work
          </p>
          <h1 className="font-bricolage mt-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Every project, in one place.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A complete archive of shipped products, experiments, and open-source
            work — from finance platforms to developer tooling.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}
