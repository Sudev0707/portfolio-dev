"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const stats = [
  ["6+", "Years shipping"],
  ["40+", "Projects delivered"],
  ["12", "Open-source repos"],
  ["99.98%", "Avg. uptime"],
] as const;

const hudCorners = [
  "top-6 left-6 border-t-2 border-l-2",
  "top-6 right-6 border-t-2 border-r-2",
  "bottom-6 left-6 border-b-2 border-l-2",
  "bottom-6 right-6 border-b-2 border-r-2",
] as const;

type IntroPhase = "splash" | "wipe" | "done";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function GtaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Ken Burns cityscape silhouettes */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      >
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-background via-background/80 to-transparent" />
        <svg
          className="absolute inset-x-0 bottom-0 h-[38%] w-full opacity-[0.18]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,224 L60,200 L120,220 L180,180 L240,210 L300,160 L360,190 L420,150 L480,200 L540,170 L600,210 L660,140 L720,190 L780,160 L840,200 L900,130 L960,180 L1020,150 L1080,200 L1140,160 L1200,190 L1260,140 L1320,180 L1380,150 L1440,200 L1440,320 L0,320 Z" />
        </svg>
        <svg
          className="absolute inset-x-0 bottom-0 h-[28%] w-full opacity-[0.12]"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,120 L80,100 L160,130 L240,80 L320,110 L400,70 L480,100 L560,60 L640,90 L720,50 L800,85 L880,55 L960,95 L1040,65 L1120,100 L1200,70 L1280,105 L1360,75 L1440,110 L1440,200 L0,200 Z" />
        </svg>
      </motion.div>

      {/* Perspective grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] overflow-hidden opacity-40">
        <div className="gta-perspective-grid absolute inset-0" />
      </div>

      {/* Ambient glow orbs */}
      <motion.div
        className="gta-pulse-glow absolute -top-24 right-[-5%] h-[480px] w-[480px] rounded-full bg-primary/25 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[-8%] h-[360px] w-[360px] rounded-full bg-primary/15 blur-[90px]"
        animate={{ x: [0, -25, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-px w-px rounded-full bg-primary/60 shadow-[0_0_6px_oklch(0.62_0.14_162/0.8)]"
          style={{
            left: `${8 + ((i * 37) % 84)}%`,
            top: `${12 + ((i * 23) % 70)}%`,
          }}
          animate={{
            y: [0, -30 - (i % 3) * 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Light sweep */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="gta-light-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div> */}

      {/* Radial depth + grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.62_0.14_162/0.1),transparent_65%)]" />
      <div className="gta-vignette absolute inset-0" />
      <div className="texture-grid absolute inset-0 opacity-40" />
      <div className="hero-grain absolute inset-0" />
      <div className="gta-scanlines absolute inset-0 opacity-30" />

      {/* Horizontal HUD line */}
      <motion.div
        className="absolute inset-x-0 top-[50%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function GtaIntro({ phase }: { phase: IntroPhase }) {
  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Splash — GTA location card zoom */}
          <AnimatePresence>
            {phase === "splash" && (
              <motion.div
                key="splash"
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.8, filter: "blur(12px)" }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="font-gta text-sm tracking-[0.5em] text-primary md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  WELCOME TO
                </motion.p>
                <motion.h1
                  className="font-gta mt-2 text-[clamp(3.5rem,14vw,9rem)] leading-none text-white"
                  initial={{ opacity: 0, scale: 2.2, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  SUDEV MAJHI
                </motion.h1>
                <motion.div
                  className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent md:w-48"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                />
                <motion.p
                  className="font-gta mt-4 text-lg tracking-[0.35em] text-white/60 md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  SOFTWARE ENGINEER
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Diagonal wipe */}
          <AnimatePresence>
            {phase === "wipe" && (
              <motion.div
                key="wipe"
                className="absolute inset-0 bg-black"
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                animate={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Hero() {
  const [introPhase, setIntroPhase] = useState<IntroPhase>("splash");
  const introDone = introPhase === "done";

  useEffect(() => {
    const splashTimer = setTimeout(() => setIntroPhase("wipe"), 2200);
    const wipeTimer = setTimeout(() => setIntroPhase("done"), 3100);
    return () => {
      clearTimeout(splashTimer);
      clearTimeout(wipeTimer);
    };
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <GtaBackground />
      <GtaIntro phase={introPhase} />

      {/* HUD corner brackets */}
      {hudCorners.map((position) => (
        <motion.div
          key={position}
          className={`pointer-events-none absolute z-10 h-10 w-10 border-primary/50 ${position}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: introDone ? 0.7 : 0, scale: introDone ? 1 : 0.6 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          aria-hidden
        />
      ))}

      {/* Side HUD — mission briefing panel */}
      <motion.aside
        className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: introDone ? 1 : 0, x: introDone ? 0 : 40 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        aria-hidden
      >
        <div className="border border-primary/30 bg-card/20 px-4 py-3 backdrop-blur-sm">
          <p className="font-gta text-[10px] tracking-[0.3em] text-primary">MISSION</p>
          <p className="font-gta mt-1 text-lg tracking-wider text-foreground">BUILD & SHIP</p>
          <div className="mt-3 space-y-1.5">
            {["React ", "React Native", "TypeScript", "Node.js"].map((skill, i) => (
              <motion.div
                key={skill}
                className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: introDone ? 1 : 0, x: introDone ? 0 : 10 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <span className="h-1 w-1 bg-primary" />
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.aside>

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 py-20">
        <div className="max-w-4xl">
          {/* Location subtitle — GTA style */}
          <motion.div
            custom={0.05}
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-3 rounded-full border-primary/40 bg-black/40 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-gta text-xs tracking-[0.25em] text-primary md:text-sm">
                AVAILABLE · 2026
              </span>
              <span className="hidden h-3 w-px bg-primary/40 sm:block" />
              <span className="hidden font-gta text-xs tracking-[0.2em] text-muted-foreground sm:inline">
                MOBILE & FULL-STACK
              </span>
            </div>
          </motion.div>

          {/* Main headline — slam in from scale */}
          <div className="mt-8 space-y-0 md:mt-10">
            <motion.h4
              className="font-gta text-balance text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] tracking-wide text-foreground"
              initial={{ opacity: 0, scale: 1.4, y: 40, filter: "blur(10px)" }}
              animate={
                introDone
                  ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, scale: 1.4, y: 40, filter: "blur(10px)" }
              }
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              CRAFTING MOBILE APPS
            </motion.h4>

            <motion.h4
              className="font-gta text-balance text-[clamp(1.8rem,6vw,4rem)] leading-[0.95] tracking-wide text-foreground"
              initial={{ opacity: 0, scale: 1.4, y: 40, filter: "blur(10px)" }}
              animate={
                introDone
                  ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, scale: 1.4, y: 40, filter: "blur(10px)" }
              }
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              AND SOFTWARE THAT
            </motion.h4>

            <motion.h4
              className="font-gta accent-text text-balance text-[clamp(1.8rem,6vw,4rem)] leading-[0.95] tracking-wide"
              initial={{ opacity: 0, scale: 1.5, x: -30 }}
              animate={
                introDone
                  ? { opacity: 1, scale: 1, x: 0 }
                  : { opacity: 0, scale: 1.5, x: -30 }
              }
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              SHIPS.
            </motion.h4>
            <motion.p
              className="font-gta mt-2 text-2xl tracking-[0.2em] text-muted-foreground md:text-3xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: introDone ? 1 : 0, x: introDone ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              RELIABLY. BEAUTIFULLY.
            </motion.p>
          </div>

          <motion.p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:mt-10 md:text-xl"
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            custom={0.2}
            variants={fadeUp}
          >
            I&apos;m <span className="text-primary font-bricolage text-2xl font-bold">Sudev Majhi</span> — a mobile and full-stack engineer focused on
            native-quality experiences, performance, and the interaction details
            that make products feel inevitable.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            custom={0.35}
            variants={fadeUp}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden border border-primary/60 bg-primary/90 px-6 py-3 font-gta text-sm tracking-[0.15em] text-primary-foreground shadow-[0_0_40px_oklch(0.62_0.14_162/0.3)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">VIEW WORK</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border/80 bg-black/30 px-6 py-3 font-gta text-sm tracking-[0.15em] text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
            >
              CONTACT
            </a>
          </motion.div>

          {/* Stats — GTA HUD bars */}
          {/* <motion.dl
            className="mt-20 grid grid-cols-2 gap-6 border-t border-primary/20 pt-10 sm:grid-cols-4"
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            custom={0.5}
            variants={fadeUp}
          >
            {stats.map(([value, label], i) => (
              <motion.div
                key={label}
                className="relative border border-border/40 bg-card/10 p-4 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.6 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/60" />
                <dt className="font-gta text-3xl tracking-wide text-foreground md:text-4xl">
                  {value}
                </dt>
                <dd className="mt-1 font-gta text-[10px] tracking-[0.2em] text-muted-foreground">
                  {label.toUpperCase()}
                </dd>
              </motion.div>
            ))}
          </motion.dl> */}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 0.5 : 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden
      >
        <span className="font-gta text-[10px] tracking-[0.4em] text-muted-foreground">
          SCROLL
        </span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Coordinates HUD — bottom left */}
      <motion.div
        className="pointer-events-none absolute bottom-8 left-6 z-20 hidden font-mono text-[10px] text-muted-foreground/60 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 0.6 : 0 }}
        transition={{ delay: 1.2 }}
        aria-hidden
      >
        <span className="text-primary/80">LAT</span> 22.5726° N ·{" "}
        <span className="text-primary/80">LNG</span> 88.3639° E
      </motion.div>
    </section>
  );
}
