"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import VehicleViewer3DWrapper from "./VehicleViewer3DWrapper";
import VehicleViewer3DErrorBoundary from "./VehicleViewer3DErrorBoundary";

interface VehicleGalleryProps {
  images: string[];
  name: string;
}

const tabs = ["Exterior", "Interior", "Driving", "Details", "360\u00b0 View"];

export default function VehicleGallery({ images, name }: VehicleGalleryProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const tabImages = tabs.map((_, i) => images[i % images.length]);

  const is3DView = activeTab === 4;

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-8 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(i);
              if (i < 4) setSelectedImage(i);
            }}
            className={`text-[10px] tracking-[0.2em] uppercase pb-2 transition-all duration-500 relative ${
              activeTab === i
                ? "text-gold"
                : "text-gunmetal/40 hover:text-off-white"
            }`}
          >
            {tab}
            {activeTab === i && (
              <motion.div
                layoutId="gallery-tab"
                className="absolute bottom-0 left-0 right-0 h-px bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Image / 3D Viewer */}
      {is3DView ? (
        <VehicleViewer3DErrorBoundary
          fallbackImage={images[0]}
          fallbackAlt={`${name} - Exterior`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <VehicleViewer3DWrapper />
          </motion.div>
        </VehicleViewer3DErrorBoundary>
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden bg-charcoal mb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={tabImages[selectedImage]}
                alt={`${name} - ${tabs[activeTab]}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Thumbnails — hidden when 3D view is active */}
      {!is3DView && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedImage(i);
                setActiveTab(i % (tabs.length - 1));
              }}
              className={`relative aspect-[16/9] overflow-hidden transition-all duration-500 ${
                selectedImage === i
                  ? "opacity-100"
                  : "opacity-30 hover:opacity-60"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
