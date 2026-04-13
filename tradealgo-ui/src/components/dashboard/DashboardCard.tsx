import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function DashboardCard({ children, className }: Props) {
  return (
    <div
      className={clsx(
        "rounded-[28px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.22)]",
        className
      )}
    >
      {children}
    </div>
  );
}
