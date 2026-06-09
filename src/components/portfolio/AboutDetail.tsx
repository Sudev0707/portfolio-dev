"use client";

import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Copy, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/image/profileImg.png";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import {
  aboutParagraphs,
  CAL_BOOKING_URL,
  featuredProjects,
  githubStats,
  interests,
  quickFacts,
  socialLinks,
  techStack,
  testimonials,
  workExperience,
  workPrinciples,
} from "@/lib/profile";
import { fadeUp, staggerContainer, staggerItem, viewport } from "./motion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }),
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return <span>{time || "—:—"} IST</span>;
}

function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "hello@sudev.dev";

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
      {copied ? "Copied!" : email}
      <Copy className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}

function OpenToWorkMarquee() {
  const item = (
    <span className="mx-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      Open to work
    </span>
  );

  return (
    <div className="border-y border-border bg-card/40 py-2">
      <Marquee pauseOnHover className="[--duration:28s]">
        {item}
        {item}
        {item}
        {item}
      </Marquee>
    </div>
  );
}

export function AboutDetail() {
  const allTechTags = Object.values(techStack).flat();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <OpenToWorkMarquee />

      <div className="mx-auto max-w-5xl px-6 py-10 md:py-16">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Hero */}
        <motion.header
          className="grid gap-10 md:grid-cols-[1fr_220px] md:items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <SectionLabel>More about me</SectionLabel>
            <h1 className="font-bricolage mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              I&apos;m Sudev,{" "}
              <span className="accent-text italic">a creative engineer</span>
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <EmailCopyButton />
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Let&apos;s build together
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="md:justify-self-end">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-1.5">
              <div className="texture-grid pointer-events-none absolute inset-0 opacity-30" />
              <img
                src={profileImg}
                alt="Sudev Majhi"
                className="relative aspect-[4/5] w-full rounded-xl object-cover"
              />
              <div className="relative mt-3 flex items-center justify-between px-2 pb-1 font-mono text-xs text-muted-foreground">
                <LiveClock />
                <span>Kolkata, IN</span>
              </div>
            </div>
          </motion.div>
        </motion.header>

        {/* Quick facts */}
        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {quickFacts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-card/50 p-5"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                {fact.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionLabel>The experience</SectionLabel>
          <h2 className="font-bricolage mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Experience that brings ideas to life
          </h2>
          <div className="mt-10 space-y-6">
            {workExperience.map((job) => (
              <article
                key={job.id}
                className="rounded-2xl border border-border bg-card/40 p-6 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">
                      {job.period}
                    </p>
                    <h3 className="font-bricolage mt-2 text-2xl font-semibold text-foreground">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {job.location} · {job.employmentType}
                    </p>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {job.role}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        {/* GitHub stats */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionLabel>Open source</SectionLabel>
          <h2 className="font-bricolage mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Code &amp; contributions
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {githubStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/40 p-5 text-center"
              >
                <p className="font-bricolage text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/Sudev0707"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            View GitHub profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.section>

        {/* Tech stack */}
        <motion.section
          className="mt-24 rounded-2xl border border-border bg-card/30 p-6 md:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionLabel>Tech stack</SectionLabel>
          <h2 className="font-bricolage mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            The stack behind everything I ship
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {allTechTags.map((tag) => (
              <TagPill key={tag}>{tag}</TagPill>
            ))}
          </div>
        </motion.section>

        {/* Selected work */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionLabel>Case studies</SectionLabel>
          <h2 className="font-bricolage mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Curated work
          </h2>
          <div className="mt-10 space-y-4">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40 hover:bg-card/70 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-primary">
                    {project.index}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-bricolage text-xl font-semibold text-foreground group-hover:text-primary md:text-2xl">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <Link
            to="/"
            hash="projects"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            See more projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.section>

        {/* Principles & interests */}
        <motion.section
          className="mt-24 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div
            variants={staggerItem}
            className="rounded-2xl border border-border bg-card/40 p-6 md:p-8"
          >
            <SectionLabel>How I work</SectionLabel>
            <ul className="mt-5 space-y-3">
              {workPrinciples.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {principle}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={staggerItem}
            className="rounded-2xl border border-border bg-card/40 p-6 md:p-8"
          >
            <SectionLabel>Beyond code</SectionLabel>
            <p className="mt-5 text-sm text-muted-foreground">
              When I&apos;m not shipping features, you&apos;ll find me exploring:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-bricolage mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Word on the street about me
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6"
              >
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{item.body}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-xs font-semibold text-muted-foreground">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-medium text-foreground">
                      {item.name}
                    </cite>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className={cn(
            "relative mt-24 overflow-hidden rounded-2xl border border-primary/30 p-8 text-center md:p-14",
            "bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.14_162/0.12),transparent_60%)]",
          )}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            From concept to creation
          </p>
          <h2 className="font-bricolage mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Let&apos;s make it happen!
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            I&apos;m available for full-time roles &amp; freelance projects. I
            thrive on crafting dynamic web applications and delivering seamless
            user experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              View projects
            </Link>
          </div>
        </motion.section>
      </div>

      <OpenToWorkMarquee />
    </main>
  );
}
