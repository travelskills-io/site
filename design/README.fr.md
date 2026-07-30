# TravelSkills.io · Design System

Référence du langage visuel de la plateforme TravelSkills.io. Surfaces sombres, hiérarchie typographique sur un seul axe, accent fonctionnel or champagne. Statut : alpha, v0.1.

Ce dossier est la source de vérité du design system. Tout ce qui part en production consomme un de ces fichiers.

## Ce qu'il y a dedans

| Fichier | Format | Usage |
|---------|--------|-------|
| `DESIGN.md` | Google Labs `design.md` (frontmatter YAML + prose) | Source de vérité. La spec vit ici. |
| `tokens.json` | W3C DTCG (Design Token Format Module 2025.10) | Plugins Figma, Style Dictionary, Penpot, tout outil compatible DTCG. |
| `tailwind.theme.json` | Tailwind v3 `theme.extend` | À déposer dans `tailwind.config.js` → `theme.extend = require('./design/tailwind.theme.json').theme.extend`. |
| `design-tokens.css` | Variables CSS custom properties sur `:root` | CSS vanilla ou n'importe quel framework. Un import unique au point d'entrée. |
| `showcase.html` | HTML standalone | Référence visuelle pour designers, devs, PL, partenaires. S'ouvre dans n'importe quel navigateur. |

## Démarrage rapide

Pour un projet Vite + Tailwind :

```bash
# 1. Câbler Tailwind
echo "module.exports = { ...require('./design/tailwind.theme.json') }" > tailwind.config.js

# 2. Importer les variables CSS (optionnel, pour les consommateurs non Tailwind)
echo "@import './design/design-tokens.css';" >> src/main.css
```

Pour un projet vanilla :

```html
<link rel="stylesheet" href="./design/design-tokens.css">
```

Ensuite vous consommez les tokens directement : `color: var(--color-primary)`, `font-size: var(--typography-body-lg-fontSize)`, etc.

## Ce qui n'est pas autorisé

- Surcharger une valeur de token inline. Si une valeur manque, ajoutez-la d'abord dans `DESIGN.md`, puis propagez.
- Mélanger des icônes d'un autre set. Le système utilise Heroicons solid uniquement, pour la fonction. Les visuels illustratifs sont sur-mesure.
- Passer en em ou autre unité relative pour les espaces ou rayons. La typographie est en `rem`, le reste reste en `px`.
- Réutiliser les tokens du design system pour du contenu hors plateforme (documentation des skills, supports marketing) sans vérifier avec l'équipe design.

## Validation

Le système passe le lint Google Labs `design.md` avec zéro erreur et zéro avertissement. Pour relancer après une édition :

```bash
python3 scripts/lint-design.py  # (linter non committé pour le moment, à lancer manuellement si besoin)
```

Les 7 contrôles : `broken-ref`, `missing-primary`, `contrast-ratio` (WCAG AA), `orphaned-tokens`, `missing-sections`, `missing-typography`, `section-order`.

## Attributions

- Typographie : **Geist** et **Geist Mono**, Vercel, sous SIL Open Font License 1.1.
- Iconographie : **Heroicons (solid)**, Tailwind Labs, sous licence MIT.

## Statut & responsables

Alpha. Le système est vivant, il évoluera à mesure que la plateforme prend forme. Responsables : Nicolas François et Jérémy May.

Pour toute question, ouvrez une issue ou écrivez-nous. On répond.

---

Read this in English: [README.md](./README.md)
