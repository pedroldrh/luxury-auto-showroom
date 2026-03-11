"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedHeading from "./ui/AnimatedHeading";
import { categories } from "@/data/vehicles";

export default function CollectionsGrid() {
  return (
    <SectionWrapper className="bg-charcoal">
      <AnimatedHeading subtitle="Browse by Category">
        Our Collections
      </AnimatedHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
          >
            <Link
              href={`/collections?category=${cat.slug}`}
              className="group block relative overflow-hidden aspect-[16/9]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Collection
                </p>
                <h3 className="font-heading text-2xl lg:text-3xl text-off-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {cat.name}
                </h3>
                <p className="text-gunmetal text-sm max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
