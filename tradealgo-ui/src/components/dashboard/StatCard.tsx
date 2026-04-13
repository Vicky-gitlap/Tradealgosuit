import { LucideIcon } from "lucide-react";
import DashboardCard from "./DashboardCard";

type Props = {
  label: string;
  value: string;
  subtext?: string;
  icon: LucideIcon;
};

export default function StatCard({ label, value, subtext, icon: Icon }: Props) {
  return (
    <DashboardCard className="group transition duration-300 hover:-translate-y-1 hover:border-amber-300/20 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {label}
          </div>
          <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
          {subtext && <div className="mt-3 text-sm text-amber-300">{subtext}</div>}
        </div>

        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30 text-amber-300">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </DashboardCard>
  );
}
