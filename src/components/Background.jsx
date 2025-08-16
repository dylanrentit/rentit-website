import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Background() {
  const { scrollY, scrollYProgress } = useScroll();
  const y = useSpring(scrollY, { stiffness: 40, damping: 20, mass: 0.8 });
  const parallaxSlow = useTransform(y, (v) => v * 0.12);
  const parallaxFast = useTransform(y, (v) => v * -0.06);
  const wobble = useTransform(scrollYProgress, (p) => Math.sin(p * Math.PI * 2 * 1.1) * 40);
  const wobbleOpp = useTransform(wobble, (v) => -v * 0.6);

  // Reusable floating animation for particles
  const floatingAnim = {
    y: ["0%", "-5%", "0%", "5%", "0%"],
    x: ["0%", "3%", "0%", "-3%", "0%"],
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Existing big gradient blobs */}
      <div
        className="absolute -right-1/4 -top-1/4 w-[65vw] h-[65vw] rounded-full blur-[100px] opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.16), transparent 70%)"
        }}
      />
      <div
        className="absolute -left-1/4 -bottom-1/4 w-[70vw] h-[70vw] rounded-full blur-[110px] opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.12), transparent 70%)"
        }}
      />
      <motion.div
        className="absolute -right-20 top-[12vh] w-[38vw] h-[38vw] rounded-full blur-3xl mix-blend-multiply"
        style={{
          y: parallaxSlow,
          x: wobble,
          background:
            "radial-gradient(closest-side, rgba(168,85,247,0.22), rgba(168,85,247,0.08) 60%, transparent 70%)"
        }}
      />
      <motion.div
        className="absolute -left-24 bottom-[10vh] w-[34vw] h-[34vw] rounded-full blur-3xl mix-blend-multiply"
        style={{
          y: parallaxFast,
          x: wobbleOpp,
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.18), rgba(236,72,153,0.08) 60%, transparent 70%)"
        }}
      />

      {/* Soft animated energy wave */}
      <motion.div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 h-24 w-[120vw] rounded-full blur-2xl opacity-[0.18] mix-blend-soft-light"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          y: useTransform(parallaxSlow, (v) => v * 0.3),
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(168,85,247,0.35) 20%, rgba(236,72,153,0.40) 50%, rgba(168,85,247,0.35) 80%, rgba(255,255,255,0) 100%)"
        }}
      />

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl opacity-30"
          style={{
            width: `${20 + i * 5}px`,
            height: `${20 + i * 5}px`,
            background:
              i % 2 === 0
                ? "rgba(168,85,247,0.5)"
                : "rgba(236,72,153,0.5)",
            top: `${10 + i * 15}%`,
            left: `${15 + i * 12}%`
          }}
          animate={floatingAnim}
          transition={{
            delay: i * 2,
            duration: 14 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsating energy ripples */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/20"
          style={{
            width: "200px",
            height: "200px"
          }}
          animate={{
            scale: [1, 3],
            opacity: [0.3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 2
          }}
        />
      ))}

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 hidden md:block opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.5px, transparent 0.5px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0",
          color: "#0f172a"
        }}
      />
    </div>
  );
}
