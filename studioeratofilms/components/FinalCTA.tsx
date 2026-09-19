"use client";

import { useEffect, useRef } from "react";

/**
 * FinalCTA — Cinematic closing section
 *
 * Two diagonal marquee bands (opposing directions, ±3°)
 * Large circular "START YOUR STORY" button with magnetic hover
 * Main closing copy
 */
export default function FinalCTA() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // ── Magnetic button effect (desktop only) ─────────────────
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 140;

      if (dist < maxDist) {
        const factor = 1 - dist / maxDist;
        btn.style.transform = `translate(${dx * factor * 0.35}px, ${dy * factor * 0.35}px)`;
      } else {
        btn.style.transform = "translate(0,0)";
      }
    };

    const onMouseLeave = () => {
      btn.style.transform = "translate(0,0)";
      btn.style.transition = "transform 0.4s var(--ease-entrance)";
    };

    const onMouseEnter = () => {
      btn.style.transition = "transform 0.1s linear";
    };

    window.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseenter", onMouseEnter);
    btn.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseenter", onMouseEnter);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const marquee1Items = "WEDDINGS · DESTINATIONS · FILMS · LOVE · STORIES · ";
  const marquee2Items = "MEMORIES · EDITORIAL · FOREVER · CELEBRATIONS · INDIA · ";

  return (
    <section
      ref={sectionRef}
      aria-labelledby="final-cta-heading"
      style={{
        position: "relative",
        backgroundColor: "var(--color-near-black)",
        color: "var(--color-ivory)",
        paddingBlock: "clamp(6rem, 12vw, 10rem)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "clamp(3rem, 6vw, 5rem)",
      }}
    >
      {/* ── Main heading ───────────────────────────── */}
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          padding: "0 var(--gutter)",
        }}
      >
        <h2
          id="final-cta-heading"
          className="text-display-lg"
          style={{
            color: "var(--color-ivory)",
            maxWidth: "22ch",
            margin: "0 auto",
          }}
        >
          You&apos;ve seen our stories.{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "var(--color-gold)",
              display: "block",
            }}
          >
            Now let&apos;s hear yours.
          </em>
        </h2>
      </div>

      {/* ── Marquee band 1 (left direction, rotated +3°) ─── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "150%",
          left: "-25%",
          top: "18%",
          transform: "rotate(3deg)",
          overflow: "hidden",
          opacity: 0.08,
        }}
      >
        <div
          className="marquee-inner direction-left"
          style={{ animationDuration: "22s" }}
        >
          {[...marquee1Items.repeat(6)].join("").split("").reduce(
            (acc, _, i, arr) =>
              i % marquee1Items.length === 0
                ? acc + marquee1Items
                : acc,
            ""
          ) || marquee1Items.repeat(4)}
          {marquee1Items.repeat(4)}
        </div>
      </div>

      {/* ── Marquee band 2 (right direction, rotated -3°) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "150%",
          left: "-25%",
          bottom: "18%",
          transform: "rotate(-3deg)",
          overflow: "hidden",
          opacity: 0.08,
        }}
      >
        <div
          className="marquee-inner direction-right"
          style={{ animationDuration: "26s" }}
        >
          {marquee2Items.repeat(4)}
        </div>
      </div>

      {/* ── Circular CTA ─────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <a
          ref={buttonRef}
          href="#contact"
          className="btn-circle"
          aria-label="Start your story — contact Studio Erato Films"
          style={{
            transition:
              "transform 0.4s var(--ease-entrance), background-color 0.3s ease",
            willChange: "transform",
            textAlign: "center",
            lineHeight: 1.4,
            padding: "0 1rem",
          }}
        >
          START
          <br />
          YOUR STORY
        </a>

        <p
          className="text-eyebrow"
          style={{ color: "var(--color-gray-mid)", letterSpacing: "0.2em" }}
        >
          Limited spots available
        </p>
      </div>

      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,9,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      <style>{`
        .marquee-inner {
          font-family: var(--font-body);
          font-size: clamp(1.25rem, 2.5vw, 2rem);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-ivory);
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
