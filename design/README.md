# TravelSkills.io · Design System

Source of truth for the visual language of the TravelSkills.io platform. Dark surfaces, single-axis typographic hierarchy, champagne-gold functional accent. Status: alpha, v0.1.

This folder is the canonical design system. Everything that ships in production consumes one of these files.

## What's in here

| File | Format | Use it for |
|------|--------|------------|
| `DESIGN.md` | Google Labs `design.md` (YAML frontmatter + prose) | Source of truth. The spec lives here. |
| `tokens.json` | W3C DTCG (Design Token Format Module 2025.10) | Figma plugins, Style Dictionary, Penpot, any DTCG-aware tool. |
| `tailwind.theme.json` | Tailwind v3 `theme.extend` | Drop into `tailwind.config.js` → `theme.extend = require('./design/tailwind.theme.json').theme.extend`. |
| `design-tokens.css` | Plain CSS custom properties on `:root` | Vanilla CSS or any framework. Import once at the entry point. |
| `showcase.html` | Standalone HTML | Visual reference for designers, devs, PLs, partners. Open in any browser. |

## Quick start

For a Vite + Tailwind project:

```bash
# 1. Wire Tailwind
echo "module.exports = { ...require('./design/tailwind.theme.json') }" > tailwind.config.js

# 2. Import the CSS variables (optional, for non-Tailwind consumers)
echo "@import './design/design-tokens.css';" >> src/main.css
```

For a vanilla project:

```html
<link rel="stylesheet" href="./design/design-tokens.css">
```

Then consume tokens directly: `color: var(--color-primary)`, `font-size: var(--typography-body-lg-fontSize)`, etc.

## What you cannot do

- Override token values inline. If a value is missing, add it to `DESIGN.md` first, then propagate.
- Mix in icons from another set. The system uses Heroicons solid only, for function. Illustrative artwork is bespoke.
- Replace pixels with em or other relative units in spacing or radius. Typography is `rem`, the rest stays `px`.
- Use the design system tokens for content outside the platform (skills documentation, marketing assets) without checking with the design team first.

## Validation

The system passes Google Labs `design.md` lint with zero errors and zero warnings. To re-run after edits:

```bash
python3 scripts/lint-design.py  # (linter not committed yet, run manually if needed)
```

The 7 checks: `broken-ref`, `missing-primary`, `contrast-ratio` (WCAG AA), `orphaned-tokens`, `missing-sections`, `missing-typography`, `section-order`.

## Attributions

- Typography: **Geist** & **Geist Mono**, Vercel, under SIL Open Font License 1.1.
- Iconography: **Heroicons (solid)**, Tailwind Labs, under MIT License.

## Status & ownership

Alpha. The system is alive and will evolve as the platform takes shape. Owners: Nicolas François & Jérémy May.

For questions, open an issue or write to us. We reply.

---

Read this in French: [README.fr.md](./README.fr.md)
