"use client";

import { useState } from "react";
import DashboardCard from "./DashboardCard";
import Button from "../ui/Button";
import DashboardModal from "./DashboardModal";

export default function QuickActionsCard() {
  const [open, setOpen] = useState<null | "drawdown" | "review" | "subscription">(null);

  return (
    <>
      <DashboardCard>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Quick Actions
          </div>
          <div className="mt-1 text-xl font-semibold text-white">Common Tasks</div>
        </div>

        <div className="mt-6 grid gap-3">
          <Button className="w-full" onClick={() => setOpen("drawdown") }>
            Set Daily Drawdown
          </Button>
          <Button variant="outline" className="w-full" onClick={() => setOpen("review") }>
            Review Recent Trades
          </Button>
          <Button variant="outline" className="w-full" onClick={() => setOpen("subscription") }>
            Manage Subscription
          </Button>
        </div>
      </DashboardCard>

      <DashboardModal
        open={open === "drawdown"}
        title="Set Daily Drawdown"
        onClose={() => setOpen(null)}
      >
        <p className="text-sm leading-7 text-zinc-300">
          This modal will later connect to your real risk-control backend and update account rules.
        </p>
      </DashboardModal>

      <DashboardModal
        open={open === "review"}
        title="Review Recent Trades"
        onClose={() => setOpen(null)}
      >
        <p className="text-sm leading-7 text-zinc-300">
          This modal can later show detailed trade notes, screenshots, and journaling tools.
        </p>
      </DashboardModal>

      <DashboardModal
        open={open === "subscription"}
        title="Manage Subscription"
        onClose={() => setOpen(null)}
      >
        <p className="text-sm leading-7 text-zinc-300">
          This modal will later connect to your billing and subscription management system.
        </p>
      </DashboardModal>
    </>
  );
}
