import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
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
      style={{ paddingTop: "env(safe-area-inset-top)" }} // iOS notch
    >
      <div className="container-xy flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo-mark.png" alt="Rent It" className="h-8 w-8 rounded" />
          <span className="font-bold text-slate-900 text-lg">Rent It</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
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

        {/* mobile toggle */}
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-slate-300 bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* mobile panel */}
      <div className={`md:hidden border-t border-slate-200 ${open ? "block" : "hidden"}`}>
        <div className="container-xy py-3 grid gap-2">
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
