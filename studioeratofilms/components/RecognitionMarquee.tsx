"use client";

import { recognitionItems } from "@/lib/data";

/**
 * RecognitionMarquee — Slow infinite credibility ticker
 *
 * Very slow left-to-right motion, pauses on hover.
 * Reduced motion: static list.
 * NOTE: Canon India credit pending exact wording confirmation from client.
 */
export default function RecognitionMarquee() {
  // Duplicate items to create seamless loop
  const items = [...recognitionItems, ...recognitionItems];

  return (
    <section
      aria-label="Studio recognition and credentials"
      style={{
        borderTop: "1px solid var(--color-cream)",
        borderBottom: "1px solid var(--color-cream)",
        overflow: "hidden",
        paddingBlock: "1.25rem",
      }}
    >
      <div
        className="marquee-container"
        aria-hidden="true"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          className="marquee-inner direction-left"
          style={{ animationDuration: "28s" }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                paddingRight: "2.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-charcoal)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
              {/* Dot separator */}
              <span
                style={{
                  width: "3px",
                  height: "3px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-gold)",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Accessible text for screen readers */}
      <div className="sr-only">
        <ul>
          {recognitionItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
