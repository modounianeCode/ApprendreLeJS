# Apprendre JavaScript 🟨

Une application web interactive (SPA React) pour apprendre JavaScript en français, leçon par leçon.

![stack](https://img.shields.io/badge/React_19-andamp%3B_Vite-61DAFB) 

## ✨ Contenu

- **13 modules, 33 leçons** : introduction, variables & types, opérateurs & coercition, conditions, boucles, fonctions, tableaux, objets, chaînes & templates, DOM & événements, asynchrone (promesses / async / await), classes & modules, et 3 mini-projets de synthèse.
- Chaque leçon contient **objectifs pédagogiques**, du **cours illustré**, des **pièges à éviter**, 3 **exercices progressifs** (Facile / Moyen / Avancé) dans un éditeur **Monaco**, un **récapitulatif** et un **quiz**.
- Les exercices s'exécutent dans un **bac à sable** (iframe) : le code est évalué et la sortie console est comparée au résultat attendu.
- **Progression sauvegardée** dans le navigateur (`localStorage`) : leçons terminées + quiz réussis.

## 🚀 Démarrage

```bash
npm install
npm run dev      # http://localhost:5173
```

Autres commandes :

```bash
npm run build    # build de production dans dist/ (copie dist/404.html pour le fallback SPA)
npm run preview  # prévisualise le build
npm run lint     # oxlint
```

## 🌍 Déploiement (GitHub Pages)

Le dépôt inclut un workflow GitHub Actions (`.github/workflows/deploy.yml`) qui construit le projet et publie `dist/` sur GitHub Pages à chaque push sur `main`.

Pour l'activer :

1. Poussez le code sur GitHub (branche `main`).
2. Dans les réglages du dépôt : **Settings → Pages → Source = GitHub Actions**.
3. Le site est ensuite disponible à `https://<utilisateur>.github.io/<repo>/`.

> Note : les ressources (polices Google Fonts, éditeur Monaco) sont chargées via CDN — une connexion Internet est nécessaire au bon rendu complet.

## 🧱 Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev)
- [React Router](https://reactrouter.com) (BrowserRouter)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) via `@monaco-editor/react`
- [Oxlint](https://oxc.rs)