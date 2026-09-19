"use client";

import { testimonials } from "@/lib/data";
import Image from "next/image";

/**
 * Testimonials — Asymmetric masonry with mixed photo/text cards
 * Staggered entrance animation
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        padding: "var(--section-padding-y) var(--gutter)",
        backgroundColor: "var(--color-near-black)",
        color: "var(--color-ivory)",
      }}
    >
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <p
            className="text-eyebrow"
            style={{ color: "var(--color-gray-mid)", marginBottom: "1rem" }}
          >
            Kind Words
          </p>
          <h2
            id="testimonials-heading"
            className="text-display-md"
            style={{ color: "var(--color-ivory)" }}
          >
            What our couples{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              remember.
            </em>
          </h2>
        </div>

        {/* Masonry grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(1.25rem, 2.5vw, 2rem)",
            alignItems: "start",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              style={{
                // Alternate vertical offsets for organic feel
                marginTop:
                  i === 1 ? "clamp(2rem, 5vw, 4rem)" :
                  i === 2 ? "clamp(1rem, 2.5vw, 2rem)" : 0,
              }}
            >
              {t.hasPhoto && t.image ? (
                /* Photo testimonial */
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "3/4",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Image
                    src={t.image}
                    alt={`${t.couple} — ${t.destination}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      filter: "grayscale(20%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,10,9,0.7) 0%, transparent 50%)",
                    }}
                  />
                </div>
              ) : (
                /* Text-only: tall card with decorative quote mark */
                <div
                  style={{
                    backgroundColor: "var(--color-charcoal)",
                    padding: "clamp(2rem, 4vw, 3rem)",
                    marginBottom: "1.5rem",
                    minHeight: "clamp(200px, 30vw, 360px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "6rem",
                      lineHeight: 0.8,
                      color: "var(--color-burgundy)",
                      fontStyle: "italic",
                    }}
                  >
                    "
                  </span>
                  <div />
                </div>
              )}

              {/* Quote text */}
              <blockquote style={{ margin: 0 }}>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: "var(--color-ivory)",
                    marginBottom: "1rem",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <footer>
                  <p
                    className="text-eyebrow"
                    style={{ color: "var(--color-gray-mid)" }}
                  >
                    — {t.couple}, {t.destination}
                  </p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-caption"
          style={{
            marginTop: "3rem",
            color: "var(--color-gray-mid)",
            fontStyle: "italic",
          }}
        >
          * Testimonials are representative placeholders. Real client words
          will be added upon confirmation.
        </p>
      </div>
    </section>
  );
}
