import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import RiskControlCard from "@/components/dashboard/RiskControlCard";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function RiskControlPage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Risk Control"
        title="Drawdown & Rule Monitoring"
        description="Stay within challenge limits and maintain disciplined execution with prop-firm-style control metrics."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <RiskControlCard />

        <DashboardCard>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Risk Notes
          </div>
          <div className="mt-2 text-xl font-semibold text-white">
            Daily Discipline Checklist
          </div>

          <div className="mt-6 space-y-4">
            {[
              "Confirm daily drawdown buffer before entering new trades.",
              "Avoid scaling risk after a losing trade.",
              "Do not exceed your pre-defined exposure per setup.",
              "Review your risk status after every session.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm leading-7 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}
