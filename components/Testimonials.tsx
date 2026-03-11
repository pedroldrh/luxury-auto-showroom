"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedHeading from "./ui/AnimatedHeading";

const testimonials = [
  {
    quote:
      "Prestige Motors didn't just sell me a car — they curated an experience. From the private viewing to doorstep delivery, every detail was impeccable.",
    name: "Jonathan R.",
    location: "Greenwich, CT",
  },
  {
    quote:
      "Their team sourced a limited-edition Spectre that I'd been searching for over two years. The level of access and discretion was extraordinary.",
    name: "Victoria S.",
    location: "Palm Beach, FL",
  },
  {
    quote:
      "I've purchased from dealerships across the world. None compare to the personalized service and curatorial expertise at Prestige Motors.",
    name: "Alexander M.",
    location: "Beverly Hills, CA",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-dark relative noise-overlay">
      <div className="relative z-10">
        <AnimatedHeading subtitle="Client Stories">
          Trusted by Collectors Worldwide
        </AnimatedHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="w-8 h-px bg-gold/40 mb-8" />
              <blockquote className="text-off-white/80 text-[15px] leading-[1.8] mb-8 font-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-off-white text-sm">{t.name}</p>
                <p className="text-gunmetal/50 text-xs mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
