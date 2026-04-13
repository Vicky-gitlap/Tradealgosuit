import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard";
import DashboardCard from "@/components/dashboard/DashboardCard";
import EmptyState from "@/components/dashboard/EmptyState";
import Button from "@/components/ui/Button";

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <DashboardPageHeader
        eyebrow="Subscription"
        title="Plan & Billing"
        description="Track your active package, renewal timing, and upgrade path."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <SubscriptionCard />

        <DashboardCard>
          <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Available Plans
          </div>
          <div className="mt-2 text-xl font-semibold text-white">
            Upgrade Options
          </div>

          <div className="mt-6 space-y-4">
            {[
              ["Scanner Pro", "Essential market visibility and structured alerts."],
              ["Trading Suite", "Balanced workflow support for active traders."],
              ["Professional Suite", "Full ecosystem for deeper execution control."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-2 text-sm leading-7 text-zinc-300">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button className="w-full">Compare Plans</Button>
          </div>
        </DashboardCard>
      </div>

      <EmptyState
        title="No billing history yet"
        description="When billing events are connected to your real subscription system, your invoices and payment history will appear here."
      />
    </div>
  );
}
