import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Parallax, Reveal, Halo } from "../components/ScrollFX";

const WORDS = ["bikes","tools","kayaks","cameras","drones","tents","speakers","It"];
const MARQUEE_ITEMS = ["power tools","cameras","kayaks","dj gear","camping","e-bikes","lenses","party gear","gardening","surfboards"];
const STEP_MS = 2500;

export default function Hero() {
  const [slotWidth, setSlotWidth] = useState(null);
  const measurerRef = useRef(null);

  useLayoutEffect(() => {
    if (!measurerRef.current) return;
    const widths = Array.from(measurerRef.current.querySelectorAll("span")).map(el => el.offsetWidth);
    setSlotWidth(Math.max(...widths, 0));
  }, []);

  const prefersReducedMotion = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const t = setInterval(() => setI(p => (p + 1) % WORDS.length), STEP_MS);
    return () => clearInterval(t);
  }, [prefersReducedMotion]);

  const word = WORDS[i];

  return (
    <section id="hero" className="relative z-10 pt-12 md:pt-20 lg:pt-24">
      <div className="container-xy grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* LEFT */}
        <div className="space-y-5 relative">
          <Reveal y={10}>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Beta</span>
              <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">NZ Made</span>
              <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Sharing Economy</span>
            </div>
          </Reveal>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            <span className="block">Buy less.</span>
            <span className="block relative">
              <span className="align-baseline">Rent&nbsp;</span>
              <span
                className="relative inline-block align-baseline h-[1em] overflow-hidden translate-y-[5px]"
                style={{ width: slotWidth ? `${slotWidth}px` : "auto" }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={word}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-0 bottom-0 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 whitespace-nowrap leading-none"
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
            <a href="#signup" className="rounded-full bg-violet-600 text-white px-5 py-3 font-semibold hover:bg-violet-700 transition">
              Get early access
            </a>
            <a href="/how-it-works" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition">
              See how it works
            </a>
          </div>

          {/* horizontal marquee */}
          <div className="overflow-hidden border-y border-slate-200 mt-6">
            <ul className="flex gap-8 py-2 text-xs uppercase tracking-[.2em] text-slate-500 animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              {MARQUEE_ITEMS.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          {/* width measurer for rotating word */}
          <div
            ref={measurerRef}
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none"
            style={{ left: -9999, top: -9999, position: "absolute" }}
          >
            {WORDS.map(w => (
              <span key={w} className="font-extrabold text-4xl md:text-6xl inline-block mr-4">{w}</span>
            ))}
          </div>
        </div>

        {/* RIGHT — plain image (no border, no ring, no shadow, no rounded container) */}
        <div className="relative justify-self-center lg:justify-self-end">
          <Halo size={560} className="top-[-8%]" />
          <Parallax strength={24}>
            <img
              src="/images/screen-home.png"
              alt="Rent It app home screen"
              className="block h-auto w-[clamp(260px,28vw,420px)] max-w-full object-contain object-center"
            />
          </Parallax>
        </div>
      </div>

      {/* marquee keyframes */}
      <style>{`@keyframes marquee { to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
