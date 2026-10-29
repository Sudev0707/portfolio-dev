
"use client";

import { motion } from "motion/react";
import treats24Banner from "@/assets/image/Treats24_ Local Delivery for Howrah.png";
import treats24MobileBanner from "@/assets/image/Treats24_Mobile.jpeg";

import { Section } from "./Section";
import { fadeUp, viewport } from "./motion";

const treats24Url = "https://www.treats24.com/";

export function CurrentlyBuilding() {
  return (
    <Section
      id="currently-building"
      eyebrow="Currently Building"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeUp}
      >
        <motion.div
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card"
          initial="rest"
          whileHover="hover"
        >
          {/* Desktop Banner - Only button is clickable */}
          <div className="hidden md:block">
            <img
              src={treats24Banner}
              alt="Treats24 — Local Delivery for Howrah"
              className="block h-auto w-full object-cover"
            />
          </div>

          {/* Mobile Banner - Entire image is clickable */}
          <a
            href={treats24Url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Treats24"
            className="block md:hidden"
          >
            <img
              src={treats24MobileBanner}
              alt="Treats24 — Local Delivery for Howrah"
              className="block h-auto w-full object-cover"
            />
          </a>

          {/* Desktop Explore Button */}
          <motion.a
            href={treats24Url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Treats24 website"
            variants={{
              rest: {
                opacity: 0,
                y: 40,
              },
              hover: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-black px-7 py-3 text-sm font-semibold text-emerald-500 shadow-xl hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:inline-flex"
          >
            Explore

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
