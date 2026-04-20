"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import {
  EASE_OUT,
  DUR_BASE,
  DUR_SLOW,
  Y_BASE,
  Y_HERO,
  VIEWPORT_ONCE,
} from "./variants";
import { useIsClient } from "@/hooks/useIsClient";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  /** Use "slow" for hero-level items, "base" (default) for section content */
  speed?: "base" | "slow" | "fast";
  /** Y travel in px — defaults to Y_BASE */
  distance?: number;
  className?: string;
  /** If false, animates on mount (for hero). If true (default), triggers on scroll. */
  inView?: boolean;
}

export default function FadeUp({
  children,
  delay = 0,
  speed = "base",
  distance,
  className,
  inView = true,
}: FadeUpProps) {
  const shouldReduce = useReducedMotion();
  const isClient = useIsClient();

  const dur = speed === "slow" ? DUR_SLOW : speed === "fast" ? 0.28 : DUR_BASE;
  const yDist = shouldReduce ? 0 : (distance ?? (speed === "slow" ? Y_HERO : Y_BASE));

  // Before client hydration — render children as-is (no animation, no flash)
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  const variant = {
    hidden: { opacity: 0, y: yDist },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduce ? 0.01 : dur,
        ease: EASE_OUT,
        delay: shouldReduce ? 0 : delay,
      },
    },
  };

  if (inView) {
    return (
      <motion.div
        className={className}
        variants={variant}
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
      variants={variant}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
