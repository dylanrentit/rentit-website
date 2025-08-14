import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const FEATURES = [
  {
    key: "schedule",
    title: "Smart Pickup & Return Scheduling",
    copy:
      "Easily coordinate pickup and return times with built-in scheduling tools, automated reminders, and in-app chat — keeping every rental smooth, convenient, and on time for both parties.",
    img: "/images/features/schedule.jpg",
  },
  {
    key: "payments",
    title: "Secure Payments & Bond Protection",
    copy:
      "All transactions are handled securely through the app. Bonds are safely held and automatically refunded after return, protecting both renters and lenders with clear, reliable payment processing every time.",
    img: "/images/features/payments.jpg",
  },
  {
    key: "search",
    title: "Location-Based Item Search",
    copy:
      "Quickly find what you need nearby using real-time location filters and map-based search. Browse available items in your area and book with confidence, knowing exactly where and when to collect.",
    img: "/images/features/search.jpg",
  },
  {
    key: "reviews",
    title: "Ratings & Reviews",
    copy:
      "Build trust with every rental. Users leave verified ratings and reviews after each transaction, helping you make informed decisions and creating a reliable, transparent community for both renters and lenders.",
    img: "/images/features/reviews.jpg",
  },
];

const CYCLE_MS = 8500; // ← pick your speed (e.g., 6500–8000)
const TRANSITION_S = 1.0; 
export default function Features() {
  const [i, setI] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-20% 0px -20% 0px", amount: 0.3 });
  const [paused, setPaused] = useState(false);

  // Auto-cycle when the section is in view (pauses on hover)
  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % FEATURES.length), CYCLE_MS);
    return () => clearInterval(t);
  }, [inView, paused]);

  const f = FEATURES[i];

  return (
    <section id="features" className="section-pad" ref={ref}>
      <div className="container-xy grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: visual area */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* vertical dots nav (like screenshot) */}
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-3">
            {FEATURES.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Show ${FEATURES[idx].title}`}
                onClick={() => setI(idx)}
                className={`h-3 w-3 rounded-full border transition ${
                  idx === i
                    ? "bg-brand-600 border-brand-600"
                    : "bg-white/70 border-slate-300 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* big image card */}
          <div className="relative md:ml-6 rounded-4xl overflow-hidden shadow-card bg-gradient-to-br from-brand-600/10 to-fuchsia-500/10">
            <div className="aspect-[4/3] w-full" />
            <div className="absolute inset-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={f.img}
                  src={f.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: TRANSITION_S, ease: [0.22, 1, 0.36, 1] }}
                />
              </AnimatePresence>
            </div>
          </div>


        </div>

        {/* RIGHT: text area */}
        <div className="max-w-xl">
          <p className="uppercase tracking-widest text-xs text-slate-500">Features</p>

          <AnimatePresence mode="wait">
            <motion.h2
              key={f.title}
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: TRANSITION_S * 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {f.title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={f.key}
              className="text-slate-600 mt-3"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: TRANSITION_S * 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {f.copy}
            </motion.p>
          </AnimatePresence>

          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => setI((i + 1) % FEATURES.length)}
              className="rounded-full bg-brand-600 text-white px-4 py-2 text-sm font-semibold shadow-card hover:bg-brand-700 transition"
            >
              Next feature
            </button>
            <a
              href="#signup"
              className="font-semibold text-slate-900 underline decoration-brand-600/50 decoration-2 underline-offset-8 hover:text-brand-700"
            >
              Get started →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
