"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import BrandLogo from "../brand/BrandLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {[
            { label: "Home", href: "#" },
            { label: "How it works", href: "#process" },
            { label: "Products", href: "#pricing" },
            { label: "Contact", href: "#footer-contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition duration-300 hover:bg-white/[0.04] hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => router.push("/login")}
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Login
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => router.push("/register")}
            className="shadow-[0_0_35px_rgba(245,158,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(245,158,11,0.22)]"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a
              href="#"
              onClick={closeMenu}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              Home
            </a>

            <a
              href="#process"
              onClick={closeMenu}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              How it works
            </a>

            <a
              href="#pricing"
              onClick={closeMenu}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              Products
            </a>

            <a
              href="#footer-contact"
              onClick={closeMenu}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              Contact
            </a>

            <button
              onClick={() => {
                closeMenu();
                router.push("/login");
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              Login
            </button>

            <Button
              className="mt-2 w-full shadow-[0_0_30px_rgba(245,158,11,0.16)]"
              onClick={() => {
                closeMenu();
                router.push("/register");
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}