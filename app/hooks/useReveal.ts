"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds a scroll-triggered reveal animation to any element.
 *
 * Usage:
 *   const { ref, isVisible } = useReveal();
 *   <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""}`} />
 *
 * The animation fires once when the element first enters the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, options]);

  return { ref, isVisible };
}
