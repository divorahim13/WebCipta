"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { EASE_IN_OUT } from "./variants";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: EASE_IN_OUT },
        }}
        exit={{
          opacity: 0,
          y: -4,
          transition: { duration: 0.18, ease: EASE_IN_OUT },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
