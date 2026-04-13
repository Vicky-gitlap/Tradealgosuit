"use client";

import DashboardCard from "./DashboardCard";
import { useDashboardData } from "./useDashboardData";
import EmptyState from "./EmptyState";

type OverviewResponse = {
  balance: string;
  dailyPnL: string;
  winRate: string;
  riskStatus: string;
  user: {
    name: string;
    tier: string;
  };
  notifications: {
    id: number;
    title: string;
    time: string;
    level: string;
  }[];
};

const initialData: OverviewResponse = {
  balance: "",
  dailyPnL: "",
  winRate: "",
  riskStatus: "",
  user: { name: "", tier: "" },
  notifications: [],
};

export default function NotificationsCard() {
  const { data, loading, error } = useDashboardData<OverviewResponse>(
    "/api/dashboard/overview",
    initialData
  );

  return (
    <DashboardCard>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Notifications
        </div>
        <div className="mt-1 text-xl font-semibold text-white">Recent Updates</div>
      </div>

      <div className="mt-6 space-y-3">
        {loading ? (
          <div className="text-sm text-zinc-500">Loading notifications...</div>
        ) : error ? (
          <EmptyState
            title="Unable to load notifications"
            description="Notification data is currently unavailable."
          />
        ) : (
          data.notifications.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-white">{item.title}</div>
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    item.level === "success"
                      ? "bg-emerald-400/10 text-emerald-300"
                      : item.level === "warning"
                      ? "bg-amber-300/10 text-amber-200"
                      : "bg-white/5 text-zinc-400"
                  }`}
                >
                  {item.time}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardCard>
  );
}
