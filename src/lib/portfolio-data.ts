import motionImg from "@/assets/work-motion.jpg";
import videoImg from "@/assets/work-video.jpg";
import graphicImg from "@/assets/work-graphic.jpg";
import brandingImg from "@/assets/work-branding.jpg";
import socialImg from "@/assets/work-social.jpg";

export type Category =
  | "Motion Design"
  | "Video Editing"
  | "Graphic Design"
  | "Branding"
  | "Social Media";

export const categories: Category[] = [
  "Motion Design",
  "Video Editing",
  "Graphic Design",
  "Branding",
  "Social Media",
];

export const categoryAccent: Record<Category, string> = {
  "Motion Design": "var(--gold)",
  "Video Editing": "var(--teal)",
  "Graphic Design": "var(--terracotta)",
  Branding: "var(--navy)",
  "Social Media": "var(--plum)",
};

export type Project = {
  slug: string;
  title: string;
  category: Category;
  year: string;
  client: string;
  image: string;
  overview: string;
  objective: string;
  tools: string[];
  role: string;
  outcome: string;
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "liquid-gold",
    title: "Liquid Gold",
    category: "Motion Design",
    year: "2025",
    client: "AURUM Reserve",
    image: motionImg,
    overview:
      "A 45-second brand film built entirely from simulated metal, designed to introduce a private reserve product without ever showing the product itself.",
    objective:
      "Translate the idea of quiet wealth into movement — no hard cuts, no captions, only material and light doing the talking.",
    tools: ["After Effects", "Blender", "Photoshop"],
    role: "Concept, 3D art direction, simulation, compositing and final grade.",
    outcome:
      "Used as the launch anchor across three markets. Average watch-through of 84% on paid placements.",
    testimonial: {
      quote:
        "It looked like something a studio ten times the size would deliver. The restraint is what sold it internally.",
      author: "Marielle Vance",
      role: "Brand Director, AURUM Reserve",
    },
  },
  {
    slug: "night-shift",
    title: "Night Shift",
    category: "Video Editing",
    year: "2025",
    client: "Halcyon Films",
    image: videoImg,
    overview:
      "A short-form documentary cut from 14 hours of low-light footage, shaped into a six-minute piece about the people who keep a city running after midnight.",
    objective:
      "Find a rhythm that felt patient rather than punchy, and let silence carry as much weight as the dialogue.",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    role: "Lead editor, sound design pass and colour grade supervision.",
    outcome:
      "Official selection at two regional festivals and the studio's most-watched release of the year.",
  },
  {
    slug: "type-specimen",
    title: "Specimen No. 07",
    category: "Graphic Design",
    year: "2024",
    client: "Foundry Nine",
    image: graphicImg,
    overview:
      "A printed and digital type specimen for a display serif, built around a strict two-column grid and heavy negative space.",
    objective:
      "Make a typeface feel collectible — something designers would keep on a shelf rather than scroll past.",
    tools: ["Illustrator", "Photoshop", "Figma"],
    role: "Editorial layout, cover system and production artwork.",
    outcome: "First print run of 500 copies sold out in eleven days.",
    testimonial: {
      quote: "Every spread had a reason to exist. That is rarer than it should be.",
      author: "Idris Kaye",
      role: "Founder, Foundry Nine",
    },
  },
  {
    slug: "obsidian-identity",
    title: "Obsidian",
    category: "Branding",
    year: "2024",
    client: "Obsidian Atelier",
    image: brandingImg,
    overview:
      "A full identity system for a made-to-order leather atelier — monogram, stationery, packaging and a motion signature for film endings.",
    objective:
      "Build a mark that survives being embossed at 8mm and animated at 4K without losing character.",
    tools: ["Illustrator", "Blender", "After Effects"],
    role: "Identity design, packaging art direction and motion signature.",
    outcome:
      "Rolled out across retail, packaging and film. Unprompted brand recall doubled in post-launch surveys.",
  },
  {
    slug: "signal-campaign",
    title: "Signal",
    category: "Social Media",
    year: "2025",
    client: "Terra Studio",
    image: socialImg,
    overview:
      "A 30-asset vertical campaign engineered so each frame works standalone and as part of a continuous scroll narrative.",
    objective:
      "Stop the thumb in under one second while keeping the brand's calm, premium register intact.",
    tools: ["After Effects", "Premiere Pro", "Figma"],
    role: "Campaign art direction, animation and delivery across formats.",
    outcome: "3.1M organic impressions and a 210% lift in profile visits over six weeks.",
    testimonial: {
      quote:
        "Premium and performance usually pull in opposite directions. This campaign did both.",
      author: "Noor Haddad",
      role: "Head of Growth, Terra Studio",
    },
  },
  {
    slug: "kinetic-titles",
    title: "Kinetic Titles",
    category: "Motion Design",
    year: "2024",
    client: "Meridian Conference",
    image: motionImg,
    overview:
      "An opening title sequence and modular lower-third system for a two-day design conference.",
    objective:
      "Give a live event a cinematic spine that could be reassembled by the venue team without breaking.",
    tools: ["After Effects", "Illustrator"],
    role: "Sequence design, animation and template hand-off.",
    outcome: "Reused across two subsequent editions with zero design supervision needed.",
  },
];

export const stats = [
  { label: "Projects Completed", value: 148, suffix: "+" },
  { label: "Clients Worked With", value: 62, suffix: "" },
  { label: "Videos Edited", value: 430, suffix: "+" },
  { label: "Designs Created", value: 900, suffix: "+" },
  { label: "Years of Experience", value: 7, suffix: "" },
];

export const processSteps = [
  {
    n: "01",
    title: "Discovery",
    body: "Understanding the brand, the audience and what success actually looks like before touching a single frame.",
  },
  {
    n: "02",
    title: "Research",
    body: "References, competitor teardowns and visual language studies to find the space nobody else is occupying.",
  },
  {
    n: "03",
    title: "Planning",
    body: "Storyboards, moodboards and structure. The hardest problems get solved on paper, not in the timeline.",
  },
  {
    n: "04",
    title: "Design",
    body: "Type, colour, composition and detail — building the still frames that everything else grows from.",
  },
  {
    n: "05",
    title: "Animation",
    body: "Timing, easing and weight. Movement is written like a sentence, with rhythm and punctuation.",
  },
  {
    n: "06",
    title: "Editing",
    body: "Pacing, sound design and grade, cutting until nothing can be removed without loss.",
  },
  {
    n: "07",
    title: "Final Delivery",
    body: "Format-ready masters, source files and templates so the work keeps living after hand-off.",
  },
];

export const tools = [
  {
    name: "Premiere Pro",
    use: "Long-form assembly, multicam documentary work and precise sound-led pacing.",
    projects: ["Night Shift", "Signal"],
  },
  {
    name: "After Effects",
    use: "Everything that moves — title systems, compositing, simulations and campaign animation.",
    projects: ["Liquid Gold", "Kinetic Titles", "Obsidian"],
  },
  {
    name: "Photoshop",
    use: "Frame retouching, texture work and matte painting for cinematic key art.",
    projects: ["Liquid Gold", "Specimen No. 07"],
  },
  {
    name: "Illustrator",
    use: "Monograms, marks and vector systems built to hold up at any scale.",
    projects: ["Obsidian", "Specimen No. 07"],
  },
  {
    name: "Blender",
    use: "3D product form, material studies and lighting that behaves like a real set.",
    projects: ["Liquid Gold", "Obsidian"],
  },
  {
    name: "Figma",
    use: "Layout systems, campaign grids and collaborative hand-off with clients.",
    projects: ["Signal", "Specimen No. 07"],
  },
];

export const testimonials = [
  {
    quote:
      "He treats a thirty-second edit like a feature film. The care shows in every frame we shipped.",
    author: "Marielle Vance",
    role: "Brand Director, AURUM Reserve",
  },
  {
    quote:
      "Briefs came back better than we wrote them. That is the difference between a vendor and a creative partner.",
    author: "Noor Haddad",
    role: "Head of Growth, Terra Studio",
  },
  {
    quote:
      "Calm, fast and completely unflappable under a deadline. Our launch would not have landed without him.",
    author: "Idris Kaye",
    role: "Founder, Foundry Nine",
  },
  {
    quote:
      "The motion signature he built is now the most recognisable part of our brand.",
    author: "Lena Ostrom",
    role: "Creative Lead, Obsidian Atelier",
  },
];
