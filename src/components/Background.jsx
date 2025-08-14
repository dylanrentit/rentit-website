
import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Background() {
  const { scrollY, scrollYProgress } = useScroll();
  const y = useSpring(scrollY, { stiffness: 40, damping: 20, mass: 0.8 });
  const parallaxSlow  = useTransform(y, (v) => v * 0.12);
  const parallaxFast  = useTransform(y, (v) => v * -0.06);
  const wobble        = useTransform(scrollYProgress, (p) => Math.sin(p * Math.PI * 2 * 1.1) * 40);
  const wobbleOpp     = useTransform(wobble, (v) => -v * 0.6);
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -right-1/4 -top-1/4 w-[65vw] h-[65vw] rounded-full blur-[100px] opacity-70"
        style={{ background:"radial-gradient(closest-side, rgba(168,85,247,0.16), transparent 70%)"}}/>
      <div className="absolute -left-1/4 -bottom-1/4 w-[70vw] h-[70vw] rounded-full blur-[110px] opacity-70"
        style={{ background:"radial-gradient(closest-side, rgba(236,72,153,0.12), transparent 70%)"}}/>
      <motion.div className="absolute -right-20 top-[12vh] w-[38vw] h-[38vw] rounded-full blur-3xl mix-blend-multiply"
        style={{ y: parallaxSlow, x: wobble, background:"radial-gradient(closest-side, rgba(168,85,247,0.22), rgba(168,85,247,0.08) 60%, transparent 70%)"}}/>
      <motion.div className="absolute -left-24 bottom-[10vh] w-[34vw] h-[34vw] rounded-full blur-3xl mix-blend-multiply"
        style={{ y: parallaxFast, x: wobbleOpp, background:"radial-gradient(closest-side, rgba(236,72,153,0.18), rgba(236,72,153,0.08) 60%, transparent 70%)"}}/>
      <motion.div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-24 w-[120vw] rounded-full blur-2xl opacity-[0.18] mix-blend-soft-light"
        animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: useTransform(parallaxSlow, (v) => v * 0.3),
          background:"linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(168,85,247,0.35) 20%, rgba(236,72,153,0.40) 50%, rgba(168,85,247,0.35) 80%, rgba(255,255,255,0) 100%)"}}/>
      <div className="absolute inset-0 hidden md:block opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage:"radial-gradient(currentColor 0.5px, transparent 0.5px)", backgroundSize:"18px 18px", backgroundPosition:"0 0", color:"#0f172a"}}/>
    </div>
  );
}
