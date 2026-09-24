// ============================================================
// DATA-EXHIBITS-SVG.JS — Exhibit Drills with Real SVG Charts
// Replaces the text-only exhibit drills with visual charts
// ============================================================
(function () {

// Helper: generate simple SVG bar chart
function barChart(data, opts) {
  var w = opts.w || 480, h = opts.h || 220;
  var marginL = 55, marginB = 50, marginT = 20, marginR = 20;
  var chartW = w - marginL - marginR;
  var chartH = h - marginT - marginB;
  var maxVal = Math.max.apply(null, data.map(function(d) { return d.v; }));
  var barW = Math.floor(chartW / data.length * 0.6);
  var gap = Math.floor(chartW / data.length * 0.4);
  var bars = data.map(function(d, i) {
    var bh = Math.round((d.v / maxVal) * chartH);
    var x = marginL + Math.floor(i * chartW / data.length) + Math.floor(gap / 2);
    var y = marginT + chartH - bh;
    var color = d.color || '#6366f1';
    return '<rect x="' + x + '" y="' + y + '" width="' + barW + '" height="' + bh + '" fill="' + color + '" rx="2"/>' +
      '<text x="' + (x + barW/2) + '" y="' + (y - 5) + '" text-anchor="middle" font-size="11" fill="#e2e8f0" font-family="monospace">' + d.v + (d.unit||'') + '</text>' +
      '<text x="' + (x + barW/2) + '" y="' + (marginT + chartH + 20) + '" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="monospace">' + d.label + '</text>';
  }).join('');
  // Y axis labels
  var yLabels = '';
  for (var i = 0; i <= 4; i++) {
    var yv = Math.round(maxVal * i / 4);
    var yp = marginT + chartH - Math.round(chartH * i / 4);
    yLabels += '<line x1="' + (marginL-5) + '" y1="' + yp + '" x2="' + (marginL + chartW) + '" y2="' + yp + '" stroke="#334155" stroke-dasharray="3,3"/>';
    yLabels += '<text x="' + (marginL-8) + '" y="' + (yp+4) + '" text-anchor="end" font-size="10" fill="#94a3b8" font-family="monospace">' + yv + '</text>';
  }
  var title = opts.title ? '<text x="' + (w/2) + '" y="13" text-anchor="middle" font-size="12" fill="#e2e8f0" font-family="monospace" font-weight="bold">' + opts.title + '</text>' : '';
  return '<svg width="' + w + '" height="' + h + '" style="background:#1e293b;border-radius:8px;display:block;max-width:100%">' + title + yLabels + bars + '</svg>';
}

function lineChart(data, opts) {
  var w = opts.w || 480, h = opts.h || 220;
  var marginL = 55, marginB = 50, marginT = 25, marginR = 20;
  var chartW = w - marginL - marginR, chartH = h - marginT - marginB;
  var maxVal = Math.max.apply(null, data.map(function(d) { return d.v; }));
  var minVal = Math.min.apply(null, data.map(function(d) { return d.v; }));
  var range = maxVal - minVal || 1;
  function px(i) { return marginL + Math.round(i * chartW / (data.length - 1)); }
  function py(v) { return marginT + chartH - Math.round((v - minVal) / range * chartH); }
  var points = data.map(function(d, i) { return px(i) + ',' + py(d.v); }).join(' ');
  var dots = data.map(function(d, i) {
    return '<circle cx="' + px(i) + '" cy="' + py(d.v) + '" r="4" fill="' + (opts.color||'#6366f1') + '"/>' +
      '<text x="' + px(i) + '" y="' + (py(d.v) - 8) + '" text-anchor="middle" font-size="10" fill="#e2e8f0" font-family="monospace">' + d.v + (opts.unit||'') + '</text>' +
      '<text x="' + px(i) + '" y="' + (marginT + chartH + 20) + '" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="monospace">' + d.label + '</text>';
  }).join('');
  var yLabels = '';
  for (var i = 0; i <= 4; i++) {
    var yv = Math.round(minVal + range * i / 4);
    var yp = marginT + chartH - Math.round(chartH * i / 4);
    yLabels += '<line x1="' + (marginL-5) + '" y1="' + yp + '" x2="' + (marginL+chartW) + '" y2="' + yp + '" stroke="#334155" stroke-dasharray="3,3"/>';
    yLabels += '<text x="' + (marginL-8) + '" y="' + (yp+4) + '" text-anchor="end" font-size="10" fill="#94a3b8" font-family="monospace">' + yv + '</text>';
  }
  var title = opts.title ? '<text x="' + (w/2) + '" y="15" text-anchor="middle" font-size="12" fill="#e2e8f0" font-family="monospace" font-weight="bold">' + opts.title + '</text>' : '';
  return '<svg width="' + w + '" height="' + h + '" style="background:#1e293b;border-radius:8px;display:block;max-width:100%">' +
    title + yLabels +
    '<polyline points="' + points + '" fill="none" stroke="' + (opts.color||'#6366f1') + '" stroke-width="2.5"/>' +
    dots + '</svg>';
}

function stackedBarChart(series, labels, opts) {
  var w = opts.w || 480, h = opts.h || 220;
  var marginL = 55, marginB = 60, marginT = 25, marginR = 20;
  var chartW = w - marginL - marginR, chartH = h - marginT - marginB;
  var totals = labels.map(function(_, i) { return series.reduce(function(s,sr) { return s + sr.data[i]; }, 0); });
  var maxVal = Math.max.apply(null, totals);
  var barW = Math.floor(chartW / labels.length * 0.6);
  var gap = Math.floor(chartW / labels.length * 0.4);
  var rects = '';
  series.forEach(function(sr) {
    var cumul = labels.map(function() { return 0; });
    // compute cumul from previous series
    series.forEach(function(s2, si2) {
      if (s2 === sr) return;
      if (series.indexOf(s2) < series.indexOf(sr)) {
        s2.data.forEach(function(v, i) { cumul[i] += v; });
      }
    });
    sr.data.forEach(function(v, i) {
      var x = marginL + Math.floor(i * chartW / labels.length) + Math.floor(gap/2);
      var yBase = marginT + chartH - Math.round((cumul[i]) / maxVal * chartH);
      var barH = Math.round(v / maxVal * chartH);
      rects += '<rect x="' + x + '" y="' + (yBase-barH) + '" width="' + barW + '" height="' + barH + '" fill="' + sr.color + '" rx="1"/>';
      if (barH > 16) {
        rects += '<text x="' + (x+barW/2) + '" y="' + (yBase-barH/2+4) + '" text-anchor="middle" font-size="9" fill="#fff" font-family="monospace">' + v + '</text>';
      }
    });
  });
  var xLabels = labels.map(function(l, i) {
    var x = marginL + Math.floor(i * chartW / labels.length) + Math.floor(gap/2) + barW/2;
    return '<text x="' + x + '" y="' + (marginT+chartH+18) + '" text-anchor="middle" font-size="10" fill="#94a3b8" font-family="monospace">' + l + '</text>';
  }).join('');
  var legend = series.map(function(sr, i) {
    return '<rect x="' + (marginL + i*100) + '" y="' + (h-15) + '" width="12" height="10" fill="' + sr.color + '"/>' +
      '<text x="' + (marginL + i*100 + 16) + '" y="' + (h-6) + '" font-size="10" fill="#94a3b8" font-family="monospace">' + sr.name + '</text>';
  }).join('');
  var title = opts.title ? '<text x="' + (w/2) + '" y="16" text-anchor="middle" font-size="12" fill="#e2e8f0" font-family="monospace" font-weight="bold">' + opts.title + '</text>' : '';
  return '<svg width="' + w + '" height="' + h + '" style="background:#1e293b;border-radius:8px;display:block;max-width:100%">' + title + rects + xLabels + legend + '</svg>';
}

function waterfallChart(items, opts) {
  var w = opts.w || 500, h = opts.h || 240;
  var marginL = 60, marginB = 55, marginT = 30, marginR = 20;
  var chartW = w - marginL - marginR, chartH = h - marginT - marginB;
  var n = items.length;
  var barW = Math.floor(chartW / n * 0.55);
  var gap = Math.floor(chartW / n * 0.45);
  // compute cumulative
  var running = 0;
  var bars = [];
  items.forEach(function(item, i) {
    var start = (item.type === 'total') ? 0 : running;
    var end = start + item.v;
    if (item.type !== 'total') running += item.v;
    bars.push({ start: start, end: end, v: item.v, label: item.label, type: item.type });
  });
  var allVals = bars.reduce(function(arr, b) { return arr.concat([b.start, b.end]); }, []);
  var minVal = Math.min(0, Math.min.apply(null, allVals));
  var maxVal = Math.max.apply(null, allVals);
  var range = maxVal - minVal || 1;
  function py(v) { return marginT + chartH - Math.round((v - minVal) / range * chartH); }
  var rects = bars.map(function(b, i) {
    var x = marginL + Math.floor(i * chartW / n) + Math.floor(gap/2);
    var top = Math.min(py(b.start), py(b.end));
    var bh = Math.abs(py(b.end) - py(b.start)) || 2;
    var color = b.type === 'total' ? '#6366f1' : (b.v >= 0 ? '#22c55e' : '#ef4444');
    var labelY = top - 6;
    var valStr = (b.v > 0 && b.type !== 'total' ? '+' : '') + b.v;
    return '<rect x="' + x + '" y="' + top + '" width="' + barW + '" height="' + bh + '" fill="' + color + '" rx="2"/>' +
      '<text x="' + (x+barW/2) + '" y="' + labelY + '" text-anchor="middle" font-size="10" fill="#e2e8f0" font-family="monospace">' + (b.type==='total' ? b.end : valStr) + '</text>' +
      '<text x="' + (x+barW/2) + '" y="' + (marginT+chartH+20) + '" text-anchor="middle" font-size="9" fill="#94a3b8" font-family="monospace">' + b.label + '</text>';
  }).join('');
  // zero line
  var zeroY = py(0);
  var zeroLine = '<line x1="' + marginL + '" y1="' + zeroY + '" x2="' + (marginL+chartW) + '" y2="' + zeroY + '" stroke="#475569" stroke-width="1"/>';
  var title = opts.title ? '<text x="' + (w/2) + '" y="16" text-anchor="middle" font-size="12" fill="#e2e8f0" font-family="monospace" font-weight="bold">' + opts.title + '</text>' : '';
  return '<svg width="' + w + '" height="' + h + '" style="background:#1e293b;border-radius:8px;display:block;max-width:100%">' + title + zeroLine + rects + '</svg>';
}

// ─── Build exhibit drill SVG data ─────────────────────────────

var exhibitDrills = [

  {
    id: 'EXH-SVG-01',
    type: 'exhibit',
    time: 90,
    prompt: 'Analysez ce graphique des marges trimestrielles en 90 secondes (méthode UOQCEI).',
    prompt_en: 'Analyze this quarterly margin chart in 90 seconds (UOQCEI method).',
    exhibitSVG: barChart(
      [
        { label:'Q1', v:22, unit:'%', color:'#6366f1' },
        { label:'Q2', v:19, unit:'%', color:'#6366f1' },
        { label:'Q3', v:16, unit:'%', color:'#ef4444' },
        { label:'Q4', v:21, unit:'%', color:'#22c55e' }
      ],
      { title:'Marge brute trimestrielle (%)', w:420, h:220 }
    ),
    answer: 'U — Marge brute (%) sur 4 trimestres. O — Tendance baissière Q1→Q3, rebond Q4. Q — Moy 19.5%, écart max 6pts (Q1=22% vs Q3=16%). C — Q3 est 3pts sous moyenne. E — Effet saisonnalité estivale (coûts ↑) ou problème ponctuel Q3. I — Volatilité masque une marge annuelle saine ; analyser drivers Q3 pour stabiliser à 21-22%.',
    answer_en: 'U — Gross margin (%) over 4 quarters. O — Declining trend Q1→Q3, Q4 rebound. Q — Avg 19.5%, max gap 6pts (Q1=22% vs Q3=16%). C — Q3 is 3pts below average. E — Summer seasonality (↑costs) or one-off Q3 issue. I — Volatility masks healthy annual margin; analyze Q3 drivers to stabilize at 21-22%.'
  },

  {
    id: 'EXH-SVG-02',
    type: 'exhibit',
    time: 90,
    prompt: 'Analysez ce graphique d\'évolution du chiffre d\'affaires (M€) sur 5 ans.',
    prompt_en: 'Analyze this revenue evolution chart (€M) over 5 years.',
    exhibitSVG: lineChart(
      [
        { label:'2020', v:120 },
        { label:'2021', v:132 },
        { label:'2022', v:158 },
        { label:'2023', v:145 },
        { label:'2024', v:175 }
      ],
      { title:'Chiffre d\'Affaires (M€) 2020–2024', unit:'M', color:'#6366f1', w:420, h:220 }
    ),
    answer: 'U — Évolution CA sur 5 ans en M€. O — Tendance haussière globale avec creux en 2023. Q — CAGR global 2020-24 = (175/120)^(1/4)−1 ≈ 9.9%. Creux 2023 = −8.2% vs 2022. C — Croissance 2022-2024 très forte (175 vs 145 = +20.7%). E — Possible facteur exogène en 2023 (crise, réglementation, perte d\'un client majeur). I — Identifier la cause du creux 2023 pour évaluer si c\'est conjoncturel ou structurel avant d\'extrapoler la croissance.',
    answer_en: 'U — Revenue evolution over 5 years in €M. O — Overall upward trend with a 2023 dip. Q — Overall CAGR 2020-24 ≈ 9.9%. 2023 dip: −8.2% vs 2022. C — 2022-2024 growth very strong (+20.7%). E — Possible 2023 exogenous factor (crisis, regulation, loss of major client). I — Identify 2023 dip cause (cyclical vs structural) before extrapolating growth.'
  },

  {
    id: 'EXH-SVG-03',
    type: 'exhibit',
    time: 120,
    prompt: 'Analysez ce graphique de parts de marché (% CA) entre 3 acteurs sur 3 ans.',
    prompt_en: 'Analyze this market share chart (% revenue) across 3 players over 3 years.',
    exhibitSVG: stackedBarChart(
      [
        { name:'Leader A', color:'#6366f1', data:[45, 42, 38] },
        { name:'Challenger B', color:'#22c55e', data:[25, 28, 32] },
        { name:'C+Others', color:'#f59e0b', data:[30, 30, 30] }
      ],
      ['2022', '2023', '2024'],
      { title:'Parts de marché (%) 2022–2024', w:440, h:240 }
    ),
    answer: 'U — Parts de marché (%) sur 3 années. O — Transfert de PDM du Leader vers Challenger. Q — Leader perd 7pts (45→38%). Challenger gagne 7pts (25→32%). C+Others stable à 30%. C — Shift structurel, pas conjoncturel (3 ans consécutifs). E — Challenger B capture la croissance (meilleur produit / prix / canal ?). I — Le Leader doit identifier les raisons de la perte de PDM. À CAGR actuel, B dépassera A en ~3 ans (extrapolation linéaire).',
    answer_en: 'U — Market share (%) over 3 years. O — Share transfer from Leader to Challenger. Q — Leader loses 7pts (45→38%). Challenger gains 7pts (25→32%). C+Others stable at 30%. C — Structural shift, not cyclical (3 consecutive years). E — Challenger B capturing growth (better product/price/channel?). I — Leader must identify reasons for share loss. At current rate, B will overtake A in ~3 years.'
  },

  {
    id: 'EXH-SVG-04',
    type: 'exhibit',
    time: 120,
    prompt: 'Analysez ce waterfall chart d\'évolution de l\'EBITDA d\'une année sur l\'autre.',
    prompt_en: 'Analyze this EBITDA bridge (waterfall) chart year-over-year.',
    exhibitSVG: waterfallChart(
      [
        { label:'EBITDA N-1', v:100, type:'total' },
        { label:'Effet prix', v:18 },
        { label:'Effet vol.', v:12 },
        { label:'Coûts mat.', v:-25 },
        { label:'Coûts sal.', v:-8 },
        { label:'EBITDA N', v:97, type:'total' }
      ],
      { title:'Bridge EBITDA N-1 → N (M€)', w:500, h:250 }
    ),
    answer: 'U — Décomposition de la variation d\'EBITDA entre deux exercices (M€). O — L\'EBITDA diminue de 3M€ malgré des gains commerciaux (+30M€). Q — Effet prix (+18M) + volume (+12M) = +30M compensés par hausse coûts (−33M). C — Les leviers de croissance fonctionnent mais les coûts (surtout matières −25M) annulent le bénéfice. E — Inflation matières premières, hausse masse salariale. I — Priorité : programmes de réduction de coûts matières (renégociation fournisseurs, substitution). Sans action, l\'EBITDA continue à se dégrader même en croissance.',
    answer_en: 'U — EBITDA bridge between two fiscal years (€M). O — EBITDA falls by €3M despite commercial gains (+€30M). Q — Price (+€18M) + volume (+€12M) = +€30M offset by cost increases (−€33M). C — Revenue levers working but costs (especially materials −€25M) cancel the benefit. E — Raw material inflation, wage increases. I — Priority: materials cost reduction programs (supplier renegotiation, substitution). Without action, EBITDA will continue degrading even with revenue growth.'
  },

  {
    id: 'EXH-SVG-05',
    type: 'exhibit',
    time: 90,
    prompt: 'Analysez ce graphique de croissance du nombre d\'utilisateurs actifs mensuels (MAU) sur 6 mois.',
    prompt_en: 'Analyze this monthly active users (MAU) growth chart over 6 months.',
    exhibitSVG: lineChart(
      [
        { label:'Jan', v:850 },
        { label:'Fév', v:920 },
        { label:'Mar', v:1050 },
        { label:'Avr', v:980 },
        { label:'Mai', v:1120 },
        { label:'Jun', v:1380 }
      ],
      { title:'MAU (en milliers) — Jan à Jun', unit:'k', color:'#22c55e', w:420, h:220 }
    ),
    answer: 'U — Croissance des MAU (en milliers) sur 6 mois. O — Tendance globale haussière avec légère baisse en avril (−6.7%). Q — Croissance Jan→Jun = +62.4%. CAGR mensuel ≈ +8.3%/mois. C — Accélération forte Mai→Jun (+23.2%). E — Creux avril = possible effet saisonnier ou problème produit. Accélération juin = campagne marketing, viral loop, ou nouvelle fonctionnalité. I — Identifier le driver de l\'accélération juin pour le reproduire. Si organique : exceptionnel. Si campagne : mesurer ROI.',
    answer_en: 'U — MAU growth (thousands) over 6 months. O — Overall upward trend with slight April dip (−6.7%). Q — Jan→Jun growth = +62.4%. Monthly CAGR ≈ +8.3%/month. C — Strong acceleration May→Jun (+23.2%). E — April dip = possible seasonal or product issue. June acceleration = marketing campaign, viral loop, or new feature. I — Identify June acceleration driver to replicate it. If organic: exceptional. If campaign: measure ROI.'
  },

  {
    id: 'EXH-SVG-06',
    type: 'exhibit',
    time: 120,
    prompt: 'Analysez ce graphique comparant les coûts par unité de 4 lignes de production.',
    prompt_en: 'Analyze this chart comparing cost per unit across 4 production lines.',
    exhibitSVG: barChart(
      [
        { label:'Ligne 1', v:42, unit:'€', color:'#ef4444' },
        { label:'Ligne 2', v:35, unit:'€', color:'#22c55e' },
        { label:'Ligne 3', v:38, unit:'€', color:'#f59e0b' },
        { label:'Ligne 4', v:51, unit:'€', color:'#ef4444' }
      ],
      { title:'Coût unitaire par ligne de production (€)', w:420, h:220 }
    ),
    answer: 'U — Coût unitaire de production par ligne (€/unité). O — Ligne 4 (51€) et Ligne 1 (42€) sont au-dessus de la moyenne. Ligne 2 (35€) = benchmark interne. Q — Écart max = 46% (51 vs 35). Sur 100k unités/ligne, Ligne 4 coûte 1.6M€ de plus que Ligne 2. C — Benchmark externe (secteur) : 30-40€/unité → Lignes 1 et 4 au-dessus du benchmark sectoriel. E — Ligne 4 probable goulot d\'étranglement ou équipement vieillissant. I — Priorité : audit Ligne 4 (maintenance ? sous-utilisation ?). Si problème équipement : calcul ROI remplacement.',
    answer_en: 'U — Production unit cost per line (€/unit). O — Line 4 (€51) and Line 1 (€42) above average. Line 2 (€35) = internal benchmark. Q — Max gap = 46% (€51 vs €35). Over 100k units/line, Line 4 costs €1.6M more than Line 2. C — External benchmark (sector): €30-40/unit → Lines 1 and 4 above sector benchmark. E — Line 4 likely bottleneck or aging equipment. I — Priority: Line 4 audit (maintenance? underutilization?). If equipment issue: compute replacement ROI.'
  },

  {
    id: 'EXH-SVG-07',
    type: 'exhibit',
    time: 90,
    prompt: 'Analysez ce graphique d\'évolution du taux de churn mensuel sur 6 mois.',
    prompt_en: 'Analyze this monthly churn rate evolution chart over 6 months.',
    exhibitSVG: lineChart(
      [
        { label:'Jan', v:2.1 },
        { label:'Fév', v:2.3 },
        { label:'Mar', v:3.8 },
        { label:'Avr', v:4.2 },
        { label:'Mai', v:3.6 },
        { label:'Jun', v:3.1 }
      ],
      { title:'Taux de churn mensuel (%)', unit:'%', color:'#ef4444', w:420, h:220 }
    ),
    answer: 'U — Taux de churn mensuel (%) sur 6 mois. O — Pic en avril (4.2%), amélioration depuis mai. Q — Hausse Jan→Avr = +100bp. Retour partiel mais churn encore 48% au-dessus du niveau Jan. C — Benchmark SaaS B2B : churn mensuel sain < 1.5%. Ce client est à 3.1% = 2× le benchmark → très préoccupant. E — Dégradation produit, hausse de prix en mars ? arrivée d\'un concurrent ? I — Urgence : segmenter le churn (type de clients, secteur, taille). Si concentré sur les nouveaux clients : problème d\'onboarding. Si sur les anciens : problème produit ou concurrence.',
    answer_en: 'U — Monthly churn rate (%) over 6 months. O — Peak in April (4.2%), improvement since May. Q — Jan→Apr increase = +100bp. Partial recovery but churn still 48% above Jan level. C — SaaS B2B benchmark: healthy monthly churn < 1.5%. This client at 3.1% = 2× benchmark → very concerning. E — Product degradation, price increase in March? New competitor? I — Urgent: segment churn (client type, sector, size). If concentrated in new clients: onboarding issue. If legacy clients: product or competition issue.'
  },

  {
    id: 'EXH-SVG-08',
    type: 'exhibit',
    time: 120,
    prompt: 'Analysez ce waterfall chart de décomposition de la variation du CA entre N-1 et N.',
    prompt_en: 'Analyze this revenue bridge chart decomposing the change from N-1 to N.',
    exhibitSVG: waterfallChart(
      [
        { label:'CA N-1', v:200, type:'total' },
        { label:'Prix', v:15 },
        { label:'Volume', v:22 },
        { label:'Mix', v:-8 },
        { label:'Churn', v:-19 },
        { label:'CA N', v:210, type:'total' }
      ],
      { title:'Bridge CA N-1 → N (M€)', w:500, h:250 }
    ),
    answer: 'U — Décomposition de la variation du CA (M€) : 4 composantes. O — CA progresse de 10M€ (+5%) mais avec une forte compensation négative churn+mix. Q — Gains bruts : +15M (prix) +22M (volume) = +37M. Pertes : −8M (mix) −19M (churn) = −27M. Net = +10M. C — Sans le churn, la croissance serait +28.5% vs +5%. E — Le churn (−19M) représente 9.5% du CA N-1 → taux très élevé. Mix négatif = clients haut de gamme partent et remplacés par moins profitables. I — Double urgence : réduire le churn et améliorer la qualité du mix (retenir les clients premium).',
    answer_en: 'U — Revenue decomposition (€M): 4 components. O — Revenue grows €10M (+5%) but with strong negative churn+mix offset. Q — Gross gains: +€15M (price) +€22M (volume) = +€37M. Losses: −€8M (mix) −€19M (churn) = −€27M. Net = +€10M. C — Without churn, growth would be +28.5% vs +5%. E — Churn (−€19M) = 9.5% of N-1 revenue → very high. Negative mix = premium clients leaving, replaced by lower-value ones. I — Dual priority: reduce churn AND improve mix quality (retain premium clients).'
  }

];

// Update the exhibits module drills with SVG versions
var exhibitsModule = DATA.modules && DATA.modules.find(function(m) { return m.slug === 'exhibits'; });
if (exhibitsModule) {
  exhibitDrills.forEach(function(d) { exhibitsModule.drills.push(d); });
}

// Store reference
DATA.exhibitDrills = exhibitDrills;

// Expose SVG generators for potential reuse
DATA._svgHelpers = { barChart: barChart, lineChart: lineChart, stackedBarChart: stackedBarChart, waterfallChart: waterfallChart };

})();

