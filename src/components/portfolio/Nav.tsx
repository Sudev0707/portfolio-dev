"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { ease } from "./motion";

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 48);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/60 backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-background/95 shadow-[0_4px_24px_oklch(0_0_0/20%)]"
          : "bg-background/70"
      }`}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease, delay: 0.3 }}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          <span>sudev.dev</span>
        </motion.a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.06, ease }}
            >
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Get in touch
        </motion.a>
      </nav>
    </motion.header>
  );
}
