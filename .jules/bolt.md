## 2025-01-31 - Route-based Code Splitting
**Learning:** Large monolithic bundles significantly impact the initial load time. Route-based code splitting is a highly effective way to reduce the main bundle size.
**Action:** Use `React.lazy` and `Suspense` for all top-level route components to ensure users only download the code they need for the current page.

## 2025-01-31 - Image Lazy Loading
**Learning:** Deferring the loading of images that are not immediately visible (below the fold) can improve the perceived performance and reduce initial bandwidth usage.
**Action:** Always add `loading="lazy"` to `<img>` tags for images that are not part of the critical initial viewport.
