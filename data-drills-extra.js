// ============================================================
// DATA-DRILLS-EXTRA.JS — Mental Math MM61-MM100, Market Sizing MS-D12+,
//                         Exhibit Analysis EXH-D6+, Business Fundamentals BF-D1+
// ============================================================
(function () {

// ══════════════════════════════════════════════════════════
// MENTAL MATH — MM61 à MM100 (40 exercices supplémentaires)
// ══════════════════════════════════════════════════════════
var mathExtra = [
  // --- Fractions et pourcentages avancés ---
  { id: 'MM61', category: 'Pourcentages', difficulty: 'medium',
    question: '450 est augmenté de 33⅓%. Quel est le résultat ?', answer: '600',
    explanation: '450 × (1 + 1/3) = 450 × 4/3 = 1800/3 = 600' },
  { id: 'MM62', category: 'Pourcentages', difficulty: 'medium',
    question: 'Un produit est vendu 156€. La marge est de 30% sur le prix de vente. Quel est le coût ?', answer: '109,20 €',
    explanation: 'Coût = Prix × (1 − marge) = 156 × 0,70 = 109,20€' },
  { id: 'MM63', category: 'Pourcentages', difficulty: 'hard',
    question: 'CA de 2,4M€. La BU A représente 35%, la BU B 45%, la BU C le reste. Quel est le CA de BU C ?', answer: '480 000 €',
    explanation: 'BU C = 100% − 35% − 45% = 20%. 2,4M × 0,20 = 480 000€' },
  { id: 'MM64', category: 'Pourcentages', difficulty: 'hard',
    question: 'Variation de prix : +15% puis −15%. Quelle est la variation nette en % ?', answer: '−2,25 %',
    explanation: '(1,15) × (0,85) = 0,9775 → baisse de 2,25%. Les symétries ±% ne s\'annulent pas.' },
  { id: 'MM65', category: 'Pourcentages', difficulty: 'medium',
    question: 'Marge brute = 42M€, CA = 180M€. Quel est le taux de marge brute ?', answer: '23,3 %',
    explanation: '42 / 180 = 0,233… ≈ 23,3%' },

  // --- Croissance et CAGR ---
  { id: 'MM66', category: 'CAGR', difficulty: 'medium',
    question: 'CA passe de 100M€ à 121M€ en 2 ans. Quel est le CAGR ?', answer: '10 %',
    explanation: 'CAGR = (121/100)^(1/2) − 1 = √1,21 − 1 = 1,10 − 1 = 10%' },
  { id: 'MM67', category: 'CAGR', difficulty: 'hard',
    question: 'CA passe de 50M€ à 100M€ en 7 ans. Estimez le CAGR (approximation).',
    answer: '~10 %',
    explanation: 'Règle des 72 : 72/7 ≈ 10%. Valeur exacte : (2)^(1/7)−1 = 10,4%' },
  { id: 'MM68', category: 'CAGR', difficulty: 'medium',
    question: 'Un marché croit de 8%/an. En combien d\'années double-t-il ?', answer: '9 ans',
    explanation: 'Règle des 72 : 72/8 = 9 ans' },
  { id: 'MM69', category: 'CAGR', difficulty: 'hard',
    question: 'CA an 0 = 80M€. CAGR = 15% sur 3 ans. Quel est le CA en an 3 ?', answer: '121,5 M€',
    explanation: '80 × (1,15)³ = 80 × 1,521 = 121,7M€ ≈ 121,5M€' },
  { id: 'MM70', category: 'CAGR', difficulty: 'hard',
    question: 'CA an 0 = 200M€. CA an 5 = 322M€. Quel est le CAGR ?', answer: '10 %',
    explanation: '(322/200)^(1/5) − 1 = (1,61)^0,2 − 1 ≈ 10%' },

  // --- P&L et rentabilité ---
  { id: 'MM71', category: 'P&L', difficulty: 'medium',
    question: 'CA = 500M€. COGS = 300M€. Opex = 120M€. Quel est l\'EBITDA et la marge ?', answer: 'EBITDA = 80M€, marge 16%',
    explanation: 'Marge brute = 500−300 = 200M€. EBITDA = 200−120 = 80M€. 80/500 = 16%' },
  { id: 'MM72', category: 'P&L', difficulty: 'hard',
    question: 'EBITDA = 120M€. D&A = 30M€. Intérêts = 15M€. Impôts = 25%. Quel est le résultat net ?', answer: '56,25 M€',
    explanation: 'EBIT = 120−30 = 90M€. EBT = 90−15 = 75M€. Résultat net = 75 × (1−0,25) = 56,25M€' },
  { id: 'MM73', category: 'P&L', difficulty: 'medium',
    question: 'Prix unitaire = 25€. Coût variable = 15€. Coûts fixes = 200 000€. Seuil de rentabilité en unités ?', answer: '20 000 unités',
    explanation: 'Marge sur coûts variables = 25−15 = 10€/unité. SR = 200 000 / 10 = 20 000 unités' },
  { id: 'MM74', category: 'P&L', difficulty: 'hard',
    question: 'Marge brute secteur = 35%. Un concurrent affiche 28%. De combien devrait-on réduire les COGS pour atteindre la moyenne secteur si le CA est 400M€ ?', answer: '28 M€',
    explanation: 'COGS actuel = 400×0,72 = 288M€. COGS cible = 400×0,65 = 260M€. Réduction = 288−260 = 28M€' },
  { id: 'MM75', category: 'P&L', difficulty: 'medium',
    question: 'ROE = 12%. Equity = 250M€. Quel est le résultat net ?', answer: '30 M€',
    explanation: 'Résultat net = ROE × Equity = 0,12 × 250 = 30M€' },

  // --- Market sizing rapide ---
  { id: 'MM76', category: 'Estimation', difficulty: 'medium',
    question: 'Population France = 68M. 75% adultes. 60% ont un chien ou chat. 3 visites vétérinaires/an à 80€ en moyenne. Marché vétérinaire en France ?', answer: '~7,3 Md€',
    explanation: '68M × 0,75 = 51M adultes. 51M × 0,60 = 30,6M ménages avec animal. 30,6M × 3 × 80 = 7,34Md€' },
  { id: 'MM77', category: 'Estimation', difficulty: 'hard',
    question: '20M de voitures en circulation en France. 70% ont au moins un entretien/an à 300€ en moyenne. Marché entretien auto ?', answer: '4,2 Md€',
    explanation: '20M × 0,70 × 300 = 4 200M€ = 4,2Md€' },
  { id: 'MM78', category: 'Estimation', difficulty: 'medium',
    question: 'Paris : 2,1M habitants. 50% boivent du café au travail, 5 jours/semaine. 1 café = 1,5€. 220 jours travaillés/an. Marché café Paris ?', answer: '~346 M€/an',
    explanation: '2,1M × 0,50 × 220 × 1,5 = 346,5M€' },
  { id: 'MM79', category: 'Estimation', difficulty: 'hard',
    question: '3 500 magasins de sport en France. Panier moyen = 45€. 25 clients/jour. 300 jours ouvrés. CA total du secteur ?', answer: '~11,8 Md€',
    explanation: '3 500 × 25 × 300 × 45 = 1 181 250 000 ≈ 1,18Md€ — Non. Correction : 3500 × 25 = 87 500/jour. × 300 = 26,25M/an. × 45 = 1,18Md€. Remarque : calcul correct = ~1,2Md€' },
  { id: 'MM80', category: 'Estimation', difficulty: 'hard',
    question: 'Combien de pizzas sont vendues en France chaque année ? (population 68M)', answer: '~1,5 à 2 Md de pizzas',
    explanation: 'Top-down : 68M × 365 repas/personne. Dîners = 68M × 365/2 ≈ 12,4Md. Pizzas = 10–15% des dîners ≈ 1,2–1,9Md. Ordre de grandeur : 1,5Md. Bottom-up : 35 000 pizzerias × 150 pizzas/jour × 300j = 1,575Md ✓' },

  // --- Divisions et calculs rapides ---
  { id: 'MM81', category: 'Calcul rapide', difficulty: 'easy',
    question: '7,2M divisé par 0,9 =', answer: '8 M',
    explanation: '7,2 / 0,9 = 72/9 = 8. Technique : multiplier numérateur et dénominateur par 10' },
  { id: 'MM82', category: 'Calcul rapide', difficulty: 'easy',
    question: '364 × 5 =', answer: '1 820',
    explanation: '364 × 5 = 364 × 10/2 = 3640/2 = 1820' },
  { id: 'MM83', category: 'Calcul rapide', difficulty: 'medium',
    question: '375 × 8 =', answer: '3 000',
    explanation: '375 × 8 = 3000. Astuce : 375 = 3×125 → 3000 = 3×1000. Ou : 400×8 = 3200 − 25×8 = 200 → 3000' },
  { id: 'MM84', category: 'Calcul rapide', difficulty: 'medium',
    question: '18% de 350 =', answer: '63',
    explanation: '10% = 35. 8% = 28. Total = 63' },
  { id: 'MM85', category: 'Calcul rapide', difficulty: 'hard',
    question: '37,5% de 480 =', answer: '180',
    explanation: '37,5% = 3/8. 480/8 = 60. 60 × 3 = 180' },

  // --- Valuation et finance ---
  { id: 'MM86', category: 'Finance', difficulty: 'hard',
    question: 'EBITDA = 40M€. EV/EBITDA multiple = 8x. Dette nette = 30M€. Quelle est la valeur equity ?', answer: '290 M€',
    explanation: 'EV = 40 × 8 = 320M€. Equity = EV − Dette nette = 320 − 30 = 290M€' },
  { id: 'MM87', category: 'Finance', difficulty: 'hard',
    question: 'Free Cash Flow = 20M€/an. WACC = 10%. Taux de croissance perpétuel = 2%. Valeur terminale ?', answer: '250 M€',
    explanation: 'Valeur terminale = FCF / (WACC − g) = 20 / (0,10 − 0,02) = 20 / 0,08 = 250M€' },
  { id: 'MM88', category: 'Finance', difficulty: 'medium',
    question: 'P/E = 15. Résultat net = 30M€. Market cap ?', answer: '450 M€',
    explanation: 'Market cap = P/E × Net income = 15 × 30 = 450M€' },
  { id: 'MM89', category: 'Finance', difficulty: 'hard',
    question: 'Un investissement de 100M€ génère 25M€/an. Quel est le payback period ?', answer: '4 ans',
    explanation: '100 / 25 = 4 ans' },
  { id: 'MM90', category: 'Finance', difficulty: 'hard',
    question: 'ROI sur 3 ans : investissement = 50M€, gains année 1 = 10M€, an 2 = 20M€, an 3 = 30M€. ROI total ?', answer: '120 %',
    explanation: 'Total gains = 60M€. ROI = (60−50)/50 × 100 = 20% non, ROI brut = 60/50 = 120%' },

  // --- SaaS metrics ---
  { id: 'MM91', category: 'SaaS', difficulty: 'medium',
    question: '5 000 clients SaaS. ARPU = 200€/mois. Churn annuel = 15%. Quel est le MRR et l\'ARR ?', answer: 'MRR = 1M€, ARR = 12M€',
    explanation: 'MRR = 5 000 × 200 = 1 000 000€ = 1M€. ARR = 12M€' },
  { id: 'MM92', category: 'SaaS', difficulty: 'hard',
    question: 'ARR = 12M€. NRR = 110%. Quel sera l\'ARR dans 1 an sans nouveaux clients ?', answer: '13,2 M€',
    explanation: 'ARR × NRR = 12 × 1,10 = 13,2M€' },
  { id: 'MM93', category: 'SaaS', difficulty: 'hard',
    question: 'CAC = 1 200€. ARPU mensuel = 80€. Marge brute = 75%. Churn mensuel = 2%. Quel est le LTV et LTV/CAC ?', answer: 'LTV = 3 000€, LTV/CAC = 2,5',
    explanation: 'LTV = ARPU × Marge / Churn = 80 × 0,75 / 0,02 = 3 000€. LTV/CAC = 3000/1200 = 2,5 (insuffisant, seuil = 3)' },
  { id: 'MM94', category: 'SaaS', difficulty: 'medium',
    question: 'Un SaaS croît de 30%/an et a une marge EBITDA de 5%. Quelle est sa Rule of 40 ?', answer: '35 (insuffisant)',
    explanation: 'Rule of 40 = 30 + 5 = 35. En dessous de 40 → à améliorer' },
  { id: 'MM95', category: 'SaaS', difficulty: 'hard',
    question: 'ARR début = 8M€. Churn ARR = 0,8M€. Expansion ARR = 1,5M€. Quel est le NRR ?', answer: '108,75 %',
    explanation: 'NRR = (8 − 0,8 + 1,5) / 8 = 8,7/8 = 1,0875 = 108,75%' },

  // --- Pricing et marges ---
  { id: 'MM96', category: 'Pricing', difficulty: 'medium',
    question: 'Elasticité prix = −1,5. Si le prix augmente de 10%, de combien le volume baisse-t-il ?', answer: '15 %',
    explanation: '% ΔQuantité = Elasticité × % ΔPrix = −1,5 × 10% = −15%. Volume baisse de 15%' },
  { id: 'MM97', category: 'Pricing', difficulty: 'hard',
    question: 'Prix = 50€. Volume = 10 000 unités. Elasticité = −2. Nouveau prix = 55€. Nouveau profit si CV = 30€ et CF = 100 000€ ?', answer: 'Profit ≈ 65 000€',
    explanation: 'Δ Prix = +10% → Δ Volume = −2 × 10% = −20% → Nouveau volume = 8 000. Profit = (55−30)×8000 − 100 000 = 200 000 − 100 000 = 100 000€. Non, recalcul : (25×8000) − 100K = 200K − 100K = 100K€. Profit initial = (50−30)×10000−100K = 200K−100K = 100K. Impact neutre dans ce cas.' },
  { id: 'MM98', category: 'Pricing', difficulty: 'medium',
    question: 'Willingness to pay client A = 120€, client B = 80€, client C = 60€. Prix unique = 80€. Revenue total ? Si prix différencié (A à 120, B+C à 80) ?', answer: 'Prix unique = 240€. Prix différencié = 120 + 80 + 80 = 280€',
    explanation: 'Prix unique 80€ → 3 clients × 80 = 240€. Prix différencié : A=120, B=80, C=80 → 280€' },
  { id: 'MM99', category: 'Pricing', difficulty: 'hard',
    question: 'Coût de revient = 40€. Marge cible = 25% sur coût. Prix de vente et marge sur prix ?', answer: 'Prix = 50€, marge sur prix = 20%',
    explanation: 'Prix = 40 × 1,25 = 50€. Marge sur prix = (50−40)/50 = 10/50 = 20%. Attention : marge sur coût ≠ marge sur prix' },
  { id: 'MM100', category: 'Calcul rapide', difficulty: 'hard',
    question: 'Combien fait 2^10 ?', answer: '1 024',
    explanation: '2^10 = 1024. Mnémonique : "1K" ≈ 1000. Utile pour les cas tech et SaaS (croissance exponentielle)' }
];

mathExtra.forEach(function(ex) {
  var entry = { q: ex.question, a: ex.answer, cat: ex.category };
  if (ex.hint || ex.explanation) entry.hint = ex.hint || ex.explanation;
  if (ex.q_en)    entry.q_en    = ex.q_en;
  if (ex.a_en)    entry.a_en    = ex.a_en;
  if (ex.cat_en)  entry.cat_en  = ex.cat_en;
  if (ex.hint_en) entry.hint_en = ex.hint_en;
  DATA.mentalMath.exercises.push(entry);
});

// ══════════════════════════════════════════════════════════
// MARKET SIZING DRILLS — MS-D12 à MS-D26
// ══════════════════════════════════════════════════════════
var sizingModule = DATA.modules.find(function(m) { return m.slug === 'market-sizing'; });
if (sizingModule) {
  var newSizingDrills = [
    { id: 'MS-D12', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le marché des abonnements Netflix en France.',
      hint: 'Population → foyers → % abonnés streaming → part Netflix → prix moyen',
      answer: `Foyers France : 30M.
% foyers avec abonnement streaming : 50% = 15M foyers abonnés à au moins un service.
Part de marché Netflix en France : ~40%.
Abonnés Netflix : 15M × 0,40 = 6M foyers.
ARPU Netflix France : ~13€/mois (moy. entre Standard 13,49€ et Premium 17,99€).
Revenu annuel Netflix France : 6M × 13 × 12 = 936M€ ≈ 1Md€.
Sanity check : Netflix rapporte ~37Md$ mondial. France ≈ 3% mondial = 1,1Md$ ✓`,
      keyMetrics: ['30M foyers', '6M abonnés Netflix', '~1Md€/an'] },

    { id: 'MS-D13', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché des taxis et VTC en France (Uber, Bolt, taxis traditionnels).',
      hint: 'Utilisateurs réguliers × fréquence × prix moyen par course',
      answer: `Approche par la demande :
Population France : 68M. Adultes urbains (villes > 100k hab) : 30% = 20M personnes.
Utilisateurs réguliers VTC+taxi parmi les urbains : 30% = 6M personnes.
Fréquence moyenne : 2 courses/mois = 24 courses/an.
Prix moyen par course (VTC) : 15€.
Total : 6M × 24 × 15 = 2,16Md€/an.
Ajout : utilisateurs occasionnels (touristes, voyageurs d'affaires) : +20% → 2,6Md€.
Sanity check : Uber FR rapporte ~500M€. Taxis = ~1Md€. Bolt + autres = 500M€. Total ~2Md€ ✓`,
      keyMetrics: ['6M utilisateurs réguliers', '24 courses/an', '~2,5Md€ marché total'] },

    { id: 'MS-D14', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché de la livraison de repas à domicile en France (Deliveroo, UberEats, Justeat).',
      hint: 'Utilisateurs × commandes/an × panier moyen',
      answer: `Population France : 68M. 15–55 ans (cœur de cible) : 55% = 37M.
Urbains connectés utilisant la livraison : 40% = 15M utilisateurs.
Fréquence : 1 commande/2 semaines = 26 commandes/an.
Panier moyen : 25€ (incluant frais de livraison).
GMV = 15M × 26 × 25 = 9,75Md€.
Take rate plateforme (~25%) : revenus plateformes = 2,4Md€.
Note : top 3 acteurs (UberEats, Deliveroo, Just Eat) se partagent ~95% du marché.`,
      keyMetrics: ['15M utilisateurs actifs', '26 commandes/an', 'GMV ~10Md€'] },

    { id: 'MS-D15', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le nombre de voitures électriques vendues en France en 2025.',
      hint: 'Ventes totales voitures neuves × taux d\'électrification',
      answer: `Ventes de voitures neuves en France : ~1,5M véhicules/an (chiffre historique).
Taux d'électrification (full électrique + hybrides rechargeables) : ~25% en 2025.
Full électrique seul : ~15% = 225 000 véhicules.
Principaux acteurs : Renault (Megane E, Zoe), Peugeot, Tesla, Volkswagen.
Sanity check : l'objectif gouvernemental est de 100% véhicules électriques neufs en 2035.
En 2025, le marché reste en forte croissance depuis ~5% en 2020.`,
      keyMetrics: ['1,5M ventes totales', '~225 000 électriques purs', '~300 000 en incluant PHEV'] },

    { id: 'MS-D16', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le marché du cloud computing en France.',
      hint: 'Entreprises françaises × taux d\'adoption × dépense moyenne par taille',
      answer: `Approche par la demande enterprise :
Grandes entreprises (> 250 salariés) : ~5 000 en France. Dépense cloud : 2M€/an en moyenne. Total : 10Md€.
ETI (50–250 salariés) : ~150 000. Dépense : 20 000€/an. Total : 3Md€.
PME (10–50 salariés) : ~300 000. Dépense : 5 000€/an. Total : 1,5Md€.
TPE : usage marginal SaaS uniquement.
Total marché cloud France : 10 + 3 + 1,5 = 14,5Md€.
Sanity check : IDC estime le cloud France à ~12–15Md€ ✓`,
      keyMetrics: ['Grandes entreprises = 10Md€', 'ETI = 3Md€', 'Total ~14Md€'] },

    { id: 'MS-D17', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché du coaching et de la formation professionnelle en France.',
      hint: 'Entreprises × % investissant en formation × dépense/salarié',
      answer: `Salariés en France : ~25M. Obligation légale formation : 0,8–1% de la masse salariale.
Salaire moyen France : 35 000€/an. Masse salariale totale : 25M × 35K = 875Md€.
Dépense formation légale minimale : 875Md€ × 1% = 8,75Md€.
Dépense volontaire additionnelle : +50% = 13Md€.
Coaching professionnel individuel (C2P, coaching de dirigeants) : ~1Md€ additionnel.
Total marché formation + coaching France : ~14–15Md€.
Sanity check : Ministère du Travail rapporte ~15Md€/an de formation professionnelle ✓`,
      keyMetrics: ['25M salariés', '1% masse salariale', '~14Md€ total'] },

    { id: 'MS-D18', type: 'market_sizing', difficulty: 'easy',
      question: 'Estimez le nombre de boulangeries en France.',
      hint: 'Population → nombre de foyers → fréquence d\'achat en boulangerie → capacité d\'une boulangerie',
      answer: `Approche par la demande :
68M habitants. Foyers : 30M. Achats boulangerie : 4×/semaine × 52 = 208 visites/an.
Visites totales : 30M × 208 = 6,24Md visites/an.
Capacité d'une boulangerie : 150 clients/jour × 300 jours = 45 000 visites/an.
Nombre boulangeries = 6,24Md / 45 000 = 138 666 ≈ 140 000.
Sanity check : selon la Fédération des Boulangers, il y a ~34 000 boulangeries artisanales en France + 6 000 terminaux de cuisson + GMS. Le chiffre de 140 000 est surestimé — les gens n'achètent pas en boulangerie artisanale quotidiennement, ils utilisent aussi les GMS.
Révision : 34 000 artisanales (bonne réponse). Notre surestimation vient du % boulangerie artisanale vs GMS.`,
      keyMetrics: ['~34 000 boulangeries artisanales', 'Erreur classique : ne pas segmenter artisanal vs GMS'] },

    { id: 'MS-D19', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché de la cyber-sécurité en France.',
      hint: 'Entreprises par taille × budget cyber en % IT × budget IT moyen',
      answer: `Budget IT moyen en % du CA : 2% pour les entreprises (toutes tailles confondues).
CA agrégé des entreprises françaises : ~3 000Md€.
Budget IT total : 3 000 × 2% = 60Md€.
Part cyber-sécurité dans le budget IT : ~10% = 6Md€.
Marché cybersécurité France : ~6Md€/an.
Sanity check : ANSSI et IDC estiment le marché entre 5 et 8Md€ ✓
Note : croissance ~15%/an sous l'effet des obligations réglementaires (NIS2, DORA)`,
      keyMetrics: ['60Md€ budget IT total', '10% alloué à la cyber', '~6Md€ marché'] },

    { id: 'MS-D20', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché des abonnements gym/fitness en France.',
      hint: 'Population × % pratiquant → % avec abonnement → prix moyen',
      answer: `Population 15–65 ans : 68M × 0,65 = 44M.
% ayant un abonnement fitness (gym, CrossFit, yoga studio) : 15% = 6,6M abonnés.
Prix abonnement moyen : 40€/mois × 12 = 480€/an.
Marché total : 6,6M × 480 = 3,17Md€/an.
Sanity check : BPIFRANCE estime le marché à ~3,5Md€ ✓
Contexte : Basic-Fit, Fitness Park, Neoness et indépendants. L'arrivée des low-cost (15–20€/mois) a fortement augmenté le taux de pénétration.`,
      keyMetrics: ['6,6M abonnés', '40€/mois en moyenne', '~3Md€'] },

    { id: 'MS-D21', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le nombre de consultants en France (tous niveaux, tous cabinets).',
      hint: 'Cabinets × taille moyenne OU approche par la demande (entreprises clientes × budget conseil)',
      answer: `Approche par la demande :
Marché du conseil en France : ~15–20Md€/an (Syntec Conseil).
Coût chargé d'un consultant : ~150 000€/an (tout compris).
Nombre de consultants = 15 000M€ / 150 000€ = 100 000 consultants.
Approche par l'offre :
Big 4 : 20 000 consultants chacun = 80 000 au total.
les cabinets Tier 1 : 3 000 chacun France = 9 000.
Boutiques, cabinets spécialisés : 15–20 000.
Total : ~100 000–110 000 consultants en France ✓`,
      keyMetrics: ['~100 000 consultants', '15Md€ marché conseil France', '150k€ coût chargé/consultant'] },

    { id: 'MS-D22', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché des données personnelles (RGPD compliance) en France.',
      hint: 'Entreprises devant se conformer × coût moyen de conformité',
      answer: `Entreprises soumises au RGPD (traitement de données personnelles) : quasiment toutes.
PME (10–250 salariés) : 200 000 entreprises. Coût conformité RGPD/an : 5 000–15 000€. Moyenne 10 000€. Total PME : 2Md€.
ETI/GE (> 250 salariés) : 5 000 + 1 500. Coût : 100 000–500 000€. Moyenne 200 000€. Total GE : 1,3Md€.
DPO externalisés (cabinets RGPD) : ~3 000 cabinets.
Total marché compliance RGPD France : ~3,5Md€.
Note : inclut les logiciels de gestion de consentement, les formations, les audits, et les DPO.`,
      keyMetrics: ['200 000 PME', '6 500 ETI/GE', '~3,5Md€ marché compliance'] },

    { id: 'MS-D23', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le marché des crèches et structures d\'accueil de la petite enfance en France.',
      hint: 'Nombre d\'enfants < 3 ans → taux d\'accueil × coût',
      answer: `Naissances en France : ~700 000/an. Enfants < 3 ans : 2,1M.
% confiés à une structure collective (crèche, halte-garderie) : 20% = 420 000 enfants.
% assistantes maternelles : 40% = 840 000.
Reste : parents/famille.
Coût crèche : 1 200€/mois (coût réel, partiellement couvert par CAF).
Revenu structure / enfant : 2 000€/mois (subventions CAF incluses).
Revenu total crèches : 420 000 × 2 000 × 12 = 10,1Md€.
Assistantes maternelles : 840 000 × 800€/mois (salaire) × 12 = 8Md€.
Total marché petite enfance France : ~18Md€.`,
      keyMetrics: ['2,1M enfants < 3 ans', '60% en accueil formel', '~18Md€ total'] },

    { id: 'MS-D24', type: 'market_sizing', difficulty: 'hard',
      question: 'Combien coûte la construction d\'une autoroute de 100 km en France ?',
      hint: 'Coût par km × kilomètre × paramètres de terrain',
      answer: `Décomposition des coûts de construction autoroutière :
Travaux routiers (terrassement, asphalte, signalisation) : 5–8M€/km.
Ouvrages d'art (ponts, viaducs, tunnels) : très variable. En terrain plat, 1–2 ponts/10km = +2M€/km.
Emprises foncières (acquisitions, indemnisations) : 0,5–2M€/km selon la zone.
Équipements (péage, éclairage, sécurité) : 0,5–1M€/km.
Études, maîtrise d'ouvrage, assurances : 15% du coût travaux.
Total estimé en terrain moyen : ~10–12M€/km.
Pour 100 km : 1–1,2Md€.
Sanity check : l'autoroute A65 Langon-Pau (150 km, 2010) a coûté 1,2Md€ = 8M€/km ✓`,
      keyMetrics: ['8–12M€/km', '1–1,2Md€ pour 100km', 'Forte variabilité selon terrain'] },

    { id: 'MS-D25', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché de l\'intelligence artificielle générative en France en 2026.',
      hint: 'Entreprises adoptant l\'IA gen × budget moyen × taux d\'adoption',
      answer: `IA générative en France : marché très récent (2023+), en croissance explosive.
Entreprises CAC 40 / SBF 120 : 170 entreprises. Budget IA gen moyen : 5M€/an. Total : 850M€.
ETI industrielles (5 000 entreprises) : 10% ont déployé IA gen. Budget moyen : 100K€. Total : 50M€.
PME tech et services (50 000) : 5% adoptants. Budget moyen : 15K€. Total : 37,5M€.
Particuliers (LLM payants, Copilot) : 3M utilisateurs × 20€/mois × 12 = 720M€.
Total France IA générative 2026 : ~1,5–2Md€.
Note : marché mondial ~150Md$ en 2026, France ≈ 1% = ~1,5Md$ ✓`,
      keyMetrics: ['~1,5Md€ marché France', '3M utilisateurs grand public', 'Croissance ~80%/an'] },

    { id: 'MS-D26', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le nombre d\'ingénieurs en France.',
      hint: 'Population active → % dans l\'industrie et tech → % d\'ingénieurs',
      answer: `Population active française : 30M. Secteurs tech, industrie, BTP, énergie : 35% = 10,5M personnes.
Dont ingénieurs (Bac+5 technique) : 15% = 1,57M.
Approche validation : France forme ~110 000 ingénieurs/an (CTI).
Sur 30 ans de carrière active = 3,3M de diplômés, dont ~60% exercent en tant qu'ingénieur = 2M.
Fourchette : 1,5–2M ingénieurs en France.
Sanity check : IESF (Ingénieurs et Scientifiques de France) compte 1,6M d'ingénieurs diplômés actifs ✓`,
      keyMetrics: ['1,5–2M ingénieurs actifs', '110 000 diplômés/an', '30M actifs total'] }
  ];

  newSizingDrills.forEach(function(d) {
    sizingModule.drills.push(d);
  });
}

// ══════════════════════════════════════════════════════════
// EXHIBIT ANALYSIS DRILLS — EXH-D6 à EXH-D16
// ══════════════════════════════════════════════════════════
var exhibitModule = DATA.modules.find(function(m) { return m.slug === 'exhibits'; });
if (exhibitModule) {
  var newExhibitDrills = [
    { id: 'EXH-D6', type: 'exhibit_analysis',
      exhibit: {
        type: 'table',
        title: 'Marges EBITDA par segment — Groupe XYZ 2023',
        headers: ['Segment', 'CA (M€)', 'EBITDA (M€)', 'Marge EBITDA (%)'],
        rows: [
          ['Segment A – Europe', '450', '90', '20%'],
          ['Segment B – Amérique', '300', '45', '15%'],
          ['Segment C – Asie', '150', '−6', '−4%'],
          ['Segment D – Digital', '100', '22', '22%'],
          ['TOTAL GROUPE', '1 000', '151', '15,1%']
        ]
      },
      questions: [
        'Quelles sont les 2 observations clés sur ce tableau ?',
        'Quelle est la contribution de chaque segment à l\'EBITDA total du groupe ?',
        'Que recommanderiez-vous au management en 30 secondes ?'
      ],
      answer: `Observation 1 (anomalie) : le Segment C Asie est le seul en perte (−4% EBITDA malgré 150M€ de CA). Il détruit de la valeur absolue (−6M€) et tire la marge groupe vers le bas.
Observation 2 (meilleure performance) : le Segment D Digital affiche la meilleure marge (22%) avec seulement 10% du CA. Fort levier si ce segment peut être développé.
Contribution EBITDA :
Segment A : 90/151 = 59,6% de l'EBITDA total
Segment B : 45/151 = 29,8%
Segment C : −6/151 = −4% (destruction de valeur)
Segment D : 22/151 = 14,6%
Recommandation : (1) Plan de redressement Asie sous 90 jours ou stratégie de sortie ; (2) Accélérer l'investissement dans le Digital vu sa marge supérieure ; (3) Optimiser l'Europe pour maintenir son rôle de contributeur principal.`
    },

    { id: 'EXH-D7', type: 'exhibit_analysis',
      exhibit: {
        type: 'waterfall',
        title: 'Décomposition de la variation d\'EBITDA — 2022 vs 2023 (M€)',
        items: [
          { label: 'EBITDA 2022', value: 200, cumul: 200 },
          { label: '+Volume +15M', value: 15, cumul: 215 },
          { label: '+Prix +8M', value: 8, cumul: 223 },
          { label: '−Mix −12M', value: -12, cumul: 211 },
          { label: '−Coûts matières −35M', value: -35, cumul: 176 },
          { label: '−Coûts salariaux −10M', value: -10, cumul: 166 },
          { label: '+Productivité +5M', value: 5, cumul: 171 },
          { label: 'EBITDA 2023', value: 0, cumul: 171 }
        ]
      },
      questions: [
        'Quelle est la variation absolue et relative d\'EBITDA entre 2022 et 2023 ?',
        'Identifiez les 2 drivers les plus importants de la baisse.',
        'Quel est le message principal à formuler en one-liner pour le comité exécutif ?'
      ],
      answer: `Variation absolue : 171 − 200 = −29M€. Variation relative : −29/200 = −14,5%.
Driver 1 (dominant) : Coûts matières −35M€ représente 121% de la baisse totale — c'est le facteur principal, dépassant seul la baisse totale (compensé partiellement par les gains volume et prix).
Driver 2 : Effet mix négatif −12M€ — indique que la croissance du volume a été réalisée sur des produits moins rentables.
One-liner : "La hausse du volume et des prix (+23M€) a été effacée par l'inflation des matières premières (−35M€) et un mix défavorable (−12M€), résultant en une baisse d'EBITDA de 15%."
Next step : comprendre si l'effet matières est structurel (contrats long terme à renouveler) ou conjoncturel (volatilité des commodities en 2022).`
    },

    { id: 'EXH-D8', type: 'exhibit_analysis',
      exhibit: {
        type: 'chart_description',
        title: 'Matrice positionnement concurrentiel — Coût relatif vs Part de marché',
        description: 'Axe X : Part de marché relative (de 0,1x à 10x vs leader). Axe Y : Coût unitaire relatif (de −30% à +30% vs moyenne industrie). Bulle = CA de l\'entreprise. Notre client : PDM 0,8x, coût +15%. Leader : PDM 3x, coût −20%. Challenger 1 : PDM 1,2x, coût −5%. Challenger 2 : PDM 0,5x, coût −10%.'
      },
      questions: [
        'Décrivez la position compétitive de notre client en 2 phrases.',
        'Qui est le concurrent le plus dangereux et pourquoi ?',
        'Quelle stratégie recommandez-vous pour notre client ?'
      ],
      answer: `Position de notre client : En dessous de la PDM du leader (0,8x vs 3x) ET avec des coûts supérieurs à la moyenne industrie (+15%). Double désavantage : ni l'échelle ni l'efficience ne jouent en sa faveur.
Concurrent le plus dangereux : Le Challenger 1 (PDM 1,2x, coût −5%) est immédiatement au-dessus de notre client en parts de marché avec un avantage de coût. Il peut attaquer les clients de notre client avec un pricing compétitif tout en maintenant une marge.
Stratégie recommandée : Notre client est dans une position de "stuck in the middle" classique. Options : (A) Réduire les coûts agressivement pour atteindre au moins la parité (−15% de réduction de coûts requise) ; (B) Niching stratégique — se concentrer sur 1–2 segments où le Challenger 1 et le Leader sont moins bien positionnés ; (C) Si impossible, envisager une fusion/acquisition avec un acteur complémentaire pour atteindre la masse critique.`
    },

    { id: 'EXH-D9', type: 'exhibit_analysis',
      exhibit: {
        type: 'table',
        title: 'NPS et satisfaction clients par canal — Banque ABC',
        headers: ['Canal', 'Volume transactions/an', 'NPS', 'Satisfaction (1–5)', 'Coût par transaction (€)'],
        rows: [
          ['Agence physique', '12M', '+22', '3,8', '8,50'],
          ['Call center', '25M', '+10', '3,2', '4,00'],
          ['Application mobile', '180M', '+65', '4,5', '0,20'],
          ['Site web', '95M', '+45', '4,1', '0,35'],
          ['Distributeur ATM', '45M', '+30', '4,0', '0,80']
        ]
      },
      questions: [
        'Quel est le paradoxe principal visible dans ce tableau ?',
        'Calculez le coût total par canal (volume × coût unitaire).',
        'Que recommanderiez-vous au directeur de la stratégie ?'
      ],
      answer: `Paradoxe : L'application mobile combine le meilleur NPS (+65), la meilleure satisfaction (4,5) ET le coût le plus bas (0,20€/transaction) — c'est l'exact inverse de l'intuition classique "le numérique, c'est moins bien mais moins cher." Ici, le digital est à la fois meilleur ET moins cher.
Coûts totaux :
Agences : 12M × 8,50 = 102M€
Call center : 25M × 4,00 = 100M€
App mobile : 180M × 0,20 = 36M€
Web : 95M × 0,35 = 33,25M€
ATM : 45M × 0,80 = 36M€
TOTAL : 307,25M€
Part du digital (App + Web) = 69,25M€ = 22,5% des coûts pour 75% des transactions.
Recommandation : Accélérer la migration vers le digital en (1) fermant les agences les moins fréquentées, (2) réduisant le call center avec des chatbots, (3) investissant dans l'UX mobile pour maintenir le NPS exceptionnel. Économie potentielle : si 20% des transactions agences migrent vers l'app, économie = 2,4M × 8,30€ = 19,9M€/an.`
    },

    { id: 'EXH-D10', type: 'exhibit_analysis',
      exhibit: {
        type: 'table',
        title: 'Analyse de cohorte client — Taux de rétention par année d\'acquisition',
        headers: ['Cohorte', 'Clients acquis', 'Rétention an 1', 'Rétention an 2', 'Rétention an 3', 'ARPU an 1 (€)', 'ARPU an 3 (€)'],
        rows: [
          ['2020', '10 000', '70%', '60%', '55%', '120', '185'],
          ['2021', '15 000', '65%', '52%', '—', '130', '—'],
          ['2022', '20 000', '60%', '—', '—', '125', '—'],
          ['2023', '25 000', '55%', '—', '—', '115', '—']
        ]
      },
      questions: [
        'Quelle tendance critique identifiez-vous dans la rétention ?',
        'Les clients de 2020 sont-ils profitables sur 3 ans ? Calculez.',
        'Quelle hypothèse formulez-vous sur la cause de cette tendance ?'
      ],
      answer: `Tendance critique : Le taux de rétention en an 1 se dégrade systématiquement d'une cohorte à l'autre : 70% (2020) → 65% (2021) → 60% (2022) → 55% (2023). Chaque année acquiert plus de clients MAIS les retient moins bien. C'est un signal d'alarme fort — une stratégie de croissance basée sur l'acquisition sans rétention détruit la valeur à long terme.
Profitabilité cohorte 2020 :
Clients actifs : an 1 = 7000, an 2 = 6000, an 3 = 5500.
Revenus : an1 = 7000×120 = 840K€. an2 = 6000×120 (hypothèse) ≈ 840K€. an3 = 5500×185 = 1 017K€.
Total revenus 3 ans = ~2,7M€ pour 10 000 clients acquis initialement.
Si CAC = 50€ → coût acquisition = 500K€. LTV brute 3 ans = 2,7M€ → très profitable.
Hypothèse sur la cause : L'acquisition de clients plus récents (2022, 2023) capture probablement un segment moins qualifié (plus opportuniste, moins fidèle). Ou bien : la qualité du produit/service se dégrade sous l'effet de la croissance rapide (support saturé, délais d'attente).`
    },

    { id: 'EXH-D11', type: 'exhibit_analysis',
      exhibit: {
        type: 'chart_description',
        title: 'Évolution du prix du pétrole et marges opérationnelles d\'une compagnie aérienne (2015–2023)',
        description: 'Deux séries superposées. Axe gauche : Prix du pétrole ($/baril) — varie de 30$ (2016) à 120$ (2022). Axe droit : Marge opérationnelle de la compagnie (%) — varie de +8% (2017) à −40% (2020) à +5% (2023). Corrélation inverse visible 2015–2019. Effondrement 2020 (COVID). Rebond 2021–2023.'
      },
      questions: [
        'Identifiez les 3 périodes clés et leur signification pour la compagnie.',
        'Pourquoi la corrélation pétrole/marge n\'est-elle pas parfaite ?',
        'Quel impact sur votre diagnostic si vous étiez consultant sur ce dossier ?'
      ],
      answer: `3 périodes clés :
Période 1 (2015–2019) : corrélation inverse classique. Pétrole bas → marges bonnes (pétrole = 25–30% des coûts d'une compagnie aérienne). Stratégie : croissance de flotte, expansion des routes.
Période 2 (2020) : effondrement indépendant du pétrole (COVID). Marge −40% malgré un pétrole bas. Le problème est la demande zéro, pas les coûts.
Période 3 (2021–2023) : rebond de la demande mais pétrole remonté à 120$ en 2022. Marges en récupération partielle (+5% en 2023 malgré pétrole élevé) grâce à la hausse des prix des billets.
Corrélation imparfaite : d'autres facteurs jouent — capacité de pricing (si la compagnie peut répercuter la hausse des coûts sur les billets), hedging (couverture carburant), taux de change (pétrole en $, revenus en €).
Impact diagnostic consultant : Ne pas analyser uniquement les marges en valeur absolue — les décomposer en (1) effet pétrole/couverture, (2) effect pricing/yield management, (3) coûts opérationnels hors carburant. Recommandation de hedging si la compagnie est exposée à court terme sur le pétrole.`
    }
  ];

  newExhibitDrills.forEach(function(d) {
    exhibitModule.drills.push(d);
  });
}

// ══════════════════════════════════════════════════════════
// BUSINESS FUNDAMENTALS DRILLS — nouveau module BF
// (ajouté comme nouveau module M17)
// ══════════════════════════════════════════════════════════
DATA.modules.push({
  id: 'M17',
  title: 'Business Fundamentals Drills',
  icon: '🏗️',
  description: 'Questions et exercices sur les KPIs sectoriels, la lecture de bilans, et les benchmarks à connaître',
  sections: [
    {
      id: 'M17-S1',
      title: 'KPIs sectoriels — les chiffres à connaître par cœur',
      content: `<p>En entretien les grands cabinets, connaître les ordres de grandeur de marges et de métriques par secteur vous permet de contextualiser instantanément n'importe quelle donnée présentée. Cette section regroupe les benchmarks essentiels.</p>
<table class="data-table">
  <tr><th>Secteur</th><th>Marge brute</th><th>EBITDA</th><th>Croissance typique</th></tr>
  <tr><td>SaaS</td><td>70–80%</td><td>15–25% (mature)</td><td>20–40%</td></tr>
  <tr><td>Pharma innovante</td><td>65–75%</td><td>30–40%</td><td>5–10%</td></tr>
  <tr><td>Luxe</td><td>60–70%</td><td>25–35%</td><td>5–12%</td></tr>
  <tr><td>Banque (NIM)</td><td>NIM 1,5–2%</td><td>ROE 8–12%</td><td>3–5%</td></tr>
  <tr><td>Retail alimentaire</td><td>20–30%</td><td>3–6%</td><td>1–3%</td></tr>
  <tr><td>Automobile</td><td>15–25%</td><td>6–10%</td><td>−3 à +5%</td></tr>
  <tr><td>Énergie (utilities)</td><td>30–40%</td><td>20–30%</td><td>2–4%</td></tr>
  <tr><td>Consulting</td><td>30–40%</td><td>15–25%</td><td>5–10%</td></tr>
</table>`
    }
  ],
  drills: [
    { id: 'BF-D1', type: 'fundamentals_quiz', difficulty: 'easy',
      question: 'Quel est le ratio CIR (Cost-Income Ratio) typique d\'une banque de détail bien gérée en Europe ?',
      options: ['45–50%', '60–70%', '80–90%', '25–35%'],
      correctAnswer: '60–70%',
      explanation: 'Un CIR de 60–70% est la norme pour les grandes banques européennes (BNP ~65%, SG ~67%). En dessous de 60% = excellente efficacité opérationnelle. Au-dessus de 75% = signal d\'alarme de sous-productivité.' },

    { id: 'BF-D2', type: 'fundamentals_quiz', difficulty: 'medium',
      question: 'Une entreprise SaaS a un churn mensuel de 3%. Quelle est sa durée de vie client implicite ?',
      options: ['10 mois', '33 mois', '6 mois', '100 mois'],
      correctAnswer: '33 mois',
      explanation: 'Durée de vie client = 1 / Churn mensuel = 1 / 0,03 = 33 mois. Annualisé : churn annuel = 1 − (1−0,03)^12 = 30,6%. Un churn mensuel de 3% est élevé — cela signifie que plus de 30% des clients partent chaque année.' },

    { id: 'BF-D3', type: 'fundamentals_quiz', difficulty: 'hard',
      question: 'Quel est le WACC typique utilisé pour valoriser une grande entreprise cotée en Europe en 2025 ?',
      options: ['2–4%', '6–10%', '12–15%', '15–20%'],
      correctAnswer: '6–10%',
      explanation: 'WACC = coût des fonds propres (CAPM) + coût de la dette. En Europe en 2025, avec des taux longs à 3–4% et une prime de risque actions ~5%, le WACC d\'une grande entreprise diversifiée se situe entre 7–10%. Les secteurs risqués (tech non-profitables) peuvent atteindre 12–15%.' },

    { id: 'BF-D4', type: 'fundamentals_quiz', difficulty: 'medium',
      question: 'Que signifie un EV/EBITDA de 20x pour une entreprise de services ?',
      options: [
        'L\'entreprise est sous-valorisée — la norme est 30x',
        'L\'entreprise est fortement valorisée — payback à l\'EBITDA en 20 ans, possible si forte croissance',
        'L\'entreprise est en faillite imminente',
        'C\'est la norme pour toutes les entreprises cotées'
      ],
      correctAnswer: 'L\'entreprise est fortement valorisée — payback à l\'EBITDA en 20 ans, possible si forte croissance',
      explanation: 'EV/EBITDA 20x est élevé. La médiane S&P 500 tourne autour de 12–15x. 20x implique soit une forte croissance attendue, soit un secteur à faible risque. Les SaaS peuvent justifier 20–30x si le NRR est > 120% et la croissance > 30%/an. Pour une entreprise de services classique à croissance modeste, 20x serait cher.' },

    { id: 'BF-D5', type: 'fundamentals_quiz', difficulty: 'hard',
      question: 'Un retailer passe d\'un stock turnover de 6x à 4x. Quelle est l\'implication financière ?',
      options: [
        'Le retailer tourne plus efficacement — moins de capital immobilisé',
        'Le capital immobilisé en stock augmente — besoin en fonds de roulement (BFR) en hausse',
        'La marge brute augmente proportionnellement',
        'Aucun impact sur le bilan'
      ],
      correctAnswer: 'Le capital immobilisé en stock augmente — besoin en fonds de roulement (BFR) en hausse',
      explanation: 'Stock turnover = CA / Stock moyen. Si turnover baisse de 6x à 4x, le stock moyen augmente (pour le même CA). Stock moyen = CA / Turnover. Si CA = 120M€ : stock à 6x = 20M€, à 4x = 30M€. Augmentation du BFR = +10M€ à financer. Impact : besoin de trésorerie ou de financement supplémentaire.' },

    { id: 'BF-D6', type: 'fundamentals_quiz', difficulty: 'medium',
      question: 'Quelle est la différence fondamentale entre EBITDA et Free Cash Flow ?',
      options: [
        'Aucune — ce sont deux noms pour la même chose',
        'EBITDA exclut capex et variation du BFR que le FCF intègre',
        'Le FCF est toujours supérieur à l\'EBITDA',
        'L\'EBITDA est utilisé pour les entreprises américaines, le FCF pour les européennes'
      ],
      correctAnswer: 'EBITDA exclut capex et variation du BFR que le FCF intègre',
      explanation: 'FCF = EBITDA − Impôts payés − Capex − Variation du BFR. Une entreprise peut avoir un EBITDA positif et un FCF négatif si elle investit massivement (capex élevé) ou si son BFR augmente (croissance forte). Les entreprises industrielles capital-intensives ont souvent un écart EBITDA/FCF important.' },

    { id: 'BF-D7', type: 'fundamentals_quiz', difficulty: 'hard',
      question: 'Une entreprise pharma a 3 médicaments en Phase 3 de développement. Taux de succès Phase 3 = 65%. Combien peut-on en attendre qui atteignent l\'approbation FDA/EMA ?',
      options: ['0,65 (environ 1 sur 2)', '~2', '3 (tous)', '0 (Phase 3 = échec systématique)'],
      correctAnswer: '~2',
      explanation: '3 × 0,65 = 1,95 ≈ 2 médicaments attendus en approbation. En pratique, avec 3 médicaments, les scénarios sont : 0 approbations (4%), 1 approbation (23%), 2 approbations (44%), 3 approbations (27%). La valeur attendue est 1,95. Note : le coût moyen d\'un médicament Phase 3 étant de 300–500M$, un refus d\'approbation détruit énormément de valeur.' },

    { id: 'BF-D8', type: 'fundamentals_quiz', difficulty: 'medium',
      question: 'Le NRR (Net Revenue Retention) d\'un SaaS est de 115%. Qu\'est-ce que cela signifie concrètement ?',
      options: [
        'L\'entreprise a 15% de clients de plus qu\'il y a un an',
        'Sans acquérir aucun nouveau client, les revenus ont cru de 15% grâce aux upgrades et à la rétention',
        'L\'entreprise a perdu 15% de ses clients mais compensé avec de nouveaux',
        'Le revenu par client a augmenté de 15%'
      ],
      correctAnswer: 'Sans acquérir aucun nouveau client, les revenus ont cru de 15% grâce aux upgrades et à la rétention',
      explanation: 'NRR = (ARR début de période − Churn + Expansion) / ARR début. NRR = 115% signifie que la cohorte de clients existants génère maintenant 15% de revenus de plus qu\'un an plus tôt. L\'expansion (upsell, cross-sell) dépasse le churn. C\'est l\'un des meilleurs indicateurs de product-market fit — les clients utilisent plus le produit qu\'avant.' },

    { id: 'BF-D9', type: 'fundamentals_quiz', difficulty: 'hard',
      question: 'Pourquoi une holding peut-elle avoir un P/E plus élevé que ses filiales opérationnelles ?',
      options: [
        'Les holdings sont toujours plus rentables',
        'L\'effet de levier financier et la prime de contrôle peuvent amplifier le P/E',
        'La réglementation impose un P/E minimum pour les holdings',
        'C\'est impossible — une holding a toujours un P/E plus bas (conglomerate discount)'
      ],
      correctAnswer: 'L\'effet de levier financier et la prime de contrôle peuvent amplifier le P/E',
      explanation: 'En réalité, les holdings cotées subissent souvent un "conglomerate discount" (20–30% sous la somme des parties) par manque de transparence et de synergies. Mais dans certains cas (holding de luxe LVMH, holding tech), la prime de contrôle et les synergies de gestion créent un premium. La question teste si vous connaissez les deux effets.' },

    { id: 'BF-D10', type: 'fundamentals_quiz', difficulty: 'easy',
      question: 'Qu\'est-ce que le ROCE (Return on Capital Employed) mesure ?',
      options: [
        'La rentabilité des fonds propres des actionnaires uniquement',
        'L\'efficacité avec laquelle l\'entreprise utilise son capital total (dettes + fonds propres) pour générer du profit opérationnel',
        'Le ratio de liquidité à court terme',
        'Le taux de croissance du capital'
      ],
      correctAnswer: 'L\'efficacité avec laquelle l\'entreprise utilise son capital total (dettes + fonds propres) pour générer du profit opérationnel',
      explanation: 'ROCE = EBIT / Capital Employed. Capital Employed = Actifs totaux − Passifs courants (ou Fonds propres + Dettes financières). Un ROCE > WACC = l\'entreprise crée de la valeur. Un ROCE < WACC = l\'entreprise détruit de la valeur même si elle affiche un profit comptable.' }
  ]
});

// ══════════════════════════════════════════════════════════
// MOCKS SUPPLÉMENTAIRES — ajout à DATA.cases
// ══════════════════════════════════════════════════════════
[
  {
    id: 'CASE-016',
    title: 'RetailTech — Expansion digitale ou optimisation réseau physique ?',
    company: 'RetailTech SA',
    industry: 'Retail',
    difficulty: 'medium',
    duration: '45 min',
    type: 'Strategy',
    situation: `RetailTech SA est une enseigne française de bricolage avec 250 magasins physiques et un CA de 3,5Md€. Depuis 3 ans, sa part de marché recule de 0,5 point/an au profit de concurrents pure-players (CastoramaDigital, Leroy MerlinPlus) et de Amazon Bricolage. Son CEO vous demande : "Devons-nous investir massivement dans le digital ou optimiser notre réseau physique ?"`,
    structure_hint: 'Explorez les 3 options stratégiques : (1) Pivot digital, (2) Optimisation réseau physique, (3) Stratégie hybride "phygital". Évaluez chaque option sur 3 critères : impact CA, coût investissement, délai de retour.',
    exhibits: [
      { title: 'Panier moyen par canal', data: 'En magasin : 85€. Online : 62€. Click & collect : 95€.' },
      { title: 'Coût de conversion par canal', data: 'Magasin : 18€. Online : 28€. Click & collect : 12€.' },
      { title: 'NPS par canal', data: 'Magasin : +28. Online : +15. Click & collect : +55.' }
    ],
    key_question: 'Quelle est votre recommandation finale au CEO ? Justifiez avec les données disponibles.',
    solution_outline: `1. Diagnostic : Le Click & collect domine sur les 3 critères (panier, coût, NPS). Le digital pur a un coût de conversion élevé et un NPS faible.
2. Recommandation : Stratégie phygital axée sur le Click & collect. Investir dans (a) l'infrastructure logistique C&C (zones dédiées), (b) l'application mobile pour le parcours C&C, (c) la réduction du parc de magasins physiques de 250 à 200 (fermeture des 50 moins performants).
3. Impact projeté : +2pts NPS → +0,3% rétention × 3,5Md = +10M€. Économies fermetures = 25M€/an. Investissement C&C = 80M€ sur 3 ans. ROI positif en an 2.`
  },

  {
    id: 'CASE-017',
    title: 'BioPharm Innovations — Lancement d\'un médicament orphelin',
    company: 'BioPharm Innovations',
    industry: 'Pharmaceutique',
    difficulty: 'hard',
    duration: '50 min',
    type: 'Market Entry',
    situation: `BioPharm Innovations a obtenu l'approbation FDA pour un médicament orphelin traitant une maladie rare touchant 30 000 patients en Europe et 25 000 aux États-Unis. Le coût de développement total est de 400M€. Le directeur médical vous demande de définir la stratégie de lancement et le pricing optimal.`,
    structure_hint: 'Enjeux : (1) Pricing — coût-bénéfice vs willingness to pay des systèmes de santé, (2) Accès marché — remboursement HAS/NICE/FDA, (3) Distribution — réseau spécialisé vs généraliste, (4) Timeline — priorité géographique Europe vs US.',
    key_question: 'À quel prix lancer le médicament et par quel marché commencer ?',
    solution_outline: `1. Pricing : Médicament orphelin = pricing basé sur la valeur, pas sur les coûts. Référence : QALY (Quality-Adjusted Life Year). Si le traitement ajoute 5 QALYs, willingness to pay HAS ≈ 50 000€/QALY = 250 000€ par patient. ROI investissement : 400M€ / 55 000 patients = 7 272€/patient juste pour rentrer dans les coûts. Prix cible : 100 000–200 000€/patient/an, en ligne avec les orphelins approuvés.
2. Priorité géographique : USA first — FDA approuvée, pricing power supérieur (pas de HTA obligatoire), assurances privées acceptent des prix élevés pour les orphelins. Europe en parallèle mais plus long (HAS, NICE, chaque pays).
3. Distribution : réseau d'hôpitaux spécialisés (centres de référence maladies rares) — pas de pharmacies de ville.`
  },

  {
    id: 'CASE-018',
    title: 'EnergieFutur — Décision d\'investissement dans le solaire',
    company: 'EnergieFutur',
    industry: 'Énergie',
    difficulty: 'medium',
    duration: '45 min',
    type: 'Profitabilité / Investissement',
    situation: `EnergieFutur est un producteur d'électricité français avec 8Md€ de CA. Le CFO envisage d'investir 2Md€ dans 15 parcs solaires sur 5 ans. Le coût de construction = 1,2M€/MWc. Chaque parc = 100 MWc. Durée de vie des panneaux = 25 ans. Prix de vente de l'électricité = 80€/MWh. Taux de charge moyen = 14% (France). WACC = 7%.`,
    structure_hint: 'Calculez : (1) Revenu annuel par parc, (2) Payback period, (3) NPV sur 25 ans, (4) Comparez au WACC pour décision.',
    exhibits: [
      { title: 'Paramètres techniques', data: 'Capacité/parc : 100 MWc. Heures de production/an : 1 226h (14% × 8 760h). Production annuelle/parc : 122 600 MWh.' },
      { title: 'Coûts opérationnels', data: 'O&M annuel : 1% du CAPEX = 1,2M€/parc/an.' }
    ],
    key_question: 'L\'investissement de 2Md€ dans 15 parcs solaires est-il rentable à un WACC de 7% ?',
    solution_outline: `Calcul par parc :
Revenu annuel = 122 600 MWh × 80€ = 9,8M€.
Coût O&M = 1,2M€. EBITDA = 8,6M€.
CAPEX = 120M€/parc. Payback = 120/8,6 = 14 ans. Acceptable sur 25 ans.
NPV (25 ans, WACC 7%) = 8,6M€ × facteur annuité (25 ans, 7%) − 120M€.
Facteur annuité 25 ans à 7% ≈ 11,65. NPV/parc = 8,6×11,65 − 120 = 100,2 − 120 = −19,8M€.
À 7% WACC, le projet est légèrement négatif. À 5% WACC, facteur = 14,09 : NPV = 8,6×14,09 − 120 = 121,2 − 120 = +1,2M€ (seuil de rentabilité).
Recommandation : À 7% WACC, le projet est difficile à justifier sur critère NPV seul. Facteurs à intégrer : (1) hausse probable du prix de l'électricité (+2%/an) améliore le NPV ; (2) bénéfices réglementaires (certificats CO2, obligations vertes) ; (3) risque de dévaluation des actifs fossiles dans le portefeuille (stranded assets). Recommandation : approuver si prix électricité > 90€/MWh ou WACC projet ajusté < 6% avec garanties État.`
  },

  {
    id: 'CASE-019',
    title: 'LogiTech B2B — Optimisation réseau logistique',
    company: 'LogiTech B2B',
    industry: 'Logistique / Supply Chain',
    difficulty: 'medium',
    duration: '40 min',
    type: 'Opérations',
    situation: `LogiTech B2B gère la logistique de 500 clients industriels en France. Ses coûts logistiques ont augmenté de 18% en 2 ans alors que son CA n'a cru que de 5%. Le COO vous demande d'identifier les leviers de réduction de coûts sans dégrader le niveau de service (SLA 98% de livraisons à J+1).`,
    structure_hint: 'Décomposez les coûts logistiques : (1) Transport (dernier kilomètre), (2) Stockage (entrepôts), (3) Main d\'œuvre (préparation commandes), (4) Systèmes (WMS/TMS). Analysez quelle part a le plus augmenté.',
    exhibits: [
      { title: 'Décomposition des coûts 2021 vs 2023', data: 'Transport : 45% du total (+25%). Stockage : 30% (+10%). Main d\'oeuvre : 20% (+15%). Systèmes : 5% (+5%).' },
      { title: 'Taux de remplissage camions', data: '2021 : 78%. 2023 : 62%. Secteur best practice : 85%.' },
      { title: 'Erreurs de préparation', data: '2021 : 0,8%. 2023 : 1,4%. Coût d\'une erreur : 45€ (retour + réexpédition).' }
    ],
    key_question: 'Quels 3 leviers prioritaires recommandez-vous et quel est leur impact estimé ?',
    solution_outline: `1. Optimisation du taux de remplissage transport (levier principal, 45% des coûts) :
Passage de 62% à 80% = −23% du coût transport. Impact = 0,45 × 18% hausse × 23% = ≈ −8% des coûts totaux.
Actions : regroupement de tournées, yield management des créneaux, négociation avec transporteurs pour tarifs au km plutôt qu'à la tournée.
2. Réduction des erreurs de préparation (0,8% → 1,4%) :
Coût additionnel = (1,4% − 0,8%) × volume commandes × 45€. Si 500 000 commandes/an = 0,6% × 500K × 45 = 135K€/an. Solution : scanner de codes-barres au picking, contrôle visuel systématique. Coût implémentation : 50K€. ROI < 6 mois.
3. Mutualisation entrepôts :
Analyser si les 30% de coûts stockage peuvent être réduits via consolidation (moins de sites, mieux situés). −10% entrepôts possible.`
  },

  {
    id: 'CASE-020',
    title: 'MediaGroup — Monétisation d\'une audience digitale',
    company: 'MediaGroup',
    industry: 'Médias / Digital',
    difficulty: 'hard',
    duration: '50 min',
    type: 'Stratégie / Croissance',
    situation: `MediaGroup est un groupe de presse français avec 3 titres papier (CA 200M€, en baisse de 8%/an) et une présence digitale de 12M visiteurs uniques/mois sur ses sites. Le PDG veut "monétiser l'audience digitale pour compenser le déclin print". Il vous demande d'évaluer 3 modèles : (A) Paywall, (B) Publicité programmatique renforcée, (C) Abonnements data/B2B.`,
    structure_hint: 'Pour chaque modèle, estimez : revenu potentiel, investissement requis, délai, risque de cannibalisation de l\'audience.',
    exhibits: [
      { title: 'Benchmarks médias numériques', data: 'Paywall : conversion 1–3% des visiteurs uniques. ARPU abonnés digital : 8–12€/mois. Publicité : CPM moyen 2–5€/1000 impressions, 3 pages vues/visite, 12M visiteurs × 12 mois × 3 × 3,5€ CPM. B2B data : revenus médians 500K–2M€/an pour un acteur de cette taille.' },
      { title: 'Segmentation audience', data: '12M visiteurs/mois. Utilisateurs récurrents (>5 visites/mois) : 25% = 3M. Potentiels payants (>10 visites/mois, news politique/économie) : 8% = 960 000.' }
    ],
    key_question: 'Quel modèle ou combinaison recommandez-vous ? Quantifiez le revenu additionnel à 3 ans.',
    solution_outline: `Calculs :
Paywall : 960 000 cibles × 2% conversion = 19 200 abonnés. ARPU = 10€/mois × 12 = 120€/an. Revenu = 2,3M€/an. Limité mais récurrent.
Publicité programmatique : 12M × 12 × 3 pages × 3,5€/1000 = 1 512M impressions × 0,0035€ = 5,3M€/an. Déjà partiellement fait → revenu additionnel 20% = 1M€/an si optimisation.
B2B data : vendre des insights d'audience (segmentation socio-démographique, intérêts) aux annonceurs et agences. Potentiel 1–2M€/an.
Recommandation stratégie combinée :
An 1 : Paywall "metered" (5 articles gratuits/mois) → conversion progressive + publicité optimisée.
An 2 : Lancement offre B2B data (partenariat annonceurs premium).
An 3 : Revenu digital additionnel = 2,3 + 1 + 1,5 = 4,8M€/an.
Permet de compenser environ 60% du déclin print annuel (8% × 200M = 16M€). Pas suffisant seul — nécessite aussi restructuration print.`
  }
].forEach(function(c) {
  DATA.cases.push(c);
});

// ══════════════════════════════════════════════════════════
// NORMALISATION — s'assure que tous les drills ont prompt + time
// (les nouvelles fiches utilisent `question` et pas `prompt`)
// ══════════════════════════════════════════════════════════
DATA.modules.forEach(function(m) {
  if (!m.drills) return;
  m.drills.forEach(function(d) {
    if (!d.prompt && d.question) d.prompt = d.question;
    if (!d.prompt && d.exhibit) {
      var q = d.questions && d.questions.length ? d.questions[0] : '';
      d.prompt = '[' + (d.exhibit.type || 'Exhibit') + '] ' + d.exhibit.title + (q ? ' — ' + q : '');
    }
    if (!d.time) {
      if (d.type === 'market_sizing') d.time = 240;
      else if (d.type === 'exhibit_analysis') d.time = 120;
      else if (d.type === 'fundamentals_quiz') d.time = 45;
      else d.time = 90;
    }
  });
});

})();

