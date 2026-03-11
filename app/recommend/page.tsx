"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Armchair, Crown, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { vehicles, formatPrice, Vehicle } from "@/data/vehicles";
import SectionWrapper from "@/components/ui/SectionWrapper";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BudgetRange =
  | "under-200"
  | "200-350"
  | "350-500"
  | "500-1m"
  | "1m-plus";

type Priority = "performance" | "comfort" | "prestige";

interface Preferences {
  budget: BudgetRange | null;
  categories: string[];
  priority: Priority | null;
}

interface ScoredVehicle {
  vehicle: Vehicle;
  score: number;
  matchPercent: number;
  rationale: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const BUDGET_OPTIONS: { key: BudgetRange; label: string; min: number; max: number }[] = [
  { key: "under-200", label: "Under $200K", min: 0, max: 200_000 },
  { key: "200-350", label: "$200K \u2013 $350K", min: 200_000, max: 350_000 },
  { key: "350-500", label: "$350K \u2013 $500K", min: 350_000, max: 500_000 },
  { key: "500-1m", label: "$500K \u2013 $1M", min: 500_000, max: 1_000_000 },
  { key: "1m-plus", label: "$1M+", min: 1_000_000, max: Infinity },
];

const CATEGORY_OPTIONS = [
  "Exotics",
  "Grand Touring",
  "Luxury Sedans",
  "Performance SUVs",
  "Limited Editions",
];

const PRIORITY_OPTIONS: { key: Priority; label: string; desc: string; icon: typeof Gauge }[] = [
  { key: "performance", label: "Performance", desc: "Highest horsepower, fastest acceleration", icon: Gauge },
  { key: "comfort", label: "Comfort & Luxury", desc: "Refined grand touring and luxury sedans", icon: Armchair },
  { key: "prestige", label: "Prestige & Rarity", desc: "Limited editions, ultimate exclusivity", icon: Crown },
];

const TOTAL_STEPS = 3;

/* ------------------------------------------------------------------ */
/*  Scoring                                                            */
/* ------------------------------------------------------------------ */

function scoreVehicles(prefs: Preferences): ScoredVehicle[] {
  const budget = BUDGET_OPTIONS.find((b) => b.key === prefs.budget)!;
  const { categories, priority } = prefs;

  // First pass: score every vehicle
  const scored = vehicles.map((v) => {
    let score = 0;
    let maxScore = 0;
    const reasons: string[] = [];

    // Budget match (40 pts)
    maxScore += 40;
    if (v.price >= budget.min && v.price <= budget.max) {
      score += 40;
      reasons.push("within your investment range");
    } else if (
      v.price >= budget.min * 0.8 &&
      v.price <= (budget.max === Infinity ? Infinity : budget.max * 1.2)
    ) {
      score += 20;
      reasons.push("near your investment range");
    }

    // Category match (30 pts)
    maxScore += 30;
    if (categories.length === 0 || categories.includes(v.category)) {
      score += 30;
      reasons.push(`matches your ${v.category.toLowerCase()} preference`);
    }

    // Priority match (30 pts)
    maxScore += 30;
    if (priority === "performance") {
      const hpScore = Math.min(30, Math.round((v.specs.horsepower / 1500) * 30));
      score += hpScore;
      if (hpScore >= 20) reasons.push(`${v.specs.horsepower} HP delivers extraordinary performance`);
    } else if (priority === "comfort") {
      if (v.category === "Luxury Sedans" || v.category === "Grand Touring") {
        score += 30;
        reasons.push("crafted for supreme touring comfort");
      } else if (v.category === "Performance SUVs") {
        score += 20;
        reasons.push("luxurious cabin with commanding presence");
      }
    } else if (priority === "prestige") {
      if (v.category === "Limited Editions") {
        score += 30;
        reasons.push("an extremely rare collector\u2019s masterpiece");
      } else {
        const priceScore = Math.min(25, Math.round((v.price / 4_000_000) * 25));
        score += priceScore;
        if (priceScore >= 15) reasons.push("highly exclusive and sought after");
      }
    }

    const matchPercent = Math.round((score / maxScore) * 100);
    const rationale =
      reasons.length > 0
        ? reasons.slice(0, 2).join(" and ").replace(/^./, (c) => c.toUpperCase()) + "."
        : "A distinguished addition to any collection.";

    return { vehicle: v, score, matchPercent, rationale };
  });

  // Sort by score desc, then price desc for ties
  scored.sort((a, b) => b.score - a.score || b.vehicle.price - a.vehicle.price);

  // If top results have very low match, relax — still return top 3
  return scored.slice(0, 3);
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className={`h-2 rounded-full transition-all duration-500 ${
            i === current
              ? "w-8 bg-gold"
              : i < current
              ? "w-2 bg-gold/60"
              : "w-2 bg-white/20"
          }`}
          layoutId={`dot-${i}`}
        />
      ))}
    </div>
  );
}

function SelectionCard({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative text-left p-6 rounded-sm border transition-all duration-500 ${
        selected
          ? "border-gold bg-gold/[0.06] shadow-[0_0_30px_rgba(198,167,105,0.12)]"
          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
      } ${className}`}
    >
      {selected && (
        <motion.div
          layoutId="card-glow"
          className="absolute inset-0 rounded-sm border border-gold/30"
          initial={false}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function RecommendPage() {
  const [step, setStep] = useState(0);
  const [prefs, setPrefs] = useState<Preferences>({
    budget: null,
    categories: [],
    priority: null,
  });
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<ScoredVehicle[] | null>(null);

  const canNext =
    (step === 0 && prefs.budget !== null) ||
    (step === 1) || // categories are optional (multi-select)
    (step === 2 && prefs.priority !== null);

  const handleNext = useCallback(() => {
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      // Final step — analyze
      setAnalyzing(true);
      setTimeout(() => {
        const scored = scoreVehicles(prefs);
        setResults(scored);
        setAnalyzing(false);
      }, 2200);
    }
  }, [step, prefs]);

  const handleBack = useCallback(() => {
    if (step > 0) setStep((s) => s - 1);
  }, [step]);

  const handleReset = useCallback(() => {
    setStep(0);
    setPrefs({ budget: null, categories: [], priority: null });
    setResults(null);
    setAnalyzing(false);
  }, []);

  const toggleCategory = useCallback((cat: string) => {
    setPrefs((p) => ({
      ...p,
      categories: p.categories.includes(cat)
        ? p.categories.filter((c) => c !== cat)
        : [...p.categories, cat],
    }));
  }, []);

  /* ---- Analyzing overlay ---- */
  if (analyzing) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="relative w-20 h-20 mx-auto mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold/30"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-t-gold border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-t-transparent border-r-gold border-b-transparent border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.p
            className="font-heading text-2xl text-off-white mb-3"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Analyzing your preferences...
          </motion.p>
          <p className="text-gunmetal text-sm tracking-wide">
            Curating the perfect selection
          </p>
        </motion.div>
      </div>
    );
  }

  /* ---- Results ---- */
  if (results) {
    return (
      <div className="min-h-screen bg-black pt-32 pb-24">
        <SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Your Curated Selection
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-off-white mb-4">
              Your Perfect Matches
            </h1>
            <p className="text-gunmetal max-w-lg mx-auto">
              Based on your preferences, we have identified these exceptional automobiles
              for your consideration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {results.map((r, i) => (
              <motion.div
                key={r.vehicle.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative bg-white/[0.02] border border-white/10 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                {/* Match badge */}
                <div className="absolute top-4 right-4 z-10 bg-gold/90 text-black text-[11px] tracking-[0.15em] uppercase font-medium px-3 py-1.5 rounded-sm">
                  {r.matchPercent}% Match
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={r.vehicle.images.hero}
                    alt={r.vehicle.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                    {r.vehicle.brand} &middot; {r.vehicle.category}
                  </p>
                  <h3 className="font-heading text-2xl text-off-white mb-1">
                    {r.vehicle.name}
                  </h3>
                  <p className="text-gold font-heading text-lg mb-4">
                    {formatPrice(r.vehicle.price)}
                  </p>
                  <p className="text-gunmetal text-sm leading-relaxed mb-6">
                    {r.rationale}
                  </p>
                  <Link
                    href={`/inventory/${r.vehicle.slug}`}
                    className="inline-flex items-center justify-center w-full text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-500 font-medium bg-gold text-black hover:bg-gold-light shadow-[0_0_30px_rgba(198,167,105,0.15)] hover:shadow-[0_0_40px_rgba(198,167,105,0.25)]"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <RotateCcw size={14} />
              Start Over
            </button>
          </motion.div>
        </SectionWrapper>
      </div>
    );
  }

  /* ---- Wizard Steps ---- */
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <SectionWrapper>
        <StepIndicator current={step} total={TOTAL_STEPS} />

        <AnimatePresence mode="wait">
          {/* Step 0: Budget */}
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
                  Step 1 of 3
                </p>
                <h1 className="font-heading text-3xl md:text-5xl text-off-white">
                  What&apos;s your investment range?
                </h1>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {BUDGET_OPTIONS.map((b) => (
                  <SelectionCard
                    key={b.key}
                    selected={prefs.budget === b.key}
                    onClick={() => setPrefs((p) => ({ ...p, budget: b.key }))}
                    className="text-center py-8"
                  >
                    <p className="font-heading text-xl text-off-white">{b.label}</p>
                  </SelectionCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Categories */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
                  Step 2 of 3
                </p>
                <h1 className="font-heading text-3xl md:text-5xl text-off-white mb-3">
                  What speaks to you?
                </h1>
                <p className="text-gunmetal text-sm">
                  Select one or more categories, or skip to see all.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {CATEGORY_OPTIONS.map((cat) => (
                  <SelectionCard
                    key={cat}
                    selected={prefs.categories.includes(cat)}
                    onClick={() => toggleCategory(cat)}
                    className="py-8 text-center"
                  >
                    <p className="font-heading text-xl text-off-white">{cat}</p>
                  </SelectionCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Priority */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
                  Step 3 of 3
                </p>
                <h1 className="font-heading text-3xl md:text-5xl text-off-white">
                  What matters most?
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {PRIORITY_OPTIONS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <SelectionCard
                      key={p.key}
                      selected={prefs.priority === p.key}
                      onClick={() => setPrefs((prev) => ({ ...prev, priority: p.key }))}
                      className="py-10 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <Icon
                          size={32}
                          className={
                            prefs.priority === p.key ? "text-gold" : "text-gunmetal"
                          }
                        />
                      </div>
                      <p className="font-heading text-xl text-off-white mb-2">
                        {p.label}
                      </p>
                      <p className="text-gunmetal text-sm">{p.desc}</p>
                    </SelectionCard>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-16">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 font-medium ${
              step === 0
                ? "text-white/20 cursor-not-allowed"
                : "text-off-white hover:text-gold"
            }`}
          >
            <ChevronLeft size={16} />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canNext}
            className={`inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase px-8 py-3.5 transition-all duration-500 font-medium ${
              canNext
                ? "bg-gold text-black hover:bg-gold-light shadow-[0_0_30px_rgba(198,167,105,0.15)] hover:shadow-[0_0_40px_rgba(198,167,105,0.25)]"
                : "bg-white/10 text-white/30 cursor-not-allowed"
            }`}
          >
            {step === TOTAL_STEPS - 1 ? "Find My Match" : "Next"}
            <ChevronRight size={16} />
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
