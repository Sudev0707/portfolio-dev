"use client";

import { motion } from "motion/react";
import profileImg from "@/assets/image/profileImg.png";
import { Section } from "./Section";
import {
  slideInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "./motion";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={<></>}>
      <div className="grid items-start gap-12 md:grid-cols-[2fr_1fr]">
        <motion.div
          className="space-y-5 text-base leading-relaxed text-muted-foreground"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          {[
            <h1 className="font-bricolage text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Hey, I'm <span className="text-primary">Sudev</span>
            </h1>,

            <>
              Over the past few years, I've been building web and mobile
              applications — from personal projects to production-ready
              products focused on performance, scalability, and usability.
            </>,

            <>
              My work sits at the intersection of{" "}
              <span className="text-foreground">
                software engineering
              </span>
              ,{" "}
              <span className="text-foreground">
                product development
              </span>
              , and{" "}
              <span className="text-foreground">
                user experience
              </span>
              . I focus on clean code, scalable systems, and intuitive
              interfaces that deliver real value.
            </>,

            <>
              Based in India, I'm constantly learning and building,
              turning ideas into thoughtful digital products and meaningful
              user experiences.
            </>,
          ].map((text, i) => (
            <motion.div key={i} variants={staggerItem}>
              {text}
            </motion.div>
          ))}

          <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { label: "Currently", value: "Software Developer" },
              { label: "Location", value: "India" },
              { label: "Focus", value: "Web, Mobile & AI Applications" },
            ].map((item) => (
              <motion.div key={item.label} variants={staggerItem}>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-foreground">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInRight}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="aspect-[3/4] w-full max-w-sm rounded-2xl border border-border object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </Section>
  );
}