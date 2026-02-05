
import { useEffect, RefObject } from 'react';

const observerOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

// Singleton observer to be shared across all components to reduce overhead
// and avoid redundant DOM queries and observation tasks.
let observer: IntersectionObserver | null = null;

const getObserver = () => {
  if (typeof window === 'undefined') return null;

  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Performance optimization: Stop observing once revealed
          observer?.unobserve(entry.target);
        }
      });
    }, observerOptions);
  }
  return observer;
};

/**
 * Hook to handle scroll-reveal animations using a singleton IntersectionObserver.
 * @param containerRef Optional ref to scope the search for .reveal elements.
 */
export const useScrollReveal = (containerRef?: RefObject<HTMLElement>) => {
  useEffect(() => {
    const obs = getObserver();
    if (!obs) return;

    const selector = '.reveal';
    const elements = containerRef?.current
      ? containerRef.current.querySelectorAll(selector)
      : document.querySelectorAll(selector);

    elements.forEach((el) => {
      // Only observe if it hasn't been revealed yet
      if (!el.classList.contains('active')) {
        obs.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => obs.unobserve(el));
    };
  }, [containerRef]);
};
