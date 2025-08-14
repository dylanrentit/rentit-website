import React from "react";
import { motion } from "framer-motion";

export default function Fees() {
  return (
    <section className="section-pad">
      <div className="container-xy">
        {/* Gradient container card */}
        <div className="relative rounded-4xl p-[2px] bg-gradient-to-br from-violet-700 via-fuchsia-600 to-indigo-600 shadow-card overflow-hidden">
          {/* subtle animated gradient sheen on the border */}
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 10% 10%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(120% 80% at 90% 90%, rgba(255,255,255,0.10), transparent 60%)",
            }}
            animate={{ opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Inner panel */}
          <div className="relative rounded-[calc(2rem-2px)] bg-gradient-to-br from-violet-700/95 via-fuchsia-600/95 to-indigo-600/95 text-white">
            {/* soft background blobs */}
            <motion.div
              aria-hidden
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Content */}
            <div className="relative px-6 md:px-10 lg:px-14 py-10 md:py-14">
              {/* Section header */}
              <div className="text-center mb-8 md:mb-12">
                <p className="uppercase tracking-widest text-xs text-white/80">Pricing</p>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Fair & transparent fees</h2>
                <p className="text-white/85 mt-2 max-w-2xl mx-auto">
                  A simple <strong className="font-semibold">12%</strong> total fee, split equally:
                  <strong className="font-semibold"> 6%</strong> from the renter and
                  <strong className="font-semibold"> 6%</strong> from the lender.
                  Each side contributes to what keeps Rent It secure, functional, and growing.
                </p>
              </div>

              {/* Split layout */}
              <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 items-center">
                {/* Renter */}
                <motion.article
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-6 md:p-8
                             min-h-[260px] md:min-h-[280px] flex flex-col items-center justify-center text-center"
                >
                  <div className="inline-flex items-center gap-2">
                    <span className="h-9 w-9 rounded-xl grid place-items-center bg-white/15">🙋‍♀️</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold">Renter</h3>
                  </div>
                  <p className="text-white/80 mt-1">Platform fee: 6%</p>
                  <div className="mt-3">
                    <span className="text-4xl md:text-5xl font-black drop-shadow">6%</span>
                  </div>
                  <ul className="text-sm text-white/85 mt-3 space-y-1">
                    <li>— Secure payments & transactions</li>
                    <li>— Dispute handling & customer support</li>
                    <li>— Platform safety & moderation</li>
                    <li>— Listing verification system</li>
                  </ul>
                </motion.article>

                {/* Center: total */}
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative inline-grid place-items-center"
                  >
                    <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20" />
                    <span className="absolute text-4xl md:text-5xl font-black drop-shadow">12%</span>
                  </motion.div>
                  <p className="text-xs text-white/80 mt-2">Total fee (split equally)</p>
                </div>

                {/* Lender */}
                <motion.article
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-6 md:p-8
                             min-h-[260px] md:min-h-[280px] flex flex-col items-center justify-center text-center"
                >
                  <div className="inline-flex items-center gap-2">
                    <span className="h-9 w-9 rounded-xl grid place-items-center bg-white/15">🧰</span>
                    <h3 className="text-2xl md:text-3xl font-extrabold">Lender</h3>
                  </div>
                  <p className="text-white/80 mt-1">Platform fee: 6%</p>
                  <div className="mt-3">
                    <span className="text-4xl md:text-5xl font-black drop-shadow">6%</span>
                  </div>
                  <ul className="text-sm text-white/85 mt-3 space-y-1">
                    <li>— Insurance & bond handling systems</li>
                    <li>— Product maintenance & new feature development</li>
                    <li>— Fraud prevention & identity verification</li>
                    <li>— Marketing & user acquisition (to help your items get seen)</li>
                  </ul>
                </motion.article>
              </div>

              <p className="text-center text-xs text-white/80 mt-8">
                *See our Terms &amp; Conditions for a full breakdown, including cancellation, late
                returns, and damage policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
