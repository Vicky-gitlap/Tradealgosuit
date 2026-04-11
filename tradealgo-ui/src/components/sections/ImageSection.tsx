"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20"
        >
          <Image
            src="/simulation.png"
            alt="TradeAlgoSuite Simulation"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}