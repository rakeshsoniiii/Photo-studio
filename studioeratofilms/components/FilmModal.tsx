"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { films } from "@/lib/data";

interface FilmModalProps {
  film: (typeof films)[0];
  onClose: () => void;
}

/**
 * FilmModal — Fullscreen film player
 *
 * - Dark overlay
 * - Escape to close
 * - Focus trap
 * - Body scroll lock
 * - Lazy-loaded player (placeholder for real video)
 */
export default function FilmModal({ film, onClose }: FilmModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    document.body.classList.add("scroll-locked");
    closeBtnRef.current?.focus();

    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, []);

  // Escape key + focus trap
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "Tab") {
        const focusables = overlayRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // GSAP entrance
  useEffect(() => {
    const setup = async () => {
      const { gsap } = await import("gsap");
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.45, ease: "power2.out" }
        );
      }
    };
    setup();
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Film: ${film.title}`}
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10,10,9,0.96)",
        zIndex: "var(--z-menu)" as unknown as number,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--gutter)",
      }}
    >
      {/* Close button */}
      <button
        ref={closeBtnRef}
        onClick={onClose}
        aria-label="Close film player"
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "var(--gutter)",
          background: "none",
          border: "none",
          color: "var(--color-ivory)",
          cursor: "pointer",
          opacity: 0.7,
          zIndex: 10,
          transition: "opacity 0.2s",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Close
        </span>
        <X size={16} />
      </button>

      {/* Player area */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          aspectRatio: "16/9",
          position: "relative",
          backgroundColor: "var(--color-charcoal)",
        }}
      >
        {film.videoUrl === "#" ? (
          // Placeholder — real video not available yet
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              backgroundImage: `url(${film.poster})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(10,10,9,0.55)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.25rem, 3vw, 2rem)",
                  color: "var(--color-ivory)",
                  marginBottom: "0.5rem",
                }}
              >
                {film.title}
              </p>
              <p
                className="text-eyebrow"
                style={{ color: "var(--color-gray-mid)" }}
              >
                {film.couple} · {film.destination}
              </p>
              <p
                className="text-eyebrow"
                style={{
                  color: "var(--color-gold)",
                  marginTop: "1.5rem",
                  fontSize: "0.6rem",
                }}
              >
                Film coming soon
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={film.videoUrl}
            title={film.title}
            allow="autoplay; fullscreen"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        )}
      </div>
    </div>
  );
}
