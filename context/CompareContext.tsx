"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface CompareContextType {
  items: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  isComparing: (slug: string) => boolean;
  clear: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const STORAGE_KEY = "prestige-compare";
const MAX_COMPARE = 3;

export function CompareProvider({ children }: { children: ReactNode }) {
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

  const add = useCallback((slug: string) => {
    setItems((prev) => {
      if (prev.includes(slug) || prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((s) => s !== slug));
  }, []);

  const isComparing = useCallback(
    (slug: string) => items.includes(slug),
    [items]
  );

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <CompareContext.Provider value={{ items, add, remove, isComparing, clear }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
