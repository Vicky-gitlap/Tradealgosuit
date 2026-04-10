import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400/50",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" &&
          "bg-amber-400 text-black shadow-glow hover:bg-amber-300 hover:shadow-glow-lg hover:scale-105 active:scale-95",
        variant === "secondary" &&
          "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 hover:shadow-card",
        variant === "outline" &&
          "border border-amber-400/50 bg-transparent text-amber-400 hover:bg-amber-400/10 hover:border-amber-400 hover:shadow-glow",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
