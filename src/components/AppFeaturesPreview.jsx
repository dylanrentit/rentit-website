import React from "react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    key: "schedule",
    title: "Smart Pickup & Return",
    copy:
      "Flexible pickup & drop-off windows with reminders and in-app updates.",
    icon: "🗓️",
  },
  {
    key: "payments",
    title: "Secure Payments & Bonds",
    copy: "Protected payments. Bonds held in escrow with dispute protection.",
    icon: "🔒",
  },
  {
    key: "search",
    title: "Location-Based Search",
    copy: "Find items near you. Filter by price, distance, and category.",
    icon: "🧭",
  },
  {
    key: "reviews",
    title: "Ratings & Reviews",
    copy: "Build trust with verified profiles and community feedback.",
    icon: "⭐",
  },
];

export default function AppFeaturesPreview() {
  return (
    <section className="section-pad">
      <div className="container-xy">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 text-center">
          App features at a glance
        </h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">
          The essentials that make renting simple, safe, and fast.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-5 shadow-card hover:shadow-lg transition"
            >
              <div className="h-11 w-11 rounded-xl grid place-items-center text-lg text-white bg-gradient-to-br from-brand-600 to-fuchsia-500 shadow-card">
                {f.icon}
              </div>
              <h3 className="font-semibold mt-3 text-slate-900">{f.title}</h3>
              <p className="text-slate-700 mt-1">{f.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
