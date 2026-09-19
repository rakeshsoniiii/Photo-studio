"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — Luxury Cinematic Cursor
 *
 * - Crisp white dot + lagging outer ring with difference blend mode
 * - Perfectly visible everywhere (inverts on light backgrounds to deep black,
 *   inverts on dark backgrounds to bright white)
 * - Expands on links/buttons
 * - Expands to "PLAY" on reel & film elements
 * - Seamless lerp animation
 * - Disabled on touch devices and prefers-reduced-motion
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;
    let isHoveringInteractive = false;
    let isPlayHover = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) setHasMoved(true);

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      // Ring follows with smooth luxury lerp
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      const scale = isPlayHover ? 2.4 : isHoveringInteractive ? 1.5 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // Track hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const playTarget = target.closest("[data-cursor='play'], video");

      if (playTarget) {
        isPlayHover = true;
        isHoveringInteractive = false;
        if (label) {
          label.textContent = "PLAY";
          label.style.opacity = "1";
        }
      } else if (interactive) {
        isHoveringInteractive = true;
        isPlayHover = false;
        if (label) label.style.opacity = "0";
      } else {
        isHoveringInteractive = false;
        isPlayHover = false;
        if (label) label.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-active");
    };
  }, [hasMoved]);

  return (
    <>
      {/* Immediate center dot — Pure white with difference blend mode for 100% universal visibility */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          pointerEvents: "none",
          zIndex: 999999,
          transform: "translate3d(-100px, -100px, 0)",
          marginLeft: "-3.5px",
          marginTop: "-3.5px",
          mixBlendMode: "difference",
          opacity: hasMoved ? 1 : 0,
          transition: "opacity 0.2s ease",
          willChange: "transform",
        }}
      />

      {/* Trailing luxury ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid #ffffff",
          pointerEvents: "none",
          zIndex: 999998,
          transform: "translate3d(-100px, -100px, 0)",
          marginLeft: "-18px",
          marginTop: "-18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mixBlendMode: "difference",
          opacity: hasMoved ? 1 : 0,
          transition: "opacity 0.2s ease, border-color 0.2s ease",
          willChange: "transform",
        }}
      >
        <span
          ref={labelRef}
          style={{
            opacity: 0,
            fontSize: "0.5rem",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#ffffff",
            transition: "opacity 0.2s ease",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          PLAY
        </span>
      </div>
    </>
  );
}
