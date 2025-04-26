
import { useState, useEffect, useCallback } from "react";

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // More reliable body scroll locking
  const lockScroll = useCallback(() => {
    // Save the current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
  }, []);

  const unlockScroll = useCallback(() => {
    // Restore the scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }, []);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      if (isOpen) unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll]);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    setIsOpen,
    toggle,
    close
  };
}
