
import React from 'react'
export default function CTA(){
  return (
    <section className="section-pad">
      <div className="container-xy text-center">
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to try Rent It?</h3>
        <p className="text-slate-600 mt-2">Join the pre-release and be the first to know.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/contact" className="rounded-full bg-brand-600 text-white px-5 py-2 font-semibold shadow-card hover:bg-brand-700 transition">Join pre-release</a>
          <a href="/features" className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-800 hover:bg-slate-50">Explore features</a>
        </div>
      </div>
    </section>
  )
}
