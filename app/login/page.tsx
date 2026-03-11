"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Calendar, Wrench, Car, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { vehicles, formatPrice } from "@/data/vehicles";

/* ------------------------------------------------------------------ */
/*  Mock data                                                          */
/* ------------------------------------------------------------------ */

const clientVehicles = vehicles.slice(0, 3);

const serviceHistory = [
  {
    date: "Feb 14, 2026",
    service: "Annual Comprehensive Service",
    vehicle: "Lamborghini Revuelto",
    status: "Completed",
  },
  {
    date: "Jan 8, 2026",
    service: "Ceramic Coating Refresh",
    vehicle: "Rolls-Royce Spectre",
    status: "Completed",
  },
  {
    date: "Mar 22, 2026",
    service: "Brake System Inspection",
    vehicle: "Ferrari 296 GTB",
    status: "Scheduled",
  },
];

const upcomingEvents = [
  {
    title: "Private Viewing: 2026 Collection",
    date: "April 5, 2026",
    description:
      "An exclusive first look at our incoming 2026 models. Champagne reception and private viewings by appointment.",
  },
  {
    title: "Prestige Track Day",
    date: "April 19, 2026",
    description:
      "Experience the full potential of your vehicle at our private circuit event. Professional instruction available.",
  },
  {
    title: "New Model Launch: Pagani Utopia",
    date: "May 10, 2026",
    description:
      "Be among the first to witness the Pagani Utopia in person. Limited attendance, invitation only.",
  },
];

/* ------------------------------------------------------------------ */
/*  Login Form                                                         */
/* ------------------------------------------------------------------ */

function LoginForm({ onSignIn }: { onSignIn: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-charcoal/40 border border-white/10 rounded-sm p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 border-2 border-gold flex items-center justify-center">
              <span className="font-heading text-gold text-2xl">P</span>
            </div>
          </div>

          <h1 className="font-heading text-3xl text-off-white text-center mb-2">
            Private Client Portal
          </h1>
          <p className="text-gunmetal text-sm text-center mb-10">
            Exclusive access for registered clients
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSignIn();
            }}
          >
            {/* Email */}
            <div className="mb-5">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-gunmetal mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jonathan@example.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-off-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold focus:shadow-[0_0_20px_rgba(198,167,105,0.1)] transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div className="mb-8">
              <label className="block text-[11px] tracking-[0.2em] uppercase text-gunmetal mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-4 py-3 text-off-white text-sm placeholder:text-white/20 focus:outline-none focus:border-gold focus:shadow-[0_0_20px_rgba(198,167,105,0.1)] transition-all duration-300"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-500 font-medium bg-gold text-black hover:bg-gold-light shadow-[0_0_30px_rgba(198,167,105,0.15)] hover:shadow-[0_0_40px_rgba(198,167,105,0.25)]"
            >
              Sign In
            </button>
          </form>

          {/* Forgot password */}
          <div className="text-center mt-6">
            <button className="text-gold/60 hover:text-gold text-xs tracking-wide transition-colors duration-300">
              Forgot Password?
            </button>
          </div>

          {/* Fine print */}
          <p className="text-white/20 text-[10px] text-center mt-8 tracking-wide">
            For registered Prestige Motors clients only
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard                                                          */
/* ------------------------------------------------------------------ */

function Dashboard({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
              Welcome back
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-off-white">
              Jonathan
            </h1>
          </div>
          <button
            onClick={onSignOut}
            className="inline-flex items-center gap-2 text-gunmetal hover:text-gold text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
          >
            <LogOut size={14} />
            Sign Out
          </button>
        </motion.div>

        {/* Your Collection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Car size={18} className="text-gold" />
            <h2 className="font-heading text-2xl text-off-white">
              Your Collection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clientVehicles.map((v, i) => (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={v.images.hero}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-1">
                    {v.brand} &middot; {v.year}
                  </p>
                  <h3 className="font-heading text-lg text-off-white mb-1">
                    {v.name}
                  </h3>
                  <p className="text-gunmetal text-sm">{formatPrice(v.price)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Service History */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Wrench size={18} className="text-gold" />
            <h2 className="font-heading text-2xl text-off-white">
              Service History
            </h2>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/10 text-[10px] tracking-[0.2em] uppercase text-gunmetal">
              <span>Date</span>
              <span>Service</span>
              <span>Vehicle</span>
              <span>Status</span>
            </div>

            {serviceHistory.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 px-6 py-5 border-b border-white/5 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-gunmetal md:hidden" />
                  <span className="text-off-white text-sm">{s.date}</span>
                </div>
                <span className="text-off-white text-sm">{s.service}</span>
                <span className="text-gunmetal text-sm">{s.vehicle}</span>
                <span
                  className={`text-sm font-medium ${
                    s.status === "Completed" ? "text-green-400/80" : "text-gold"
                  }`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={18} className="text-gold" />
            <h2 className="font-heading text-2xl text-off-white">
              Upcoming Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-sm p-6 hover:border-gold/20 transition-all duration-500"
              >
                <p className="text-gold text-[10px] tracking-[0.2em] uppercase mb-3">
                  {evt.date}
                </p>
                <h3 className="font-heading text-lg text-off-white mb-3">
                  {evt.title}
                </h3>
                <p className="text-gunmetal text-sm leading-relaxed">
                  {evt.description}
                </p>
                <button className="inline-flex items-center gap-1 text-gold hover:text-gold-light text-[11px] tracking-[0.15em] uppercase mt-4 transition-colors duration-300">
                  RSVP
                  <ChevronRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LoginPage() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {authenticated ? (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Dashboard onSignOut={() => setAuthenticated(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoginForm onSignIn={() => setAuthenticated(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
