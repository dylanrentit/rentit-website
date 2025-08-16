import React from "react";
import { motion } from "framer-motion";
import VideoTeaser from "../components/VideoTeaser.jsx";
import ParallaxScreens from "../components/ParallaxScreens.jsx";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturesPage() {
  return (
    <div className="relative">
      {/* dynamic background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 inset-0"
      >
        <motion.div
          className="absolute -top-24 -left-24 w-[38rem] h-[38rem] rounded-full bg-brand-600/15 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-12rem] right-[-10rem] w-[42rem] h-[42rem] rounded-full bg-fuchsia-500/15 blur-3xl"
          animate={{ y: [0, -24, 0], x: [0, -12, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* 1) INTRO (no container) */}
      <section className="section-pad pt-24 md:pt-32">
        <div className="container-xy">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
            <p className="uppercase tracking-widest text-xs text-slate-500">Take the tour</p>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Discover How Rent It Works
            </h1>
            <p className="text-slate-700 mt-3 max-w-2xl">
              Explore how simple it is to rent and lend with Rent It. Watch our walkthrough or scroll
              down to dive into the app’s core features.
            </p>

            {/* CTA matches bottom section; no text field here */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="/contact" className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold hover:bg-slate-50">
                📲 App Store (soon)
              </a>
              <a href="/how-it-works" className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold shadow-card hover:bg-brand-700">
                🤝 Learn how to list
              </a>
              <a href="/faq" className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold hover:bg-slate-50">
                🧠 Visit FAQs
              </a>
            </div>
          </motion.div>

          {/* walkthrough video (no card) */}
          <div className="mt-6">
            <VideoTeaser
              src="/videos/walkthrough.mp4"                     // update path as needed
              poster="/images/placeholders/video-poster.jpg"     // optional
              caption="Watch how to rent, list, and earn in under 2 minutes."
            />
          </div>
        </div>
      </section>




      {/* 2) HOMEPAGE OVERVIEW */}
      <section className="section-pad">
        <div className="container-xy grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="uppercase tracking-widest text-xs text-slate-500">Homepage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Your Gateway to Rentals
            </h2>
            <p className="text-slate-700 mt-3">
              The home screen lets you search, filter, and explore rentals near you. Whether you're after
              electronics, tools, vehicles or clothing — it's all right here.
            </p>
            <ul className="mt-4 space-y-2 text-slate-800">
              <li>🔍 Intuitive search and filter system</li>
              <li>📍 Location-based discovery</li>
              <li>🔄 Recommended & trending listings</li>
            </ul>
          </motion.div>
          <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px]">
            <div className="relative aspect-[9/18] rounded-[40px] overflow-hidden shadow-card border border-slate-200 bg-white">
              <img src="/images/screen-home.png" alt="Rent It home screen" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3) LISTING YOUR ITEM */}
      <section className="section-pad">
        <div className="container-xy grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] order-2 lg:order-1">
            <div className="relative aspect-[9/18] rounded-[40px] overflow-hidden shadow-card border border-slate-200 bg-white">
              <img src="/images/placeholders/listing.jpg" alt="Create listing (placeholder)" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="order-1 lg:order-2">
            <p className="uppercase tracking-widest text-xs text-slate-500">List</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              List in Minutes — Earn for Years
            </h2>
            <p className="text-slate-700 mt-3">
              Upload photos, write a short description, and set your price. Our user-friendly form gets your item seen and booked.
            </p>
            <ul className="mt-4 space-y-2 text-slate-800">
              <li>📷 Add photos and custom descriptions</li>
              <li>📂 Choose from detailed categories</li>
              <li>🛠️ Optimise pricing with built-in guidance</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 4) EXPLORE LISTINGS */}
      <section className="section-pad">
        <div className="container-xy grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="uppercase tracking-widest text-xs text-slate-500" id='explore'>Explore</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              View Items with Confidence
            </h2>
            <p className="text-slate-700 mt-3">
              Photos, descriptions, reviews, pricing, and availability—know exactly what you’re renting and from whom.
            </p>
            <ul className="mt-4 space-y-2 text-slate-800">
              <li>🕒 Flexible rental periods</li>
              <li>🌟 Ratings & user reviews</li>
              <li>🚗 Pickup or delivery options</li>
            </ul>
          </motion.div>
          <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px]">
            <div className="relative aspect-[9/18] rounded-[40px] overflow-hidden shadow-card border border-slate-200 bg-white">
              <img src="/images/placeholders/details.jpg" alt="Listing details (placeholder)" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5) SCHEDULE */}
      <section className="section-pad">
        <div className="container-xy grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative mx-auto w-[260px] sm:w-[320px] md:w-[360px] order-2 lg:order-1">
            <div className="relative aspect-[9/18] rounded-[40px] overflow-hidden shadow-card border border-slate-200 bg-white">
              <img src="/images/placeholders/schedule.jpg" alt="Booking calendar (placeholder)" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="order-1 lg:order-2">
            <p className="uppercase tracking-widest text-xs text-slate-500">Schedule</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Book It Your Way
            </h2>
            <p className="text-slate-700 mt-3">
              Choose a time that suits you. Pickup or delivery—our calendar keeps things clear and confirms with both parties.
            </p>
            <ul className="mt-4 space-y-2 text-slate-800">
              <li>📅 Tap-and-select calendar booking</li>
              <li>🚚 Pickup or delivery options</li>
              <li>🧠 Presaved details for faster checkout</li>
            </ul>
          </motion.div>
        </div>
      </section>

            <ParallaxScreens
  title="Explore the app at a glance"
  caption="Outer columns scroll down; the middle scrolls up. Hover to pause."
  basePath="/images/screens"   // folder with 1..20
  count={20}
  ext="jpg"
  heightClass="h-[36rem] md:h-[44rem] lg:h-[52rem]"
  speed={60}
  containerClass="p-0"
/>


      {/* 6) NOTIFICATIONS / PROFILE */}
      <section className="section-pad">
        <div className="container-xy">
          <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="uppercase tracking-widest text-xs text-slate-500">Control</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Stay Informed. Stay In Control.
            </h2>
            <p className="text-slate-700 mt-3 max-w-3xl">
              Get real-time notifications, track your rental history and earnings, and manage listings from your profile.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            {[
              { icon: "🔔", title: "Smart notifications", copy: "Booking updates and reminders in real time." },
              { icon: "👤", title: "Account dashboard", copy: "Manage profile, verification, and payouts." },
              { icon: "📊", title: "Rental history", copy: "See earnings & past rentals at a glance." },
            ].map((c) => (
              <motion.div
                key={c.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-3xl border border-slate-200 bg-white/90 backdrop-blur p-5 shadow-card"
              >
                <div className="h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br from-brand-600 to-fuchsia-500 shadow-card">
                  {c.icon}
                </div>
                <h3 className="font-semibold mt-3">{c.title}</h3>
                <p className="text-slate-700 mt-1">{c.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) FINAL CTA */}
      <section className="section-pad">
        <div className="container-xy grid lg:grid-cols-2 gap-8 items-center rounded-4xl bg-gradient-to-br from-white via-fuchsia-50/70 to-brand-50/70 p-6 md:p-10 shadow-card border border-slate-200">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Ready to get started?
            </h3>
            <p className="text-slate-700 mt-2">
              Explore the app, start renting, and unlock a new way to borrow, lend, and earn — all from your phone.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="/contact" className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold hover:bg-slate-50">
                📲 App Store (soon)
              </a>
              <a href="/how-it-works" className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold shadow-card hover:bg-brand-700">
                🤝 Learn how to list
              </a>
              <a href="/faq" className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold hover:bg-slate-50">
                🧠 Visit FAQs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
