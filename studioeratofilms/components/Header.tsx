"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeaderProps {
  onMenuOpen: () => void;
  menuOpen: boolean;
}

/**
 * Header — Minimal sticky header
 *
 * Left: Contact / Get in touch
 * Center: STUDIO ERATO
 * Right: Menu — trigger
 *
 * Context-aware: switches between light (dark text on light section)
 * and dark (light text on dark section) based on scroll position.
 */
export default function Header({ onMenuOpen, menuOpen }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 60);

          // Detect if header is over a dark section by checking background color
          // of the element at the top of the viewport
          const el = document.elementFromPoint(
            window.innerWidth / 2,
            80
          ) as HTMLElement | null;

          if (el) {
            let node: HTMLElement | null = el;
            let foundDark = false;
            // Walk up the DOM tree looking for a dark background
            while (node && node !== document.documentElement) {
              const bg = window.getComputedStyle(node).backgroundColor;
              // Parse RGB
              const match = bg.match(/\d+/g);
              if (match) {
                const [r, g, b] = match.map(Number);
                const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                if (luminance < 0.4) {
                  foundDark = true;
                  break;
                }
              }
              node = node.parentElement;
            }
            setIsDark(foundDark);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = menuOpen
    ? "var(--color-ivory)"
    : isDark
    ? "var(--color-ivory)"
    : "var(--color-near-black)";

  return (
    <header
      ref={headerRef}
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: "var(--z-menu)" as unknown as number,
        padding: "1.5rem var(--gutter)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: textColor,
        transition: "color 0.5s ease",
        pointerEvents: menuOpen ? "none" : "auto",
      }}
    >
      {/* Left — Contact (Desktop) */}
      <a
        href="#contact"
        className="header-left-contact"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "inherit",
          textDecoration: "none",
          opacity: 0.85,
          transition: "opacity 0.25s ease",
          pointerEvents: menuOpen ? "none" : "auto",
          alignItems: "center",
          gap: "8px",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "1")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "0.85")
        }
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" style={{ opacity: 0.8 }}>
          <circle cx="4" cy="4" r="2" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
        </svg>
        Contact
      </a>

      {/* Brand Logo & Wordmark — Centered on Desktop, Left on Mobile */}
      <a
        href="/"
        aria-label="Studio Erato Films — Home"
        className="header-brand-link"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "#000",
            flexShrink: 0,
            border: "1px solid rgba(185,151,91,0.35)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <Image
            src="/media/logo.webp"
            alt="Studio Erato Films Logo"
            fill
            sizes="30px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <span
          className="header-brand-title"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          Studio Erato
        </span>
      </a>

      {/* Right Group — Mobile Contact + Menu */}
      <div
        className="header-right-group"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(0.85rem, 2vw, 1.25rem)",
        }}
      >
        {/* Mobile Contact Link */}
        <a
          href="#contact"
          className="header-mobile-contact"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "inherit",
            textDecoration: "none",
            opacity: 0.85,
            transition: "opacity 0.25s ease",
            pointerEvents: menuOpen ? "none" : "auto",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Contact
        </a>

        {/* Menu trigger */}
        <button
          onClick={onMenuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="fullscreen-menu"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.68rem",
            fontWeight: 400,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "inherit",
            background: "none",
            border: "none",
            cursor: "pointer",
            opacity: 0.8,
            transition: "opacity 0.25s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: 0,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.8")
          }
        >
          Menu
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: "1.4rem",
              position: "relative",
            }}
          >
            {/* Hamburger lines */}
            <span
              style={{
                display: "block",
                width: "100%",
                height: "1px",
                backgroundColor: "currentColor",
                marginBottom: "4px",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "70%",
                height: "1px",
                backgroundColor: "currentColor",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "translateY(-2px) rotate(-45deg) scaleX(1.43)" : "none",
              }}
            />
          </span>
        </button>
      </div>

      <style>{`
        .header-left-contact {
          display: flex;
        }
        .header-brand-link {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .header-mobile-contact {
          display: none;
        }

        @media (max-width: 767px) {
          header {
            padding: 1rem var(--gutter) !important;
          }
          .header-left-contact {
            display: none !important;
          }
          .header-brand-link {
            position: static !important;
            transform: none !important;
          }
          .header-mobile-contact {
            display: flex !important;
          }
          .header-brand-title {
            font-size: 0.66rem !important;
            letter-spacing: 0.18em !important;
          }
        }
      `}</style>
    </header>
  );
}
