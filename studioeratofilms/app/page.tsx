"use client";

import { useState } from "react";
import Header from "@/components/Header";
import FullscreenMenu from "@/components/FullscreenMenu";
import Hero from "@/components/Hero";
import RecognitionMarquee from "@/components/RecognitionMarquee";
import FeaturedStories from "@/components/FeaturedStories";
import ReelsSection from "@/components/ReelsSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import AboutStudio from "@/components/AboutStudio";
import FilmsSection from "@/components/FilmsSection";
import Testimonials from "@/components/Testimonials";
import Expertise from "@/components/Expertise";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Studio Erato Films — Main Page
 *
 * Section order follows the spec:
 * Header → Hero → Stats → Recognition → Stories → Reels →
 * Gallery → About → Films → Testimonials → Expertise →
 * Final CTA → Contact → Footer
 */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <Header
        onMenuOpen={() => setMenuOpen(true)}
        menuOpen={menuOpen}
      />

      {/* Fullscreen Menu Overlay */}
      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Main content */}
      <main id="main-content">
        {/* 1. Hero — Luxury Editorial Hero with 3-Column Collage & Stats Capsule */}
        <Hero />

        {/* 2. Recognition — Credibility marquee */}
        <RecognitionMarquee />

        {/* 4. Selected Stories */}
        <FeaturedStories />

        {/* 5. Reels */}
        <ReelsSection />

        {/* 6. Horizontal Photography Gallery — Signature section */}
        <HorizontalGallery />

        {/* 7. About Studio — Warm transition */}
        <AboutStudio />

        {/* 8. Films — Stories in Motion */}
        <FilmsSection />

        {/* 9. Testimonials — Kind Words */}
        <Testimonials />

        {/* 10. Expertise */}
        <Expertise />

        {/* 11. Final Cinematic CTA */}
        <FinalCTA />

        {/* 12. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
