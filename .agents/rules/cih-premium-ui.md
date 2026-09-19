---
name: cih-premium-ui-design-system
description: Enforces the premium 'Bento Box', contrasting, and ambient lighting UI design system for the Cafe Innovate Hub website.
trigger: always_on
---

# Premium UI Design System Requirements

When creating or modifying pages and components for Cafe Innovate Hub, you MUST strictly adhere to the following design system invariants to prevent the UI from looking sparse, boring, or "too white".

## 1. Contrast & Section Pacing
- **Rule**: Never stack multiple plain white (`bg-white` or `bg-slate-50`) sections consecutively if they lack internal contrast.
- **Implementation**: Alternate light sections with deep dark sections (`bg-[#0a0f0d]`) to create dramatic visual breaks (e.g., as seen in the Testimonials section).

## 2. Depth & Ambient Lighting
- **Rule**: Plain white backgrounds must be broken up with subtle depth elements.
- **Implementation**: 
  - Use massive, heavily blurred colored orbs in the background (e.g., `bg-cihBlue/[0.03] blur-[120px] w-[600px] h-[600px] rounded-full`).
  - Use subtle CSS grid patterns (e.g., `bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]`). For dark sections, use `#ffffff05` instead of `#00000008`.

## 3. Bento-Box Card Layouts
- **Rule**: Standard cards should feel premium and "bento" style.
- **Implementation**: 
  - Use large border radii (`rounded-[2rem]` or `rounded-3xl`).
  - Ensure images fill their container fully (`object-cover`).
  - Add overlapping, floating accent blocks (like `cihYellow` squares with icons) over the edges of internal images.
  - Apply clean transitions (`hover:-translate-y-1 hover:shadow-2xl transition-all duration-500`).

## 4. Rich Imagery
- **Rule**: Never use empty grey placeholder divs (`bg-slate-100`). 
- **Implementation**: Always use actual `next/image` components pointing to the project's Cloudinary links (or Unsplash placeholders if none exist) with a smooth hover scale effect (`group-hover:scale-105`).
