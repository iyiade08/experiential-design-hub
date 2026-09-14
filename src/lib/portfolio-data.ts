import brandSting from "@/assets/work-brand-sting.mp4";
import fashionSaleFlyer from "@/assets/work-fashion-sale-flyer.jpeg";
import gotemBenefits from "@/assets/work-gotem-benefits.jpeg";
import gotemComingSoon from "@/assets/work-gotem-coming-soon.jpeg";
import greatVaultFlyer from "@/assets/work-great-vault-flyer.jpeg";
import longFormEdit from "@/assets/work-long-form-edit-01.mp4";
import miraAiCampaign from "@/assets/work-mira-ai-campaign.jpeg";
import motionClipOne from "@/assets/work-motion-01.mp4";
import motionClipTwo from "@/assets/work-motion-02.mp4";
import orionScienceIdentity from "@/assets/work-orion-science-identity.jpeg";
import ownit9jaDesireOwn from "@/assets/work-ownit9ja-desire-own.jpeg";
import ownit9jaDreamHome from "@/assets/work-ownit9ja-dream-home.jpeg";
import ownit9jaDreamProperty from "@/assets/work-ownit9ja-dream-property.jpeg";
import ownit9jaHomeHeart from "@/assets/work-ownit9ja-home-heart.jpeg";
import ownit9jaPowerHands from "@/assets/work-ownit9ja-power-hands.jpeg";
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
    slug: "long-form-campaign-edit",
    title: "Long Form Campaign Edit",
    category: "Video Editing",
    year: "2026",
    client: "Client project",
    media: longFormEdit,
    mediaType: "video",
    overview:
      "A longer landscape edit shaped from campaign footage into a complete, watchable piece with a clearer beginning, rhythm and finish.",
    objective:
      "Keep the story moving for more than a minute while still making the final export light enough for web playback.",
    tools: ["Premiere Pro", "After Effects"],
    role: "Timeline edit, pacing, motion polish and final export.",
    outcome: "Delivered as a complete 1:19 campaign video for portfolio and client presentation.",
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
    slug: "gotem-coming-soon",
    title: "Gotem Coming Soon",
    category: "Graphic Design",
    year: "2026",
    client: "Gotem",
    media: gotemComingSoon,
    mediaType: "image",
    overview:
      "A bold launch announcement graphic using strong contrast, simplified shapes and a direct teaser message.",
    objective:
      "Make the upcoming Polimec launch feel immediate and memorable with a simple social-first announcement.",
    tools: ["Photoshop", "Illustrator"],
    role: "Announcement design, composition, type hierarchy and export.",
    outcome: "Prepared as a clean teaser graphic for online rollout.",
  },
  {
    slug: "gotem-benefits-infographic",
    title: "Gotem Benefits Infographic",
    category: "Graphic Design",
    year: "2026",
    client: "Gotem",
    media: gotemBenefits,
    mediaType: "image",
    overview:
      "A simplified benefits graphic explaining Gotem's fraud investigation and background-check positioning.",
    objective:
      "Turn service points into a direct visual layout that can be understood quickly in-feed.",
    tools: ["Photoshop", "Illustrator"],
    role: "Information layout, icon composition and visual hierarchy.",
    outcome: "Delivered as an educational campaign graphic for social distribution.",
  },
  {
    slug: "mira-verified-intelligence",
    title: "MIRA Verified Intelligence",
    category: "Graphic Design",
    year: "2026",
    client: "MIRA Network",
    media: miraAiCampaign,
    mediaType: "image",
    overview:
      "A tech-forward campaign visual for an AI trust layer, built around dark UI-inspired contrast and robotic imagery.",
    objective:
      "Position the product as futuristic and credible while keeping the join CTA readable.",
    tools: ["Photoshop", "Illustrator"],
    role: "Poster design, art direction, typography and export.",
    outcome: "Delivered as a polished digital campaign graphic.",
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
    slug: "orion-science-identity",
    title: "Science Identity System",
    category: "Branding",
    year: "2026",
    client: "Science infrastructure concept",
    media: orionScienceIdentity,
    mediaType: "image",
    overview:
      "A dark science-themed identity visual built around a central mark, technical icons and a precise monochrome system.",
    objective:
      "Create a brand-facing image that feels clean, research-led and futuristic without overloading the layout.",
    tools: ["Illustrator", "Photoshop"],
    role: "Identity visual, icon styling, layout and brand mood direction.",
    outcome: "Prepared as a reusable visual direction piece for a science or technology brand.",
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
  {
    slug: "ownit9ja-home-heart",
    title: "Ownit9ja Home Is Heart",
    category: "Social Media",
    year: "2026",
    client: "Ownit9ja Properties & Interior Ltd",
    media: ownit9jaHomeHeart,
    mediaType: "image",
    overview:
      "A warm real estate social post pairing family-focused lifestyle imagery with contact and location information.",
    objective:
      "Make the property brand feel personal and trustworthy while keeping the enquiry details visible.",
    tools: ["Photoshop", "Illustrator"],
    role: "Social post design, image treatment, layout and export.",
    outcome: "Prepared as a branded social campaign asset for audience engagement.",
  },
  {
    slug: "ownit9ja-desire-own",
    title: "Ownit9ja Desire To Own",
    category: "Social Media",
    year: "2026",
    client: "Ownit9ja Properties & Interior Ltd",
    media: ownit9jaDesireOwn,
    mediaType: "image",
    overview:
      "A property-search social creative using aspirational copy, real estate scenery and agent-focused imagery.",
    objective: "Encourage enquiries by framing ownership as the next clear step for the audience.",
    tools: ["Photoshop", "Illustrator"],
    role: "Campaign layout, visual selection, typography and export.",
    outcome: "Delivered as a square-format real estate social post.",
  },
  {
    slug: "ownit9ja-power-hands",
    title: "Ownit9ja Power In Your Hands",
    category: "Social Media",
    year: "2026",
    client: "Ownit9ja Properties & Interior Ltd",
    media: ownit9jaPowerHands,
    mediaType: "image",
    overview:
      "A clean investment-themed social graphic centered on property ownership and future planning.",
    objective:
      "Communicate control and confidence while preserving strong brand recall through color and layout.",
    tools: ["Photoshop", "Illustrator"],
    role: "Social artwork, copy placement, brand styling and export.",
    outcome: "Prepared for feed posting as part of the Ownit9ja campaign set.",
  },
  {
    slug: "ownit9ja-dream-property",
    title: "Ownit9ja Dream Property",
    category: "Social Media",
    year: "2026",
    client: "Ownit9ja Properties & Interior Ltd",
    media: ownit9jaDreamProperty,
    mediaType: "image",
    overview:
      "A search-themed real estate post using binocular imagery and property backgrounds to sell discovery.",
    objective:
      "Make the service promise easy to understand: helping clients find the right property.",
    tools: ["Photoshop", "Illustrator"],
    role: "Concept layout, image compositing, type treatment and export.",
    outcome: "Delivered as a branded social asset for property enquiries.",
  },
  {
    slug: "ownit9ja-dream-home-peek",
    title: "Ownit9ja Dream Home Peek",
    category: "Social Media",
    year: "2026",
    client: "Ownit9ja Properties & Interior Ltd",
    media: ownit9jaDreamHome,
    mediaType: "image",
    overview:
      "A polished social visual using a keyhole-style reveal to frame the idea of previewing a dream home.",
    objective:
      "Create curiosity around property discovery while keeping the brand's contact layer consistent.",
    tools: ["Photoshop", "Illustrator"],
    role: "Visual concept, compositing, typography and export.",
    outcome: "Prepared as part of a consistent real estate social campaign series.",
  },
];

export const stats = [
  { label: "Projects Completed", value: 100, suffix: "+" },
  { label: "Clients Worked With", value: 50, suffix: "" },
  { label: "Videos Edited", value: 200, suffix: "+" },
  { label: "Designs Created", value: 700, suffix: "+" },
  { label: "Years of Experience", value: 2, suffix: "" },
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
    projects: ["Long Form Campaign Edit", "Edited Campaign Cut", "Social Promo Reel"],
  },
  {
    name: "After Effects",
    use: "Everything that moves — title systems, compositing, simulations and campaign animation.",
    projects: ["Motion Promo Sequence", "Kinetic Social Opener", "Brand Sting"],
  },
  {
    name: "Photoshop",
    use: "Frame retouching, texture work and matte painting for cinematic key art.",
    projects: [
      "Ownit9ja Home Is Heart",
      "MIRA Verified Intelligence",
      "Great Vault Premium Escape",
    ],
  },
  {
    name: "Illustrator",
    use: "Monograms, marks and vector systems built to hold up at any scale.",
    projects: ["Gotem Benefits Infographic", "Science Identity System"],
  },
  {
    name: "Blender",
    use: "3D product form, material studies and lighting that behaves like a real set.",
    projects: ["Brand Sting", "Motion Promo Sequence"],
  },
  {
    name: "Figma",
    use: "Layout systems, campaign grids and collaborative hand-off with clients.",
    projects: ["Gotem Coming Soon", "Tonye & Preye Fashion Sale"],
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
