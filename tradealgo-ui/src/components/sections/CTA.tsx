"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function CTA() {
  return (
    <section className="px-6 pb-16 pt-6 sm:pb-24 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-glow-lg sm:rounded-[36px] sm:p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute -left-12 top-10 h-36 w-36 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-200">
                <Sparkles className="h-4 w-4" />
                Embrace Structure
              </div>

              <h2 className="mt-6 text-heading-1 text-white">
                Trade with more structure,
                <span className="block text-amber-300">or keep guessing.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-body-large text-zinc-300">
                TradeAlgoSuite is built for traders who want cleaner market context,
                clearer risk definition, and a more disciplined execution process.
                The goal is not more noise. The goal is more control.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                <a href="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Now
                    <ArrowRight className="ml-2 inline h-4 w-4" />
                  </Button>
                </a>

                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Play className="mr-2 inline h-4 w-4" />
                  Watch Product Demo
                </Button>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Clarity",
                    text: "See market structure more cleanly before acting.",
                  },
                  {
                    title: "Control",
                    text: "Define risk before execution, not during pressure.",
                  },
                  {
                    title: "Consistency",
                    text: "Build a more repeatable decision-making workflow.",
                  },
                ].map((item) => (
                  <Card key={item.title} className="bg-black/20 p-5 text-left">
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30 text-amber-300">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-zinc-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-sm text-zinc-500">
                Designed for traders who value structure, discipline, and more
                controlled execution.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
