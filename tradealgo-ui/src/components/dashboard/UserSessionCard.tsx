"use client";

import DashboardCard from "./DashboardCard";
import { useAuth } from "../auth/AuthProvider";

export default function UserSessionCard() {
  const { user } = useAuth();

  return (
    <DashboardCard className="border-amber-300/15 bg-amber-300/[0.05]">
      <div className="text-xs uppercase tracking-[0.22em] text-amber-300/80">
        Session
      </div>
      <div className="mt-2 text-xl font-semibold text-white">
        Signed in as {user?.name ?? "Wilberry Wils"}
      </div>
      <p className="mt-3 text-sm leading-7 text-zinc-300">
        Account email: {user?.email ?? "wilberry@example.com"} · Package: {user?.tier ?? "Elite Account"}
      </p>
    </DashboardCard>
  );
}
