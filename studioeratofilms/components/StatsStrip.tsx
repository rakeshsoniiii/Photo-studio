"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

/**
 * StatsStrip — Large rounded pill with studio positioning stats
 * Animates in with fade + rise on scroll entry
 */
export default function StatsStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setup = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          }
        );

        // Stagger the individual stat items
        gsap.fromTo(
          el.querySelectorAll(".stat-item"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      return () => ctx.revert();
    };

    setup();
  }, []);

  return (
    <section
      aria-label="Studio positioning"
      style={{
        padding: "0 var(--gutter)",
        paddingBottom: "clamp(3rem, 6vw, 6rem)",
      }}
    >
      <div
        ref={stripRef}
        style={{
          backgroundColor: "var(--color-near-black)",
          borderRadius: "100px",
          padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(2rem, 5vw, 4rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "1.5rem",
          maxWidth: "var(--content-max)",
          margin: "0 auto",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="stat-item"
            style={{
              textAlign: "center",
              color: "var(--color-ivory)",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
                fontWeight: 300,
                lineHeight: 1,
                marginBottom: "0.4rem",
                letterSpacing: "-0.01em",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.65rem",
                fontWeight: 400,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-gray-mid)",
              }}
            >
              {stat.label}
            </div>

            {/* Divider between items */}
            {i < stats.length - 1 && (
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: "calc(-1 * clamp(0.75rem, 2.5vw, 2rem))",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1px",
                  height: "2rem",
                  backgroundColor: "rgba(255,255,255,0.12)",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
