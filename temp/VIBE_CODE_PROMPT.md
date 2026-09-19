# Vibe Coding Master Prompt — Studio Erato Films

You are the lead frontend engineer and motion designer for a premium wedding photography website.

Build a production-quality cinematic website for **Studio Erato Films**.

Before writing code, read these files in full:

1. `goal.md`
2. `design.md`
3. `reference.md`
4. `todo.md`

Treat those files as the project specification.

Do not rush into generating the entire website in one pass.

Work phase-by-phase and maintain `todo.md` as the source of truth. Whenever you finish a task, mark it complete. If you discover a missing technical task, add it to `todo.md` in the correct phase.

---

## PROJECT PURPOSE

Studio Erato Films is positioned as a premium destination-wedding photography and filmmaking brand.

The site must feel:
- cinematic
- editorial
- emotionally rich
- luxurious
- intentionally designed

It must NOT feel like:
- a generic photographer template
- a SaaS website
- an AI-generated landing page
- a Bootstrap card grid
- an over-animated portfolio

The experience should be inspired by the interaction quality of Piixonova, but the final design and implementation must be original.

Never copy:
- Piixonova source code
- exact copy
- exact layout
- images
- proprietary assets
- logos
- CSS values

Recreate only the design principles and interaction patterns described in `reference.md`.

---

## REQUIRED STACK

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- Lenis
- Embla Carousel only where a true carousel is needed
- Next/Image
- Lucide React

Do not use Framer Motion for the main scroll animation system.

GSAP owns:
- scroll animations
- menu transitions
- parallax
- pinned gallery
- marquee enhancement
- custom cursor motion
- magnetic CTA effects

Lenis owns smooth scrolling.

Keep animation engines coordinated.

---

## FIRST ACTION

Inspect the existing repository.

Then:

1. Summarize the current project structure.
2. Identify what already exists.
3. List what must be created or changed.
4. Compare the repo against `todo.md`.
5. Do not delete working code without reason.
6. Then start Phase 0 / the first incomplete phase.

Do not ask me basic questions that are already answered in the markdown specifications.

When content or media is unavailable, create tasteful placeholders and continue.

---

## DEVELOPMENT APPROACH

Build in this order:

### STEP 1 — Foundation
- Next.js shell
- typography
- color tokens
- global CSS
- data structure
- GSAP setup
- Lenis setup
- reduced-motion handling

### STEP 2 — Signature Menu
Build the fullscreen navigation.

This must be excellent before proceeding.

Important:
- black fullscreen overlay
- large numbered serif links
- left cinematic image
- right contact information
- keyboard accessible
- Escape to close
- body scroll lock
- desktop cursor enhancement

Most importantly:
the close animation must resemble a theatrical curtain moving upward.

Create a curved lower edge using SVG mask, clip-path, or another robust technique.

Animate with GSAP:
- duration ~1.2 sec
- ease `power4.inOut`

The reveal must be smooth and should never flash white or expose broken layers.

### STEP 3 — Hero
Build the asymmetric collage hero.

Desktop:
- 5–7 photos
- editorial placement
- large display typography
- only subtle mouse parallax
- scroll-linked depth

Mobile:
- about 3 photos
- no cursor effects
- simplified movement

Copy:

Eyebrow:
`DESTINATION WEDDINGS · BESPOKE FILMS`

Headline:
`Weddings,`
`Told Like Cinema.`

Body:
`Documentary emotion. Editorial frames. Timeless films.`

CTA:
`EXPLORE STORIES`

Secondary:
`CHECK AVAILABILITY`

Trust marker:
`ONLY 30 WEDDINGS / YEAR`

### STEP 4 — Horizontal Gallery
Treat this as the most important engineering task.

Build a giant editorial photography track.

On desktop:
- section pins
- normal vertical scrolling moves the photography track horizontally
- layout spans several viewport widths
- use mixed image dimensions
- no uniform cards
- scrub animation
- internal image parallax

Use dynamic calculation:
`track.scrollWidth - window.innerWidth`

Refresh after media settles.

Use:
- `pin: true`
- `scrub`
- `invalidateOnRefresh: true`

Do not hardcode a fixed horizontal translation.

Create a visual sequence:
1. warm weddings
2. destination scenes
3. emotional closeups
4. editorial drama
5. dark / red imagery
6. black-and-white finish

On mobile:
do not blindly reproduce the desktop pinned experience.
Prefer a shorter touch-native horizontal layout if it performs better.

### STEP 5 — Remaining Sections
Then implement:
- Stats
- Recognition
- Selected Stories
- Reels
- About
- Films
- Film Modal
- Testimonials
- Expertise
- Final CTA
- Contact
- Footer

---

## MOTION RULES

Animations should feel expensive.

Use:
- slow, controlled timing
- transform and opacity
- editorial clip reveals
- subtle parallax
- scrub where appropriate

Avoid:
- bouncing
- excessive spring effects
- glowing UI
- unnecessary blur
- every element fading in
- motion with no narrative purpose

Recommended eases:
- `power4.inOut` for cinematic transitions
- `power3.out` for entrance motion
- `none` for scrubbed motion

---

## PERFORMANCE RULES

This is a photography-heavy website.

Performance is mandatory.

Use:
- Next/Image
- explicit aspect ratios
- responsive `sizes`
- lazy loading below fold
- AVIF/WebP-compatible architecture
- Cloudinary-ready URLs later
- poster-first videos
- `preload="metadata"` or `none`
- transforms rather than layout animation

Do not:
- load 30 original 8MB images at startup
- autoplay multiple full-resolution videos
- animate width/height/top/left every frame
- create heavy JS effects on mobile

Keep the first viewport intentionally light.

---

## ACCESSIBILITY

Must support:
- keyboard navigation
- focus states
- semantic headings
- alt text
- form labels
- Escape-close menu/modal
- focus trapping
- reduced motion

When `prefers-reduced-motion: reduce`:
- disable Lenis
- remove large parallax
- remove long scrub animations
- remove magnetic cursor behavior
- show content in a clean static layout

---

## PLACEHOLDER ASSETS

If real Studio Erato assets are not present, create placeholder references only.

Use paths like:

```txt
/public/media/hero-01.jpg
/public/media/hero-02.jpg
/public/media/hero-03.jpg

/public/media/story-01.jpg
/public/media/story-02.jpg
/public/media/story-03.jpg

/public/media/reel-01.jpg
/public/media/reel-02.jpg
/public/media/reel-03.jpg
/public/media/reel-04.jpg

/public/media/gallery-01.jpg
...
/public/media/gallery-20.jpg

/public/media/about-studio.jpg

/public/media/film-featured.jpg
/public/media/film-02.jpg
/public/media/film-03.jpg
```

Do not scrape Piixonova media.

If an image file is missing:
- render a graceful visual placeholder
- do not allow broken image icons
- keep development moving

---

## CONTENT INTEGRITY

Never fabricate:
- awards
- press features
- client numbers
- review counts
- wedding counts other than confirmed facts
- destinations
- celebrity clients
- official brand partnerships

Confirmed information can be stored in `lib/data.ts`.

Mark anything uncertain as placeholder content.

---

## COMPONENT ARCHITECTURE

Prefer this structure:

```txt
components/
  Header.tsx
  FullscreenMenu.tsx
  Hero.tsx
  StatsStrip.tsx
  RecognitionMarquee.tsx
  FeaturedStories.tsx
  ReelsSection.tsx
  HorizontalGallery.tsx
  AboutStudio.tsx
  FilmsSection.tsx
  FilmModal.tsx
  Testimonials.tsx
  Expertise.tsx
  FinalCTA.tsx
  ContactSection.tsx
  Footer.tsx
  CustomCursor.tsx

lib/
  gsap.ts
  lenis.ts
  data.ts
  utils.ts
```

Do not put the entire website inside one giant component.

---

## QUALITY BAR

Every section should answer:

1. Is the photography the hero?
2. Does this look custom-made?
3. Is this interaction useful?
4. Does it work on mobile?
5. Is it smooth?
6. Is it accessible?
7. Is it fast?
8. Is the content truthful?

If the answer is no, improve it before moving on.

---

## TESTING

After each major section:
- run the app
- check console
- check mobile
- check resize
- verify no overflow
- verify ScrollTrigger refresh
- verify cleanup
- test reduced motion

After building the horizontal gallery:
test it thoroughly before implementing the remaining sections.

---

## IMPORTANT CODING BEHAVIOR

Do not rewrite unrelated working files.

Do not keep generating duplicate components.

Do not leave dead experimental code.

When fixing a bug:
- identify the root cause
- make the smallest correct fix
- preserve working animation behavior

When a section is complete:
- mark corresponding items in `todo.md`
- briefly tell me what was completed
- mention any placeholder content still needed

---

## FINAL RESULT

The finished website should feel like:

**a luxury editorial wedding magazine + cinematic wedding film + modern interactive portfolio**

It should not feel like a template.

The strongest moments should be:
1. the fullscreen menu curtain transition
2. the asymmetric hero
3. the pinned horizontal photography journey
4. the cinematic films section
5. the diagonal closing CTA

Begin by inspecting the repo and reading all four markdown specification files.
