import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Aperture, Camera, Film, Grid3x3, Layers, Type } from "lucide-react";

const floaters = [
  { Icon: Camera, top: "16%", left: "8%", size: 46, delay: 0, dur: 22 },
  { Icon: Aperture, top: "70%", left: "12%", size: 38, delay: 3, dur: 26 },
  { Icon: Film, top: "26%", left: "84%", size: 42, delay: 1.5, dur: 24 },
  { Icon: Layers, top: "76%", left: "80%", size: 34, delay: 4, dur: 28 },
  { Icon: Type, top: "50%", left: "92%", size: 30, delay: 2.4, dur: 20 },
  { Icon: Grid3x3, top: "12%", left: "60%", size: 28, delay: 5, dur: 30 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      ref={ref}
      className="film-grain relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* depth: light pools */}
      <div
        className="animate-breathe pointer-events-none absolute top-[-18%] left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.8 0.11 85 / 0.13), transparent 65%)",
        }}
      />
      <div
        className="animate-breathe pointer-events-none absolute right-[-10%] bottom-[-20%] h-[38rem] w-[38rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.36 0.07 258 / 0.35), transparent 68%)",
          animationDelay: "3s",
        }}
      />

      {/* design grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* floating creative objects */}
      {floaters.map(({ Icon, top, left, size, delay, dur }, i) => (
        <div
          key={i}
          className="animate-drift pointer-events-none absolute hidden text-foreground/[0.09] sm:block"
          style={{ top, left, animationDelay: `${delay}s`, animationDuration: `${dur}s` }}
          aria-hidden
        >
          <Icon size={size} strokeWidth={0.9} />
        </div>
      ))}

      <motion.div
        style={{ y, opacity, scale }}
        className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24 lg:px-10"
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.7, ease }}
        >
          Independent Creative — Available for select work
        </motion.p>

        <motion.h1
          className="mt-7 font-display text-[clamp(1.7rem,8vw,9rem)] leading-[0.92] font-light tracking-[0.01em] break-words"
          initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 3.5, ease }}
        >
          <span className="text-gold-foil animate-foil">EXTACYOFCRYPTO</span>
        </motion.h1>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.7rem] tracking-[0.26em] text-muted-foreground uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 4, ease }}
        >
          <span>Motion Designer</span>
          <span className="h-px w-8 bg-border" />
          <span>Video Editor</span>
          <span className="h-px w-8 bg-border" />
          <span>Graphic Designer</span>
        </motion.div>

        <motion.p
          className="mt-12 max-w-xl font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.25] font-light text-foreground/85"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 4.2, ease }}
        >
          I create visuals that capture attention and tell unforgettable stories.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4.4, ease }}
        >
          <a
            href="#work"
            className="group relative overflow-hidden border border-gold/50 px-8 py-4 text-[0.68rem] tracking-[0.26em] uppercase transition-colors duration-500 hover:text-primary-foreground"
          >
            <span className="relative z-10">View the work</span>
            <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="px-2 py-4 text-[0.68rem] tracking-[0.26em] text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground"
          >
            Start a project
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8, duration: 1.2 }}
      >
        <motion.div
          className="h-14 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
