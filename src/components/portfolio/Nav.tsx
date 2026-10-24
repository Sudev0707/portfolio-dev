"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  const links = [
    { href: "#projects", label: "Apps" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "#highlights", label: "Resume" },
  ];

  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  // Desktop navbar glass effect
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
    boxShadow: useTransform(shadowOpacity, (o) => `0 8px 32px oklch(0 0 0 / ${o})`),
  };

  // Detect mobile scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    const delta = latest - previous;

    if (latest < 80) {
      setMobileNavVisible(true);
    } else if (Math.abs(delta) > 12) {
      // Down = hide, up = show
      setMobileNavVisible(delta < 0);
    }

    lastScrollY.current = latest;
  });

  const closeMenu = () => setMenuOpen(false);

  // Keep navigation visible whenever its menu is open
  const showMobileNav = mobileNavVisible || menuOpen;

  return (
    <>
      {/* Desktop navbar — original layout */}
      <motion.header
        className="pointer-events-none fixed top-0 left-0 right-0 z-50 hidden justify-center px-4 pt-4 sm:px-6 sm:pt-5 md:flex"
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
      >
        <motion.nav
          style={navStyle}
          className="pointer-events-auto grid w-full max-w-4xl grid-cols-[auto_1fr_auto] items-center gap-6 rounded-full border px-4 py-2.5 pl-5 pr-2"
        >
          <motion.a
            href="#"
            className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-foreground"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <BrandLogo />
          </motion.a>

          <ul className="flex items-center justify-center gap-8">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.5 + i * 0.06,
                  ease,
                }}
              >
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
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

      {/* Mobile bottom navigation */}
      <motion.div
        className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:hidden"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: showMobileNav ? 0 : 120,
          opacity: showMobileNav ? 1 : 0,
        }}
        // transition={{ duration: 0.28, ease }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          pointerEvents: showMobileNav ? "auto" : "none",
        }}
      >
        {/* Menu panel and backdrop */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close navigation menu"
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />

              <motion.nav
                aria-label="Mobile navigation"
                className="pointer-events-auto absolute bottom-[calc(100%+0.75rem)] z-50 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-border/70 bg-card p-3 shadow-2xl"
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.22, ease }}
              >
                <div className="mb-2 border-b border-border/60 px-3 pb-3 pt-2">
                  <p className="text-sm font-semibold text-foreground">Navigation</p>
                  <p className="mt-1 text-xs text-muted-foreground">Explore my portfolio</p>
                </div>

                <ul className="space-y-1">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {link.label}
                        <ArrowUpRight className="size-4 text-muted-foreground" />
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/15 px-4 py-3 text-sm font-medium text-foreground"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" />
                </a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>

        {/* Compact, centered floating bar */}
        <motion.div
          style={navStyle}
          className="pointer-events-auto relative z-50 flex w-fit items-center gap-3 rounded-full border p-2 pl-3 shadow-lg backdrop-blur-2xl"
        >
          <a
            href="#"
            onClick={closeMenu}
            aria-label="Go to home"
            className="flex items-center gap-2 rounded-full px-1 py-1"
          >
            <BrandLogo />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="flex items-center gap-2 rounded-full border border-border/70 bg-muted/60 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {menuOpen ? (
              <>
                <X className="size-4" />
                Close
              </>
            ) : (
              <>
                <Menu className="size-4" />
                {/* Menu */}
              </>
            )}
          </button>
        </motion.div>
      </motion.div>
    </>
  );
}
