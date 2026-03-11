"use client";

import Link from "next/link";
import { useState } from "react";

const footerColumns = [
  {
    title: "Inventory",
    links: [
      { label: "All Vehicles", href: "/inventory" },
      { label: "Exotics", href: "/collections" },
      { label: "Grand Touring", href: "/collections" },
      { label: "Limited Editions", href: "/collections" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Customization", href: "/customization" },
      { label: "Vehicle Sourcing", href: "/contact" },
      { label: "Financing", href: "/contact" },
      { label: "Worldwide Shipping", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Showroom", href: "/#showroom" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-dark relative noise-overlay">
      {/* Top gold line */}
      <div className="gold-line" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="font-heading text-gold text-2xl font-bold">P</span>
              <span className="font-heading text-lg tracking-[0.25em] text-off-white">
                PRESTIGE
              </span>
            </Link>
            <p className="text-gunmetal text-sm leading-relaxed mb-8 max-w-xs">
              Curating the world&apos;s most extraordinary automobiles for
              discerning collectors and enthusiasts since 1987.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-off-white/50 mb-3">
                Newsletter
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="flex"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="bg-white/[0.03] text-off-white text-sm px-4 py-2.5 flex-1 focus:outline-none focus:bg-white/[0.06] transition-colors placeholder:text-gunmetal/40"
                />
                <button
                  type="submit"
                  className="bg-gold text-black text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-gold-light transition-colors font-medium"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] tracking-[0.2em] uppercase text-off-white/50 mb-5 font-medium">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gunmetal hover:text-gold transition-colors duration-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="gold-line w-full absolute left-0 right-0" style={{ marginTop: "-2rem" }} />
          <p className="text-gunmetal/50 text-xs">
            &copy; {new Date().getFullYear()} Prestige Motors. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gunmetal/50 hover:text-gold transition-colors duration-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
