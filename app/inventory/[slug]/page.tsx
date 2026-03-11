import { notFound } from "next/navigation";
import { vehicles, getVehicleBySlug, formatPrice } from "@/data/vehicles";
import VehicleDetailClient from "./VehicleDetailClient";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: "Vehicle Not Found" };
  return {
    title: `${vehicle.name} | Prestige Motors`,
    description: vehicle.description,
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  return <VehicleDetailClient vehicle={vehicle} />;
}
