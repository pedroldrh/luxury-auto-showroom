"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const exteriorColors = [
  { name: "Obsidian Black", hex: "#0A0A0A" },
  { name: "Arctic White", hex: "#F0EDE8" },
  { name: "Rosso Corsa", hex: "#D40000" },
  { name: "Racing Green", hex: "#0F2A24" },
  { name: "Midnight Blue", hex: "#191970" },
  { name: "Champagne Gold", hex: "#C6A769" },
];

const wheels = [
  { name: "Classico 21\"", style: "Multi-spoke forged aluminum" },
  { name: "Sport 22\"", style: "Gloss black diamond-cut" },
  { name: "Touring 20\"", style: "Polished silver ten-spoke" },
  { name: "Carbon 21\"", style: "Carbon fiber inlay lightweight" },
];

const interiors = [
  { name: "Nero Leather", description: "Hand-stitched black Nappa leather with diamond quilting" },
  { name: "Cuoio Tan", description: "Warm Italian tan leather with contrast stitching" },
  { name: "Ivory White", description: "Pristine white semi-aniline leather with gold accents" },
  { name: "Bordeaux Red", description: "Deep red leather with black piping detail" },
];

const trims = [
  { name: "Open-Pore Walnut", description: "Natural wood grain with matte finish" },
  { name: "Carbon Fiber", description: "Twill weave carbon with gloss lacquer" },
  { name: "Brushed Aluminum", description: "Anodized aluminum with linear pattern" },
  { name: "Piano Black", description: "High-gloss lacquered hardwood" },
];

type Step = "exterior" | "wheels" | "interior" | "trim";

const steps: { key: Step; label: string }[] = [
  { key: "exterior", label: "Exterior" },
  { key: "wheels", label: "Wheels" },
  { key: "interior", label: "Interior" },
  { key: "trim", label: "Trim" },
];

export default function Configurator() {
  const [activeStep, setActiveStep] = useState<Step>("exterior");
  const [config, setConfig] = useState({
    exterior: 0,
    wheels: 0,
    interior: 0,
    trim: 0,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Preview */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <Image
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80"
          alt="Vehicle preview"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 mix-blend-color opacity-20 transition-colors duration-700"
          style={{ backgroundColor: exteriorColors[config.exterior].hex }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8">
          <p className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-2">
            Your Configuration
          </p>
          <p className="text-off-white/70 text-sm">
            {exteriorColors[config.exterior].name} &middot;{" "}
            {wheels[config.wheels].name} &middot;{" "}
            {interiors[config.interior].name} &middot;{" "}
            {trims[config.trim].name}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div>
        {/* Step Nav */}
        <div className="flex gap-8 mb-10">
          {steps.map((step) => (
            <button
              key={step.key}
              onClick={() => setActiveStep(step.key)}
              className={`text-[10px] tracking-[0.2em] uppercase pb-2 transition-all duration-500 relative ${
                activeStep === step.key
                  ? "text-gold"
                  : "text-gunmetal/40 hover:text-off-white"
              }`}
            >
              {step.label}
              {activeStep === step.key && (
                <motion.div
                  layoutId="config-tab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeStep === "exterior" && (
              <div>
                <p className="text-off-white/60 text-sm mb-8 leading-relaxed">
                  Select your exterior finish from our curated palette of
                  exclusive colors.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {exteriorColors.map((color, i) => (
                    <button
                      key={color.name}
                      onClick={() => setConfig({ ...config, exterior: i })}
                      className={`flex items-center gap-4 p-4 transition-all duration-500 ${
                        config.exterior === i
                          ? "bg-gold-dim"
                          : "bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-full shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className={`text-sm ${config.exterior === i ? "text-gold" : "text-off-white/60"}`}>
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeStep === "wheels" && (
              <div>
                <p className="text-off-white/60 text-sm mb-8 leading-relaxed">
                  Choose wheels that complement your driving style.
                </p>
                <div className="space-y-2">
                  {wheels.map((w, i) => (
                    <button
                      key={w.name}
                      onClick={() => setConfig({ ...config, wheels: i })}
                      className={`w-full text-left p-5 transition-all duration-500 ${
                        config.wheels === i
                          ? "bg-gold-dim"
                          : "bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <p className={`text-sm ${config.wheels === i ? "text-gold" : "text-off-white/70"}`}>
                        {w.name}
                      </p>
                      <p className="text-gunmetal/40 text-xs mt-1">{w.style}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeStep === "interior" && (
              <div>
                <p className="text-off-white/60 text-sm mb-8 leading-relaxed">
                  Select the finest leathers and upholstery for your cabin.
                </p>
                <div className="space-y-2">
                  {interiors.map((int, i) => (
                    <button
                      key={int.name}
                      onClick={() => setConfig({ ...config, interior: i })}
                      className={`w-full text-left p-5 transition-all duration-500 ${
                        config.interior === i
                          ? "bg-gold-dim"
                          : "bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <p className={`text-sm ${config.interior === i ? "text-gold" : "text-off-white/70"}`}>
                        {int.name}
                      </p>
                      <p className="text-gunmetal/40 text-xs mt-1">{int.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeStep === "trim" && (
              <div>
                <p className="text-off-white/60 text-sm mb-8 leading-relaxed">
                  Complete your vision with premium trim materials.
                </p>
                <div className="space-y-2">
                  {trims.map((t, i) => (
                    <button
                      key={t.name}
                      onClick={() => setConfig({ ...config, trim: i })}
                      className={`w-full text-left p-5 transition-all duration-500 ${
                        config.trim === i
                          ? "bg-gold-dim"
                          : "bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <p className={`text-sm ${config.trim === i ? "text-gold" : "text-off-white/70"}`}>
                        {t.name}
                      </p>
                      <p className="text-gunmetal/40 text-xs mt-1">{t.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
