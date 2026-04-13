"use client";

import { useMemo, useState } from "react";
import DashboardCard from "./DashboardCard";
import DashboardTable from "./DashboardTable";
import { useDashboardData } from "./useDashboardData";
import EmptyState from "./EmptyState";

type Trade = {
  id: number;
  pair: string;
  type: string;
  date: string;
  result: string;
  status: string;
};

type PerformanceResponse = {
  chart: { name: string; equity: number }[];
  trades: Trade[];
};

const initialData: PerformanceResponse = {
  chart: [],
  trades: [],
};

export default function TradeHistoryCard() {
  const [filter, setFilter] = useState<"All" | "Win" | "Loss">("All");
  const { data, loading, error } = useDashboardData<PerformanceResponse>(
    "/api/dashboard/performance",
    initialData
  );

  const filtered = useMemo(() => {
    if (filter === "All") return data.trades;
    return data.trades.filter((trade) => trade.status === filter);
  }, [data.trades, filter]);

  const columns = [
    { key: "pair" as const, label: "Pair" },
    { key: "type" as const, label: "Type" },
    { key: "date" as const, label: "Date" },
    {
      key: "result" as const,
      label: "Result",
      render: (trade: Trade) => (
        <span className={trade.result.startsWith("+") ? "text-emerald-300" : "text-red-300"}>
          {trade.result}
        </span>
      ),
    },
    {
      key: "status" as const,
      label: "Status",
      render: (trade: Trade) => (
        <span
          className={`rounded-full px-3 py-1 text-xs ${
            trade.status === "Win"
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-red-400/10 text-red-300"
          }`}
        >
          {trade.status}
        </span>
      ),
    },
  ];

  return (
    <DashboardCard>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Trade History
          </div>
          <div className="mt-1 text-xl font-semibold text-white">Recent Trades</div>
        </div>

        <div className="flex gap-2">
          {["All", "Win", "Loss"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item as "All" | "Win" | "Loss")}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                filter === item
                  ? "border border-amber-300/20 bg-amber-300/12 text-amber-200"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="grid h-[220px] place-items-center text-sm text-zinc-500">
            Loading trade history...
          </div>
        ) : error ? (
          <EmptyState
            title="Unable to load trade history"
            description="Sample trade data could not be loaded."
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No trades match this filter"
            description="Adjust your filter to view other recent trade results."
          />
        ) : (
          <DashboardTable columns={columns} rows={filtered} />
        )}
      </div>
    </DashboardCard>
  );
}
