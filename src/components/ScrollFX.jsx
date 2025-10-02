import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Fade/slide up when the element enters the viewport (once). */
export function Reveal({ as = "div", y = 16, delay = 0, className = "", children }) {
  const Comp = motion[as] || motion.div;
  const prefers = useReducedMotion();
  return (
    <Comp
      className={className}
      initial={prefers ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}

/** Moves children up/down slightly as the user scrolls past this section. */
export function Parallax({ strength = 60, className = "", children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const prefers = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={prefers ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/** Decorative, scroll-reactive gradient orb behind content. */
export function Halo({
  size = 560,
  from = "from-brand-500/20",
  via = "via-fuchsia-400/15",
  to = "to-brand-500/5",
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const prefers = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.06]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        style={prefers ? { width: size, height: size } : { width: size, height: size, y, scale }}
        className={`absolute left-1/2 -translate-x-1/2 top-0 rounded-full blur-3xl bg-gradient-to-br ${from} ${via} ${to} ${className}`}
      />
    </div>
  );
}
