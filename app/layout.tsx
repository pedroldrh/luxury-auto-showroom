import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prestige Motors | Automotive Excellence Redefined",
  description:
    "An ultra-premium luxury car dealership offering the world's finest automobiles. Rolls-Royce, Bentley, Ferrari, Lamborghini, McLaren, and more.",
  openGraph: {
    title: "Prestige Motors | Automotive Excellence Redefined",
    description:
      "Discover the world's most exclusive automobiles at Prestige Motors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <MobileCTA />
        </Providers>
      </body>
    </html>
  );
}
