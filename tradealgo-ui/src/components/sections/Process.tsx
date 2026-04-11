"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  Crosshair,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Card from "../ui/Card";

type StepKey = "analyse" | "plan" | "execute" | "manage";

export default function Process() {
  const [activeStep, setActiveStep] = useState<StepKey>("analyse");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const stepIndex = useTransform(scrollYProgress, [0, 1], [0, 3]);

  useEffect(() => {
    const unsubscribe = stepIndex.onChange((value) => {
      const index = Math.floor(value);
      const stepKeys: StepKey[] = ["analyse", "plan", "execute", "manage"];
      setActiveStep(stepKeys[index] || "analyse");
    });
    return unsubscribe;
  }, [stepIndex]);

  const steps = useMemo(
    () => [
      {
        key: "analyse" as StepKey,
        title: "Analyse",
        eyebrow: "Step 01",
        desc: "Read market structure with more clarity before making a decision.",
        detail:
          "This stage reduces noise and helps the trader focus on cleaner context, stronger alignment, and more interpretable price structure before moving forward.",
        icon: BarChart3,
        iconColor: "text-amber-300",
        status: "Market context aligned",
      },
      {
        key: "plan" as StepKey,
        title: "Plan",
        eyebrow: "Step 02",
        desc: "Define risk, entry, and target before execution begins.",
        detail:
          "The trade is framed before pressure starts. Risk, stop loss, and profit expectation are set first so execution feels calmer and more controlled.",
        icon: ShieldCheck,
        iconColor: "text-amber-300",
        status: "Risk model defined",
      },
      {
        key: "execute" as StepKey,
        title: "Execute",
        eyebrow: "Step 03",
        desc: "Enter trades through a repeatable decision framework.",
        detail:
          "Execution becomes less emotional because the important choices were already made earlier in the workflow. The system supports discipline over impulse.",
        icon: Crosshair,
        iconColor: "text-amber-300",
        status: "Entry confirmed",
      },
      {
        key: "manage" as StepKey,
        title: "Manage",
        eyebrow: "Step 04",
        desc: "Protect capital and manage progress with consistency.",
        detail:
          "This stage keeps the trade aligned with the plan and helps reduce reactive exits, inconsistent management, and unnecessary second-guessing.",
        icon: Target,
        iconColor: "text-amber-300",
        status: "Outcome controlled",
      },
    ],
    []
  );

  const activeIndex = steps.findIndex((step) => step.key === activeStep);
  const current = steps[activeIndex];

  return (
    <section id="process" ref={sectionRef} className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            How it works
          </div>
          <h2 className="text-heading-2 text-white">
            How Tradealgosuit Guides Every Trade
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            A structured workflow helps traders move from analysis to execution
            with more clarity, more control, and less emotional interference.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
          {/* LEFT PANEL */}
          <Card className="border-white/10 bg-white/[0.02] p-6 shadow-card">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-caption text-zinc-500">Workflow stages</div>
                <div className="mt-1 text-lg font-semibold text-white">
                  Guided trade process
                </div>
              </div>
              <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
                Interactive
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.key === activeStep;

                return (
                  <button
                    key={step.key}
                    onClick={() => setActiveStep(step.key)}
                    className={`group flex w-full items-start gap-4 rounded-[24px] border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-amber-300/30 bg-white/[0.05] shadow-glow"
                        : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/40 ${
                        isActive ? step.iconColor : "text-zinc-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-caption text-zinc-500">
                            {step.eyebrow}
                          </div>
                          <div className="mt-1 text-base font-semibold text-white">
                            {step.title}
                          </div>
                        </div>

                        <div
                          className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${
                            isActive
                              ? "border-amber-300/20 bg-amber-300/10 text-amber-200"
                              : "border-white/10 bg-black/20 text-zinc-500"
                          }`}
                        >
                          {isActive ? "Active" : "Ready"}
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-zinc-300">
                        {step.desc}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                        <CheckCircle2 className="h-4 w-4 text-amber-300" />
                        {step.status}
                      </div>
                    </div>

                    <ArrowRight
                      className={`mt-1 h-4 w-4 shrink-0 transition ${
                        isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Card>

          {/* RIGHT PANEL */}
          <Card className="overflow-hidden border-amber-300/15 bg-white/[0.02] p-6 shadow-glow">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-caption text-zinc-500">
                  Workflow visualisation
                </div>
                <div className="mt-1 text-lg font-semibold text-white">
                  {current.title} stage
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300">
                {current.status}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#05070b] p-4">
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-300/5 to-transparent" />

              {/* clean step line - no green */}
              <div className="relative z-10 px-2 pt-6 pb-4 sm:px-4 sm:pt-8">
                <div className="relative flex items-center justify-between">
                  {/* neutral/amber connector */}
                  <div className="absolute left-[7%] right-[7%] top-6 h-px bg-white/10 sm:left-[8%] sm:right-[8%]" />
                  <motion.div
                    key={activeStep}
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        activeIndex === 0
                          ? "0%"
                          : activeIndex === 1
                          ? "26%"
                          : activeIndex === 2
                          ? "56%"
                          : "84%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-[7%] top-6 h-[2px] bg-amber-400/80 sm:left-[8%]"
                  />

                  {steps.map((step, index) => {
                    const isActive = index === activeIndex;
                    const isComplete = index < activeIndex;

                    return (
                      <div
                        key={step.key}
                        className="relative z-10 flex flex-col items-center"
                      >
                        <div
                          className={`grid h-14 w-14 place-items-center rounded-full border text-sm font-semibold backdrop-blur-md transition ${
                            isActive
                              ? "border-amber-300/40 bg-amber-300/15 text-white shadow-glow"
                              : isComplete
                              ? "border-amber-300/30 bg-amber-300/10 text-white"
                              : "border-white/10 bg-black/40 text-zinc-400"
                          }`}
                        >
                          {index + 1}
                        </div>

                        <div
                          className={`mt-3 text-sm ${
                            isActive || isComplete ? "text-white" : "text-zinc-500"
                          }`}
                        >
                          {step.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 mt-8 grid gap-4 sm:grid-cols-2"
              >
                <div className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <div className="text-caption text-zinc-500">Current stage</div>
                  <div className="mt-2 text-base font-semibold text-white">
                    {current.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {current.detail}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
                  <div className="text-caption text-zinc-500">Why it matters</div>
                  <div className="mt-2 text-base font-semibold text-white">
                    Structure before emotion
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    Each stage is designed to reduce hesitation, standardise
                    decision-making, and make execution feel more controlled from
                    start to finish.
                  </p>
                </div>
              </motion.div>

              <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Decision flow", "Guided"],
                  ["Risk logic", "Predefined"],
                  ["Execution state", "Structured"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-center"
                  >
                    <div className="text-caption text-zinc-500">{label}</div>
                    <div className="mt-2 text-sm font-semibold text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
