# Green Is The New Glam — GG

Site statique mobile-first du magazine prospectif **Green Is The New Glam — GG**.

## Arborescence

```text
green-is-the-new-glam-site/
├── index.html
├── styles.css
├── script.js
├── README.md
├── CNAME.example
└── assets/
    └── images/
        ├── image1.png
        ├── image2.png
        └── ... image14.png
```

## Lancer le site en local

Aucun build n'est nécessaire. Ouvrez directement `index.html`, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrez `http://localhost:8000`.

## Déployer sur GitHub Pages

1. Créez un nouveau repository GitHub, par exemple `green-is-the-new-glam`.
2. Déposez tout le contenu de ce dossier à la racine du repository.
3. Dans GitHub : **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main` et le dossier `/ (root)`.
6. Enregistrez. Le site sera publié quelques instants plus tard.

Le projet est entièrement statique : aucun backend, aucune base de données et aucune étape de compilation ne sont nécessaires.

## Connecter plus tard `greenisthenewglam.fr`

1. Achetez ou configurez le domaine chez votre registrar.
2. Dans GitHub Pages, renseignez `greenisthenewglam.fr` dans **Custom domain**.
3. Créez à la racine du repository un fichier `CNAME` contenant uniquement :

```text
greenisthenewglam.fr
```

4. Chez le registrar, configurez les enregistrements DNS demandés par GitHub Pages.
5. Une fois la propagation terminée, activez **Enforce HTTPS**.

Le fichier `CNAME.example` est fourni comme modèle, mais aucun domaine n'est activé par défaut.

## Structure technique

- `index.html` : tout le contenu éditorial, dans l'ordre du magazine.
- `styles.css` : direction artistique, palette GG / AA / SS / LL / CC, responsive et mobile-first.
- `script.js` : animation d'ouverture GG, navigation active, apparitions au scroll, parallaxe léger et agrandissement des photos.
- `assets/images/` : images extraites du document source.

## Checklist

- [x] Ouverture : GG → GREEN IS THE NEW GLAM → Une Camille Etienne.
- [x] Une accessible à tout moment via la navigation.
- [x] Navigation fixe mobile : GG / AA / SS / LL / CC.
- [x] Palette dédiée à chaque rubrique.
- [x] Typographie principale Montserrat ExtraBold en capitales pour l'identité éditoriale.
- [x] Lecture verticale et mobile-first.
- [x] Images immersives, lazy-loading hors Une et lightbox au clic.
- [x] Animations discrètes au scroll.
- [x] Effet parallaxe léger.
- [x] Fonctionnement sans backend.
- [x] Compatible GitHub Pages.
- [x] Structure prête pour un domaine personnalisé.
