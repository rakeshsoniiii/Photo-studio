"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { featuredStories } from "@/lib/data";

/**
 * FeaturedStories — 3 editorial story cards with clip-path reveal
 *
 * Each card:
 * - Large portrait/landscape image with clip-path reveal
 * - Image scale 1.07 → 1 on entrance
 * - Text rises 50px on entrance
 * - Hover: VIEW STORY ↗
 */
export default function FeaturedStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const setup = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        cardsRef.current.forEach((card, i) => {
          if (!card) return;

          const imgWrapper = card.querySelector(".story-img-wrapper");
          const img = card.querySelector(".story-img-inner");
          const meta = card.querySelector(".story-meta");

          gsap.set(imgWrapper, { clipPath: "inset(0 0 100% 0)" });
          gsap.set(img, { scale: 1.07 });
          gsap.set(meta, { opacity: 0, y: 50 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          });

          tl.to(imgWrapper, {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "power4.inOut",
          })
            .to(
              img,
              { scale: 1, duration: 1.4, ease: "power3.out" },
              "-=1.2"
            )
            .to(
              meta,
              { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
              "-=0.8"
            );
        });
      }, sectionRef);

      return () => ctx.revert();
    };

    setup();
  }, []);

  return (
    <section
      id="stories"
      ref={sectionRef}
      aria-labelledby="stories-heading"
      style={{
        padding: "var(--section-padding-y) var(--gutter)",
        backgroundColor: "var(--color-ivory)",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            Selected Stories
          </p>
          <h2
            id="stories-heading"
            className="text-display-lg"
            style={{ maxWidth: "18ch" }}
          >
            Weddings that{" "}
            <em style={{ fontStyle: "italic" }}>stay with you.</em>
          </h2>
        </div>
        <a
          href="#stories"
          className="btn-secondary"
          style={{ flexShrink: 0 }}
        >
          View All Stories
        </a>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 2rem)",
          alignItems: "start",
        }}
      >
        {featuredStories.map((story, i) => (
          <div
            key={story.id}
            ref={(el) => { cardsRef.current[i] = el; }}
            style={{
              // Offset middle card upward on desktop for asymmetry
              marginTop: i === 1 ? "clamp(2rem, 5vw, 4rem)" : 0,
            }}
          >
            <a
              href={story.href}
              aria-label={`View story: ${story.title} — ${story.couple}, ${story.destination}`}
              style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Image */}
              <div
                className="story-img-wrapper"
                style={{
                  position: "relative",
                  aspectRatio: i === 1 ? "3/4" : "4/5",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  className="story-img-inner"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transformOrigin: "center center",
                  }}
                >
                  <Image
                    src={story.image}
                    alt={`${story.couple} — ${story.destination}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                {/* Hover overlay */}
                <div
                  className="story-hover-overlay"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(10,10,9,0)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                    transition: "background-color 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(10,10,9,0.35)";
                    const label = e.currentTarget.querySelector(
                      ".view-story-label"
                    ) as HTMLElement | null;
                    if (label) {
                      label.style.opacity = "1";
                      label.style.transform = "translateY(0)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(10,10,9,0)";
                    const label = e.currentTarget.querySelector(
                      ".view-story-label"
                    ) as HTMLElement | null;
                    if (label) {
                      label.style.opacity = "0";
                      label.style.transform = "translateY(8px)";
                    }
                  }}
                >
                  <span
                    className="view-story-label"
                    style={{
                      color: "var(--color-ivory)",
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      opacity: 0,
                      transform: "translateY(8px)",
                      transition:
                        "opacity 0.35s ease, transform 0.35s ease",
                    }}
                  >
                    View Story ↗
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="story-meta">
                <p
                  className="text-eyebrow"
                  style={{ marginBottom: "0.4rem" }}
                >
                  {story.destination}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "var(--color-near-black)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {story.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "var(--color-gray-mid)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {story.couple}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
