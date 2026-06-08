"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, slideInLeft, viewport } from "./motion";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
        >
          <motion.div
            className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            variants={slideInLeft}
          >
            <span className="h-px w-6 bg-primary/70" />
            {eyebrow}
          </motion.div>
          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
            variants={fadeUp}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              variants={fadeUp}
            >
              {description}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
