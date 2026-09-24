// ============================================================
// DATA-COURSES-MATH.JS — CAT-11MATH Mental Math & Formules
//                       + CAT-12GLOS Glossaire & Acronymes
// ============================================================
(function () {

DATA.courses.push(

  // ══════════════════════════════════════════════════════════
  // CAT-11MATH — MENTAL MATH & QUANTITATIF
  // ══════════════════════════════════════════════════════════
  {
    id: 'CAT-11MATH', title: 'Mental Math & Quantitatif', icon: '🔢', color: '#0ea5e9', order: 13,
    submodules: [
      {
        id: 'CAT-11MATH-01', title: 'Formules Essentielles',
        fiches: [
          {
            id: 'F-MM01', title: 'Formules indispensables — le kit complet', duration: '20 min',
            content: `
<p>Ces formules reviennent dans <strong>100% des cas les grands cabinets</strong>. Mémorisez-les jusqu'à pouvoir les énoncer en 2 secondes. Ce n'est pas de la théorie — ce sont les calculs que vous ferez à la main ou mentalement pendant l'entretien.</p>

<h3>Formules de base</h3>
<div class="formula-box">Croissance (%) = (Valeur finale − Valeur initiale) / Valeur initiale × 100
Exemple : (120 − 100) / 100 = 20%

Marge brute (%) = (Revenus − COGS) / Revenus × 100
Exemple : (200 − 130) / 200 = 35%

Marge nette (%) = Résultat net / Revenus × 100

Marge EBITDA = EBITDA / Revenus × 100
Marge EBIT = EBIT / Revenus × 100

Point mort (breakeven) = Coûts fixes / Marge sur coût variable unitaire
Exemple : 10 000 000 / 40€ = 250 000 unités

Marge sur coût variable unitaire = Prix de vente − Coût variable unitaire
</div>

<h3>Formules CAGR (taux de croissance annuel composé)</h3>
<div class="formula-box">CAGR = (Valeur finale / Valeur initiale)^(1/n) − 1
où n = nombre d'années

Astuce rapide — Règle des 70 :
Années pour doubler ≈ 70 / taux de croissance (%)
Exemple : à 10% / an, doublement en ≈ 7 ans

Approximation de CAGR :
Si valeur × 2 en n ans → CAGR ≈ 70/n %
Si valeur × 4 en n ans → CAGR ≈ 2 × (70/n) %

Croissance cumulée sur n années à taux r :
(1 + r)^n
Valeurs à mémoriser :
(1.10)^3 ≈ 1.33    (1.10)^5 ≈ 1.61    (1.20)^3 ≈ 1.73
(1.15)^3 ≈ 1.52    (1.25)^3 ≈ 1.95    (1.30)^3 ≈ 2.20
</div>

<h3>Formules part de marché et pricing</h3>
<div class="formula-box">Part de marché (%) = CA entreprise / CA marché total × 100

Revenu = Quantité vendue × Prix moyen

Impact d'un changement de prix sur le CA :
ΔCA = ΔP × Q + P × ΔQ (effet prix + effet volume)

Élasticité-prix = (ΔQ/Q) / (ΔP/P)
Si ε = −1.5 et prix +10% : ΔQ = −15% → ΔCA = 1.10 × 0.85 = 0.935 (−6.5%)

Taux de conversion = Acheteurs / Visiteurs × 100
LTV (Lifetime Value) = Revenu mensuel × Marge × (1 / Churn mensuel)
CAC payback = CAC / (Revenu mensuel × Marge)
</div>

<h3>Formules de valorisation et finance</h3>
<div class="formula-box">EV (Enterprise Value) = EBITDA × Multiple sectoriel
Multiple typique : tech 8-15×, industriel 5-8×, retail 4-7×

DCF simplifié : VAN = Σ FCF_t / (1+r)^t
Valeur terminale = FCF_n × (1+g) / (r−g)   [Formule Gordon-Shapiro]

ROI = (Gain − Coût) / Coût × 100
Payback = Investissement / Cash flow annuel

Free Cash Flow = EBITDA − Capex − ΔBesoin en Fonds de Roulement
</div>

<h3>Formules opérationnelles</h3>
<div class="formula-box">OEE (Efficacité globale) = Disponibilité × Performance × Qualité
→ Benchmark world-class : OEE > 85%

Taux d'utilisation = Volume produit / Capacité disponible

Coût unitaire = Coûts totaux / Volume produit
→ Si utilisation ↑, coût fixe unitaire ↓ (économies d'échelle)

NPS (Net Promoter Score) = % Promoteurs − % Détracteurs
→ Benchmark excellent : NPS > 50

Taux d'attrition (churn) = Clients perdus / Clients début période × 100
</div>

<div class="warning-box"><strong>Ne pas confondre marge et markup :</strong> Marge = profit / prix de vente. Markup = profit / coût. Pour un produit coûtant 80€ vendu 100€ : marge = 20%, markup = 25%. Les deux donnent des % différents — toujours préciser lequel vous utilisez.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Annoncez systématiquement votre formule avant de calculer. "CAGR = (final/initial)^(1/n) − 1. Ici (200/100)^(1/3) − 1 = 2^(0.33) − 1 ≈ 26%." Cette pratique montre que vous structurez votre calcul, pas que vous devinez.</div>`
          },

          {
            id: 'F-MM02', title: 'Calculs essentiels — techniques et raccourcis', duration: '18 min',
            content: `
<p>Le mental math en entretien n'est pas un concours de calcul — c'est un test de clarté et de méthode. Les interviewers les grands cabinets savent que vous pouvez vous tromper sous stress. Ce qu'ils notent : est-ce que vous structurez votre calcul ? Est-ce que vous faites un sanity check ? Est-ce que vous arrondissez intelligemment ?</p>

<h3>Technique 1 — Décomposer avant de calculer</h3>
<p>Décomposez tout calcul difficile en étapes simples. Travaillez avec des puissances de 10 et des fractions simples.</p>
<div class="formula-box">Exemples :
37% de 240 → 37/100 × 240 = 37 × 2.4 → 30 × 2.4 + 7 × 2.4 = 72 + 16.8 = 88.8

1.8M × 35% → 1.8M × 30% + 1.8M × 5% = 540k + 90k = 630k

23 × 47 → 23 × 50 − 23 × 3 = 1150 − 69 = 1081

Diviser par 8 = diviser par 2 trois fois : 2400 / 8 = 1200 / 4 = 600 / 2 = 300
</div>

<h3>Technique 2 — Les fractions essentielles à mémoriser</h3>
<table class="data-table">
  <tr><th>Fraction</th><th>%</th><th>Usage</th></tr>
  <tr><td>1/3</td><td>33.3%</td><td>Tiers de marché, répartition</td></tr>
  <tr><td>1/4</td><td>25%</td><td>Quart, marge brute typique B2B</td></tr>
  <tr><td>1/5</td><td>20%</td><td>Marge EBITDA standard</td></tr>
  <tr><td>1/6</td><td>16.7%</td><td>Croissance mensuelle → annuelle ×6</td></tr>
  <tr><td>1/7</td><td>~14%</td><td>Doublement en 7 ans à 10%</td></tr>
  <tr><td>1/8</td><td>12.5%</td><td>Taxe, réduction</td></tr>
  <tr><td>3/8</td><td>37.5%</td><td>Marge brute retail premium</td></tr>
  <tr><td>2/3</td><td>66.7%</td><td>Majorité des deux tiers</td></tr>
  <tr><td>3/4</td><td>75%</td><td>Taux d'utilisation cible usine</td></tr>
</table>

<h3>Technique 3 — Arrondir intelligemment</h3>
<p>Arrondissez au nombre le plus simple qui préserve l'ordre de grandeur. Signalez l'arrondi à voix haute. Compensez à la fin si nécessaire.</p>
<div class="formula-box">Marché 187M€ → utiliser 200M€ (signal : "environ 200M")
CAGR 11.3% → utiliser 11% ou "environ 10-12%"
Population 67.2M → utiliser 65M ou 70M selon le contexte

Quand arrondir vers le haut vs le bas :
→ Si c'est une estimation de marché : arrondir de manière conservatrice
→ Si c'est un ROI que vous défendez : arrondir modestement
→ Si c'est un risque : arrondir vers le haut (prudence)
</div>

<h3>Technique 4 — Le sanity check systématique</h3>
<p>Après tout calcul, vérifiez l'ordre de grandeur avec une estimation indépendante. Cela évite les erreurs d'un facteur 10 — la pire erreur en entretien.</p>
<div class="formula-box">Exemple de sanity check :
Calcul : marché des smartphones en France = 200M × 80% adultes × 30% pénétration
  × 500€ = 24Bn€ → TROP ÉLEVÉ, erreur quelque part.
Check : fabricants annoncent ~6-7Bn€ de ventes en France.
Erreur identifiée : pénétration devrait être taux de renouvellement annuel (~20%),
pas taux de possession (90%). → 200M × 80% × 20% × 500€ = 16Bn€ — plus cohérent.
</div>

<div class="warning-box"><strong>Calculer trop vite et se tromper :</strong> Mieux vaut annoncer "je vais prendre 20 secondes pour structurer ce calcul" et donner la bonne réponse. Un calcul faux réalisé en 5 secondes est une performance négative, pas positive.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> La formule gagnante pour tout calcul complexe : "(1) voici la formule que j'utilise — (2) voici les chiffres que j'insère — (3) voici le résultat — (4) voici le sanity check." Cette structure en 4 étapes transforme un calcul en démonstration de rigueur analytique.</div>`
          },

          {
            id: 'F-MM03', title: 'Pourcentages — toutes les structures de calcul', duration: '15 min',
            content: `
<p>Les <strong>pourcentages</strong> sont omniprésents dans les cas les grands cabinets. Maîtriser leurs structures de calcul est non-négociable. Cette fiche couvre tous les cas de figure que vous rencontrerez.</p>

<h3>Structure 1 — Calculer X% d'un nombre</h3>
<div class="formula-box">X% de N = N × X/100 = N × 0.X

Astuce : travailler avec des fractions décimales simples
10% de N = N/10
5% de N = N/20 (la moitié de 10%)
1% de N = N/100
15% de N = 10% + 5% = N/10 + N/20

Exemple : 35% de 840 = 30% + 5% = 252 + 42 = 294
Vérification : 35% ≈ 1/3 → 840/3 ≈ 280 (cohérent)</div>

<h3>Structure 2 — Calculer une variation en %</h3>
<div class="formula-box">Variation % = (Nouvelle valeur − Ancienne valeur) / Ancienne valeur × 100

Pièges :
- Toujours diviser par la valeur DE RÉFÉRENCE (généralement l'ancienne)
- Un CA qui passe de 100 à 80 est −20%, pas −25%
- Un CA qui passe de 80 à 100 est +25%, pas +20%

Formule inverse (trouver la valeur initiale) :
Si après −X% on obtient N → valeur initiale = N / (1 − X/100)</div>

<h3>Structure 3 — Variations en % successives</h3>
<div class="formula-box">Deux hausses successives a% et b% :
Hausse totale = (1 + a/100) × (1 + b/100) − 1
Exemple : +20% puis +25% = 1.20 × 1.25 = 1.50 → +50%

Deux baisses successives :
−20% puis −25% = 0.80 × 0.75 = 0.60 → −40% (NOT −45%)

Hausse puis baisse de même amplitude ≠ retour à zéro :
+20% puis −20% = 1.20 × 0.80 = 0.96 → −4% (perte nette)
−20% puis +20% = 0.80 × 1.20 = 0.96 → −4% (même résultat)

Règle générale pour petites variations :
Somme ≈ approximation correcte si chaque variation < 10%
Au-delà : toujours multiplier les facteurs</div>

<h3>Structure 4 — Points de % vs variation de %</h3>
<div class="formula-box">DISTINCTION CRUCIALE :
"La marge est passée de 20% à 23%" :
→ Variation absolue = +3 POINTS DE POURCENTAGE
→ Variation relative = +15% (3/20 × 100)

En entretien, précisez toujours : "3 points" ou "15% de hausse relative"
Les deux peuvent être vrais mais signifient des choses très différentes.

Exemple fréquent — market share :
Passer de 10% à 15% = +5 points de part de marché = +50% de part relative</div>

<h3>Exercices instantanés</h3>
<table class="data-table">
  <tr><th>Question</th><th>Réponse</th><th>Méthode</th></tr>
  <tr><td>22% de 450M</td><td>99M</td><td>20% = 90M, 2% = 9M → 99M</td></tr>
  <tr><td>Croissance 60→84</td><td>+40%</td><td>24/60 = 2/5 = 40%</td></tr>
  <tr><td>−30% puis +50%</td><td>+5%</td><td>0.70 × 1.50 = 1.05</td></tr>
  <tr><td>Valeur avant +25% = 100</td><td>80</td><td>100/1.25 = 80</td></tr>
  <tr><td>18% de 250</td><td>45</td><td>10%=25, 8%=20 → 45</td></tr>
</table>

<div class="warning-box"><strong>Confondre point de % et % :</strong> Si la marge passe de 10% à 15%, un analyste non rigoureux dira "+50%". C'est la variation relative. La variation absolue est "+5 points". les grands cabinets attend des candidats qui précisent automatiquement laquelle ils expriment.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> En entretien, pour tout résultat en % : dites systématiquement "5 points de marge supplémentaires, soit une hausse relative de 33%" quand les deux métriques sont pertinentes. Cette précision terminologique est un signal fort de rigueur quantitative.</div>`
          }
        ]
      },
      {
        id: 'CAT-11MATH-02', title: 'Ordres de Grandeur & Benchmarks',
        fiches: [
          {
            id: 'F-MM04', title: 'Ordres de grandeur à mémoriser — France & Monde', duration: '20 min',
            content: `
<p>Les <strong>ordres de grandeur</strong> sont le moteur du market sizing. Connaître ces chiffres par cœur vous permet de construire des estimations crédibles en 2 minutes. les grands cabinets ne vous demande pas la précision — il vous demande de démontrer que vous connaissez les ordres de grandeur du monde réel.</p>

<h3>Données démographiques France</h3>
<table class="data-table">
  <tr><th>Donnée</th><th>Valeur</th><th>Utilisation</th></tr>
  <tr><td>Population totale</td><td>68 millions</td><td>Base de tout sizing France</td></tr>
  <tr><td>Ménages</td><td>~30 millions</td><td>Consommation domestique</td></tr>
  <tr><td>Taille moyenne ménage</td><td>2,2 personnes</td><td>68M / 2.2 = ~30M ménages</td></tr>
  <tr><td>Population active</td><td>~30 millions</td><td>Marché B2B, emploi</td></tr>
  <tr><td>Taux d'urbanisation</td><td>80%</td><td>Marché urTier 1 = 54M</td></tr>
  <tr><td>Espérance de vie</td><td>~83 ans</td><td>Structure pyramide des âges</td></tr>
  <tr><td>Naissances / an</td><td>~700 000</td><td>Marché pédiatrique, scolaire</td></tr>
  <tr><td>PIB France</td><td>~2 800 Mds€</td><td>Rapport CA/PIB, benchmarks</td></tr>
  <tr><td>PIB/habitant</td><td>~42 000€</td><td>Pouvoir d'achat moyen</td></tr>
  <tr><td>Revenu médian ménage</td><td>~25 000€/an</td><td>Affordability checks</td></tr>
</table>

<h3>Données économiques mondiales</h3>
<table class="data-table">
  <tr><th>Donnée</th><th>Valeur</th><th>Ordre de grandeur</th></tr>
  <tr><td>Population mondiale</td><td>8 milliards</td><td>Europe = 750M, USA = 335M</td></tr>
  <tr><td>PIB mondial</td><td>~100 000 Mds$</td><td>USA = 27 000 Mds, Chine = 18 000 Mds</td></tr>
  <tr><td>PIB Europe (UE)</td><td>~17 000 Mds€</td><td>France = 16% du PIB UE</td></tr>
  <tr><td>Population Chine</td><td>1,4 milliard</td><td>Classe moyenne = 500M</td></tr>
  <tr><td>Population USA</td><td>335 millions</td><td>PIB/hab ≈ 80 000$</td></tr>
  <tr><td>Population Inde</td><td>1,4 milliard</td><td>PIB/hab ≈ 2 500$</td></tr>
</table>

<h3>Benchmarks de marges par secteur</h3>
<table class="data-table">
  <tr><th>Secteur</th><th>Marge brute</th><th>Marge EBITDA</th><th>Marge nette</th></tr>
  <tr><td>SaaS / Logiciel</td><td>70–85%</td><td>15–30%</td><td>10–20%</td></tr>
  <tr><td>Pharma (médicaments)</td><td>70–80%</td><td>25–40%</td><td>15–25%</td></tr>
  <tr><td>Luxe (LVMH type)</td><td>65–75%</td><td>25–35%</td><td>15–20%</td></tr>
  <tr><td>Banque de détail</td><td>NMF*</td><td>30–40%</td><td>15–25%</td></tr>
  <tr><td>Distribution alimentaire</td><td>20–28%</td><td>3–6%</td><td>1–3%</td></tr>
  <tr><td>Automobile</td><td>15–25%</td><td>5–10%</td><td>2–6%</td></tr>
  <tr><td>Consulting / Services pro</td><td>40–60%</td><td>20–30%</td><td>10–15%</td></tr>
  <tr><td>E-commerce (Amazon type)</td><td>35–45%</td><td>5–12%</td><td>2–5%</td></tr>
  <tr><td>Restauration</td><td>65–75%</td><td>10–15%</td><td>5–8%</td></tr>
  <tr><td>Énergie / Pétrole</td><td>10–20%</td><td>15–25%</td><td>5–10%</td></tr>
</table>
<p style="font-size:0.8rem;color:var(--text-muted)">*NMF = Not Meaningful Figure (les banques utilisent NIM = Net Interest Margin)</p>

<h3>Tailles de marché typiques — France</h3>
<table class="data-table">
  <tr><th>Marché</th><th>Taille France</th></tr>
  <tr><td>Grande distribution alimentaire</td><td>~250 Mds€</td></tr>
  <tr><td>Assurance (toutes lignes)</td><td>~200 Mds€ de primes</td></tr>
  <tr><td>Immobilier (transactions)</td><td>~150–200 Mds€/an</td></tr>
  <tr><td>Pharmacie / santé</td><td>~40 Mds€</td></tr>
  <tr><td>Télécoms grand public</td><td>~35 Mds€</td></tr>
  <tr><td>Transport aérien (France)</td><td>~25 Mds€</td></tr>
  <tr><td>Restauration hors foyer</td><td>~90 Mds€</td></tr>
  <tr><td>E-commerce France</td><td>~150 Mds€</td></tr>
</table>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Lors d'un sizing, ancrez votre estimation à au moins un chiffre réel connu ("la France compte 68M d'habitants, soit environ 30M de ménages") avant de construire votre estimation. Partir d'une base factuelle démontre que vous avez une connaissance du monde réel, pas que vous improvisez.</div>`
          },

          {
            id: 'F-MM05', title: 'CAGR — maîtrise totale', duration: '15 min',
            content: `
<p>Le <strong>CAGR</strong> (Compound Annual Growth Rate — Taux de Croissance Annuel Composé) est le calcul quantitatif le plus fréquent dans les cas les grands cabinets. Il apparaît dans les cas de croissance, market sizing, M&A, et pricing. Vous DEVEZ le calculer mentalement en moins de 10 secondes.</p>

<h3>Définition</h3>
<p>Le CAGR est le taux de croissance annuel constant qui permettrait d'atteindre la valeur finale depuis la valeur initiale en n années. Il lisse les variations annuelles pour donner un taux "moyen composé".</p>
<div class="formula-box">CAGR = (Valeur finale / Valeur initiale)^(1/n) − 1

Ou, de façon équivalente :
Valeur finale = Valeur initiale × (1 + CAGR)^n

Exemple : 100M → 200M en 7 ans
CAGR = (200/100)^(1/7) − 1 = 2^(1/7) − 1 ≈ 10.4%
Via règle des 70 : 70/7 = 10% ← approximation rapide acceptable</div>

<h3>La règle des 70 (doublement)</h3>
<div class="formula-box">Années pour doubler ≈ 70 / CAGR (en %)
CAGR ≈ 70 / Années pour doubler

Table de référence rapide :
CAGR 5% → doublement en ~14 ans
CAGR 7% → doublement en ~10 ans
CAGR 10% → doublement en ~7 ans
CAGR 14% → doublement en ~5 ans
CAGR 18% → doublement en ~4 ans
CAGR 23% → doublement en ~3 ans
CAGR 35% → doublement en ~2 ans
CAGR 70% → doublement en ~1 an</div>

<h3>Estimation mentale de CAGR — méthode en 3 étapes</h3>
<div class="formula-box">Étape 1 : Calculer le ratio Finale/Initiale
100M → 160M en 4 ans → ratio = 1.6

Étape 2 : Identifier le CAGR approximatif par encadrement
(1.10)^4 = 1.46, (1.15)^4 = 1.75
1.6 est entre 1.46 et 1.75 → CAGR entre 10% et 15%
1.6 est plus proche de 1.46 → CAGR ≈ 12-13%

Étape 3 : Affiner (optionnel) ou donner la fourchette
"Le CAGR est entre 12 et 14%, disons environ 13%"

Valeurs puissances à mémoriser :
(1.10)^3 = 1.33    (1.10)^4 = 1.46    (1.10)^5 = 1.61
(1.15)^3 = 1.52    (1.15)^4 = 1.75    (1.20)^3 = 1.73
(1.25)^3 = 1.95    (1.25)^4 = 2.44    (1.30)^3 = 2.20</div>

<h3>CAGR vs taux de croissance annuel simple</h3>
<div class="formula-box">NE PAS CONFONDRE :
Croissance totale de 60% en 3 ans ≠ CAGR de 20%
Croissance totale de 60% = CAGR ≈ (1.60)^(1/3) − 1 ≈ 17%

Le CAGR est TOUJOURS inférieur au taux de croissance moyen simple.
Exemple : +100% an 1, 0% an 2 → croissance moyenne 50%, CAGR = (2.00)^(1/2) − 1 = 41%</div>

<h3>Exercices de CAGR express</h3>
<table class="data-table">
  <tr><th>Question</th><th>Réponse</th><th>Méthode</th></tr>
  <tr><td>50M → 100M en 7 ans</td><td>~10%</td><td>Doublement. 70/7 = 10%</td></tr>
  <tr><td>100M → 133M en 3 ans</td><td>~10%</td><td>(1.10)^3 = 1.33 ✓</td></tr>
  <tr><td>100M → 200M en 3 ans</td><td>~26%</td><td>2^(1/3) ≈ 1.26</td></tr>
  <tr><td>Doublement en 5 ans</td><td>~14%</td><td>70/5 = 14%</td></tr>
  <tr><td>200M → 400M en 4 ans</td><td>~19%</td><td>(1.19)^4 ≈ 2.0 ✓</td></tr>
</table>

<div class="warning-box"><strong>Calculer le CAGR comme une croissance moyenne simple :</strong> (Final−Initial)/n/Initial n'est PAS le CAGR. La croissance composée est toujours inférieure car les intérêts se composent. Un marché qui passe de 100 à 200 en 5 ans a un CAGR de 14.9%, pas de (100/5)/100 = 20%.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Après avoir calculé un CAGR, contextualisez-le : "Un CAGR de 15% signifie que le marché double en ~5 ans — c'est un marché en forte croissance, ce qui justifie un investissement maintenant pour capter la croissance." Cette interprétation qualitative de votre résultat quantitatif est ce qui distingue un analyste d'un consultant.</div>`
          }
        ]
      },
      {
        id: 'CAT-11MATH-03', title: 'Structures de Calcul Consulting',
        fiches: [
          {
            id: 'F-MM06', title: 'Structures de calcul — les 8 schémas récurrents', duration: '20 min',
            content: `
<p>En entretien les grands cabinets, vous rencontrerez toujours les mêmes <strong>structures de calcul</strong>. Reconnaître le schéma en 2 secondes vous permet de construire votre calcul sans hésitation. Voici les 8 schémas à maîtriser.</p>

<h3>Schéma 1 — Décomposition Revenus</h3>
<div class="formula-box">CA = Volume × Prix
CA = Volume × Prix × Mix

Décomposition à 3 niveaux :
CA Segment i = Taille marché × Part de marché × Prix moyen

Exemple : CA distribut. alimentaire =
  30M ménages × 5 visites/sem × 52 sem × 50€/visite = 390 Mds€ (ordre de grandeur)</div>

<h3>Schéma 2 — Effet prix / volume / mix</h3>
<div class="formula-box">ΔCA = Effet prix + Effet volume + Effet mix
Effet prix = Volume t0 × ΔPrix
Effet volume = Prix t1 × ΔVolume
Effet mix = résidu

Application : CA passe de 100M à 115M.
Si prix +5% (de 100€ à 105€) et volume +9% :
Effet prix = V0 × 5€ = ...
Effet volume = 105€ × ΔV = ...

En entretien : décomposer systématiquement la variation de CA en composantes</div>

<h3>Schéma 3 — Break-even et seuil de rentabilité</h3>
<div class="formula-box">Breakeven volume = Coûts fixes / Marge sur coût variable
Breakeven CA = Coûts fixes / Taux de marge sur coût variable
Taux de marge sur coût variable = (Prix − Coût variable) / Prix

Exemple : Prix 100€, coût variable 60€, coûts fixes 8M€
Breakeven volume = 8M / (100−60) = 8M / 40 = 200 000 unités
Breakeven CA = 8M / 40% = 20M€
</div>

<h3>Schéma 4 — ROI et payback</h3>
<div class="formula-box">ROI simple = (Gain − Coût) / Coût × 100
Payback = Investissement initial / Cash flow annuel récurrent
Payback précis = cumuler les cash flows jusqu'à couvrir l'investissement

Exemple : 5M€ investissement, CF an1=1M, an2=2M, an3=3M
Après an1 : 4M restant. Après an2 : 2M restant. Mi-an3 : payback atteint
→ Payback ≈ 2.67 ans (2 ans + 2/3 d'année)</div>

<h3>Schéma 5 — Taux d'utilisation et capacité</h3>
<div class="formula-box">Utilisation = Volume produit / Capacité disponible
Coût fixe unitaire = Coûts fixes / Volume produit
→ Si utilisation ↑, coût fixe unitaire ↓ (dilution des fixes)

Capacité disponible = Capacité nominale × (1 − Taux d'arrêt)
Capacité nominale annuelle = Heures ouvrées × Productivité horaire × Jours

Exemple : 8h/jour × 250 jours × 100 unités/h = 200 000 unités/an</div>

<h3>Schéma 6 — Taille de marché (sizing)</h3>
<div class="formula-box">Top-down : Marché = Population cible × Taux d'adoption × Fréquence × Prix
Bottom-up : Marché = Nombre de fournisseurs × CA moyen par fournisseur

Toujours croiser les deux méthodes et réconcilier les résultats.
Écart > 50% = chercher l'hypothèse incorrecte</div>

<h3>Schéma 7 — Synergies et valeur d'acquisition</h3>
<div class="formula-box">Valeur totale acquisition = Valeur standalone cible + Valeur synergies − Prime payée
Synergies = Économies de coûts (récurrentes) + Synergies revenus (moins certaines)
Valeur synergies ≈ Synergies annuelles / (r − g) [formule Gordon-Shapiro simplifiée]

Règle pratique : synergies coûts capitalisées à 8-10×, synergies revenus à 5-7× (plus risquées)</div>

<h3>Schéma 8 — LTV / CAC (unit economics)</h3>
<div class="formula-box">LTV = Revenu mensuel moyen × Marge brute / Churn mensuel
CAC = Budget marketing total / Nouveaux clients acquis
LTV/CAC > 3 = économie viable (règle empirique SaaS)
Payback CAC = CAC / (Revenu mensuel × Marge brute)

Exemple : LTV = 50€/mois × 60% / 2% = 1 500€
CAC = 150€ → LTV/CAC = 10 → très solide</div>

<div class="warning-box"><strong>Construire un calcul sans annoncer le schéma :</strong> Avant de calculer, dites quel schéma vous utilisez ("je vais utiliser un breakeven pour vérifier la viabilité"). Cette annonce structure votre raisonnement pour l'interviewer et vous évite de vous perdre à mi-calcul.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Les 8 schémas ci-dessus couvrent 90% des calculs que vous ferez en entretien. Entraînez-vous jusqu'à reconnaître le schéma applicabledans les 10 secondes qui suivent la question. La reconnaissance du pattern est l'étape la plus critique — le calcul lui-même est secondaire.</div>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // CAT-12GLOS — GLOSSAIRE & ACRONYMES
  // ══════════════════════════════════════════════════════════
  {
    id: 'CAT-12GLOS', title: 'Glossaire & Acronymes', icon: '📖', color: '#94a3b8', order: 14,
    submodules: [
      {
        id: 'CAT-12GLOS-01', title: 'Finance & Comptabilité',
        fiches: [
          {
            id: 'F-GL01', title: 'Acronymes finance — définitions complètes', duration: '20 min',
            content: `
<p>Ces acronymes apparaissent dans <strong>tous les cas les grands cabinets</strong>. Ne pas les connaître est rédhibitoire. Cette fiche les définit, les contextualise, et vous donne les relations entre eux.</p>

<h3>Le compte de résultat (P&L) — de haut en bas</h3>
<div class="formula-box">CA (Chiffre d'Affaires) = Revenue
  — Valeur totale des ventes sur la période.
  — En anglais : Revenue, Turnover, Top line.

COGS (Cost of Goods Sold) = Coût des marchandises vendues
  — Coûts directement liés à la production (matières, main d'oeuvre directe).
  — En français : Coût de Revient des Ventes.

Marge Brute = CA − COGS
  — Profit avant les coûts opérationnels non-productifs.

SG&A (Selling, General & Administrative expenses)
  — Frais de vente, frais généraux et administratifs.
  — En français : Frais commerciaux + Frais généraux + Administration.

EBITDA (Earnings Before Interest, Taxes, Depreciation & Amortization)
  = Résultat avant intérêts, impôts, dépréciations et amortissements.
  — Proxy du cash-flow opérationnel. Utilisé dans les multiples de valorisation.
  — EBITDA = CA − COGS − SG&A (avant D&A)

D&A (Depreciation & Amortization) = Dotations aux amortissements
  — Amortissement des immobilisations corporelles (Depreciation) et incorporelles (Amortization).
  — Non-cash : réduction du résultat sans sortie de cash.

EBIT (Earnings Before Interest and Taxes) = Résultat opérationnel (EBIT = EBITDA − D&A)
  — Aussi appelé "operating income" ou "résultat d'exploitation".

EBT (Earnings Before Taxes) = Résultat avant impôts
  — EBIT − Charges d'intérêts nettes.

Net income = Résultat net = EBT − Impôts
  — "Bottom line" — ce qui reste pour les actionnaires.</div>

<h3>Ratios et métriques clés</h3>
<div class="formula-box">ROI (Return On Investment) = (Gain − Coût) / Coût × 100
ROE (Return On Equity) = Résultat net / Capitaux propres × 100
ROA (Return On Assets) = Résultat net / Total actifs × 100
ROCE (Return on Capital Employed) = EBIT / Capital employé × 100

EV (Enterprise Value) = Capitalisation boursière + Dette nette
  — Valeur de l'entreprise entière (actionnaires + créanciers).

WACC (Weighted Average Cost of Capital)
  — Coût moyen pondéré du capital. Taux d'actualisation pour les DCF.
  — Typiquement 8-12% selon le secteur et le risque.

P/E ratio (Price-to-Earnings) = Prix action / BPA (bénéfice par action)
EV/EBITDA = Valeur d'entreprise / EBITDA
  — Multiple de valorisation. Typique : 6-12× selon le secteur.

FCF (Free Cash Flow) = EBITDA − Capex − ΔBFRFlu
BFR (Besoin en Fonds de Roulement) = Stocks + Créances − Dettes fournisseurs
  — En anglais : Working Capital (WC)

Capex (Capital Expenditures) = Investissements en immobilisations
NPV (Net Present Value) = VAN (Valeur Actuelle Nette)
IRR (Internal Rate of Return) = TRI (Taux de Rentabilité Interne)</div>

<h3>Métriques opérationnelles et marketing</h3>
<div class="formula-box">CAGR (Compound Annual Growth Rate) = Taux de croissance annuel composé
MRR (Monthly Recurring Revenue) = Revenus récurrents mensuels (SaaS)
ARR (Annual Recurring Revenue) = MRR × 12
ACV (Annual Contract Value) = Valeur annuelle d'un contrat
LTV ou CLV (Lifetime Value / Customer Lifetime Value)
  = Valeur totale générée par un client sur toute sa durée de vie.
CAC (Customer Acquisition Cost) = Coût d'acquisition client
NPS (Net Promoter Score) = % Promoteurs − % Détracteurs
ARPU (Average Revenue Per User) = CA / Nombre d'utilisateurs
MAU / DAU = Monthly / Daily Active Users

Churn rate = Taux d'attrition = % clients perdus sur une période
Retention rate = 1 − Churn rate</div>

<h3>Métriques supply chain et opérations</h3>
<div class="formula-box">OEE (Overall Equipment Effectiveness) = Disponibilité × Performance × Qualité
OTIF (On Time In Full) = Taux de livraison à temps et complet
SKU (Stock Keeping Unit) = Référence produit
WC (Working Capital) = BFR (voir ci-dessus)
DSO (Days Sales Outstanding) = Délai moyen de recouvrement
  = Créances clients / CA × 365
DPO (Days Payable Outstanding) = Délai de paiement fournisseurs
  = Dettes fournisseurs / Achats × 365
DIO (Days Inventory Outstanding) = Rotation des stocks en jours
  = Stocks / COGS × 365</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Si un interviewer vous demande "quelle est la marge EBITDA du client ?", vérifiez mentalement que vous calculez bien (CA − COGS − SG&A) / CA et non (CA − COGS − SG&A − D&A) / CA (qui serait la marge EBIT). Ces confusions révèlent une maîtrise incomplète des concepts financiers de base.</div>`
          },

          {
            id: 'F-GL02', title: 'Acronymes consulting & stratégie', duration: '12 min',
            content: `
<p>Au-delà des acronymes financiers, les grands cabinets utilise un <strong>vocabulaire stratégique</strong> spécifique. Cette fiche couvre les termes que vous entendrez en entretien et dans les cas.</p>

<h3>Frameworks et analyse stratégique</h3>
<div class="formula-box">MECE (Mutually Exclusive, Collectively Exhaustive)
  — Structure où les branches ne se chevauchent pas ET couvrent l'ensemble du sujet.
  — Principe fondamental de toute structuration les grands cabinets.

SWOT = Strengths, Weaknesses, Opportunities, Threats
  — Analyse interne (SW) + externe (OT).

PEST / PESTEL = Political, Economic, Social, Technological, Environmental, Legal
  — Analyse macro-environnementale. Utilisé dans les cas de market entry.

5 forces de Porter = Rivalité + Entrants potentiels + Fournisseurs + Clients + Substituts
  — Outil d'analyse de l'attractivité d'un secteur.

Growth-Share Matrix
  — 2×2 : Stars / Cash Cows / Question Marks / Dogs
  — Axes : Part de marché relative × Croissance du marché

TAM / SAM / SOM :
  TAM (Total Addressable Market) = marché total adressable
  SAM (Serviceable Addressable Market) = marché cible réaliste
  SOM (Serviceable Obtainable Market) = marché capturable à CT</div>

<h3>Finance d'entreprise — vocabulaire M&A</h3>
<div class="formula-box">M&A (Mergers & Acquisitions) = Fusions & Acquisitions
CDD (Commercial Due Diligence) = Vérification commerciale pré-acquisition
FDD (Financial Due Diligence) = Vérification financière
MBO (Management Buyout) = Rachat par le management en place
LBO (Leveraged Buyout) = Rachat avec effet de levier (dette)
PE (Private Equity) = Capital investissement / capital-risque
VC (Venture Capital) = Capital-risque (early stage)
IPO (Initial Public Offering) = Introduction en bourse
SPAC = Special Purpose Acquisition Company
TSR (Total Shareholder Return) = Rendement total pour l'actionnaire

Earn-out = Complément de prix conditionnel aux performances post-acquisition
Escrow = Montant bloqué en garantie pendant une période post-acquisition</div>

<h3>Opérations et RH</h3>
<div class="formula-box">KPI (Key Performance Indicator) = Indicateur clé de performance
SLA (Service Level Agreement) = Engagement de niveau de service
RPA (Robotic Process Automation) = Automatisation de processus par robots logiciels
ERP (Enterprise Resource Planning) = Système d'information intégré (SAP, Oracle)
CRM (Customer Relationship Management) = Gestion relation client (Salesforce)
B2B = Business to Business (vente entre entreprises)
B2C = Business to Consumer (vente aux particuliers)
B2B2C = Business to Business to Consumer (plateforme intermédiaire)

HR / RH = Human Resources / Ressources Humaines
FTE (Full-Time Equivalent) = Équivalent temps plein
GM (General Manager) = Directeur général d'une division / pays
COO = Chief Operating Officer
CFO = Chief Financial Officer
CTO = Chief Technology Officer
CMO = Chief Marketing Officer
CHRO = Chief Human Resources Officer</div>

<div class="warning-box"><strong>Utiliser des acronymes sans les comprendre :</strong> Si vous employez un acronyme (EBITDA, WACC, NPS) et que l'interviewer vous demande de le définir, une réponse incomplète est très pénalisante. Mieux vaut utiliser le terme complet la première fois ("le taux de croissance annuel composé, ou CAGR") que d'être pris en défaut sur sa définition.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Utilisez les acronymes avec précision et naturellement — c'est le signe d'un praticien, pas d'un étudiant qui les a mémorisés. Dire "l'EBITDA de la cible est 40M, soit un multiple EV/EBITDA de 8× sur la base d'une valorisation de 320M" démontre une maîtrise de la langue du business, pas seulement des chiffres.</div>`
          }
        ]
      }
    ]
  }

); // end DATA.courses.push

})();

