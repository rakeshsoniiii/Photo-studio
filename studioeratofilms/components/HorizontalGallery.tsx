"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface FullscreenPhoto {
  src: string;
  title: string;
  couple: string;
  location: string;
  year: string;
}

const fullscreenSlides: FullscreenPhoto[] = [
  {
    src: "/media/658342707_18345437518213275_4643074072632916732_n.jpg",
    title: "Documentary Emotion & Intimacy",
    couple: "Meera & Siddharth",
    location: "City Palace, Jaipur",
    year: "2024",
  },
  {
    src: "/media/670874657_18347699566213275_545745951307292834_n.jpg",
    title: "Golden Hour Romance",
    couple: "Diya & Rohan",
    location: "South Goa Coast",
    year: "2024",
  },
  {
    src: "/media/656290104_18344915914213275_541231953036252694_n.jpg",
    title: "The Regal Royal Vows",
    couple: "Aanya & Kabir",
    location: "Lake Como, Italy",
    year: "2024",
  },
  {
    src: "/media/669547191_18346326103213275_170584385173151797_n.jpg",
    title: "Shadows, Grandeur & Heritage",
    couple: "Tara & Vikram",
    location: "Umaid Bhawan, Jodhpur",
    year: "2024",
  },
  {
    src: "/media/658854606_18344786011213275_8789297992173618236_n.jpg",
    title: "High-Fashion Editorial Celebration",
    couple: "Rhea & Karan",
    location: "Udaipur, Rajasthan",
    year: "2024",
  },
  {
    src: "/media/657701808_18345817549213275_2174793956474839260_n.jpg",
    title: "Under The Royal Courtyard",
    couple: "Sanya & Aditya",
    location: "JW Marriott Mussoorie",
    year: "2024",
  },
  {
    src: "/media/671127604_18347588581213275_1370585711998979617_n.jpg",
    title: "Monochrome Reverie",
    couple: "Priya & Arjun",
    location: "The Leela Palace, Udaipur",
    year: "2024",
  },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let ctx: gsap.Context | null = null;

    const initAnimation = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Native sticky container: distance is track width minus viewport width
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const p = self.progress;
              if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${p})`;
              }
              const active = Math.min(
                fullscreenSlides.length,
                Math.max(1, Math.round(p * (fullscreenSlides.length - 1)) + 1)
              );
              setCurrentIndex(active);
            },
          },
        });
      }, container);

      ScrollTrigger.refresh();
    };

    initAnimation();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="gallery"
      ref={containerRef}
      aria-labelledby="gallery-heading"
      style={{
        height: "500vh", // Provides clean vertical scroll travel
        position: "relative",
        backgroundColor: "#0a0a09",
      }}
    >
      {/* Sticky Fullscreen Viewport — STICKS NATIVELY without pin-spacer bugs! */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#0a0a09",
        }}
      >
        {/* Floating HUD Header */}
        <div
          style={{
            position: "absolute",
            top: "clamp(1.5rem, 3.5vh, 2.5rem)",
            left: "var(--gutter)",
            right: "var(--gutter)",
            zIndex: 30,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <div>
            <p
              id="gallery-heading"
              className="text-eyebrow"
              style={{
                color: "var(--color-gold)",
                letterSpacing: "0.22em",
                marginBottom: "0.25rem",
              }}
            >
              PHOTOGRAPHY · FULL SCREEN EXHIBITION
            </p>
            <span
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.75rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Scroll down to journey across stories
            </span>
          </div>

          {/* Dynamic Counter indicator */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
              color: "#ffffff",
              letterSpacing: "0.1em",
              backgroundColor: "rgba(10,10,9,0.7)",
              padding: "4px 14px",
              borderRadius: "4px",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            0{currentIndex}{" "}
            <span
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.85em",
              }}
            >
              / 0{fullscreenSlides.length}
            </span>
          </div>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            height: "100%",
            width: `${fullscreenSlides.length * 100}vw`,
            willChange: "transform",
            backgroundColor: "#0a0a09",
          }}
        >
          {fullscreenSlides.map((slide, index) => (
            <div
              key={`${slide.src}-${index}`}
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#0a0a09",
              }}
            >
              {/* Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                loading="lazy"
                unoptimized
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Cinematic Vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,9,0.92) 0%, rgba(10,10,9,0.15) 50%, rgba(10,10,9,0.6) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Bottom Caption */}
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(2.5rem, 6vh, 4rem)",
                  left: "var(--gutter)",
                  right: "var(--gutter)",
                  zIndex: 20,
                  maxWidth: "920px",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0.6rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      color: "var(--color-gold)",
                      textTransform: "uppercase",
                    }}
                  >
                    {slide.location}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.65rem, 0.9vw, 0.75rem)",
                      letterSpacing: "0.15em",
                      color: "rgba(255,255,255,0.75)",
                      textTransform: "uppercase",
                    }}
                  >
                    {slide.couple} ({slide.year})
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 4.2vw, 3.8rem)",
                    color: "var(--color-ivory)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.015em",
                    fontStyle: "italic",
                  }}
                >
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Progress Scrub Bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: "rgba(255,255,255,0.12)",
            zIndex: 40,
          }}
        >
          <div
            ref={progressBarRef}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "var(--color-gold)",
              transformOrigin: "left center",
              transform: "scaleX(0)",
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </section>
  );
}
