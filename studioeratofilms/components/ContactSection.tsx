"use client";

import { useState } from "react";
import { studioInfo } from "@/lib/data";
import { Send } from "lucide-react";

// Inline SVG social icons
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

/**
 * ContactSection — Enquiry form + Get in Touch marquee header
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    weddingCity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend (Resend / Netlify Forms / etc.)
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 0",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    color: "var(--color-ivory)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.25s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "0.62rem",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--color-gray-mid)",
    display: "block",
    marginBottom: "0.25rem",
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        backgroundColor: "var(--color-charcoal)",
        color: "var(--color-ivory)",
        paddingBottom: "clamp(5rem, 10vw, 8rem)",
      }}
    >
      {/* Get in Touch marquee header */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          paddingBlock: "1.5rem",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        <div
          aria-hidden="true"
          className="marquee-container"
        >
          <div
            className="marquee-inner direction-left"
            style={{ animationDuration: "18s" }}
          >
            {Array(6)
              .fill("Get in Touch / ")
              .map((item, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.5rem, 4vw, 3rem)",
                    color: "var(--color-ivory)",
                    opacity: 0.6,
                    paddingRight: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
              ))}
          </div>
        </div>

        {/* Accessible heading */}
        <h2
          id="contact-heading"
          className="sr-only"
        >
          Contact Studio Erato Films
        </h2>
      </div>

      <div
        style={{
          maxWidth: "var(--content-max)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 8vw, 8rem)",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left: Copy */}
        <div>
          <h3
            className="text-display-md"
            style={{
              color: "var(--color-ivory)",
              marginBottom: "1.5rem",
            }}
          >
            Looking for your{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              wedding storyteller?
            </em>
          </h3>

          <p
            className="text-body-lg"
            style={{
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2.5rem",
              maxWidth: "35ch",
            }}
          >
            We&apos;d love to hear about your wedding. Share the details below
            and we&apos;ll check our availability for your date.
          </p>

          {/* Contact details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <a
              href={`tel:${studioInfo.phone.replace(/\s/g, "")}`}
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.5)")
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
                fontSize: "0.9rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.5)")
              }
            >
              {studioInfo.email}
            </a>
            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
              }}
            >
              {studioInfo.address}
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a
              href={studioInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              <InstagramIcon />
            </a>
            <a
              href={studioInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              style={{
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-ivory)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div
              style={{
                padding: "3rem",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "1.5rem",
                  color: "var(--color-ivory)",
                  marginBottom: "0.75rem",
                }}
              >
                Thank you.
              </p>
              <p className="text-body" style={{ color: "rgba(255,255,255,0.5)" }}>
                We&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="+91"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={labelStyle}>Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="your@email.com"
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div>
                  <label htmlFor="weddingDate" style={labelStyle}>Wedding Date</label>
                  <input
                    id="weddingDate"
                    name="weddingDate"
                    type="date"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: "dark" }}
                  />
                </div>
                <div>
                  <label htmlFor="weddingCity" style={labelStyle}>Wedding City / Destination</label>
                  <input
                    id="weddingCity"
                    name="weddingCity"
                    type="text"
                    value={formData.weddingCity}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="Udaipur, Goa..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: "none",
                    lineHeight: 1.7,
                  }}
                  placeholder="Tell us about your wedding..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  alignSelf: "flex-start",
                  gap: "0.75rem",
                  backgroundColor: "var(--color-ivory)",
                  color: "var(--color-near-black)",
                  borderColor: "var(--color-ivory)",
                }}
              >
                Check Availability
                <Send size={12} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.2);
          font-family: var(--font-body);
        }
        input:focus, textarea:focus {
          border-bottom-color: var(--color-gold) !important;
        }
      `}</style>
    </section>
  );
}
