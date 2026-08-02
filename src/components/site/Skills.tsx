import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { tools } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  const [active, setActive] = useState(0);
  const tool = tools[active] ?? tools[0]!;

  return (
    <section className="relative border-t border-border/50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Toolkit"
          title="The software, and what I actually do with it."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {tools.map((t, i) => (
                <li key={t.name}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-baseline justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`font-display text-[clamp(1.6rem,3.4vw,2.4rem)] font-light transition-all duration-500 ${
                        active === i
                          ? "translate-x-2 text-gold"
                          : "text-foreground/55 group-hover:translate-x-1 group-hover:text-foreground"
                      }`}
                    >
                      {t.name}
                    </span>
                    <span className="shrink-0 text-[0.6rem] tracking-[0.2em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-panel relative min-h-[18rem] p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="eyebrow">In practice</p>
                  <h3 className="mt-4 font-display text-3xl font-light">{tool.name}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{tool.use}</p>
                  <div className="mt-8">
                    <p className="text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase">
                      Used on
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tool.projects.map((p) => (
                        <span
                          key={p}
                          className="border border-gold/30 px-3 py-1.5 text-xs text-gold/90"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
