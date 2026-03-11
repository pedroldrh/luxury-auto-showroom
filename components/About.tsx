"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";

const pillars = [
  {
    title: "Craftsmanship",
    description:
      "Every vehicle in our collection represents the pinnacle of automotive artistry — hand-finished details, bespoke materials, and engineering excellence.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
  {
    title: "Performance",
    description:
      "We curate automobiles that deliver extraordinary driving experiences — from electrifying acceleration to effortless grand touring composure.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
  },
  {
    title: "Legacy",
    description:
      "For over three decades, Prestige Motors has connected discerning collectors with the world's most extraordinary automobiles.",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80",
  },
  {
    title: "Trust",
    description:
      "Our reputation is built on discretion, integrity, and an unwavering commitment to exceeding expectations at every touchpoint.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&q=80",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-10 h-px bg-gold/40 mb-8" />
          <p className="text-gold/60 text-[10px] tracking-[0.4em] uppercase mb-6">
            Our Story
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-off-white leading-tight mb-8">
            Where Passion Meets
            <br />
            <span className="italic text-gold">Precision</span>
          </h2>
          <p className="text-gunmetal leading-[1.9] mb-4">
            Founded in 1987, Prestige Motors was born from a singular vision: to
            create a sanctuary for the world&apos;s finest automobiles and the
            collectors who appreciate them.
          </p>
          <p className="text-gunmetal leading-[1.9]">
            Today, we stand as a beacon of automotive excellence — bridging the
            gap between legendary marques and discerning enthusiasts through
            unparalleled expertise, discretion, and a deep reverence for the art
            of the automobile.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80"
            alt="Luxury showroom interior"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative overflow-hidden aspect-[3/4]"
          >
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-xl text-off-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-off-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
