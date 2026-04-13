import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import TradeHistoryCard from "@/components/dashboard/TradeHistoryCard";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function TradeHistoryPage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Trade History"
        title="Trade Log & Results"
        description="Review recent trade outcomes, filter wins and losses, and keep your execution history organised."
      />

      <TradeHistoryCard />

      <DashboardCard>
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Review Habit
        </div>
        <div className="mt-2 text-xl font-semibold text-white">
          Why trade review matters
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">
          Reviewing your trade history helps you identify recurring mistakes,
          strengthen what works, and maintain a more disciplined process over time.
        </p>
      </DashboardCard>
    </div>
  );
}
