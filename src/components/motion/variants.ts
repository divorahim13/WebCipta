/**
 * WebCipta Motion Language
 * Central source of truth for all animation constants.
 * Premium, smooth, intentional — not flashy.
 */

// ── Easings ──────────────────────────────────────────
/** Smooth expo-out. Premium deceleration. Use for reveals. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Smooth ease-in-out. Use for page transitions. */
export const EASE_IN_OUT = [0.45, 0, 0.15, 1] as const;

/** Fast ease for micro-interactions. */
export const EASE_MICRO = [0.25, 0.46, 0.45, 0.94] as const;

// ── Durations (seconds) ──────────────────────────────
export const DUR_MICRO = 0.15;     // button hover, icon
export const DUR_FAST  = 0.28;     // nav states
export const DUR_BASE  = 0.5;      // section reveals
export const DUR_SLOW  = 0.65;     // hero items
export const DUR_PAGE  = 0.3;      // page transitions

// ── Y offsets (px) ───────────────────────────────────
export const Y_SUBTLE  = 12;       // small reveals
export const Y_BASE    = 20;       // standard section reveals
export const Y_HERO    = 28;       // hero items
export const Y_MOBILE  = 10;       // reduced for mobile

// ── Stagger delays (seconds) ─────────────────────────
export const STAGGER_TIGHT  = 0.06;
export const STAGGER_BASE   = 0.08;
export const STAGGER_WIDE   = 0.12;

// ── viewport settings ────────────────────────────────
export const VIEWPORT_ONCE  = { once: true, margin: "-60px" };

// ── Common Variants ──────────────────────────────────

export const fadeUpVariant = {
  hidden: { opacity: 0, y: Y_BASE },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_BASE, ease: EASE_OUT },
  },
};

export const fadeUpSlowVariant = {
  hidden: { opacity: 0, y: Y_HERO },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_SLOW, ease: EASE_OUT },
  },
};

export const fadeVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DUR_BASE, ease: EASE_OUT },
  },
};

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.97, y: Y_SUBTLE },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DUR_BASE, ease: EASE_OUT },
  },
};

export const staggerContainerVariant = (stagger = STAGGER_BASE, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const pageEnterVariant = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_PAGE, ease: EASE_IN_OUT },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.2, ease: EASE_IN_OUT },
  },
};
