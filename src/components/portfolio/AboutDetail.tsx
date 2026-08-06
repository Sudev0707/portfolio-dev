"use client";

import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Copy, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import profileImg from "@/assets/image/profileImg.png";
import { cn } from "@/lib/utils";
import {
  aboutParagraphs,
  CAL_BOOKING_URL,
  quickFacts,
  socialLinks,
  workExperience,
} from "@/lib/profile";
import { fadeUp, staggerContainer, staggerItem, viewport } from "./motion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

function EmailCopyButton() {
  const [copied, setCopied] = useState(false);
  const email = "sudev1997@gmail.com";

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      <Mail className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
      {copied ? "Copied!" : email}
      <Copy className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
}

export function AboutDetail() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 py-8 md:py-10">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <motion.header
          className="grid gap-6 md:grid-cols-[1fr_160px] md:items-start"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <SectionLabel>More about me</SectionLabel>
            <h1 className="font-bricolage mt-2 text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl">
              I&apos;m Sudev,{" "}
              <span className="accent-text italic">a creative engineer</span>
            </h1>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <EmailCopyButton />
              <a
                href={CAL_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Let&apos;s build together
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="md:justify-self-end">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-1">
              <div className="texture-grid pointer-events-none absolute inset-0 opacity-30" />
              <img
                src={profileImg}
                alt="Sudev Majhi"
                className="relative aspect-[4/5] w-full rounded-lg object-cover"
              />
              <p className="relative mt-2 px-1.5 pb-0.5 font-mono text-[10px] text-muted-foreground">
                Kolkata, IN
              </p>
            </div>
          </motion.div>
        </motion.header>

        <motion.div
          className="mt-8 grid gap-3 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {quickFacts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={staggerItem}
              className="rounded-xl border border-border bg-card/50 p-3.5"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {fact.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-foreground">
                {fact.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          className="mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-bricolage mt-2 text-xl font-bold tracking-tight md:text-2xl">
            Where I&apos;ve been building
          </h2>
          <div className="mt-5 space-y-3">
            {workExperience.map((job) => (
              <article
                key={job.id}
                className="rounded-xl border border-border bg-card/40 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {job.period}
                    </p>
                    <h3 className="font-bricolage mt-1 text-lg font-semibold text-foreground">
                      {job.company}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {job.location} · {job.employmentType}
                    </p>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                    {job.role}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={cn(
            "relative mt-12 overflow-hidden rounded-xl border border-primary/30 p-6 text-center md:p-8",
            "bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.14_162/0.12),transparent_60%)]",
          )}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <h2 className="font-bricolage text-2xl font-bold tracking-tight md:text-3xl">
            Let&apos;s make it happen
          </h2>
          <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-muted-foreground md:text-sm">
            Available for full-time roles and freelance projects.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
            >
              View projects
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
