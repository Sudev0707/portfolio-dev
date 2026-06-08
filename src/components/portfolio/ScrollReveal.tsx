"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, staggerItem, viewport } from "./motion";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variants?: Variants;
};

export function ScrollReveal({
  children,
  variants = fadeUp,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variants?: Variants;
};

export function Stagger({
  children,
  variants,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants ?? staggerContainer}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variants?: Variants;
};

export function StaggerItem({
  children,
  variants,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div variants={variants ?? staggerItem} {...props}>
      {children}
    </motion.div>
  );
}
