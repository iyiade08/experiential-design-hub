import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 250, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 250, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(!!el?.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full border border-[oklch(0.8_0.11_85_/_0.6)]"
          animate={{
            width: active ? 52 : 26,
            height: active ? 52 : 26,
            marginLeft: active ? -26 : -13,
            marginTop: active ? -26 : -13,
            backgroundColor: active
              ? "oklch(0.8 0.11 85 / 0.10)"
              : "oklch(0.8 0.11 85 / 0)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[91] hidden h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold md:block"
        style={{ x, y }}
      />
    </>
  );
}
