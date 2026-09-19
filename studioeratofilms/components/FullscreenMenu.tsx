"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { navLinks, studioInfo } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

// Inline SVG icons for platforms not in this lucide version
const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * FullscreenMenu — Signature interaction
 *
 * Opens as a full-screen black cinematic overlay.
 * Closes with a theatrical curtain-upward animation via GSAP + SVG clip-path.
 *
 * Layout:
 * - Left: narrow monochrome wedding image
 * - Center: large numbered italic serif nav links
 * - Right: contact + social info
 *
 * Animation:
 * - Open: overlay fades/slides in, links stagger up
 * - Close: overlay animates upward with curved bottom edge (curtain effect)
 *   duration ~1.2s, ease power4.inOut
 */
export default function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const clipRef = useRef<SVGSVGElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const gsapCtxRef = useRef<gsap.Context | null>(null);

  // Animate open
  const animateOpen = useCallback(async () => {
    if (!overlayRef.current || !linksRef.current) return;

    const { gsap } = await import("gsap");
    const overlay = overlayRef.current;
    const links = linksRef.current.querySelectorAll("li");

    // Kill any running animations
    gsapCtxRef.current?.kill();

    const ctx = gsap.context(() => {
      // Reset clip-path to fully cover
      gsap.set(overlay, { yPercent: 0, visibility: "visible" });
      gsap.set(links, { opacity: 0, y: 60 });

      const tl = gsap.timeline();

      // Overlay slides down from top (initially off-screen top, comes to 0)
      tl.fromTo(
        overlay,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.8, ease: "power4.inOut" }
      );

      // Links stagger in
      tl.to(
        links,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.06,
        },
        "-=0.3"
      );
    });

    gsapCtxRef.current = ctx;
  }, []);

  // Animate close — SIGNATURE curtain-upward effect
  const animateClose = useCallback(
    async (onComplete: () => void) => {
      if (!overlayRef.current || !linksRef.current) return;

      const { gsap } = await import("gsap");
      const overlay = overlayRef.current;
      const links = linksRef.current.querySelectorAll("li");
      const svgEl = clipRef.current;

      gsapCtxRef.current?.kill();

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            onComplete();
            gsap.set(overlay, { yPercent: -100, visibility: "hidden" });
          },
        });

        // Links fade out quickly
        tl.to(links, {
          opacity: 0,
          y: -30,
          duration: 0.35,
          ease: "power2.in",
          stagger: 0.03,
        });

        // Animate the SVG curved bottom edge upward (curtain effect)
        // The SVG path bottom curve moves up while overlay moves up
        if (svgEl) {
          const path = svgEl.querySelector("#curtain-path");
          if (path) {
            // Animate the quadratic bezier control point upward
            // to create a sweeping curved exit
            const obj = { progress: 0 };
            tl.to(
              obj,
              {
                progress: 1,
                duration: 1.2,
                ease: "power4.inOut",
                onUpdate() {
                  const p = obj.progress;
                  // Control point rises from 100% to 0%
                  const controlY = 100 - p * 130; // dips below then rises
                  const endY = 100 - p * 100;
                  path.setAttribute(
                    "d",
                    `M0 0 L100 0 L100 ${endY} Q50 ${controlY} 0 ${endY} Z`
                  );
                },
              },
              "-=0.25"
            );
          }
        }

        // Overlay moves up
        tl.to(
          overlay,
          {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=1.2"
        );
      });

      gsapCtxRef.current = ctx;
    },
    []
  );

  // Open/close effects
  useEffect(() => {
    if (isOpen) {
      animateOpen();
      document.body.classList.add("scroll-locked");
      // Focus first link
      setTimeout(() => firstFocusableRef.current?.focus(), 850);
    }
  }, [isOpen, animateOpen]);

  const handleClose = useCallback(() => {
    animateClose(() => {
      document.body.classList.remove("scroll-locked");
      onClose();
    });
  }, [animateClose, onClose]);

  // Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();

      // Focus trap
      if (e.key === "Tab") {
        const focusables = overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
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
  }, [isOpen, handleClose]);

  return (
    <div
      ref={overlayRef}
      id="fullscreen-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--color-near-black)",
        zIndex: "var(--z-menu)" as unknown as number,
        visibility: "hidden",
        display: "flex",
        overflow: "hidden",
      }}
    >
      {/* SVG Curtain clip shape — lives at the bottom of the overlay */}
      <svg
        ref={clipRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "80px",
          overflow: "visible",
          pointerEvents: "none",
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="curtain-clip" clipPathUnits="objectBoundingBox">
            <path id="curtain-path" d="M0 0 L100 0 L100 100 Q50 100 0 100 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Top Left: Logo */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "var(--gutter)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "32px",
            height: "32px",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "#000",
            border: "1px solid rgba(185,151,91,0.35)",
          }}
        >
          <Image
            src="/media/logo.jpg"
            alt="Studio Erato Films"
            fill
            sizes="32px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--color-ivory)",
          }}
        >
          Studio Erato
        </span>
      </div>

      {/* Close button (screen reader / keyboard) */}
      <button
        ref={closeBtnRef}
        onClick={handleClose}
        aria-label="Close menu"
        style={{
          position: "absolute",
          top: "1.75rem",
          right: "var(--gutter)",
          background: "none",
          border: "none",
          color: "var(--color-ivory)",
          fontFamily: "var(--font-body)",
          fontSize: "0.68rem",
          fontWeight: 400,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          cursor: "pointer",
          opacity: 0.7,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        Close
      </button>

      {/* ── Left: cinematic image ─────────────────────── */}
      <div
        style={{
          width: "clamp(140px, 18vw, 260px)",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="/media/671127604_18347588581213275_1370585711998979617_n..jpg"
          alt="A cinematic wedding moment — Studio Erato Films"
          fill
          style={{ objectFit: "cover", objectPosition: "center", filter: "grayscale(100%) contrast(1.05)" }}
          sizes="260px"
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, transparent 60%, var(--color-near-black) 100%)",
          }}
        />
      </div>

      {/* ── Center: Navigation ───────────────────────── */}
      <nav
        aria-label="Main navigation"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingLeft: "clamp(2rem, 5vw, 5rem)",
          paddingRight: "clamp(1rem, 3vw, 3rem)",
        }}
      >
        <ul
          ref={linksRef}
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(0.2rem, 1.2vh, 0.6rem)",
          }}
        >
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  color: "var(--color-gray-mid)",
                  letterSpacing: "0.1em",
                  minWidth: "1.8rem",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {link.number}
              </span>

              {/* Link */}
              <a
                ref={i === 0 ? firstFocusableRef : undefined}
                href={link.href}
                onClick={handleClose}
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ivory)",
                  textDecoration: "none",
                  display: "block",
                  transition:
                    "color 0.25s ease, transform 0.25s ease, opacity 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--color-gold)";
                  el.style.transform = "translateX(12px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--color-ivory)";
                  el.style.transform = "translateX(0)";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Right: Contact + Social ───────────────────── */}
      <div
        style={{
          width: "clamp(150px, 18vw, 240px)",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "clamp(2.5rem, 6vh, 4rem)",
          paddingRight: "var(--gutter)",
          gap: "1.5rem",
        }}
      >
        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <span className="text-eyebrow" style={{ color: "var(--color-gray-mid)", display: "block", marginBottom: "0.25rem" }}>
            Contact
          </span>

          <a
            href={`mailto:${studioInfo.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-ivory)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          >
            <Mail size={13} />
            {studioInfo.email}
          </a>

          <a
            href={`tel:${studioInfo.phone.replace(/\s/g, "")}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-ivory)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          >
            <Phone size={13} />
            {studioInfo.phone}
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <span className="text-eyebrow" style={{ color: "var(--color-gray-mid)", display: "block", marginBottom: "0.25rem" }}>
            Follow
          </span>

          <a
            href={studioInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-ivory)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          >
            <InstagramIcon />
            Instagram
          </a>

          <a
            href={studioInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-ivory)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              opacity: 0.7,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          >
            <YoutubeIcon />
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
