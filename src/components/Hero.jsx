import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORDS = ["bikes", "tools", "kayaks", "cameras", "drones", "tents", "speakers", "It"];
const STEP_MS = 2500;

export default function Hero() {
  // measure the widest word so the slot doesn't reflow horizontally
  const [slotWidth, setSlotWidth] = useState(null);
  const measurerRef = useRef(null);

  useLayoutEffect(() => {
    if (!measurerRef.current) return;
    const widths = Array.from(measurerRef.current.querySelectorAll("span")).map(
      (el) => el.offsetWidth
    );
    setSlotWidth(Math.max(...widths, 0));
  }, []);

  // word cycling (respects reduced motion)
  const prefersReducedMotion = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), STEP_MS);
    return () => clearInterval(t);
  }, [prefersReducedMotion]);

  const word = WORDS[i];

  return (
    <section id="hero" className="section-pad relative z-10">
      <div className="container-xy grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-4 relative">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Beta</span>
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">NZ Made</span>
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Sharing Economy</span>
          </div>

          {/* NEW HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
          <span className="block">Buy less.</span>

          {/* make this line an anchor + underline */}
          <span className="block relative ray-anchor" data-ray="underline">
            <span className="align-baseline">Rent&nbsp;</span>
            <span
              className="relative inline-block align-baseline h-[1em] overflow-hidden top-[5px]"
              style={{ width: slotWidth ? `${slotWidth}px` : "auto" }}
            >
      <AnimatePresence mode="wait">
      <motion.span
        key={word}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 bottom-0 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-fuchsia-500 whitespace-nowrap"
        style={{ lineHeight: 1 }}
      >
        {word}
      </motion.span>

      </AnimatePresence>
    </span>
  </span>
</h1>


          <p className="text-slate-600 text-lg max-w-xl">
            Rent anything, anytime, anywhere in New Zealand.
          </p>

          <div className="flex gap-3">
            <a className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold shadow-card hover:bg-brand-700 transition" href="#signup">
              Get early access
            </a>
            <a className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50" href="#how">
              See how it works
            </a>
          </div>

          {/* marquee stays the same */}
          <div className="overflow-hidden border-y border-slate-200 mt-6">
            <ul className="flex gap-8 py-2 text-xs uppercase tracking-[.2em] text-slate-500 animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <li>power tools</li><li>cameras</li><li>kayaks</li><li>dj gear</li><li>camping</li>
              <li>e-bikes</li><li>lenses</li><li>party gear</li><li>gardening</li><li>surfboards</li>
            </ul>
          </div>

          {/* hidden measurer for slot width */}
          <div
            ref={measurerRef}
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none"
            style={{ left: -9999, top: -9999, position: "absolute" }}
          >
            {WORDS.map((w) => (
              <span key={w} className="font-extrabold text-4xl md:text-6xl inline-block mr-4">
                {w}
              </span>
            ))}
          </div>
        </div>

<div className="relative grid place-items-center">
  <div className="w-[420px] md:w-[520px] aspect-[9/18] rounded-[40px] overflow-hidden ray-anchor">
    <img src="/images/screen-home.png" alt="App screenshot" className="w-full h-full object-cover" />
  </div>
  <div className="absolute -z-10 -bottom-12 h-48 w-full blur-3xl bg-brand-500/30 rounded-full" />
</div>

</div>



      {/* marquee keyframes (as before) */}
      <style>{`@keyframes marquee{to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
