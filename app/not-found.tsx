import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/20 to-black" />

      <div className="relative z-10 text-center px-6">
        {/* Gold decorative line */}
        <div className="w-16 h-px bg-gold/40 mx-auto mb-10" />

        {/* 404 */}
        <h1 className="font-heading text-[8rem] md:text-[12rem] leading-none text-gold/90 select-none">
          404
        </h1>

        {/* Message */}
        <p className="font-heading text-2xl md:text-3xl text-off-white mt-4 mb-3">
          The road you seek doesn&apos;t exist
        </p>
        <p className="text-gunmetal text-sm max-w-md mx-auto leading-relaxed mb-10">
          The page you&apos;re looking for may have been moved, removed, or
          never existed. Let us guide you back to our showroom.
        </p>

        {/* Gold decorative line */}
        <div className="w-16 h-px bg-gold/40 mx-auto mb-10" />

        {/* CTA */}
        <Link
          href="/"
          className="inline-block text-[10px] tracking-[0.25em] uppercase px-10 py-4 bg-gold text-black font-medium hover:bg-gold/90 transition-all duration-500"
        >
          Return to Showroom
        </Link>
      </div>
    </main>
  );
}
