import brandSting from "@/assets/work-brand-sting.mp4";
import fashionSaleFlyer from "@/assets/work-fashion-sale-flyer.jpeg";
import greatVaultFlyer from "@/assets/work-great-vault-flyer.jpeg";
import motionClipOne from "@/assets/work-motion-01.mp4";
import motionClipTwo from "@/assets/work-motion-02.mp4";
import socialReel from "@/assets/work-social-reel.mp4";
import videoEditOne from "@/assets/work-video-edit-01.mp4";
import videoEditTwo from "@/assets/work-video-edit-02.mp4";

export type Category =
  "Motion Design" | "Video Editing" | "Graphic Design" | "Branding" | "Social Media";

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
  media: string;
  mediaType: "image" | "video";
  overview: string;
  objective: string;
  tools: string[];
  role: string;
  outcome: string;
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "motion-promo-sequence",
    title: "Motion Promo Sequence",
    category: "Motion Design",
    year: "2026",
    client: "Client campaign",
    media: motionClipOne,
    mediaType: "video",
    overview:
      "A short motion-led promo built for quick attention, using pacing, transitions and graphic movement to make the offer feel immediate.",
    objective:
      "Turn a simple promo asset into something that feels active enough for feeds, stories and paid placements.",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    role: "Motion design, pacing, graphic treatment and export.",
    outcome:
      "Delivered as a concise promotional clip ready for social publishing and client review.",
  },
  {
    slug: "kinetic-social-opener",
    title: "Kinetic Social Opener",
    category: "Motion Design",
    year: "2026",
    client: "Client campaign",
    media: motionClipTwo,
    mediaType: "video",
    overview:
      "A compact motion opener shaped for fast scroll environments where the first seconds need to carry the whole idea.",
    objective:
      "Create a polished moving asset with clear rhythm, clean framing and a strong visual entrance.",
    tools: ["After Effects", "Premiere Pro"],
    role: "Animation direction, edit timing and delivery.",
    outcome: "Prepared as a reusable motion piece for campaign rollout.",
  },
  {
    slug: "edited-campaign-cut",
    title: "Edited Campaign Cut",
    category: "Video Editing",
    year: "2026",
    client: "Client project",
    media: videoEditOne,
    mediaType: "video",
    overview:
      "A short edited campaign clip built from source footage and arranged into a clean, publishable sequence.",
    objective:
      "Shape the clip so the message lands quickly while keeping the transitions and pacing smooth.",
    tools: ["Premiere Pro", "After Effects"],
    role: "Editing, sequencing, timing and export.",
    outcome: "Finished as a lightweight web and social-ready video asset.",
  },
  {
    slug: "short-form-edit",
    title: "Short Form Edit",
    category: "Video Editing",
    year: "2026",
    client: "Client project",
    media: videoEditTwo,
    mediaType: "video",
    overview:
      "A fast, concise edited piece made for digital delivery, with the timing tightened for viewer retention.",
    objective:
      "Keep the edit direct, polished and easy to understand within the first few seconds.",
    tools: ["Premiere Pro", "After Effects"],
    role: "Cutdown editing, rhythm, visual clean-up and export.",
    outcome: "Delivered as a ready-to-post campaign edit.",
  },
  {
    slug: "great-vault-premium-escape",
    title: "Great Vault Premium Escape",
    category: "Graphic Design",
    year: "2026",
    client: "Great Vault Living",
    media: greatVaultFlyer,
    mediaType: "image",
    overview:
      "A promotional flyer for a premium Port Harcourt apartment offer, combining lifestyle imagery, feature hierarchy and direct booking information.",
    objective:
      "Make the accommodation feel comfortable and high-value while keeping the booking CTA impossible to miss.",
    tools: ["Photoshop", "Illustrator"],
    role: "Flyer design, layout, typography and production export.",
    outcome: "Prepared as a clear promotional creative for online sharing.",
  },
  {
    slug: "tonye-preye-fashion-sale",
    title: "Tonye & Preye Fashion Sale",
    category: "Graphic Design",
    year: "2026",
    client: "Tonye & Preye Fashion Home",
    media: fashionSaleFlyer,
    mediaType: "image",
    overview:
      "A retail fashion sale poster built around product cutouts, offer hierarchy and bold seasonal campaign energy.",
    objective:
      "Present multiple product categories while keeping the sale date, contact details and brand name readable.",
    tools: ["Photoshop", "Illustrator"],
    role: "Poster design, product composition, typography and export.",
    outcome: "Delivered as a finished social and print-ready campaign flyer.",
  },
  {
    slug: "brand-sting",
    title: "Brand Sting",
    category: "Branding",
    year: "2026",
    client: "Client brand asset",
    media: brandSting,
    mediaType: "video",
    overview:
      "A compact branded motion piece designed to give a campaign or page a stronger visual signature.",
    objective:
      "Create a short, memorable brand moment that can sit before, after or inside campaign content.",
    tools: ["After Effects", "Premiere Pro"],
    role: "Brand motion treatment, timing and export.",
    outcome: "Prepared as a reusable branded video asset.",
  },
  {
    slug: "social-promo-reel",
    title: "Social Promo Reel",
    category: "Social Media",
    year: "2026",
    client: "Client social campaign",
    media: socialReel,
    mediaType: "video",
    overview:
      "A short promotional reel formatted for fast-moving social channels and lightweight campaign distribution.",
    objective:
      "Hold attention with concise pacing while keeping the message simple enough for quick feed viewing.",
    tools: ["Premiere Pro", "After Effects"],
    role: "Social edit, motion polish and delivery formatting.",
    outcome: "Exported as a compact social-ready promo clip.",
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
    quote: "The motion signature he built is now the most recognisable part of our brand.",
    author: "Lena Ostrom",
    role: "Creative Lead, Obsidian Atelier",
  },
];
