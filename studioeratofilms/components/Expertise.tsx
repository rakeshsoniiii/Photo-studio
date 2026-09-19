"use client";

import Image from "next/image";
import { expertise } from "@/lib/data";

/**
 * Expertise — Image-led service cards
 * 3 services: Destination Weddings, Editorial Photography, Wedding Storytelling
 */
export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{
        padding: "var(--section-padding-y) var(--gutter)",
        backgroundColor: "var(--color-ivory)",
      }}
    >
      <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <p className="text-eyebrow" style={{ marginBottom: "1rem" }}>
            What We Do
          </p>
          <h2
            id="expertise-heading"
            className="text-display-md"
            style={{ maxWidth: "20ch" }}
          >
            Photography{" "}
            <em style={{ fontStyle: "italic" }}>and film</em>,{" "}
            done together.
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
        >
          {expertise.map((item, i) => (
            <div key={item.id}>
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  aspectRatio: i === 1 ? "4/5" : "3/4",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.7s var(--ease-cinematic)",
                  }}
                  className="expertise-img"
                />
              </div>

              {/* Number + Title + Desc */}
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.6rem",
                    color: "var(--color-gray-mid)",
                    letterSpacing: "0.1em",
                    paddingTop: "0.3rem",
                    minWidth: "1.5rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      fontWeight: 400,
                      color: "var(--color-near-black)",
                      marginBottom: "0.6rem",
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-body" style={{ color: "var(--color-gray-mid)", maxWidth: "28ch" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .expertise-img { }
        div:hover > div > .expertise-img { transform: scale(1.04); }
      `}</style>
    </section>
  );
}
