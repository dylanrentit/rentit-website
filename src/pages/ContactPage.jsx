import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const TOPICS = [
  { key: "business",  label: "Business related",  icon: "🤝", subject: "Business Inquiry",  blurb: "Partnerships, inventory, bulk rentals" },
  { key: "personal",  label: "Personal related",  icon: "🙂", subject: "General Inquiry",   blurb: "Account, feedback, general questions" },
  { key: "technical", label: "Technical issue",   icon: "🛠️", subject: "Technical Issue",  blurb: "Bug reports, login, app issues" },
  { key: "report",    label: "Report a problem",  icon: "🚩", subject: "Report a Problem", blurb: "Safety concerns, no-shows, damage" },
];

export default function ContactPage() {
  const [active, setActive]   = useState("personal");
  const [subject, setSubject] = useState("General Inquiry");
  const [sent, setSent]       = useState(false);
  const formRef               = useRef(null);

  const subjectOptions = useMemo(
    () => ["General Inquiry", "Technical Issue", "Report a Problem", "Business Inquiry"],
    []
  );

  const handleTopic = (key, subj) => {
    setActive(key);
    setSubject(subj);
    // scroll to form
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => formRef.current.querySelector("textarea")?.focus(), 400);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send to your API
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="section-pad pt-24 md:pt-32">
        <div className="container-xy">
          <div className="relative rounded-4xl border border-slate-200 shadow-card bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-6 md:p-10 overflow-visible">
            {/* blobs are clipped inside their own rounded layer */}
            <div aria-hidden className="pointer-events-none absolute inset-0 rounded-4xl overflow-hidden">
              <motion.div
                className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-brand-600/15 blur-3xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-fuchsia-500/15 blur-3xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-start">
              {/* Left copy */}
              <div>
                <p className="uppercase tracking-widest text-xs text-slate-500">Contact</p>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Need a hand? We’re here to help.
                </h1>
                <p className="text-slate-700 mt-3">
                  Whether you have a question, need support, or just want to get in touch — we’re
                  always happy to hear from you.
                </p>
              </div>

              {/* Right: 2×2 grid of enquiry buttons */}
              <div className="w-full max-w-md ml-auto">
                <div className="grid grid-cols-2 gap-3">
                  {TOPICS.map((t, i) => {
                    const isActive = active === t.key;
                    return (
                      <motion.button
                        key={t.key}
                        onClick={() => handleTopic(t.key, t.subject)}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.35, delay: i * 0.03 }}
                        className={`rounded-2xl border p-4 shadow-card hover:shadow-lg transition text-left
                          ${isActive
                            ? "bg-gradient-to-br from-brand-600 to-fuchsia-500 text-white border-transparent"
                            : "bg-white/90 backdrop-blur border-slate-200 text-slate-900"
                          }`}
                        aria-pressed={isActive}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`h-9 w-9 rounded-xl grid place-items-center ${
                            isActive ? "bg-white/20 text-white"
                                     : "bg-gradient-to-br from-brand-600 to-fuchsia-500 text-white"
                          }`}>
                            {t.icon}
                          </span>
                          <div>
                            <div className="font-semibold leading-tight">{t.label}</div>
                            <div className={`text-sm leading-snug ${isActive ? "text-white/85" : "text-slate-600"}`}>
                              {t.blurb}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY: form + right rail */}
      <section className="section-pad" ref={formRef}>
        <div className="container-xy grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur shadow-card p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                Send us a message
              </h2>
              <p className="text-slate-600 mt-2">
                We usually respond within 1–2 business days. For urgent issues, use in-app reporting tools for faster handling.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Name (optional)</span>
                    <input type="text" name="name" className="mt-1 w-full rounded-xl border border-slate-300 bg-white/95 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">
                      Email address <span className="text-rose-600">*</span>
                    </span>
                    <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white/95 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Subject</span>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject"
                      className="mt-1 w-full rounded-xl border border-slate-300 bg-white/95 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      {subjectOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-700">Topic</span>
                    <input
                      readOnly
                      value={TOPICS.find(t => t.subject === subject)?.label || "General"}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-slate-600"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea name="message" required rows={6} className="mt-1 w-full rounded-xl border border-slate-300 bg-white/95 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="How can we help?" />
                </label>

                <div className="flex items-center gap-3 pt-2">
                  <button type="submit" className="rounded-full bg-brand-600 text-white px-6 py-3 font-semibold shadow-card hover:bg-brand-700 transition">
                    {sent ? "Message sent ✓" : "Send message"}
                  </button>
                  <a href="mailto:support@rentit.co.nz" className="text-sm font-semibold underline decoration-brand-600/50 underline-offset-8 hover:text-brand-700">
                    or email us directly
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT RAIL */}
          <aside className="space-y-6">
            <motion.a
              href="/faq"
              className="block rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-6 shadow-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-start gap-3">
                <span className="h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500">💬</span>
                <div>
                  <h3 className="font-extrabold tracking-tight">Looking for quick answers?</h3>
                  <p className="text-slate-600 text-sm mt-1">Visit our Help Center for guides, how-tos, and common questions.</p>
                </div>
              </div>
            </motion.a>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500">📧</span>
                  <div>
                    <h4 className="font-semibold">Email us</h4>
                    <a href="mailto:support@rentit.co.nz" className="text-brand-700 font-medium">support@rentit.co.nz</a>
                    <p className="text-xs text-slate-500">We aim to reply within 24–48 hours.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-xl grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500">🤝</span>
                  <div>
                    <h4 className="font-semibold">Business / partnerships</h4>
                    <a href="mailto:partnerships@rentit.co.nz" className="text-brand-700 font-medium">partnerships@rentit.co.nz</a>
                    <p className="text-xs text-slate-500">List your inventory, collaborate, or integrate with Rent It.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-5 shadow-card">
              <h4 className="font-semibold">Stay connected</h4>
              <p className="text-slate-600 text-sm mt-1">Follow us for updates, stories, and behind-the-scenes.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="#" className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold hover:bg-slate-50">Instagram</a>
                <a href="#" className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold hover:bg-slate-50">Facebook</a>
                <a href="#" className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold hover:bg-slate-50">LinkedIn</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
