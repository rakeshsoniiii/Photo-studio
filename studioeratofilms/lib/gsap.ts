/**
 * GSAP setup for Studio Erato Films.
 *
 * Registers ScrollTrigger. Import this once in layout.tsx.
 * All animation code should import gsap from here to ensure
 * ScrollTrigger is always registered before use.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Refresh all ScrollTrigger instances.
 * Call after fonts and images settle (e.g. onLoad, window.addEventListener('load')).
 */
export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}

/**
 * Kill all ScrollTrigger instances — use in cleanup.
 */
export function killAllScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}
