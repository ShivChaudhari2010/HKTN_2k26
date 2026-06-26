// import { useState } from 'react'
// import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies";

import Stats from "./components/Stats";

import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-white)]">
        <Navbar />

        <Hero />

        <TrustedCompanies />

        <Stats />

      </div>

      <Features />

      <Pricing />

      <Testimonials />

      <FAQ />

      <Footer />
    </>
  );
}

export default App;
