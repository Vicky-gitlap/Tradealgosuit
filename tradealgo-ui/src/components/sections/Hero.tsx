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

          {/* Premium hero buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="group">
              <Button
                size="lg"
                onClick={() => router.push("/register")}
                className="w-full shadow-[0_0_35px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(245,158,11,0.24)] sm:w-auto"
              >
                Get Started →
              </Button>
            </div>

            <div className="group">
              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push("/register")}
                className="w-full border-amber-300/30 bg-black/30 text-amber-300 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-amber-300/50 hover:bg-amber-300/10 hover:text-amber-200 hover:shadow-[0_0_40px_rgba(245,158,11,0.12)] sm:w-auto"
              >
                ▶ Watch Demo
              </Button>
            </div>
          </div>

          {/* Centered premium cards */}
          <div className="mt-14 flex justify-center">
            <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-3">
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
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:shadow-[0_0_60px_rgba(245,158,11,0.18)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-300/8 via-transparent to-transparent" />
                    <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-amber-300/12 blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-sm font-semibold text-white transition duration-300 group-hover:text-amber-100">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-300 transition duration-300 group-hover:text-zinc-200">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}