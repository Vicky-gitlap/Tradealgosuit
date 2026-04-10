"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Card from "../ui/Card";

const faqs = [
  {
    q: "Does TradeAlgoSuite work on MT4 or MT5?",
    a: "Yes. Tradealgosuit works on both mt4 and mt5",
  },
  {
    q: "Is this a signal service?",
    a: "No. TradeAlgoSuite is positioned as a structured workflow and execution support tool, not a promise of outcomes.",
  },
  {
    q: "Is it beginner-friendly?",
    a: "Yes, but the messaging is strongest for traders who want more discipline, clarity, and consistency.",
  },
  {
    q: "Do I get updates?",
    a: "Yes — all plans include continuous updates.",
  },
  {
    q: "Is support included?",
    a: "Yes — all plans include continuous support.",
  },
  {
    q: "Can I use a single licence on multiple accounts?",
    a: "Each licence is linked to a single trading account for security and proper usage control.",
  },
  {
    q: "Do I need a VPS?",
    a: "A VPS is recommended for optimal performance and reliability, especially for active traders, but it's not strictly required. You can run TradeAlgoSuite on your local machine, but a VPS can help ensure uninterrupted operation and faster execution.",
  },
  {
    q: "Is it 100% automated?",
    a: "It is semi-automated — you remain in control while the system provides tools to support trade confirmation, execution, and risk management..",
  },
  {
    q: "What markets can I use TradeAlgoSuite on?",
    a: "TradeAlgoSuite can be used across a wide range of markets, including forex, indices, commodities (such as gold), cryptocurrencies, stocks, synthetic indices, and most CFD instruments.",
  },
  {
    q: "Can this guarantee profits?",
    a: "No tool can guarantee profits. TradeAlgoSuite provides tools designed to support a more structured approach to analysing markets, managing risk, and executing trades. Outcomes will vary depending on individual use and market conditions.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            FAQ
          </div>
          <h2 className="text-heading-2 text-white">
            Clear answers for traders evaluating the system.
          </h2>
          <p className="mt-5 text-body-large text-zinc-300">
            Keeping it simple and straightforward. If you have more questions, feel free to reach out via the contact form below or on our socials.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <Card key={item.q}>
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-zinc-400 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-7 text-zinc-300">{item.a}</div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
