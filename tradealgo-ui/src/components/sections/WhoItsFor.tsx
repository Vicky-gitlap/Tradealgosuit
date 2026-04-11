"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Card from "../ui/Card";

export default function WhoItsFor() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Who It&apos;s For
          </div>
          <h2 className="text-heading-2 text-white">
            Designed for Traders Who Value Structure
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            This approach suits traders who value structure, discipline, and consistency in their execution.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-xl font-semibold text-white">It is suitable for:</h3>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Traders who want consistency in execution",
                  "Traders focused on risk management and discipline",
                  "Traders looking to reduce emotional decision-making",
                  "Traders looking to develop a more structured approach to trading",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-200">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full p-6">
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold text-white">It may not be suitable if:</h3>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "You are looking for trading signals",
                  "You expect guaranteed outcomes",
                  "You prefer unstructured or impulsive trading",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-7 text-zinc-200">
                    <XCircle className="mt-1 h-4 w-4 text-red-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}