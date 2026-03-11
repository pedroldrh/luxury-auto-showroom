"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./ui/Button";

export default function Showroom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="showroom" ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
        >
          Visit Our Showroom
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white max-w-3xl leading-tight"
        >
          Experience Automotive
          <br />
          <span className="italic">Art in Person</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-gunmetal max-w-lg"
        >
          Step into our private showroom where every vehicle is presented as a
          masterpiece — in an atmosphere crafted for the discerning eye.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <Button href="/contact" variant="secondary">
            Book a Private Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
