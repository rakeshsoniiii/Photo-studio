"use client";

import { useRef, useState, useEffect } from "react";
import { reels } from "@/lib/data";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

/**
 * ReelsSection — 4 × 9:16 portrait reel cards
 *
 * Videos autoplay in an infinite seamless loop when scrolled into view (muted by default).
 * Clicking any reel toggles audio for that reel!
 * Desktop: horizontal row of 4 cards
 * Mobile: smooth horizontal scroll with snap
 */
export default function ReelsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [unmutedId, setUnmutedId] = useState<string | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          videoRefs.current.forEach((v) => {
            if (v && v.paused) {
              v.play().catch(() => {});
            }
          });
        } else {
          videoRefs.current.forEach((v) => {
            if (v && !v.paused) {
              v.pause();
            }
          });
        }
      },
      { rootMargin: "350px 0px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleAudio = (reelId: string, index: number) => {
    const vid = videoRefs.current[index];
    if (!vid) return;

    if (unmutedId === reelId) {
      vid.muted = true;
      setUnmutedId(null);
    } else {
      // Mute all others
      videoRefs.current.forEach((v) => {
        if (v) v.muted = true;
      });
      vid.muted = false;
      vid.play().catch(() => {});
      setUnmutedId(reelId);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="reels"
      aria-labelledby="reels-heading"
      style={{
        padding: "var(--section-padding-y) 0",
        backgroundColor: "var(--color-charcoal)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          paddingInline: "var(--gutter)",
          marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <p
            className="text-eyebrow"
            style={{ marginBottom: "0.75rem", color: "var(--color-gold)", display: "flex", alignItems: "center", gap: "6px" }}
          >
            <Sparkles size={13} /> Motion & Sound · Short Films
          </p>
          <h2
            id="reels-heading"
            className="text-display-md"
            style={{ color: "var(--color-ivory)" }}
          >
            Little films.{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
              Big feelings.
            </em>
          </h2>
        </div>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", letterSpacing: "0.08em" }}>
          CLICK ANY REEL TO UNMUTE SOUND
        </p>
      </div>

      {/* Cards — horizontal scroll on mobile */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "clamp(0.85rem, 1.8vw, 1.5rem)",
          paddingInline: "var(--gutter)",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
        className="reels-scroll"
      >
        {reels.map((reel, index) => {
          const isUnmuted = unmutedId === reel.id;

          return (
            <div
              key={reel.id}
              data-cursor="play"
              onClick={() => toggleAudio(reel.id, index)}
              style={{
                flexShrink: 0,
                width: "clamp(200px, 22vw, 290px)",
                aspectRatio: "9/16",
                position: "relative",
                overflow: "hidden",
                scrollSnapAlign: "start",
                cursor: "pointer",
                borderRadius: "8px",
                backgroundColor: "#0d0d0c",
                boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
              }}
              role="button"
              aria-label={`Toggle audio for reel: ${reel.title}`}
              tabIndex={0}
            >
              {/* Autoplay Loop Video — loaded when scrolled near */}
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={isInView ? reel.videoUrl : undefined}
                poster={reel.poster}
                autoPlay={isInView}
                loop
                muted={!isUnmuted}
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.6s var(--ease-cinematic)",
                  display: "block",
                }}
                className="reel-video-element"
              />

              {/* Dark subtle gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,10,9,0.85) 0%, rgba(10,10,9,0.1) 40%, rgba(10,10,9,0.3) 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Sound status indicator badge */}
              <div
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  backgroundColor: isUnmuted ? "var(--color-gold)" : "rgba(0,0,0,0.55)",
                  color: isUnmuted ? "#000000" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(6px)",
                  transition: "all 0.3s ease",
                  zIndex: 2,
                }}
                title={isUnmuted ? "Mute sound" : "Unmute sound"}
              >
                {isUnmuted ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </div>

              {/* Bottom metadata */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.25rem",
                  pointerEvents: "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.15rem",
                    color: "var(--color-ivory)",
                    marginBottom: "0.25rem",
                    lineHeight: 1.2,
                    fontWeight: 400,
                  }}
                >
                  {reel.title}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {reel.duration} · Wedding Film
                  </p>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: isUnmuted ? "var(--color-gold)" : "rgba(255,255,255,0.45)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {isUnmuted ? "AUDIO ON" : "TAP FOR SOUND"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .reels-scroll::-webkit-scrollbar { display: none; }
        .reels-scroll > div:hover .reel-video-element {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
