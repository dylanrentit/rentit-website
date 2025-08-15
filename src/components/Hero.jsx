import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORDS = ["bikes", "tools", "kayaks", "cameras", "drones", "tents", "speakers", "It"];
const STEP_MS = 2500;

export default function Hero() {
  // measure widest word so slot width is stable
  const [slotWidth, setSlotWidth] = useState(null);
  const measurerRef = useRef(null);

  useLayoutEffect(() => {
    if (!measurerRef.current) return;
    const widths = Array.from(measurerRef.current.querySelectorAll("span")).map(
      (el) => el.offsetWidth
    );
    setSlotWidth(Math.max(...widths, 0));
  }, []);

  const prefersReducedMotion = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), STEP_MS);
    return () => clearInterval(t);
  }, [prefersReducedMotion]);

  const word = WORDS[i];

  return (
    <section id="hero" className="relative pt-20 md:pt-24 lg:pt-28">
      {/* add horizontal padding on small screens so nothing hits screen edges */}
      <div className="container-xy px-4 sm:px-6 lg:px-0 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div className="order-1 space-y-4">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Beta</span>
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">NZ Made</span>
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Sharing Economy</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            <span className="block">Buy less.</span>
            <span className="block">
              <span className="align-baseline">Rent&nbsp;</span>
              <span
                className="relative inline-block align-baseline h-[1em] overflow-hidden translate-y-[2px]"
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

          {/* wrap safely on iPhone + keep nice line lengths */}
          <p
            className="text-slate-600 text-lg max-w-xl leading-relaxed sm:pr-4"
            style={{ textWrap: "balance" }}
          >
            Rent anything, anytime, anywhere in New Zealand.
          </p>

          <div className="flex gap-3">
            <a
              className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold hover:bg-brand-700 transition"
              href="#signup"
            >
              Get early access
            </a>
            <a
              className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50"
              href="#how"
            >
              See how it works
            </a>
          </div>

          <div className="overflow-hidden border-y border-slate-200 mt-6">
            <ul className="flex gap-8 py-2 text-xs uppercase tracking-[.2em] text-slate-500 animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <li>cameras</li><li>kayaks</li><li>dj gear</li><li>camping</li><li>e-bikes</li>
              <li>lenses</li><li>party gear</li><li>gardening</li><li>surfboards</li><li>power tools</li>
            </ul>
          </div>

          {/* measurer */}
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

        {/* RIGHT: phone — bigger, centered, no container/border/shadow */}
        <div className="order-2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* desktop glow only */}
          <div className="hidden lg:block pointer-events-none absolute -z-10 right-[-12%] top-1/2 -translate-y-1/2 w-[58vw] max-w-[780px] aspect-square rounded-full bg-gradient-to-b from-brand-500/25 via-fuchsia-400/20 to-brand-500/10 blur-3xl" />
          <img
            src="/images/screen-home.png"
            alt="App screenshot"
            className="block mx-auto max-w-[min(92vw,560px)] w-[300px] sm:w-[360px] md:w-[440px] lg:w-[560px] h-auto object-contain"
          />
        </div>
      </div>

      <style>{`@keyframes marquee{to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
