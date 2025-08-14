
import React from "react";
import { useReducedMotion } from "framer-motion";
const PHOTOS = ["/images/community/1.jpg","/images/community/2.jpg","/images/community/3.jpg","/images/community/4.jpg",
  "/images/community/5.jpg","/images/community/6.jpg","/images/community/7.jpg","/images/community/8.jpg"];
export default function Community(){
  const prefersReducedMotion = useReducedMotion();
  const MARQUEE_CLASS = prefersReducedMotion ? "" : "animate-[marquee_55s_linear_infinite] hover:[animation-play-state:paused]";
  return (
    <section id="community" className="section-pad">
      <div className="container-xy">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center">Join a community of renters</h2>
        <p className="text-slate-600 text-center mt-3 mb-8">2,000+ people (and counting) are lending weekly.</p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className={`flex w-max gap-6 ${MARQUEE_CLASS}`}>
            {[...PHOTOS, ...PHOTOS].map((src, i)=>(
              <div key={i} className="relative shrink-0 snap-center rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-card min-w-[280px] sm:min-w-[360px] md:min-w-[440px] aspect-[4/3] bg-slate-100">
                <img src={src} alt={`Community member ${i+1}`} className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <a href="/contact" className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold shadow-card hover:bg-brand-700 transition">Join pre-release</a>
          <a href="/how-it-works" className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50">See how it works</a>
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  )
}
