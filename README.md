# ByteGen AI — Landing Page

Premium, dark-themed marketing site for ByteGen AI, built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The production build is written to `dist/` and can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, etc).

## Project structure

```
src/
  components/
    ui/               shared building blocks (GlowCard, SectionHeading, ParticleField, SignalDivider)
    Navbar.jsx         sticky, blurring nav with mobile menu
    Hero.jsx           headline, particle field, glowing blobs, animated grid
    TrustedBy.jsx       "built for startups, schools & modern businesses"
    About.jsx          AI First / Automation / Custom Software pillars
    Services.jsx       4 service categories with animated cards
    Industries.jsx     8 industry cards
    WhyUs.jsx          alternating animated timeline
    FutureProducts.jsx Project Atlas, SchoolOS AI, ByteGen CRM, ByteGen Vision
    Portfolio.jsx      current projects
    TechStack.jsx      infinite marquee of tools
    Roadmap.jsx        2026 → 2032+ company roadmap
    Founder.jsx        founder quote and vision
    Contact.jsx        contact form + social links
    Footer.jsx
  App.jsx
  main.jsx
  index.css            design tokens, glass utilities, signal-line signature motif
```

## Design system

- **Background:** `#050816`
- **Accents:** electric blue `#3B6BFF`, violet `#8B5CF6`, cyan `#22D3EE`
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/eyebrows/data)
- **Signature motif:** the "signal line" — a thin animated gradient trace used as a divider, node marker and hover border, echoing the idea of an engineered circuit/data path running through the page.

All animation respects `prefers-reduced-motion`, and interactive elements have visible focus states.
