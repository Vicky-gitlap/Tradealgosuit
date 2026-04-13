type Props = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: Props) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
      <div className="text-lg font-semibold text-white">{title}</div>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}
