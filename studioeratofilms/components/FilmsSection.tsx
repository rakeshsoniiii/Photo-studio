"use client";

import { useState } from "react";
import Image from "next/image";
import { films } from "@/lib/data";
import FilmModal from "./FilmModal";
import { Play } from "lucide-react";

/**
 * FilmsSection — Stories in Motion
 *
 * Layout:
 * - 1 large 16:9 featured film
 * - 2 smaller films below in a mixed grid
 *
 * Hover: custom cursor becomes "PLAY FILM"
 * Click: opens FilmModal
 */
export default function FilmsSection() {
  const [activeFilm, setActiveFilm] = useState<(typeof films)[0] | null>(null);

  const featuredFilm = films.find((f) => f.featured)!;
  const gridFilms = films.filter((f) => !f.featured);

  return (
    <>
      <section
        id="films"
        aria-labelledby="films-heading"
        style={{
          padding: "var(--section-padding-y) var(--gutter)",
          backgroundColor: "var(--color-ivory)",
        }}
      >
        <div style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "clamp(2.5rem, 5vw, 4.5rem)" }}>
            <p
              className="text-eyebrow"
              style={{ marginBottom: "1rem" }}
            >
              Films
            </p>
            <h2
              id="films-heading"
              className="text-display-lg"
            >
              Stories in{" "}
              <em style={{ fontStyle: "italic" }}>Motion</em>
            </h2>
          </div>

          {/* Featured film — 16:9 */}
          <div
            data-cursor="play"
            onClick={() => setActiveFilm(featuredFilm)}
            role="button"
            aria-label={`Play film: ${featuredFilm.title} — ${featuredFilm.couple}`}
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" && setActiveFilm(featuredFilm)
            }
            style={{
              position: "relative",
              aspectRatio: "16/9",
              overflow: "hidden",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
              cursor: "pointer",
              display: "block",
            }}
          >
            <Image
              src={featuredFilm.poster}
              alt={`${featuredFilm.couple} — ${featuredFilm.destination}`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 95vw, 85vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.8s var(--ease-cinematic)",
              }}
              className="film-poster-img"
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,10,9,0.65) 0%, rgba(10,10,9,0.1) 60%, transparent 100%)",
              }}
            />

            {/* Play button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "clamp(56px, 6vw, 76px)",
                  height: "clamp(56px, 6vw, 76px)",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  transition: "transform 0.4s ease, border-color 0.4s ease",
                }}
                className="film-play-btn"
              >
                <Play size={20} fill="white" strokeWidth={0} color="white" style={{ marginLeft: "3px" }} />
              </div>
            </div>

            {/* Meta */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              <p
                className="text-eyebrow"
                style={{ color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}
              >
                {featuredFilm.destination} · {featuredFilm.duration}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 300,
                  color: "var(--color-ivory)",
                  lineHeight: 1.1,
                }}
              >
                {featuredFilm.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  marginTop: "0.3rem",
                }}
              >
                {featuredFilm.couple}
              </p>
            </div>
          </div>

          {/* Grid films */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            {gridFilms.map((film) => (
              <div
                key={film.id}
                data-cursor="play"
                onClick={() => setActiveFilm(film)}
                role="button"
                aria-label={`Play film: ${film.title} — ${film.couple}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveFilm(film)}
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={film.poster}
                  alt={`${film.couple} — ${film.destination}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.8s var(--ease-cinematic)",
                  }}
                  className="film-poster-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,9,0.6) 0%, transparent 60%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem" }}>
                  <p className="text-eyebrow" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "0.3rem" }}>
                    {film.destination} · {film.duration}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.25rem",
                      fontWeight: 300,
                      color: "var(--color-ivory)",
                      lineHeight: 1.1,
                    }}
                  >
                    {film.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .film-poster-img { transition: transform 0.8s cubic-bezier(0.76,0,0.24,1); }
          [data-cursor="play"]:hover .film-poster-img { transform: scale(1.04); }
          [data-cursor="play"]:hover .film-play-btn { transform: scale(1.12); border-color: rgba(255,255,255,0.9); }
        `}</style>
      </section>

      {/* Modal */}
      {activeFilm && (
        <FilmModal
          film={activeFilm}
          onClose={() => setActiveFilm(null)}
        />
      )}
    </>
  );
}
