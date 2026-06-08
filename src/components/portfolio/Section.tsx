"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, slideInLeft, viewport } from "./motion";

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-border/60 before:to-transparent border-primary",
        className,
      )}
    >
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
            className="font-bricolage mt-4 text-xl font-semibold tracking-tight md:text-2xl"
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
