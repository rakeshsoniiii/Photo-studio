"use client";

import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis";

/**
 * SmoothScrollProvider
 *
 * Initialises Lenis smooth scroll on mount and destroys it on unmount.
 * Wraps the entire page. Respects prefers-reduced-motion automatically.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let cleanup = false;

    initLenis().then((lenis) => {
      if (cleanup && lenis) {
        lenis.destroy();
      }
    });

    // Refresh ScrollTrigger after all resources load
    const handleLoad = async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { gsap } = await import("gsap");
      gsap.registerPlugin(ScrollTrigger);
      // Small delay to ensure layout is settled
      setTimeout(() => ScrollTrigger.refresh(), 200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      cleanup = true;
      destroyLenis();
    };
  }, []);

  return <>{children}</>;
}
