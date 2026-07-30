---
version: alpha
name: TravelSkills.io
description: Design system for an open-source library of Claude Skills for travel and tourism professionals. One skill per profession, grounded in field interviews and ground-truth material.
meta:
  colorMode: dark
  fonts:
    source: google
colors:
  primary: "#FFFFFF"
  on-primary: "#0A0A0E"
  secondary: "#D0B982"
  on-secondary: "#0A0A0E"
  neutral: "#27272A"
  on-neutral: "#FAFAFA"
  surface: "#0A0A0E"
  on-surface: "#FFFFFF"
  on-surface-display: "#F0EDE7"
  on-surface-muted: "#9CA3AF"
  surface-container: "#191B24"
  surface-container-high: "#22242E"
  outline: "#2A2D38"
  inverse-surface: "#F0EDE7"
  on-inverse-surface: "#0A0A0E"
  success: "#10B981"
  on-success: "#0A0A0E"
  info: "#8B5CF6"
  on-info: "#0A0A0E"
  error: "#EF4444"
  on-error: "#0A0A0E"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 4.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  title-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.625rem
    letterSpacing: -0.005em
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5rem
  body-md:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.3125rem
  label-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1rem
    letterSpacing: 0.02em
  mono-md:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.25rem
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  button-destructive:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
  input:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  badge:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-info:
    backgroundColor: "{colors.info}"
    textColor: "{colors.on-info}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  tabs:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-sm}"
    padding: "8px 16px"
  tabs-active:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    padding: "8px 16px"
  progress:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: "4px"
---

## Overview

We are building TravelSkills.io, an open-source library of Claude Skills for travel and tourism professionals. The library publishes one skill per profession (travel planner, tourism office advisor, agency travel advisor, tour operator). Each skill is grounded in field interviews and ground-truth material rather than generic prompt engineering.

The audience splits between domain practitioners exploring concrete examples and developers integrating the skills into their own Claude workflows. Both interact with the platform mostly on desktop, in a content-reading or code-inspection register.

Personality: **technical, dense, operational, modern**. The system relies on dark surfaces, single-axis typographic hierarchy, and a reserved chromatic palette where every accent earns its place by function. The primary action color is a white pill (`colors.primary`), aligned with the operational tone of the brief. A champagne gold (`colors.secondary`) carries accent weight on secondary CTAs, focus states, link hover, and section-numbering eyebrows. It is the system's distinctive signature, used sparingly but functionally, never as decorative fill on body or destructive contexts.

Functional accents (`colors.success`, `colors.info`, `colors.error`) handle status and feedback signals: green for completed states, violet for inference and AI-related markers, red for error and destructive contexts. Warning is intentionally absent from the palette. Display and heading text uses a warm off-white (`colors.on-surface-display`) to soften vertical hierarchy against the cool dark surface, while body text stays pure white for maximum legibility at small sizes.

## Colors

The palette is dark, cool-toned, and reserved. Every token has one stable function.

- `colors.surface` (`#0A0A0E`): page background, the deepest layer.
- `colors.surface-container` (`#191B24`): cards, input fields, panels. Sits one tonal step above `surface`. The cool-bluish tint differentiates it from a flat near-black.
- `colors.surface-container-high` (`#22242E`): modals, popovers, overlays. Sits one tonal step above `surface-container`.
- `colors.primary` (`#FFFFFF`): pure white. Used for primary CTAs as a pill, active links, progress bar fill. Reserved, never used as decorative fill.
- `colors.on-primary` (`#0A0A0E`): text and icon color on primary surfaces.
- `colors.secondary` (`#D0B982`): champagne gold. The system's accent color, applied to secondary CTAs (filled gold pill), focus state outlines on form elements, link hover, section-numbering eyebrows, and distinctive badges. The signature color of the system, applied functionally rather than decoratively.
- `colors.on-secondary` (`#0A0A0E`): text on secondary fills.
- `colors.neutral` (`#27272A`): generic neutral surface for tags and badges with no semantic charge.
- `colors.on-neutral` (`#FAFAFA`): text on neutral surfaces.
- `colors.on-surface` (`#FFFFFF`): pure white body text on dark surface.
- `colors.on-surface-display` (`#F0EDE7`): warm off-white reserved for display, headline, and hero text. The chromatic warmth softens the typographic mass against the cool surface.
- `colors.on-surface-muted` (`#9CA3AF`): cool gray for meta, eyebrows, byline, label, and inactive states.
- `colors.outline` (`#2A2D38`): cool-tinted gray. Used sparingly for component borders that need affordance clarity (badge outline variant, modal frame, segmented controls). Inputs intentionally have no default border. Affordance comes from the `surface-container` tonal differential.
- `colors.inverse-surface` (`#F0EDE7`): warm cream, brand-aligned with `on-surface-display`. Used as the background of the Rules section to give the do/don't guide a distinctive editorial frame within the dark immersion.
- `colors.on-inverse-surface` (`#0A0A0E`): dark text on the cream Rules band. High contrast for legibility.
- `colors.success` (`#10B981`): green for success states and positive feedback.
- `colors.info` (`#8B5CF6`): violet for AI-related and inference status badges.
- `colors.error` (`#EF4444`): red for destructive actions, validation errors, and `Off Track` status. Never decorative.

Component `backgroundColor` / `textColor` pairs respect WCAG AA (≥ 4.5:1).

## Typography

The system uses two related families: **Geist** (sans-serif) for all reading and interface roles, **Geist Mono** for code, monospace metadata, and section-numbering eyebrows. The two-family system is aligned with the modern, tech-operational personality of the brief.

All sizes are expressed in `rem` so that user font-size preferences scale typography linearly. This satisfies WCAG 1.4.4 Resize Text without breaking layout.

- `typography.display` (4rem / 600): hero titles only. Used once per page maximum.
- `typography.headline-lg` (2.5rem / 600) and `headline-md` (1.5rem / 600): section and subsection titles.
- `typography.title-lg` (1.25rem / 600): card titles, dialog titles.
- `typography.body-lg` (1rem / 400): primary reading body, default paragraph register.
- `typography.body-md` (0.875rem / 400): secondary body, form fields, dense lists.
- `typography.label-sm` (0.75rem / 500, letter-spacing 0.02em): button labels, badge text, eyebrow microcopy.
- `typography.mono-md` (0.8125rem / 400, Geist Mono): code blocks, monospace metadata, section-numbering eyebrows (`01 ·`, `02 ·`).

The scale is tightened to 8 roles. No `body-sm`: text smaller than `body-md` is a `label`. No `headline-sm`: between `headline-md` and `title-lg`, prefer `title-lg`. Letter-spacing is negative on display and headline (Geist's optical correction at large sizes), neutral on body, slightly positive on label-sm.

## Layout

12-column desktop grid, gutters `spacing.lg` (16px), container max-width 1200px with `spacing.4xl` (64px) side padding.

- Vertical rhythm strictly aligned with the geometric scale `4–8–12–16–24–32–48–64–96–128` (`spacing.xs`/`sm`/`md`/`lg`/`xl`/`2xl`/`3xl`/`4xl`/`5xl`/`6xl`).
- Separation between major sections: `spacing.6xl` (128px). Generous, in keeping with the editorial-roomy register.
- Separation between figures within a section: `spacing.4xl` (64px).
- Intra-card padding: `spacing.xl` (24px).
- Density intentionally roomy. The content-to-whitespace ratio favors breathing space over information stacking, consistent with the editorial-product register.

## Elevation & Depth

Elevation is expressed through **tonal layering**, not ambient shadows. Containers separate by stepping through `surface` → `surface-container` → `surface-container-high`. This carries the operational personality without breaking the dark immersion.

- Page surface: `colors.surface`. Cards and inputs: `colors.surface-container`, sitting one tonal step above. Modals and popovers: `colors.surface-container-high`, sitting one tonal step above cards.
- Cards have no shadow by default. The tonal differential carries the separation.
- Modals use a soft drop shadow (`0 8px 32px rgba(0, 0, 0, 0.4)`) combined with a `backdrop-filter: blur(8px)` on the backdrop layer for visual depth without breaking the dark immersion.
- Hover states on interactive containers shift to `surface-container-high`. Never use shadow on hover.
- Transitions: `150ms ease-out` for hover, `250ms ease-in-out` for modal entry.

No solid borders on elevated containers. Separation is carried by tonal differential and, where needed, `colors.outline` on inputs (focus only), badges (outline variant), and modal frame.

## Shapes

The shape language is **pill on actions, generous on containers, tight on monospace surfaces**.

- Buttons (all variants): `rounded.full`. Pill shape, the canonical CTA primitive.
- Cards: `rounded.2xl` (24px). Generous radius, brief-licensed.
- Modals: `rounded.xl` (16px). Slightly less generous than cards to retain spatial weight.
- Inputs: `rounded.lg` (12px). Distinct from buttons to signal a different behavior (input vs action).
- Badges, tags, avatars: `rounded.full`. Propagates the pill primitive.
- Code blocks: `rounded.sm` (4px). Anti-propagation of the pill principle, since monospace alignment is broken by curved corners.

## Components

### Buttons and actions

`button-primary` is the principal-action style: pill shape, white background, near-black text. The canonical CTA of the system. `button-secondary` is the **gold accent CTA**: filled `colors.secondary` (champagne) with `colors.on-secondary` text, same pill shape and padding. Used for secondary actions that need visible accent, distinct from the white primary. `button-ghost` carries the same shape but uses `colors.on-surface-muted` text on a transparent background, for tertiary actions. `button-destructive` is strictly reserved for destructive actions and uses `colors.error` background.

Hover on `button-primary` reduces opacity to 0.9. Hover on `button-secondary` shifts background opacity to 0.85, retaining the gold tint. Hover on `button-ghost` shifts text to `colors.on-surface`. All hover transitions use `150ms ease-out`.

Focus state: `2px` outline in `colors.secondary` at `2px` offset from the element. The gold focus ring is the visible system signal of interactivity, applied uniformly across buttons, inputs, links, and other interactive controls. Never a background change. Never use `colors.primary` for focus, the white halo is too loud against the dark surface.

### Cards

`card` is the generic container. `colors.surface-container` background, `rounded.2xl` (24px) generous radius, `spacing.xl` (24px) intra-padding. No border, no shadow. Tonal differential carries the separation.

### Input

`input` uses `colors.surface-container` background to sit visibly against the page surface. The tonal differential is sufficient for affordance, no default border needed. `rounded.lg` (12px), less rounded than buttons to differentiate input from action. Focus state: `2px` glow in `colors.secondary` (gold), no harsh outline halo. The gold focus is consistent with the secondary-as-interaction-accent role across the system.

### Badges and tags

`badge` (neutral) carries a `colors.neutral` fill for status indicators with no semantic charge. `badge-success`, `badge-info`, `badge-error` carry their respective semantic fills. `tag` is the outline / muted variant: no fill, `colors.on-surface-muted` text, transparent background.

### Tabs

`tabs` uses `colors.on-surface-muted` text for inactive tabs and `colors.on-surface` for active. The active indicator is a `2px` underline in `colors.primary`. No pill, no fill. Minimal active treatment matches the operational register.

### Progress

`progress` is a linear track. `colors.surface-container-high` background, `colors.primary` filled portion, `4px` height, `rounded.sm`. Indeterminate states use a `1.4s ease-in-out` shimmer overlay when needed.

### Section numbering eyebrow

The article-list and case-study patterns carry a section-numbering eyebrow in the format `01 · Title`. The number and middle dot are rendered in `typography.mono-md` (Geist Mono) and `colors.secondary` (gold). One of the system's signature applications of the gold accent, alongside secondary CTAs, focus rings, and link hover.

## Iconography

Iconography is **functional only**. Icons reinforce the affordance of an action, the semantic of a status, or the wayfinding of a navigation. They never decorate, illustrate, or carry editorial meaning by themselves.

The system uses **Heroicons (solid)** by Tailwind Labs (MIT-licensed) as its primary icon set. Solid is preferred over outline for visual weight consistency with the operational register. Sizes follow the spacing scale: `spacing.lg` (16px) for badge inline icons, `spacing.xl` (24px) for buttons, topbar, and inline links, `spacing.2xl` (32px) for modal alerts.

Icons inherit text color via `fill: currentColor` and never carry their own color. Stroke-based custom icons are forbidden. The solid register is non-negotiable to preserve homogeneity.

When a context demands an **illustrative** image (hero illustrations, empty states, profession-specific symbols for skill cards), bespoke artwork is commissioned to match the subject. These illustrations live outside the icon system and follow their own brief.

## Do's and Don'ts

The 10 essential rules to guide future design work and AI-driven generation. Reduced from a longer audit to the principles that are most load-bearing for the system's identity and quality.

1. **Primary stays white, secondary stays gold.** Use `colors.primary` for the principal CTA (pill, white) and `colors.secondary` (champagne gold) for secondary CTAs, focus rings, link hover, and section-numbering eyebrows. Never invert the roles. Never use either as decorative fill on body content.
2. **Display and heading text uses warm cream.** Bind `typography.display`, `headline-lg`, `headline-md`, `title-lg` to `colors.on-surface-display` (`#F0EDE7`). Bind `body-lg`, `body-md`, `label-sm` to `colors.on-surface`. The chromatic split is functional, not optional.
3. **Focus is gold and outline-only.** All interactive controls use `2px` outline in `colors.secondary` at `2px` offset. Never replace focus with a background change, a shadow halo, or `colors.primary` (the white halo is too loud against the dark surface).
4. **Elevation is tonal, not shadowed.** Step through `surface` → `surface-container` → `surface-container-high` for layering. Cards use no shadow. The tonal differential carries the separation. Shadows are reserved for modals and overlays only.
5. **Inputs have no default border.** Affordance comes from the `surface-container` tonal differential alone. Borders appear only on focus state (gold glow) and on validation error.
6. **Pill for actions, generous for containers, tight for monospace.** `rounded.full` on buttons, badges, tags, avatars. `rounded.2xl` on cards. `rounded.xl` on modals. `rounded.lg` on inputs. `rounded.sm` on code blocks. Never apply `rounded.full` to inputs, modals, or cards.
7. **Errors are red, success is green, AI is violet, warning does not exist.** `colors.error` for destructive and validation only, never decorative. `colors.success` for completed states only, never primary actions. `colors.info` (violet) for AI/inference markers. There is no warning token. Ambiguous states resolve to neutral or info.
8. **Spacing only from the geometric scale.** `4–8–12–16–24–32–48–64–96–128`. `spacing.6xl` (128px) between major sections, `spacing.4xl` (64px) between figures within a section, `spacing.xl` (24px) intra-card. Never invent off-grid values like 20px, 36px, or 56px.
9. **Geist Mono is reserved.** Use `typography.mono-md` only for code blocks, monospace metadata, and section-numbering eyebrows (`01 ·`). Never use it for body text, button labels, or headings.
10. **Champagne gold appears, never decorates.** `colors.secondary` is functional only: secondary CTA fill, focus rings, link hover, eyebrow numbering, the Rules-band Do tag. Never use it as a decorative tint on cards, dividers, body text, or background fills.

## Responsive Behavior

- **Mobile (< 600px)**: single column, 16px side margins, gutters `spacing.md` (12px). `typography.display` rendered at 2.5rem (visual override, not a new token). `typography.headline-lg` at 1.75rem. Cards full-width. Progress bars span full content width. Tabs become horizontally scrollable on overflow.
- **Tablet (600–1024px)**: 8-column grid, container max-width 720px centered, side margins fluid. `typography.display` at 3.25rem. Cards in single or two-column grid depending on content density.
- **Desktop (≥ 1024px)**: 12-column grid, container max-width 1200px centered, side padding `spacing.4xl` (64px). Full typography scale. Major-section spacing at `spacing.6xl` (128px), the editorial-roomy default.
- **Densities**: no compact mode. If a dense view emerges (admin table with 100+ rows), prefer a `list-item-dense` variant over reducing global `spacing`. The roomy register is part of the brand register, not a default to compress.
