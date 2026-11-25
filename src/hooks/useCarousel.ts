// src/hooks/useCarousel.ts
import { useEffect, useState } from 'react';

export function useCarousel<T>(items: T[], itemsPerPage: number, resetKey?: unknown) {
  const [index, setIndex] = useState(0);

  const safePerPage = Math.max(1, itemsPerPage);
  const maxIndex = Math.max(0, items.length - safePerPage);

  useEffect(() => {
    setIndex(0);
  }, [resetKey, safePerPage]);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);

  const prev = () => {
    setIndex((current) => Math.max(0, current - 1));
  };

  const next = () => {
    setIndex((current) => {
      if (maxIndex === 0) return 0;
      return current >= maxIndex ? 0 : current + 1;
    });
  };

  const visibleItems = items.slice(index, index + safePerPage);

  return {
    index,
    setIndex,
    maxIndex,
    visibleItems,
    prev,
    next,
  };
}