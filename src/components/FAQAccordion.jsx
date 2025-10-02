import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Row({ q, a, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-900">{q}</span>
        <span
          className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm ${
            open
              ? "bg-brand-600 text-white border-brand-600"
              : "text-slate-500 border-slate-300"
          }`}
        >
          {open ? "–" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-slate-700">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ cats = [] }) {
  return (
    <section className="section-pad">
      <div className="container-xy grid lg:grid-cols-3 gap-10">
        {/* Left 2/3: category accordions */}
        <div className="lg:col-span-2 space-y-10">
          {cats.map((cat) => (
            <div key={cat.id} id={cat.id} className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur shadow-card">
              <div className="px-5 md:px-6 py-5 md:py-6 border-b border-slate-200/70 flex items-center gap-2">
                <span className="h-8 w-8 rounded-lg grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500">
                  {cat.icon}
                </span>
                <h3 className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900">
                  {cat.title}
                </h3>
              </div>
              <div className="px-5 md:px-6">
                {cat.items.map((it, i) => (
                  <Row key={it.q} q={it.q} a={it.a} i={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right 1/3: sticky help box */}
        <aside className="lg:sticky lg:top-24 h-max">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-6 shadow-card">
            <p className="uppercase tracking-widest text-xs text-slate-500">Still need help?</p>
            <h4 className="text-xl font-extrabold tracking-tight mt-1">Get in touch</h4>
            <p className="text-slate-600 mt-2">Our team can help with anything not covered here.</p>
            <a
              href="/contact"
              className="mt-4 inline-flex rounded-full bg-brand-600 text-white px-4 py-2 font-semibold shadow-card hover:bg-brand-700 transition"
            >
              Contact support
            </a>
            <div className="mt-4 text-xs text-slate-500">Avg response time: under 24h</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
