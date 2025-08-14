import React from "react";
import { useReducedMotion } from "framer-motion";

const REVIEWS = [
  { name: "Ava, Auckland", quote: "So easy to book and pick up. Saved me $$ and time.", stars: 5 },
  { name: "Josh, Wellington", quote: "Great lender experience—bond handled smoothly.", stars: 5 },
  { name: "Mere, Christchurch", quote: "Found a kayak same day. Awesome!", stars: 4 },
  { name: "Leo, Tauranga", quote: "Secure payments + friendly community. 10/10.", stars: 5 },
  { name: "Hana, Dunedin", quote: "Scheduling and reminders are clutch.", stars: 5 },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5 text-brand-600" aria-label={`${n} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor"
             className={i < n ? "" : "opacity-30"}>
          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const prefersReducedMotion = useReducedMotion();
  const marquee = prefersReducedMotion ? "" : "animate-[marquee_50s_linear_infinite]";

  return (
    <section className="section-pad">
      <div className="container-xy">
        <div className="text-center">
          <p className="uppercase tracking-widest text-xs text-slate-500">Loved by renters & lenders across NZ</p>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">What people are saying</h2>
        </div>

        <div className="relative overflow-hidden mt-6">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"/>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"/>

          <div className={`flex gap-4 w-max ${marquee}`}>
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <blockquote key={i}
                className="min-w-[260px] sm:min-w-[320px] rounded-3xl bg-white/85 backdrop-blur border border-slate-200 p-4 shadow-card">
                <Stars n={r.stars}/>
                <p className="mt-2 text-slate-800">“{r.quote}”</p>
                <footer className="mt-2 text-sm text-slate-500">— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        `}</style>
      </div>
    </section>
  );
}
