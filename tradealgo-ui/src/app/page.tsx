import Navbar from "@/components/layout/Navbar";
import StickyCTA from "@/components/layout/StickyCTA";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Process from "@/components/sections/Process";
import Simulation from "@/components/sections/Simulation";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Process />
      <Simulation />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
