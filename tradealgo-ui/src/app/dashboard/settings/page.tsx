"use client";

import { useState } from "react";
import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Button from "@/components/ui/Button";
import { usePersistentSettings } from "@/components/dashboard/usePersistentSettings";
import { useAuth } from "@/components/auth/AuthProvider";

type Tab = "profile" | "preferences";

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("profile");
  const { settings, setSettings, ready } = usePersistentSettings();
  const { login, user } = useAuth();

  if (!ready) {
    return (
      <div className="grid min-h-[40vh] place-items-center text-sm text-zinc-500">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Settings"
        title="Profile & Preferences"
        description="Manage your account details, preferences, and dashboard defaults."
      />

      <div className="flex gap-2">
        <button
          onClick={() => setTab("profile")}
          className={`rounded-full px-4 py-2 text-sm transition ${
            tab === "profile"
              ? "border border-amber-300/20 bg-amber-300/10 text-amber-200"
              : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
          }`}
        >
          Profile
        </button>

        <button
          onClick={() => setTab("preferences")}
          className={`rounded-full px-4 py-2 text-sm transition ${
            tab === "preferences"
              ? "border border-amber-300/20 bg-amber-300/10 text-amber-200"
              : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
          }`}
        >
          Preferences
        </button>
      </div>

      {tab === "profile" ? (
        <DashboardCard>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Profile
          </div>
          <div className="mt-2 text-xl font-semibold text-white">
            Account Details
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-300">Full Name</label>
              <input
                type="text"
                value={settings.fullName}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, fullName: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) =>
                  setSettings((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-amber-300/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-300">Password</label>
              <input
                type="password"
                value="password"
                readOnly
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
              />
            </div>

            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                login({
                  id: user?.id ?? "temp-user",
                  name: settings.fullName,
                  email: settings.email,
                  tier: user?.tier ?? "Elite Account",
                });
              }}
            >
              Save Changes
            </Button>
          </div>
        </DashboardCard>
      ) : (
        <DashboardCard>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Preferences
          </div>
          <div className="mt-2 text-xl font-semibold text-white">
            Dashboard Preferences
          </div>

          <div className="mt-6 space-y-4">
            {[
              {
                key: "renewalEmails",
                label: "Email me on subscription renewal",
              },
              {
                key: "riskWarnings",
                label: "Show risk warnings on dashboard",
              },
              {
                key: "reviewReminders",
                label: "Enable daily trade review reminders",
              },
              {
                key: "compactCards",
                label: "Use compact dashboard cards",
              },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <span className="text-sm text-zinc-300">{item.label}</span>
                <input
                  type="checkbox"
                  checked={settings[item.key as keyof typeof settings] as boolean}
                  onChange={(e) =>
                    setSettings((prev) => ({
                      ...prev,
                      [item.key]: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-amber-400"
                />
              </label>
            ))}
          </div>
        </DashboardCard>
      )}
    </div>
  );
}
