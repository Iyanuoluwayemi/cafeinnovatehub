# Cafe Innovate Hub (CIH) Website

A modern [Next.js](https://nextjs.org) App Router application tailored for **Cafe Innovate Hub**, built with TypeScript, Tailwind CSS, and optimized Google Fonts.

---

## Brand Identity & Design System

### 🎨 Brand Color Palette

| Token Name | Hex Code | Utility Class (Background) | Utility Class (Text) | Description |
| :--- | :--- | :--- | :--- | :--- |
| **`cihBlue`** | `#0A2D66` | `bg-cihBlue` | `text-cihBlue` | Primary Brand Blue |
| **`cihBlueDark`** | `#071f47` | `bg-cihBlueDark` | `text-cihBlueDark` | Deep Contrast Dark Blue |
| **`cihLightBlue`** | `#53ACFF` | `bg-cihLightBlue` | `text-cihLightBlue` | Vibrant Accent Sky Blue |
| **`cihYellow`** | `#FFEA00` | `bg-cihYellow` | `text-cihYellow` | High-energy Action Yellow |
| **`cihYellowHover`** | `#FFB703` | `bg-cihYellowHover` | `text-cihYellowHover` | Interactive Warm Amber/Gold Hover |

Both camelCase (`bg-cihBlue`) and kebab-case (`bg-cih-blue`) variants are supported through Tailwind theme variables.

### ✍️ Typography

- **Headings (`h1` - `h6`, `.font-heading`)**: `Bricolage Grotesque` (via `next/font/google`, CSS variable `--font-bricolage`)
- **Body Text (`body`, `.font-sans`, `.font-body`)**: `Plus Jakarta Sans` (via `next/font/google`, CSS variable `--font-plus-jakarta`)

---

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

- `npm run dev` — Starts the Turbopack Next.js development server
- `npm run build` — Builds the application for production with Turbopack & TypeScript checks
- `npm run start` — Starts the production server
- `npm run lint` — Runs ESLint checks across the codebase

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Tailwind v4 import & CIH @theme variables
│   │   ├── layout.tsx          # Root layout with fonts & Navbar/Footer
│   │   └── page.tsx            # CIH showcase home page
│   └── components/
│       └── layout/
│           ├── Navbar.tsx      # Sticky brand navigation
│           └── Footer.tsx      # Branded footer with contact & quick links
├── package.json
├── tsconfig.json
└── next.config.ts
```
