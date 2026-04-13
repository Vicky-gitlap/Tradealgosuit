import { Wallet, BarChart3, Target, ShieldCheck } from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    label: "Account Balance",
    value: "$52,430",
    subtext: "+4.8%",
    icon: Wallet,
  },
  {
    label: "Daily P/L",
    value: "+$480",
    subtext: "+0.92%",
    icon: BarChart3,
  },
  {
    label: "Win Rate",
    value: "68%",
    subtext: "Last 30 days",
    icon: Target,
  },
  {
    label: "Risk Status",
    value: "Healthy",
    subtext: "Within limit",
    icon: ShieldCheck,
  },
];

export default function OverviewCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          subtext={stat.subtext}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
