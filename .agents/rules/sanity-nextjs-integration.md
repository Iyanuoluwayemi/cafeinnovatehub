---
name: sanity-nextjs-integration
description: Strict invariants for integrating Sanity CMS with the Next.js App Router.
---

# Sanity & Next.js App Router Rules

When building or modifying pages that fetch data from Sanity CMS, you MUST adhere to these rules:

## 1. Cache Busting (Revalidation)
Next.js aggressively caches data by default. To prevent the "Not Updating" bug where Sanity CMS edits do not appear on the frontend:
- Add exactly `export const revalidate = 10;` to the very top of any Server Component (like `page.tsx`) that fetches Sanity data.

## 2. Server Components for Data Fetching
- Do NOT use `"use client";` on pages that run `await client.fetch(...)`. 
- Pages acting as Sanity query wrappers must be Server Components. If interactivity is needed, extract the interactive parts into a child Client Component and pass the Sanity data down as props.

## 3. Dynamic Routing for Slugs
- When building pages that render single Sanity documents (like a single Blog Post or a single Program), strictly use Next.js dynamic routing folders: `app/folderName/[slug]/page.tsx`.
- Always query the slug dynamically using GROQ: `*[_type == "post" && slug.current == $slug][0]` and pass the parsed params down to the fetcher.

## 4. Reusing Queries across Pages
- Because Sanity separates data from design, do not duplicate schemas unnecessarily.
- If a data block (like Testimonials) needs to appear on multiple pages, reuse the exact same GROQ query (e.g., `*[_type == "testimonial"]`) across those different Next.js routes.

## 5. Shared UI Components for Sanity Data
- **Rule:** Never duplicate complex JSX blocks (like Testimonial Cards, Program Cards, or Feature Grids) across multiple Next.js pages.
- **Implementation:** If a Sanity data object is rendered identically on multiple pages, you MUST extract its UI into a standalone React component within "src/components/ui/" (e.g., "src/components/ui/TestimonialCard.tsx").
- **Why:** This ensures that when design updates are made (like adding line clamping or fixing overflow bugs), the changes instantly sync across the entire website.

## 6. Strict Navigation & Routing
- **Rule:** Never leave buttons or anchor tags as dead elements. If a UI element implies navigation (e.g., "Read More", "View All Articles"), it MUST be wrapped in a "next/link" component.
- **Rule:** Dynamic routing links MUST use the "slug.current" field properly formatted (e.g., <Link href={{/blog/$}{post.slug.current}}}>). Ensure fallback links are in place if a slug is missing.
