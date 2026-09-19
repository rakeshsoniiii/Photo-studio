import Image from "next/image";
import { studioInfo } from "@/lib/data";
// Inline SVG social icons
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

/**
 * Footer — Minimal cinematic footer
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-near-black)",
        color: "var(--color-ivory)",
        padding: "clamp(2.5rem, 5vw, 4rem) var(--gutter)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.85rem" }}>
            <div
              style={{
                position: "relative",
                width: "40px",
                height: "40px",
                borderRadius: "4px",
                overflow: "hidden",
                backgroundColor: "#000",
                border: "1px solid rgba(185,151,91,0.4)",
              }}
            >
              <Image
                src="/media/logo.jpg"
                alt="Studio Erato Films Logo"
                fill
                sizes="40px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--color-ivory)",
                }}
              >
                Studio Erato Films
              </p>
              <p
                className="text-eyebrow"
                style={{ color: "var(--color-gold)", fontSize: "0.62rem", letterSpacing: "0.15em", marginTop: "2px" }}
              >
                DESTINATION WEDDINGS & BESPOKE FILMS
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p className="text-eyebrow" style={{ color: "var(--color-gray-mid)", marginBottom: "0.25rem" }}>
            Contact
          </p>
          <a
            href={`tel:${studioInfo.phone.replace(/\s/g, "")}`}
            style={{
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")
            }
          >
            {studioInfo.phone}
          </a>
          <a
            href={`mailto:${studioInfo.email}`}
            style={{
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")
            }
          >
            {studioInfo.email}
          </a>
          <p
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
            }}
          >
            {studioInfo.address}
          </p>
        </div>

        {/* Social */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p className="text-eyebrow" style={{ color: "var(--color-gray-mid)", marginBottom: "0.25rem" }}>
            Follow
          </p>
          <a
            href={studioInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")
            }
          >
            <InstagramIcon />
            @studioeratofilms_official
          </a>
          <a
            href={studioInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              fontFamily: "var(--font-body)",
              fontSize: "0.8rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")
            }
          >
            <YoutubeIcon />
            YouTube
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "2.5rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.08em",
          }}
        >
          &copy; {year} Studio Erato Films. All rights reserved.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.08em",
          }}
        >
          Destination Weddings · Bespoke Films
        </p>
      </div>
    </footer>
  );
}
