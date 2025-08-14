import React from "react";
import { motion } from "framer-motion";

function Bullet({ icon, title, copy }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="h-9 w-9 shrink-0 rounded-xl grid place-items-center text-white
                       bg-gradient-to-br from-brand-600 to-fuchsia-500 shadow-card">
        {icon}
      </span>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-slate-600 text-sm">{copy}</p>
      </div>
    </li>
  );
}

// tiny inline icons for “store” buttons (text-only badges)
const Apple = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M16.365 1.43c.093 1.003-.363 1.952-1.01 2.687-.748.85-1.956 1.514-3.156 1.421-.11-1.01.43-2.017 1.07-2.67.75-.778 2.04-1.34 3.096-1.438zM20.5 17.06c-.57 1.33-1.26 2.64-2.27 3.71-.74.79-1.63 1.67-2.73 1.7-1.03.02-1.3-.55-2.7-.55s-1.7.53-2.73.57c-1.12.04-1.98-.9-2.72-1.69-1.5-1.62-2.64-4.1-2.66-6.47-.03-1.41.3-2.77 1.04-3.93.74-1.2 1.86-2.02 3.16-2.06 1.21-.02 2.01.6 3.02.6s1.71-.6 3.02-.63c1.31-.03 2.45.72 3.19 1.93-.84.46-1.69 1.25-1.62 2.51.1 1.42 1.26 2.3 2.65 2.76-.26.61-.53 1.21-.85 1.93z"/>
  </svg>
);

const Play = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M3 4.5v15c0 .7.76 1.13 1.37.76l14-9c.58-.37.58-1.15 0-1.52l-14-9C3.76.37 3 0.8 3 1.5v3z"/>
  </svg>
);

export default function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-xy">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200
                        bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70
                        p-6 md:p-10 shadow-card">

          {/* animated, soft background blobs */}
          <motion.div
            aria-hidden
            className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-brand-600/15 blur-3xl"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-fuchsia-500/15 blur-3xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            {/* Left: copy + bullets */}
            <div>
              <p className="uppercase tracking-widest text-xs text-slate-500">Ready when you are</p>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Ready to start renting?
              </h3>
              <p className="text-slate-700 mt-2">
                Join the pre-release to unlock early access, perks, and product updates.
              </p>

              <ul className="mt-5 space-y-3">
                <Bullet icon="🚀" title="Fast sign-up" copy="Verify once. Book in minutes." />
                <Bullet icon="🛡️" title="Protected payments" copy="Secure checkout & bond protection." />
                <Bullet icon="🌿" title="Smarter consumption" copy="Save money and reduce waste." />
              </ul>
            </div>

            {/* Right: actions */}
            <div className="flex flex-col items-start lg:items-end gap-3 mt-1">
              <a
                href="/contact"
                className="rounded-full bg-brand-600 text-white px-5 py-3 font-semibold shadow-card hover:bg-brand-700 transition"
              >
                Join pre-release
              </a>

              {/* text-only “store” badges for now */}
              <div className="flex flex-wrap gap-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold hover:bg-slate-50"
                >
                  <Apple /> <span>App Store (soon)</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-semibold hover:bg-slate-50"
                >
                  <Play /> <span>Google Play (soon)</span>
                </a>
              </div>

              <p className="text-xs text-slate-500">We’ll email you when downloads go live.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
