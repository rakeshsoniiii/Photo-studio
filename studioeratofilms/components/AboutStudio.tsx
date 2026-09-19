"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * AboutStudio — Calm warm-cream section after the gallery drama
 *
 * Left: portrait image (gentle entrance)
 * Right: editorial copy
 */
export default function AboutStudio() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setup = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Image entrance
        if (imgRef.current) {
          gsap.fromTo(
            imgRef.current,
            { opacity: 0, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
              },
            }
          );
        }

        // Copy entrance
        if (copyRef.current) {
          const els = copyRef.current.querySelectorAll(".about-animate");
          gsap.fromTo(
            els,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 65%",
              },
            }
          );
        }
      }, sectionRef);

      return () => ctx.revert();
    };

    setup();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      style={{
        padding: "var(--section-padding-y) var(--gutter)",
        backgroundColor: "var(--color-cream)",
        color: "var(--color-near-black)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 7rem)",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: portrait image */}
        <div
          ref={imgRef}
          style={{
            position: "relative",
            aspectRatio: "3/4",
            overflow: "hidden",
          }}
        >
          <Image
            src="/media/661409090_18345582982213275_1842429382387803767_n.jpg"
            alt="Studio Erato Films — behind the stories"
            fill
            sizes="(max-width: 768px) 90vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Right: copy */}
        <div ref={copyRef}>
          <p
            className="text-eyebrow about-animate"
            style={{ marginBottom: "1.5rem" }}
          >
            Behind the Stories
          </p>

          <h2
            id="about-heading"
            className="text-display-md about-animate"
            style={{ marginBottom: "1.75rem" }}
          >
            Studio Erato Films
          </h2>

          <div
            className="about-animate"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <p className="text-body-lg">
              We believe weddings are not events to be photographed — they are
              stories to be witnessed. Every frame we make is guided by
              documentary instinct and editorial intention.
            </p>
            <p className="text-body-lg">
              Based in Ranchi, Jharkhand, we travel across India capturing
              destination weddings with the precision of a film set and the
              warmth of people who genuinely care about your story.
            </p>
            <p className="text-body-lg">
              Limited to 30 weddings a year, so every couple receives our
              complete attention.
            </p>
          </div>

          {/* Canon note — pending exact confirmation */}
          <div
            className="about-animate"
            style={{
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-gray-light)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "1.5rem",
                height: "1px",
                backgroundColor: "var(--color-gold)",
                flexShrink: 0,
              }}
            />
            <span
              className="text-eyebrow"
              style={{ color: "var(--color-charcoal)" }}
            >
              Canon India Educator
              {/* TODO: confirm exact Canon wording with client */}
            </span>
          </div>

          <div className="about-animate" style={{ marginTop: "2.5rem" }}>
            <a href="#contact" className="btn-primary">
              Start Your Story
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
