import React from "react";
import { Reveal, Halo, Parallax } from "../components/ScrollFX";


const cards = [
  {
    title: "Rent",
    copy: "Borrow what you need, when you need it — directly from locals. Save money, reduce waste, and support your community.",
    img: "/images/why-rent.jpg",
    href: "/features#explore",
    cta: "Explore renting",
  },
  {
    title: "Lend",
    copy: "Lend out your unused items to people nearby — earn extra income effortlessly while helping others and reducing collective waste.",
    img: "/images/why-lend.jpg",
    href: "/features",
    cta: "Start lending",
  },
  {
    title: "Connect",
    copy: "Connect with your community, share what you own, and reduce unnecessary consumption.",
    img: "/images/why-connect.jpg",
    href: "/FAQ",
    cta: "Any questions?",
  },
];

export default function Why() {
  return (
    <section className="section-pad">
      <Halo size={800} className="top-[-25%]" />
      <div className="container-xy text-center">
        <Reveal as="p" className="uppercase tracking-widest text-xs text-slate-500 md:mb-6">Why Rent It?</Reveal>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 mb-4 md:mb-12">
          Own less, live more. Rent anything, anytime, anywhere in NZ
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-6 justify-items-center">
          {cards.map((c) => (
            <article key={c.title} className="gradient-box p-5 flex flex-col">
              {/* Square image */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.title} illustration`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
              <p className="text-slate-600">{c.copy}</p>

              {/* CTA button */}
              <a
                href={c.href}
                className="mt-4 inline-flex items-center self-start rounded-full bg-brand-600 text-white px-4 py-2 text-sm font-semibold shadow-card hover:bg-brand-700 transition"
              >
                {c.cta}
                <svg
                  aria-hidden="true"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M12.293 3.293a1 1 0 011.414 0l4.999 5a1 1 0 010 1.414l-4.999 5a1 1 0 01-1.414-1.414L15.586 10l-3.293-3.293a1 1 0 010-1.414z" />
                  <path d="M2 10a1 1 0 011-1h12.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L15.586 11H3a1 1 0 01-1-1z" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
