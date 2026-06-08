"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { ease } from "./motion";

function BrandLogo() {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/15 p-1.5">
      <svg viewBox="0 0 20 22" className="h-full w-full" aria-hidden>
        <path
          d="M10 1L2 4.5v6.75c0 4.7 3.05 9.1 8 10.25 4.95-1.15 8-5.55 8-10.25V4.5L10 1z"
          className="fill-primary"
        />
        <text
          x="10"
          y="14.5"
          textAnchor="middle"
          className="fill-primary-foreground"
          fontSize="9"
          fontWeight="700"
          fontFamily="system-ui, sans-serif"
        >
          S
        </text>
      </svg>
    </div>
  );
}

export function Nav() {
  const links = [
    { href: "#projects", label: "Apps" },
    { href: "#about", label: "About" },
    { href: "#highlights", label: "Principles" },
    { href: "#contact", label: "Contact" },
  ];

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, { stiffness: 120, damping: 28, mass: 0.4 });

  const blur = useTransform(smoothScroll, [0, 120], [14, 22]);
  const bgOpacity = useTransform(smoothScroll, [0, 120], [0.32, 0.72]);
  const borderOpacity = useTransform(smoothScroll, [0, 120], [0.35, 0.65]);
  const shadowOpacity = useTransform(smoothScroll, [0, 120], [0.12, 0.38]);

  const navStyle = {
    backgroundColor: useTransform(
      bgOpacity,
      (o) => `color-mix(in oklch, var(--card) ${Math.round(o * 100)}%, transparent)`,
    ),
    backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(1.6)`),
    WebkitBackdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(1.6)`),
    borderColor: useTransform(
      borderOpacity,
      (o) => `color-mix(in oklch, var(--border) ${Math.round(o * 100)}%, transparent)`,
    ),
    boxShadow: useTransform(
      shadowOpacity,
      (o) => `0 8px 32px oklch(0 0 0 / ${o})`,
    ),
  };

  return (
    <motion.header
      className="pointer-events-none fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-5"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease, delay: 0.3 }}
    >
      <motion.nav
        style={navStyle}
        className="pointer-events-auto grid w-full max-w-4xl grid-cols-[1fr_auto] items-center gap-3 rounded-full border px-3 py-2 pl-4 md:grid-cols-[auto_1fr_auto] md:gap-6 md:px-4 md:py-2.5 md:pl-5 md:pr-2"
      >
        <motion.a
          href="#"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <BrandLogo />
          <span>sudev.dev</span>
        </motion.a>

        <ul className="hidden items-center justify-center gap-8 md:flex">
          {links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.06, ease }}
            >
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="group flex items-center gap-2.5 justify-self-end rounded-full border border-primary/30 bg-primary/15 py-1.5 pl-4 pr-1.5 text-sm font-medium text-foreground transition-[transform,box-shadow] hover:shadow-[0_4px_20px_oklch(0.62_0.14_162/25%)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="whitespace-nowrap">Get in touch</span>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary transition-transform group-hover:rotate-12">
            <ArrowUpRight className="size-3.5 text-primary-foreground" strokeWidth={2.5} />
          </span>
        </motion.a>
      </motion.nav>
    </motion.header>
  );
}
