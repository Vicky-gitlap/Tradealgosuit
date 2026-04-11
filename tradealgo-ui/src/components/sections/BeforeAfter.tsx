"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

export default function BeforeAfter() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="p-7 shadow-2xl shadow-amber-500/10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-amber-300/80">
                  Before vs after mindset
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  From reaction to structure
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] border border-red-300/20 bg-red-300/[0.05] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-red-200/80">
                  Without structure
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "Entries feel rushed or delayed",
                    "Risk is adjusted emotionally",
                    "Charts demand too much manual effort",
                    "Confidence changes with every candle",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-200">
                      <span className="mt-2 h-2 w-2 rounded-full bg-red-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-amber-300/20 bg-amber-300/[0.05] p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-amber-200/80">
                  With TradeAlgoSuite
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "A clear process guides each decision",
                    "Risk logic is defined before execution",
                    "Market structure is easier to interpret",
                    "Execution feels calmer and more repeatable",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-200">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-black/30 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                Strategic takeaway
              </div>
              <p className="mt-3 text-base leading-8 text-zinc-200">
                The issue is not that traders need more tools. The issue is that they need a
                clearer framework for seeing, planning, executing, and managing trades.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}