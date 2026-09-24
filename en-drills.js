// ============================================================
// EN-DRILLS.JS — English translations for all drill content
//               + new math/sizing exercises
// Loaded after data-drills-extra.js so DATA is fully populated.
// ============================================================
(function () {

// ── helpers ──────────────────────────────────────────────────

function patchDrillEN(id, fields) {
  for (var i = 0; i < DATA.modules.length; i++) {
    var drills = DATA.modules[i].drills || [];
    for (var j = 0; j < drills.length; j++) {
      if (drills[j].id !== id) continue;
      var d = drills[j];
      for (var k in fields) {
        if (!Object.prototype.hasOwnProperty.call(fields, k)) continue;
        if (k === '_exhibit') {
          // merge into d.exhibit
          if (d.exhibit) {
            for (var ek in fields[k]) {
              if (Object.prototype.hasOwnProperty.call(fields[k], ek)) d.exhibit[ek] = fields[k][ek];
            }
          }
        } else {
          d[k] = fields[k];
        }
      }
      return;
    }
  }
}

function patchMathEN(qFR, q_en, a_en, cat_en, hint_en) {
  var exs = DATA.mentalMath.exercises;
  for (var i = 0; i < exs.length; i++) {
    if (exs[i].q === qFR) {
      exs[i].q_en = q_en;
      exs[i].a_en = a_en;
      if (cat_en)  exs[i].cat_en  = cat_en;
      if (hint_en) exs[i].hint_en = hint_en;
      return;
    }
  }
}

// ══════════════════════════════════════════════════════════════
// 1. MENTAL MATH — EN TRANSLATIONS (MM61–MM100)
// ══════════════════════════════════════════════════════════════
[
  // Fractions & %
  { q: '450 est augmenté de 33⅓%. Quel est le résultat ?',
    q_en: '450 is increased by 33⅓%. What is the result?', a_en: '600', cat_en: 'Percentages',
    hint_en: '450 × (1 + 1/3) = 450 × 4/3 = 1800/3 = 600' },
  { q: 'Un produit est vendu 156€. La marge est de 30% sur le prix de vente. Quel est le coût ?',
    q_en: 'A product sells for €156. Margin is 30% on selling price. What is the cost?', a_en: '€109.20', cat_en: 'Percentages',
    hint_en: 'Cost = Price × (1 − margin) = 156 × 0.70 = €109.20' },
  { q: 'CA de 2,4M€. La BU A représente 35%, la BU B 45%, la BU C le reste. Quel est le CA de BU C ?',
    q_en: 'Revenue = €2.4M. BU A = 35%, BU B = 45%, BU C = the rest. What is BU C revenue?', a_en: '€480,000', cat_en: 'Percentages',
    hint_en: 'BU C = 100% − 35% − 45% = 20%. €2.4M × 0.20 = €480,000' },
  { q: 'Variation de prix : +15% puis −15%. Quelle est la variation nette en % ?',
    q_en: 'Price change: +15% then −15%. What is the net % change?', a_en: '−2.25%', cat_en: 'Percentages',
    hint_en: '1.15 × 0.85 = 0.9775 → −2.25%. Symmetric ±% increases do not cancel out.' },
  { q: 'Marge brute = 42M€, CA = 180M€. Quel est le taux de marge brute ?',
    q_en: 'Gross margin = €42M, revenue = €180M. What is the gross margin rate?', a_en: '23.3%', cat_en: 'Percentages',
    hint_en: '42 / 180 = 0.233 ≈ 23.3%' },
  // CAGR
  { q: 'CA passe de 100M€ à 121M€ en 2 ans. Quel est le CAGR ?',
    q_en: 'Revenue goes from €100M to €121M in 2 years. What is the CAGR?', a_en: '10%', cat_en: 'CAGR',
    hint_en: 'CAGR = (121/100)^(1/2) − 1 = √1.21 − 1 = 10%' },
  { q: 'CA passe de 50M€ à 100M€ en 7 ans. Estimez le CAGR (approximation).',
    q_en: 'Revenue goes from €50M to €100M in 7 years. Estimate the CAGR.', a_en: '~10%', cat_en: 'CAGR',
    hint_en: 'Rule of 72: 72/7 ≈ 10%. Exact: (2)^(1/7)−1 = 10.4%' },
  { q: 'Un marché croit de 8%/an. En combien d\'années double-t-il ?',
    q_en: 'A market grows at 8%/year. In how many years does it double?', a_en: '9 years', cat_en: 'CAGR',
    hint_en: 'Rule of 72: 72/8 = 9 years' },
  { q: 'CA an 0 = 80M€. CAGR = 15% sur 3 ans. Quel est le CA en an 3 ?',
    q_en: 'Revenue year 0 = €80M. CAGR = 15% over 3 years. Revenue year 3?', a_en: '€121.5M', cat_en: 'CAGR',
    hint_en: '80 × (1.15)³ = 80 × 1.521 = €121.7M ≈ €121.5M' },
  { q: 'CA an 0 = 200M€. CA an 5 = 322M€. Quel est le CAGR ?',
    q_en: 'Revenue year 0 = €200M. Revenue year 5 = €322M. What is the CAGR?', a_en: '10%', cat_en: 'CAGR',
    hint_en: '(322/200)^(1/5) − 1 = (1.61)^0.2 − 1 ≈ 10%' },
  // P&L
  { q: 'CA = 500M€. COGS = 300M€. Opex = 120M€. Quel est l\'EBITDA et la marge ?',
    q_en: 'Revenue = €500M. COGS = €300M. Opex = €120M. What is EBITDA and margin?', a_en: 'EBITDA = €80M, margin 16%', cat_en: 'P&L',
    hint_en: 'Gross margin = 500−300 = €200M. EBITDA = 200−120 = €80M. 80/500 = 16%' },
  { q: 'EBITDA = 120M€. D&A = 30M€. Intérêts = 15M€. Impôts = 25%. Quel est le résultat net ?',
    q_en: 'EBITDA = €120M. D&A = €30M. Interest = €15M. Tax = 25%. What is net income?', a_en: '€56.25M', cat_en: 'P&L',
    hint_en: 'EBIT = 120−30 = €90M. EBT = 90−15 = €75M. Net income = 75 × 0.75 = €56.25M' },
  { q: 'Prix unitaire = 25€. Coût variable = 15€. Coûts fixes = 200 000€. Seuil de rentabilité en unités ?',
    q_en: 'Unit price = €25. Variable cost = €15. Fixed costs = €200,000. Breakeven in units?', a_en: '20,000 units', cat_en: 'P&L',
    hint_en: 'Contribution margin = 25−15 = €10/unit. Breakeven = 200,000 / 10 = 20,000 units' },
  { q: 'Marge brute secteur = 35%. Un concurrent affiche 28%. De combien devrait-on réduire les COGS pour atteindre la moyenne secteur si le CA est 400M€ ?',
    q_en: 'Industry gross margin = 35%. Competitor shows 28%. How much should COGS be reduced to reach the sector average if revenue = €400M?', a_en: '€28M', cat_en: 'P&L',
    hint_en: 'Current COGS = 400×0.72 = €288M. Target COGS = 400×0.65 = €260M. Reduction = 288−260 = €28M' },
  { q: 'ROE = 12%. Equity = 250M€. Quel est le résultat net ?',
    q_en: 'ROE = 12%. Equity = €250M. What is net income?', a_en: '€30M', cat_en: 'P&L',
    hint_en: 'Net income = ROE × Equity = 0.12 × 250 = €30M' },
  // Market sizing quick
  { q: 'Population France = 68M. 75% adultes. 60% ont un chien ou chat. 3 visites vétérinaires/an à 80€ en moyenne. Marché vétérinaire en France ?',
    q_en: 'France population = 68M. 75% adults. 60% own a dog or cat. 3 vet visits/year at €80 average. Vet market in France?', a_en: '~€7.3Bn', cat_en: 'Estimation',
    hint_en: '68M × 0.75 = 51M adults. × 0.60 = 30.6M households with pet. × 3 × 80 = €7.34Bn' },
  { q: '20M de voitures en circulation en France. 70% ont au moins un entretien/an à 300€ en moyenne. Marché entretien auto ?',
    q_en: '20M cars on the road in France. 70% have at least one service/year at €300 average. Car maintenance market?', a_en: '€4.2Bn', cat_en: 'Estimation',
    hint_en: '20M × 0.70 × 300 = €4.2Bn' },
  { q: 'Paris : 2,1M habitants. 50% boivent du café au travail, 5 jours/semaine. 1 café = 1,5€. 220 jours travaillés/an. Marché café Paris ?',
    q_en: 'Paris: 2.1M inhabitants. 50% drink coffee at work, 5 days/week. 1 coffee = €1.5. 220 working days/year. Coffee market in Paris?', a_en: '~€346M/year', cat_en: 'Estimation',
    hint_en: '2.1M × 0.50 × 220 × 1.5 = €346.5M' },
  { q: '3 500 magasins de sport en France. Panier moyen = 45€. 25 clients/jour. 300 jours ouvrés. CA total du secteur ?',
    q_en: '3,500 sports stores in France. Average basket = €45. 25 customers/day. 300 working days. Total sector revenue?', a_en: '~€1.2Bn', cat_en: 'Estimation',
    hint_en: '3,500 × 25 × 300 × 45 = €1.18Bn ≈ €1.2Bn' },
  { q: 'Combien de pizzas sont vendues en France chaque année ? (population 68M)',
    q_en: 'How many pizzas are sold in France each year? (population 68M)', a_en: '~1.5 to 2 billion pizzas', cat_en: 'Estimation',
    hint_en: 'Top-down: 68M × ~1–2 pizzas/month = 800M–1.6Bn. Supply-check: 35,000 pizzerias × 150/day × 300 days ≈ 1.6Bn' },
  // Quick calc
  { q: '7,2M divisé par 0,9 =',
    q_en: '7.2M divided by 0.9 =', a_en: '8M', cat_en: 'Quick calc',
    hint_en: '7.2 / 0.9 = 72/9 = 8. Multiply both by 10.' },
  { q: '364 × 5 =',
    q_en: '364 × 5 =', a_en: '1,820', cat_en: 'Quick calc',
    hint_en: '364 × 5 = 364 × 10/2 = 3,640/2 = 1,820' },
  { q: '375 × 8 =',
    q_en: '375 × 8 =', a_en: '3,000', cat_en: 'Quick calc',
    hint_en: '375 × 8 = 3,000. Trick: 400×8 = 3,200 − 25×8 = 200 → 3,000' },
  { q: '18% de 350 =',
    q_en: '18% of 350 =', a_en: '63', cat_en: 'Quick calc',
    hint_en: '10% = 35. 8% = 28. Total = 63' },
  { q: '37,5% de 480 =',
    q_en: '37.5% of 480 =', a_en: '180', cat_en: 'Quick calc',
    hint_en: '37.5% = 3/8. 480/8 = 60. 60 × 3 = 180' },
  // Finance
  { q: 'EBITDA = 40M€. EV/EBITDA multiple = 8x. Dette nette = 30M€. Quelle est la valeur equity ?',
    q_en: 'EBITDA = €40M. EV/EBITDA multiple = 8×. Net debt = €30M. What is equity value?', a_en: '€290M', cat_en: 'Finance',
    hint_en: 'EV = 40 × 8 = €320M. Equity = EV − Net debt = 320 − 30 = €290M' },
  { q: 'Free Cash Flow = 20M€/an. WACC = 10%. Taux de croissance perpétuel = 2%. Valeur terminale ?',
    q_en: 'Free Cash Flow = €20M/year. WACC = 10%. Perpetual growth rate = 2%. Terminal value?', a_en: '€250M', cat_en: 'Finance',
    hint_en: 'TV = FCF / (WACC − g) = 20 / (0.10 − 0.02) = 20 / 0.08 = €250M' },
  { q: 'P/E = 15. Résultat net = 30M€. Market cap ?',
    q_en: 'P/E = 15. Net income = €30M. Market cap?', a_en: '€450M', cat_en: 'Finance',
    hint_en: 'Market cap = P/E × Net income = 15 × 30 = €450M' },
  { q: 'Un investissement de 100M€ génère 25M€/an. Quel est le payback period ?',
    q_en: 'An investment of €100M generates €25M/year. What is the payback period?', a_en: '4 years', cat_en: 'Finance',
    hint_en: '100 / 25 = 4 years' },
  { q: 'ROI sur 3 ans : investissement = 50M€, gains année 1 = 10M€, an 2 = 20M€, an 3 = 30M€. ROI total ?',
    q_en: 'ROI over 3 years: investment = €50M, year 1 = €10M, year 2 = €20M, year 3 = €30M. Total ROI?', a_en: '120%', cat_en: 'Finance',
    hint_en: 'Total gains = €60M. ROI = 60/50 = 120%' },
  // SaaS
  { q: '5 000 clients SaaS. ARPU = 200€/mois. Churn annuel = 15%. Quel est le MRR et l\'ARR ?',
    q_en: '5,000 SaaS clients. ARPU = €200/month. Annual churn = 15%. What is MRR and ARR?', a_en: 'MRR = €1M, ARR = €12M', cat_en: 'SaaS',
    hint_en: 'MRR = 5,000 × 200 = €1M. ARR = €12M' },
  { q: 'ARR = 12M€. NRR = 110%. Quel sera l\'ARR dans 1 an sans nouveaux clients ?',
    q_en: 'ARR = €12M. NRR = 110%. What will ARR be in 1 year with no new clients?', a_en: '€13.2M', cat_en: 'SaaS',
    hint_en: 'ARR × NRR = 12 × 1.10 = €13.2M' },
  { q: 'CAC = 1 200€. ARPU mensuel = 80€. Marge brute = 75%. Churn mensuel = 2%. Quel est le LTV et LTV/CAC ?',
    q_en: 'CAC = €1,200. Monthly ARPU = €80. Gross margin = 75%. Monthly churn = 2%. What is LTV and LTV/CAC?', a_en: 'LTV = €3,000, LTV/CAC = 2.5', cat_en: 'SaaS',
    hint_en: 'LTV = ARPU × Gross margin / Monthly churn = 80 × 0.75 / 0.02 = €3,000. LTV/CAC = 3000/1200 = 2.5 (below the 3× threshold)' },
  { q: 'Un SaaS croît de 30%/an et a une marge EBITDA de 5%. Quelle est sa Rule of 40 ?',
    q_en: 'A SaaS grows at 30%/year with 5% EBITDA margin. What is its Rule of 40?', a_en: '35 (insufficient)', cat_en: 'SaaS',
    hint_en: 'Rule of 40 = Growth rate + EBITDA margin = 30 + 5 = 35. Below 40 → needs improvement' },
  { q: 'ARR début = 8M€. Churn ARR = 0,8M€. Expansion ARR = 1,5M€. Quel est le NRR ?',
    q_en: 'Starting ARR = €8M. Churn ARR = €0.8M. Expansion ARR = €1.5M. What is NRR?', a_en: '108.75%', cat_en: 'SaaS',
    hint_en: 'NRR = (8 − 0.8 + 1.5) / 8 = 8.7/8 = 108.75%' },
  // Pricing
  { q: 'Elasticité prix = −1,5. Si le prix augmente de 10%, de combien le volume baisse-t-il ?',
    q_en: 'Price elasticity = −1.5. If price increases 10%, by how much does volume fall?', a_en: '15%', cat_en: 'Pricing',
    hint_en: '% ΔVolume = Elasticity × % ΔPrice = −1.5 × 10% = −15%' },
  { q: 'Prix = 50€. Volume = 10 000 unités. Elasticité = −2. Nouveau prix = 55€. Nouveau profit si CV = 30€ et CF = 100 000€ ?',
    q_en: 'Price = €50. Volume = 10,000 units. Elasticity = −2. New price = €55. New profit if VC = €30 and FC = €100,000?', a_en: 'Profit ≈ €100,000', cat_en: 'Pricing',
    hint_en: 'ΔPrice = +10% → ΔVolume = −2 × 10% = −20% → new volume = 8,000. Profit = (55−30)×8,000 − 100,000 = 200,000 − 100,000 = €100,000' },
  { q: 'Willingness to pay client A = 120€, client B = 80€, client C = 60€. Prix unique = 80€. Revenue total ? Si prix différencié (A à 120, B+C à 80) ?',
    q_en: 'Willingness to pay: A = €120, B = €80, C = €60. Single price = €80. Total revenue? If differentiated (A at €120, B+C at €80)?', a_en: 'Single = €240. Differentiated = €280', cat_en: 'Pricing',
    hint_en: 'Single €80 → 3 clients × 80 = €240. Differentiated: A=€120, B=€80, C=€80 → €280' },
  { q: 'Coût de revient = 40€. Marge cible = 25% sur coût. Prix de vente et marge sur prix ?',
    q_en: 'Cost price = €40. Target margin = 25% on cost. Selling price and margin-on-price?', a_en: 'Price = €50, margin on price = 20%', cat_en: 'Pricing',
    hint_en: 'Price = 40 × 1.25 = €50. Margin on price = (50−40)/50 = 20%. Note: margin on cost ≠ margin on price.' },
  { q: 'Combien fait 2^10 ?',
    q_en: 'What is 2^10?', a_en: '1,024', cat_en: 'Quick calc',
    hint_en: '2^10 = 1,024. Mnemonic: "1K" ≈ 1,000. Useful for tech/SaaS exponential growth cases.' }
].forEach(function(t) { patchMathEN(t.q, t.q_en, t.a_en, t.cat_en, t.hint_en); });

// ══════════════════════════════════════════════════════════════
// 2. MARKET SIZING DRILLS — EN TRANSLATIONS (MS-D12–MS-D26)
// ══════════════════════════════════════════════════════════════
[
  { id: 'MS-D12',
    question_en: 'Estimate the Netflix subscription market in France.',
    hint_en: 'Population → households → % streaming subscribers → Netflix share → average price',
    answer_en: 'French households: 30M. % with streaming subscription: 50% = 15M households. Netflix share: ~40%. Netflix subscribers: 15M × 0.40 = 6M households. ARPU France: ~€13/month. Annual revenue: 6M × 13 × 12 = €936M ≈ €1Bn. Sanity check: Netflix global = ~$37Bn. France ≈ 3% = ~$1.1Bn ✓',
    keyMetrics_en: ['30M households', '6M Netflix subscribers', '~€1Bn/year'] },
  { id: 'MS-D13',
    question_en: 'Estimate the taxi and ridesharing market in France (Uber, Bolt, traditional taxis).',
    hint_en: 'Regular users × frequency × average fare',
    answer_en: 'Demand approach: Urban adults (cities >100k): 30% of 68M = 20M. Regular VTC+taxi users: 30% = 6M. Frequency: 2 trips/month = 24/year. Average price: €15. Total: 6M × 24 × 15 = €2.16Bn. Adding occasional users (+20%): ~€2.6Bn. Sanity check: Uber FR ~€500M + taxis ~€1Bn + others ~€500M = €2Bn ✓',
    keyMetrics_en: ['6M regular users', '24 trips/year', '~€2.5Bn total market'] },
  { id: 'MS-D14',
    question_en: 'Estimate the food delivery market in France (Deliveroo, UberEats, Just Eat).',
    hint_en: 'Users × orders/year × average basket',
    answer_en: 'Population 15–55 (core target): 55% of 68M = 37M. Urban connected users of delivery: 40% = 15M. Frequency: 1 order/2 weeks = 26/year. Average basket: €25. GMV = 15M × 26 × 25 = €9.75Bn. Platform take rate (~25%): platform revenues = €2.4Bn. Top 3 (UberEats, Deliveroo, Just Eat) share ~95% of market.',
    keyMetrics_en: ['15M active users', '26 orders/year', 'GMV ~€10Bn'] },
  { id: 'MS-D15',
    question_en: 'Estimate the number of electric vehicles sold in France in 2025.',
    hint_en: 'Total new car sales × electrification rate',
    answer_en: 'New car sales in France: ~1.5M vehicles/year. Electrification rate (full EV + PHEV): ~25% in 2025. Full EV only: ~15% = 225,000 vehicles. Key players: Renault (Megane E, Zoe), Peugeot, Tesla, VW. Sanity check: government target is 100% EVs by 2035. Market growing strongly from ~5% in 2020.',
    keyMetrics_en: ['1.5M total new car sales', '~225,000 pure EVs', '~300,000 including PHEV'] },
  { id: 'MS-D16',
    question_en: 'Estimate the cloud computing market in France.',
    hint_en: 'Companies by size × adoption rate × average cloud spend',
    answer_en: 'Large enterprises (>250 employees): ~5,000 in France. Cloud spend: €2M/year. Total: €10Bn. Mid-market (50–250 employees): ~150,000. Cloud spend: €20,000/year. Total: €3Bn. SMEs (10–50): ~300,000. Cloud spend: €5,000/year. Total: €1.5Bn. Total French cloud market: 10 + 3 + 1.5 = €14.5Bn. Sanity check: IDC estimates French cloud at ~€12–15Bn ✓',
    keyMetrics_en: ['Large enterprises = €10Bn', 'Mid-market = €3Bn', 'Total ~€14Bn'] },
  { id: 'MS-D17',
    question_en: 'Estimate the coaching and professional training market in France.',
    hint_en: 'Employees × % investing in training × spend per employee',
    answer_en: 'French employees: ~25M. Legal training obligation: 0.8–1% of payroll. Average salary France: €35,000/year. Total payroll: 25M × 35K = €875Bn. Legal minimum training spend: 875Bn × 1% = €8.75Bn. Additional voluntary spend: +50% = €13Bn. Individual coaching (C2P, executive coaching): ~€1Bn. Total training + coaching France: ~€14–15Bn. Sanity check: Ministry of Labour reports ~€15Bn/year ✓',
    keyMetrics_en: ['25M employees', '1% of payroll', '~€14Bn total'] },
  { id: 'MS-D18',
    question_en: 'Estimate the number of bakeries in France.',
    hint_en: 'Population → households → bakery visit frequency → bakery capacity',
    answer_en: 'Demand: 68M inhabitants. Households: 30M. Bakery visits: 4×/week × 52 = 208/year. Total visits: 30M × 208 = 6.24Bn/year. Bakery capacity: 150 customers/day × 300 days = 45,000/year. Theoretical count: 6.24Bn / 45,000 = 138,000. Key correction: only ~25% of bakery purchases are at artisan bakeries (rest = supermarkets). Revised: ~34,000 artisan bakeries. Sanity check: French Bakers Federation = ~34,000 artisan bakeries ✓',
    keyMetrics_en: ['~34,000 artisan bakeries', 'Classic error: not segmenting artisan vs. supermarket'] },
  { id: 'MS-D19',
    question_en: 'Estimate the cybersecurity market in France.',
    hint_en: 'Companies by size × cyber budget as % of IT × average IT budget',
    answer_en: 'Average IT budget: 2% of revenue. Total French company revenue: ~€3,000Bn. Total IT budget: €3,000Bn × 2% = €60Bn. Cybersecurity share of IT budget: ~10% = €6Bn. French cybersecurity market: ~€6Bn/year. Sanity check: ANSSI and IDC estimate €5–8Bn ✓. Note: growing ~15%/year driven by NIS2 and DORA regulations.',
    keyMetrics_en: ['€60Bn total IT budget', '10% allocated to cyber', '~€6Bn market'] },
  { id: 'MS-D20',
    question_en: 'Estimate the gym/fitness subscription market in France.',
    hint_en: 'Population × % exercising → % with membership → average price',
    answer_en: 'Population 15–65: 68M × 0.65 = 44M. % with a fitness membership (gym, CrossFit, yoga): 15% = 6.6M members. Average membership: €40/month × 12 = €480/year. Total market: 6.6M × 480 = €3.17Bn/year. Sanity check: BPI France estimates ~€3.5Bn ✓. Context: the arrival of low-cost gyms (€15–20/month) has significantly increased penetration.',
    keyMetrics_en: ['6.6M members', '€40/month average', '~€3Bn market'] },
  { id: 'MS-D21',
    question_en: 'Estimate the number of consultants in France (all levels, all firms).',
    hint_en: 'Firms × average size OR demand approach (client companies × consulting budget)',
    answer_en: 'Demand approach: French consulting market: ~€15–20Bn/year (Syntec Conseil). Loaded cost per consultant: ~€150,000/year. Number of consultants = €15,000M / €150,000 = 100,000. Supply approach: Big 4: 20,000 each = 80,000. Tier 1 firms: 3,000 each in France = 9,000. Boutiques and specialists: 15–20,000. Total: ~100,000–110,000 consultants in France ✓',
    keyMetrics_en: ['~100,000 consultants', '€15Bn consulting market France', '€150K loaded cost/consultant'] },
  { id: 'MS-D22',
    question_en: 'Estimate the GDPR compliance market in France.',
    hint_en: 'Companies required to comply × average compliance cost',
    answer_en: 'SMEs (10–250 employees): 200,000 companies. GDPR compliance cost/year: €5,000–15,000. Average: €10,000. Total SMEs: €2Bn. Mid-market/large (>250 employees): ~6,500 companies. Cost: €100,000–500,000. Average: €200,000. Total large: €1.3Bn. Outsourced DPOs (GDPR firms): ~3,000 firms. Total GDPR compliance market France: ~€3.5Bn. Includes: consent management software, training, audits, DPOs.',
    keyMetrics_en: ['200,000 SMEs', '6,500 large companies', '~€3.5Bn compliance market'] },
  { id: 'MS-D23',
    question_en: 'Estimate the childcare and early childhood market in France.',
    hint_en: 'Number of children <3 → % in structured care × cost',
    answer_en: 'Births in France: ~700,000/year. Children <3: 2.1M. % in collective structures (crèche, nursery): 20% = 420,000 children. % with childminders (assistantes maternelles): 40% = 840,000. Rest: parents/family. Daycare cost: €2,000/month per child (including CAF subsidies). Daycare revenue: 420,000 × 2,000 × 12 = €10.1Bn. Childminders: 840,000 × €800/month × 12 = €8Bn. Total early childhood market France: ~€18Bn.',
    keyMetrics_en: ['2.1M children <3', '60% in formal care', '~€18Bn total market'] },
  { id: 'MS-D24',
    question_en: 'How much does building 100km of motorway in France cost?',
    hint_en: 'Cost per km × km × terrain parameters',
    answer_en: 'Cost breakdown: Road works (earthworks, asphalt, signs): €5–8M/km. Bridges and tunnels: +€2M/km average. Land acquisition: €0.5–2M/km depending on zone. Equipment (tolls, lighting, safety): €0.5–1M/km. Studies and project management: 15% of works cost. Total for average terrain: ~€10–12M/km. For 100km: €1–1.2Bn. Sanity check: A65 motorway Langon-Pau (150km, 2010) cost €1.2Bn = €8M/km ✓',
    keyMetrics_en: ['€8–12M/km', '€1–1.2Bn for 100km', 'High variability by terrain'] },
  { id: 'MS-D25',
    question_en: 'Estimate the generative AI market in France in 2026.',
    hint_en: 'Companies adopting gen AI × average budget × adoption rate',
    answer_en: 'Gen AI in France: very recent market (2023+), explosive growth. CAC 40/SBF 120: 170 companies. Gen AI budget avg: €5M/year. Total: €850M. Industrial mid-market (5,000 firms): 10% deployed gen AI. Budget avg: €100K. Total: €50M. Tech and services SMEs (50,000): 5% adopters. Budget: €15K avg. Total: €37.5M. Consumers (paid LLMs, Copilot): 3M users × €20/month × 12 = €720M. Total French gen AI 2026: ~€1.5–2Bn. Sanity check: global market ~$150Bn, France ≈ 1% = ~$1.5Bn ✓',
    keyMetrics_en: ['~€1.5Bn French market', '3M consumer users', 'Growth ~80%/year'] },
  { id: 'MS-D26',
    question_en: 'Estimate the number of engineers in France.',
    hint_en: 'Active population → % in industry and tech → % of engineers',
    answer_en: 'French active population: 30M. Tech, industry, construction, energy sectors: 35% = 10.5M. Of which engineers (Masters in engineering): 15% = 1.57M. Validation: France trains ~110,000 engineers/year (CTI). Over 30-year career = 3.3M graduates, ~60% working as engineers = 2M. Range: 1.5–2M engineers in France. Sanity check: IESF counts 1.6M active engineering graduates ✓',
    keyMetrics_en: ['1.5–2M active engineers', '110,000 graduates/year', '30M total active population'] }
].forEach(function(t) {
  var id = t.id;
  patchDrillEN(id, {
    question_en:   t.question_en,
    hint_en:       t.hint_en,
    answer_en:     t.answer_en,
    keyMetrics_en: t.keyMetrics_en
  });
});

// ══════════════════════════════════════════════════════════════
// 3. EXHIBIT ANALYSIS DRILLS — EN TRANSLATIONS (EXH-D6–EXH-D11)
// ══════════════════════════════════════════════════════════════
patchDrillEN('EXH-D6', {
  questions_en: [
    'What are the 2 key observations from this table?',
    'What is each segment\'s contribution to total group EBITDA?',
    'What would you recommend to management in 30 seconds?'
  ],
  answer_en: 'Observation 1 (anomaly): Segment C Asia is the only loss-maker (−4% EBITDA despite €150M revenue). It destroys absolute value (−€6M) and drags the group margin down.\nObservation 2 (best performance): Segment D Digital shows the best margin (22%) with only 10% of revenue. Strong lever if this segment can be scaled.\nEBITDA contribution: A = 59.6%, B = 29.8%, C = −4% (value destruction), D = 14.6%.\nRecommendation: (1) 90-day turnaround plan for Asia or exit strategy; (2) Accelerate Digital investment given its superior margin; (3) Optimize Europe to maintain its role as primary contributor.',
  _exhibit: { title_en: 'EBITDA Margins by Segment — Group XYZ 2023', headers_en: ['Segment', 'Revenue (€M)', 'EBITDA (€M)', 'EBITDA Margin (%)'] }
});

patchDrillEN('EXH-D7', {
  questions_en: [
    'What is the absolute and relative EBITDA change between 2022 and 2023?',
    'Identify the 2 most significant drivers of the decline.',
    'What is the main message to formulate as a one-liner for the executive committee?'
  ],
  answer_en: 'Absolute change: 171 − 200 = −€29M. Relative: −29/200 = −14.5%.\nDriver 1 (dominant): Raw material costs −€35M = 121% of the total decline — the single most important factor, exceeding the total decline (partially offset by volume and price gains).\nDriver 2: Negative mix effect −€12M — indicates volume growth was achieved on less profitable products.\nOne-liner: "The volume and price increases (+€23M) were wiped out by raw material inflation (−€35M) and an unfavorable mix (−€12M), resulting in a 15% EBITDA decline."\nNext step: determine whether the materials effect is structural (long-term contracts to renew) or cyclical (2022 commodity volatility).',
  _exhibit: { title_en: 'EBITDA Bridge 2022 vs 2023 (€M)' }
});

patchDrillEN('EXH-D8', {
  questions_en: [
    'Describe our client\'s competitive position in 2 sentences.',
    'Who is the most dangerous competitor and why?',
    'What strategy do you recommend for our client?'
  ],
  answer_en: 'Client position: Below the leader\'s market share (0.8× vs 3×) AND with above-average costs (+15%). Double disadvantage: neither scale nor efficiency works in their favor.\nMost dangerous competitor: Challenger 1 (PDM 1.2×, cost −5%) is immediately above our client in market share with a cost advantage. It can attack our client\'s customers with competitive pricing while maintaining margin.\nRecommended strategy: Our client is in a classic "stuck in the middle" position. Options: (A) Aggressively reduce costs to reach at least parity (−15% cost reduction required); (B) Strategic niching — focus on 1–2 segments where Challenger 1 and the Leader are less well positioned; (C) If neither, consider a merger/acquisition with a complementary player to reach critical mass.',
  _exhibit: { title_en: 'Competitive Positioning Matrix — Relative Cost vs Market Share', description_en: 'X-axis: Relative market share (0.1× to 10× vs leader). Y-axis: Relative unit cost (−30% to +30% vs industry average). Bubble size = company revenue. Our client: market share 0.8×, cost +15%. Leader: market share 3×, cost −20%. Challenger 1: market share 1.2×, cost −5%. Challenger 2: market share 0.5×, cost −10%.' }
});

patchDrillEN('EXH-D9', {
  questions_en: [
    'What is the main paradox visible in this table?',
    'Calculate the total cost per channel (volume × unit cost).',
    'What would you recommend to the strategy director?'
  ],
  answer_en: 'Paradox: The mobile app combines the best NPS (+65), best satisfaction (4.5) AND lowest cost (€0.20/transaction) — the exact opposite of the classic assumption "digital is cheaper but worse." Here, digital is both better AND cheaper.\nTotal costs: Branches: 12M × €8.50 = €102M. Call center: 25M × €4.00 = €100M. Mobile app: 180M × €0.20 = €36M. Web: 95M × €0.35 = €33.25M. ATM: 45M × €0.80 = €36M. TOTAL: €307.25M. Digital share (App + Web) = €69.25M = 22.5% of costs for 75% of transactions.\nRecommendation: Accelerate migration to digital by (1) closing the least-frequented branches, (2) reducing the call center with chatbots, (3) investing in mobile UX to maintain the exceptional NPS. Potential saving: if 20% of branch transactions migrate to the app, saving = 2.4M × €8.30 = €19.9M/year.',
  _exhibit: {
    title_en: 'NPS and Customer Satisfaction by Channel — Bank ABC',
    headers_en: ['Channel', 'Transactions/year', 'NPS', 'Satisfaction (1–5)', 'Cost per transaction (€)']
  }
});

patchDrillEN('EXH-D10', {
  questions_en: [
    'What critical trend do you identify in the retention data?',
    'Are the 2020 cohort clients profitable over 3 years? Calculate.',
    'What hypothesis do you formulate about the cause of this trend?'
  ],
  answer_en: 'Critical trend: Year-1 retention is systematically declining from cohort to cohort: 70% (2020) → 65% (2021) → 60% (2022) → 55% (2023). Each year acquires more clients BUT retains them less. This is a major red flag — an acquisition-driven growth strategy without retention destroys long-term value.\n2020 cohort profitability: Active clients: year 1 = 7,000, year 2 = 6,000, year 3 = 5,500. Revenue: year 1 = 7,000×120 = €840K. Year 2 ≈ €840K. Year 3 = 5,500×185 = €1,017K. Total 3-year revenue ≈ €2.7M for 10,000 originally acquired clients. If CAC = €50 → acquisition cost = €500K. 3-year LTV = €2.7M → highly profitable.\nHypothesis on cause: More recent client acquisition (2022, 2023) likely captures a less qualified segment (more opportunistic, less loyal). Or: product/service quality declining under rapid growth pressure (saturated support, longer wait times).',
  _exhibit: {
    title_en: 'Customer Cohort Analysis — Retention Rate by Acquisition Year',
    headers_en: ['Cohort', 'Clients acquired', 'Year 1 retention', 'Year 2 retention', 'Year 3 retention', 'ARPU year 1 (€)', 'ARPU year 3 (€)']
  }
});

patchDrillEN('EXH-D11', {
  questions_en: [
    'Identify the 3 key periods and their significance for the airline.',
    'Why is the oil/margin correlation not perfect?',
    'What impact does this have on your diagnosis if you were the consultant on this case?'
  ],
  answer_en: '3 key periods:\nPeriod 1 (2015–2019): Classic inverse correlation. Low oil → good margins (oil = 25–30% of an airline\'s costs). Strategy: fleet growth, route expansion.\nPeriod 2 (2020): Oil-independent collapse (COVID). Margin −40% despite low oil prices. The problem is zero demand, not costs.\nPeriod 3 (2021–2023): Demand rebound but oil back to $120 in 2022. Margins recovering partially (+5% in 2023 despite high oil) thanks to fare price increases.\nImperfect correlation: Other factors play a role — pricing power (can the airline pass cost increases on to fares), hedging (fuel coverage), exchange rates (oil in $, revenues in €).\nConsultant diagnostic impact: Don\'t analyze margins in absolute terms only — decompose into (1) oil/hedging effect, (2) pricing/yield management effect, (3) non-fuel operating costs. Hedging recommendation if the airline is exposed short-term on oil.',
  _exhibit: {
    title_en: 'Oil Price vs Airline Operating Margins (2015–2023)',
    description_en: 'Two overlaid series. Left axis: Oil price ($/barrel) — varies from $30 (2016) to $120 (2022). Right axis: Airline operating margin (%) — varies from +8% (2017) to −40% (2020) to +5% (2023). Inverse correlation visible 2015–2019. 2020 collapse. 2021–2023 rebound.'
  }
});

// ══════════════════════════════════════════════════════════════
// 4. NEW MATH EXERCISES (MM101–MM115) — bilingual from the start
// ══════════════════════════════════════════════════════════════
var newMathExercises = [
  { q: '65% de 840 = ?', a: '546', cat: 'Fractions & %',
    q_en: '65% of 840 = ?', a_en: '546', cat_en: 'Fractions & %',
    hint: '10% = 84. 60% = 504. 5% = 42. 504 + 42 = 546', hint_en: '10% = 84. 60% = 504. 5% = 42. 504 + 42 = 546' },
  { q: 'Hausse de 40% puis baisse de 40%. Résultat net ?', a: '−16%', cat: 'Fractions & %',
    q_en: 'Increase of 40% then decrease of 40%. Net result?', a_en: '−16%', cat_en: 'Fractions & %',
    hint: '1.40 × 0.60 = 0.84 → −16%. Symmetric increases and decreases do not cancel.', hint_en: '1.40 × 0.60 = 0.84 → −16%' },
  { q: 'CA an 0 = 150M€. CAGR 20% sur 4 ans. CA an 4 ?', a: '~310M€', cat: 'CAGR',
    q_en: 'Revenue year 0 = €150M. CAGR 20% over 4 years. Revenue year 4?', a_en: '~€310M', cat_en: 'CAGR',
    hint: '150 × (1.2)⁴ = 150 × 2.074 = €311M ≈ €310M', hint_en: '150 × (1.2)⁴ = 150 × 2.074 ≈ €310M' },
  { q: 'Marché double en 7 ans. CAGR approx ?', a: '~10% (règle 72 : 72/7)', cat: 'CAGR',
    q_en: 'Market doubles in 7 years. Approximate CAGR?', a_en: '~10% (rule of 72: 72/7)', cat_en: 'CAGR',
    hint: 'Règle des 72 : 72 / 7 ≈ 10.3%', hint_en: 'Rule of 72: 72 / 7 ≈ 10.3%' },
  { q: 'EBITDA = 200M€. D&A = 40M€. Intérêts = 20M€. Impôts 30%. Résultat net ?', a: '98M€', cat: 'P&L',
    q_en: 'EBITDA = €200M. D&A = €40M. Interest = €20M. Tax 30%. Net income?', a_en: '€98M', cat_en: 'P&L',
    hint: 'EBIT = 200−40 = 160. EBT = 160−20 = 140. Net = 140 × 0.70 = €98M', hint_en: 'EBIT = 200−40 = 160. EBT = 160−20 = 140. Net = 140 × 0.70 = €98M' },
  { q: 'CA = 1Md€. Marge brute = 45%. Opex = 300M€. EBITDA et marge EBITDA ?', a: 'EBITDA = 150M€, marge 15%', cat: 'P&L',
    q_en: 'Revenue = €1Bn. Gross margin = 45%. Opex = €300M. EBITDA and EBITDA margin?', a_en: 'EBITDA = €150M, margin 15%', cat_en: 'P&L',
    hint: 'Gross profit = 1000 × 0.45 = 450M€. EBITDA = 450 − 300 = 150M€. 150/1000 = 15%', hint_en: 'Gross profit = €1Bn × 0.45 = €450M. EBITDA = 450−300 = €150M. Margin = 15%' },
  { q: 'BEP : CV unitaire = 20€, PV = 35€, CF = 450 000€. Volume seuil ?', a: '30 000 unités', cat: 'P&L',
    q_en: 'Breakeven: unit VC = €20, selling price = €35, fixed costs = €450,000. Breakeven volume?', a_en: '30,000 units', cat_en: 'P&L',
    hint: 'Contribution = 35−20 = 15€/unit. BEP = 450,000 / 15 = 30,000 units', hint_en: 'Contribution = 35−20 = €15/unit. BEP = 450,000 / 15 = 30,000 units' },
  { q: 'EV = 500M€. EBITDA = 50M€. Multiple EV/EBITDA ?', a: '10×', cat: 'Valorisation',
    q_en: 'EV = €500M. EBITDA = €50M. EV/EBITDA multiple?', a_en: '10×', cat_en: 'Valuation',
    hint: '500 / 50 = 10×', hint_en: '500 / 50 = 10×' },
  { q: 'LBO : EV = 80M€, dette = 55M€. Equity ? Multiple entrée 8× EBITDA. EBITDA ?', a: 'Equity = 25M€, EBITDA = 10M€', cat: 'Valorisation',
    q_en: 'LBO: EV = €80M, debt = €55M. Equity? Entry multiple 8× EBITDA. EBITDA?', a_en: 'Equity = €25M, EBITDA = €10M', cat_en: 'Valuation',
    hint: 'Equity = EV − dette = 80−55 = 25M€. EBITDA = EV / multiple = 80/8 = 10M€', hint_en: 'Equity = EV − debt = 80−55 = €25M. EBITDA = EV / multiple = 80/8 = €10M' },
  { q: 'MRR = 500 000€. NRR = 115%. MRR dans 12 mois sans nouveaux clients ?', a: '575 000€', cat: 'SaaS / Tech',
    q_en: 'MRR = €500,000. NRR = 115%. MRR in 12 months with no new clients?', a_en: '€575,000', cat_en: 'SaaS / Tech',
    hint: 'MRR × NRR = 500,000 × 1.15 = €575,000', hint_en: 'MRR × NRR = 500,000 × 1.15 = €575,000' },
  { q: 'CAC = 800€. ARPU mensuel = 60€. Marge brute = 80%. Churn mensuel = 1,5%. LTV et LTV/CAC ?', a: 'LTV = 3 200€, LTV/CAC = 4×', cat: 'SaaS / Tech',
    q_en: 'CAC = €800. Monthly ARPU = €60. Gross margin = 80%. Monthly churn = 1.5%. LTV and LTV/CAC?', a_en: 'LTV = €3,200, LTV/CAC = 4×', cat_en: 'SaaS / Tech',
    hint: 'LTV = ARPU × Marge / Churn = 60 × 0.80 / 0.015 = 3,200€. LTV/CAC = 3200/800 = 4×', hint_en: 'LTV = 60 × 0.80 / 0.015 = €3,200. LTV/CAC = 3,200/800 = 4×' },
  { q: 'ARR = 10M€. Churn ARR = 1,2M€. Expansion ARR = 1,8M€. NRR ?', a: '106%', cat: 'SaaS / Tech',
    q_en: 'ARR = €10M. Churn ARR = €1.2M. Expansion ARR = €1.8M. NRR?', a_en: '106%', cat_en: 'SaaS / Tech',
    hint: 'NRR = (10 − 1.2 + 1.8) / 10 = 10.6/10 = 106%', hint_en: 'NRR = (10 − 1.2 + 1.8) / 10 = 10.6/10 = 106%' },
  { q: 'France : 68M hab. 55% adultes actifs. 30% sport régulier. Abonnement gym 30€/mois. Marché salles de sport ?', a: '~4Md€/an', cat: 'Market Sizing',
    q_en: 'France: 68M inhabitants. 55% working-age adults. 30% exercise regularly. Gym subscription €30/month. Gym market?', a_en: '~€4Bn/year', cat_en: 'Market Sizing',
    hint: '68M × 0.55 = 37.4M. × 0.30 = 11.2M gym members. × 30 × 12 = ~4Md€', hint_en: '68M × 0.55 = 37.4M. × 0.30 = 11.2M gym members. × 30 × 12 = ~€4Bn' },
  { q: 'Paris : 2,1M hab. 1 taxi / 1 000 hab. 8 courses/jour × 15€. CA annuel taxis Paris ?', a: '~92M€/an', cat: 'Market Sizing',
    q_en: 'Paris: 2.1M inhabitants. 1 taxi per 1,000. 8 trips/day × €15. Annual taxi revenue Paris?', a_en: '~€92M/year', cat_en: 'Market Sizing',
    hint: '2,100 taxis × 8 × 15 × 365 = ~92M€', hint_en: '2,100 taxis × 8 × €15 × 365 = ~€92M' },
  { q: '350M€ / 7 = ?', a: '50M€', cat: 'Calcul rapide',
    q_en: '€350M / 7 = ?', a_en: '€50M', cat_en: 'Quick calc',
    hint: '350 / 7 = 50', hint_en: '350 / 7 = 50' }
];

newMathExercises.forEach(function(ex) {
  DATA.mentalMath.exercises.push({
    q: ex.q, a: ex.a, cat: ex.cat,
    hint: ex.hint, q_en: ex.q_en, a_en: ex.a_en, cat_en: ex.cat_en, hint_en: ex.hint_en
  });
});

// ══════════════════════════════════════════════════════════════
// 5. NEW SIZING DRILLS (MS-D27–MS-D31)
// ══════════════════════════════════════════════════════════════
var sizingMod = DATA.modules.find(function(m) { return m.slug === 'market-sizing'; });
if (sizingMod) {
  [
    { id: 'MS-D27', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le marché publicitaire des podcasts en France.',
      question_en: 'Estimate the podcast advertising market in France.',
      hint: 'Auditeurs réguliers × écoutes/mois × CPM publicitaire',
      hint_en: 'Regular listeners × monthly listens × advertising CPM',
      answer: 'Auditeurs réguliers podcasts France : 10M (20% des 15-65 ans). Écoutes/mois : 6 épisodes. CPM podcast : 25€/1 000 écoutes. Écoutes mensuelles totales : 60M. Revenus pub mensuels : 60M × 25/1000 = 1,5M€. Annuel : 18M€. Sanity check : marché podcast FR estimé à 15-25M€ en 2023 → cohérent.',
      answer_en: 'Regular podcast listeners in France: 10M (20% of 15-65). Monthly listens: 6 episodes. Podcast CPM: €25/1,000 listens. Total monthly listens: 60M. Monthly ad revenue: 60M × 25/1,000 = €1.5M. Annual: €18M. Sanity check: French podcast ad market estimated at €15-25M in 2023 → consistent.',
      keyMetrics: ['10M auditeurs réguliers', '25€ CPM', '~18-20M€ marché pub'],
      keyMetrics_en: ['10M regular listeners', '€25 CPM', '~€18-20M ad market'] },
    { id: 'MS-D28', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le marché des crèches privées en France.',
      question_en: 'Estimate the private daycare market in France.',
      hint: 'Enfants 0-3 ans × part crèches privées × coût mensuel par place',
      hint_en: 'Children 0-3 years × private daycare share × monthly cost per spot',
      answer: 'Enfants 0-3 ans : ~2,4M. Places en crèche privée (35% du parc) : ~450 000. Taux occupation : 90% = 405 000 places occupées. Coût mensuel par place : 1 500€. Revenu mensuel : 607M€. Annuel : ~7,3Md€. Sanity check : petite enfance France totale = 10-12Md€ → cohérent.',
      answer_en: 'Children 0-3: ~2.4M. Private daycare spots (35% of total): ~450,000. Occupancy: 90% = 405,000 occupied. Monthly cost per spot: €1,500. Monthly revenue: €607M. Annual: ~€7.3Bn. Sanity check: total French early childhood market = €10-12Bn → consistent.',
      keyMetrics: ['2,4M enfants 0-3 ans', '450 000 places privées', '~7Md€ marché'],
      keyMetrics_en: ['2.4M children 0-3', '450,000 private spots', '~€7Bn market'] },
    { id: 'MS-D29', type: 'market_sizing', difficulty: 'medium',
      question: 'Estimez le marché du covoiturage longue distance en France (BlaBlaCar).',
      question_en: 'Estimate the long-distance ridesharing market in France (BlaBlaCar).',
      hint: 'Utilisateurs actifs × trajets/an × % trajets payants × prix × commission',
      hint_en: 'Active users × trips/year × % paid trips × price × commission rate',
      answer: 'Utilisateurs actifs BlaBlaCar France : ~6M/an. Fréquence : 3 trajets/an = 18M trajets. 70% comme passager = 12,6M trajets payants. Prix passager moyen : 25€. Commission BlaBlaCar (20%) : 5€/trajet. Revenus BlaBlaCar : 63M€. GMV : 315M€. Sanity check : BlaBlaCar valorisé ~1,5Md€ → cohérent.',
      answer_en: 'BlaBlaCar active users in France: ~6M/year. Frequency: 3 trips/year = 18M trips. 70% as passenger = 12.6M paid trips. Average passenger price: €25. BlaBlaCar commission (20%): €5/trip. BlaBlaCar revenues: €63M. GMV: €315M. Sanity check: BlaBlaCar valued ~€1.5Bn → consistent.',
      keyMetrics: ['6M utilisateurs actifs/an', '25€ prix passager moyen', '~315M€ GMV France'],
      keyMetrics_en: ['6M active users/year', '€25 average passenger price', '~€315M GMV France'] },
    { id: 'MS-D30', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché de la formation professionnelle en ligne (e-learning) en France.',
      question_en: 'Estimate the professional e-learning market in France.',
      hint: 'Salariés formés × % e-learning × coût moyen par personne',
      hint_en: 'Trained employees × % e-learning × average cost per person',
      answer: 'Salariés France : 26M. % en formation/an : 40% = 10,4M. Part e-learning : 30% = 3,1M. Coût moyen : 400€. Marché : 3,1M × 400 = 1,24Md€. Inclus CPF digital (~600M€) → total ~1,5-2Md€. Sanity check : top 3 (OpenClassrooms ~100M€, Coursera FR, Udemy FR) = 230M€ → marché total 10× = 2-3Md€ → cohérent.',
      answer_en: 'French employees: 26M. % trained/year: 40% = 10.4M. E-learning share: 30% = 3.1M. Average cost: €400. Market: 3.1M × €400 = €1.24Bn. Including digital CPF (~€600M) → total ~€1.5-2Bn. Sanity check: top 3 (OpenClassrooms ~€100M, Coursera FR, Udemy FR) = €230M → total market 10× = €2-3Bn → consistent.',
      keyMetrics: ['10,4M salariés formés/an', '30% part e-learning', '~1,5-2Md€ marché'],
      keyMetrics_en: ['10.4M trained employees/year', '30% e-learning share', '~€1.5-2Bn market'] },
    { id: 'MS-D31', type: 'market_sizing', difficulty: 'hard',
      question: 'Estimez le marché de l\'installation de bornes de recharge VE en France.',
      question_en: 'Estimate the EV charging station installation market in France.',
      hint: 'Parc VE actuel + cible 2030 → delta bornes à installer × coût moyen installation',
      hint_en: 'Current EV fleet + 2030 target → delta stations to install × average installation cost',
      answer: 'Parc VE France 2024 : ~1,5M. Cible 2030 : 5-7M. Ratio 1 borne / 10 VE → 150 000 bornes actuelles, cible 700 000. Delta : ~400 000 bornes. Coût moyen : 2 500€ (mix résidentiel 1 500€ + pro 4 000€). Marché total 2024-2030 : 1Md€ → ~167M€/an. Récurrent maintenance : 150M€/an. Total marché 2024 : ~300M€/an, croissant.',
      answer_en: 'French EV fleet 2024: ~1.5M. 2030 target: 5-7M. 1 station per 10 EVs → 150,000 current, target 700,000. Delta: ~400,000 stations. Average cost: €2,500 (mix residential €1,500 + commercial €4,000). Total market 2024-2030: €1Bn → ~€167M/year. Recurring maintenance: €150M/year. Total 2024 market: ~€300M/year, growing.',
      keyMetrics: ['1,5M VE en France 2024', '400 000 bornes à installer', '~300M€/an marché 2024'],
      keyMetrics_en: ['1.5M EVs in France 2024', '400,000 stations to install', '~€300M/year 2024 market'] }
  ].forEach(function(d) {
    // normalize for the drill engine
    if (!d.prompt) d.prompt = d.question;
    if (!d.time)   d.time   = 240;
    sizingMod.drills.push(d);
  });
}

})();

