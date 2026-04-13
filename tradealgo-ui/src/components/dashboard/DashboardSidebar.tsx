"use client";

import Link from "next/link";
import {
  X,
  LayoutDashboard,
  BarChart3,
  ShieldAlert,
  ScrollText,
  Wallet,
  BookOpen,
  Settings,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import BrandLogo from "../brand/BrandLogo";

type Props = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Performance", icon: BarChart3, href: "/dashboard/performance" },
  { label: "Risk Control", icon: ShieldAlert, href: "/dashboard/risk-control" },
  { label: "Trade History", icon: ScrollText, href: "/dashboard/trade-history" },
  { label: "Subscription", icon: Wallet, href: "/dashboard/subscription" },
  { label: "User Guide", icon: BookOpen, href: "/dashboard/guide" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function DashboardSidebar({ open, onClose }: Props) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-white/10 bg-black/70 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <BrandLogo showText iconOnlyOnMobile={false} size={40} />
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-white/10 px-5 py-5">
          <div className="rounded-3xl border border-amber-300/15 bg-amber-300/[0.06] p-4">
            <div className="text-xs uppercase tracking-[0.22em] text-amber-300/80">
              Account Status
            </div>
            <div className="mt-3 text-lg font-semibold text-white">Active</div>
            <div className="mt-1 text-sm text-zinc-300">Account Performance Tracking</div>
          </div>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center justify-between rounded-2xl border px-4 py-3 transition ${
                  active
                    ? "border-amber-300/30 bg-amber-300/10 text-white shadow-[0_0_30px_rgba(245,158,11,0.08)]"
                    : "border-transparent bg-white/[0.02] text-zinc-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-300" />
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 px-5 py-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Subscription
            </div>
            <div className="mt-2 text-base font-semibold text-white">Professional Suite</div>
            <div className="mt-1 text-sm text-zinc-400">Renews on 28 Feb 2027</div>
          </div>
        </div>
      </aside>
    </>
  );
}
