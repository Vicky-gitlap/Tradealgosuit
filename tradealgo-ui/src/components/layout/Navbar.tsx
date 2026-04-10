"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import BrandLogo from "../brand/BrandLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <BrandLogo />

        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Home
          </a>
          <a href="#process" className="transition hover:text-white">
            How it works
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Products
          </a>
          <a href="#footer-contact" className="transition hover:text-white">
            Contact
          </a>
          <a href="/login" className="transition hover:text-white">
            Login
          </a>
        </nav>

        <div className="hidden md:block">
          <a href="/register">
            <Button>Get Started</Button>
          </a>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-zinc-300">
            <a href="#" onClick={closeMenu} className="hover:text-white">
              Home
            </a>
            <a href="#process" onClick={closeMenu} className="hover:text-white">
              How it works
            </a>
            <a href="#pricing" onClick={closeMenu} className="hover:text-white">
              Products
            </a>
            <a href="#footer-contact" onClick={closeMenu} className="hover:text-white">
              Contact
            </a>
            <a href="/login" onClick={closeMenu} className="hover:text-white">
              Login
            </a>

            <a href="/register" onClick={closeMenu}>
              <Button className="mt-2 w-full">Get Started</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
