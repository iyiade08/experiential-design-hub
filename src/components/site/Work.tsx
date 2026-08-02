import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, categoryAccent, projects, type Category } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

function TiltCard({ project }: { project: (typeof projects)[number] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 6, y: px * 8 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
      }}
      className="group relative"
    >
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden border border-border/60 bg-card"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          />
          <div
            className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-40"
            style={{ background: "var(--gradient-veil)" }}
          />
          <span
            className="absolute top-4 left-4 border px-3 py-1.5 text-[0.58rem] tracking-[0.22em] uppercase backdrop-blur-md"
            style={{
              color: categoryAccent[project.category],
              borderColor: categoryAccent[project.category],
            }}
          >
            {project.category}
          </span>
          <span className="absolute right-4 bottom-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full border border-gold/50 bg-background/50 text-gold opacity-0 backdrop-blur-md transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={17} strokeWidth={1.2} />
          </span>
        </div>

        <div className="flex items-end justify-between gap-4 p-6">
          <div className="min-w-0">
            <h3 className="truncate font-display text-2xl font-light">{project.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {project.client} — {project.year}
            </p>
          </div>
          <span className="shrink-0 text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase">
            View
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const list = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="relative scroll-mt-24 border-t border-border/50 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Five disciplines, one standard."
          intro="Each category has its own language. Pick a room and walk through it."
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`border px-5 py-2.5 text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-500 ${
                  filter === c
                    ? "border-gold/70 bg-gold/10 text-gold"
                    : "border-border/70 text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-14 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <TiltCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
