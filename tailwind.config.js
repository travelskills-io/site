/**
 * Tailwind configuration.
 * The design system in ./design is the single source of truth. Colors, type
 * scale, radii and spacing are consumed verbatim from design/tailwind.theme.json.
 * The ONLY local override is fontFamily, rebound to the next/font CSS variables
 * (--font-geist-sans / --font-geist-mono) so Geist is self-hosted via next/font.
 * No design value is decided here; if one is missing, add it to DESIGN.md first.
 */
const dsTheme = require('./design/tailwind.theme.json').theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Breakpoints aligned with the design system responsive tiers:
    // base = mobile (<600), sm = tablet (>=600), lg = desktop (>=1024).
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      ...dsTheme.extend,
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        hover: 'ease-out',
      },
    },
  },
  plugins: [],
};
