/**
 * Studio Erato Films — Site Data
 *
 * This file is the single source of truth for all content.
 * Mark any unverified information with a TODO comment.
 * Replace with CMS queries when ready.
 */

// ─── Navigation ────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Stories", number: "01", href: "#stories" },
  { label: "Photography", number: "02", href: "#gallery" },
  { label: "Films", number: "03", href: "#films" },
  { label: "Destinations", number: "04", href: "#expertise" },
  { label: "About", number: "05", href: "#about" },
  { label: "Testimonials", number: "06", href: "#testimonials" },
  { label: "Contact", number: "07", href: "#contact" },
];

// ─── Studio Info ────────────────────────────────────────────────────────────
export const studioInfo = {
  name: "Studio Erato Films",
  tagline: "Destination Weddings & Bespoke Films",
  phone: "+91 83838 50942",
  email: "studioeratofilms@gmail.com",
  instagram: "https://www.instagram.com/studioeratofilms_official/",
  youtube: "https://www.youtube.com/@studioeratofilms", // TODO: confirm exact URL
  address: "Ranchi, Jharkhand, India", // TODO: confirm full address with client
  // NOTE: Canon India Educator — verify exact preferred wording before publishing
  canonNote: "Educator @canonindia_official",
};

// ─── Stats ──────────────────────────────────────────────────────────────────
export const stats = [
  { value: "30", label: "Weddings Per Year" },
  { value: "INDIA", label: "Destination Coverage" },
  { value: "EDITORIAL", label: "Signature Photography" },
  { value: "FILMS + PHOTO", label: "Complete Storytelling" },
];

// ─── Recognition ────────────────────────────────────────────────────────────
// Only include verified recognition. Mark unconfirmed items.
export const recognitionItems = [
  "Canon India Educator", // NOTE: confirm exact preferred wording
  "Destination Wedding Specialist",
  "Documentary & Editorial Photography",
  "Premium Wedding Storytelling",
  "Cinematic Wedding Films",
  "Limited to 30 Weddings / Year",
];

// ─── Featured Stories ───────────────────────────────────────────────────────
// TODO: Replace with real story data when client provides it
export const featuredStories = [
  {
    id: "story-01",
    title: "A Love Written in Light",
    couple: "Priya & Arjun",
    destination: "Udaipur, Rajasthan",
    image: "/media/656290104_18344915914213275_541231953036252694_n.webp",
    href: "#stories",
  },
  {
    id: "story-02",
    title: "Where the Sea Meets Forever",
    couple: "Divya & Rohan",
    destination: "Goa",
    image: "/media/670874657_18347699566213275_545745951307292834_n.webp",
    href: "#stories",
  },
  {
    id: "story-03",
    title: "Mountains Bear Witness",
    couple: "Isha & Vikram",
    destination: "Shimla, Himachal Pradesh",
    image: "/media/671127604_18347588581213275_1370585711998979617_n..webp",
    href: "#stories",
  },
];

// ─── Gallery Images ─────────────────────────────────────────────────────────
// Curated sequence: warm → destination → emotional → drama → dark/red → monochrome
export const galleryImages = [
  {
    src: "/media/634155514_18339191569213275_1527773574703593361_n.webp",
    alt: "Wedding portrait in warm golden light",
    aspect: "portrait" as const,
  },
  {
    src: "/media/636985358_18339401398213275_2000453047405081442_n.webp",
    alt: "Editorial wedding ceremony",
    aspect: "landscape" as const,
  },
  {
    src: "/media/656290104_18344915914213275_541231953036252694_n.webp",
    alt: "Couple in destination setting",
    aspect: "portrait" as const,
  },
  {
    src: "/media/657664418_18345102004213275_2807622205563018235_n.webp",
    alt: "Cinematic wedding moment",
    aspect: "square" as const,
  },
  {
    src: "/media/657701808_18345817549213275_2174793956474839260_n.webp",
    alt: "Destination wedding landscape",
    aspect: "landscape" as const,
  },
  {
    src: "/media/658342707_18345437518213275_4643074072632916732_n.webp",
    alt: "Emotional wedding closeup",
    aspect: "portrait" as const,
  },
  {
    src: "/media/658854606_18344786011213275_8789297992173618236_n.webp",
    alt: "Editorial wedding photography",
    aspect: "landscape" as const,
  },
  {
    src: "/media/658935425_18346036585213275_6101334407927748541_n.webp",
    alt: "Couple wedding portrait",
    aspect: "portrait" as const,
  },
  {
    src: "/media/661409090_18345582982213275_1842429382387803767_n.webp",
    alt: "Wedding ceremony documentation",
    aspect: "landscape" as const,
  },
  {
    src: "/media/669547191_18346326103213275_170584385173151797_n.webp",
    alt: "Dramatic wedding portrait",
    aspect: "portrait" as const,
  },
  {
    src: "/media/669742843_18346875676213275_5279556379386879834_n.webp",
    alt: "Warm cinematic wedding moment",
    aspect: "landscape" as const,
  },
  {
    src: "/media/670434112_18347478913213275_3652673986511226749_n.webp",
    alt: "Intimate wedding detail",
    aspect: "square" as const,
  },
  {
    src: "/media/670874657_18347699566213275_545745951307292834_n.webp",
    alt: "Destination wedding editorial",
    aspect: "portrait" as const,
  },
  {
    src: "/media/671067093_18347588593213275_7704476978487218991_n.webp",
    alt: "Black and white wedding portrait",
    aspect: "portrait" as const,
  },
  {
    src: "/media/671127604_18347588581213275_1370585711998979617_n..webp",
    alt: "Monochrome wedding editorial",
    aspect: "landscape" as const,
  },
  {
    src: "/media/673877650_18348469795213275_8937251723405448163_n.webp",
    alt: "Cinematic wedding film still",
    aspect: "landscape" as const,
  },
  {
    src: "/media/703811537_18352529086213275_7548367982599588121_n.webp",
    alt: "Wedding day details",
    aspect: "square" as const,
  },
  {
    src: "/media/711349266_18353891533213275_3418128902524103217_n.webp",
    alt: "Editorial wedding portrait",
    aspect: "portrait" as const,
  },
];

// ─── Reels ──────────────────────────────────────────────────────────────────
export const reels = [
  {
    id: "reel-01",
    title: "Udaipur Wedding Film",
    poster: "/media/656290104_18344915914213275_541231953036252694_n.webp",
    videoUrl: "/reels/reel.mp4",
    duration: "3:24",
  },
  {
    id: "reel-02",
    title: "Goa Destination Wedding",
    poster: "/media/670874657_18347699566213275_545745951307292834_n.webp",
    videoUrl: "/reels/reel2.mp4",
    duration: "4:12",
  },
  {
    id: "reel-03",
    title: "Editorial Pre-Wedding",
    poster: "/media/658342707_18345437518213275_4643074072632916732_n.webp",
    videoUrl: "/reels/reel3.mp4",
    duration: "2:45",
  },
  {
    id: "reel-04",
    title: "Cinematic Highlights",
    poster: "/media/671127604_18347588581213275_1370585711998979617_n..webp",
    videoUrl: "/reels/reel4.mp4",
    duration: "5:18",
  },
];

// ─── Films ──────────────────────────────────────────────────────────────────
export const films = [
  {
    id: "film-01",
    title: "A Story Written in Light",
    couple: "Priya & Arjun",
    destination: "Udaipur",
    poster: "/media/656290104_18344915914213275_541231953036252694_n.webp",
    videoUrl: "#", // TODO: real video URL
    featured: true,
    duration: "12:30",
  },
  {
    id: "film-02",
    title: "The Goa Chapter",
    couple: "Divya & Rohan",
    destination: "Goa",
    poster: "/media/670874657_18347699566213275_545745951307292834_n.webp",
    videoUrl: "#",
    featured: false,
    duration: "8:15",
  },
  {
    id: "film-03",
    title: "Mountain Vows",
    couple: "Isha & Vikram",
    destination: "Shimla",
    poster: "/media/658854606_18344786011213275_8789297992173618236_n.webp",
    videoUrl: "#",
    featured: false,
    duration: "9:45",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────
// TODO: Replace with real client testimonials
export const testimonials = [
  {
    id: "t-01",
    text: "Studio Erato captured not just our wedding, but the feeling of every moment. The film made us cry every single time we watched it.",
    couple: "A & P",
    destination: "Udaipur",
    hasPhoto: true,
    image: "/media/657664418_18345102004213275_2807622205563018235_n.webp",
  },
  {
    id: "t-02",
    text: "From the very first call, we knew they understood exactly what we wanted. The photos are beyond anything we imagined.",
    couple: "D & R",
    destination: "Goa",
    hasPhoto: false,
    image: null,
  },
  {
    id: "t-03",
    text: "The attention to detail, the storytelling, the way they moved through our wedding invisibly but caught everything — pure magic.",
    couple: "I & V",
    destination: "Himachal",
    hasPhoto: true,
    image: "/media/658342707_18345437518213275_4643074072632916732_n.webp",
  },
];

// ─── Expertise ───────────────────────────────────────────────────────────────
export const expertise = [
  {
    id: "exp-01",
    title: "Destination Weddings",
    description: "We travel across India to capture your wedding story wherever it unfolds.",
    image: "/media/657701808_18345817549213275_2174793956474839260_n.webp",
  },
  {
    id: "exp-02",
    title: "Editorial Photography",
    description: "Documentary emotion with editorial precision. Every frame, intentional.",
    image: "/media/669547191_18346326103213275_170584385173151797_n.webp",
  },
  {
    id: "exp-03",
    title: "Wedding Storytelling",
    description: "Bespoke cinematic films that tell your complete wedding story.",
    image: "/media/671127604_18347588581213275_1370585711998979617_n..webp",
  },
];
