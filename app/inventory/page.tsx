"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { vehicles, categories } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result =
      activeCategory === "all"
        ? [...vehicles]
        : vehicles.filter((v) => v.category === activeCategory);

    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "hp")
      result.sort((a, b) => b.specs.horsepower - a.specs.horsepower);

    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="pt-32">
      <SectionWrapper className="!pt-0">
        <AnimatedHeading subtitle="Our Collection">
          Complete Inventory
        </AnimatedHeading>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-500 ${
                activeCategory === "all"
                  ? "bg-gold text-black"
                  : "bg-white/[0.03] text-gunmetal hover:bg-white/[0.06] hover:text-off-white"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.name)}
                className={`text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-500 ${
                  activeCategory === cat.name
                    ? "bg-gold text-black"
                    : "bg-white/[0.03] text-gunmetal hover:bg-white/[0.06] hover:text-off-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/[0.03] text-gunmetal text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 focus:outline-none appearance-none cursor-pointer hover:bg-white/[0.06] transition-all duration-500"
          >
            <option value="default" className="bg-charcoal">Sort By</option>
            <option value="price-asc" className="bg-charcoal">Price: Low to High</option>
            <option value="price-desc" className="bg-charcoal">Price: High to Low</option>
            <option value="hp" className="bg-charcoal">Horsepower</option>
          </select>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((vehicle, i) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gunmetal mt-16">
            No vehicles found in this category.
          </p>
        )}
      </SectionWrapper>
    </main>
  );
}
