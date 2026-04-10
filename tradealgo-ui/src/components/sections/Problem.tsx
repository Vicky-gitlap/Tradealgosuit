"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Card from "../ui/Card";

const items = [
  {
    title: "Cluttered charts",
    text: "Too many inputs create hesitation and make clean decisions harder to trust.",
  },
  {
    title: "Emotional entries",
    text: "Trades are taken too early, too late, or for the wrong reason once pressure rises.",
  },
  {
    title: "Inconsistent risk",
    text: "Position sizing changes from trade to trade, which breaks discipline over time.",
  },
  {
    title: "Reactive decisions",
    text: "The trader responds to candles and opinions instead of following a repeatable process.",
  },
];

export default function Problem() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            The real friction
          </div>
          <h2 className="text-heading-2 text-white">
            Most traders do not fail from lack of strategy. They fail in the moment of execution.
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            This section is designed to make visitors feel seen. It highlights the practical and
            emotional friction that comes before a more structured workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full p-6 transition hover:-translate-y-1 hover:border-amber-300/30">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30 text-amber-300">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                      friction
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{item.text}</p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-3">
                    <div className="mb-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                      instability preview
                    </div>
                    <div className="relative h-10 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ x: "-20%" }}
                        whileInView={{ x: ["-20%", "10%", "-10%", "15%"] }}
                        viewport={{ once: true }}
                        transition={{ duration: 4 + index, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute left-0 top-0 h-full w-24 rounded-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
                      />
                      <div className="absolute inset-y-0 left-[38%] w-px bg-red-300/70" />
                      <div className="absolute inset-y-0 left-[64%] w-px bg-amber-300/70" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

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

                <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                  conversion anchor
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
      </div>
    </section>
  );
}
