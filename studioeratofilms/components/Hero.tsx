"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Award,
  Globe2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/**
 * Hero — Luxury Wedding Cinema Hero matching Piixonova.com
 *
 * Left: 3 continuously moving photo columns (vertical infinite scrolling marquees)
 *       showcasing 24+ high-resolution photographs with top/bottom fade masks.
 * Right: Luxury typography ("Luxury Wedding Stories. Beautifully Captured.")
 *        with rose-pink script accent, glowing pill CTA, social proof avatars,
 *        and 4 frosted feature cards.
 * Bottom: Full-width rounded stats capsule (200+ Stories, 11+ Years, 4.9 ★ Ratings).
 */

// Curated 24 high-res wedding photos from public/media/ (optimized WebP)
const COL_1_PHOTOS = [
  "/media/658342707_18345437518213275_4643074072632916732_n.webp",
  "/media/658854606_18344786011213275_8789297992173618236_n.webp",
  "/media/634155514_18339191569213275_1527773574703593361_n.webp",
  "/media/669547191_18346326103213275_170584385173151797_n.webp",
  "/media/670144287_18347588611213275_4390319269067749447_n.webp",
  "/media/670445648_18347588638213275_8266084814368532314_n.webp",
  "/media/671127604_18347588581213275_1370585711998979617_n.webp",
  "/media/762475435_18362264362213275_4037154776965255808_n.webp",
];

const COL_2_PHOTOS = [
  "/media/hero-photo.webp", // Star portrait: bride in red lehenga & groom in cream sherwani
  "/media/670434112_18347478913213275_3652673986511226749_n.webp",
  "/media/657701808_18345817549213275_2174793956474839260_n.webp",
  "/media/670215524_18347588701213275_6454788200647322258_n.webp",
  "/media/636985358_18339401398213275_2000453047405081442_n.webp",
  "/media/671067093_18347588593213275_7704476978487218991_n.webp",
  "/media/669906267_18347588671213275_660823139771868494_n.webp",
  "/media/758730957_18361512241213275_4920520672571970349_n.webp",
];

const COL_3_PHOTOS = [
  "/media/656290104_18344915914213275_541231953036252694_n.webp",
  "/media/670874657_18347699566213275_545745951307292834_n.webp",
  "/media/657664418_18345102004213275_2807622205563018235_n.webp",
  "/media/670401366_18347588683213275_7507402731648992137_n.webp",
  "/media/669742843_18346875676213275_5279556379386879834_n.webp",
  "/media/670679376_18347588629213275_1141641074923280675_n.webp",
  "/media/673877650_18348469795213275_8937251723405448163_n.webp",
  "/media/733263593_18358287217213275_466382122896676717_n.webp",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Studio Erato Films — Hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f9f7f3",
        backgroundImage: `
          radial-gradient(circle at 12% 18%, rgba(225, 210, 182, 0.42) 0%, transparent 50%),
          radial-gradient(circle at 88% 78%, rgba(200, 186, 160, 0.32) 0%, transparent 50%),
          radial-gradient(circle at 50% 45%, rgba(238, 228, 208, 0.28) 0%, transparent 60%)
        `,
        paddingTop: "clamp(5rem, 8vh, 6.5rem)",
        paddingBottom: "1.25rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Main Hero Row (Moving Columns + Piixonova Copy) ── */}
      <div
        style={{
          maxWidth: "1560px",
          width: "100%",
          margin: "0 auto",
          paddingInline: "var(--gutter)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(2rem, 3.5vw, 4rem)",
          flex: 1,
        }}
        className="hero-main-container"
      >
        {/* ── Left: 3 Continuously Moving Photography Columns (51%) ── */}
        <div
          style={{
            flex: "1 1 51%",
            maxWidth: "760px",
            minWidth: 0,
            height: "clamp(530px, 73vh, 690px)",
            position: "relative",
            overflow: "hidden",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            borderRadius: "16px",
          }}
          className="hero-columns-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              height: "100%",
            }}
            className="hero-columns-grid"
          >
            {/* COLUMN 1: Scrolls UPWARDS */}
            <div className="hero-column-wrapper">
              <div
                className="hero-column-track hero-track-up-1"
                style={{
                  animationPlayState: isHovered ? "paused" : "running",
                }}
              >
                {[...COL_1_PHOTOS, ...COL_1_PHOTOS].map((src, i) => (
                  <div
                    key={`col1-${i}`}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: i % 2 === 0 ? "290px" : "210px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={src}
                      alt="Studio Erato Luxury Wedding Portrait"
                      fill
                      sizes="(max-width: 768px) 45vw, 18vw"
                      unoptimized
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 2: Scrolls DOWNWARDS */}
            <div className="hero-column-wrapper">
              <div
                className="hero-column-track hero-track-down-2"
                style={{
                  animationPlayState: isHovered ? "paused" : "running",
                }}
              >
                {[...COL_2_PHOTOS, ...COL_2_PHOTOS].map((src, i) => (
                  <div
                    key={`col2-${i}`}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: i % 2 === 0 ? "340px" : "230px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={src}
                      alt="Studio Erato Destination Wedding Celebration"
                      fill
                      sizes="(max-width: 768px) 45vw, 18vw"
                      unoptimized
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 3: Scrolls UPWARDS */}
            <div className="hero-column-wrapper">
              <div
                className="hero-column-track hero-track-up-3"
                style={{
                  animationPlayState: isHovered ? "paused" : "running",
                }}
              >
                {[...COL_3_PHOTOS, ...COL_3_PHOTOS].map((src, i) => (
                  <div
                    key={`col3-${i}`}
                    style={{
                      position: "relative",
                      width: "100%",
                      height: i % 2 === 0 ? "260px" : "320px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={src}
                      alt="Studio Erato Editorial Wedding Frame"
                      fill
                      sizes="(max-width: 768px) 45vw, 18vw"
                      unoptimized
                      priority={i < 2}
                      loading={i < 2 ? "eager" : "lazy"}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Editorial Copy (Matching Piixonova 1:1) ── */}
        <div
          style={{
            flex: "1 1 48%",
            maxWidth: "620px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="hero-copy-wrapper"
        >
          {/* Piixonova-style Headline: Luxury Wedding Stories. Beautifully Captured. */}
          <h1
            className="hero-title"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(46px, 4.8vw, 84px)",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#171613",
              marginBottom: "clamp(1.2rem, 2vh, 1.6rem)",
            }}
          >
            <span>Luxury </span>
            <span
              style={{
                color: "#DE3E67",
                fontStyle: "italic",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                display: "inline-block",
              }}
            >
              Wedding Stories.
            </span>
            <br />
            <span>Beautifully Captured.</span>
          </h1>

          {/* Subtitle — Studio Erato Brand Description */}
          <div
            className="hero-subtitles"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              maxWidth: "520px",
              marginBottom: "clamp(1.5rem, 2.5vh, 2rem)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.1vw, 18px)",
                fontWeight: 500,
                lineHeight: 1.5,
                color: "#171613",
                letterSpacing: "0.02em",
              }}
            >
              Documentary &amp; Editorial Style Photography
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(13px, 0.95vw, 15px)",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "rgba(23, 22, 19, 0.68)",
                letterSpacing: "0.04em",
              }}
            >
              Studio Erato Films | Destination Weddings &amp; Bespoke Films
            </p>
          </div>

          {/* Glowing Rose-Pink Pill CTA Button (Matching Piixonova) */}
          <div
            className="hero-cta-group"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "1.25rem",
            }}
          >
            <Link
              href="#contact"
              className="hero-piixo-btn"
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "13px 36px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #DE3E67 0%, #E34C74 100%)",
                color: "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 0 24px rgba(222, 62, 103, 0.45), 0 4px 14px rgba(222, 62, 103, 0.35)",
                transition: "all 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)",
              }}
            >
              <span style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "8px" }}>
                <span>✦</span> CONTACT US <span>✦</span>
              </span>
            </Link>

            <Link
              href="#stories"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#171613",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                borderBottom: "1px solid rgba(23, 22, 19, 0.3)",
                paddingBottom: "2px",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#DE3E67";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "#DE3E67";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#171613";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(23, 22, 19, 0.3)";
              }}
            >
              Explore Stories
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Social Proof — Overlapping Couple Avatars & Rating */}
          <div
            className="hero-social-proof"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "clamp(1.5rem, 2.5vh, 2.2rem)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #ffffff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                  zIndex: 3,
                }}
              >
                <Image
                  src="/media/658342707_18345437518213275_4643074072632916732_n.webp"
                  alt="Happy Wedding Couple"
                  fill
                  sizes="34px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #ffffff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                  marginLeft: "-10px",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/media/hero-photo.webp"
                  alt="Happy Wedding Couple"
                  fill
                  sizes="34px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #ffffff",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                  marginLeft: "-10px",
                  zIndex: 1,
                }}
              >
                <Image
                  src="/media/670215524_18347588701213275_6454788200647322258_n.webp"
                  alt="Happy Wedding Couple"
                  fill
                  sizes="34px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.82rem",
                color: "#4a463f",
                letterSpacing: "0.01em",
              }}
            >
              Couples Rated <strong style={{ color: "#171613" }}>4.9</strong> ⭐ with{" "}
              <strong style={{ color: "#171613" }}>320+</strong> ratings.
            </span>
          </div>

          {/* 4 Frosted Feature Cards (Matching Piixonova 1:1) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              width: "100%",
              maxWidth: "580px",
            }}
            className="hero-feature-cards"
          >
            {/* Card 1: Personalized Approach */}
            <div className="hero-feature-card">
              <Heart size={20} color="#DE3E67" strokeWidth={1.8} />
              <span>Personalized Approach</span>
            </div>

            {/* Card 2: Storytelling Weddings */}
            <div className="hero-feature-card">
              <BookOpen size={20} color="#171613" strokeWidth={1.8} />
              <span>Storytelling Weddings</span>
            </div>

            {/* Card 3: Award Winning Team */}
            <div className="hero-feature-card">
              <Award size={20} color="#B89152" strokeWidth={1.8} />
              <span>Award Winning Team</span>
            </div>

            {/* Card 4: Worldwide Availability */}
            <div className="hero-feature-card">
              <Globe2 size={20} color="#171613" strokeWidth={1.8} />
              <span>Worldwide Availability</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Large Bottom Stats Capsule (Pill Matching Piixonova 1:1) ── */}
      <div
        style={{
          width: "calc(100% - clamp(2rem, 5vw, 5rem))",
          maxWidth: "1540px",
          margin: "1.5rem auto 0",
          backgroundColor: "rgba(255, 255, 255, 0.52)",
          border: "1px solid rgba(255, 255, 255, 0.85)",
          borderRadius: "999px",
          padding: "1rem clamp(1.5rem, 4vw, 3.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 10px 36px -12px rgba(0,0,0,0.06)",
          position: "relative",
          zIndex: 10,
        }}
        className="hero-stats-capsule"
      >
        {/* Section 01: 200+ Handcrafted wedding stories */}
        <div className="hero-stats-item" style={{ display: "flex", alignItems: "baseline", gap: "12px", flex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 3.2vw, 3rem)",
              fontWeight: 400,
              color: "#171613",
              lineHeight: 1,
            }}
          >
            200+
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              color: "#6b665e",
              maxWidth: "140px",
              lineHeight: 1.35,
            }}
          >
            Handcrafted wedding stories told.
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "rgba(23, 22, 19, 0.12)",
            marginInline: "1.5rem",
          }}
          className="stats-divider"
        />

        {/* Section 02: 11+ Years of Capturing Raw Emotions */}
        <div className="hero-stats-item" style={{ textAlign: "center", flex: 1.4, display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem, 2.2vw, 2.1rem)",
              fontWeight: 400,
              color: "#171613",
              lineHeight: 1.2,
            }}
          >
            11+ Years of Capturing Raw Emotions
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "rgba(23, 22, 19, 0.12)",
            marginInline: "1.5rem",
          }}
          className="stats-divider"
        />

        {/* Section 03: 4.9 ★ 320+ Testimonials */}
        <div className="hero-stats-item" style={{ display: "flex", alignItems: "baseline", gap: "12px", flex: 1, justifyContent: "flex-end" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 3.2vw, 3rem)",
              fontWeight: 400,
              color: "#171613",
              lineHeight: 1,
            }}
          >
            4.9 ★
          </span>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.82rem",
              color: "#6b665e",
              maxWidth: "140px",
              lineHeight: 1.35,
            }}
          >
            320+ Testimonials by Happy Couples
          </span>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918383850942"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed",
          right: "28px",
          bottom: "28px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(37,211,102,0.4)",
          zIndex: 90,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="whatsapp-float-btn"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Embedded Styles for Marquee Motion and Piixonova Elements */}
      <style>{`
        /* Vertical infinite marquee animations */
        @keyframes heroScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes heroScrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .hero-column-wrapper {
          overflow: hidden;
          height: 100%;
          position: relative;
        }

        .hero-column-track {
          display: flex;
          flex-direction: column;
          gap: 12px;
          will-change: transform;
        }

        .hero-track-up-1 {
          animation: heroScrollUp 38s linear infinite;
        }

        .hero-track-down-2 {
          animation: heroScrollDown 46s linear infinite;
        }

        .hero-track-up-3 {
          animation: heroScrollUp 42s linear infinite;
        }

        .hero-piixo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 32px rgba(222, 62, 103, 0.65), 0 8px 20px rgba(222, 62, 103, 0.45) !important;
        }

        .hero-feature-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          gap: 8px;
          padding: 14px 8px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.85);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          text-align: center;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .hero-feature-card:hover {
          transform: translateY(-4px);
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .hero-feature-card span {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.25;
          color: #171613;
        }

        @media (max-width: 1023px) {
          #hero {
            padding-top: clamp(4.25rem, 8vh, 5.25rem) !important;
            padding-bottom: 2.25rem !important;
          }
          .hero-main-container {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1.5rem !important;
          }
          .hero-copy-wrapper {
            order: 1 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          .hero-title {
            font-size: clamp(34px, 8.4vw, 54px) !important;
            line-height: 1.08 !important;
            margin-bottom: 0.85rem !important;
          }
          .hero-subtitles {
            margin-bottom: 1.15rem !important;
            gap: 4px !important;
          }
          .hero-subtitles p:first-child {
            font-size: clamp(13.5px, 3.6vw, 16px) !important;
          }
          .hero-subtitles p:last-child {
            font-size: clamp(11.5px, 3vw, 14px) !important;
          }
          .hero-cta-group {
            gap: 14px !important;
            margin-bottom: 1.15rem !important;
          }
          .hero-piixo-btn {
            padding: 12px 24px !important;
            font-size: 0.76rem !important;
          }
          .hero-social-proof {
            margin-bottom: 1.25rem !important;
          }
          .hero-social-proof span {
            font-size: 0.76rem !important;
          }
          .hero-feature-cards {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .hero-feature-card {
            padding: 10px 8px !important;
            gap: 6px !important;
          }
          .hero-feature-card span {
            font-size: 10.5px !important;
          }
          .hero-columns-container {
            order: 2 !important;
            max-width: 100% !important;
            height: 310px !important;
            border-radius: 12px !important;
            margin-top: 0.5rem !important;
          }
          .hero-stats-capsule {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            border-radius: 20px !important;
            gap: 1rem !important;
            padding: 1.15rem 1.25rem !important;
            align-items: center !important;
            justifyContent: space-around !important;
          }
          .stats-divider {
            display: none !important;
          }
          .whatsapp-float-btn {
            right: 18px !important;
            bottom: 18px !important;
            width: 46px !important;
            height: 46px !important;
          }
          .whatsapp-float-btn svg {
            width: 24px !important;
            height: 24px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(30px, 8vw, 42px) !important;
          }
          .hero-columns-container {
            height: 250px !important;
          }
          .hero-stats-capsule {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.5rem !important;
            padding: 0.85rem !important;
            border-radius: 16px !important;
            width: calc(100% - 2 * var(--gutter)) !important;
          }
          .hero-stats-item {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 2px !important;
          }
          .hero-stats-item span:first-child {
            font-size: 1.5rem !important;
          }
          .hero-stats-item span:last-child {
            font-size: 0.65rem !important;
            max-width: 100% !important;
            line-height: 1.2 !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
