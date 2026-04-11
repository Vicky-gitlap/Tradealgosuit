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
            When the market moves, clarity disappears.
            Decisions become reactive.
            Risk becomes inconsistent.
            And confidence fades at the worst possible time.
            
            The problem isn’t knowledge. It’s consistency under pressure.
          </p>
        </div>

        <div className="mt-14 grid gap-6">
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
        </div>

        <div className="mt-16 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
              THE TURNING POINT
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Where TradeAlgoSuite Comes In
            </h3>
            <p className="mt-4 text-body-large text-zinc-300">
              TradeAlgoSuite is designed to remove noise, simplify decision-making, and bring structure to your trading process helping you execute trades with intention, not emotion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white">
              From Reaction to a More Defined Trading Process
            </h3>
            <p className="mt-4 text-body-large text-zinc-300">
              TradeAlgoSuite introduces a more defined way of trading where decisions are guided by a consistent process rather than moment-to-moment reactions.
            </p>
            <p className="mt-4 text-body-large text-zinc-300">
              Instead of navigating uncertainty across multiple tools or approaches, your workflow becomes more organised, allowing you to approach each trade with greater clarity and structure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
