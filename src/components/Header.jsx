
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header(){
  const base = "hover:text-slate-900";
  const active = "text-slate-900";
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="container-xy h-16 flex items-center gap-6">
        {/* Text logo + square photo */}
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
        <nav className="ml-auto hidden md:flex gap-6 text-[15px] text-slate-600">
          <NavLink to="/how-it-works" className={({isActive}) => `${base} ${isActive?active:""}`}>How it works</NavLink>
          <NavLink to="/features" className={({isActive}) => `${base} ${isActive?active:""}`}>Features</NavLink>
          <NavLink to="/faq" className={({isActive}) => `${base} ${isActive?active:""}`}>FAQ</NavLink>
          <NavLink to="/contact" className={({isActive}) => `${base} ${isActive?active:""}`}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="ml-auto md:ml-0 inline-flex items-center rounded-full bg-brand-600 text-white px-4 py-2 text-sm font-semibold shadow-card hover:bg-brand-700 transition">
          Join pre-release
        </Link>
      </div>
    </header>
  )
}
