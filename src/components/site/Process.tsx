import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-t border-border/50 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Creative Process"
          title="How the work actually gets made."
          intro="Seven stages, in order. Most of the value is created before anything moves."
        />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          <div className="absolute top-0 bottom-0 left-[3px] w-px bg-border/60 md:left-1/2" />
          <motion.div
            style={{ height }}
            className="absolute top-0 left-[3px] w-px bg-gradient-to-b from-gold via-gold/60 to-transparent md:left-1/2"
          />

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} y={40}>
                <div className="relative md:grid md:grid-cols-2 md:gap-16">
                  <span className="absolute top-2 -left-8 h-2 w-2 -translate-x-[3px] rounded-full bg-gold md:left-1/2 md:-translate-x-1/2" />
                  <div
                    className={
                      i % 2
                        ? "md:col-start-2 md:pl-4"
                        : "md:col-start-1 md:flex md:flex-col md:items-end md:pr-4 md:text-right"
                    }
                  >
                    <span className="font-display text-5xl font-light text-foreground/15">
                      {s.n}
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-light md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>

              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
