"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";

/* ------------------------------------------------------------------ */
/*  Room data                                                          */
/* ------------------------------------------------------------------ */

const rooms = [
  {
    vehicle: vehicles.find((v) => v.slug === "lamborghini-revuelto")!,
    roomName: "The Entrance Hall",
    atmosphere:
      "You step through the grand entrance into a cathedral of carbon fiber and light. The Revuelto commands the space with its angular presence, bathed in a warm golden spotlight that traces every sculptural line.",
  },
  {
    vehicle: vehicles.find((v) => v.slug === "rolls-royce-spectre")!,
    roomName: "The Grand Salon",
    atmosphere:
      "The gallery opens into a hushed salon of deep mahogany and soft ambient light. The Spectre rests in serene silence, its electric soul a whisper of the future wrapped in timeless luxury.",
  },
  {
    vehicle: vehicles.find((v) => v.slug === "ferrari-296-gtb")!,
    roomName: "The Racing Gallery",
    atmosphere:
      "Red ambient light pulses gently against polished concrete walls. The 296 GTB sits poised, every curve a testament to Maranello's relentless pursuit of speed and beauty.",
  },
  {
    vehicle: vehicles.find((v) => v.slug === "bentley-continental-gt")!,
    roomName: "The Touring Wing",
    atmosphere:
      "Rich leather and hand-finished wood line this intimate gallery. The Continental GT embodies the art of grand touring, promising extraordinary journeys with every detail meticulously crafted.",
  },
  {
    vehicle: vehicles.find((v) => v.slug === "bugatti-chiron-pur-sport")!,
    roomName: "The Vault",
    atmosphere:
      "Behind reinforced glass and climate-controlled air, the rarest of them all awaits. The Chiron Pur Sport is not merely displayed; it is enshrined. Only 60 were ever made.",
  },
];

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 1.05,
    x: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.95,
    x: direction > 0 ? -60 : 60,
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VirtualTourPage() {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);

  const navigate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => {
        const next = prev + newDirection;
        if (next < 0 || next >= rooms.length) return [prev, 0];
        return [next, newDirection];
      });
    },
    []
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        navigate(1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  const room = rooms[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">
      {/* Background image */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={room.vehicle.images.hero}
            alt={room.vehicle.name}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Room label — top left */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`room-${currentIndex}`}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-28 left-8 md:left-12 z-10"
        >
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase">
            {room.roomName}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Counter — top right */}
      <div className="absolute top-28 right-8 md:right-12 z-10">
        <p className="text-white/40 text-sm tracking-widest font-body">
          <span className="text-gold">{currentIndex + 1}</span>
          <span className="mx-2">/</span>
          <span>{rooms.length}</span>
        </p>
      </div>

      {/* Vehicle info — bottom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`info-${currentIndex}`}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute bottom-32 md:bottom-28 left-8 md:left-12 right-8 md:right-12 z-10"
        >
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-3">
              {room.vehicle.brand} &middot; {room.vehicle.category}
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-off-white mb-3 leading-none">
              {room.vehicle.name}
            </h1>
            <p className="font-heading text-lg md:text-xl text-white/60 italic mb-5">
              {room.vehicle.tagline}
            </p>
            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-xl mb-6">
              {room.atmosphere}
            </p>
            <Link
              href={`/inventory/${room.vehicle.slug}`}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              Explore This Vehicle
              <ChevronRight size={14} />
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute bottom-28 md:bottom-28 right-8 md:right-12 z-10 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
          aria-label="Previous room"
          className={`w-12 h-12 flex items-center justify-center border rounded-sm transition-all duration-300 ${
            currentIndex === 0
              ? "border-white/10 text-white/20 cursor-not-allowed"
              : "border-white/20 text-off-white hover:border-gold hover:text-gold"
          }`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => navigate(1)}
          disabled={currentIndex === rooms.length - 1}
          aria-label="Next room"
          className={`w-12 h-12 flex items-center justify-center border rounded-sm transition-all duration-300 ${
            currentIndex === rooms.length - 1
              ? "border-white/10 text-white/20 cursor-not-allowed"
              : "border-white/20 text-off-white hover:border-gold hover:text-gold"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress dots — bottom center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {rooms.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
            aria-label={`Go to room ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? "w-8 bg-gold"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
