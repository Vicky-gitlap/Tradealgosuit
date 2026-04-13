import DashboardCard from "./DashboardCard";

const steps = [
  { label: "Analyse", status: "Complete" },
  { label: "Plan", status: "Complete" },
  { label: "Execute", status: "Active" },
  { label: "Manage", status: "Queued" },
];

export default function WorkflowCard() {
  return (
    <DashboardCard>
      <div>
        <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
          Trade Workflow
        </div>
        <div className="mt-1 text-xl font-semibold text-white">Current Trade Process</div>
      </div>

      <div className="mt-6 space-y-3">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`flex items-center justify-between rounded-2xl border px-4 py-4 ${
              step.status === "Active"
                ? "border-amber-300/25 bg-amber-300/10"
                : "border-white/10 bg-black/20"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/30 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{step.label}</div>
                <div className="text-xs text-zinc-500">{step.status}</div>
              </div>
            </div>

            <div
              className={`rounded-full px-3 py-1 text-xs ${
                step.status === "Complete"
                  ? "bg-emerald-400/10 text-emerald-300"
                  : step.status === "Active"
                  ? "bg-amber-300/10 text-amber-200"
                  : "bg-white/5 text-zinc-400"
              }`}
            >
              {step.status}
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
