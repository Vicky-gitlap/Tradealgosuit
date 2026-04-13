"use client";

import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DashboardCard from "./DashboardCard";
import { useDashboardData } from "./useDashboardData";
import EmptyState from "./EmptyState";

const ranges = ["7D", "30D", "90D"] as const;
type Range = (typeof ranges)[number];

type PerformanceResponse = {
  chart: { name: string; equity: number }[];
  trades: unknown[];
};

const initialData: PerformanceResponse = {
  chart: [],
  trades: [],
};

export default function PerformanceChartCard() {
  const [range, setRange] = useState<Range>("7D");
  const { data, loading, error } = useDashboardData<PerformanceResponse>(
    "/api/dashboard/performance",
    initialData
  );

  const chartData = useMemo(() => {
    if (range === "7D") return data.chart.slice(0, 7);
    if (range === "30D") return data.chart;
    return [...data.chart, ...data.chart].map((item, index) => ({
      ...item,
      name: `P${index + 1}`,
      equity: item.equity + index * 90,
    }));
  }, [data.chart, range]);

  return (
    <DashboardCard className="overflow-hidden border-amber-300/15">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Performance
          </div>
          <div className="mt-1 text-xl font-semibold text-white">Equity Curve</div>
        </div>

        <div className="flex items-center gap-2">
          {ranges.map((item) => (
            <button
              key={item}
              onClick={() => setRange(item)}
              className={`rounded-full px-3 py-1.5 text-xs transition ${
                range === item
                  ? "border border-amber-300/20 bg-amber-300/12 text-amber-200"
                  : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-white/10 bg-[#05070b] p-4">
        {loading ? (
          <div className="grid h-[300px] place-items-center text-sm text-zinc-500">
            Loading chart...
          </div>
        ) : error ? (
          <EmptyState
            title="Unable to load performance"
            description="Sample dashboard performance data could not be loaded."
          />
        ) : (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.4)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "rgba(5,7,11,0.95)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="equity"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  fill="url(#equityFill)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
