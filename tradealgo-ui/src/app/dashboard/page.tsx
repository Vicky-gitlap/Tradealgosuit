import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import OverviewCards from "@/components/dashboard/OverviewCards";
import PerformanceChartCard from "@/components/dashboard/PerformanceChartCard";
import RiskControlCard from "@/components/dashboard/RiskControlCard";
import WorkflowCard from "@/components/dashboard/WorkflowCard";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import GuideCard from "@/components/dashboard/GuideCard";
import TradeHistoryCard from "@/components/dashboard/TradeHistoryCard";
import NotificationsCard from "@/components/dashboard/NotificationsCard";
import QuickActionsCard from "@/components/dashboard/QuickActionsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Trading Dashboard"
        title="Performance Overview"
        description="Track account performance, monitor risk limits, and stay aligned with your structured trading workflow."
      />

      <OverviewCards />

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <PerformanceChartCard />
        <RiskControlCard />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <NotificationsCard />
        <QuickActionsCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <WorkflowCard />
        <SubscriptionCard />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <TradeHistoryCard />
        <GuideCard />
      </div>
    </div>
  );
}
