"use client";

import { motion } from "motion/react";
import { fadeUp, scaleIn, staggerContainer, staggerItem, viewport } from "./motion";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 pb-28">
      <div className="relative mx-auto max-w-4xl px-6 text-center pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,oklch(0.62_0.14_162/0.1),transparent_65%)]"
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground"
            variants={fadeUp}
          >
            <span className="h-px w-6 bg-primary/70" />
            Contact
            <span className="h-px w-6 bg-primary/70" />
          </motion.div>
          <motion.h2
            className="font-bricolage mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl"
            variants={fadeUp}
          >
            Have a project in mind? <span className="accent-text">Let's talk.</span>
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
            variants={fadeUp}
          >
            I'm taking on a small number of new engagements this quarter. The
            best way to reach me is email — I reply within 24 hours.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            variants={staggerContainer}
          >
            <motion.a
              href="mailto:sudev1997@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              variants={scaleIn}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              sudev1997@gmail.com
            </motion.a>
            <motion.a
              href="https://cal.com/sudev-y6seey/15min"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule a call
            </motion.a>
          </motion.div>
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            variants={staggerContainer}
          >
            {["GitHub", "LinkedIn", "X / Twitter", "Read.cv"].map((label) => (
              <motion.a
                key={label}
                href={`https://${label.toLowerCase().replace(" / ", ".com/")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.footer
        className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>© 2026 Sudev Majhi. Crafted with care.</span>
          {/* <span className="font-mono">v1.0 · Built with TanStack Start</span> */}
        </div>
      </motion.footer>
    </section>
  );
}
