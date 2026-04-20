# TravelSkills.io

Static landing page for [travelskills.io](https://travelskills.io) — the first open-source library of Claude Agent Skills for travel and tourism professionals.

## Stack

- Plain HTML/CSS — no framework, no build step
- PHP (`subscribe.php`) — newsletter signup via Brevo API
- Hosted on Hostinger
- Deployed via GitHub Actions on every push to `main`

## Structure

```
public_html/
├── index.html                          # EN landing page
├── fr/
│   ├── index.html                      # FR landing page
│   └── politique-de-confidentialite/
│       └── index.html                  # FR privacy policy
├── privacy/
│   └── index.html                      # EN privacy policy
├── style.css                           # Shared stylesheet (EN + FR)
├── subscribe.php                       # Brevo API handler
├── .htaccess
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

## Dev local

```bash
npx serve . --listen 8788
```

Then open [http://localhost:8788](http://localhost:8788) (EN) and [http://localhost:8788/fr/](http://localhost:8788/fr/) (FR).

## Deployment

Every push to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that syncs files to Hostinger via rsync over SSH.

**Required GitHub secrets:**

| Secret | Description |
|---|---|
| `SSH_PRIVATE_KEY` | Private key for Hostinger SSH access |
| `SSH_HOST` | Hostinger SSH hostname |
| `SSH_USER` | Hostinger SSH username |
| `SSH_PORT` | Hostinger SSH port |
| `SSH_TARGET` | Remote path on Hostinger (e.g. `/home/.../public_html/`) |

## License

AGPL v3
