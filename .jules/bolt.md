## 2025-05-14 - [Avoid accidental package-lock.json corruption]
**Learning:** Running `npm install` to resolve missing build tools can lead to massive, unintended changes in `package-lock.json` (e.g., stripping `dev: true` flags). This happens if the environment or npm version differs from what generated the original lock file.
**Action:** Always check `git status` after `npm install`. Revert `package-lock.json` before submitting if changes are detected, as they are often unrelated to the actual task and can bloat the production environment.

## 2025-05-15 - [Consolidate redundant IntersectionObservers]
**Learning:** Multiple components creating independent `IntersectionObserver` instances targeting the same set of DOM elements (e.g., `.reveal`) leads to redundant computations and increased memory overhead.
**Action:** Use a singleton pattern for the `IntersectionObserver` via a custom hook. Scoping the element query with a `ref` further optimizes performance by avoiding global DOM lookups. Always ensure a global fallback or complete coverage when removing a top-level observer to avoid breaking animations.
