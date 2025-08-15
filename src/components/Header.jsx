import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LINKS = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/features", label: "Features" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-xy">
        {/* MOBILE: 3 columns – menu / logo / CTA */}
        <div className="flex items-center justify-between md:hidden py-1">
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="h-10 w-10 grid place-items-center rounded-lg border border-slate-300 bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <a href="/" className="flex items-baseline gap-1" aria-label="Rent It — Home">
          <img
            src="/images/logo-square.png"       // put your square photo here
            alt="Rent It mark"
            className="h-[5em] w-[3em] rounded-md object-cover"
          />
          <span className="font-black tracking-tight leading-none text-xl md:text-2xl  translate-y-[-30px]">
            Rent <span className="text-brand-600">It</span>
          </span>
        </a>
          <Link
            to="/signup"
            className="rounded-full bg-brand-600 text-white px-3 py-2 text-sm font-semibold"
          >
            Join pre-release
          </Link>
        </div>

        {/* DESKTOP: logo left + links + CTA */}
        <div className="hidden md:flex items-center justify-between py-1">
          <a href="/" className="flex items-baseline gap-1" aria-label="Rent It — Home">
          <img
            src="/images/logo-square.png"       // put your square photo here
            alt="Rent It mark"
            className="h-[5em] w-[3em] rounded-md object-cover"
          />
          <span className="font-black tracking-tight leading-none text-xl md:text-2xl  translate-y-[-30px]">
            Rent <span className="text-brand-600">It</span>
          </span>
        </a>

          <nav className="flex items-center gap-6">
            {LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-semibold text-sm ${
                    isActive ? "text-brand-700" : "text-slate-700 hover:text-brand-700"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/signup"
            className="rounded-full bg-brand-600 text-white px-4 py-2 text-sm font-semibold"
          >
            Join pre-release
          </Link>
        </div>
      </div>

      {/* mobile drawer */}
      <div className={`md:hidden border-t border-slate-200 ${open ? "block" : "hidden"}`}>
        <div className="container-xy py-1 grid gap-2">
          {LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-50"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
