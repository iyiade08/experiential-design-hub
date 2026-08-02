import { motion } from "motion/react";
import { testimonials } from "@/lib/portfolio-data";
import { SectionHeading } from "./Reveal";

export function Testimonials() {
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-t border-border/50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow="Testimonials" title="What clients say afterwards." />
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <motion.figure
              key={i}
              className="glass-panel w-[20rem] shrink-0 p-8 md:w-[26rem]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 7 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <span className="font-display text-5xl leading-none text-gold/50">"</span>
              <blockquote className="mt-3 font-display text-lg leading-relaxed font-light text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-border/60 pt-5">
                <p className="text-sm">{t.author}</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
