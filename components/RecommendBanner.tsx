"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function RecommendBanner() {
  return (
    <section className="relative py-[120px] lg:py-[160px] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/20 to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 border border-gold/30 rounded-full mb-8"
          >
            <Sparkles className="text-gold" size={24} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            Intelligent Curation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white leading-tight mb-6"
          >
            Find Your Perfect Match
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gunmetal leading-relaxed mb-10"
          >
            Not sure which vehicle speaks to you? Our intelligent recommendation
            engine analyzes your preferences, budget, and driving philosophy to
            curate a bespoke selection from our collection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Button href="/recommend">Discover Your Match</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative border lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-gold/20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-gold/20" />
    </section>
  );
}
