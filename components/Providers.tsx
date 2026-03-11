"use client";

import { ReactNode } from "react";
import { WishlistProvider } from "@/context/WishlistContext";
import { CompareProvider } from "@/context/CompareContext";
import CompareBar from "@/components/CompareBar";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WishlistProvider>
      <CompareProvider>
        {children}
        <CompareBar />
      </CompareProvider>
    </WishlistProvider>
  );
}
