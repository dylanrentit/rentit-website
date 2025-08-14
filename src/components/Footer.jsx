import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200">
      <div className="container-xy py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-black">Rent <span className="text-brand-600">It</span></div>
          <p className="text-slate-600">A New Zealand marketplace to rent anything, anytime.</p>
          <ul className="flex gap-3 mt-2 text-slate-600">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1 text-slate-600">
            <li><a href="#hero">Home</a></li>
            <li><a href="#how">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-slate-600">
            <li><a href="#">About</a></li>
            <li><a href="#faq">Support</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-slate-600">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Fees</a></li>
            <li><a href="#">Cookie settings</a></li>
          </ul>
        </div>
      </div>
      <div className="container-xy py-6 text-sm text-slate-500 border-t border-slate-200">© {new Date().getFullYear()} Rent It — All rights reserved.</div>
    </footer>
  )
}
