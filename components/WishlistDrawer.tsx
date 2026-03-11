"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { getVehicleBySlug, formatPrice } from "@/data/vehicles";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const { items, toggle } = useWishlist();

  const vehicles = items
    .map((slug) => getVehicleBySlug(slug))
    .filter(Boolean);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-charcoal border-l border-white/10 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h2 className="font-heading text-xl text-off-white">Wishlist</h2>
                <p className="text-xs text-gunmetal mt-1">
                  {items.length} {items.length === 1 ? "vehicle" : "vehicles"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-gunmetal hover:text-off-white hover:border-gold/40 transition-colors duration-300"
                aria-label="Close wishlist"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {vehicles.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gunmetal text-sm mb-2">Your wishlist is empty</p>
                  <p className="text-gunmetal/60 text-xs">
                    Browse our inventory and save vehicles you love
                  </p>
                  <Link
                    href="/inventory"
                    onClick={onClose}
                    className="inline-block mt-6 text-[11px] tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-300"
                  >
                    Explore Inventory
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {vehicles.map((vehicle) => {
                    if (!vehicle) return null;
                    return (
                      <div
                        key={vehicle.slug}
                        className="flex gap-4 p-3 border border-white/5 hover:border-white/10 transition-colors duration-300 group/item"
                      >
                        {/* Thumbnail */}
                        <Link
                          href={`/inventory/${vehicle.slug}`}
                          onClick={onClose}
                          className="relative w-24 h-18 shrink-0 overflow-hidden bg-black"
                        >
                          <Image
                            src={vehicle.images.hero}
                            alt={vehicle.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </Link>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] tracking-[0.2em] uppercase text-gold/60 mb-0.5">
                            {vehicle.brand}
                          </p>
                          <Link
                            href={`/inventory/${vehicle.slug}`}
                            onClick={onClose}
                            className="block font-heading text-sm text-off-white hover:text-gold transition-colors duration-300 truncate"
                          >
                            {vehicle.name}
                          </Link>
                          <p className="text-xs text-gunmetal/70 mt-1">
                            {formatPrice(vehicle.price)}
                          </p>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => toggle(vehicle.slug)}
                          className="shrink-0 self-center flex items-center justify-center w-7 h-7 rounded-full text-gunmetal/50 hover:text-off-white hover:bg-white/5 transition-all duration-300"
                          aria-label={`Remove ${vehicle.name} from wishlist`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
