"use client";

import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BrandLogo from "../brand/BrandLogo";
import { useAuth } from "../auth/AuthProvider";

type Props = {
  onOpenSidebar: () => void;
};

export default function DashboardTopbar({ onOpenSidebar }: Props) {
  const [openProfile, setOpenProfile] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const displayName = user?.name ?? "Chinedu Nkwa";
  const displayTier = user?.tier ?? "Professional Suite";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-white/10 bg-black/45 backdrop-blur-xl lg:left-[280px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSidebar}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <BrandLogo showText iconOnlyOnMobile={false} size={36} />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 md:flex">
            <Search className="h-4 w-4" />
            Search trades, metrics...
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08]">
            <Bell className="h-4 w-4" />
          </button>

          <div className="relative">
            <button
              onClick={() => setOpenProfile((prev) => !prev)}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-300/15 text-sm font-semibold text-amber-200">
                {initials}
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-sm font-medium text-white">{displayName}</div>
                <div className="text-xs text-zinc-500">{displayTier}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            </button>

            {openProfile && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-[#0b0f16] p-2 shadow-2xl">
                <button
                  onClick={() => router.push("/dashboard/settings")}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Profile
                </button>
                <button
                  onClick={() => router.push("/dashboard/subscription")}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Subscription
                </button>
                <button
                  onClick={() => router.push("/dashboard/settings")}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Settings
                </button>
                <button
                  onClick={() => {
                    logout();
                    router.push("/login");
                  }}
                  className="w-full rounded-xl px-3 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
