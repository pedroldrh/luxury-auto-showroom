export default function CompareLoading() {
  return (
    <main className="pt-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-3 w-24 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        {/* 3-column vehicle header skeletons */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="text-center">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-charcoal mb-4 animate-pulse" />
              {/* Brand / year */}
              <div className="h-2 w-28 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
              {/* Name */}
              <div className="h-5 w-40 bg-white/5 rounded mx-auto mb-2 animate-pulse" />
              {/* Price */}
              <div className="h-4 w-28 bg-white/5 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>

        {/* Spec rows skeleton */}
        <div className="border border-white/10">
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid grid-cols-3 ${rowIndex !== 5 ? "border-b border-white/5" : ""}`}
            >
              {Array.from({ length: 3 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="p-5 flex flex-col items-center gap-2 border-r border-white/5 last:border-r-0"
                >
                  <div className="h-2 w-16 bg-white/5 rounded animate-pulse" />
                  <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
