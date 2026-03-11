"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "./ui/Button";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const posterUrl =
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80";

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background with parallax + slow zoom */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Video background — hidden when reduced motion preferred */}
        {!prefersReducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterUrl}
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/*
              Replace the source below with your actual showroom video file.
              Recommended: MP4 (H.264), 1920x1080, under 15MB for fast loading.
              Example: <source src="/videos/hero-showroom.mp4" type="video/mp4" />
            */}
            <source src="/videos/hero-showroom.mp4" type="video/mp4" />
          </video>
        )}

        {/* Poster fallback image — always present behind video, shown when video unavailable or reduced motion */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${posterUrl}')` }}
        />

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-px bg-gold mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gold/80 text-[10px] tracking-[0.5em] uppercase mb-6"
        >
          Est. 1987 &mdash; The Pinnacle of Automotive Luxury
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] text-off-white leading-[1.05] max-w-5xl"
        >
          Automotive Excellence
          <br />
          <span className="italic text-gold">Redefined</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-gunmetal text-lg max-w-xl leading-relaxed"
        >
          Curating the world&apos;s most extraordinary automobiles for
          discerning collectors and connoisseurs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button href="/inventory" variant="primary">
            Explore Inventory
          </Button>
          <Button href="/contact" variant="secondary">
            Schedule Private Viewing
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-3"
        >
          <span className="text-gunmetal/40 text-[9px] tracking-[0.4em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
