import React from 'react'

export default function FAQ(){
  return (
    <section id="faq" className="section-pad">
      <div className="container-xy grid lg:grid-cols-[.9fr_1.1fr] gap-6">
        <aside className="gradient-box p-6">
          <p className="uppercase tracking-widest text-xs text-slate-500">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 md:mb-8 lg:mb-5">How can we help?</h2>
          <p className="text-slate-600 mb-5 md:mb-6 lg:mb-8">Our friendly team is ready to help, or you can explore our detailed Support centre for more information.</p>
          <div className="mt-8 md:mt-10 lg:mt-10 flex gap-3">
            <a className="rounded-full bg-brand-600 text-white px-4 py-2 font-semibold shadow-card hover:bg-brand-700 transition" href="/faq">More Questions?</a>
            <a className="rounded-full border border-slate-300 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50" href="/contact">Book a chat</a>
          </div>
        </aside>

        <div className="space-y-3">
          {[
            ['How does Rent It work?','Rent It connects people who want to rent items with those who have items to lend. Simply search, book, pick up, and return — all managed through the app.'],
            ['Is it safe to rent from strangers?','Yes. We use verified user accounts, secure payments, and a rating system to ensure trust. Bonds and reviews help protect both renters and lenders.'],
            ['What happens if an item is damaged or not returned?','A bond is held during the rental period to cover potential issues. If there is damage or a dispute, our support team helps resolve it based on photos and evidence provided.'],
            ['Can I cancel a booking?','Yes. You can cancel for free if it’s within the allowed cancellation window. After that, a cancellation fee applies. Full policy details are available in the app.'],
            ['How are payments handled?','Payments are securely processed through the app. A bond and partial payment are taken at booking, with the remainder charged upon pickup confirmation.'],
          ].map(([q,a],i)=>(
            <details key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="text-slate-600 mt-2">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
