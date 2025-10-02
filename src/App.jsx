
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import FeaturesPage from './pages/FeaturesPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PreRelease from './pages/PreRelease.jsx'
import Business from './pages/Business.jsx'
import Resources from "./pages/Resources";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-clip">
      <Background />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pre-release" element={<PreRelease />} />
          <Route path="/business" element={<Business />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
