# TravelSkills.io

Landing page for [travelskills.io](https://travelskills.io) — the first open-source
library of Claude Agent Skills for travel and tourism professionals.

## Stack

- **Next.js 14** (App Router, TypeScript) — EN at `/`, FR at `/fr/`
- **Tailwind CSS**, wired to the design system in [`design/`](design/) (single source of truth)
- **Geist / Geist Mono** self-hosted via `next/font` (`geist` package)
- Waitlist form → **Brevo** via the `/api/subscribe` route handler
- Deployed on **Vercel** (Git integration; every push to `main` ships)

## Design system

`design/` is the source of truth for everything visual. No design value is decided in
page code — it is consumed from the tokens (`tailwind.theme.json` for Tailwind,
`design-tokens.css` for raw CSS). If a value is missing, add it to `DESIGN.md` first,
then propagate. See `design/DESIGN.md` for the full contract (dark-only, gold used
functionally only, tonal elevation, geometric spacing scale).

## Local development

```bash
cp .env.example .env.local   # add your BREVO_API_KEY
npm install
npm run dev                  # http://localhost:3000  ·  /fr for French
```

## Environment variables

Set these in Vercel (Project → Settings → Environment Variables) and in `.env.local`
for local dev. `.env.local` is gitignored — the Brevo key must never be committed.

| Variable | Purpose | Default |
|---|---|---|
| `BREVO_API_KEY` | Brevo API key (required) | — |
| `BREVO_LIST_ID` | Waitlist list id | `5` |
| `BREVO_NOTIFICATION_TEMPLATE_ID` | Team notification template | `5` |
| `BREVO_NOTIFY_EMAIL` | Where lead alerts are sent | `nicolas@nfrancois.fr` |
| `BREVO_NOTIFY_NAME` | Recipient name for alerts | `Nicolas François` |

## Structure

```
app/
├── (en)/                 # English root layout (<html lang="en">) — served at /
│   ├── page.tsx          #   landing
│   ├── privacy/          #   /privacy/
│   └── legal/            #   /legal/
├── (fr)/                 # French root layout (<html lang="fr">)
│   └── fr/               #   served at /fr/ , /fr/politique-de-confidentialite/ , /fr/mentions-legales/
├── api/subscribe/        # Brevo handler (port of the old subscribe.php)
├── robots.ts             # generated /robots.txt
└── sitemap.ts            # generated /sitemap.xml
components/               # Landing, WaitlistForm, LegalLayout, RootHtml
lib/content.ts            # all EN + FR copy (real DOM text, SEO-critical)
design/                   # design system — source of truth
```

## License

MIT
