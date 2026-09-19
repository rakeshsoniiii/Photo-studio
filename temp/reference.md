# Studio Erato Films — Reference Notes

## Main Reference

### Piixonova
Website:
`https://piixonova.com/`

Use Piixonova as a reference for:
- premium editorial pacing
- image-first storytelling
- scroll-linked movement
- oversized photography
- horizontally driven gallery sections
- cinematic menu behavior
- large typography
- curated wedding-story presentation
- visual transitions between light/dark sections
- reels / films presentation
- closing CTA energy

Do **not**:
- copy source code
- copy exact sections one-to-one
- copy text
- copy images
- copy logos
- copy proprietary illustrations
- duplicate exact spacing/measurements
- present the result as Piixonova's design

The goal is to capture the interaction quality and build an original Studio Erato identity.

---

## Reference Interaction Map

### 1. Minimal Header
Piixonova-style idea:
- almost no visible navigation
- centered brand
- simple menu trigger
- keeps attention on imagery

Studio Erato adaptation:
- Contact left
- Studio Erato center
- Menu right

---

### 2. Fullscreen Navigation
Reference characteristics:
- dramatic dark overlay
- large serif links
- strong transition back to content
- feels like a separate cinematic layer

Studio Erato adaptation:
- black menu
- monochrome wedding image
- numbered navigation
- curved upward curtain close

---

### 3. Scroll Storytelling
Reference characteristic:
Sections do not simply fade in.

Use a mix of:
- clipped media reveals
- scale shifts
- pinned sections
- horizontal motion
- subtle text translation
- moving marquees
- parallax

Important:
animation should be tied to storytelling, not added randomly.

---

### 4. Horizontal Photography Journey
Main reference behavior:
- user scrolls vertically
- section pins
- wide photo layout moves horizontally
- creates long visual journey

Studio Erato adaptation:
- editorial collage rather than uniform cards
- color progression
- finish in monochrome
- internal image parallax

Technical reference:

```ts
const distance = track.scrollWidth - window.innerWidth;

gsap.to(track, {
  x: -distance,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: `+=${distance}`,
    scrub: 1,
    pin: true,
    invalidateOnRefresh: true,
  },
});
```

The production version must account for:
- image loading
- resize
- font loading
- mobile
- reduced motion

---

## Studio Erato Existing Brand Notes

Public information supplied for the project:

**Studio Erato Films**
- Destination Weddings & Bespoke Films
- Documentary & Editorial Style Photography
- Limited to 30 weddings per year
- Travels across India
- Ranchi, Jharkhand
- Public phone: +91 83838 50942
- Public email: studioeratofilms@gmail.com
- Instagram: `studioeratofilms_official`

A public Instagram profile was described as mentioning:
- Educator @canonindia_official

Before publishing, verify the exact preferred wording for any Canon relationship/association.

Do not imply:
- sponsorship
- official partnership
- endorsement
unless the studio confirms it.

---

## Suggested Studio Erato Content Hierarchy

```txt
HEADER
↓
CINEMATIC HERO
↓
STATS / POSITIONING
↓
RECOGNITION
↓
SELECTED STORIES
↓
REELS
↓
PINNED HORIZONTAL PHOTOGRAPHY SHOWCASE
↓
ABOUT / BEHIND THE STORIES
↓
FILMS
↓
TESTIMONIALS
↓
EXPERTISE
↓
CINEMATIC END CTA
↓
CONTACT
↓
FOOTER
```

---

## Suggested Copy Direction

Hero:
`Weddings, Told Like Cinema.`

Support:
`Documentary emotion. Editorial frames. Timeless films.`

Story section:
`Weddings that stay with you.`

Reels:
`Little films. Big feelings.`

About:
`Behind the Stories`

Films:
`Stories in Motion`

Testimonials:
`What our couples remember.`

Final CTA:
`You've seen our stories. Now let's hear yours.`

Primary CTA:
`CHECK AVAILABILITY`

---

## Animation References to Reproduce in Spirit

### Curved Curtain
A dark overlay exits upward with a soft curved lower edge.

### Editorial Reveal
Media revealed with clip-path while image slowly scales down.

### Scrubbed Parallax
Multiple media layers travel at different speeds tied to scroll.

### Pinned Horizontal Gallery
Vertical scroll → horizontal gallery translation.

### Custom Play Cursor
Cursor changes to `PLAY FILM` over video cards.

### Opposing Marquees
Two large diagonal tickers move in opposite directions.

### Magnetic CTA
Circular CTA slightly follows pointer position.

---

## Technical Reference Stack

Preferred stack:

```txt
Next.js
TypeScript
Tailwind CSS
GSAP
GSAP ScrollTrigger
Lenis
Embla Carousel
Next/Image
Lucide React
Cloudinary-ready media layer
```

Optional later:
```txt
Sanity CMS
Vercel
React Hook Form
Zod
Resend / Form backend
```

---

## Code Quality References

Animation code should:
- use `gsap.context()`
- clean up ScrollTriggers
- avoid global query selectors where refs make more sense
- avoid measuring layout before images settle
- use `invalidateOnRefresh`
- use transforms
- avoid scroll event listeners when ScrollTrigger can handle it
- not mix several scroll engines

Lenis + GSAP:
- Lenis should be the smooth-scroll engine
- ScrollTrigger should update from Lenis
- GSAP ticker should drive Lenis RAF
- remove native smooth scrolling

---

## Media Rules

Never scrape Piixonova media.

Use placeholders such as:

```txt
/public/media/hero-01.jpg
/public/media/hero-02.jpg
/public/media/hero-03.jpg
/public/media/story-01.jpg
/public/media/story-02.jpg
/public/media/story-03.jpg
/public/media/reel-01.jpg
/public/media/reel-02.jpg
/public/media/gallery-01.jpg
...
/public/media/gallery-20.jpg
/public/media/about-studio.jpg
/public/media/film-featured.jpg
```

Later replace with Studio Erato originals.

---

## Responsive Reference Philosophy

Desktop:
- rich cinematic experience
- pinned scroll
- custom cursor
- larger parallax

Mobile:
- preserve visual quality
- simplify effects
- reduce pinned distances
- prefer touch swipe
- no custom cursor
- optimize media aggressively

The mobile experience should still feel premium without forcing desktop effects.

---

## Important Legal / Creative Boundary

Reference sites are inspiration only.

The final work should be original:
- original component structure
- original copy
- original layout decisions
- original Studio Erato media
- original styling
- original animations implementation

The purpose is to learn from the quality of the reference, not duplicate it.
