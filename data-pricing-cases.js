// ============================================================
// DATA-PRICING-CASES.JS — Pricing Cases (like market sizing)
// Each case has: prompt (FR/EN), method, full worked answer
// ============================================================
(function () {

// Add pricing cases to the market sizing module's drills
var pricingCases = [
  {
    id: "PRC-D1", type: "pricing", time: 300,
    prompt: "Votre client est une startup SaaS B2B qui développe un outil d'automatisation RH. Leur coût de développement est 800k€, serveurs 50k€/an. Ils envisagent 3 prix : 50€/mois, 80€/mois, ou 120€/mois/entreprise. Comment déterminer le prix optimal ?",
    prompt_en: "Your client is a B2B SaaS startup building an HR automation tool. Development cost: €800k, servers €50k/year. They're considering 3 price points: €50/month, €80/month, or €120/month per company. How do you determine the optimal price?",
    answer: `MÉTHODE EN 3 ÉTAPES :

1. FLOOR (prix plancher) — Cost-plus :
   Coûts annuels = 50k€ (serveurs) + amortissement dev = 800k/3 ans ≈ 267k€ = total 317k€/an
   Pour 100 clients cible : coût/client = 3 170€/an = 264€/mois
   Attention : à 50-120€/mois le modèle n'est rentable qu'à ~300+ clients !
   → Le floor basé coût pur = ~30-50€/mois (pour 300 clients)

2. CEILING (plafond) — Value-based :
   Valeur créée par l'outil : automatisation 10h/semaine d'un RH à 40€/h = 400€/semaine = 1 733€/mois
   Alternative : solution manuelle ou concurrent à 70-100€/mois
   → Prix ceiling = valeur créée − meilleure alternative = 1 733€ − 90€ = 1 643€/mois (très élevé)
   Taux de capture réaliste = 5-8% de la valeur créée → 87-139€/mois

3. CONTEXTE CONCURRENTIEL :
   Solutions concurrentes : BambooHR ~8€/employé/mois, HibobHR ~6€. Pour PME 20 employés = 120-160€/mois.
   → Notre fourchette 80-120€ est cohérente avec le marché

RECOMMANDATION :
→ 80€/mois pour phase de pénétration (priorité volume et croissance)
→ Plan : 80€ les 6 premiers mois, puis 100€ → 120€ avec fonctionnalités supplémentaires (skimming progressif)
→ Breakeven : à 80€/mois, rentabilité opérationnelle atteinte à ~40 clients
   (40 × 80 × 12 = 38 400€ > 50k€ serveurs — avec les amortissements dev, rentabilité réelle à ~75 clients)

PIÈGE À ÉVITER : ne pas baser le prix sur les coûts uniquement. La valeur créée justifie 5-10× le coût de revient.`,
    answer_en: `3-STEP METHOD:

1. FLOOR — Cost-plus:
   Annual costs: €50k (servers) + dev amortization (€800k/3y) ≈ €317k/year
   At 100 clients: cost/client = €3,170/year = €264/month
   Key insight: the €50-120 range only works at 300+ clients scale!
   → True cost floor ≈ €30-50/month at scale (300 clients)

2. CEILING — Value-based:
   Value created: automating 10h/week for an HR person at €40/h = €400/week = €1,733/month
   Best alternative: manual or competitor at €70-100/month
   → Ceiling = value created − best alternative = €1,733 − €90 = €1,643/month
   Realistic capture rate: 5-8% → €87-139/month

3. COMPETITIVE CONTEXT:
   BambooHR ~€8/employee/month, HibobHR ~€6. For 20-person SME = €120-160/month
   → Our €80-120 range is market-consistent

RECOMMENDATION:
→ €80/month for penetration phase (prioritize volume & growth)
→ Roadmap: €80 for first 6 months, then €100 → €120 with added features (progressive skimming)
→ Break-even: at €80/month, operational breakeven at ~40 clients
→ Full profitability (incl. dev amortization) at ~75 clients

KEY INSIGHT: Don't anchor to costs. Value created justifies 5-10× your cost of goods.`
  },

  {
    id: "PRC-D2", type: "pricing", time: 300,
    prompt: "Un groupe hôtelier 4 étoiles parisien a 200 chambres. Taux d'occupation moyen : 72%. Prix actuel : 180€/nuit. Un consultant propose de baisser le prix à 150€ pour viser 90% d'occupation. Est-ce une bonne décision ?",
    prompt_en: "A 4-star Paris hotel group has 200 rooms. Average occupancy: 72%. Current price: €180/night. A consultant proposes lowering to €150 to target 90% occupancy. Is this a good decision?",
    answer: `ANALYSE REVENUE MANAGEMENT :

CA ACTUEL :
200 chambres × 72% × 180€ × 365j = 200 × 0.72 × 180 × 365 = 9 460 800€ ≈ 9.5M€/an

SCÉNARIO PROPOSÉ (150€, 90%) :
200 × 90% × 150€ × 365 = 200 × 0.90 × 150 × 365 = 9 855 000€ ≈ 9.9M€/an

→ CA légèrement supérieur (+4.2%), MAIS :

ANALYSE COÛTS :
Coût variable par chambre occupée (ménage, petit-déjeuner, etc.) ≈ 40€/nuit
MARGE ACTUELLE : (180−40) × 200 × 72% × 365 = 140 × 52 560 = 7 358 400€
MARGE NOUVELLE : (150−40) × 200 × 90% × 365 = 110 × 65 700 = 7 227 000€

→ Marge INFÉRIEURE de 131k€ malgré un CA supérieur !

RECOMMANDATION : NON — ne pas baisser le prix de manière uniforme.

ALTERNATIVE : Dynamic pricing
→ Prix 150€ les jours creux (lun-mar en période basse)
→ Prix 200-250€ les week-ends et périodes hautes
→ Objectif : RevPAR ≥ 140€ (vs 130€ actuel = 180 × 72%)
→ Système yield management (channel manager) : coût ~20k€/an, ROI <3 mois

LEÇON : RevPAR (Revenue Per Available Room) = Prix × Taux d'occupation.
RevPAR actuel = 180 × 72% = 129.6€.
RevPAR nouveau = 150 × 90% = 135€ — meilleur RevPAR mais marge unitaire plus faible.`,
    answer_en: `REVENUE MANAGEMENT ANALYSIS:

CURRENT REVENUE:
200 rooms × 72% × €180 × 365 days = €9.46M/year

PROPOSED SCENARIO (€150, 90%):
200 × 90% × €150 × 365 = €9.86M/year

→ Revenue slightly higher (+4.2%), BUT:

COST ANALYSIS:
Variable cost per occupied room (housekeeping, breakfast, etc.) ≈ €40/night
CURRENT MARGIN: (180−40) × 200 × 72% × 365 = €140 × 52,560 = €7.36M
NEW MARGIN: (150−40) × 200 × 90% × 365 = €110 × 65,700 = €7.23M

→ Margin is LOWER by €131k despite higher revenue!

RECOMMENDATION: NO — don't uniformly lower prices.

ALTERNATIVE: Dynamic pricing
→ €150 on slow days (Mon-Tue off-season)
→ €200-250 on weekends and peak periods
→ Target: RevPAR ≥ €140 (vs current €130 = €180 × 72%)
→ Yield management system: ~€20k/year cost, <3-month ROI

KEY INSIGHT: RevPAR (Revenue Per Available Room) = Price × Occupancy.
Current RevPAR = €180 × 72% = €129.6.
Proposed RevPAR = €150 × 90% = €135 — better RevPAR but lower unit margin.`
  },

  {
    id: "PRC-D3", type: "pricing", time: 300,
    prompt: "Un fabricant de logiciels industriels vend sa solution 50 000€ de licence unique. Le marché évolue vers l'abonnement SaaS. Il envisage 500€/mois. Comment évaluer l'impact sur les revenus et recommander une stratégie de transition ?",
    prompt_en: "An industrial software manufacturer sells its solution at €50,000 one-time license. The market is shifting to SaaS subscriptions. They're considering €500/month. How do you assess the revenue impact and recommend a transition strategy?",
    answer: `ANALYSE DE TRANSITION MODÈLE :

SITUATION ACTUELLE (licences perpétuelles) :
Hypothèse : 100 nouvelles licences/an → CA = 100 × 50k = 5M€/an
+ Maintenance annuelle 20% = 100 clients × 10k = 1M€ récurrent
Total : 5M€ + 1M€ = 6M€/an

MODÈLE SAAS (500€/mois = 6 000€/an) :
Impact immédiat : client payait 50k une fois → maintenant 6k/an
→ Payback pour le client : 50k/6k = 8.3 ans (attractif financièrement !)

IMPACT SUR LES REVENUS (transition progressive 3 ans) :
An 1 : 50% nouveaux clients en SaaS = 50×6k + 50×50k + 1M maintenance = 0.3M + 2.5M + 1M = 3.8M (-37%)
An 2 : 80% en SaaS, base existante maintenue : revenus récurrents grandissent
An 3 : 100% SaaS → si 300 clients actifs × 6k = 1.8M + base croissante

POINT CRITIQUE : "J" de trésorerie
La transition crée un trou de trésorerie de 2-3 ans avant que la base récurrente compense.
Solution : prix de migration préférentiel pour clients existants + engagement 3 ans minimum.

RECOMMANDATION :
Modèle hybride de transition :
→ Clients existants : migration SaaS à 700€/mois (vs 1 000€ tarif normal) s'ils signent 3 ans = 8 400€/an
→ Nouveaux clients : uniquement SaaS à 900€/mois (= 10 800€/an) avec module premium
→ Plus d'option licence perpétuelle pour les nouveaux après 12 mois
→ Objectif : ARR > 5M€ dans 4 ans avec marge EBITDA supérieure (pas de COGS physique)`,
    answer_en: `BUSINESS MODEL TRANSITION ANALYSIS:

CURRENT SITUATION (perpetual licenses):
Assumption: 100 new licenses/year → Revenue = 100 × €50k = €5M/year
+ Annual maintenance 20% = 100 clients × €10k = €1M recurring
Total: €5M + €1M = €6M/year

SAAS MODEL (€500/month = €6,000/year):
Client perspective: was paying €50k once → now €6k/year
→ Client financial break-even: €50k/€6k = 8.3 years (very attractive!)

REVENUE IMPACT (3-year progressive transition):
Year 1: 50% new clients on SaaS = 50×€6k + 50×€50k + €1M maintenance = €3.8M (-37%)
Year 2: 80% on SaaS, existing base maintained
Year 3: 100% SaaS → if 300 active clients × €6k = €1.8M + growing base

CRITICAL: "J-curve" cash flow
Transition creates a 2-3 year cash trough before recurring base compensates.
Solution: migration discount for existing clients + 3-year minimum commitment.

RECOMMENDATION — Hybrid transition model:
→ Existing clients: SaaS migration at €700/month (vs €1,000 standard) for 3-year commitment = €8,400/year
→ New clients: SaaS only at €900/month (€10,800/year) with premium module
→ No more perpetual license option for new clients after 12 months
→ Target: ARR > €5M in 4 years with higher EBITDA margin (no physical COGS)`
  },

  {
    id: "PRC-D4", type: "pricing", time: 300,
    prompt: "Un cabinet de conseil (conseil en stratégie) veut augmenter ses tarifs de 15%. Ses taux journaliers sont actuellement de 1 800€/jour. Il craint de perdre des clients. Comment structurer l'analyse et la recommandation ?",
    prompt_en: "A strategy consulting firm wants to raise rates by 15%. Current daily rate: €1,800/day. They fear losing clients. How do you structure the analysis and recommendation?",
    answer: `ANALYSE PRICING CONSEIL :

CONTEXTE :
Tarif actuel : 1 800€/jour
Tarif cible : 1 800 × 1.15 = 2 070€/jour

ANALYSE ÉLASTICITÉ :
Le conseil en stratégie est un service inélastique si :
- Différenciation forte (méthodologie propriétaire, accès partenaires)
- Coûts de changement élevés (relation construite, connaissance du contexte client)
- La valeur créée >> le prix (un projet à 2M€ qui génère 50M€ de valeur)
→ Estimation ε ≈ −0.3 à −0.5

Impact d'une hausse 15% avec ε = −0.4 :
Perte de volume : −15% × 0.4 = −6%
Impact CA : 1.15 × (1−0.06) = 1.15 × 0.94 = 1.081 → +8.1%

SEGMENTATION CLIENTS :
Clients à retenir (ne pas risquer) : 20% des clients = 80% du CA
Clients plus sensibles : PME, secteur public, clients peu rentables
→ Politique différenciée : hausse 15% seulement sur clients stratégiques et nouveaux contrats.
   Clients actuels top 20% : hausse 10% avec engagement de continuité de partenariat.

RECOMMENDATION :
1. Hausse 15% sur tous les nouveaux contrats dès Jan prochain
2. Hausse 10% sur renouvellements clients existants avec préavis 90 jours
3. Préparer la communication valeur : "nos taux reflètent l'inflation +8% + investissements dans nos équipes"
4. Exclure de la hausse : 3 clients strategiques long-terme (maintenir relations)
5. Impact net estimé : +8-10% de CA à périmètre comparable`,
    answer_en: `CONSULTING PRICING ANALYSIS:

CONTEXT:
Current rate: €1,800/day
Target rate: €1,800 × 1.15 = €2,070/day

ELASTICITY ANALYSIS:
Strategy consulting is inelastic if:
- Strong differentiation (proprietary methodology, partner access)
- High switching costs (built relationship, context knowledge)
- Value created >> price (a €2M project generating €50M in value)
→ Estimated ε ≈ −0.3 to −0.5

Impact of 15% increase with ε = −0.4:
Volume loss: −15% × 0.4 = −6%
Revenue impact: 1.15 × (1−0.06) = 1.15 × 0.94 = 1.081 → +8.1%

CLIENT SEGMENTATION:
Clients to protect: top 20% = 80% of revenue
More price-sensitive: SMEs, public sector, low-margin clients
→ Differentiated policy: 15% increase for strategic and new clients only.
   Top 20% existing clients: 10% increase with partnership continuity commitment.

RECOMMENDATION:
1. 15% increase on all new contracts from January
2. 10% increase on existing client renewals with 90-day notice
3. Prepare value communication: "rates reflect 8% inflation + team investment"
4. Exclude: 3 long-term strategic clients from the increase
5. Estimated net impact: +8-10% like-for-like revenue`
  },

  {
    id: "PRC-D5", type: "pricing", time: 300,
    prompt: "Une marque de cosmétiques premium envisage de lancer une ligne entrée de gamme à 15€ (vs gamme actuelle 45-80€). Quels sont les risques et comment optimiser la stratégie de prix ?",
    prompt_en: "A premium cosmetics brand considers launching a budget line at €15 (vs current range €45-80). What are the risks and how do you optimize the pricing strategy?",
    answer: `ANALYSE PRICING EXTENSION DE GAMME :

RISQUE #1 — CANNIBALISATION :
Si des clients actuels migrent de 60€ (milieu de gamme) vers 15€ :
Perte = nombre de clients × 45€ de différence
Si 20% des 100k clients annuels migrent : perte = 20k × 45 = 900k€
Mais si la ligne bas de gamme attire 200k nouveaux clients : gain = 200k × 15 = 3M€
→ Net positif SEULEMENT si l'acquisition prime sur la cannibalisation

RISQUE #2 — DILUTION DE LA MARQUE :
L'entrée de gamme peut dégrader la perception premium de la marque principale.
Exemple : Porsche → Cayenne (risque mais géré avec succès par séparation des segments).
Exemple négatif : Armani → Armani Exchange (dilution partielle du brand equity).
Solution : créer une sous-marque ou une marque fille distincte (ex: "by [Marque]")

RISQUE #3 — PRICING FLOOR TROP BAS :
À 15€, marge brute avec COGS cosmétiques (~30% du prix) = 10.50€ brut.
Coûts distribution, marketing, packaging, SAV : souvent 25-40% du prix de vente.
→ Marge nette possiblement négative ou marginale à 15€ pour une marque premium

RECOMMANDATION :
Prix optimal : 25-30€ (pas 15€)
- Suffisamment bas pour l'accessibilité (vs 45€ actuel)
- Assez élevé pour préserver la perception qualité premium
- Marge acceptable pour soutenir la croissance
Structure : gamme "Essential" à 25-30€ → "Classic" à 45-60€ → "Prestige" à 70-100€
→ Prix à 15€ = risque élevé sur la marque mère, recommandé uniquement sous marque séparée`,
    answer_en: `BRAND EXTENSION PRICING ANALYSIS:

RISK #1 — CANNIBALIZATION:
If current customers trade down from €60 (mid-range) to €15:
Loss = number of migrating clients × €45 price gap
If 20% of 100k annual clients trade down: loss = 20k × €45 = €900k
But if budget line attracts 200k new clients: gain = 200k × €15 = €3M
→ Net positive ONLY if acquisition outweighs cannibalization

RISK #2 — BRAND DILUTION:
A budget line can degrade the premium brand perception.
Success case: Porsche → Cayenne (managed with segment separation)
Failure case: Armani → Armani Exchange (partial brand equity dilution)
Solution: create a distinct sub-brand ("by [Brand]")

RISK #3 — PRICING FLOOR TOO LOW:
At €15, gross margin with cosmetic COGS (~30% of price) = €10.50.
Distribution, marketing, packaging, customer service: often 25-40% of selling price.
→ Net margin potentially negative or marginal at €15 for a premium brand

RECOMMENDATION:
Optimal price: €25-30 (not €15)
- Low enough for accessibility (vs €45 current)
- High enough to preserve premium quality perception
- Acceptable margin to support growth
Structure: "Essential" at €25-30 → "Classic" at €45-60 → "Prestige" at €70-100
→ €15 price point: high risk to mother brand; only recommended under a separate brand`
  },

  {
    id: "PRC-D6", type: "pricing", time: 300,
    prompt: "Un opérateur télécoms B2C propose 3 offres : Basique 10€/mois (3M abonnés), Standard 25€/mois (5M abonnés), Premium 45€/mois (1.5M abonnés). Il envisage de supprimer l'offre Basique. Analysez l'impact.",
    prompt_en: "A B2C telecom operator has 3 offers: Basic €10/month (3M subscribers), Standard €25/month (5M subscribers), Premium €45/month (1.5M subscribers). They're considering eliminating the Basic offer. Analyze the impact.",
    answer: `ANALYSE SUPPRESSION D'UNE OFFRE :

CA ACTUEL :
Basique : 3M × 10€ × 12 = 360M€
Standard : 5M × 25€ × 12 = 1 500M€
Premium : 1.5M × 45€ × 12 = 810M€
TOTAL = 2 670M€/an

SCÉNARIOS APRÈS SUPPRESSION BASIQUE (3M abonnés) :
• Scénario optimiste (migration) : 50% → Standard (= +15€), 10% → Premium
  Migration CA : 1.5M × 25 × 12 + 300k × 45 × 12 = 450M + 162M = 612M€
  Perte basique : 360M€. Net : +252M€ → CA total = 2 922M€ (+9.4%)

• Scénario réaliste : 30% → Standard, 5% → Premium, 65% → CHURN (départs)
  Migration CA : 900k × 25 × 12 + 150k × 45 × 12 = 270M + 81M = 351M€
  Perte basique : 360M€. Net : −9M€ → CA quasiment stable

• Scénario pessimiste : 20% → Standard, 80% → Churn
  CA gagné : 600k × 300 = 180M€
  Perte : 360M€. Net : −180M€ (−6.7%)

ANALYSE COÛTS :
Coût de servir un abonné basique (réseau, service client, facturation) ≈ 8-12€/mois
→ Marge basique = 10 − 10 = quasi nulle ou négative !
→ D'un point de vue marges, la suppression est positive même si certains churne.

RECOMMANDATION :
Ne pas supprimer brutalement. Stratégie en 3 étapes :
1. Fermer l'offre Basique aux nouveaux abonnés (migration naturelle)
2. Proposer une migration "Early Bird" Standard à 18€/mois pendant 6 mois
3. Terminer l'offre Basique avec préavis légal de 1 mois
→ Objectif : >50% migrent vers Standard, CA net +150-200M€`,
    answer_en: `OFFER ELIMINATION ANALYSIS:

CURRENT REVENUE:
Basic: 3M × €10 × 12 = €360M
Standard: 5M × €25 × 12 = €1,500M
Premium: 1.5M × €45 × 12 = €810M
TOTAL = €2,670M/year

POST-ELIMINATION SCENARIOS (3M Basic subscribers):
• Optimistic (migration): 50% → Standard (+€15), 10% → Premium
  Migration revenue: 1.5M × €25 × 12 + 300k × €45 × 12 = €450M + €162M = €612M
  Basic lost: €360M. Net: +€252M → Total = €2,922M (+9.4%)

• Realistic: 30% → Standard, 5% → Premium, 65% → CHURN
  Migration revenue: €270M + €81M = €351M
  Basic lost: €360M. Net: −€9M → revenue nearly stable

• Pessimistic: 20% → Standard, 80% → Churn
  Revenue gained: €180M
  Lost: €360M. Net: −€180M (−6.7%)

COST ANALYSIS:
Serving a basic subscriber (network, support, billing): ≈ €8-12/month
→ Basic margin = €10 − €10 = near zero or negative!
→ From a margin perspective, eliminating Basic is positive even with some churn.

RECOMMENDATION:
Don't eliminate abruptly. 3-step strategy:
1. Close Basic to new subscribers (natural migration)
2. Offer "Early Bird" Standard upgrade at €18/month for 6 months
3. Terminate Basic with legally required 1-month notice
→ Target: >50% migrate to Standard, net revenue +€150-200M`
  },

  {
    id: "PRC-D7", type: "pricing", time: 300,
    prompt: "Amazon Prime vaut 69.99€/an en France. Un concurrent veut se lancer avec un service similaire. À quel prix se positionner et comment justifier ce choix ?",
    prompt_en: "Amazon Prime costs €69.99/year in France. A competitor wants to launch a similar service. At what price should they position and how to justify this choice?",
    answer: `ANALYSE PRICING MARKET ENTRY :

ANALYSE DE LA VALEUR AMAZON PRIME :
• Livraison gratuite illimitée : valeur estimée 80-120€/an (si 8-12 commandes × 10€ économisées)
• Prime Video : valeur standalone ~60-80€/an (vs Netflix 167€/an)
• Prime Music : valeur ~30-40€/an
• Autres bénéfices : Twitch, Prime Reading, etc. ~15-20€/an
Valeur totale perçue : 185-260€/an. Amazon capture ~27-38% de cette valeur.

OPTIONS DE PRIX POUR LE CONCURRENT :
Option A : 39.99€/an (−43% vs Prime)
  → Pénétration agressive. CAC faible. Viable si financement disponible et économies d'échelle.
  Risque : Amazon répond en baissant son prix → guerre de prix.

Option B : 59.99€/an (−14% vs Prime)
  → Pénétration modérée. Message : "même valeur pour moins cher".
  Viable si le service est comparable. Le benchmark de 10€ de différence peut déclencher le switch.

Option C : 79.99€/an (+14% vs Prime)
  → Différenciation. Message : "premium sur la livraison J+1 garanti".
  Viable uniquement si valeur perçue supérieure sur 1-2 dimensions clés.

RECOMMANDATION : Option B à 59.99€/an
Justification :
• 10€ de moins qu'Amazon = psychologiquement significatif pour le consommateur
• Marge suffisante pour soutenir le lancement (vs 39.99€ qui nécessite 2× le volume pour rentabiliser)
• Positionnement "valeur alternative" crédible sans dévaluer l'offre
• Offre de lancement : 49.99€ la première année (limited) → 59.99€ ensuite (skimming inversé)

LEÇON : Le concurrent ne doit pas copier le prix d'Amazon. Il doit être perçu comme une alternative moins chère AVEC une différenciation claire (ex : spécialisation dans l'alimentation, livraison même jour dans Paris, etc.)`,
    answer_en: `MARKET ENTRY PRICING ANALYSIS:

AMAZON PRIME VALUE ANALYSIS:
• Free unlimited delivery: estimated value €80-120/year (8-12 orders × €10 saved)
• Prime Video: standalone value ~€60-80/year (vs Netflix €167/year)
• Prime Music: value ~€30-40/year
• Other benefits: Twitch, Prime Reading, etc. ~€15-20/year
Total perceived value: €185-260/year. Amazon captures ~27-38% of this value.

COMPETITOR PRICE OPTIONS:
Option A: €39.99/year (−43% vs Prime)
  → Aggressive penetration. Low CAC. Viable with funding and at scale.
  Risk: Amazon responds with price cut → price war.

Option B: €59.99/year (−14% vs Prime)
  → Moderate penetration. Message: "same value for less."
  Viable if service is comparable. €10 difference may trigger switch.

Option C: €79.99/year (+14% vs Prime)
  → Differentiation. Message: "premium guaranteed next-day delivery."
  Viable only with clearly superior value on 1-2 key dimensions.

RECOMMENDATION: Option B at €59.99/year
Rationale:
• €10 less than Amazon = psychologically significant for consumers
• Sufficient margin to sustain launch (vs €39.99 which requires 2× volume to break even)
• Credible "value alternative" positioning without devaluing the offer
• Launch offer: €49.99 first year (limited) → €59.99 thereafter (reverse skimming)

KEY LESSON: The competitor shouldn't copy Amazon's price. It should be perceived as a cheaper alternative WITH clear differentiation (e.g., food specialization, same-day delivery in Paris, etc.)`
  },

  {
    id: "PRC-D8", type: "pricing", time: 300,
    prompt: "Un fabricant de matériel médical vend ses équipements 120 000€ pièce en vente directe. Il envisage de passer à un modèle 'equipment as a service' à 3 500€/mois. Comment modéliser et recommander ?",
    prompt_en: "A medical equipment manufacturer sells devices at €120,000 each. They're considering a 'equipment as a service' model at €3,500/month. How do you model and recommend?",
    answer: `MODÉLISATION TRANSITION VENTE → SERVITISATION :

MODÈLE ACTUEL (vente directe) :
Hypothèse : 200 équipements/an × 120k = 24M€/an en ventes
+ Maintenance annuelle 15% = 200 clients actifs × 18k = 3.6M€ (si parc 200 unités)
Total CA an 1 : 24M€ + 3.6M€ = 27.6M€ (dont 24M transactionnel)

MODÈLE EaaS (3 500€/mois = 42 000€/an) :
Pour rentabiliser vs vente :
   Payback client : 120k / 42k = 2.9 ans → très attractif pour les hôpitaux (budget immobilisations limité)
   Pour le fabricant : même revenu cumulé qu'une vente au bout de 2.9 ans

Mais : le fabricant porte le financement de l'équipement !
Coût du capital (équipement 120k à 6% sur 5 ans) ≈ 7.2k€/an de coût de financement
Marge sur EaaS = 42k − 18k maintenance − 7.2k financement = 16.8k€/an (vs ~60k net sur vente directe si marge 50%)

ANALYSE FLUX DE TRÉSORERIE :
An 1 : 200 équipements × 42k = 8.4M€ (vs 24M€ en vente directe → perte de 15.6M€ la 1ère année !)
An 3 : 600 équipements actifs × 42k = 25.2M€ (si 200/an)
An 5 : 1000 équipements × 42k = 42M€ → supérieur au modèle vente avec forte récurrence

RECOMMANDATION :
Modèle hybride :
→ Garder l'option vente pour les clients avec budget capex
→ Proposer EaaS à 3 800€/mois (pas 3 500€) avec option d'achat après 3 ans
→ Financer les 2 premières années via partenariat bancaire (BNP Paribas Equipment Finance)
→ Condition nécessaire : avoir 3 ans de trésorerie ou financement pour absorber le J-curve`,
    answer_en: `MODELING SALE → SERVITIZATION TRANSITION:

CURRENT MODEL (direct sales):
Assumption: 200 units/year × €120k = €24M/year in sales
+ Annual maintenance 15% = 200 active clients × €18k = €3.6M
Total Year 1 revenue: €24M + €3.6M = €27.6M (€24M transactional)

EaaS MODEL (€3,500/month = €42,000/year):
To break even vs sale:
   Client payback: €120k / €42k = 2.9 years → very attractive for hospitals (limited capex budgets)
   For manufacturer: same cumulative revenue as a sale after 2.9 years

But: the manufacturer carries the equipment financing!
Cost of capital (€120k equipment at 6% over 5 years) ≈ €7.2k/year
EaaS margin = €42k − €18k maintenance − €7.2k financing = €16.8k/year
(vs ~€60k net on direct sale at 50% margin)

CASH FLOW ANALYSIS:
Year 1: 200 units × €42k = €8.4M (vs €24M direct sales → €15.6M shortfall!)
Year 3: 600 active units × €42k = €25.2M (if 200/year)
Year 5: 1,000 units × €42k = €42M → exceeds sales model with strong recurring revenue

RECOMMENDATION:
Hybrid model:
→ Keep sales option for capex-budgeted clients
→ Offer EaaS at €3,800/month (not €3,500) with purchase option after 3 years
→ Finance first 2 years through bank partnership (equipment finance)
→ Prerequisite: 3 years of cash reserves or financing to absorb the J-curve`
  }
];

// Push pricing cases into the sizing module's drills (or create a new module)
var sizingModule = DATA.modules && DATA.modules.find(function(m) { return m.slug === 'market-sizing'; });
if (sizingModule) {
  pricingCases.forEach(function(c) { sizingModule.drills.push(c); });
}

// Also store separately for a dedicated pricing view
DATA.pricingCases = pricingCases;

})();

