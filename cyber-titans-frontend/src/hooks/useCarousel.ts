// src/hooks/useCarousel.ts
import { useState, useEffect } from 'react';

export function useCarousel<T>(items: T[], itemsPerPage: number, resetKey: string) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - itemsPerPage);

  useEffect(() => setIndex(0), [resetKey]);
  useEffect(() => setIndex((prev) => Math.min(prev, maxIndex)), [maxIndex]);

  return {
    index,
    maxIndex,
    visibleItems: items.slice(index, index + itemsPerPage),
    prev: () => setIndex((p) => Math.max(0, p - 1)),
    next: () => setIndex((p) => Math.min(maxIndex, p + 1)),
  };
}