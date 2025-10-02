import React from "react";
import { motion } from "framer-motion";

const NOTICES = [
  { icon: "🔔", title: "Booking confirmed", body: "Sat 10:00 AM pickup", meta: "Just now" },
  { icon: "💬", title: "New message", body: "Alex: Can we do 3 PM?", meta: "2m ago" },
  { icon: "⭐", title: "New review", body: "“Great lender, super easy”", meta: "14m ago" },
  { icon: "💸", title: "Payout sent", body: "NZ$86.40 deposited", meta: "1h ago" },
];

export default function NotificationsStrip() {
  return (
    <section className="section-pad pt-8 pb-6">
      <div className="container-xy">
        {/* Light gradient container, matches site cards */}
        <div className="rounded-4xl border border-slate-200 shadow-card bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <h2 className="text-base md:text-lg font-semibold text-slate-900">
              Live on Rent It
            </h2>
            <span className="text-xs text-slate-500">Activity updates</span>
          </div>

          {/* Track */}
          <motion.div
            className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {NOTICES.map((n, i) => (
              <motion.article
                key={n.title + i}
                className="snap-center shrink-0 w-[260px] sm:w-[300px] rounded-2xl bg-white/90 backdrop-blur border border-slate-200 shadow-card p-4 md:p-5 relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Accent ribbon */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-600 via-fuchsia-500 to-brand-600" />
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl grid place-items-center text-lg bg-gradient-to-br from-brand-600 to-fuchsia-500 text-white shadow-card">
                    {n.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 truncate">{n.title}</h3>
                    <p className="text-sm text-slate-700 truncate">{n.body}</p>
                    <p className="text-xs text-slate-500 mt-1">{n.meta}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
