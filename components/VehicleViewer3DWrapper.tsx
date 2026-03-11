import dynamic from "next/dynamic";

const VehicleViewer3D = dynamic(() => import("./VehicleViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[4/3] bg-charcoal flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gunmetal text-xs tracking-[0.1em] uppercase">
          Loading 3D View
        </p>
      </div>
    </div>
  ),
});

export default VehicleViewer3D;
