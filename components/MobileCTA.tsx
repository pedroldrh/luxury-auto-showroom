"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-black/95 backdrop-blur-2xl p-4"
        >
          <Link
            href="/contact"
            className="block w-full text-center bg-gold text-black text-[11px] tracking-[0.2em] uppercase py-3.5 font-medium hover:bg-gold-light transition-colors"
          >
            Book Test Drive
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
