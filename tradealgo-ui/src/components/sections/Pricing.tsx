"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Crown,
  Sparkles,
  Zap,
  ArrowRight,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const pricingPlans = [
  {
    name: "Scanner Pro",
    price: "£29.99",
    period: "/month",
    badge: "Starter",
    description:
      "For traders who want cleaner market visibility and structured alerts without unnecessary complexity.",
    icon: Zap,
    accent: "text-sky-300",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
    cta: "Start with Scanner Pro",
    items: [
      "Market Scanner Pro",
      "Multi-timeframe coverage",
      "Structured alerts",
      "Cleaner market context",
      "Faster decision support",
    ],
  },
  {
    name: "Trading Suite",
    price: "£59.99",
    period: "/month",
    badge: "Most Popular",
    description:
      "For traders who want a complete, structured workflow from market analysis to risk-defined execution.",
    icon: Sparkles,
    accent: "text-amber-300",
    border: "border-amber-300/35",
    bg: "bg-amber-300/[0.08]",
    featured: true,
    cta: "Choose Trading Suite",
    items: [
      "Market Scanner Pro",
      "RangePilot Pro",
      "TrendEdge Pro",
      "Structured workflow tools",
      "Priority updates",
      "Stronger execution control",
    ],
  },
  {
    name: "Professional Suite",
    price: "£89.99",
    period: "/month",
    badge: "Advanced",
    description:
      "For traders who want the full execution ecosystem with broader control and deeper workflow support.",
    icon: Crown,
    accent: "text-violet-300",
    border: "border-white/10",
    bg: "bg-white/[0.03]",
    cta: "Go Professional",
    items: [
      "Market Scanner Pro",
      "RangePilot Pro",
      "TrendEdge Pro",
      "Web Trade Copier",
      "Full execution ecosystem",
      "Advanced workflow coverage",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Pricing
          </div>
          <h2 className="text-heading-2 text-white">
            Choose the level of structure that fits your trading workflow.
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            Start with clarity. Upgrade into consistency. Each plan is designed to help you move from reacting to the market to executing with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className={plan.featured ? "lg:-translate-y-3" : ""}
              >
                <Card
                  className={`relative h-full overflow-hidden p-7 transition duration-300 hover:-translate-y-1 ${plan.border} ${plan.bg} ${
                    plan.featured
                      ? "shadow-glow-lg"
                      : "shadow-card hover:shadow-card-hover"
                  }`}
                >
                  {plan.featured && (
                    <>
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
                      <div className="absolute -top-20 right-[-20px] h-40 w-40 rounded-full bg-amber-300/10 blur-3xl" />
                    </>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30 ${plan.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="text-lg font-semibold text-white">
                          {plan.name}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {plan.badge}
                        </div>
                      </div>
                    </div>

                    {plan.featured && (
                      <div className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-black">
                        Popular
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <div className="flex items-end gap-2">
                      <div className="text-4xl font-semibold text-white">
                        {plan.price}
                      </div>
                      <div className="pb-1 text-sm text-zinc-400">
                        {plan.period}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mt-8 rounded-[22px] border border-white/10 bg-black/20 p-4">
                    <div className="text-caption text-zinc-500">
                      Best suited for
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white">
                      {plan.featured
                        ? "Traders seeking the strongest balance of clarity, risk control, and execution support."
                        : plan.name === "Scanner Pro"
                        ? "Focused traders who want clean market scanning and structured setup visibility."
                        : "Advanced traders who want broader execution infrastructure and deeper ecosystem support."}
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {plan.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm text-zinc-200"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="w-full"
                      variant={plan.featured ? "primary" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 inline h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-4 text-center text-xs text-zinc-500">
                    {plan.featured
                      ? "Most traders start here for the strongest overall workflow balance."
                      : "Designed to support a more structured and controlled trading process."}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            [
              "Why the middle plan stands out",
              "It offers the clearest balance between market analysis, trade planning, and execution control.",
            ],
            [
              "How this section converts better",
              "The hierarchy makes the recommended option easier to choose without making the others feel weak.",
            ],
            [
              "What visitors should feel",
              "The pricing should feel premium, understandable, and aligned with different levels of trading seriousness.",
            ],
          ].map(([title, text]) => (
            <Card key={title} className="p-5">
              <div className="text-sm font-semibold text-white">{title}</div>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
