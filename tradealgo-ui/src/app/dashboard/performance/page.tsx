import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import OverviewCards from "@/components/dashboard/OverviewCards";
import PerformanceChartCard from "@/components/dashboard/PerformanceChartCard";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Performance"
        title="Account Performance"
        description="Review balance growth, trading consistency, and recent performance metrics in one place."
      />

      <OverviewCards />

      <PerformanceChartCard />

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          ["Best Trading Day", "+$1,240"],
          ["Average R:R", "1:2.1"],
          ["Consistency Score", "84/100"],
        ].map(([label, value]) => (
          <DashboardCard key={label}>
            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              {label}
            </div>
            <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}
