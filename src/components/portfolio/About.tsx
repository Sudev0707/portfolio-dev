"use client";

import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";
import profileImg from "@/assets/image/profileImg.png";
import signatureImg from "@/assets/image/signature.png";
import { CAL_BOOKING_URL, profileFacts, socialLinks } from "@/lib/profile";
import { Section } from "./Section";
import {
  fadeUp,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "./motion";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={<></>} className="pt-24">
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

            // <>
            //   Based in India, I'm constantly learning and building,
            //   turning ideas into thoughtful digital products and meaningful
            //   user experiences.
            // </>,
          ].map((text, i) => (
            <motion.div key={i} variants={staggerItem}>
              {text}
            </motion.div>
          ))}

          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            variants={staggerItem}
          >
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={CAL_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
            >
              <Calendar className="h-4 w-4" />
              Book a free call
            </a>
          </motion.div>

          {/* <div className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {profileFacts.map((item) => (
              <motion.div key={item.label} variants={staggerItem}>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-foreground">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div> */}

          <motion.div
            className="mt-12 flex justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <img src={signatureImg} alt="Signature" className="w-45 h-25 object-contain" />
            <div className="flex items-end gap-2">
              <Link
                to="/about"
                className="group inline-flex rounded-full items-center gap-2  border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                Know more about me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </motion.div>
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