
type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function DashboardPageHeader({
  eyebrow = "Dashboard Section",
  title,
  description,
}: Props) {
  return (
    <div className="mb-6">
      <div className="text-xs uppercase tracking-[0.22em] text-zinc-500">
        {eyebrow}
      </div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
        {title}
      </h1>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
