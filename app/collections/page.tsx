"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categories, vehicles } from "@/data/vehicles";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import VehicleCard from "@/components/VehicleCard";

export default function CollectionsPage() {
  return (
    <main className="pt-32">
      <SectionWrapper className="!pt-0">
        <AnimatedHeading subtitle="Curated Categories">
          Our Collections
        </AnimatedHeading>

        <div className="space-y-32">
          {categories.map((cat, catIndex) => {
            const catVehicles = vehicles.filter(
              (v) => v.category === cat.name
            );
            return (
              <div key={cat.slug}>
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative overflow-hidden aspect-[21/9] mb-12"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
                      Collection {String(catIndex + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-off-white">
                      {cat.name}
                    </h2>
                    <p className="text-gunmetal mt-3 max-w-lg text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </motion.div>

                {/* Category Vehicles */}
                {catVehicles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {catVehicles.map((vehicle, i) => (
                      <VehicleCard
                        key={vehicle.slug}
                        vehicle={vehicle}
                        index={i}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gunmetal text-center py-8">
                    New arrivals coming soon.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </main>
  );
}
