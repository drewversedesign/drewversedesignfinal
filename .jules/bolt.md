# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

This journal is for CRITICAL learnings that will help avoid mistakes or make better decisions.
 Entries should be added for:
- A performance bottleneck specific to this codebase's architecture
- An optimization that surprisingly DIDN'T work (and why)
- A rejected change with a valuable lesson
- A codebase-specific performance pattern or anti-pattern
- A surprising edge case in how this app handles performance

DO NOT journal routine work.

Format: `## YYYY-MM-DD - [Title]
**Learning:** [Insight]
**Action:** [How to apply next time]`

## 2024-07-25 - Static Data Bundling Bottleneck
**Learning:** Statically importing and bundling a large collection of data (e.g., all blog posts) into a single module (`/src/data/blog-posts/index.ts`) creates a significant performance bottleneck. The `BlogPost.tsx` component was loading the entire collection for every individual post page, drastically increasing the initial JavaScript bundle size and delaying the Time to Interactive (TTI).
**Action:** For collections of data where only a subset is needed at a time, implement a dynamic loading pattern.
1.  Separate the data into metadata (for list views) and full content.
2.  Use dynamic `import()` to fetch only the required data on demand (e.g., loading a single blog post's content when the user navigates to its page).
3.  This pattern is crucial for scaling content-heavy features without degrading performance.
