## 2025-01-24 - [Route-based Code Splitting]
**Learning:** Implementing `React.lazy` and `Suspense` for routes can drastically reduce the initial bundle size (in this case, by 43%), which is highly impactful for performance and specifically recommended by Vite when chunks exceed 500kB.
**Action:** Always check the build output for chunk size warnings and consider route-based splitting as a first-line performance optimization.

## 2025-01-24 - [Unintended Lockfile Changes]
**Learning:** Running `npm install` in some environments can cause significant metadata changes in `package-lock.json` (e.g., removing `"dev": true`) even if `package.json` hasn't changed. This pollutes PRs and should be reverted before submission.
**Action:** Always check `package-lock.json` for unintended changes after running installation commands and revert them if they are just noise.
