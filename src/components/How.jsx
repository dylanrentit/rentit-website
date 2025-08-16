import React, { useMemo } from "react";
import { motion } from "framer-motion";
import AppFeaturesPreview from "../components/AppFeaturesPreview.jsx";
import Reviews from "../components/Reviews.jsx";
import Fees from "../components/Fees.jsx";
import FinalCTA from "../components/FinalCTA.jsx";

// random helper
const rnd = (min, max) => Math.random() * (max - min) + min;

/** Larger, slower, randomized notification that flies out & fades */
function Burst({ start, dx, dy, delay, duration, icon = "🔔", title, body }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none z-10"
      style={start}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0.98 }}
      animate={{
        x: dx,
        y: dy,
        opacity: [0, 1, 1, 0],
        scale: [0.98, 1, 1, 1],
      }}
      transition={{
        duration,                            // slower overall
        times: [0, 0.22, 0.7, 1],
        delay,
        repeat: Infinity,
        repeatDelay: rnd(2.0, 4.0),         // random pause each loop
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="rounded-2xl bg-white/95 px-4 py-3 flex items-start gap-3 backdrop-blur-sm shadow-card">
        <span className="h-10 w-10 shrink-0 rounded-xl grid place-items-center text-base text-white bg-gradient-to-br from-brand-600 to-fuchsia-500">
          {icon}
        </span>
        <div className="leading-snug min-w-[220px] max-w-[300px]">
          <div className="font-semibold text-slate-900 text-sm">{title}</div>
          <div className="text-slate-700 text-sm">{body}</div>
        </div>
      </div>
    </motion.div>
  );
}

const POINTS = [
  { icon: "🔍", title: "Browse & Book", copy: "Discover items near you and request a rental instantly." },
  { icon: "📅", title: "Schedule Pickup", copy: "Choose a pickup time that works for both sides." },
  { icon: "🔒", title: "Book & pay securely", copy: "Protected payments & bonds. Clear pricing. Receipts in-app." },
  { icon: "✅", title: "Return & Review", copy: "Return the item, leave a review, and you’re done!" },
];

export default function HowItWorks() {
  // randomized burst paths/timing per mount
  const bursts = useMemo(
    () => [
      {
        start: { top: "12%", right: "-7%" },
        dx: rnd(150, 230),
        dy: rnd(-190, -120),
        delay: rnd(0.2, 1.0),
        duration: rnd(9, 13),
        icon: "💬",
        title: "New message",
        body: "Alex: Can we do 3 PM?",
      },
      {
        start: { top: "46%", right: "-7%" },
        dx: rnd(170, 250),
        dy: rnd(-180, -130),
        delay: rnd(0.9, 1.8),
        duration: rnd(9, 13),
        icon: "🔔",
        title: "Booking confirmed",
        body: "Sat 10:00 AM pickup",
      },
      {
        start: { top: "18%", left: "-7%" },
        dx: -rnd(140, 220),
        dy: -rnd(140, 200),
        delay: rnd(1.6, 2.6),
        duration: rnd(9, 13),
        icon: "⭐",
        title: "New review",
        body: "“Great lender, thanks!”",
      },
      {
        start: { bottom: "8%", left: "-7%" },
        dx: -rnd(160, 230),
        dy: -rnd(80, 150),
        delay: rnd(2.3, 3.2),
        duration: rnd(9, 13),
        icon: "💸",
        title: "Payout sent",
        body: "NZ$86.40 deposited",
      },
    ],
    []
  );

  return (
    <>
      {/* Phone left (no background, no ring, no shadow) + text far right */}
      <section className="section-pad pt-24 md:pt-32 lg:pt-40">
        <div className="container-xy grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT — ~65% phone size, nothing behind it */}
          <div className="relative lg:col-span-7 mx-auto w-[234px] sm:w-[286px] md:w-[364px] lg:w-[390px]">
            <div className="relative aspect-[9/18] overflow-visible">
              {/* Phone image: only rounded corners, no bg, no shadow */}
              <img
                src="/images/screen-home.png"
                alt="Rent It home screen"
                className="absolute inset-0 h-full w-full object-cover rounded-[40px]"
              />

              {/* Bursts outside the masked phone */}
              {bursts.map((b, i) => (
                <Burst key={i} {...b} />
              ))}
            </div>
          </div>

          {/* RIGHT — pushed further right using col-start; CTA under text */}
          <div className="lg:col-span-4 lg:col-start-9 max-w-xl lg:max-w-none">
            <p className="uppercase tracking-widest text-xs text-slate-500 text-right">
              World of rentals
            </p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold tracking-tight text-right">
              How it works
            </h1>

            <ul className="mt-6 space-y-4">
              {POINTS.map((p, i) => (
                <motion.li
                  key={p.title}
                  className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200/70 p-4 md:p-5 flex gap-3 items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="h-9 w-9 shrink-0 rounded-xl grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500">
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <p className="text-slate-600">{p.copy}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA under the text */}
            <div className="mt-8 flex justify-end">
              <a
                href="/contact"
                className="rounded-full bg-brand-600 text-white px-6 py-3 text-sm md:text-base font-semibold shadow-card hover:bg-brand-700 transition"
              >
                Get started with Rent It
              </a>
            </div>
          </div>
        </div>
      </section>

    <AppFeaturesPreview />
    <Reviews />
    <Fees />
    <FinalCTA />
    </>
  );
}
