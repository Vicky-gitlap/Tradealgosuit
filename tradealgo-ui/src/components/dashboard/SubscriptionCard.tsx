import DashboardCard from "./DashboardCard";
import Button from "../ui/Button";

export default function SubscriptionCard() {
  return (
    <DashboardCard>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Subscription
        </div>
        <div className="mt-1 text-xl font-semibold text-white">Plan & Renewal</div>
      </div>

      <div className="mt-6 rounded-3xl border border-amber-300/15 bg-amber-300/[0.06] p-5">
        <div className="text-sm text-zinc-400">Current Package</div>
        <div className="mt-2 text-2xl font-semibold text-white">Professional Suite</div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Status</div>
            <div className="mt-2 text-sm font-medium text-emerald-300">Active</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Renewal Date</div>
            <div className="mt-2 text-sm font-medium text-white">28 February 2027</div>
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full">Manage Subscription</Button>
        </div>
      </div>
    </DashboardCard>
  );
}
