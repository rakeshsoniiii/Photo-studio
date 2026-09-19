/**
 * Lenis smooth-scroll setup for Studio Erato Films.
 *
 * Lenis is the smooth-scroll engine.
 * GSAP ScrollTrigger is updated via Lenis's RAF.
 * This file exports an init function to be called once inside a Client Component.
 */

import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/**
 * Initialise Lenis and sync it with GSAP's ticker.
 * Safe to call only on the client.
 * Respects prefers-reduced-motion.
 */
export async function initLenis(): Promise<Lenis | null> {
  if (typeof window === "undefined") return null;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReduced) {
    // Do not initialise Lenis. Content remains statically accessible.
    return null;
  }

  const [{ default: LenisClass }, { gsap }, { ScrollTrigger }] =
    await Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new LenisClass({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  });

  // Sync Lenis scroll position with ScrollTrigger
  lenis.on("scroll", () => ScrollTrigger.update());

  // Drive Lenis via GSAP's ticker so both share the same RAF loop
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  lenisInstance = lenis;
  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
