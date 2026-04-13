import DashboardCard from "./DashboardCard";

const items = [
  "Review the market context before every trade.",
  "Define risk and daily drawdown before execution.",
  "Use the workflow panel to stay process-driven.",
  "Track performance and review your trade history daily.",
];

export default function GuideCard() {
  return (
    <DashboardCard>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          User Guide
        </div>
        <div className="mt-1 text-xl font-semibold text-white">How to Use the Dashboard</div>
      </div>

      <div className="mt-6 space-y-3">
        {items.map((item, index) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-300/10 text-xs font-semibold text-amber-200">
              {index + 1}
            </div>
            <p className="text-sm leading-7 text-zinc-300">{item}</p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
