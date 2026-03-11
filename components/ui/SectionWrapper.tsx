"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  className,
  id,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-[120px] lg:py-[160px]", className)}>
      <div className={cn(fullWidth ? "" : "max-w-[1400px] mx-auto px-6")}>
        {children}
      </div>
    </section>
  );
}
