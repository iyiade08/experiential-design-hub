import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, ChevronDown, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";

const instructions = [
  {
    title: "Unzip the archive",
    text: "Extract the ZIP into a folder of your choice. Keep the folder structure intact.",
  },
  {
    title: "Install dependencies",
    text: "Open a terminal in that folder and run: npm install — this downloads the packages the site needs.",
  },
  {
    title: "Start the dev server",
    text: "Then run: npm run dev. The portfolio will open locally at http://localhost:8080.",
  },
];

export function DownloadCodebase() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="download"
      className="film-grain relative scroll-mt-24 overflow-hidden border-t border-border/50 py-28 md:py-36"
    >
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <div className="glass-panel relative overflow-hidden p-8 md:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.8 0.11 85 / 0.15), transparent 65%)",
            }}
          />

          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Reveal>
                <p className="eyebrow">Source</p>
                <h2 className="font-display mt-5 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] font-light">
                  Take the codebase{" "}
                  <span className="text-gold-foil animate-foil">with you.</span>
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  Download the full project source as a ZIP. It includes every
                  component, route, asset and configuration file used to build
                  this portfolio.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4">
                <a
                  href="/codebase.zip"
                  download="EXTACYOFCRYPTO-portfolio.zip"
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden border border-gold/50 px-8 py-4 text-[0.68rem] tracking-[0.26em] uppercase transition-colors duration-500 hover:text-primary-foreground"
                >
                  <Download
                    size={16}
                    strokeWidth={1.5}
                    className="relative z-10"
                  />
                  <span className="relative z-10">Download ZIP</span>
                  <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                </a>

                <button
                  type="button"
                  onClick={() => setOpen((o) => !o)}
                  className="inline-flex items-center justify-center gap-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-gold"
                >
                  {open ? "Hide instructions" : "Show instructions"}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            </Reveal>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden"
              >
                <div className="mt-10 grid gap-6 border-t border-border/50 pt-10 md:grid-cols-3">
                  {instructions.map((step, i) => (
                    <div key={step.title} className="relative">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold">
                        <span className="font-display text-lg font-light">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-light">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-md border border-border/50 bg-background/40 p-4">
                  <p className="flex items-center gap-2 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                    <Terminal size={14} />
                    Requires Node.js and npm
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
