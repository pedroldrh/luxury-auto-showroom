"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function AnimatedHeading({
  children,
  className,
  subtitle,
  align = "center",
}: AnimatedHeadingProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center")}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={cn(
          "font-heading text-4xl md:text-5xl lg:text-6xl text-off-white leading-tight",
          className
        )}
      >
        {children}
      </motion.h2>
    </div>
  );
}
