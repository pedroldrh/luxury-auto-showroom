"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getVehicleBySlug, formatPrice, Vehicle } from "@/data/vehicles";
import Button from "@/components/ui/Button";
import WishlistButton from "@/components/WishlistButton";

function parseZeroToSixty(value: string): number {
  return parseFloat(value.replace("s", ""));
}

function parseTopSpeed(value: string): number {
  return parseFloat(value.replace(" mph", ""));
}

function CompareContent() {
  const searchParams = useSearchParams();
  const slugs = searchParams.getAll("v");

  const vehicles = slugs
    .map((slug) => getVehicleBySlug(slug))
    .filter((v): v is Vehicle => v !== undefined)
    .slice(0, 3);

  if (vehicles.length === 0) {
    return (
      <main className="pt-24 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-3xl md:text-4xl text-off-white mb-4">
              No Vehicles Selected
            </h1>
            <p className="text-gunmetal mb-8 max-w-md mx-auto">
              Select up to three vehicles from our inventory to compare specifications side by side.
            </p>
            <Button href="/inventory" variant="primary">
              Browse Inventory
            </Button>
          </motion.div>
        </div>
      </main>
    );
  }

  // Determine best values for highlighting
  const maxHP = Math.max(...vehicles.map((v) => v.specs.horsepower));
  const minZeroToSixty = Math.min(...vehicles.map((v) => parseZeroToSixty(v.specs.zeroToSixty)));
  const maxTopSpeed = Math.max(...vehicles.map((v) => parseTopSpeed(v.specs.topSpeed)));

  const specRows: {
    label: string;
    getValue: (v: Vehicle) => string;
    isBest: (v: Vehicle) => boolean;
  }[] = [
    {
      label: "Horsepower",
      getValue: (v) => `${v.specs.horsepower} HP`,
      isBest: (v) => v.specs.horsepower === maxHP,
    },
    {
      label: "0-60 mph",
      getValue: (v) => v.specs.zeroToSixty,
      isBest: (v) => parseZeroToSixty(v.specs.zeroToSixty) === minZeroToSixty,
    },
    {
      label: "Top Speed",
      getValue: (v) => v.specs.topSpeed,
      isBest: (v) => parseTopSpeed(v.specs.topSpeed) === maxTopSpeed,
    },
    {
      label: "Engine",
      getValue: (v) => v.specs.engine,
      isBest: () => false,
    },
    {
      label: "Transmission",
      getValue: (v) => v.specs.transmission,
      isBest: () => false,
    },
    {
      label: "Drivetrain",
      getValue: (v) => v.specs.drivetrain,
      isBest: () => false,
    },
  ];

  const colClass =
    vehicles.length === 1
      ? "grid-cols-1 max-w-md mx-auto"
      : vehicles.length === 2
        ? "grid-cols-2 max-w-3xl mx-auto"
        : "grid-cols-3";

  return (
    <main className="pt-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Side by Side
          </p>
          <h1 className="font-heading text-3xl md:text-5xl text-off-white">
            Compare Vehicles
          </h1>
        </motion.div>

        {/* Vehicle Headers */}
        <div className={`grid ${colClass} gap-6 mb-12`}>
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal mb-4">
                <Image
                  src={vehicle.images.hero}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                  <WishlistButton slug={vehicle.slug} />
                </div>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold/60 mb-1">
                {vehicle.brand} &middot; {vehicle.year}
              </p>
              <h2 className="font-heading text-xl text-off-white mb-1">
                {vehicle.name}
              </h2>
              <p className="text-lg text-off-white/80 font-heading">
                {formatPrice(vehicle.price)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-white/10"
        >
          {specRows.map((spec, rowIndex) => (
            <div
              key={spec.label}
              className={`grid ${colClass} ${rowIndex !== specRows.length - 1 ? "border-b border-white/5" : ""}`}
            >
              {vehicles.map((vehicle) => (
                <div
                  key={vehicle.slug}
                  className="p-5 text-center border-r border-white/5 last:border-r-0"
                >
                  <p className="text-[10px] tracking-[0.15em] uppercase text-gunmetal mb-1">
                    {spec.label}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      spec.isBest(vehicle) && vehicles.length > 1
                        ? "text-gold"
                        : "text-off-white"
                    }`}
                  >
                    {spec.getValue(vehicle)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`grid ${colClass} gap-6 mt-12`}
        >
          {vehicles.map((vehicle) => (
            <div key={vehicle.slug} className="text-center">
              <p className="text-[10px] tracking-[0.15em] uppercase text-gunmetal mb-3">
                Available Colors
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {vehicle.colors.map((color) => (
                  <span
                    key={color}
                    className="text-[10px] text-off-white/70 border border-white/10 px-3 py-1"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`grid ${colClass} gap-6 mt-12`}
        >
          {vehicles.map((vehicle) => (
            <div key={vehicle.slug} className="space-y-3">
              <Button
                href={`/inventory/${vehicle.slug}`}
                variant="primary"
                className="w-full"
              >
                View Details
              </Button>
              <Button href="/contact" variant="secondary" className="w-full">
                Book Test Drive
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <main className="pt-24 min-h-screen">
          <div className="max-w-[1400px] mx-auto px-6 py-20 text-center">
            <p className="text-gunmetal">Loading comparison...</p>
          </div>
        </main>
      }
    >
      <CompareContent />
    </Suspense>
  );
}
