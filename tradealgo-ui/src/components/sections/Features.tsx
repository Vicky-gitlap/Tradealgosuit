"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, Shield } from "lucide-react";
import Card from "../ui/Card";

const features = [
  {
    title: "Market Scanner",
    description: "Identify structured market conditions without manual chart scanning.",
    icon: BarChart3,
  },
  {
    title: "Range Management",
    description: "Define and manage trading ranges within a structured workflow.",
    icon: Target,
  },
  {
    title: "Risk & Position Tools",
    description: "Calculate position size and manage exposure with accuracy.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Features
          </div>
          <h2 className="text-heading-2 text-white">
            Built for Practical Trading Use
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            TradeAlgoSuite brings together a set of practical tools designed to support how you analyse markets, manage risk, and execute trades within a more structured and consistent workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-6 text-center transition hover:-translate-y-1 hover:border-amber-300/30">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-black/30 text-amber-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}