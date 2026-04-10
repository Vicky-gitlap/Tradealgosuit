"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";

const testimonials = [
  {
    name: "Aisha A.",
    role: "Forex Trader",
    text: "TradeAlgoSuite has completely changed the way I analyze the markets. I no longer second-guess my entries — everything is clear and structured.",
  },
  {
    name: "Henry L.",
    role: "Swing Trader",
    text: "I used to enter too early or too late. The timing confirmation and risk automation have made my trading far more consistent.",
  },
  {
    name: "Wilson N.",
    role: "Intraday Trader",
    text: "TrendEdge alone is a game-changer, but with the Scanner and TradeManager Pro, it becomes a complete trading system. Worth every penny.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Trusted by traders
          </div>

          <h2 className="text-heading-2 text-white">
            Built for traders who value structure and control.
          </h2>

          <p className="mt-5 text-body-large text-zinc-300">
            Real feedback from traders using structured workflows to improve
            clarity, discipline, and execution.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <p className="text-sm leading-7 text-zinc-300">"{t.text}"</p>

                <div className="mt-6">
                  <div className="text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-500">{t.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}