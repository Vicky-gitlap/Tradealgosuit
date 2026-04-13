type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
};

export default function DashboardTable<T extends { id: number }>({
  columns,
  rows,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <div
        className="grid bg-white/[0.03] px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-500"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
      >
        {columns.map((column) => (
          <div key={String(column.key)}>{column.label}</div>
        ))}
      </div>

      <div className="divide-y divide-white/10">
        {rows.map((row) => (
          <div
            key={row.id}
            className="grid px-4 py-4 text-sm"
            style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
          >
            {columns.map((column) => (
              <div key={String(column.key)}>
                {column.render ? column.render(row) : String(row[column.key])}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
