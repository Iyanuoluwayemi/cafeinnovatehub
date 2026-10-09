# Original User Request

## 2026-10-09T02:34:35Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview
> Requested team: Small, focused team

This is a single self-contained fix; keep it small and focused. Refactor the testimonial cards on the frontend so they have a uniform, shorter height, and look visually polished regardless of the varying length of the testimonial text.

Working directory: c:/Users/DELL/Files/UIUX/CIH Website
Integrity mode: development

## Requirements

### R1. Uniform Card Height
Ensure all testimonial cards rendered in the Home page marquee share a fixed, uniform height.

### R2. Text Truncation
Truncate long testimonial text using an ellipsis (e.g., applying CSS line clamping to show only 4-5 lines of text) so it never overflows the uniform container.

### R3. Premium UI Alignment
Ensure the refactored cards remain visually polished and responsive. They must not break the scrolling marquee and should retain their existing "bento-style" styling (gradients, border radius, shadow, etc.).

## Verification Resources

Verification will use an Agent-as-judge approach. The reviewing agent must visually inspect the rendered UI using browser tools or code analysis against this strict rubric:
1. Do all testimonial cards render at the exact same height?
2. Is long text appropriately clamped with an ellipsis?
3. Does the bento-box aesthetic remain intact without clipping icons or profile images?

## Acceptance Criteria

### Visual Structure
- [ ] All testimonial cards share the exact same height on both mobile and desktop viewports.
- [ ] Testimonial body text is truncated (line-clamped) and ends with an ellipsis if it exceeds the allocated space.
- [ ] The continuous scrolling marquee animation continues to function flawlessly without layout jumps.
