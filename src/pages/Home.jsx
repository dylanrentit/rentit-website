import React from 'react';
import Background from '../components/Background.jsx'; // ✅ Import background
import Hero from '../components/Hero.jsx';
import Why from '../components/Why.jsx';
import Features from '../components/Features.jsx';
import How from '../components/How.jsx';
import Community from '../components/Community.jsx';
import FAQ from '../components/FAQ.jsx';
import CTA from '../components/CTA.jsx';

export default function Home() {
  return (
    <>
      {/* Background is fixed, so we just render it once here */}
      <Background />  

      {/* Foreground content */}
      <Hero />
      <Why />
      <Features />
      <Community />
      <How />
      <FAQ />
      <CTA />
    </>
  );
}
