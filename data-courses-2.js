// ============================================================
// DATA-COURSES-2.JS — CAT-03 Profitabilité + CAT-04 Market Sizing + CAT-05ME Market Entry
// ============================================================
(function () {

DATA.courses.push(

  // ══════════════════════════════════════════════════════════
  // CAT-03 — PROFITABILITÉ
  // ══════════════════════════════════════════════════════════
  {
    id: 'CAT-03', title: 'Profitabilité', icon: '📊', color: '#f59e0b', order: 3,
    submodules: [
      {
        id: 'CAT-03-01', title: 'Analyse du Profit',
        fiches: [
          {
            id: 'F-020', title: 'Framework P&L complet — décomposition Revenus et Coûts', duration: '25 min',
            content: `
<p>La <strong>profitabilité</strong> est le type de cas le plus fréquent en entretien les grands cabinets — on estime qu'environ 40% des cas tournent autour d'une question de marge ou de rentabilité. Maîtriser sa décomposition est donc non négociable. Le framework P&L (Profit & Loss, ou compte de résultat) donne une structure rigoureuse et exhaustive pour diagnostiquer pourquoi une entreprise est moins rentable qu'attendu.</p>

<h3>L'identité fondamentale</h3>
<div class="formula-box">Profit = Revenus − Coûts
Revenus = Prix Moyen × Volume
Coûts = Coûts Fixes + Coûts Variables
Coûts Variables = Coût Variable Unitaire × Volume produit
Profit = (Prix − Coût Variable Unitaire) × Volume − Coûts Fixes
       = Marge sur Coûts Variables × Volume − Coûts Fixes</div>
<p>Cette dernière formulation est particulièrement puissante : elle montre que pour dégager du profit, il faut que la marge sur coûts variables multipliée par le volume soit supérieure aux coûts fixes. C'est le principe du <strong>seuil de rentabilité</strong>.</p>

<h3>Structure complète du P&L consultant</h3>
<table class="data-table">
  <tr><th>Ligne</th><th>Définition</th><th>Formule</th></tr>
  <tr><td>Chiffre d'affaires (CA)</td><td>Revenus totaux avant déduction</td><td>Prix × Quantités vendues</td></tr>
  <tr><td>Coût des ventes (COGS)</td><td>Coûts directement liés à la production</td><td>Matières + Main d'œuvre directe</td></tr>
  <tr><td><strong>Marge brute</strong></td><td>CA − COGS</td><td>En % = Marge brute / CA</td></tr>
  <tr><td>Frais commerciaux</td><td>Marketing, force de vente</td><td>Variable ou fixe selon modèle</td></tr>
  <tr><td>Frais généraux (G&A)</td><td>Administratif, loyers, RH support</td><td>Principalement fixes</td></tr>
  <tr><td>R&D</td><td>Investissements en innovation</td><td>Variable selon industrie</td></tr>
  <tr><td><strong>EBITDA</strong></td><td>Profit opérationnel avant amortissements</td><td>CA − COGS − Frais opérationnels</td></tr>
  <tr><td>D&A</td><td>Dotations aux amortissements</td><td>Actifs / Durée de vie</td></tr>
  <tr><td><strong>EBIT (résultat opérationnel)</strong></td><td>Profit avant intérêts et impôts</td><td>EBITDA − D&A</td></tr>
  <tr><td>Charges financières</td><td>Intérêts sur dettes</td><td>Dette × Taux d'intérêt</td></tr>
  <tr><td><strong>Résultat net</strong></td><td>Profit après impôts</td><td>EBT × (1 − Taux d'imposition)</td></tr>
</table>

<h3>Démarche de diagnostic en 4 étapes</h3>
<p><strong>Étape 1 — Isoler revenues vs coûts.</strong> Commencez toujours par déterminer d'où vient la dégradation : les revenus ont-ils baissé, les coûts ont-ils augmenté, ou les deux ? Calculez l'évolution de la marge brute en premier car c'est l'indicateur le plus rapide à isoler.</p>
<p><strong>Étape 2 — Décomposer le terme problématique.</strong> Si c'est les revenus : analysez prix, volume, et mix séparément. Si c'est les coûts : distinguez fixes vs variables, puis identifiez le poste le plus dérivant.</p>
<p><strong>Étape 3 — Identifier la cause racine.</strong> La décomposition vous donne l'origine comptable du problème — mais pas nécessairement la cause business. Une baisse de prix peut venir d'une pression concurrentielle, d'une stratégie promotionnelle mal calibrée, ou d'un changement de mix géographique. Toujours relier le chiffre à une réalité business.</p>
<p><strong>Étape 4 — Quantifier l'impact et prioriser.</strong> Chiffrez la contribution de chaque facteur à l'écart total. Cela vous permettra de prioriser vos recommandations sur les postes à plus fort impact.</p>

<h3>Exemple complet — Diagnostic de profitabilité</h3>
<div class="example-box"><strong>Données :</strong><br>
N-1 : CA = 100M€, COGS = 60M€, Frais fixes = 25M€ → Profit = 15M€<br>
N : CA = 95M€, COGS = 63M€, Frais fixes = 27M€ → Profit = 5M€<br>
Écart total : −10M€<br><br>
<strong>Décomposition :</strong><br>
Impact revenus : 95 − 100 = −5M€<br>
Impact COGS : −(63 − 60) = −3M€<br>
Impact frais fixes : −(27 − 25) = −2M€<br>
Total : −5 −3 −2 = −10M€ ✓<br><br>
<strong>Conclusion :</strong> La baisse de profit est expliquée à 50% par une baisse de CA, 30% par une hausse des coûts variables, et 20% par une hausse des charges fixes.</div>

<div class="warning-box"><strong>L'erreur de la séquence inversée :</strong> De nombreux candidats sautent directement aux coûts dès qu'ils entendent "problème de rentabilité", sans vérifier d'abord les revenus. Un problème de revenus et un problème de coûts n'appellent pas les mêmes recommandations.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Un analyste les grands cabinets apprend systématiquement à "waterfall" l'écart de profit : décomposer les 10M€ d'écart en contributions indépendantes de chaque poste. Cette présentation en cascade montre à la fois la rigueur analytique et la capacité à hiérarchiser les priorités d'action.</div>`
          },

          {
            id: 'F-021', title: 'Analyse des revenus — Prix, Volume, Mix', duration: '20 min',
            content: `
<p>Les revenus d'une entreprise peuvent baisser de trois manières fondamentalement différentes : une baisse du <strong>prix moyen</strong>, une baisse du <strong>volume vendu</strong>, ou un <strong>effet mix</strong> négatif. Ces trois phénomènes ont des causes et des remèdes complètement différents — les distinguer est essentiel pour formuler les bonnes recommandations.</p>

<h3>Décomposition des revenus</h3>
<div class="formula-box">CA = Σ (Prix_i × Volume_i) pour chaque produit i
CA = Prix Moyen × Volume Total  [simplification utile en entretien]
Prix Moyen = Σ (w_i × Prix_i) où w_i = part des ventes du produit i
Volume Total = Nombre de clients × Transactions par client × Montant moyen</div>

<h3>Analyse de la composante PRIX</h3>
<p>La baisse du prix moyen peut venir de plusieurs sources : pression concurrentielle, érosion de la valeur perçue, promotions excessives, ou mix géographique défavorable. Commencez par vérifier si le prix catalogue a changé. Si non, cherchez si les remises et conditions commerciales ont évolué.</p>

<h3>Analyse de la composante VOLUME</h3>
<p>La baisse du volume peut venir d'une perte de clients (churn), d'une baisse de la fréquence d'achat, ou d'une réduction du montant moyen par transaction. Une hausse du churn signale souvent un problème de satisfaction client. Une baisse de fréquence peut indiquer une saisonnalité ou une cannibalisation.</p>

<h3>L'effet mix — la source cachée de dégradation</h3>
<p>L'effet mix représente la dégradation de la marge globale due à un changement de composition des ventes. Un effet mix négatif peut camoufler la santé réelle de l'entreprise : le CA peut croître en nominal tout en se dégradant en marge, si la croissance vient des produits les moins rentables.</p>
<div class="formula-box">Effet mix = Σ (Δw_i × Marge_i)
où Δw_i = variation de la part des ventes du produit i
et Marge_i = marge de contribution du produit i</div>

<h3>Exemple chiffré complet — effet mix</h3>
<div class="example-box"><strong>Entreprise avec 2 gammes :</strong><br>
<table class="data-table">
  <tr><th>Gamme</th><th>Marge</th><th>Part N-1</th><th>Part N</th></tr>
  <tr><td>Premium</td><td>45%</td><td>70%</td><td>45%</td></tr>
  <tr><td>Entrée de gamme</td><td>15%</td><td>30%</td><td>55%</td></tr>
</table><br>
Marge globale N-1 = 0,45×0,70 + 0,15×0,30 = <strong>36%</strong><br>
Marge globale N   = 0,45×0,45 + 0,15×0,55 = <strong>28,5%</strong><br>
Effet mix = −7,5 points de marge<br><br>
<strong>Interprétation :</strong> La marge a perdu 7,5 points alors que les marges unitaires n'ont pas bougé. La recommandation : repositionner l'offre ou inciter les clients à migrer vers le premium.</div>

<div class="warning-box"><strong>Confondre cause et symptôme :</strong> "Le prix a baissé" est un symptôme. "Le prix a baissé parce que trois nouveaux entrants low-cost ont capturé 15% du marché" est la cause. La recommandation dépend entièrement de cette distinction.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Les candidats qui réussissent les cas de profitabilité décomposent systématiquement les revenus en au moins 3 composantes (prix, volume, mix) et relient chaque variation à une hypothèse business avant de demander des données.</div>`
          },

          {
            id: 'F-022', title: 'Analyse des coûts — Fixes, Variables, Drivers', duration: '18 min',
            content: `
<p>L'analyse des coûts en consulting suit une logique de décomposition progressive : d'abord distinguer les coûts fixes des variables, puis identifier les <strong>cost drivers</strong>, et enfin benchmarker chaque poste contre l'industrie pour identifier les écarts.</p>

<h3>Coûts fixes vs Coûts variables</h3>
<table class="data-table">
  <tr><th>Type</th><th>Définition</th><th>Exemples</th><th>Levier d'action</th></tr>
  <tr><td>Coûts fixes</td><td>Ne varient pas avec le volume</td><td>Loyers, amortissements, salaires administratifs</td><td>Restructuration, cession d'actifs, renégociation</td></tr>
  <tr><td>Coûts variables</td><td>Varient proportionnellement au volume</td><td>Matières premières, emballages, commissions</td><td>Renégociation achats, substitution, automatisation</td></tr>
  <tr><td>Coûts semi-variables</td><td>Comportement mixte</td><td>Main d'œuvre, énergie</td><td>Optimisation du planning, tarifs progressifs</td></tr>
</table>

<h3>Les cost drivers — sources de variation</h3>
<div class="formula-box">Coût main d'œuvre = Effectif × Salaire moyen × Heures travaillées
→ Driver 1 : Effectif (recrutements, turnover)
→ Driver 2 : Salaire moyen (négociations, mix séniorité)
→ Driver 3 : Heures travaillées (productivité, absentéisme)

Coût matières premières = Quantité × Prix unitaire
→ Driver 1 : Prix de marché (inflation, cours des matières)
→ Driver 2 : Rendement (taux de déchet, efficacité des process)
→ Driver 3 : Mix de matières (substitutions possibles)</div>

<h3>Benchmarks des coûts par secteur</h3>
<table class="data-table">
  <tr><th>Secteur</th><th>COGS / CA</th><th>Frais de personnel / CA</th><th>EBITDA typique</th></tr>
  <tr><td>Distribution alimentaire</td><td>70–75%</td><td>10–12%</td><td>5–8%</td></tr>
  <tr><td>SaaS / Logiciel</td><td>15–25%</td><td>35–45%</td><td>15–30%</td></tr>
  <tr><td>Consulting Tier 1</td><td>—</td><td>60–65%</td><td>25–35%</td></tr>
  <tr><td>Pharma innovante</td><td>25–35%</td><td>20–25%</td><td>30–40%</td></tr>
  <tr><td>Industrie automobile</td><td>75–80%</td><td>8–12%</td><td>5–10%</td></tr>
</table>

<h3>Exemple diagnostique — coûts d'une chaîne de restauration</h3>
<div class="example-box"><strong>Données :</strong> Restaurant 10M€ de CA, coûts = 9,5M€, marge = 5%<br>
Alimentaire 3,5M€ (35%) · Personnel 4M€ (40%) · Loyers 1,5M€ (15%) · Énergie 0,5M€ (5%)<br><br>
<strong>Benchmarks :</strong> Alimentaire 28–32% · Personnel 33–36% · Loyers 8–12%<br><br>
<strong>Diagnostic :</strong><br>
→ Alimentaire : 35% vs benchmark 30% = surcoût ~0,5M€<br>
→ Personnel : 40% vs benchmark 35% = surcoût ~0,5M€<br>
→ Loyers : 15% vs benchmark 10% = surcoût ~0,5M€<br>
Potentiel total d'économies : ~1,5M€</div>

<div class="warning-box"><strong>Ne pas supposer qu'un coût élevé est forcément un problème :</strong> Un poste supérieur au benchmark peut être un choix stratégique. Toujours contextualiser avant de qualifier un poste de "problème".</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Calculer les ratios coûts/CA pour chaque poste et les comparer à des benchmarks sectoriels connus — même approximatifs — montre une familiarité réelle avec le travail de consultant. Mémorisez au moins 4–5 benchmarks.</div>`
          },

          {
            id: 'F-023', title: 'Effet mix — calcul détaillé avec 2 exemples', duration: '18 min',
            content: `
<p>L'<strong>effet mix</strong> décrit la situation où la marge globale évolue non pas parce que les marges individuelles ont changé, ni parce que les volumes totaux ont évolué, mais parce que la <strong>composition</strong> des ventes a changé. Il conduit à des recommandations radicalement différentes de celles issues d'une analyse de prix ou de coûts.</p>

<h3>Définition formelle</h3>
<div class="formula-box">Marge globale = Σ (w_i × m_i)
où w_i = part des ventes du produit i dans le total
et m_i = marge de contribution du produit i

Effet mix = Σ ((w_i(N) − w_i(N-1)) × m_i)
→ L'effet mix est nul si les parts de chaque produit n'évoluent pas.</div>

<h3>Exemple 1 — Mix produit dans l'industrie cosmétique</h3>
<div class="example-box">
<table class="data-table">
  <tr><th>Gamme</th><th>Marge</th><th>Part N-1</th><th>Part N</th><th>Variation</th></tr>
  <tr><td>Luxe</td><td>65%</td><td>50%</td><td>30%</td><td>−20pts</td></tr>
  <tr><td>Mid-range</td><td>40%</td><td>35%</td><td>40%</td><td>+5pts</td></tr>
  <tr><td>Mass market</td><td>20%</td><td>15%</td><td>30%</td><td>+15pts</td></tr>
</table><br>
Marge N-1 = 0,65×0,50 + 0,40×0,35 + 0,20×0,15 = <strong>49,5%</strong><br>
Marge N   = 0,65×0,30 + 0,40×0,40 + 0,20×0,30 = <strong>41,5%</strong><br>
<strong>Effet mix = −8 points</strong><br><br>
<strong>Recommandation :</strong> Protéger ou revaloriser la gamme Luxe via une stratégie de différenciation premium.</div>

<h3>Exemple 2 — Mix géographique dans la distribution</h3>
<div class="example-box">
<table class="data-table">
  <tr><th>Région</th><th>Marge EBITDA</th><th>Part CA N-1</th><th>Part CA N</th></tr>
  <tr><td>France</td><td>12%</td><td>80%</td><td>60%</td></tr>
  <tr><td>Europe de l'Est</td><td>4%</td><td>20%</td><td>40%</td></tr>
</table><br>
Marge N-1 = 0,12×0,80 + 0,04×0,20 = <strong>10,4%</strong><br>
Marge N   = 0,12×0,60 + 0,04×0,40 = <strong>8,8%</strong><br>
<strong>Effet mix géographique = −1,6 point</strong><br><br>
<strong>Recommandation :</strong> Améliorer la marge en Europe de l'Est avant de poursuivre l'expansion.</div>

<h3>Quand soupçonner un effet mix</h3>
<p>Trois signaux : (1) le CA croît mais la marge globale se dégrade sans évolution des prix ou coûts unitaires ; (2) l'entreprise développe un segment nouveau à faible marge ; (3) croissance géographique dans des marchés à pricing power inférieur.</p>

<div class="warning-box"><strong>Confondre effet volume et effet mix :</strong> L'effet volume mesure l'impact d'une hausse du volume total. L'effet mix mesure l'impact d'un changement de composition à volume constant. Calculez les deux séparément avant de conclure.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> L'effet mix est souvent "la réponse cachée". Quand ni le prix, ni le volume, ni les coûts n'expliquent seuls la dégradation, pensez immédiatement à l'effet mix. Le candidat qui l'identifie spontanément se distingue immédiatement.</div>`
          },

          {
            id: 'F-024', title: 'Benchmarks de marges par secteur', duration: '12 min',
            content: `
<p>Connaître les niveaux de marge typiques par secteur vous permet de contextualiser instantanément si une marge est bonne ou mauvaise, et d'éviter des recommandations incompatibles avec la réalité économique d'une industrie.</p>

<h3>Tableau de référence — marges par secteur</h3>
<table class="data-table">
  <tr><th>Secteur</th><th>Marge brute</th><th>EBITDA</th><th>Marge nette</th><th>Particularité</th></tr>
  <tr><td>SaaS / Logiciel</td><td>70–85%</td><td>15–35%</td><td>10–25%</td><td>Scale; R&D élevé</td></tr>
  <tr><td>Conseil (Tier 1)</td><td>—</td><td>25–35%</td><td>15–25%</td><td>Capital-léger; levier = utilisation</td></tr>
  <tr><td>Pharma innovante</td><td>65–80%</td><td>30–40%</td><td>20–30%</td><td>Brevets; R&D 15–20% CA</td></tr>
  <tr><td>Distribution alimentaire</td><td>25–35%</td><td>5–8%</td><td>2–4%</td><td>Volume énorme; marges faibles</td></tr>
  <tr><td>Industrie automobile</td><td>20–25%</td><td>5–10%</td><td>3–7%</td><td>Capex intense; cycles longs</td></tr>
  <tr><td>Telecom</td><td>55–65%</td><td>30–40%</td><td>8–15%</td><td>Amortissements massifs</td></tr>
  <tr><td>Hôtellerie (chaîne)</td><td>70–80%*</td><td>15–25%</td><td>5–12%</td><td>*Hors personnel; RevPAR = KPI</td></tr>
  <tr><td>Luxe (LVMH-type)</td><td>65–70%</td><td>25–35%</td><td>15–20%</td><td>Pricing power fort</td></tr>
</table>

<h3>Métriques sectorielles spécifiques</h3>
<p>Certains secteurs utilisent des indicateurs propres : en hôtellerie le <strong>RevPAR</strong>, en banque le <strong>NIM</strong> (1,5–2,5%) et le <strong>ROE</strong>, en assurance le <strong>combined ratio</strong> (doit être &lt; 100%), en retail le <strong>GMROI</strong>.</p>

<div class="warning-box"><strong>Appliquer des benchmarks cross-sectoriels :</strong> Comparer la marge d'un distributeur alimentaire (5%) à celle d'un SaaS (25%) est une erreur. Utilisez toujours des benchmarks du même secteur, idéalement du même sous-secteur.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Connaître 5–6 benchmarks sectoriels de tête permet de formuler des hypothèses rapidement. "Pour une entreprise de distribution alimentaire, une marge brute de 35% semble légèrement supérieure au benchmark de 28–32% — est-ce un positionnement premium ou une définition comptable différente des COGS ?"</div>`
          },

          {
            id: 'F-041', title: 'Lire un P&L en 5 minutes — ratios critiques', duration: '18 min',
            content: `
<p>En consulting, vous serez régulièrement confronté à des comptes de résultat en entretien, dans des slides clients, ou dans des mémos d'analyse. Savoir lire un P&L rapidement — identifier les signaux d'alerte, calculer les ratios critiques, et formuler les questions prioritaires — est une compétence opérationnelle fondamentale.</p>

<h3>Protocole de lecture en 5 étapes</h3>
<p><strong>Minute 1 — Orientation générale :</strong> Lisez les lignes clés dans l'ordre (CA, marge brute, EBITDA, résultat net) sans vous arrêter sur le détail. Comprenez l'ordre de grandeur, le secteur, et si l'entreprise est profitable.</p>
<p><strong>Minute 2 — Calcul des ratios principaux :</strong> Calculez immédiatement les ratios clés en % du CA : marge brute, marge EBITDA, marge nette, poids des frais de personnel.</p>
<p><strong>Minute 3 — Identification des anomalies :</strong> Cherchez les postes qui dévient du benchmark sectoriel. Un poste supérieur au benchmark de plus de 5 points mérite investigation.</p>
<p><strong>Minute 4 — Analyse de l'évolution temporelle :</strong> Si vous avez les données de N-1, calculez les taux de croissance. Un CA en croissance avec une marge en recul signale un problème de mix ou de structure de coûts.</p>
<p><strong>Minute 5 — Formulation des hypothèses :</strong> Formulez 2–3 hypothèses prioritaires à vérifier. Ces hypothèses guideront vos questions.</p>

<h3>Les ratios P&L à calculer systématiquement</h3>
<table class="data-table">
  <tr><th>Ratio</th><th>Formule</th><th>Signification</th></tr>
  <tr><td>Marge brute</td><td>(CA − COGS) / CA</td><td>Profitabilité cœur avant frais généraux</td></tr>
  <tr><td>Marge EBITDA</td><td>EBITDA / CA</td><td>Profitabilité opérationnelle courante</td></tr>
  <tr><td>Marge nette</td><td>Résultat net / CA</td><td>Profitabilité finale</td></tr>
  <tr><td>Ratio frais de personnel</td><td>Frais de personnel / CA</td><td>Intensité en main d'œuvre</td></tr>
  <tr><td>COGS / CA</td><td>COGS / CA</td><td>Part du coût direct — comparaison benchmark</td></tr>
  <tr><td>Conversion cash</td><td>FCF / EBITDA</td><td>Qualité des bénéfices (&lt; 60% : problème BFR)</td></tr>
</table>

<h3>Exemple guidé — P&L d'un distributeur alimentaire</h3>
<div class="example-box"><strong>Données (en M€) :</strong><br>
CA : 500 | COGS : 375 | Marge brute : 125 (25%)<br>
Frais de personnel : 65 (13%) | Logistique : 22 (4,4%) | G&A : 10 (2%)<br>
EBITDA : 20 (4%) | EBIT : 12 (2,4%) | Résultat net : 7 (1,4%)<br><br>
<strong>Analyse :</strong><br>
→ Marge brute 25% : supérieure au benchmark 20–22% → bon signe ou définition comptable différente<br>
→ Personnel 13% : benchmark 10–12% → sureffectif possible<br>
→ EBITDA 4% : benchmark 5–8% → légèrement sous la moyenne<br>
→ Hypothèse prioritaire : frais de personnel trop élevés (−2pts vs benchmark = −10M€ potentiel)</div>

<div class="warning-box"><strong>Calculer des ratios sans interpréter :</strong> "La marge brute est de 25%" ne veut rien dire seul. La valeur ajoutée du consultant est la contextualisation par rapport aux benchmarks, pas le calcul brut.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Un analyste les grands cabinets lit un P&L en moins de 5 minutes et formule immédiatement les 3 questions prioritaires. Montrer cette capacité — calculer les ratios, comparer aux benchmarks, formuler les hypothèses — en un enchaînement fluide est l'un des signaux les plus forts de préparation au métier.</div>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // CAT-04 — MARKET SIZING
  // ══════════════════════════════════════════════════════════
  {
    id: 'CAT-04', title: 'Market Sizing', icon: '📏', color: '#8b5cf6', order: 4,
    submodules: [
      {
        id: 'CAT-04-01', title: 'Market Sizing',
        fiches: [
          {
            id: 'F-030', title: 'Méthode Top-Down — exemple France guidé', duration: '25 min',
            content: `
<p>Le market sizing est souvent perçu par les candidats comme un exercice de mémorisation. C'est une erreur fondamentale : les grands cabinets l'utilise comme test de raisonnement structuré sous pression. Un candidat qui arrive à 5 milliards avec une démarche rigoureuse sera mieux noté qu'un candidat qui arrive au "bon" chiffre par intuition.</p>

<p>La méthode top-down part de la population totale, puis affine progressivement vers le sous-ensemble qui constitue le marché cible. C'est l'approche par la demande. Sa principale force est sa lisibilité : chaque étape du raisonnement est visible et vérifiable.</p>

<h3>Les chiffres France à mémoriser</h3>
<table class="data-table">
  <tr><th>Indicateur</th><th>Valeur 2026</th><th>Usage</th></tr>
  <tr><td>Population totale</td><td>68 millions</td><td>Base de tout sizing</td></tr>
  <tr><td>Adultes (18+)</td><td>~53 millions (78%)</td><td>Marchés adultes</td></tr>
  <tr><td>Population active</td><td>~30 millions (44%)</td><td>Marchés liés au travail</td></tr>
  <tr><td>Nombre de ménages</td><td>29 millions</td><td>Produits "foyer"</td></tr>
  <tr><td>Retraités</td><td>~17 millions (25%)</td><td>Silver economy</td></tr>
  <tr><td>PIB France</td><td>2 800 Mds€</td><td>Sanity checks grands marchés</td></tr>
  <tr><td>PIB / habitant</td><td>~42 000€</td><td>Calibrage dépenses par individu</td></tr>
  <tr><td>Revenu disponible médian</td><td>~22 000€/an</td><td>Marchés premium</td></tr>
  <tr><td>Taux d'urbanisation</td><td>~80%</td><td>Marchés urbains</td></tr>
  <tr><td>Paris et Île-de-France</td><td>12 millions (18%)</td><td>Marchés parisiens vs national</td></tr>
  <tr><td>Voitures en circulation</td><td>~38 millions</td><td>Automobile, assurance auto</td></tr>
  <tr><td>Smartphones actifs</td><td>~54 millions</td><td>Marchés digitaux</td></tr>
</table>

<h3>Méthode top-down étape par étape</h3>
<p><strong>Étape 1 — Clarifier le périmètre avant tout calcul.</strong> Posez 2–3 questions précises : quel produit exactement, quel territoire, quel périmètre temporel. Reformulez en une phrase avant de commencer.</p>
<p><strong>Étape 2 — Définir la population cible par filtrages successifs.</strong> Les filtres doivent être MECE. Justifiez chaque filtre explicitement.</p>
<p><strong>Étape 3 — Estimer le taux de pénétration avec une logique explicite.</strong> Comparez à des produits analogues dont vous connaissez le taux.</p>
<p><strong>Étape 4 — Calculer la fréquence et le panier moyen avec des sous-catégories.</strong> Segmentez la population par intensité d'usage pour plus de précision.</p>
<p><strong>Étape 5 — Assembler et présenter le calcul à voix haute.</strong> Annoncez chaque paramètre avant de le multiplier, donnez le résultat intermédiaire à chaque étape.</p>

<h3>Les 3 clés du sanity check</h3>
<p><strong>Clé 1 — Le check par l'acteur de référence.</strong> Taille marché = CA acteur / part de marché estimée. McDonald's France ~5 Mds€ × part ~17% → marché fast food ~29 Mds€.</p>
<p><strong>Clé 2 — Le check par la dépense par habitant.</strong> Divisez par 68M et vérifiez la cohérence avec le pouvoir d'achat moyen.</p>
<p><strong>Clé 3 — Annoncer une fourchette, pas un point.</strong> Exprimez l'incertitude sur vos hypothèses les plus sensibles.</p>

<h3>Exemple A — Marché de la garde d'enfants en France</h3>
<div class="example-box"><strong>Périmètre :</strong> Dépenses annuelles des familles pour la garde d'enfants de 0 à 6 ans.<br><br>
<strong>Population :</strong> 5 millions d'enfants 0–6 ans × 70% avec besoin de garde = 3,5 millions.<br><br>
<strong>Segmentation par type de garde :</strong><br>
Crèche (25%) : 875 000 enfants × 900€/mois × 11 mois = <strong>8,7 Mds€</strong><br>
Assistante maternelle (50%) : 1,75M × 1 000€/mois × 11 mois = <strong>19,25 Mds€</strong><br>
Baby-sitting / autres (25%) : 875 000 × 3 500€/an = <strong>3,1 Mds€</strong><br><br>
<strong>Total brut : ~31 Mds€</strong><br>
Sanity check : acteurs crèches privées ~2 Mds€ CA, ~25% du sous-marché crèches privées → marché crèches privées ~8 Mds€ ✓</div>

<h3>Exemple B — Marché de la restauration rapide en France</h3>
<div class="example-box"><strong>Population cible :</strong> 68M × 85% pénétration = 58M consommateurs.<br><br>
<strong>Segmentation par fréquence :</strong><br>
Occasionnels (40%) : 23M × 8 visites/an × 9€ = 1,66 Mds€<br>
Réguliers (40%) : 23M × 70 visites/an × 9€ = 14,5 Mds€<br>
Fréquents (20%) : 11,6M × 130 visites/an × 9€ = 13,6 Mds€<br><br>
<strong>Total : 29,8 Mds€ ≈ 30 Mds€</strong><br>
Sanity check : McDonald's ~5 Mds€ × 1/17% = 29,4 Mds€ ✓</div>

<details>
<summary><strong>Exercice 1 : Marché des lunettes en France</strong> — Cliquez pour voir la correction</summary>
<div class="example-box">Lunettes de correction : 53M × 40% porteurs = 21M × 0,5 paire/an × 350€ = 3,7 Mds€<br>
Lunettes solaires : 53M × 60% × 1/3 = 10,6M paires × 50€ = 530M€<br>
<strong>Total : ~4,2 Mds€</strong> (sanity check EssilorLuxottica ~1,5 Mds€ / 37,5% = 4 Mds€ ✓)</div>
</details>

<details>
<summary><strong>Exercice 2 : Marché des apps fitness payantes en France</strong> — Cliquez pour voir la correction</summary>
<div class="example-box">53M adultes × 30% sportifs réguliers = 16M × 40% utilisateurs app = 6,4M × 25% abonnés payants = 1,6M × 80€/an = <strong>128M€</strong></div>
</details>

<div class="warning-box"><strong>Erreurs fréquentes :</strong> (1) Partir du CA d'un acteur sans ajuster pour la part de marché. (2) Appliquer le taux de pénétration à la mauvaise base (population vs ménages). (3) Oublier la fréquence. (4) Annoncer un résultat avec une précision illusoire. (5) Sauter le sanity check.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> La différence entre bon et excellent : identifier les 2 hypothèses les plus sensibles et commenter la fourchette. "Mon estimation centrale est 25 Mds€. L'hypothèse la plus incertaine est la fréquence — si elle est de 1 fois/semaine au lieu de 1,5, le marché tombe à 17 Mds€." Cette analyse de sensibilité en 20 secondes est le signal le plus fort de maturité analytique.</div>`
          },

          {
            id: 'F-031', title: 'Méthode Bottom-Up et sanity checks', duration: '18 min',
            content: `
<p>La méthode <strong>bottom-up</strong> et la méthode top-down sont complémentaires. La méthode top-down part de la demande (combien de personnes ont besoin du produit ?) tandis que la méthode bottom-up part de l'offre (combien d'acteurs fournissent le service ?). Si les deux estimations convergent, vous avez confiance dans le résultat ; si elles divergent, il y a une erreur d'hypothèse à identifier.</p>

<h3>Différence conceptuelle top-down vs bottom-up</h3>
<table class="data-table">
  <tr><th>Dimension</th><th>Top-down</th><th>Bottom-up</th></tr>
  <tr><td>Point de départ</td><td>Population totale</td><td>Nombre d'acteurs ou unités d'offre</td></tr>
  <tr><td>Points forts</td><td>Lisible, adapté marchés de consommation</td><td>Robuste quand l'offre est visible</td></tr>
  <tr><td>Quand utiliser</td><td>Marchés grande consommation, B2C</td><td>Marchés B2B, services à capacité fixe</td></tr>
</table>

<h3>Méthode bottom-up par l'offre — approche "acteurs × capacité"</h3>
<div class="formula-box">Marché (bottom-up) = Nombre d'acteurs × Capacité moyenne × Taux d'utilisation × Prix moyen
Variante simplifiée : Nombre d'acteurs × CA moyen par acteur</div>

<p>L'estimation du nombre d'acteurs peut se faire par raisonnement géographique. La France a ~36 000 communes, dont ~3 500 de plus de 5 000 habitants. Dans une commune de 5 000 habitants, il y a typiquement 3–5 restaurants. Cette désagrégation permet d'estimer le nombre d'acteurs avec une logique transparente.</p>

<h3>Le principe du double-check — croiser les deux méthodes</h3>
<p>Règle d'interprétation : si les deux estimations sont à moins de 30% d'écart, annoncez la fourchette avec confiance. Si l'écart est de 30–100%, revoyez les hypothèses. Si l'écart dépasse 100%, il y a une erreur fondamentale à identifier.</p>

<h3>Exemple 1 — Marché des taxis et VTC en Île-de-France</h3>
<div class="example-box"><strong>Top-down :</strong> 12M habitants × 15% clients réguliers = 1,8M × 24 courses/an × 18€ = <strong>778M€</strong><br><br>
<strong>Bottom-up :</strong> ~52 000 véhicules (17k taxis + 35k VTC) × 5 courses/jour × 300 jours × 18€ = <strong>1,4 Mds€</strong><br><br>
<strong>Fourchette convergente :</strong> 800M€ à 1,4 Mds€ → estimation centrale ~1 Md€<br>
La divergence initiale a permis d'identifier une erreur d'hypothèse sur la fréquence d'utilisation.</div>

<h3>Exemple 2 — Marché des avocats d'affaires en France</h3>
<div class="example-box"><strong>Bottom-up :</strong> 20 000 avocats d'affaires × 230 000€/an = <strong>4,6 Mds€</strong><br>
<strong>Top-down :</strong> 250k PME/ETI × 20k€/an + 2k grandes entreprises × 500k€/an = <strong>6 Mds€</strong><br>
Écart ~25% → estimation finale <strong>4,5–6 Mds€</strong> ✓</div>

<details>
<summary><strong>Exercice : Marché de la livraison de repas à domicile</strong> — Cliquez pour voir la correction</summary>
<div class="example-box"><strong>Top-down :</strong> 4M utilisateurs × 4 commandes/mois + 8M × 1,5/mois = 336M/an × 25€ = 8,4 Mds€<br>
<strong>Bottom-up :</strong> 50k restaurants × 20 commandes/jour × 350 jours × 25€ = 8,75 Mds€<br>
<strong>Convergence excellente → ~8,5 Mds€</strong></div>
</details>

<div class="warning-box"><strong>Erreurs spécifiques bottom-up :</strong> (1) Compter les acteurs au lieu des acteurs actifs (taux d'activité ~70–85%). (2) Utiliser la capacité nominale au lieu de la capacité utilisée. (3) Ignorer la saisonnalité. (4) Oublier le double-check.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> "J'ai obtenu X par top-down. Je vérifie par bottom-up : N acteurs × capacité Y × taux Z × prix P = X'. Écart de Z% — les deux sont cohérents à ±25%." Cette triangulation spontanée en 30 secondes est le signal le plus fort de maturité analytique.</div>`
          },

          {
            id: 'F-032', title: 'Chiffres clés à mémoriser — France, Europe, Monde', duration: '10 min',
            content: `
<p>Mémoriser une vingtaine de repères chiffrés vous permet de construire des sizings crédibles, de réaliser des sanity checks rapides, et de répondre aux questions de contexte économique sans hésitation. L'ordre de grandeur et la cohérence interne sont ce qui compte, pas la précision à 5%.</p>

<h3>France — repères démographiques et économiques</h3>
<table class="data-table">
  <tr><th>Indicateur</th><th>Valeur 2026</th></tr>
  <tr><td>Population</td><td>68 millions</td></tr>
  <tr><td>Ménages</td><td>29 millions</td></tr>
  <tr><td>Taille moyenne foyer</td><td>2,3 personnes</td></tr>
  <tr><td>Population active</td><td>30 millions</td></tr>
  <tr><td>PIB</td><td>2 800 Mds€</td></tr>
  <tr><td>PIB / habitant</td><td>42 000€</td></tr>
  <tr><td>Revenu disponible médian</td><td>22 000€ / an</td></tr>
  <tr><td>Dépenses de consommation des ménages</td><td>~1 300 Mds€</td></tr>
  <tr><td>Voitures en circulation</td><td>38 millions</td></tr>
  <tr><td>Smartphones</td><td>54 millions</td></tr>
</table>

<h3>Marchés de référence France</h3>
<table class="data-table">
  <tr><th>Marché</th><th>Taille estimée</th></tr>
  <tr><td>Alimentaire (GMS + restauration)</td><td>200 Mds€</td></tr>
  <tr><td>Immobilier résidentiel (transactions)</td><td>200 Mds€</td></tr>
  <tr><td>Automobile (ventes neuves + occasion)</td><td>80 Mds€</td></tr>
  <tr><td>Santé (dépenses totales)</td><td>260 Mds€</td></tr>
  <tr><td>E-commerce</td><td>160 Mds€</td></tr>
  <tr><td>Publicité digitale</td><td>8 Mds€</td></tr>
</table>

<h3>Europe et Monde</h3>
<table class="data-table">
  <tr><th>Zone</th><th>Population</th><th>PIB</th></tr>
  <tr><td>Union Européenne</td><td>450 millions</td><td>15 000 Mds€</td></tr>
  <tr><td>États-Unis</td><td>335 millions</td><td>27 000 Mds$</td></tr>
  <tr><td>Chine</td><td>1 400 millions</td><td>17 000 Mds$</td></tr>
  <tr><td>Monde</td><td>8 milliards</td><td>~100 000 Mds$</td></tr>
</table>

<h3>Règles de conversion utiles</h3>
<div class="formula-box">France ≈ 15% du marché européen (UE)
France ≈ 4% du marché mondial
Pour passer d'un marché français à l'Europe : × 6–7
Pour passer d'un marché français au monde : × 25</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> "France = 68 millions, soit environ 4% du marché mondial de 8 milliards." Un candidat qui dit cela spontanément montre une culture économique générale qui rassure l'interviewer sur sa capacité à calibrer sans aide extérieure.</div>`
          },

          {
            id: 'F-036', title: 'Segmentation et choix d\'approche', duration: '15 min',
            content: `
<p>La <strong>segmentation</strong> est la décision la plus importante dans un market sizing : comment découper le marché pour que chaque sous-groupe soit homogène, MECE, et estimable séparément. Un sizing qui traite toute la population de façon uniforme est presque toujours inexact — les comportements d'achat varient trop entre segments pour qu'une moyenne globale soit fiable.</p>

<h3>Les 4 axes de segmentation</h3>
<table class="data-table">
  <tr><th>Axe</th><th>Critères</th><th>Quand l'utiliser</th></tr>
  <tr><td>Démographique</td><td>Âge, revenus, CSP, taille du foyer</td><td>Marchés B2C avec forte hétérogénéité de comportement selon le profil</td></tr>
  <tr><td>Géographique</td><td>Région, urTier 1/rural, département</td><td>Marchés à forte disparité régionale (restauration, immobilier)</td></tr>
  <tr><td>Comportemental</td><td>Fréquence d'achat, intensité d'usage, fidélité</td><td>Marchés à distribution bimodale (rares gros utilisateurs + masse d'occasionnels)</td></tr>
  <tr><td>B2B : taille d'entreprise</td><td>TPE, PME, ETI, grands comptes</td><td>Marchés B2B où le budget par entreprise varie d'un facteur 100×</td></tr>
</table>

<h3>Arbre de décision : top-down vs bottom-up</h3>
<div class="formula-box">Choisir TOP-DOWN si :
→ Marché B2C ou consommation de masse
→ La demande est plus facile à estimer que l'offre
→ Vous avez de bons repères sur le taux de pénétration
→ Vous voulez une présentation lisible étape par étape

Choisir BOTTOM-UP si :
→ Marché B2B ou technique
→ L'offre est visible et dénombrable (restaurants, médecins, hôtels)
→ Vous connaissez mieux le côté acteurs que le côté clients
→ Vous voulez une vérification indépendante de votre top-down</div>

<h3>Technique de segmentation comportementale — la distribution d'usage</h3>
<p>La segmentation par intensité d'usage est la plus puissante car elle reflète la réalité économique : dans la plupart des marchés, 20% des clients génèrent 80% du CA. Ignorer cette concentration conduit à sous-estimer le marché.</p>
<div class="formula-box">Volume total = Σ (Segment_i × Fréquence_i × Panier_i)
vs.
Volume erroné = Population_totale × Fréquence_moyenne × Panier_moyen

La segmentation comportementale est plus précise car la fréquence_moyenne
est biaisée vers les utilisateurs occasionnels numériquement dominants.</div>

<h3>Exemple chiffré — Marché des salles de sport en France</h3>
<div class="example-box"><strong>Approche uniforme (incorrecte) :</strong><br>
53M adultes × 15% abonnés = 7,95M × 45€/mois × 12 mois = 4,3 Mds€<br><br>
<strong>Approche segmentée (correcte) :</strong><br>
— Abonnés actifs &gt;2 fois/semaine (50% des abonnés) : 4M × 55€/mois × 12 = 2,64 Mds€<br>
— Abonnés modérés 1 fois/semaine (35%) : 2,8M × 40€/mois × 12 = 1,34 Mds€<br>
— Abonnés quasi-inactifs (15%) : 1,2M × 30€/mois × 10 mois = 360M€<br>
<strong>Total segmenté : 4,34 Mds€</strong> — cohérent mais la structure révèle que ~17% des abonnés paient pour ne presque pas venir, ce qui est un insight stratégique clé sur la rentabilité du modèle.</div>

<h3>Valider la cohérence de sa segmentation</h3>
<p>Trois tests rapides avant d'annoncer votre sizing :</p>
<p>1. <strong>MECE check :</strong> est-ce que chaque individu appartient à exactement un segment ? Si oui, la somme des segments doit redonner la population totale.</p>
<p>2. <strong>Pertinence des hypothèses par segment :</strong> est-ce que la fréquence et le panier que j'ai estimés pour chaque segment sont cohérents avec ce que je sais du comportement de ce profil ?</p>
<p>3. <strong>Concentration check :</strong> est-ce que le segment le plus petit génère un volume surprenant ? Si un segment représente 5% de la population mais 40% du CA, c'est souvent vrai dans les marchés premium — mais vérifiez que c'est réaliste.</p>

<div class="warning-box"><strong>Trop de segments tuent la clarté :</strong> En entretien, 2–3 segments suffisent presque toujours. Aller au-delà de 4 segments rend le calcul opaque et difficile à suivre pour l'interviewer. La règle : segmentez juste assez pour capturer les comportements vraiment différents, pas plus.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Présenter une segmentation comportementale en 3 profils d'intensité d'usage (light / regular / heavy) et expliquer en une phrase pourquoi cette segmentation est plus précise qu'une moyenne uniforme montre une vraie maîtrise du raisonnement quantitatif. C'est le niveau attendu dans les cas de market sizing avancés.</div>`
          }
        ]
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // CAT-05ME — MARKET ENTRY
  // ══════════════════════════════════════════════════════════
  {
    id: 'CAT-05ME', title: 'Market Entry', icon: '🌍', color: '#10b981', order: 5,
    submodules: [
      {
        id: 'CAT-05ME-01', title: 'Stratégie d\'Entrée',
        fiches: [
          {
            id: 'F-034', title: 'Market Entry — quand et comment entrer', duration: '20 min',
            content: `
<p>Un cas de <strong>market entry</strong> demande : "Notre client devrait-il entrer sur ce marché, et si oui, comment ?" C'est l'un des types de cas les plus fréquents en entretien les grands cabinets, car il implique à la fois une analyse stratégique (est-ce une bonne idée ?) et une analyse opérationnelle (comment faire ?). La structure en trois questions séquentielles évite l'erreur classique de répondre au "comment" avant d'avoir répondu au "doit-on".</p>

<h3>Question 1 — L'attractivité du marché cible</h3>
<p>Avant tout, évaluez si le marché cible est structurellement attractif. Quatre dimensions sont critiques : la taille et la croissance, la structure concurrentielle, les marges sectorielles, et le cadre réglementaire.</p>
<div class="formula-box">Test attractivité marché :
Score = f(Taille × Croissance × Marges − Intensité concurrentielle − Barrières réglementaires)
→ Marché attractif : grand, en croissance, marges décentes, concurrence non monopolistique</div>

<h3>Question 2 — L'avantage compétitif durable</h3>
<p>Un marché attractif n'est pas suffisant. Il faut que le client ait — ou puisse développer — un avantage compétitif durable. Cet avantage peut être technologique, relationnel, de coût, ou de marque.</p>
<p>La question test : "Pourquoi notre client serait-il meilleur que les acteurs existants sur ce marché ?" Si la réponse est floue ou repose uniquement sur des ressources financières, l'entrée est risquée.</p>

<h3>Question 3 — Le mode d'entrée</h3>
<table class="data-table">
  <tr><th>Mode d'entrée</th><th>Vitesse</th><th>Contrôle</th><th>Coût</th><th>Quand l'utiliser</th></tr>
  <tr><td>Organique (greenfield)</td><td>Lente (2–4 ans)</td><td>Total</td><td>Progressif</td><td>Marché bien compris, temps disponible</td></tr>
  <tr><td>Acquisition</td><td>Immédiate</td><td>Total post-intégration</td><td>Élevé</td><td>Speed to market critique</td></tr>
  <tr><td>Joint-venture</td><td>Rapide (6–12 mois)</td><td>Partagé</td><td>Partagé</td><td>Marché local complexe</td></tr>
  <tr><td>Franchise / Licence</td><td>Rapide</td><td>Faible</td><td>Très faible</td><td>Scale rapide, marque forte</td></tr>
  <tr><td>Distribution partenaire</td><td>Très rapide</td><td>Minimal</td><td>Minimal</td><td>Test marché, ressources limitées</td></tr>
</table>

<h3>Exemple complet — Banque française entrant au Maroc</h3>
<div class="example-box"><strong>Attractivité :</strong> Maroc — 37M habitants, taux de bancarisation ~55%, croissance ~8%/an → Attractif.<br><br>
<strong>Avantage compétitif :</strong> Forte présence auprès de la diaspora marocaine en France + offre numérique avancée → Avantage réel.<br><br>
<strong>Mode d'entrée :</strong> Acquisition d'une banque moyenne locale (distribution physique + réglementation locale nécessite présence physique).<br><br>
<strong>Risques :</strong> Risque de change (dirham non pleinement convertible), risque politique, complexité d'intégration culturelle → pilote 2 ans avant expansion.</div>

<div class="warning-box"><strong>Recommander d'entrer sans analyser si l'entreprise peut gagner :</strong> Un marché attractif ne justifie pas une entrée si le client n'a aucun avantage compétitif défendable. Toujours poser la question "Pourquoi nous ?" avant "Faut-il entrer ?"</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Les candidats qui réussissent les cas market entry répondent aux trois questions dans l'ordre et de manière séquentielle — ils n'abordent pas le mode d'entrée avant d'avoir conclu sur l'attractivité et l'avantage compétitif.</div>`
          },

          {
            id: 'F-037', title: 'Analyse d\'attractivité marché — 5 forces + PEST', duration: '18 min',
            content: `
<p>Dans un cas de market entry, l'analyse d'attractivité répond à la question : "Ce marché vaut-il la peine d'être adressé ?" Deux frameworks se complètent : les <strong>5 forces de Porter</strong> analysent la structure concurrentielle et le potentiel de profit à long terme ; l'analyse <strong>PEST</strong> couvre l'environnement macro-économique. Ensemble, ils permettent de scorer l'attractivité d'un marché en 15–20 minutes d'entretien.</p>

<h3>Les 5 forces de Porter — application en market entry</h3>
<table class="data-table">
  <tr><th>Force</th><th>Signal attractif</th><th>Signal rédhibitoire</th><th>Questions à poser</th></tr>
  <tr><td>Rivalité concurrentielle</td><td>Marché fragmenté, acteurs faibles</td><td>Leader à 60%+ PDM, guerre des prix</td><td>Combien d'acteurs ? Quelle concentration ? Marges en évolution ?</td></tr>
  <tr><td>Menace des entrants</td><td>Barrières élevées (capex, réglementation, marque)</td><td>Marché facile à copier, coûts de changement nuls</td><td>Quel capex pour entrer ? Quelles licences ?</td></tr>
  <tr><td>Pouvoir des fournisseurs</td><td>Fournisseurs fragmentés, inputs commoditisés</td><td>Monopole fournisseur, inputs stratégiques rares</td><td>Concentration fournisseurs ? Alternatives ?</td></tr>
  <tr><td>Pouvoir des clients</td><td>Clients fragmentés, coûts de changement élevés</td><td>Clients concentrés, commodité totale</td><td>Taille des clients ? Leur sensibilité prix ?</td></tr>
  <tr><td>Produits de substitution</td><td>Pas de substitut proche, verrouillage technologique</td><td>Disruption technologique en cours, substituts moins chers</td><td>Quelles alternatives aux yeux du client final ?</td></tr>
</table>

<h3>Analyse PEST — 4 dimensions macro</h3>
<table class="data-table">
  <tr><th>Dimension</th><th>Questions clés</th><th>Exemples d'impact</th></tr>
  <tr><td><strong>P</strong>olitique/Réglementaire</td><td>Licences requises ? Restrictions aux investissements étrangers ? Risque de nationalisation ?</td><td>Pharmacie : autorisation AMM obligatoire · Telecom : licences spectrales · Finance : agrément régulateur</td></tr>
  <tr><td><strong>E</strong>conomique</td><td>Croissance du PIB ? Inflation ? Taux de change ? Pouvoir d'achat cible ?</td><td>Maroc : +3,5%/an · Turquie : inflation 40%+ (risque change) · Vietnam : classe moyenne +8M/an</td></tr>
  <tr><td><strong>S</strong>ocio-culturel</td><td>Acceptabilité culturelle du produit ? Barrière linguistique ? Habitudes de consommation ?</td><td>Produits laitiers en Asie du Sud-Est (lactose) · Alcool dans les pays à majorité musulmane</td></tr>
  <tr><td><strong>T</strong>echnologique</td><td>Infrastructure digitale disponible ? Taux de pénétration mobile/internet ? Maturité tech du client ?</td><td>Afrique sub-saharienne : mobile-first mais pas PC · Inde : UPI (paiement mobile) plus avancé qu'Europe</td></tr>
</table>

<h3>Score d'attractivité synthétique</h3>
<p>En entretien, une façon efficace de synthétiser est de scorer chaque dimension sur 3 niveaux (favorable / neutre / défavorable) et de pondérer par importance stratégique. L'objectif n'est pas un score précis — c'est de structurer la discussion et d'identifier les 2–3 facteurs déterminants.</p>

<div class="formula-box">Score attractivité = f(Taille × Croissance × Marges − Intensité compétitive − Risques PEST)
Décision : Entrer si Score &gt; seuil ET avantage compétitif du client &gt; 0
Attention : un marché attractif pour l'industrie peut être peu attractif pour CE client
sans avantage compétitif défendable.</div>

<h3>Exemple — Attractivité du marché de la santé connectée en Inde</h3>
<div class="example-box"><strong>5 forces :</strong><br>
Rivalité : marché encore fragmenté (signal attractif) mais TATA, Reliance entrent (signal neutre)<br>
Entrants : faibles barrières tech mais forte barrière réglementaire CDSCO (signal neutre)<br>
Fournisseurs : hardware commoditisé (signal attractif)<br>
Clients : 1,4 Md de personnes, classe moyenne en forte croissance (signal attractif)<br>
Substituts : médecine traditionnelle ayurvédique et automédication répandues (signal défavorable)<br><br>
<strong>PEST :</strong><br>
P : Digital Health Mission 2025 soutient l'adoption (favorable)<br>
E : PIB/hab. 2 400$ mais croissance 6,5%/an (favorable pour long terme)<br>
S : Médecins pour 1 000 habitants : 0,7 en Inde vs 3,2 en France — besoin de télémédecine réel<br>
T : 600M smartphones, 4G déployé — infrastructure suffisante<br><br>
<strong>Conclusion attractivité :</strong> Marché attractive à long terme (taille, croissance, sous-équipement médical), mais risque réglementaire et pouvoir d'achat limité à court terme. Horizon de retour sur investissement &gt; 5 ans.</div>

<div class="warning-box"><strong>Confondre attractivité du marché et opportunité pour le client :</strong> Un marché peut être attractif pour les acteurs existants mais peu attractif pour un nouvel entrant sans avantage compétitif. L'analyse 5 forces évalue la structure du marché — pas la position du client dans cette structure. Toujours faire les deux.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Les meilleurs candidats n'appliquent pas les 5 forces mécaniquement — ils identifient les 2–3 forces les plus déterminantes pour CE marché spécifique et s'y concentrent. "Dans le secteur pharma, le pouvoir réglementaire est la force dominante — je vais l'analyser en priorité avant les autres dimensions." Cette hiérarchisation montre une vraie compréhension sectorielle.</div>`
          },

          {
            id: 'F-038', title: 'Modes d\'entrée — organique, acquisition, JV, franchise', duration: '15 min',
            content: `
<p>Une fois l'attractivité du marché confirmée et l'avantage compétitif identifié, la question devient : <strong>comment entrer ?</strong> Les modes d'entrée se positionnent sur un spectre entre contrôle maximal (entrée organique) et risque minimal (partenariat). Le choix dépend de cinq facteurs : la vitesse requise, les ressources disponibles, la complexité locale, le niveau de contrôle souhaité, et la tolérance au risque d'intégration.</p>

<h3>Les 5 modes d'entrée — comparatif complet</h3>
<table class="data-table">
  <tr><th>Mode</th><th>Délai</th><th>Contrôle</th><th>Investissement</th><th>Risque d'intégration</th><th>Idéal pour</th></tr>
  <tr><td>Organique (greenfield)</td><td>2–5 ans</td><td>Total</td><td>Progressif, faible initial</td><td>Nul</td><td>Marché simple, temps disponible, construire culture propre</td></tr>
  <tr><td>Acquisition</td><td>6–18 mois</td><td>Total (post-intégration)</td><td>Élevé (prime de contrôle 15–30%)</td><td>Élevé</td><td>Speed to market critique, compétences à acquérir, PDM immédiate</td></tr>
  <tr><td>Joint-venture (JV)</td><td>6–12 mois</td><td>Partagé (50/50 ou autre)</td><td>Partagé avec partenaire local</td><td>Modéré (gouvernance JV complexe)</td><td>Marché local complexe, partenaire indispensable, restrictions aux IDE</td></tr>
  <tr><td>Franchise / Licence</td><td>3–6 mois</td><td>Faible (royalties + standards)</td><td>Minimal (opex + développement)</td><td>Faible</td><td>Scale rapide, marque forte à déployer, marchés émergents</td></tr>
  <tr><td>Partenariat / Distribution</td><td>1–3 mois</td><td>Minimal</td><td>Très faible</td><td>Faible</td><td>Test de marché, ressources limitées, marchés incertains</td></tr>
</table>

<h3>Arbre de décision — choisir le bon mode</h3>
<div class="formula-box">Question 1 : Le speed to market est-il critique (< 1 an) ?
  → OUI : Acquisition ou JV
  → NON : Organique possible

Question 2 : Des actifs locaux sont-ils indispensables (réseau, marque, licence) ?
  → OUI : Acquisition ou JV avec acteur local
  → NON : Organique ou franchise

Question 3 : Les restrictions légales empêchent-elles la propriété totale ?
  → OUI : JV obligatoire (Chine, Inde dans certains secteurs)
  → NON : Acquisition ou organique

Question 4 : Le marché est-il incertain / risqué ?
  → OUI : Commencer par partenariat ou franchise, option d'acquisition ensuite
  → NON : Acquisition ou organique direct</div>

<h3>Exemple — Retailer européen entrant au Japon</h3>
<div class="example-box"><strong>Situation :</strong> Un retailer de mode premium français veut entrer au Japon — marché mature, consommateurs exigeants, culture très locale.<br><br>
<strong>Option A — Organique :</strong> Ouvre 3 boutiques en 2 ans. Avantage : contrôle total de l'expérience marque. Inconvénient : apprentissage du marché japonais coûteux, 5 ans pour le break-even.<br><br>
<strong>Option B — Acquisition d'un retailer local :</strong> Rachète une chaîne de 20 boutiques. Avantage : distribution immédiate, équipe locale, connaissance client. Inconvénient : prime de contrôle, risque de dilution de l'image de marque premium.<br><br>
<strong>Option C — Joint-venture avec distributeur local :</strong> JV 50/50 avec un grand magasin japonais établi (Takashimaya). Avantage : accès immédiat aux meilleurs emplacements, connaissance client, légitimité locale. Inconvénient : partage des profits, gouvernance complexe.<br><br>
<strong>Recommandation :</strong> JV avec un grand magasin premium pendant 3–5 ans pour apprendre le marché, puis option d'acquisition des boutiques ou passage en standalone une fois la marque établie.</div>

<h3>Structurer la comparaison des modes en entretien</h3>
<p>En entretien, ne listez pas les 5 modes mécaniquement. Identifiez d'abord les 2–3 contraintes les plus importantes (vitesse, contrôle, ressources, réglementation locale), puis déduisez les 2 modes compatibles avec ces contraintes, et recommandez l'un d'eux avec une justification claire.</p>

<div class="warning-box"><strong>L'acquisition n'est pas toujours la solution rapide :</strong> Une acquisition nécessite 6–18 mois pour le processus M&A, puis 1–3 ans pour l'intégration. Si l'objectif est d'être opérationnel en 6 mois, un partenariat commercial est souvent plus rapide. Toujours distinguer la vitesse d'acquisition de la vitesse d'opérabilité réelle.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Recommander un mode d'entrée sans en évaluer au moins deux alternatives est insuffisant. Presentez toujours le compromis principal : "J'ai évalué deux options — acquisition (fast mais risquée sur l'intégration) vs JV (plus lente mais moins de capital at risk). Compte tenu de [contrainte clé], je recommande [choix] car [raison spécifique]."</div>`
          },

          {
            id: 'F-039', title: 'Business case d\'entrée — modèle économique et risques', duration: '18 min',
            content: `
<p>Le <strong>business case d'entrée</strong> répond à la question finale d'un market entry : "Cette entrée est-elle financièrement viable ?" Il traduit la stratégie en chiffres — revenus projetés, coûts d'investissement et d'exploitation, P&L à 3–5 ans, point mort, et retour sur investissement. Un business case solide est ce qui transforme une recommandation en décision d'investissement.</p>

<h3>Structure du business case en 5 blocs</h3>
<p><strong>Bloc 1 — Projection du marché adressable (TAM → SAM → SOM)</strong></p>
<div class="formula-box">TAM (Total Addressable Market) : taille totale du marché
SAM (Serviceable Addressable Market) : part du marché que le client peut adresser avec son offre
SOM (Serviceable Obtainable Market) : part réaliste sur 3–5 ans
→ SOM en année 1 = 0,5–2% du SAM pour un entrant sur marché mature
→ SOM en année 3 = 2–8% selon le mode d'entrée et l'avantage compétitif</div>

<p><strong>Bloc 2 — Modèle de revenus</strong></p>
<p>Définissez le mécanisme de génération de revenus : prix × volume, abonnement, commission, licence. Projetez sur 3 ans avec des hypothèses de croissance explicites. Les hypothèses de prix doivent être ancrées dans les benchmarks du marché cible (souvent 10–30% inférieurs au marché d'origine pour compenser l'absence de notoriété locale).</p>

<p><strong>Bloc 3 — Structure de coûts</strong></p>
<table class="data-table">
  <tr><th>Catégorie</th><th>Exemples</th><th>Fixe ou variable ?</th></tr>
  <tr><td>CAPEX (investissement initial)</td><td>Infrastructure, licences, acquisitions, aménagement</td><td>Fixe (one-time)</td></tr>
  <tr><td>Coûts fixes récurrents</td><td>Loyers, salaires équipe locale, IT, marketing de notoriété</td><td>Fixe annuel</td></tr>
  <tr><td>Coûts variables</td><td>COGS, commissions, logistique</td><td>Variable (% du CA)</td></tr>
  <tr><td>Coûts de démarrage</td><td>Recrutement, formation, marketing d'acquisition</td><td>Fixe (3–12 premiers mois)</td></tr>
</table>

<p><strong>Bloc 4 — P&L à 3 ans et point mort</strong></p>
<div class="formula-box">Année 1 : revenus faibles, coûts élevés (démarrage) → pertes attendues
Année 2 : revenus croissants, coûts fixes stables → amélioration EBITDA
Année 3 : seuil de rentabilité opérationnelle visé (EBITDA &gt; 0)

Break-even opérationnel = Coûts fixes / Marge de contribution unitaire
Break-even cash = CAPEX / FCF annuel récurrent</div>

<p><strong>Bloc 5 — Analyse de sensibilité et risques</strong></p>
<p>Identifiez les 2–3 hypothèses les plus sensibles et calculez l'impact si elles sont incorrectes. En market entry, les hypothèses les plus sensibles sont généralement : le taux d'adoption (SOM), le délai de montée en puissance, et les coûts d'acquisition clients.</p>

<h3>Exemple chiffré — Opérateur telecom français entrant en Pologne</h3>
<div class="example-box"><strong>Contexte :</strong> Opérateur B2B (entreprises) veut s'implanter en Pologne via une offre de services cloud managed.<br><br>
<strong>TAM :</strong> Marché polonais cloud B2B = 800M€ (estimation top-down : ~4% du marché européen de 20 Mds€)<br>
<strong>SAM :</strong> ETI &gt; 200 salariés = 1 500 entreprises × budget moyen 120k€/an = 180M€<br>
<strong>SOM année 1 :</strong> 20 clients × 120k€ = 2,4M€ | <strong>SOM année 3 :</strong> 80 clients × 120k€ = 9,6M€<br><br>
<strong>Coûts :</strong><br>
CAPEX : datacenter co-location + setup = 3M€<br>
Coûts fixes annuels : équipe locale (5 personnes) + loyers + IT = 1,5M€/an<br>
COGS : 40% du CA (infrastructure managed services)<br><br>
<strong>P&L :</strong><br>
Année 1 : CA 2,4M€ − COGS 1M€ − Fixes 1,5M€ = EBITDA −0,1M€ (quasi break-even)<br>
Année 2 : CA 5M€ − COGS 2M€ − Fixes 1,5M€ = EBITDA +1,5M€<br>
Année 3 : CA 9,6M€ − COGS 3,8M€ − Fixes 1,5M€ = EBITDA +4,3M€<br><br>
<strong>Payback CAPEX :</strong> 3M€ / 4,3M€ FCF année 3 = &lt; 1 an après stabilisation → ROI attractif<br><br>
<strong>Sensibilité :</strong> Si le SOM en année 3 est 50 clients au lieu de 80, EBITDA tombe à 2,5M€ — toujours positif. Risque principal : vitesse d'adoption (les cycles de vente B2B en Pologne sont de 9–12 mois).</div>

<div class="warning-box"><strong>Optimisme bias sur les revenus :</strong> Dans la grande majorité des business cases, les revenus des premières années sont surestimés d'un facteur 2–3×. Les consultants les grands cabinets appliquent un "discount de prudence" sur la rampe de montée en puissance et recommandent de planifier sur des scénarios central et pessimiste simultanément. Un business case qui n'est viable que dans le scénario optimiste ne justifie pas l'investissement.</div>

<div class="insight-box"><strong>Signal les grands cabinets :</strong> Le business case n'est pas l'objectif en soi — c'est l'outil qui permet de quantifier le seuil de rentabilité et d'identifier le facteur le plus incertain. "Notre analyse montre que le projet est viable si nous atteignons 60 clients en 3 ans. La vraie question est : est-ce réaliste ? Pour y répondre, je recommande un pilot de 6 mois avec 5 clients pilotes avant de s'engager sur le CAPEX total."</div>`
          }
        ]
      }
    ]
  }

); // end DATA.courses.push

})();

