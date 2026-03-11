"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-black hover:bg-gold-light shadow-[0_0_30px_rgba(198,167,105,0.15)] hover:shadow-[0_0_40px_rgba(198,167,105,0.25)]",
  secondary:
    "bg-white/[0.04] text-off-white hover:bg-white/[0.08] hover:text-gold",
  ghost:
    "text-gold hover:text-gold-light",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-500 font-medium";

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </button>
  );
}
