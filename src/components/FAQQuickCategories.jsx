import React from "react";
import { motion } from "framer-motion";

export default function FAQQuickCategories({ cats = [] }) {
  const featured = cats.slice(0, 4); // show a tidy 4
  return (
    <section className="section-pad pt-8">
      <div className="container-xy">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 text-center">
          Common questions
        </h2>
        <p className="text-slate-600 text-center mt-2 max-w-2xl mx-auto">
          From safety to payments, get answers fast.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {featured.map((c, i) => (
            <motion.a
              key={c.id}
              href={`#${c.id}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-5 shadow-card hover:shadow-lg transition block"
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500 shadow-card">
                {c.icon}
              </div>
              <h3 className="font-semibold mt-3 text-slate-900">{c.title}</h3>
              <p className="text-slate-600 text-sm mt-1 line-clamp-2">
                {`${c.items[0]?.q} · ${c.items[1]?.q}`}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
