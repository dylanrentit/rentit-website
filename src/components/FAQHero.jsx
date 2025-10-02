import React from "react";
import { motion } from "framer-motion";

export default function FAQHero({ query, setQuery }) {
  return (
    <section className="section-pad pt-20 md:pt-24">
      <div className="container-xy">
        <div className="relative overflow-hidden rounded-4xl border border-slate-200 shadow-card
                        bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-6 md:p-10">
          {/* soft moving blobs */}
          <motion.div aria-hidden className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-brand-600/15 blur-3xl"
            animate={{ y: [0, 10, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div aria-hidden className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-fuchsia-500/15 blur-3xl"
            animate={{ y: [0, -10, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-widest text-xs text-slate-500">Help Center</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Do you have questions?
            </h1>
            <p className="text-slate-600 mt-2">
              We have answers (well, most of the time). Search or browse below.
            </p>

            <div className="mt-6">
              <div className="relative max-w-xl mx-auto">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔎</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type your question"
                  className="w-full rounded-full border border-slate-300 pl-10 pr-4 py-3 bg-white/90 backdrop-blur
                             focus:border-brand-500 focus:ring-brand-500"
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Still stuck? <a className="underline decoration-brand-500/60 underline-offset-4 font-medium" href="/contact">Contact us →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
