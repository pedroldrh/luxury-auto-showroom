"use client";

import SectionWrapper from "./ui/SectionWrapper";
import AnimatedHeading from "./ui/AnimatedHeading";
import VehicleCard from "./VehicleCard";
import { getFeaturedVehicles } from "@/data/vehicles";

export default function FeaturedCollection() {
  const featured = getFeaturedVehicles().slice(0, 6);

  return (
    <SectionWrapper>
      <AnimatedHeading subtitle="Featured Collection">
        Exceptional Automobiles
      </AnimatedHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((vehicle, i) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
