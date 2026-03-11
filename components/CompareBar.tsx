"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCompare } from "@/context/CompareContext";
import { getVehicleBySlug } from "@/data/vehicles";

export default function CompareBar() {
  const { items, remove, clear } = useCompare();

  const vehicles = items
    .map((slug) => getVehicleBySlug(slug))
    .filter(Boolean);

  const compareUrl = `/compare?${items.map((slug) => `v=${slug}`).join("&")}`;

  return (
    <AnimatePresence>
      {items.length > 0 && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal border-t border-white/10"
        >
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between gap-6">
              {/* Vehicles */}
              <div className="flex items-center gap-4 flex-1 min-w-0 overflow-x-auto">
                {vehicles.map((vehicle) => {
                  if (!vehicle) return null;
                  return (
                    <div
                      key={vehicle.slug}
                      className="flex items-center gap-3 shrink-0"
                    >
                      <div className="relative w-14 h-10 overflow-hidden bg-black rounded-sm">
                        <Image
                          src={vehicle.images.hero}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-off-white truncate max-w-[120px]">
                          {vehicle.name}
                        </p>
                        <p className="text-[9px] text-gunmetal/60 uppercase tracking-wider">
                          {vehicle.brand}
                        </p>
                      </div>
                      <button
                        onClick={() => remove(vehicle.slug)}
                        className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-gunmetal/50 hover:text-off-white hover:bg-white/5 transition-all duration-300"
                        aria-label={`Remove ${vehicle.name} from comparison`}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  );
                })}

                {/* Empty slots */}
                {Array.from({ length: 3 - items.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="w-14 h-10 border border-dashed border-white/10 rounded-sm shrink-0 flex items-center justify-center"
                  >
                    <span className="text-[9px] text-gunmetal/40">+</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={clear}
                  className="text-[10px] tracking-[0.15em] uppercase text-gunmetal hover:text-off-white transition-colors duration-300"
                >
                  Clear
                </button>
                <Link
                  href={compareUrl}
                  className="inline-flex items-center justify-center text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 bg-gold text-black hover:bg-gold-light transition-all duration-500 font-medium"
                >
                  Compare Now
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
