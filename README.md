# Amikone — Site web officiel

Site web officiel d'**Amikone**, le client open-source d'AmikOne.
Une rencontre libre, transparente et décentralisée.

Construit avec [Astro](https://astro.build/) et [Tailwind CSS v4](https://tailwindcss.com/).
Le thème visuel reprend le design system « Dark Premium Glassmorphism » de l'application Flutter.

## Fonctionnalités

- **Page d'accueil** : présentation du projet, fonctionnalités clés, étapes d'utilisation, téléchargement (App Store / Google Play)
- **Blog** : articles au format Markdown, tags, temps de lecture, flux RSS
- **Page À propos** : vision, stack technique, comment contribuer
- **SEO / Open Graph** : métadonnées, image de partage, sitemap
- **Déploiement automatique** sur GitHub Pages via GitHub Actions

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:4321](http://localhost:4321).

## Commandes

| Commande         | Action                                     |
| ---------------- | ------------------------------------------ |
| `npm run dev`    | Serveur de développement (port 4321)      |
| `npm run build`  | Build de production dans `./dist`          |
| `npm run preview`| Prévisualisation locale du build           |

## Structure

```text
├── .github/workflows/deploy.yml   # Déploiement GitHub Pages
├── public/                         # Assets statiques (favicon, og-default.png)
├── src/
│   ├── components/                 # Header, Footer, BlogCard, PhoneMockup…
│   ├── content/
│   │   └── blog/                   # Articles (Markdown)
│   ├── layouts/                    # BlogPost.astro
│   ├── pages/                      # index, blog, about, 404, rss.xml.js
│   └── styles/global.css           # Design system Glassmorphism
├── astro.config.mjs
└── package.json
```

## Déploiement

Le site se déploie automatiquement sur **GitHub Pages** à chaque push sur la branche `main`.
URL : <https://amikone.github.io/ampheria-web/>

### Configuration requise (dépôt GitHub)

1. **Settings → Pages → Source** : choisir **GitHub Actions**.
2. Rien d'autre : le workflow `.github/workflows/deploy.yml` gère le build et le déploiement.

## Contribution

Le site est lui aussi open-source : [github.com/amikone/ampheria-web](https://github.com/amikone/ampheria-web).
Proposez des articles, signalez des coquilles ou suggérez des améliorations.

## Licence

Projet communautaire AmikOne — développé pour explorer une rencontre plus libre et plus transparente.
