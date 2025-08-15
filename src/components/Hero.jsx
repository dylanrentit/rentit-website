import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORDS = ["bikes", "tools", "kayaks", "cameras", "drones", "tents", "speakers", "It"];
const STEP_MS = 2500;

export default function Hero() {
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
    <section id="hero" className="relative isolate pt-6 md:pt-24 lg:pt-28">
      {/* ----- POINTER (desktop/laptop) LAYOUT ----- */}
      <div className="pointer-only container-xy grid items-center lg:grid-cols-2">
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

          <p
            className="text-slate-600 text-lg leading-relaxed max-w-xl break-words"
            style={{ overflowWrap: "anywhere", textWrap: "balance" }}
          >
            Rent anything, anytime, anywhere in New Zealand.
          </p>

          <div className="flex gap-3">
            <a className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold hover:bg-brand-700 transition" href="#signup">
              Get early access
            </a>
            <a className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50" href="#how">
              See how it works
            </a>
          </div>

          <div className="overflow-hidden border-y border-slate-200 mt-6">
            <ul className="flex gap-8 py-2 text-xs uppercase tracking-[.2em] text-slate-500 animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <li>cameras</li><li>kayaks</li><li>dj gear</li><li>camping</li><li>e-bikes</li>
              <li>lenses</li><li>party gear</li><li>gardening</li><li>surfboards</li><li>power tools</li>
            </ul>
          </div>
        </div>

        {/* RIGHT (no container/shadow — just the image) */}
        <div className="order-2 relative w-full justify-self-end">
          <div className="pointer-events-none absolute -z-10 right-[-12%] top-1/2 -translate-y-1/2 w-[58vw] max-w-[780px] aspect-square rounded-full bg-gradient-to-b from-brand-500/25 via-fuchsia-400/20 to-brand-500/10 blur-3xl" />
          <img
            src="/images/screen-home.png"
            alt="App screenshot"
            className="block h-auto object-contain object-center w-[clamp(580px,50vw,780px)] max-w-[800px]"
          />
        </div>
      </div>

      {/* ----- TOUCH (phones/tablets) LAYOUT ----- */}
      <div className="touch-only container-xy px-5 sm:px-6">
        {/* copy */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Beta</span>
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">NZ Made</span>
            <span className="px-2 py-1 rounded-full border border-slate-200 text-slate-600">Sharing Economy</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.05]">
            <span className="block">Buy less.</span>
            <span className="block">
              <span>Rent&nbsp;</span>
              <span
                className="relative inline-block h-[1em] overflow-hidden translate-y-[2px]"
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

          <p
            className="text-slate-600 text-xl leading-relaxed break-words"
            style={{ overflowWrap: "anywhere", textWrap: "balance" }}
          >
            Rent anything, anytime, anywhere in New Zealand.
          </p>

          <div className="flex gap-3">
            <a className="rounded-full bg-brand-600 text-white px-5 py-3 font-semibold hover:bg-brand-700 transition" href="#signup">
              Get early access
            </a>
            <a className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50" href="#how">
              See how it works
            </a>
          </div>

          <div className="overflow-hidden border-y border-slate-200 mt-6">
            <ul className="flex gap-8 py-3 text-xs uppercase tracking-[.2em] text-slate-500 animate-[marquee_26s_linear_infinite] whitespace-nowrap">
              <li>cameras</li><li>kayaks</li><li>dj gear</li><li>camping</li><li>e-bikes</li>
              <li>lenses</li><li>party gear</li><li>gardening</li><li>surfboards</li><li>power tools</li>
            </ul>
          </div>
        </div>

        {/* phone under the copy, always perfectly centered */}
       <div className="relative mt-10">
          <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-6 w-[95vw] max-w-[820px] aspect-square rounded-full bg-gradient-to-b from-brand-500/25 via-fuchsia-400/20 to-brand-500/10 blur-3xl" />
          <img
            src="/images/screen-home.png"
            alt="App screenshot"
            className="block mx-auto h-auto object-contain object-center w-[min(100vw,700px)]"
          />
        </div>

      </div>

      <style>{`
        /* marquee keyframes */
        @keyframes marquee { to { transform: translateX(-50%) } }

        /* SWITCH BY POINTER CAPABILITY (not width) */
        /* default to pointer layout hidden on small devices */
        .pointer-only { display: none; }
        .touch-only { display: block; }

        @media (hover:hover) and (pointer:fine) {
          .pointer-only { display: grid; }
          .touch-only { display: none; }
        }

        /* defensive: never inherit transforms/position on the phone image */
        #hero img[alt="App screenshot"] { position: relative; inset: auto; transform: none; }
      `}</style>
    </section>
  );
}
