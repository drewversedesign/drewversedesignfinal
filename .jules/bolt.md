## 2025-05-14 - [Avoid accidental package-lock.json corruption]
**Learning:** Running `npm install` to resolve missing build tools can lead to massive, unintended changes in `package-lock.json` (e.g., stripping `dev: true` flags). This happens if the environment or npm version differs from what generated the original lock file.
**Action:** Always check `git status` after `npm install`. Revert `package-lock.json` before submitting if changes are detected, as they are often unrelated to the actual task and can bloat the production environment.
