# Studio Erato Films — Design System & Experience Specification

## 1. Project Direction

Build a premium, cinematic, editorial website for **Studio Erato Films**, a destination-wedding photography and filmmaking studio.

The website should feel like a luxury wedding film rather than a normal service website.

Primary inspiration:
- Piixonova — interaction quality, scroll storytelling, editorial photography presentation
- Luxury editorial magazines — typography, whitespace, asymmetry
- Premium wedding films — emotional pacing, cinematic transitions

Do **not** copy another site's source code, exact layout, text, images, logo, or proprietary assets. Recreate the interaction language in an original Studio Erato visual system.

---

## 2. Brand Positioning

**Brand:** Studio Erato Films  
**Positioning:** Destination Weddings & Bespoke Films  
**Core Idea:** Stories that feel like cinema.

Suggested messaging:
- Weddings, Told Like Cinema.
- Documentary emotion. Editorial frames. Timeless films.
- Only 30 Weddings a Year.
- Your Story Deserves Our Complete Attention.
- You've Seen Our Stories. Now Let's Hear Yours.

---

## 3. Visual Style

### Overall Mood
- Luxury
- Editorial
- Cinematic
- Emotional
- Minimal
- Modern
- Warm
- Intentional

Avoid:
- SaaS-style cards everywhere
- Glassmorphism
- Neon gradients
- Excessive icons
- Generic AI-looking UI
- Overly rounded modern startup components
- Loud animations that compete with photography

### Color Palette

```txt
Warm Ivory      #F3F0E9
Soft Cream      #E9E4D9
Near Black      #0A0A09
Charcoal        #181817
Muted Burgundy  #6E1F2B
Warm Gold       #B9975B
Pure White      #FFFFFF
```

Gold should be used sparingly.

### Typography

**Editorial / Display**
- Instrument Serif
- Cormorant Garamond
- DM Serif Display as fallback

**Body / Interface**
- Inter
- Manrope
- Geist Sans as fallback

Typography principles:
- Large display headlines
- Small uppercase eyebrow text with letter spacing
- Short paragraphs
- Strong contrast between serif storytelling text and sans-serif UI
- Plenty of whitespace

---

## 4. Layout Principles

- Photography should dominate.
- Use asymmetric compositions.
- Alternate quiet and dramatic sections.
- Avoid predictable repeated card grids.
- Use large full-bleed media.
- Allow negative space.
- Vary image ratios:
  - 3:4
  - 4:5
  - 1:1
  - 16:9
  - tall editorial portraits
  - wide cinematic landscapes
- Desktop should feel like an editorial magazine.
- Mobile must feel intentionally redesigned, not shrunk.

---

## 5. Header

Desktop:
- Left: `Contact / Get in touch`
- Center: `STUDIO ERATO`
- Right: `Menu —`

Behavior:
- Thin and minimal
- Sticky
- Transparent or context-aware
- Smoothly switch text color when moving between light and dark sections
- No bulky nav bar

Mobile:
- Center logo
- Menu button right
- Contact icon optional
- Keep tap targets accessible

---

## 6. Fullscreen Menu

Clicking `Menu —` opens a full-screen black overlay.

Layout:

### Left
- Cinematic monochrome wedding image
- Can be narrow vertical media

### Center
Large serif links:

```txt
STORIES        01
PHOTOGRAPHY    02
FILMS          03
DESTINATIONS   04
ABOUT          05
TESTIMONIALS   06
CONTACT        07
```

### Right
- Email
- Phone
- Instagram
- YouTube

Interaction:
- Hover shifts text slightly
- Index number fades/moves
- Optional image preview changes on hover
- Custom circular cursor on desktop

### Menu Close Animation

Important signature interaction.

The menu should close like a theatrical black curtain:
- overlay moves upward
- lower edge is curved
- homepage underneath is revealed gradually
- duration ~1.1–1.4 sec
- easing: `power4.inOut`

Preferred implementation:
- GSAP
- SVG mask / clip-path
- fallback with oversized curved pseudo-element

---

## 7. Hero

Full viewport on desktop.

### Left / Media Side
Asymmetric collage with 5–7 images.

Example:
- 1 tall portrait
- 2 small editorial images
- 1 landscape
- 1 partially off-screen image
- 1 close-up

Subtle depth:
- different scroll speeds
- very slight mouse parallax on desktop
- no aggressive 3D

### Right / Copy Side

Eyebrow:
`DESTINATION WEDDINGS · BESPOKE FILMS`

Headline:
```txt
Weddings,
Told Like Cinema.
```

Supporting copy:
`Documentary emotion. Editorial frames. Timeless films.`

Primary CTA:
`EXPLORE STORIES`

Secondary CTA:
`CHECK AVAILABILITY`

Trust marker:
`ONLY 30 WEDDINGS / YEAR`

### Hero Scroll Motion
- Media moves upward at different speeds
- Headline moves slower
- Slight opacity reduction as section exits
- Stats strip rises into view
- Use scrubbed GSAP ScrollTrigger

---

## 8. Stats Strip

Large rounded horizontal capsule.

Suggested content:

```txt
30
Weddings Per Year

INDIA
Destination Coverage

EDITORIAL
Signature Photography

FILMS + PHOTO
Complete Storytelling
```

Motion:
- Fade + rise
- Keep subtle

---

## 9. Recognition Section

Purpose:
Credibility without breaking the luxury feel.

Possible real item already mentioned:
- Canon India Educator

Never invent awards, publications, clients, rankings, or numbers.

Behavior:
- very slow infinite horizontal marquee
- pause on hover
- low visual noise

---

## 10. Selected Stories

Eyebrow:
`SELECTED STORIES`

Headline:
`Weddings that stay with you.`

Use 3 featured stories.

Each story:
- large image or muted cinematic video
- couple name
- destination
- story title
- `VIEW STORY ↗`

Animation:
- clip-path reveal
- image starts around `scale(1.07)`
- settles to `scale(1)`
- text rises 35–50 px
- image and text should not animate at exactly the same speed

---

## 11. Reels

Eyebrow:
`REELS`

Headline:
`Little films. Big feelings.`

Desktop:
- 4 portrait 9:16 cards

Mobile:
- horizontal swipe carousel

Hover:
- scale 1.02
- poster darkens slightly
- play indicator expands
- optional muted preview on capable devices

---

## 12. Photography Showcase — Signature Section

This is the most important interaction.

### Desktop Behavior

Normal vertical scroll drives a huge horizontal gallery.

Implementation:
- pin the section
- horizontal track moves right-to-left
- ScrollTrigger with `scrub`
- end distance based on `track.scrollWidth - viewport width`

The gallery should feel like a visual journey, not a slider.

### Editorial Composition

Do not use uniform cards.

Sequence should vary:

```txt
Tall Portrait
    + Small Square

Large Landscape

Two Vertical Images

Large Emotional Closeup

Destination Wide Shot

Three-Image Editorial Cluster

Dramatic Red/Warm Section

Black & White Portrait Sequence
```

Visual progression:
1. warm/colorful
2. travel/destination
3. emotional closeups
4. editorial drama
5. darker tones / red
6. monochrome

### Internal Parallax
Images can move subtly inside their frames while the parent gallery travels horizontally.

Use transforms only.

### Mobile
Do not force the full desktop pinned experience.

Preferred:
- shorter horizontal scroll sequence, or
- native touch swipe gallery with snap behavior

Mobile should remain fast and intuitive.

---

## 13. About / Studio Transition

After the dramatic gallery, create a calm warm-white section.

Layout:
- portrait left
- copy right

Eyebrow:
`BEHIND THE STORIES`

Headline:
`Studio Erato Films`

Animation:
- image opacity 0 → 1
- image scale .96 → 1
- text y 40 → 0
- gentle timing

This section should feel quiet.

---

## 14. Films Section

Headline:
`STORIES IN MOTION`

Layout:
- one large 16:9 featured film
- mixed editorial grid underneath
- landscape + portrait combinations

Hover:
- custom cursor becomes `PLAY FILM`
- media slightly scales
- dark overlay appears

Click:
- open full-screen film modal
- dark background
- Escape closes
- keyboard accessible

---

## 15. Testimonials

Eyebrow:
`KIND WORDS`

Headline:
`What our couples remember.`

Layout:
- asymmetric masonry
- mix text-only and photo testimonials
- avoid tiny review cards

Animation:
- staggered entrance
- subtle movement only

---

## 16. Expertise

Primary:
- Destination Weddings
- Editorial Photography
- Wedding Storytelling

Optional:
- Pre-Weddings
- Wedding Films
- Drone
- Same-Day Edit

Cards should be image-led, not UI-heavy.

---

## 17. Final Cinematic CTA

Main text:

```txt
You've seen our stories.
Now let's hear yours.
```

Background interaction:
- two diagonal black marquee strips
- strip 1 moves left
- strip 2 moves right
- rotate roughly ±3°

Text examples:

Strip 1:
`WEDDINGS · DESTINATIONS · FILMS · LOVE · STORIES`

Strip 2:
`MEMORIES · EDITORIAL · FOREVER · CELEBRATIONS`

Center:
large circular CTA

`START YOUR STORY`

Desktop:
- magnetic hover effect

Mobile:
- static or very light animation

---

## 18. Contact / Footer

Large marquee:
`Get in Touch / Get in Touch / Get in Touch /`

Heading:
`Looking for your wedding storyteller?`

Form fields:
- Name
- Phone
- Email
- Wedding Date
- Wedding City / Destination
- Message

CTA:
`CHECK AVAILABILITY`

Footer:
- phone
- email
- Instagram
- YouTube
- address
- copyright

Optional discreet WhatsApp button.

---

## 19. Motion System

Use:
- GSAP
- GSAP ScrollTrigger
- Lenis

Avoid:
- multiple competing animation engines
- animating layout properties when transforms can be used
- excessive blur
- giant background videos everywhere

Recommended easing:
- `power4.inOut` for dramatic transitions
- `power3.out` for entrances
- `none` for scroll-scrub movement
- custom cubic bezier only if needed

Animation pacing:
- premium
- slower than a typical startup site
- no bouncing
- no springy SaaS feeling

---

## 20. Responsive Design

Breakpoints to test:
- 1440+
- 1280
- 1024
- 768
- 430
- 390
- 360

Mobile changes:
- hero collage reduces to ~3 images
- no custom cursor
- lighter motion
- native carousels where sensible
- shorter text
- touch-first controls
- horizontal gallery gets simplified
- video posters first
- menu remains fullscreen

---

## 21. Performance

Photography-heavy site, so performance is part of design.

Rules:
- Next/Image
- remote media via Cloudinary later
- AVIF/WebP
- responsive image sizes
- width/height or aspect ratio for every image
- lazy load below first viewport
- poster-first video
- no full video preload
- avoid loading dozens of full-resolution images immediately
- optimize fonts
- use transform/opacity for animation

Target:
- visually rich but not heavy
- minimal CLS
- good mobile performance

---

## 22. Accessibility

- semantic headings
- alt text
- visible focus states
- keyboard operable menu
- Escape closes menu/modal
- focus trapping
- reduced motion support
- sufficient contrast
- form labels

`prefers-reduced-motion` should disable:
- Lenis
- large scrub animations
- custom parallax
- autoplay motion where appropriate
