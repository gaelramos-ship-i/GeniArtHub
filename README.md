# GeniArtHub

GeniArtHub est une boutique en ligne de créations artistiques inspirées par l'intelligence artificielle. Le projet combine une vitrine e-commerce élégante côté front et une API backend permettant de gérer les produits et les commandes.

## Présentation

Le site met en avant des œuvres numériques à la fois abstraites, mystiques et visuellement riches, avec une expérience de navigation pensée pour présenter les œuvres de manière immersive :

- page d'accueil avec galerie de produits
- fiche produit détaillée avec variantes et prix
- panier d'achat
- API REST pour récupérer les produits et traiter les commandes

## Stack technique

### Frontend
- HTML5
- CSS3
- JavaScript vanilla
- Interface statique dans le dossier `front/`

### Backend
- Node.js
- Express
- API REST dans le dossier `back/`

## Structure du projet

```text
GeniArtHub/
├── back/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── front/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── cart.html
│   ├── index.html
│   └── product.html
├── .gitignore
└── README.md
```

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- Node.js (version 14 ou supérieure recommandée)
- npm

## Installation

1. Clonez le dépôt :

```bash
git clone <url-du-repo>
cd GeniArtHub
```

2. Installez les dépendances du backend :

```bash
cd back
npm install
```

## Démarrage

### Lancer le serveur backend

```bash
cd back
node server.js
```

Le serveur démarre par défaut sur le port `3000`.

### Ouvrir le frontend

Ouvrez le fichier suivant dans votre navigateur :

```text
front/index.html
```

Vous pouvez aussi servir le dossier `front` via un petit serveur local si vous préférez, mais le projet est conçu pour fonctionner comme une page statique simple.

## API

Le backend expose des routes de type REST pour gérer les produits :

- `GET /api/products` : liste des produits
- `GET /api/products/:id` : produit selon son identifiant
- `POST /api/products/order` : envoi d'une commande

## Fonctionnalités principales

- Catalogue d'œuvres d'art génératives
- Affichage des détails d'un produit
- Gestion des déclinaisons (tailles et prix)
- Ajout au panier côté client
- API backend prête à être étendue

## Remarques

- Le projet est actuellement structuré comme une démonstration e-commerce front/back légère.
- Les images et données produits sont intégrées dans le projet et peuvent être enrichies ou remplacées selon les besoins.
- Le front utilise en pratique des données d'art en ligne et de produits mis à disposition par l'API, ce qui facilite la personnalisation ou le déploiement.

## Auteur

Gaël Ramos - Projet de formation DWWM
