"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Gem,
  Cog,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Button from "@/components/ui/Button";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: Gem,
    title: "Craftsmanship",
    description:
      "We celebrate the artistry behind every hand-stitched interior, every precision-machined component, and every sculpted body line that defines a masterpiece.",
  },
  {
    icon: Cog,
    title: "Engineering",
    description:
      "Performance is poetry. We honor the relentless pursuit of mechanical perfection that transforms raw materials into automotive legends.",
  },
  {
    icon: Landmark,
    title: "Legacy",
    description:
      "Every vehicle tells a story. We preserve and champion the heritage of marques that have shaped the history of the automobile.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Discretion, transparency, and integrity form the foundation of every relationship we build with our distinguished clientele.",
  },
];

const milestones = [
  { year: "1987", event: "Founded in Monaco with a curated selection of twelve exceptional automobiles." },
  { year: "1995", event: "Expanded internationally with partner showrooms in London, Dubai, and Tokyo." },
  { year: "2003", event: "Celebrated the acquisition and delivery of our 1,000th collector vehicle." },
  { year: "2015", event: "Opened our flagship 40,000 sq ft showroom and private client lounge." },
  { year: "2024", event: "Launched our digital platform, bringing the showroom experience online." },
];

const leaders = [
  {
    name: "Alexander Dumont",
    title: "Founder & Chairman",
    bio: "A lifelong collector with over four decades of experience in the luxury automotive market. Alexander's vision transformed a private passion into an internationally recognized institution.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face",
  },
  {
    name: "Victoria Chen",
    title: "Chief Executive Officer",
    bio: "Previously at Christie's and Sotheby's, Victoria brings world-class auction expertise and a deep understanding of high-value asset markets to every client engagement.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=face",
  },
  {
    name: "James Harrington",
    title: "Head of Acquisitions",
    bio: "With a network spanning six continents, James has sourced some of the rarest vehicles ever to change hands — including three one-of-one prototypes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=750&fit=crop&crop=face",
  },
  {
    name: "Sophia Laurent",
    title: "Director of Client Experience",
    bio: "Sophia architects the bespoke journey each client receives — from first consultation to white-glove delivery, ensuring every detail exceeds expectations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&crop=face",
  },
];

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.8 },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80"
          alt="Classic luxury automobile on an open road at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
          >
            Our Heritage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl text-off-white leading-tight max-w-4xl"
          >
            A Legacy of Automotive Excellence
          </motion.h1>
        </div>
      </section>

      {/* ── Brand Philosophy ─────────────────────────────────────── */}
      <SectionWrapper>
        <AnimatedHeading subtitle="Our Philosophy" align="left">
          Where Passion Meets Precision
        </AnimatedHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="space-y-6">
            <p className="text-gunmetal leading-relaxed text-base">
              Founded in 1987 by Alexander Dumont, Prestige Motors was born from a singular conviction: that the
              finest automobiles in the world deserve a custodian, not merely a dealer. What began as a private
              collection in a Monaco garage has grown into an internationally recognized institution trusted by
              collectors, enthusiasts, and connoisseurs across six continents.
            </p>
            <p className="text-gunmetal leading-relaxed text-base">
              Our philosophy is simple — connect extraordinary vehicles with the individuals who will cherish them
              most. Every automobile that passes through our showroom is meticulously inspected, authenticated, and
              presented with the reverence it deserves. We do not simply sell cars; we facilitate the continuation of
              automotive legacies.
            </p>
            <p className="text-gunmetal leading-relaxed text-base">
              From limited-production hypercars to concours-winning classics, our inventory represents the pinnacle
              of automotive achievement. Each acquisition is guided by deep market knowledge, unwavering standards,
              and a passion for mechanical artistry that defines everything we do.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
              alt="Elegant interior of a luxury automobile showroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ── Values ───────────────────────────────────────────────── */}
      <SectionWrapper className="bg-charcoal/40">
        <AnimatedHeading subtitle="What Defines Us">
          Our Core Values
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.06] p-10 group hover:border-gold/20 transition-all duration-700"
            >
              <value.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-heading text-2xl text-off-white mb-4">
                {value.title}
              </h3>
              <p className="text-gunmetal leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Timeline ─────────────────────────────────────────────── */}
      <SectionWrapper>
        <AnimatedHeading subtitle="Milestones">
          Our Journey
        </AnimatedHeading>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.08] -translate-x-1/2" />

          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(198,167,105,0.4)]"
                />
              </div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                <span className="font-heading text-gold text-3xl">
                  {milestone.year}
                </span>
                <p className="text-gunmetal mt-2 leading-relaxed text-sm">
                  {milestone.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Leadership ───────────────────────────────────────────── */}
      <SectionWrapper className="bg-charcoal/40">
        <AnimatedHeading subtitle="Leadership">
          The Visionaries Behind Prestige
        </AnimatedHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <h3 className="font-heading text-xl text-off-white mb-1">
                {leader.name}
              </h3>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
                {leader.title}
              </p>
              <p className="text-gunmetal text-sm leading-relaxed">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-off-white mb-6">
              Experience Prestige
            </h2>
            <p className="text-gunmetal leading-relaxed mb-10">
              Whether you are seeking a specific marque, building a collection, or simply wish to explore what
              automotive excellence looks like — we invite you to connect with our team.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}
