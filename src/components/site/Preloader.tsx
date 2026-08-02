import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAME = "EXTACYOFCRYPTO";

export function Preloader({ onDone }: { onDone?: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 3400);
    return () => clearTimeout(t);
  }, [onDone]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.08_0.004_285)] film-grain"
          exit={{ opacity: 0, filter: "blur(12px)", scale: 1.06 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="pointer-events-none absolute h-[42rem] w-[42rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.8 0.11 85 / 0.16), transparent 65%)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="relative px-6 text-center">
            <h1 className="flex flex-wrap justify-center font-display text-[clamp(1.9rem,7vw,5rem)] leading-none font-light tracking-[0.16em]">
              {NAME.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className="text-gold-foil animate-foil inline-block"
                  initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1.5,
                    delay: 0.12 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            <motion.div
              className="gold-line mx-auto mt-8 h-px"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "min(22rem, 70vw)", opacity: 1 }}
              transition={{ duration: 1.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.p
              className="eyebrow mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.1 }}
            >
              Motion · Film · Design
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
