import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export default function Card({ children, className, glow = false }: Props) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300",
        glow && "shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-300/30",
        className
      )}
    >
      {children}
    </div>
  );
}
