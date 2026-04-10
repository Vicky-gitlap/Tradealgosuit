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
              <a href="#process" className="block hover:text-white">Process</a>
              <a href="#simulation" className="block hover:text-white">Simulation</a>
              <a href="#pricing" className="block hover:text-white">Pricing</a>
            </div>
          </div>

          <div>
            <div className="mb-3 font-semibold text-white">Company</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <a href="#faq" className="block hover:text-white">FAQ</a>
              <a href="/login" className="block hover:text-white">Login</a>
              <a href="/" className="block hover:text-white">Home</a>
            </div>
          </div>

          <div>
            <div className="mb-3 font-semibold text-white">Legal</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <a href="#" className="block hover:text-white">Privacy</a>
              <a href="#" className="block hover:text-white">Terms</a>
              <a href="#" className="block hover:text-white">Disclaimer</a>
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
