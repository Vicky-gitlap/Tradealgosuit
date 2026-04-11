"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crosshair,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

type StepKey = "scan" | "plan" | "execute" | "manage";

export default function Simulation() {
  const [step, setStep] = useState<StepKey>("scan");
  const [risk] = useState(1);

  const steps = useMemo(
    () => [
      {
        key: "scan" as StepKey,
        label: "Scan",
        title: "Scan the market",
        body: "Structured conditions are detected across aligned chart behavior so the opportunity feels intentional, not random.",
        icon: TrendingUp,
      },
      {
        key: "plan" as StepKey,
        label: "Plan",
        title: "Define the trade",
        body: "Risk, stop loss, and profit target are set before the trade is taken, reducing emotional adjustments.",
        icon: ShieldCheck,
      },
      {
        key: "execute" as StepKey,
        label: "Execute",
        title: "Execute with clarity",
        body: "The entry is taken with predefined logic. The system reinforces control instead of hesitation.",
        icon: Crosshair,
      },
      {
        key: "manage" as StepKey,
        label: "Manage",
        title: "Manage with discipline",
        body: "The position is protected as price moves. Profits are handled with a structured process, not impulse.",
        icon: Target,
      },
    ],
    []
  );

  const currentIndex = steps.findIndex((s) => s.key === step);
  const current = steps[currentIndex];

  const rewardRatio = 2.4;
  const accountSize = 10000;
  const riskAmount = Number(((risk / 100) * accountSize).toFixed(2));

  const statusText = {
    scan: "Opportunity detected",
    plan: "Trade parameters defined",
    execute: "Position opened",
    manage: "Structured trade complete",
  }[step];

  const outcomeText = {
    scan: "Waiting for plan confirmation",
    plan: "Projected outcome: +2.4R",
    execute: "Trade live: risk controlled",
    manage: "Outcome: +2.4R",
  }[step];

  return (
    <section id="simulation" className="hidden md:block px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Interactive demo
          </div>
          <h2 className="text-heading-2 text-white">
            How Tradealgosuit Guides Every Trade
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            Step through a structured trading workflow and see how each decision is guided, not guessed.

Follow the flow below to see how a structured trade is built from analysis to execution.
          </p>
        </div>

        <div className="mt-14">
          <Card className="overflow-hidden border-amber-300/15 p-6 shadow-glow lg:p-8">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.18fr_0.82fr]">
              {/* LEFT PANEL */}
              <div className="relative rounded-[28px] border border-white/10 bg-[#05070b] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-caption text-zinc-500">Structured Trade Simulation</div>
                    <div className="mt-1 text-lg font-semibold text-white">{current.title}</div>
                  </div>

                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Live Preview
                  </div>
                </div>

                <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-[#05070b] p-4">
                  <motion.div
                    initial={{ scale: 1.04 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/simulation.png"
                      alt="Trading system across devices"
                      fill
                      className="object-contain opacity-95"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

                  {step === "scan" && (
                    <motion.div
                      animate={{ x: ["-15%", "115%"] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-amber-300/14 to-transparent blur-md"
                    />
                  )}

                  <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/45 p-3 text-xs text-zinc-300 backdrop-blur-md">
                    <div className="font-medium text-white">System State</div>
                    <div className="mt-1">Scanner: {step === "scan" ? "ACTIVE" : "COMPLETE"}</div>
                    <div>Risk: {risk}%</div>
                    <div>R:R: 1:{rewardRatio}</div>
                  </div>

                  <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-black/45 p-3 text-xs text-zinc-300 backdrop-blur-md">
                    <div className="text-zinc-500">Execution Status</div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${currentIndex >= 0 ? "bg-amber-300" : "bg-zinc-600"}`} />
                      Scan
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${currentIndex >= 1 ? "bg-amber-300" : "bg-zinc-600"}`} />
                      Plan
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${currentIndex >= 2 ? "bg-amber-300" : "bg-zinc-600"}`} />
                      Execute
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${currentIndex >= 3 ? "bg-amber-300" : "bg-zinc-600"}`} />
                      Manage
                    </div>
                  </div>

                  <svg viewBox="0 0 600 320" className="absolute inset-x-4 bottom-4 h-[240px] sm:h-[290px] w-[calc(100%-2rem)]">
                    <motion.path
                      d="M20 270 C 70 248, 98 250, 135 210 S 210 165, 255 160 S 312 122, 350 130 S 410 82, 445 92 S 495 65, 580 48"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6 }}
                    />

                    <motion.path
                      d="M20 270 C 70 248, 98 250, 135 210 S 210 165, 255 160 S 312 122, 350 130 S 410 82, 445 92 S 495 65, 580 48"
                      fill="none"
                      stroke="rgba(245,158,11,0.20)"
                      strokeWidth="12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6 }}
                    />

                    {(step === "plan" || step === "execute" || step === "manage") && (
                      <>
                        <line x1="255" y1="260" x2="255" y2="160" stroke="#f59e0b" strokeDasharray="6 6" />
                        <line x1="255" y1="160" x2="520" y2="160" stroke="#f59e0b" strokeDasharray="6 6" />
                        <text x="262" y="152" fill="#fcd34d" fontSize="12">
                          Entry Zone
                        </text>
                      </>
                    )}

                    {(step === "execute" || step === "manage") && (
                      <>
                        <circle cx="255" cy="160" r="8" fill="#f59e0b" />
                        <text x="268" y="178" fill="#fde68a" fontSize="12">
                          Entry confirmed
                        </text>
                      </>
                    )}

                    {step === "manage" && (
                      <>
                        <line x1="470" y1="95" x2="470" y2="260" stroke="#f59e0b" strokeDasharray="6 6" />
                        <circle cx="470" cy="95" r="9" fill="#facc15" />
                        <text x="482" y="92" fill="#fde68a" fontSize="12">
                          Target hit
                        </text>
                      </>
                    )}
                  </svg>

                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-xs backdrop-blur-md">
                      <div className="text-zinc-500">Status</div>
                      <div className="mt-1 font-semibold text-white">{statusText}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-xs backdrop-blur-md">
                      <div className="text-zinc-500">Risk Amount</div>
                      <div className="mt-1 font-semibold text-white">${riskAmount}</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-xs backdrop-blur-md">
                      <div className="text-zinc-500">Outcome</div>
                      <div className="mt-1 font-semibold text-white">{outcomeText}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="flex flex-col gap-6 rounded-[28px] border border-white/10 bg-zinc-950/70 p-5">
                <div>
                  <div className="text-caption text-amber-300/80">Experience the system</div>
                  <h3 className="mt-2 text-heading-3 text-white">{current.title}</h3>
                  <p className="mt-3 text-body-small text-zinc-300">{current.body}</p>
                </div>

                <div className="space-y-3">
                  {steps.map((item, index) => {
                    const Icon = item.icon;
                    const active = item.key === step;

                    return (
                      <button
                        key={item.key}
                        onClick={() => setStep(item.key)}
                        className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                          active
                            ? "border-amber-300/40 bg-amber-300/10 text-white shadow-glow"
                            : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold">0{index + 1}. {item.label}</div>
                            <div className="text-xs text-zinc-400">{item.title}</div>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg">Try Full Experience</Button>
                  <Button size="lg" variant="outline">
                    Watch Product Demo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
