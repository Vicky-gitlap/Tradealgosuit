import Link from "next/link";
import BrandLogo from "../brand/BrandLogo";

export default function Footer() {
  return (
    <footer id="footer-contact" className="border-t border-white/10 bg-black/40 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <BrandLogo showText size={40} iconOnlyOnMobile={false} />
          <p className="mt-4 text-sm leading-7 text-zinc-400">
            TradeAlgoSuite helps traders approach the market with more structure,
            clearer risk definition, and a more disciplined execution workflow.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:w-auto">
          <div>
            <div className="mb-3 font-semibold text-white">Product</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <a href="#process" className="block hover:text-white">TrendEdge</a>
              <a href="#simulation" className="block hover:text-white">Market Scanner Pro</a>
              <a href="#pricing" className="block hover:text-white">RangePilot Pro</a>
              <a href="#pricing" className="block hover:text-white">Web Tradecopier Pro</a>
            </div>
          </div>

          <div>
            <div className="mb-3 font-semibold text-white">Quick Links</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <Link href="/" className="block hover:text-white">Home</Link>
              <a href="/login" className="block hover:text-white">Login</a>
              <a href="#pricing" className="block hover:text-white">Pricing</a>
              <a href="/contact" className="block hover:text-white">Contacts</a>
            </div>
          </div>

          <div>
            <div className="mb-3 font-semibold text-white">Legal</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <a href="#" className="block hover:text-white">Privacy</a>
              <a href="#" className="block hover:text-white">Terms</a>
              <a href="#" className="block hover:text-white">Disclaimer</a>
              <a href="#" className="block hover:text-white">Refund policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} TradeAlgoSuite. All rights reserved.
      </div>
    </footer>
  );
}
