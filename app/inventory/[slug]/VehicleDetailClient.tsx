"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Scale } from "lucide-react";
import { Vehicle, formatPrice } from "@/data/vehicles";
import VehicleGallery from "@/components/VehicleGallery";
import Button from "@/components/ui/Button";
import { useWishlist } from "@/context/WishlistContext";
import { useCompare } from "@/context/CompareContext";
import { cn } from "@/lib/utils";

export default function VehicleDetailClient({ vehicle }: { vehicle: Vehicle }) {
  const { toggle, isWished } = useWishlist();
  const { add, remove, isComparing } = useCompare();
  const wished = isWished(vehicle.slug);
  const comparing = isComparing(vehicle.slug);

  return (
    <main className="pt-24">
      {/* Hero Image */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={vehicle.images.hero}
          alt={vehicle.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-3"
          >
            {vehicle.brand} &middot; {vehicle.year} &middot; {vehicle.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white"
          >
            {vehicle.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-off-white/60 font-heading mt-4"
          >
            {formatPrice(vehicle.price)}
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="w-10 h-px bg-gold/40 mb-6" />
            <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-6">
              {vehicle.tagline}
            </p>
            <p className="text-off-white/70 leading-[1.9] text-lg mb-12">
              {vehicle.description}
            </p>

            {/* Gallery */}
            <VehicleGallery
              images={vehicle.images.gallery}
              name={vehicle.name}
            />
          </motion.div>

          {/* Right - Specs Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/[0.02] p-8 lg:p-10 sticky top-28">
              <h3 className="font-heading text-xl text-off-white mb-8">
                Specifications
              </h3>
              <div className="space-y-0">
                {[
                  { label: "Horsepower", value: `${vehicle.specs.horsepower} HP` },
                  { label: "0-60 mph", value: vehicle.specs.zeroToSixty },
                  { label: "Top Speed", value: vehicle.specs.topSpeed },
                  { label: "Engine", value: vehicle.specs.engine },
                  { label: "Transmission", value: vehicle.specs.transmission },
                  { label: "Drivetrain", value: vehicle.specs.drivetrain },
                ].map((spec, i) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-4"
                    style={i > 0 ? { boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" } : {}}
                  >
                    <span className="text-gunmetal/60 text-sm">{spec.label}</span>
                    <span className="text-off-white text-sm">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Colors */}
              <div className="mt-8">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-gunmetal/40 mb-4">
                  Available Colors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vehicle.colors.map((color) => (
                    <span
                      key={color}
                      className="text-xs text-off-white/50 bg-white/[0.03] px-3 py-1.5"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Wishlist & Compare */}
              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => toggle(vehicle.slug)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 border transition-all duration-300 text-[11px] tracking-[0.15em] uppercase",
                    wished
                      ? "border-gold/40 text-gold bg-gold/5"
                      : "border-white/10 text-gunmetal hover:text-off-white hover:border-white/20"
                  )}
                >
                  <Heart
                    className={cn(
                      "w-4 h-4",
                      wished ? "fill-gold text-gold" : ""
                    )}
                  />
                  {wished ? "In Wishlist" : "Add to Wishlist"}
                </button>
                <button
                  onClick={() => {
                    if (comparing) {
                      remove(vehicle.slug);
                    } else {
                      add(vehicle.slug);
                    }
                  }}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3 border transition-all duration-300 text-[11px] tracking-[0.15em] uppercase",
                    comparing
                      ? "border-gold/40 text-gold bg-gold/5"
                      : "border-white/10 text-gunmetal hover:text-off-white hover:border-white/20"
                  )}
                >
                  <Scale className="w-4 h-4" />
                  {comparing ? "Comparing" : "Compare"}
                </button>
              </div>

              {/* CTAs */}
              <div className="mt-4 space-y-2">
                <Button href="/contact" variant="primary" className="w-full">
                  Book Test Drive
                </Button>
                <Button href="/contact" variant="secondary" className="w-full">
                  Request Pricing
                </Button>
                <Button href="/contact" variant="ghost" className="w-full py-3">
                  Reserve Vehicle &rarr;
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
