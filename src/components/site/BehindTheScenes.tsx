import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import desk from "@/assets/bts-desk.jpg";
import motionStill from "@/assets/work-motion.jpg";
import branding from "@/assets/work-branding.jpg";
import { Reveal, SectionHeading } from "./Reveal";

const frames = [
  { src: desk, caption: "The room. 2am, most nights.", span: "md:col-span-7" },
  { src: motionStill, caption: "Material test — 46 iterations.", span: "md:col-span-5" },
  { src: branding, caption: "Emboss proofs before the final run.", span: "md:col-span-12" },
];

export function BehindTheScenes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="studio"
      ref={ref}
      className="film-grain relative scroll-mt-24 overflow-hidden border-t border-border/50 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Behind the Scenes"
          title="The unglamorous half of the work."
          intro="Sketches, storyboards, failed tests and the setup it all comes out of."
        />

        <motion.div style={{ y }} className="mt-14 grid gap-6 md:grid-cols-12">
          {frames.map((f, i) => (
            <Reveal key={i} delay={i * 0.1} className={f.span}>
              <figure className="group relative overflow-hidden border border-border/60">
                <img
                  src={f.src}
                  alt={f.caption}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover grayscale-[0.3] transition-all duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 text-xs tracking-wide text-muted-foreground">
                  {f.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
