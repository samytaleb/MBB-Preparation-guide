# Consulting Interview OS

Application web de préparation aux entretiens de conseil (McKinsey, Advancy…). SPA entièrement client-side — aucun serveur, aucune dépendance npm. Ouvrir `index.html` dans un navigateur suffit.

---

## Lancer l'application

```
Ouvrir index.html directement dans Chrome / Edge
```

Aucune installation requise. Aucune connexion internet requise (sauf chargement de la police Inter via Google Fonts).

---

## Structure des fichiers

```
index.html              Point d'entrée unique
styles.css              Thème dark, variables CSS, composants

app.js                  Logique SPA : routage, vues, état, rendu

data.js                 Données initiales : modules, drills, mental math, market sizing, exhibits
data-extended.js        Drills supplémentaires
data-courses.js         Bootstrap du tableau DATA.courses
data-courses-1.js       CAT-01 Fondamentaux + CAT-02 Structuration
data-courses-2.js       CAT-03 Profitabilité + CAT-04 à CAT-05
data-courses-3.js       CAT-06 à CAT-10 (Growth, M&A, Ops, Pricing, Communication)
data-courses-extra.js   CAT-00 Méthodologie + CAT-11 Stratégie + CAT-12 Business Fundamentals
data-courses-math.js    CAT-13 Mental Math & Quantitatif + CAT-14 Glossaire & Acronymes
data-drills-extra.js    Drills cases supplémentaires
data-drills-cf-adv-ai.js  Drills Corporate Finance, Advancy, IA
data-math-extra.js      Exercices mental math (lot 2)
data-math-extra2.js     Exercices mental math (lot 3, MM136–MM310, ~175 exos)
data-pricing-cases.js   8 cas de pricing avec corrections FR+EN
data-exhibits-svg.js    8 drills exhibit avec graphiques SVG inline
data-cases-extra.js     Cas market sizing supplémentaires
data-extra2-part1.js    Données complémentaires part 1
data-extra2-part2.js    Données complémentaires part 2
data-resources-extra.js Ressources supplémentaires
answers-patch.js        Patch corrections sur les drills existants

en-cat00-07-08.js       Traductions EN — CAT-00, 07, 08
en-cat01-02.js          Traductions EN — CAT-01, 02
en-cat03-04.js          Traductions EN — CAT-03, 04
en-cat05-06.js          Traductions EN — CAT-05, 06
en-drills.js            Traductions EN — drills principaux
en-extended-drills.js   Traductions EN — drills étendus

data/                   Assets statiques éventuels
```

---

## Sections de l'application

| Section | Description |
|---|---|
| **Dashboard** | Vue d'accueil avec progression et accès rapide |
| **Cours** | 14 catégories de fiches structurées (fondamentaux → types de cas → maths → glossaire) |
| **Mental Math** | ~300 exercices, filtrage par catégorie (%, marges, CAGR, market share…) |
| **Market Sizing** | Cas guidés avec corrections FR+EN |
| **Pricing Cases** | 8 cas de pricing (Floor / Ceiling / Contexte) avec corrections FR+EN |
| **Exhibit Analysis** | Drills d'analyse de graphiques avec charts SVG réels |
| **Ressources** | Liens et documents de référence |

---

## Architecture

Pattern SPA vanilla :

- `window.DATA` est un objet global peuplé séquentiellement par les fichiers `data-*.js` (chaque fichier est un IIFE).
- `app.js` lit `DATA` et génère le HTML via des fonctions `view*()`.
- Le routage est géré par `_state.view` + `renderView()`.
- Le bilinguisme est géré par `_lang` (`'fr'` | `'en'`) + la fonction `t(key)`.

### Ajouter des exercices mental math

```javascript
// Dans un nouveau fichier data-math-XXXX.js
(function() {
  var newExercises = [
    { id: 'MM999', cat: 'Percentages', q: '...', a: '...', hint: '...', q_en: '...', a_en: '...', hint_en: '...' }
  ];
  newExercises.forEach(function(e) { DATA.mentalMath.exercises.push(e); });
})();
```

### Ajouter une fiche de cours

Pousser dans `DATA.courses` via un IIFE, en suivant la structure :
```javascript
DATA.courses.push({
  id: 'CAT-XX', title: '...', icon: '...', color: '#hex', order: N,
  submodules: [{ id: '...', title: '...', fiches: [{ id: '...', title: '...', duration: '...', content: `...HTML...` }] }]
});
```

### Ajouter un drill exhibit avec graphique

Utiliser le champ `exhibitSVG` (pas `exhibit`) sur l'objet drill. Les fonctions SVG `barChart()`, `lineChart()`, `stackedBarChart()`, `waterfallChart()` sont définies dans `data-exhibits-svg.js`.

---

## Catégories mental math disponibles

Percentages · Margins · CAGR · Market Share · Break-even · Finance · Division · Multiplication · Pricing · Orders of magnitude · Operations · Mixed Advanced · Growth

---

## Checklist ajout d'un fichier de données

1. Créer le fichier `data-XXXX.js` avec un IIFE `(function(){ ... })()`
2. Ajouter `<script src="data-XXXX.js"></script>` dans `index.html` **avant** `app.js`
3. Vérifier la syntaxe : `node --check data-XXXX.js`
