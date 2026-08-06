import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import { categoryAccent, projects, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — EXTACYOFCRYPTO" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = `${loaderData.project.title} — EXTACYOFCRYPTO`;
    const d = loaderData.project.overview.slice(0, 155);
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const accent = categoryAccent[project.category];
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <CustomCursor />
      <Nav />
      <main className="film-grain pt-32 pb-28 md:pt-40">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-gold"
          >
            <ArrowLeft size={13} strokeWidth={1.3} /> All work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <span
              className="border px-3 py-1.5 text-[0.58rem] tracking-[0.22em] uppercase"
              style={{ color: accent, borderColor: accent }}
            >
              {project.category}
            </span>
            <h1 className="mt-7 font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] font-light">
              {project.title}
            </h1>
            <p className="mt-5 text-sm tracking-[0.14em] text-muted-foreground uppercase">
              {project.client} — {project.year}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 max-w-6xl px-6 lg:px-10"
        >
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={960}
            className="aspect-[16/9] w-full border border-border/60 object-cover"
          />
        </motion.div>

        <div className="mx-auto mt-20 max-w-5xl px-6 lg:px-10">
          <div className="grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
            <div className="space-y-12">
              {[
                { h: "Overview", b: project.overview },
                { h: "Creative objective", b: project.objective },
                { h: "My role", b: project.role },
                { h: "Final outcome", b: project.outcome },
              ].map((s) => (
                <Reveal key={s.h}>
                  <p className="eyebrow">{s.h}</p>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85">{s.b}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="glass-panel p-8">
                <p className="eyebrow">Tools used</p>
                <ul className="mt-5 space-y-3">
                  {project.tools.map((t) => (
                    <li key={t} className="border-b border-border/50 pb-3 text-sm last:border-0">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {project.testimonial && (
            <Reveal>
              <figure className="glass-panel mt-20 p-10 md:p-14">
                <blockquote className="font-display text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.35] font-light">
                  "{project.testimonial.quote}"
                </blockquote>
                <figcaption className="mt-8 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {project.testimonial.author} — {project.testimonial.role}
                </figcaption>
              </figure>
            </Reveal>
          )}

          <div className="mt-24 border-t border-border/50 pt-14">
            <p className="eyebrow">Next projects</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/work/$slug"
                  params={{ slug: p.slug }}
                  className="group block overflow-hidden border border-border/60"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl font-light">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
