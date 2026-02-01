## 2025-05-14 - [Route-based Code Splitting and Static Hoisting]
**Learning:** Initial bundle size was 779kB due to static imports of all pages in App.tsx. Implementing React.lazy and Suspense reduced the main bundle to 444kB (43% reduction). Hoisting static arrays (like showcaseItems) out of component renders prevents unnecessary allocations.
**Action:** Always check App.tsx for lazy loading of routes in large SPAs. Hoist static data that doesn't depend on props or state.
