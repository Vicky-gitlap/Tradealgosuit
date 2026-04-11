import Navbar from "@/components/layout/Navbar";
import StickyCTA from "@/components/layout/StickyCTA";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ImageSection from "@/components/sections/ImageSection";
import WhatYouGain from "@/components/sections/WhatYouGain";
import Process from "@/components/sections/Process";
import Features from "@/components/sections/Features";
import Simulation from "@/components/sections/Simulation";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Testimonials from "@/components/sections/Testimonials";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <ImageSection />
      <WhatYouGain />
      <Process />
      <Features />
      <Simulation />
      <WhoItsFor />
      <Testimonials />
      <BeforeAfter />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
