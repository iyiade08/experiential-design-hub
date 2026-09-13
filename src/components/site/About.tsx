import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import portrait from "@/assets/ledumbiny-about.jpeg";
import { stats } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 22 });
  const text = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  return (
    <span ref={ref} className="font-display text-[clamp(2.2rem,5vw,3.4rem)] font-light">
      <motion.span>{text}</motion.span>
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src={portrait}
                alt="Portrait illustration of LEDUMBINY creating artwork"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale-[0.25] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] hover:grayscale-0"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "var(--gradient-veil)", opacity: 0.55 }}
              />
            </div>
            <div className="absolute -right-3 -bottom-3 h-24 w-24 border-r border-b border-gold/40 md:-right-6 md:-bottom-6 md:h-32 md:w-32" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] font-light">
              A quiet obsession with how things move.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I design and animate at the intersection of web3 and brand storytelling — work that
                requires actually understanding the space, not just executing a brief. I handle
                everything myself, from concept to final export, across both static and motion. That
                means no learning curve on your dime, and no freelancers to coordinate — just one
                person accountable for the whole project.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
