"use client";

import { motion } from "framer-motion";
import {
  Search,
  Crown,
  Globe,
  Wrench,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Button from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  Icon map                                                           */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, LucideIcon> = {
  Search,
  Crown,
  Globe,
  Wrench,
  TrendingUp,
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ConciergePage() {
  return (
    <main className="pt-32">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,167,105,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            Private Client Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl text-off-white leading-tight max-w-4xl mx-auto"
          >
            Your Personal Automotive Concierge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gunmetal max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            A dedicated suite of services designed for the most discerning collectors and enthusiasts.
            Whatever your automotive ambition, we make it reality.
          </motion.p>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────────── */}
      <SectionWrapper>
        <AnimatedHeading subtitle="What We Offer">
          Tailored Services
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.iconName] ?? Search;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/[0.06] p-10 flex flex-col group hover:border-gold/20 transition-all duration-700"
              >
                <Icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />

                <h3 className="font-heading text-2xl text-off-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gunmetal text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-off-white/70"
                    >
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href="/contact" variant="secondary" className="w-full mt-auto">
                  Inquire
                </Button>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <SectionWrapper className="bg-charcoal/40">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Let&apos;s Talk
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-off-white mb-6">
              Ready to Begin?
            </h2>
            <p className="text-gunmetal leading-relaxed mb-10">
              Our concierge team is standing by to discuss your requirements. From sourcing a specific vehicle to
              planning an entire collection strategy, every conversation begins with understanding your vision.
            </p>
            <Button href="/contact" variant="primary">
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}
