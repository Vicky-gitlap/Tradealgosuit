"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Card from "../ui/Card";

const benefits = [
  "A clearer approach to analysing market conditions",
  "A more consistent trading routine",
  "Faster, more structured decision-making in active markets",
  "Reduced reliance on manual chart scanning",
  "Built-in support for risk management",
  "A more repeatable and disciplined workflow",
];

export default function WhatYouGain() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            What You Gain With TradeAlgoSuite
          </div>
          <h2 className="text-heading-2 text-white">
            A more structured approach to trading — with greater clarity, consistency, and control across your workflow.
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            TradeAlgoSuite supports a shift from reactive decisions toward a more organised and disciplined way of operating in the market.
          </p>
        </div>

        <div className="mt-14">
          <Card className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 text-sm leading-7 text-zinc-200"
                >
                  <CheckCircle className="mt-1 h-4 w-4 text-amber-300" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}