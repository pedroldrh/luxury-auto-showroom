"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  slug: string;
  className?: string;
}

export default function WishlistButton({ slug, className }: WishlistButtonProps) {
  const { toggle, isWished } = useWishlist();
  const active = isWished(slug);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={cn(
        "flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 transition-colors duration-300 hover:border-gold/40",
        className
      )}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        className={cn(
          "w-4 h-4 transition-colors duration-300",
          active ? "fill-gold text-gold" : "text-gunmetal"
        )}
      />
    </motion.button>
  );
}
