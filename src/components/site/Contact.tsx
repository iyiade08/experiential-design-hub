import { motion, AnimatePresence } from "motion/react";
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="film-grain relative scroll-mt-24 overflow-hidden border-t border-border/50 py-28 md:py-40"
    >
      <div
        className="animate-breathe pointer-events-none absolute bottom-[-30%] left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.8 0.11 85 / 0.12), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-light">
                Let's make something
                <br />
                <span className="text-gold-foil animate-foil">worth watching.</span>
              </h2>
              <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
                Taking on a limited number of projects. Tell me about the brand, the deadline and
                the idea — I'll reply within two working days.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12">
                <a
                  href="mailto:hello@extacyofcrypto.com"
                  className="font-display text-xl font-light text-foreground/90 transition-colors hover:text-gold"
                >
                  hello@extacyofcrypto.com
                </a>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition-colors hover:text-gold"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="glass-panel relative min-h-[26rem] p-8 md:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex min-h-[22rem] flex-col items-center justify-center text-center"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 14,
                        delay: 0.15,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold"
                    >
                      <Check size={26} strokeWidth={1.2} />
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.8 }}
                      className="mt-7 font-display text-3xl font-light"
                    >
                      Message received.
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      className="mt-3 max-w-xs text-sm text-muted-foreground"
                    >
                      Thank you — I'll be in touch shortly with next steps.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                    transition={{ duration: 0.5 }}
                    className="space-y-7"
                  >
                    {[
                      { id: "name", label: "Your name", type: "text" },
                      { id: "email", label: "Email", type: "email" },
                      { id: "company", label: "Brand / company", type: "text" },
                    ].map((f) => (
                      <div key={f.id} className="group">
                        <label
                          htmlFor={f.id}
                          className="text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase"
                        >
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          name={f.id}
                          type={f.type}
                          required={f.id !== "company"}
                          className="mt-2 w-full border-b border-border bg-transparent pb-2 text-sm outline-none transition-colors duration-500 focus:border-gold"
                        />
                      </div>
                    ))}
                    <div>
                      <label
                        htmlFor="brief"
                        className="text-[0.6rem] tracking-[0.22em] text-muted-foreground uppercase"
                      >
                        The project
                      </label>
                      <textarea
                        id="brief"
                        name="brief"
                        rows={4}
                        required
                        className="mt-2 w-full resize-none border-b border-border bg-transparent pb-2 text-sm outline-none transition-colors duration-500 focus:border-gold"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden border border-gold/50 px-8 py-4 text-[0.68rem] tracking-[0.26em] uppercase transition-colors duration-500 hover:text-primary-foreground"
                    >
                      <span className="relative z-10">Send the brief</span>
                      <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase sm:flex-row">
          <span>© {new Date().getFullYear()} EXTACYOFCRYPTO</span>
          <span>Motion · Film · Design</span>
        </div>
      </div>
    </section>
  );
}
