export default function InventoryLoading() {
  return (
    <main className="pt-32">
      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        {/* Heading skeleton */}
        <div className="text-center mb-12">
          <div className="h-3 w-32 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-72 bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        {/* Filter bar skeleton */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-20 bg-white/[0.03] rounded animate-pulse"
              />
            ))}
          </div>
          <div className="h-9 w-36 bg-white/[0.03] rounded animate-pulse" />
        </div>

        {/* Vehicle card grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-charcoal animate-pulse" />
              {/* Text placeholders */}
              <div className="pt-5 space-y-3">
                <div className="h-2 w-24 bg-white/5 rounded animate-pulse" />
                <div className="h-5 w-48 bg-white/5 rounded animate-pulse" />
                <div className="flex items-center justify-between">
                  <div className="h-4 w-28 bg-white/5 rounded animate-pulse" />
                  <div className="h-3 w-20 bg-white/5 rounded animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
