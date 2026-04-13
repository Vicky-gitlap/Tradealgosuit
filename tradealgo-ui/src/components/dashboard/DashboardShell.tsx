"use client";

import { ReactNode, useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardTopbar from "./DashboardTopbar";

type Props = {
  children: ReactNode;
};

export default function DashboardShell({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),_transparent_25%),radial-gradient(circle_at_85%_15%,_rgba(245,158,11,0.06),_transparent_18%),linear-gradient(180deg,_#060606,_#040404_45%,_#070707)]" />

      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:pl-[280px]">
        <DashboardTopbar onOpenSidebar={() => setSidebarOpen(true)} />

        <section className="px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-7xl">{children}</div>
        </section>
      </div>
    </main>
  );
}
