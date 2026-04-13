"use client";

import { useState } from "react";
import DashboardCard from "./DashboardCard";
import Button from "../ui/Button";

const rows = [
  { label: "Daily Drawdown", used: 2.1, limit: 5.0 },
  { label: "Max Drawdown", used: 4.8, limit: 10.0 },
  { label: "Daily Loss Buffer", used: 290, limit: 700, money: true },
];

export default function RiskControlCard() {
  const [dailyLimit, setDailyLimit] = useState(5);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("5");

  return (
    <DashboardCard>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Risk Control
        </div>
        <div className="mt-1 text-xl font-semibold text-white">Account Risk Monitor</div>
      </div>

      <div className="mt-6 space-y-5">
        {rows.map((row) => {
          const width = `${Math.min((row.used / row.limit) * 100, 100)}%`;

          return (
            <div key={row.label}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-zinc-300">{row.label}</span>
                <span className="text-zinc-500">
                  <span className="font-medium text-white">
                    {row.money ? `$${row.used}` : `${row.used}%`}
                  </span>{" "}
                  / {row.money ? `$${row.limit}` : `${row.limit}%`}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/6">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
                  style={{ width }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-3xl border border-amber-300/15 bg-amber-300/[0.06] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">Set Daily Drawdown</div>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Configure your acceptable daily risk threshold to stay within account risk limits.
            </p>
          </div>

          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:text-white"
            >
              Edit
            </button>
          )}
        </div>

        {!editing ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white">
            Current limit: {dailyLimit.toFixed(1)}%
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <input
              type="number"
              step="0.1"
              min="0.5"
              max="10"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-amber-300/40"
            />

            <div className="flex gap-3">
              <Button
                className="flex-1"
                onClick={() => {
                  const value = Number(draft);
                  if (!Number.isNaN(value) && value > 0) {
                    setDailyLimit(value);
                  }
                  setEditing(false);
                }}
              >
                Save Limit
              </Button>

              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setDraft(String(dailyLimit));
                  setEditing(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </DashboardCard>
  );
}
