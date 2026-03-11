"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "outline" | "solid" | "ghost" | "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  outline:
    "border border-gold/60 text-gold hover:bg-gold hover:text-black",
  solid:
    "bg-gold text-black hover:bg-gold-light",
  ghost:
    "text-gold hover:text-gold-light",
  primary:
    "bg-gold text-black hover:bg-gold-light",
  secondary:
    "border border-white/10 text-off-white hover:border-gold/30 hover:text-gold",
};

export default function Button({
  children,
  variant = "outline",
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center text-[11px] tracking-[0.15em] uppercase px-8 py-3 transition-all duration-300 font-medium";

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
