# Studio Erato Films — Build TODO (Source of Truth)

## Phase 0 — Project Setup ✅
- [x] Create Next.js App Router project (Next.js 15+ with Turbopack)
- [x] Enable TypeScript
- [x] Configure Tailwind CSS
- [x] Add font system (Instrument Serif, Cormorant Garamond, Inter, Manrope)
- [x] Install GSAP
- [x] Register ScrollTrigger
- [x] Install Lenis smooth scroll
- [x] Install Lucide React icons
- [x] Create global theme tokens in `globals.css`
- [x] Add reduced-motion utilities
- [x] Configure image remote patterns for Cloudinary & local assets

---

## Phase 1 — Architecture ✅
- [x] `app/layout.tsx` — Root layout with Lenis, Cursor, and SEO metadata
- [x] `app/page.tsx` — Master page flow
- [x] `app/globals.css` — Luxury editorial design tokens, font hierarchy, resets
- [x] `components/Header.tsx` — Sticky header with context-aware dark/light theme & official logo
- [x] `components/FullscreenMenu.tsx` — Curtain-reveal navigation with SVG clip-path
- [x] `components/Hero.tsx` — 3-column dense editorial photography collage & bottom stats capsule
- [x] `components/RecognitionMarquee.tsx` — Credibility marquee with pause-on-hover
- [x] `components/FeaturedStories.tsx` — Editorial story cards with clip-path reveal
- [x] `components/ReelsSection.tsx` — 4 portrait 9:16 cards with autoplaying loop videos & audio toggle
- [x] `components/HorizontalGallery.tsx` — Pinned fullscreen photography exhibition sliding right to left
- [x] `components/AboutStudio.tsx` — Warm cream editorial transition
- [x] `components/FilmsSection.tsx` — Featured 16:9 cinema spotlight + grid
- [x] `components/FilmModal.tsx` — Accessible cinema modal with video player & backdrop blur
- [x] `components/Testimonials.tsx` — Editorial quotes & couple portraits
- [x] `components/Expertise.tsx` — Service offerings with large editorial photography
- [x] `components/FinalCTA.tsx` — Dual opposing diagonal marquees & magnetic circular CTA
- [x] `components/ContactSection.tsx` — 6-field inquiry form & WhatsApp integration
- [x] `components/Footer.tsx` — Minimal luxury footer with official logo
- [x] `components/CustomCursor.tsx` — High-contrast universal cursor with difference blend mode & play states
- [x] `lib/data.ts` — Centralized content manifest & media paths

---

## Phase 2 — Global Motion Engine ✅
- [x] Initialize Lenis globally with smooth inertia
- [x] Sync Lenis with GSAP ticker & ScrollTrigger
- [x] Disable native smooth scroll to avoid conflicts
- [x] Implement `prefers-reduced-motion` fallbacks across all animations
- [x] Ensure comprehensive cleanup on component unmount
- [x] Run ScrollTrigger refresh on layout recalculations

---

## Phase 3 — Header & Brand Identity ✅
- [x] Minimal sticky header with smooth transition
- [x] Left: "Get in Touch" contact trigger
- [x] Center: Official `SEF STUDIO ERATO` logo badge + serif wordmark
- [x] Right: "Menu" trigger button with animated lines
- [x] Context-aware dynamic color switching over dark/light sections
- [x] Mobile responsive layout

---

## Phase 4 — Fullscreen Menu ✅
- [x] Fixed black overlay with custom SVG curved curtain exit
- [x] Left-side editorial photo with subtle grayscale filter
- [x] Large numbered navigation links (01–06)
- [x] Social channels and studio coordinates
- [x] Focus trap, keyboard navigation, and Escape key dismissal
- [x] Body scroll lock when open

---

## Phase 5 — Hero Section (Redesigned per Reference) ✅
- [x] Full viewport section (`min-height: 100svh`)
- [x] Left: 3-column dense editorial photography collage (52% width)
- [x] Featured couple image (`hero-photo.jpg`) with "FEATURED STORY" badge
- [x] Right: High-contrast luxury headline: *"Weddings, Told Like Cinema."*
- [x] Refined editorial description and subtitle
- [x] Primary CTA "EXPLORE STORIES" & Secondary "CHECK AVAILABILITY ↗"
- [x] Exclusivity marker: *"──── ONLY 30 COMMISSIONS / YEAR"*
- [x] Minimal 4-feature horizontal strip (Documentary, Bespoke, Editorial, Worldwide)
- [x] Pointer parallax on collage columns
- [x] Final resting opacity at 100% (`opacity: 1`) with zero washed-out fading
- [x] Lower 18% mask fade into ivory background
- [x] Mobile layout: natural stacked flow with 2-column collage

---

## Phase 6 — Stats Capsule (Integrated in Hero) ✅
- [x] Large horizontal capsule with `border-radius: 999px`
- [x] Frosted ivory background (`rgba(250,248,242,0.88)`) with backdrop-blur
- [x] 3 columns:
  - 01: `30 EXCLUSIVE` Weddings Each Year
  - 02: `11+ Years` Capturing Raw Emotions & Stories
  - 03: `4.9 ★` 320+ Celebrated Couples Across India & Worldwide
- [x] Thin vertical dividers
- [x] Mobile responsive vertical stacking

---

## Phase 7 — Recognition Marquee ✅
- [x] Infinite smooth horizontal ticker
- [x] Pause on hover
- [x] Editorial typography with gold diamond dividers
- [x] Reduced motion static fallback

---

## Phase 8 — Selected Stories ✅
- [x] 3 large editorial story cards
- [x] Destination and couple metadata (Udaipur, Goa, Jaipur)
- [x] Clip-path reveal animation
- [x] Hover interaction with image scale & arrow rise

---

## Phase 9 — Reels Section (Autoplay Looped Videos) ✅
- [x] 4 portrait 9:16 reel cards
- [x] High-performance HTML5 `<video>` elements
- [x] **Autoplaying in an infinite seamless loop** (muted by default)
- [x] Interactive audio toggle ("TAP FOR SOUND" / "AUDIO ON") with speaker badge
- [x] Desktop row layout with hover scale
- [x] Mobile horizontal snap scroll

---

## Phase 10 — Horizontal Photography Gallery (Fullscreen Exhibition) ✅
- [x] **Every photo is a full-screen slide** (`100vw × 100svh`)
- [x] Pinned with GSAP ScrollTrigger
- [x] Vertical scrolling drives horizontal slide traversal (right-to-left scrub)
- [x] HUD header with slide counter (`01 / 07`) and destination metadata
- [x] Bottom gold scrub progress indicator bar
- [x] Dark `#0a0a09` background eliminating white screen flashes
- [x] Mobile native touch-swipe with CSS scroll snap

---

## Phase 11 — About Studio ✅
- [x] Warm transition section
- [x] Left: Behind-the-scenes portrait
- [x] Right: Studio philosophy copy & founder signature
- [x] Staggered entrance animations

---

## Phase 12 — Films (Stories in Motion) ✅
- [x] Featured 16:9 cinema spotlight film
- [x] Secondary film cards in grid
- [x] Interactive custom play button
- [x] Integration with `FilmModal`

---

## Phase 13 — Film Modal ✅
- [x] Fullscreen cinematic modal overlay
- [x] Backdrop blur and keyboard Escape close
- [x] Responsive video player container
- [x] Accessible dialog markup and focus management

---

## Phase 14 — Testimonials ✅
- [x] Editorial couple quotes with locations
- [x] Gold star rating indicators
- [x] Intimate wedding portrait integration

---

## Phase 15 — Expertise ✅
- [x] 3 core offerings: Destination Weddings, Wedding Cinema, Editorial Photography
- [x] High-contrast numbering and evocative descriptions
- [x] Editorial imagery for each discipline

---

## Phase 16 — Final Cinematic CTA ✅
- [x] Dual opposing diagonal marquees (±3 degrees)
- [x] Large magnetic circular CTA button: "START YOUR STORY"
- [x] Mobile fallback without magnetic offset

---

## Phase 17 — Contact Section ✅
- [x] 6-field inquiry form (Name, Phone, Email, Date, Destination, Story)
- [x] WhatsApp direct communication link
- [x] Form submission feedback state

---

## Phase 18 — Footer ✅
- [x] Official `SEF STUDIO ERATO` logo badge
- [x] Studio coordinates, contact numbers, and social links
- [x] Clean copyright notice

---

## Phase 19 — Universal Custom Cursor ✅
- [x] Crisp white center dot + outer ring with difference blend mode
- [x] **100% visible everywhere** across both light and dark backgrounds
- [x] Interactive scaling on links, buttons, and video ("PLAY" label)
- [x] Smooth lerp animation
- [x] Automatic disable on touch devices

---

## Phase 20 — Developer UI Cleanliness ✅
- [x] Next.js dev indicator badge ("N" in bottom-left) completely hidden via `next.config.ts` and CSS overrides
- [x] Floating green WhatsApp button positioned cleanly at bottom-right (`right: 28px, bottom: 28px`)

---

## Phase 21 — Responsive & Cross-Device QA ✅
- [x] Desktop 1440×900: Verified via browser subagent screenshot
- [x] Mobile 390×844: Verified via browser subagent screenshot
- [x] No horizontal page overflow on body
- [x] All images resting at 100% opacity with full color contrast
- [x] Build passes cleanly (`next build` exits with code 0)
