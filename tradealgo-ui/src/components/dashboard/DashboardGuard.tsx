"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth/AuthProvider";

type Props = {
  children: ReactNode;
};

export default function DashboardGuard({ children }: Props) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    const bypass = false; // TEMP: keep true during UI testing

    if (!loading && !user && !bypass) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-zinc-400">
          Loading dashboard...
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
