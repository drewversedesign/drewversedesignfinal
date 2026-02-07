## 2025-05-15 - Consolidating IntersectionObservers for Scroll Animations

**Learning:** Multiple components were each creating their own `IntersectionObserver` instance to handle scroll-reveal animations. This led to redundant DOM queries and higher memory usage. By creating a custom hook with a singleton `IntersectionObserver`, we can share a single observer instance across all components. Additionally, using `unobserve` after an element has been revealed prevents unnecessary background processing for elements already visible.

**Action:** Prefer a singleton observer pattern (via a custom hook or global utility) for common scroll-based triggers to reduce resource overhead.

## 2025-05-15 - Throttling Scroll Listeners for UI Parallax

**Learning:** The `HeroSection` was performing manual DOM updates (style changes) directly inside a `scroll` event listener without throttling. This can lead to jank (dropped frames) as the browser tries to keep up with high-frequency scroll events.

**Action:** Use `requestAnimationFrame` and a `ticking` flag to throttle style updates in scroll listeners. Always use `passive: true` when the listener doesn't need to call `preventDefault()`, as it allows the browser to optimize scrolling performance.
