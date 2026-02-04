
import { useEffect, RefObject } from 'react';

const observerOptions = {
  threshold: 0.1,
};

// Singleton observer to be shared across all components to reduce memory usage and overhead
let observer: IntersectionObserver | null = null;

const getObserver = () => {
  if (typeof window === 'undefined') return null;
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Performance optimization: stop observing once revealed to reduce main thread load
          observer?.unobserve(entry.target);
        }
      });
    }, observerOptions);
  }
  return observer;
};

/**
 * Hook to handle scroll reveal animations using a shared IntersectionObserver.
 * Reduces the number of observer instances and redundant observations.
 *
 * @param ref Optional ref to the container element. If provided, only children of this element will be observed.
 *            If not provided, all .reveal elements in the document will be observed.
 */
export const useScrollReveal = (ref?: RefObject<HTMLElement>) => {
  useEffect(() => {
    const obs = getObserver();
    if (!obs) return;

    const container = ref?.current || document;
    // Only observe elements that haven't been revealed yet
    const revealElements = container.querySelectorAll('.reveal:not(.active)');

    revealElements.forEach((el) => {
      obs.observe(el);
    });

    return () => {
      // Clean up observations for elements that haven't been revealed yet
      revealElements.forEach((el) => {
        if (!el.classList.contains('active')) {
          obs.unobserve(el);
        }
      });
    };
  }, [ref]);
};
