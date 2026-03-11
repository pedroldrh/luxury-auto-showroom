"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface WishlistContextType {
  items: string[];
  toggle: (slug: string) => void;
  isWished: (slug: string) => boolean;
  clear: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = "prestige-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage after mount to avoid SSR mismatch
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // Ignore parse errors
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage on change (only after hydration)
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const toggle = useCallback((slug: string) => {
    setItems((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }, []);

  const isWished = useCallback(
    (slug: string) => items.includes(slug),
    [items]
  );

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <WishlistContext.Provider value={{ items, toggle, isWished, clear }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}
