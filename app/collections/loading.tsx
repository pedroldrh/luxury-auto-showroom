export default function CollectionsLoading() {
  return (
    <main className="pt-32">
      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        {/* Heading skeleton */}
        <div className="text-center mb-12">
          <div className="h-3 w-40 bg-white/5 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-10 w-64 bg-white/5 rounded mx-auto animate-pulse" />
        </div>

        {/* Category sections */}
        <div className="space-y-32">
          {Array.from({ length: 3 }).map((_, catIndex) => (
            <div key={catIndex}>
              {/* Category header image skeleton */}
              <div className="relative aspect-[21/9] bg-charcoal mb-12 animate-pulse">
                <div className="absolute bottom-0 left-0 p-8 md:p-12 space-y-3">
                  <div className="h-2 w-24 bg-white/5 rounded animate-pulse" />
                  <div className="h-8 w-56 bg-white/5 rounded animate-pulse" />
                  <div className="h-3 w-80 bg-white/5 rounded animate-pulse" />
                </div>
              </div>

              {/* Vehicle cards skeleton */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="group">
                    <div className="aspect-[4/3] bg-charcoal animate-pulse" />
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
          ))}
        </div>
      </div>
    </main>
  );
}
