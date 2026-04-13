import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import GuideCard from "@/components/dashboard/GuideCard";
import DashboardCard from "@/components/dashboard/DashboardCard";
import EmptyState from "@/components/dashboard/EmptyState";

export default function GuidePage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="User Guide"
        title="Getting Started"
        description="Use this guide to understand the dashboard, monitor risk, and follow a more structured trading workflow."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <GuideCard />

        <DashboardCard>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Quick Start
          </div>
          <div className="mt-2 text-xl font-semibold text-white">
            First steps for new users
          </div>

          <div className="mt-6 space-y-4">
            {[
              "Check your subscription status and package features.",
              "Review your drawdown limits before using live workflows.",
              "Monitor your dashboard daily to track performance and risk.",
              "Use trade history review to reinforce consistent execution.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-300/10 text-xs font-semibold text-amber-200">
                  {index + 1}
                </div>
                <div className="text-sm leading-7 text-zinc-300">{item}</div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <EmptyState
        title="More onboarding modules coming soon"
        description="Video walkthroughs, account tutorials, and setup guides can be added here when your user education system is ready."
      />
    </div>
  );
}
