---
name: sanity-nextjs-integration
description: Strict invariants for integrating Sanity CMS with the Next.js App Router.
---

# Sanity & Next.js App Router Rules

When building or modifying pages that fetch data from Sanity CMS, you MUST adhere to these strict invariants:

## Core Invariants
1. **Never use hardcoded UI for content that exists in a Sanity schema.**
   - If a page has a Sanity schema or document (e.g. Donate, About, Community, Programs, Blog, Testimonials), the Next.js page MUST execute a matching GROQ query that pulls and renders that live data with graceful fallbacks.
2. **Always append `export const revalidate = 10;` to any page fetching Sanity data to prevent aggressive caching.**
   - Next.js aggressively caches pages at build time. Adding `export const revalidate = 10;` ensures incremental static regeneration (ISR) pulls fresh content from Sanity every 10 seconds.
3. **Always verify that CTA buttons fetched from Sanity are wrapped in functional links on the frontend.**
   - Every Call to Action (CTA) or action button pulled from Sanity MUST be wrapped in a functional Next.js `<Link>` or `<a>` tag with the correct dynamic `href` or fallback URL. Never leave buttons as inert or dead elements.

## Additional Architectural Standards

### 1. Server Components for Data Fetching
- Do NOT declare `"use client";` on pages that run `await client.fetch(...)`. 
- Pages acting as Sanity query wrappers must remain Server Components. When client interactivity is needed (such as clipboard copying, toasts, or animations), extract the interactive elements into a child Client Component and pass the fetched Sanity data down as props.

### 2. Dynamic Routing for Slugs
- When building pages that render single Sanity documents (like a single Blog Post or a single Program), strictly use Next.js dynamic routing folders: `app/folderName/[slug]/page.tsx`.
- Always query the slug dynamically using GROQ: `*[_type == "post" && slug.current == $slug][0]` and await the `params` promise.
- Include `export const dynamicParams = true;` alongside `export const revalidate = 10;` so new documents created in Sanity immediately work without a redeploy.
- Always call `notFound()` if no document matches the requested slug.

### 3. Reusing Queries & Shared UI Components across Pages
- Because Sanity separates data from design, do not duplicate schemas unnecessarily.
- If a data block (like Testimonials) needs to appear on multiple pages, reuse the exact same GROQ query (e.g., `*[_type == "testimonial"]`) and shared component (`<TestimonialCard />`).
