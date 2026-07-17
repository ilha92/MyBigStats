# MyBigStats

Projet en HTML, CSS et TypeScript et Javascript.

## Lancer le projet

Ouvrir `index.html` dans un navigateur.

## Important pour TypeScript

Le vrai code source est dans le dossier `ts/`.

Le dossier `js/` contient le JavaScript genere a partir du TypeScript. Il est necessaire car le navigateur ne lance pas directement les fichiers `.ts`.

## Fichiers principaux

- `index.html` : structure de la page
- `style.css` : style simple
- `ts/types.ts` : interfaces et types
- `ts/api.ts` : appels API
- `ts/data.ts` : donnees et fonctions utiles
- `ts/sports.ts` : accueil, sports et statistiques
- `ts/athletes.ts` : recherche et filtres
- `ts/rencontres.ts` : historique
- `ts/comparateur.ts` : tableau et camembert
- `ts/app.ts` : lancement de l'application

## Fonctionnalites faites

- page d'accueil avec evenements
- navigation par sport
- onglets stats, historique et athletes
- recherche d'athlete
- filtre par position ou categorie
- comparateur entre deux athletes
- tableau de comparaison
- camembert affiche avec un bouton
- message d'erreur si l'API ne repond pas
