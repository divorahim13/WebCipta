"use client";

/**
 * useIsClient — returns true only after client-side hydration.
 * Prevents Framer Motion from receiving initial=hidden during SSR
 * which causes it to skip animation entirely on first load.
 */
import { useState, useEffect } from "react";

export function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}
