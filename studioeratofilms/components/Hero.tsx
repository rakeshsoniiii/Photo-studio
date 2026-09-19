"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Award,
  Globe2,
  Sparkles,
  ArrowUpRight,
  Camera,
  Star,
} from "lucide-react";

/**
 * Hero — Luxury Wedding Cinema Hero matching Piixonova.com
 *
 * Left: 3 continuously moving photo columns (vertical infinite scrolling marquees)
 *       showcasing 24+ high-resolution photographs with top/bottom fade masks.
 * Right: Luxury typography ("Luxury Wedding Stories. Beautifully Captured.")
 *        with rose-pink script accent, glowing pill CTA, social proof avatars,
 *        and 4 frosted feature cards.
 * Bottom: Full-width rounded stats capsule (200+ Stories, 4.9 ★ Ratings).
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

      {/* ── Refined Luxury Bottom Stats Capsule ── */}
      <div
        style={{
          width: "calc(100% - clamp(2rem, 5vw, 4rem))",
          maxWidth: "960px",
          margin: "1.75rem auto 0",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.76) 0%, rgba(250, 248, 243, 0.68) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.95)",
          borderRadius: "999px",
          padding: "1rem clamp(1.5rem, 3.5vw, 3rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(1.5rem, 3vw, 3rem)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "0 18px 45px -12px rgba(23, 22, 19, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
          position: "relative",
          zIndex: 10,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="hero-stats-capsule"
      >
        {/* Stat 01: 200+ Handcrafted wedding stories */}
        <div
          className="hero-stats-item"
          style={{ display: "flex", alignItems: "center", gap: "16px", flex: 1 }}
        >
          <div
            className="hero-stat-badge"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(185, 151, 91, 0.14), rgba(185, 151, 91, 0.04))",
              border: "1px solid rgba(185, 151, 91, 0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#A38044",
              flexShrink: 0,
            }}
          >
            <Camera size={22} strokeWidth={1.75} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.1rem, 2.8vw, 2.75rem)",
                  fontWeight: 400,
                  color: "#171613",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                200+
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B9975B",
                }}
              >
                Stories
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.84rem",
                color: "#5c574e",
                lineHeight: 1.3,
                marginTop: "2px",
              }}
            >
              Handcrafted wedding stories told across India
            </span>
          </div>
        </div>

        {/* Center Luxury Ornamental Divider */}
        <div
          className="stats-divider-wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "rgba(185, 151, 91, 0.6)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "36px",
              height: "1px",
              background:
                "linear-gradient(to right, transparent, rgba(185, 151, 91, 0.4))",
            }}
          />
          <span style={{ fontSize: "14px", lineHeight: 1, color: "#B9975B" }}>✦</span>
          <div
            style={{
              width: "36px",
              height: "1px",
              background:
                "linear-gradient(to left, transparent, rgba(185, 151, 91, 0.4))",
            }}
          />
        </div>

        {/* Stat 02: 4.9 ★ 320+ Testimonials */}
        <div
          className="hero-stats-item"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <div
            className="hero-stat-badge"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(185, 151, 91, 0.14), rgba(185, 151, 91, 0.04))",
              border: "1px solid rgba(185, 151, 91, 0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#A38044",
              flexShrink: 0,
            }}
          >
            <Star size={22} strokeWidth={1.75} fill="#B9975B" color="#B9975B" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.1rem, 2.8vw, 2.75rem)",
                  fontWeight: 400,
                  color: "#171613",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                4.9
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B9975B",
                }}
              >
                Rating
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.84rem",
                color: "#5c574e",
                lineHeight: 1.3,
                marginTop: "2px",
              }}
            >
              320+ Kind reviews from happy couples
            </span>
          </div>
        </div>
      </div>

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
            padding-top: clamp(4.5rem, 8vh, 5.5rem) !important;
            padding-bottom: 1rem !important;
            min-height: auto !important;
          }
          .hero-main-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.25rem !important;
          }

          /* 1. MOVING PHOTOS ON TOP — shorter height like Piixonova mobile */
          .hero-columns-container {
            order: 1 !important;
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            height: 300px !important;
            border-radius: 14px !important;
            margin: 0 auto !important;
          }

          .hero-columns-grid {
            gap: 8px !important;
          }

          /* 2. TEXT CONTENT BELOW PHOTOS (Centered, compact) */
          .hero-copy-wrapper {
            order: 2 !important;
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 0 !important;
          }
          .hero-title {
            font-size: clamp(30px, 8vw, 44px) !important;
            line-height: 1.1 !important;
            margin-bottom: 0.6rem !important;
            text-align: center !important;
          }
          .hero-subtitles {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
            gap: 3px !important;
          }
          .hero-subtitles p:first-child {
            font-size: clamp(13px, 3.6vw, 15px) !important;
            text-align: center !important;
          }
          .hero-subtitles p:last-child {
            font-size: clamp(11px, 3vw, 13px) !important;
            text-align: center !important;
          }
          .hero-cta-group {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 14px !important;
            margin-bottom: 0.75rem !important;
            width: 100% !important;
          }
          .hero-piixo-btn {
            padding: 12px 30px !important;
            font-size: 0.75rem !important;
          }
          .hero-social-proof {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin-bottom: 1rem !important;
            width: 100% !important;
          }
          .hero-social-proof span {
            font-size: 0.76rem !important;
          }

          /* 3. FEATURE CARDS - HORIZONTAL SCROLL ROW */
          .hero-feature-cards {
            display: flex !important;
            flex-direction: row !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
            -webkit-overflow-scrolling: touch !important;
            gap: 8px !important;
            width: calc(100% + 2 * var(--gutter)) !important;
            margin-left: calc(-1 * var(--gutter)) !important;
            margin-right: calc(-1 * var(--gutter)) !important;
            padding: 4px var(--gutter) 10px var(--gutter) !important;
            scroll-snap-type: x mandatory !important;
          }
          .hero-feature-cards::-webkit-scrollbar {
            display: none !important;
          }
          .hero-feature-card {
            flex: 0 0 auto !important;
            width: clamp(110px, 28vw, 130px) !important;
            height: 88px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            scroll-snap-align: start !important;
            padding: 8px 6px !important;
            gap: 5px !important;
            border-radius: 14px !important;
            background-color: rgba(255, 255, 255, 0.72) !important;
            border: 1px solid rgba(255, 255, 255, 0.9) !important;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04) !important;
          }
          .hero-feature-card span {
            font-size: 10px !important;
            line-height: 1.2 !important;
            text-align: center !important;
          }

          .hero-stats-capsule {
            gap: 1.25rem !important;
            margin-top: 1rem !important;
          }
        }

        .hero-stats-capsule:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 54px -12px rgba(23, 22, 19, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 1) !important;
        }

        @media (max-width: 768px) {
          .hero-stats-capsule {
            flex-direction: column !important;
            border-radius: 24px !important;
            padding: 1rem 1.25rem !important;
            gap: 0.9rem !important;
            max-width: 480px !important;
            width: calc(100% - 2 * var(--gutter)) !important;
          }
          .hero-stats-item {
            width: 100% !important;
            justify-content: flex-start !important;
            align-items: center !important;
          }
          .stats-divider-wrapper {
            width: 100% !important;
            justify-content: center !important;
          }
          .stats-divider-wrapper div {
            width: 60px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-columns-container {
            height: 240px !important;
          }
          .hero-title {
            font-size: clamp(26px, 7.5vw, 36px) !important;
          }
          .hero-feature-card {
            width: 110px !important;
            height: 82px !important;
          }
          .hero-stats-capsule {
            padding: 0.85rem 1rem !important;
            border-radius: 18px !important;
            gap: 0.75rem !important;
          }
          .hero-stat-badge {
            width: 38px !important;
            height: 38px !important;
          }
          .hero-stat-badge svg {
            width: 16px !important;
            height: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
