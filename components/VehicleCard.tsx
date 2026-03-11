"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Scale } from "lucide-react";
import { Vehicle, formatPrice } from "@/data/vehicles";
import { useCompare } from "@/context/CompareContext";
import WishlistButton from "@/components/WishlistButton";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  const { add, remove, isComparing } = useCompare();
  const comparing = isComparing(vehicle.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Link href={`/inventory/${vehicle.slug}`} className="group block">
        <div className="relative overflow-hidden bg-charcoal aspect-[4/3]">
          <Image
            src={vehicle.images.hero}
            alt={vehicle.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Wishlist & Compare buttons - visible on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <WishlistButton slug={vehicle.slug} />
          </div>
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (comparing) {
                  remove(vehicle.slug);
                } else {
                  add(vehicle.slug);
                }
              }}
              className={cn(
                "flex items-center justify-center w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border transition-colors duration-300",
                comparing
                  ? "border-gold/60 text-gold"
                  : "border-white/10 text-gunmetal hover:border-gold/40"
              )}
              aria-label={comparing ? "Remove from comparison" : "Add to comparison"}
            >
              <Scale className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Specs reveal on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-4 text-[11px] text-off-white/70 tracking-wide">
              <span>{vehicle.specs.horsepower} HP</span>
              <span className="text-gold/30">/</span>
              <span>{vehicle.specs.zeroToSixty}</span>
              <span className="text-gold/30">/</span>
              <span>{vehicle.specs.topSpeed}</span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-1.5">
              {vehicle.brand} &middot; {vehicle.year}
            </p>
            <h3 className="font-heading text-xl text-off-white group-hover:text-gold transition-colors duration-500">
              {vehicle.name}
            </h3>
          </div>
          <p className="text-sm text-gunmetal/70 mt-1 whitespace-nowrap">
            {formatPrice(vehicle.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
