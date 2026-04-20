"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainerVariant, fadeUpVariant, VIEWPORT_ONCE } from "./variants";

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  /** true = trigger on scroll (default), false = trigger on mount */
  inView?: boolean;
}

/**
 * Parent container that staggers children reveal.
 * Children must use `motion.div` with `variants={fadeUpVariant}` (or similar).
 * Or wrap each child in <StaggerItem>.
 */
export default function StaggerContainer({
  children,
  stagger = 0.08,
  delayChildren = 0,
  className,
  inView = true,
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  const container = staggerContainerVariant(
    shouldReduce ? 0 : stagger,
    shouldReduce ? 0 : delayChildren
  );

  if (inView) {
    return (
      <motion.div
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual staggered item — use inside StaggerContainer.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUpVariant}>
      {children}
    </motion.div>
  );
}
