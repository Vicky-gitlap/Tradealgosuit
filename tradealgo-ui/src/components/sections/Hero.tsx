"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32">
      {/* Full hero image background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="TradeAlgoSuite trading interface"
          fill
          priority
          className="object-cover object-[72%_center] lg:object-[78%_center] xl:object-[82%_center]"
        />

        {/* clean dark overlays only */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/82 to-black/18" />
        <div className="absolute inset-y-0 left-0 w-[58%] bg-black/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-200 backdrop-blur-md">
            TradeAlgoSuite — Structure Your Edge
          </div>

          <h1 className="max-w-2xl text-display font-semibold leading-[0.98] text-white">
            Trade With
            <br />
            Structure.
            <br />
            <span className="text-amber-300">Execute With Precision.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-body-large leading-8 text-zinc-200">
            A premium trading workflow designed to help you analyse markets,
            define risk clearly, and execute with a more disciplined process
            instead of guesswork or emotional decisions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" onClick={() => router.push("/register") }>
              Get Started →
            </Button>

            <Button size="lg" variant="outline" onClick={() => router.push("/register") }>
              ▶ Watch Demo
            </Button>
          </div>

          {/* centered cards */}
          <div className="mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
            {[
              {
                title: "Structured Insights",
                text: "See cleaner market context across your workflow.",
              },
              {
                title: "Risk Control",
                text: "Define exposure before execution starts.",
              },
              {
                title: "Disciplined Execution",
                text: "Replace reaction with a repeatable process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/35 p-4 text-center backdrop-blur-md"
              >
                <div className="text-sm font-semibold text-white">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
