(function() {
function patchFiche(courseId, ficheId, titleEN, contentEN) {
  var cat = DATA.courses.find(function(c) { return c.id === courseId; });
  if (!cat) return;
  for (var i = 0; i < cat.submodules.length; i++) {
    var f = cat.submodules[i].fiches.find(function(x) { return x.id === ficheId; });
    if (f) { if (titleEN) f.title_en = titleEN; if (contentEN) f.content_en = contentEN; return; }
  }
}

// CAT-03 category & submodule titles
DATA.courses.forEach(function(c) {
  if (c.id === 'CAT-03') {
    c.title_en = 'Profitability';
    c.submodules.forEach(function(sm) {
      if (sm.id === 'CAT-03-01') sm.title_en = 'Profit Analysis';
    });
  }
});

// CAT-04 category & submodule titles
DATA.courses.forEach(function(c) {
  if (c.id === 'CAT-04') {
    c.title_en = 'Market Sizing & Growth';
    c.submodules.forEach(function(sm) {
      if (sm.id === 'CAT-04-01') sm.title_en = 'Market Sizing';
      if (sm.id === 'CAT-04-02') sm.title_en = 'Growth & Market Entry';
    });
  }
});

// ── CAT-03 ──────────────────────────────────────────────────────────────────

patchFiche('CAT-03', 'F-020',
  'The Complete P&L Framework — Revenue and Cost Breakdown',
  `
<p><strong>Profitability</strong> is the most frequent case type in top-tier firms interviews — roughly 40% of cases revolve around a margin or profitability question. Mastering its decomposition is therefore non-negotiable. The P&L (Profit & Loss) framework provides a rigorous, exhaustive structure to diagnose why a company is less profitable than expected.</p>

<h3>The core identity</h3>
<div class="formula-box">Profit = Revenue − Costs
Revenue = Average Price × Volume
Costs = Fixed Costs + Variable Costs
Variable Costs = Unit Variable Cost × Volume produced
Profit = (Price − Unit Variable Cost) × Volume − Fixed Costs
       = Contribution Margin × Volume − Fixed Costs</div>
<p>This last formulation is particularly powerful: it shows that to generate profit, contribution margin multiplied by volume must exceed fixed costs. This is the principle of the <strong>breakeven point</strong>.</p>

<h3>Full P&L structure — consulting version</h3>
<table class="data-table">
  <tr><th>Line</th><th>Definition</th><th>Formula</th></tr>
  <tr><td>Net revenue (top line)</td><td>Total revenues before deductions</td><td>Price × Quantities sold</td></tr>
  <tr><td>Cost of goods sold (COGS)</td><td>Costs directly tied to production</td><td>Materials + Direct labor</td></tr>
  <tr><td><strong>Gross margin</strong></td><td>Revenue − COGS</td><td>As % = Gross margin / Revenue</td></tr>
  <tr><td>Sales & marketing</td><td>Marketing spend, sales force</td><td>Variable or fixed depending on model</td></tr>
  <tr><td>G&A (General & Administrative)</td><td>Admin, rent, support HR</td><td>Mostly fixed</td></tr>
  <tr><td>R&D</td><td>Innovation investment</td><td>Variable by industry</td></tr>
  <tr><td><strong>EBITDA</strong></td><td>Operating profit before depreciation</td><td>Revenue − COGS − Operating expenses</td></tr>
  <tr><td>D&A</td><td>Depreciation & amortization</td><td>Assets / Useful life</td></tr>
  <tr><td><strong>EBIT (Operating income)</strong></td><td>Profit before interest and taxes</td><td>EBITDA − D&A</td></tr>
  <tr><td>Interest expense</td><td>Debt interest charges</td><td>Debt × Interest rate</td></tr>
  <tr><td><strong>Net income</strong></td><td>Profit after tax</td><td>EBT × (1 − Tax rate)</td></tr>
</table>

<h3>4-step diagnostic approach</h3>
<p><strong>Step 1 — Isolate revenues vs costs.</strong> Always start by determining where the deterioration originates: have revenues fallen, have costs risen, or both? Calculate gross margin evolution first — it is the fastest indicator to isolate.</p>
<p><strong>Step 2 — Decompose the problematic line.</strong> If it is revenues: analyze price, volume, and mix separately. If it is costs: distinguish fixed from variable, then identify the fastest-growing line item.</p>
<p><strong>Step 3 — Identify the root cause.</strong> The decomposition tells you the accounting origin of the problem — not necessarily the business cause. A price decline might stem from competitive pressure, a poorly calibrated promotional strategy, or a geographic mix shift. Always connect the number to a business reality.</p>
<p><strong>Step 4 — Quantify the impact and prioritize.</strong> Calculate each factor's contribution to the total gap. For example, if profit fell €10M, calculate what proportion is attributable to price decline vs labor cost increases. This lets you prioritize recommendations by impact.</p>

<h3>Full example — profitability diagnostic</h3>
<div class="example-box"><strong>Data:</strong><br>
Year N-1: Revenue = €100M, COGS = €60M, Fixed costs = €25M → Profit = €15M<br>
Year N: Revenue = €95M, COGS = €63M, Fixed costs = €27M → Profit = €5M<br>
Total gap: −€10M<br><br>
<strong>Decomposition:</strong><br>
Revenue impact: 95 − 100 = −€5M<br>
COGS impact: −(63 − 60) = −€3M<br>
Fixed costs impact: −(27 − 25) = −€2M<br>
Total: −5 −3 −2 = −€10M ✓<br><br>
<strong>Conclusion:</strong> The profit decline is explained 50% by a revenue shortfall, 30% by higher variable costs, and 20% by rising fixed charges. The priority action is restoring revenues (highest impact), followed by rationalizing variable costs.</div>

<div class="warning-box"><strong>The inverted sequence mistake:</strong> Many candidates jump straight to costs the moment they hear "profitability problem," without first checking revenues. Yet a revenue problem and a cost problem call for completely different recommendations. Always decompose both before focusing on one.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> A first-year top-tier firms analyst systematically learns to "waterfall" the profit gap — decomposing the €10M shortfall into independent contributions from each line item. This cascade presentation demonstrates both analytical rigor and the ability to prioritize action. If you do this spontaneously in an interview, you signal genuine familiarity with consulting work.</div>`
);

patchFiche('CAT-03', 'F-021',
  'Revenue Analysis — Price, Volume, Mix',
  `
<p>A company's revenues can fall in three fundamentally different ways: a decline in <strong>average price</strong>, a decline in <strong>volume sold</strong>, or a negative <strong>mix effect</strong> (the weight of lower-margin products increases). These three phenomena have completely different causes and remedies — distinguishing between them is essential for formulating the right recommendations.</p>

<h3>Revenue decomposition</h3>
<div class="formula-box">Revenue = Σ (Price_i × Volume_i) for each product i
Revenue = Average Price × Total Volume  [useful simplification in interviews]
Average Price = Σ (w_i × Price_i) where w_i = product i's share of sales
Total Volume = Number of customers × Transactions per customer × Average transaction size</div>

<h3>Analyzing the PRICE component</h3>
<p>Average price decline can stem from several sources. <strong>Competitive pressure</strong>: new entrants offer lower prices and the company must match them. <strong>Erosion of perceived value</strong>: customers no longer accept paying the premium. <strong>Excessive discounting</strong>: the company has conditioned customers to expect rebates. <strong>Geographic mix</strong>: growth comes from markets where prices are structurally lower.</p>
<p>In a diagnostic, start by verifying whether list prices have changed. If not, investigate whether discounts and commercial conditions have evolved — since net revenues (post-discount) can fall even if list prices are stable.</p>

<h3>Analyzing the VOLUME component</h3>
<p>Volume decline can come from customer losses (churn), reduced purchase frequency, or a decrease in average transaction size. These three sub-components have very different root causes. Rising churn often signals a customer satisfaction problem or a more attractive competitive alternative. Declining frequency may indicate seasonality, changing buying habits, or cannibalization by a new channel. Shrinking average transaction size can come from a shift toward cheaper products or reduced add-on purchases.</p>

<h3>The mix effect — the hidden source of margin erosion</h3>
<p>The mix effect is the component most often overlooked in case interviews. It represents the margin deterioration (or improvement) due to a change in the composition of sales, independently of any price or volume changes. A negative mix effect can disguise the company's true health: revenues can grow in nominal terms while margins erode if the growth comes from the least profitable products.</p>
<div class="formula-box">Mix effect = Σ (Δw_i × Margin_i)
where Δw_i = change in product i's sales share
and Margin_i = contribution margin of product i</div>

<h3>Full quantified example — mix effect</h3>
<div class="example-box"><strong>Company with 2 product lines:</strong><br>
<table class="data-table">
  <tr><th>Line</th><th>Margin</th><th>Share Y-1</th><th>Share Y</th></tr>
  <tr><td>Premium</td><td>45%</td><td>70%</td><td>45%</td></tr>
  <tr><td>Entry-level</td><td>15%</td><td>30%</td><td>55%</td></tr>
</table><br>
Overall margin Y-1 = 0.45 × 0.70 + 0.15 × 0.30 = 31.5% + 4.5% = <strong>36%</strong><br>
Overall margin Y   = 0.45 × 0.45 + 0.15 × 0.55 = 20.25% + 8.25% = <strong>28.5%</strong><br>
Mix effect = −7.5 margin points<br><br>
<strong>Interpretation:</strong> Margin lost 7.5 points even though the individual margins of each product line did not move. The cause is a sales shift toward entry-level (likely due to economic pressure or aggressive promotional activity at the low end). The recommendation is not to cut costs but to reposition the offer or incentivize customers to migrate toward the premium line.</div>

<h3>How to present revenue analysis in a case</h3>
<p>When analyzing revenues, always follow this sequence: first isolate total revenue evolution, then request data to distinguish price, volume, and mix. Finally, connect each component to a concrete business reality before formulating a recommendation. A revenue analysis that stops at the number ("revenue fell 5% due to a price decline") without explaining why the price fell is incomplete.</p>

<div class="warning-box"><strong>Confusing cause and symptom:</strong> "Price fell" is a symptom. "Price fell because three new low-cost entrants captured 15% of the market in 18 months, forcing the company to match their pricing" is the cause. The recommendation depends entirely on this distinction: if structural (competition), you must differentiate; if promotional (poor discount targeting), you must discipline pricing policy.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Candidates who pass profitability cases systematically decompose revenues into at least 3 components (price, volume, mix) and connect each variation to a business hypothesis before requesting data. "I would like to check whether the revenue decline comes from price or volume. My hypothesis is that it is primarily a price effect, as the prompt mentions a price war in the sector."</div>`
);

patchFiche('CAT-03', 'F-022',
  'Cost Analysis — Fixed, Variable, and Drivers',
  `
<p>Cost analysis in consulting follows a progressive decomposition logic: first distinguish fixed from variable costs, then identify the <strong>cost drivers</strong> (factors that explain the evolution of each line item), and finally benchmark each item against industry standards to identify gaps. A cost item whose evolution is unexplained is not an anomaly — it is a potential savings opportunity.</p>

<h3>Fixed costs vs variable costs</h3>
<table class="data-table">
  <tr><th>Type</th><th>Definition</th><th>Examples</th><th>Action lever</th></tr>
  <tr><td>Fixed costs</td><td>Do not vary with volume</td><td>Rent, depreciation, admin salaries</td><td>Restructuring, asset disposal, renegotiation</td></tr>
  <tr><td>Variable costs</td><td>Vary proportionally with volume</td><td>Raw materials, packaging, commissions</td><td>Procurement renegotiation, substitution, automation</td></tr>
  <tr><td>Semi-variable costs</td><td>Mixed behavior</td><td>Labor (fixed minimum + overtime), energy</td><td>Schedule optimization, progressive tariffs</td></tr>
</table>

<h3>Cost drivers — sources of variation</h3>
<p>A <strong>cost driver</strong> is the factor that explains why a cost line item changed. Identifying the right cost driver is essential for taking effective action. For example, if labor costs increased, the driver might be a higher hourly wage (external driver — wage inflation), more hours worked (internal driver — inefficiency), or a shift in the mix between permanent and temporary staff (structural driver).</p>
<div class="formula-box">Labor cost = Headcount × Average salary × Hours worked
→ Driver 1: Headcount (hiring, turnover)
→ Driver 2: Average salary (negotiations, seniority mix)
→ Driver 3: Hours worked (productivity, absenteeism, part-time share)

Raw material cost = Quantity × Unit price
→ Driver 1: Market price (inflation, commodity prices)
→ Driver 2: Yield (waste rate, process efficiency)
→ Driver 3: Material mix (possible substitutions)</div>

<h3>Cost benchmarking</h3>
<p>Benchmarking compares each cost item, expressed as a % of revenue, against industry standards. A line item above the benchmark signals either an internal inefficiency or an undermonetized competitive advantage. A line item below suggests a potential advantage worth understanding. Here are the typical benchmarks you should know.</p>
<table class="data-table">
  <tr><th>Sector</th><th>COGS / Revenue</th><th>Personnel / Revenue</th><th>Typical EBITDA</th></tr>
  <tr><td>Food retail</td><td>70–75%</td><td>10–12%</td><td>5–8%</td></tr>
  <tr><td>SaaS / Software</td><td>15–25%</td><td>35–45%</td><td>15–30%</td></tr>
  <tr><td>Tier 1 Consulting</td><td>—</td><td>60–65%</td><td>25–35%</td></tr>
  <tr><td>Innovative pharma</td><td>25–35%</td><td>20–25%</td><td>30–40%</td></tr>
  <tr><td>Automotive industry</td><td>75–80%</td><td>8–12%</td><td>5–10%</td></tr>
  <tr><td>Hotel chains</td><td>40–50%</td><td>30–35%</td><td>15–25%</td></tr>
</table>

<h3>Diagnostic example — restaurant chain costs</h3>
<div class="example-box"><strong>Data:</strong> Restaurant with €10M revenue, costs = €9.5M, margin = 5%<br>
Breakdown: Food €3.5M (35%) · Personnel €4M (40%) · Rent €1.5M (15%) · Energy €0.5M (5%)<br><br>
<strong>Industry benchmarks:</strong> Food 28–32% · Personnel 33–36% · Rent 8–12%<br><br>
<strong>Diagnostic:</strong><br>
→ Food: 35% vs benchmark 30% = €0.5M overrun → investigate waste and supplier negotiation<br>
→ Personnel: 40% vs benchmark 35% = €0.5M overrun → analyze productivity, permanent/temp mix<br>
→ Rent: 15% vs benchmark 10% = €0.5M overrun → renegotiation or relocation<br><br>
Total savings potential identified: ~€1.5M, equivalent to +15 margin points if fully realized</div>

<div class="warning-box"><strong>Assuming a high cost is automatically a problem:</strong> A cost line above the benchmark may be a deliberate strategic choice. A premium retailer spending 8% on marketing vs the sector average of 3% is not necessarily inefficient — it may be investing in brand equity that translates into price premium. Always contextualize before labeling a cost item a "problem."</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> A top-tier firms analyst systematically calculates revenue ratios for each cost line before comparing them to benchmarks. In an interview, spontaneously calculating these ratios and comparing them to known sector benchmarks — even approximate ones — shows genuine familiarity with consultant work. Memorize at least 4–5 typical sector benchmarks.</div>`
);

patchFiche('CAT-03', 'F-023',
  'The Mix Effect — Detailed Calculation with 2 Examples',
  `
<p>The <strong>mix effect</strong> is one of the most misunderstood and most frequently overlooked sources of margin variation in case interviews. It describes the situation where the overall margin changes not because individual product margins have moved, nor because total volumes have shifted, but because the <strong>composition</strong> of sales has changed. Understanding this mechanism is critical because it leads to radically different recommendations from those arising from price or cost analysis.</p>

<h3>Formal definition</h3>
<div class="formula-box">Overall margin = Σ (w_i × m_i)
where w_i = product i's share of total sales
and m_i = product i's contribution margin

Mix effect = Margin(Y) − Margin(Y-1)
           = Σ (w_i(Y) × m_i) − Σ (w_i(Y-1) × m_i)
           = Σ ((w_i(Y) − w_i(Y-1)) × m_i)

→ The mix effect is zero if each product's share does not change.</div>

<h3>Example 1 — Product mix in the cosmetics industry</h3>
<div class="example-box"><strong>Cosmetics company with 3 lines:</strong>
<table class="data-table">
  <tr><th>Line</th><th>Contribution margin</th><th>Share Y-1</th><th>Share Y</th><th>Change</th></tr>
  <tr><td>Luxury</td><td>65%</td><td>50%</td><td>30%</td><td>−20pts</td></tr>
  <tr><td>Mid-range</td><td>40%</td><td>35%</td><td>40%</td><td>+5pts</td></tr>
  <tr><td>Mass market</td><td>20%</td><td>15%</td><td>30%</td><td>+15pts</td></tr>
</table><br>
Margin Y-1 = 0.65×0.50 + 0.40×0.35 + 0.20×0.15 = 32.5% + 14% + 3% = <strong>49.5%</strong><br>
Margin Y   = 0.65×0.30 + 0.40×0.40 + 0.20×0.30 = 19.5% + 16% + 6% = <strong>41.5%</strong><br>
<strong>Mix effect = −8 points</strong><br><br>
<strong>Interpretation:</strong> Margin lost 8 points while each individual product line's margin was unchanged. The cause is a sales shift toward mass market (likely driven by difficult economic conditions or aggressive low-end promotional activity). The recommendation: protect or reinvigorate the Luxury line through a premium differentiation strategy.</div>

<h3>Example 2 — Geographic mix in distribution</h3>
<div class="example-box"><strong>Distributor operating in France and Eastern Europe:</strong>
<table class="data-table">
  <tr><th>Region</th><th>EBITDA margin</th><th>Revenue share Y-1</th><th>Revenue share Y</th></tr>
  <tr><td>France</td><td>12%</td><td>80%</td><td>60%</td></tr>
  <tr><td>Eastern Europe</td><td>4%</td><td>20%</td><td>40%</td></tr>
</table><br>
Margin Y-1 = 0.12×0.80 + 0.04×0.20 = 9.6% + 0.8% = <strong>10.4%</strong><br>
Margin Y   = 0.12×0.60 + 0.04×0.40 = 7.2% + 1.6% = <strong>8.8%</strong><br>
<strong>Geographic mix effect = −1.6 points</strong><br><br>
<strong>Interpretation:</strong> Rapid growth in Eastern Europe dilutes the overall margin, even though both markets are individually profitable. The company improved absolute revenues by growing in a low-margin region at the expense of overall profitability. The recommendation could be to improve Eastern European margins (scale effects, local pricing, cost optimization) before further expanding there.</div>

<h3>When to suspect a mix effect</h3>
<p>Three signals should alert you to a possible mix effect. First, when revenue grows but overall margin deteriorates with no change in unit prices or costs. Second, when a company is developing a new lower-margin segment alongside its core business. Third, when a company is achieving geographic growth in markets where pricing power is structurally weaker.</p>

<div class="warning-box"><strong>Confusing volume effect and mix effect:</strong> The volume effect measures the impact of a total volume increase or decrease on profit. The mix effect measures the impact of a composition change at constant total volume. These two effects can offset each other: rising volume with an unfavorable mix can produce near-stable profit. In an interview, always calculate both separately before drawing a conclusion.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In profitability cases, the mix effect is often "the hidden answer." When data shows that neither price, nor total volume, nor costs alone explain the deterioration, think immediately of the mix effect. The candidate who spontaneously identifies this angle — and can calculate it — immediately distinguishes themselves from the majority who think only in terms of price and costs.</div>`
);

patchFiche('CAT-03', 'F-024',
  'Sector Margin Benchmarks',
  `
<p>Knowing typical margin levels by sector enables three things in a case interview: instantly contextualizing whether a given margin is strong or weak, identifying sectors where profit levers are structurally different, and avoiding recommendations that are incompatible with the economic reality of an industry. These benchmarks must be memorized — you will need them in the majority of cases.</p>

<h3>Reference table — sector margins</h3>
<table class="data-table">
  <tr><th>Sector</th><th>Gross margin</th><th>EBITDA</th><th>Net margin</th><th>Key characteristic</th></tr>
  <tr><td>SaaS / Software</td><td>70–85%</td><td>15–35%</td><td>10–25%</td><td>Scale model; high R&D; COGS = hosting</td></tr>
  <tr><td>Tier 1 Consulting</td><td>—</td><td>25–35%</td><td>15–25%</td><td>Asset-light; lever = consultant utilization</td></tr>
  <tr><td>Innovative pharma</td><td>65–80%</td><td>30–40%</td><td>20–30%</td><td>Patents; R&D = 15–20% of revenue</td></tr>
  <tr><td>Food retail</td><td>25–35%</td><td>5–8%</td><td>2–4%</td><td>Huge volume; thin margins; critical inventory</td></tr>
  <tr><td>Automotive industry</td><td>20–25%</td><td>5–10%</td><td>3–7%</td><td>Capex-intensive; long cycles; Tier 1 dependency</td></tr>
  <tr><td>Telecom</td><td>55–65%</td><td>30–40%</td><td>8–15%</td><td>High gross margins but massive depreciation</td></tr>
  <tr><td>Retail banking</td><td>N/A</td><td>N/A</td><td>ROE 8–15%</td><td>Different KPIs: NIM, ROE, cost-to-income ratio</td></tr>
  <tr><td>Hotel chains</td><td>70–80%*</td><td>15–25%</td><td>5–12%</td><td>*Excl. personnel; RevPAR = key KPI</td></tr>
  <tr><td>Pure e-commerce</td><td>35–50%</td><td>3–8%</td><td>1–4%</td><td>Logistics and marketing consume gross margin</td></tr>
  <tr><td>Luxury (LVMH-type)</td><td>65–70%</td><td>25–35%</td><td>15–20%</td><td>Strong pricing power; high distribution costs</td></tr>
</table>

<h3>What these numbers imply in a case</h3>
<p>When a case gives you a margin figure, evaluate it immediately against the sector benchmark. An EBITDA margin of 10% for a SaaS company is catastrophic (benchmark 20–35%) — the key question is "Why is it losing so much value?" The same 10% margin for a food distribution chain is slightly above the norm (5–8%) — the key question is "How does it maintain this advantage?" The diagnostic changes radically depending on the sector.</p>

<h3>Sector-specific financial metrics</h3>
<p>Some sectors use profitability indicators specific to their business. In hospitality, <strong>RevPAR</strong> (Revenue per Available Room) is more relevant than net margin. In banking, <strong>NIM</strong> (Net Interest Margin, typically 1.5–2.5%) and <strong>ROE</strong> are the central indicators. In insurance, the <strong>combined ratio</strong> (claims + operating costs) / premiums must be below 100% for the technical activity to be profitable. In retail, <strong>GMROI</strong> (Gross Margin Return on Inventory) measures inventory efficiency.</p>

<div class="warning-box"><strong>Applying cross-sector benchmarks:</strong> Comparing a food distributor's margin (5%) to a SaaS company's (25%) is a mistake. These sectors have radically different asset structures, investment cycles, and business models. Always use benchmarks from the same sector, ideally the same sub-sector.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Knowing 5 to 6 sector benchmarks off the top of your head allows you to formulate hypotheses faster. "For a food distribution company, a gross margin of 35% looks slightly above the 28–32% benchmark — which could indicate either a premium positioning or a different accounting definition of COGS. Could you confirm how COGS are defined here?" This targeted question demonstrates genuine sector knowledge.</div>`
);

// ── CAT-04 ──────────────────────────────────────────────────────────────────

patchFiche('CAT-04', 'F-030',
  'Top-Down Method — Guided France Example',
  `
<p>Market sizing — estimating the size of a market — is one of the most frequently tested skills in consulting and private equity interviews. It simultaneously evaluates your structured decomposition ability, your intuition for economic orders of magnitude, and your composure with rapid calculations under pressure. The <strong>top-down</strong> method starts from the total population or overall market and progressively refines toward the target.</p>

<h3>The 6-step top-down structure</h3>
<p><strong>Step 1 — Clarify the scope.</strong> Before any calculation, define precisely what you are estimating: which exact product or service? Which territory? Which period? The size of the coffee market in France can mean the retail grocery coffee market, or the total hot beverages market including food service — the difference is a factor of 3.</p>

<p><strong>Step 2 — Define the target population.</strong> Start from the total population (68 million in France) and apply successive filters to isolate the relevant population. These filters must be justified and MECE: you exclude no one twice and no one falls into two categories.</p>

<p><strong>Step 3 — Estimate the penetration rate.</strong> Among the target population, what fraction uses the product being studied? Distinguish current users from non-users. For everyday consumer goods, penetration rates are often very high (80–95%). For premium or niche products, they are much lower (5–20%).</p>

<p><strong>Step 4 — Calculate frequency and average spend.</strong> For each customer in the target population, estimate how many times per year they purchase the product and the average spend per purchase. Multiply these two parameters to get annual spend per customer.</p>

<p><strong>Step 5 — Calculate the total market.</strong> Market = Target population × Penetration rate × Annual frequency × Average spend per purchase</p>

<p><strong>Step 6 — Sanity check.</strong> Compare your result against known data points or alternative reasoning. If you know a major market player and its estimated market share, that player's revenue divided by its market share should be consistent with your estimate.</p>

<h3>Full guided example — take-away coffee market in France</h3>
<div class="example-box"><strong>Starting population:</strong> 68M inhabitants<br>
<strong>Filter 1 — Adults:</strong> 68M × 78% = 53M adults<br>
<strong>Filter 2 — Urban active population (core target):</strong> 53M × 60% = 32M people<br>
<strong>Take-away coffee consumption rate:</strong> 32M × 45% = 14.4M regular consumers<br>
<strong>Annual frequency:</strong> 3 times/week × 48 active weeks = 144 purchases/year<br>
<strong>Average price per coffee:</strong> €3.80<br><br>
<strong>Market = 14.4M × 144 × €3.80 = €7.87B</strong><br><br>
<strong>Sanity check:</strong><br>
→ Starbucks France generates ~€250M in revenue. Its estimated market share: 3–5% of the premium segment.<br>
→ If Starbucks = 4% of a premium segment representing ~40% of the total: €250M / 0.04 / 0.4 = €15.6B (too high)<br>
→ Downward revision: our 3x/week frequency may be overstated. Adjusting to 2x/week: €7.87B × 2/3 = €5.2B<br>
→ Final rounded result: <strong>~€5B</strong>, consistent with available sector data</div>

<h3>Key France figures to memorize</h3>
<table class="data-table">
  <tr><th>Indicator</th><th>Value</th><th>Use</th></tr>
  <tr><td>Total population</td><td>68 million</td><td>Base for all sizings</td></tr>
  <tr><td>% adults (18+)</td><td>~78%</td><td>→ 53M adults</td></tr>
  <tr><td>% active population</td><td>~44%</td><td>→ 30M workers</td></tr>
  <tr><td>% urban</td><td>~80%</td><td>For urban markets</td></tr>
  <tr><td>Number of households</td><td>29 million</td><td>For household products</td></tr>
  <tr><td>Average household size</td><td>2.3 people</td><td>Check: 29M × 2.3 ≈ 67M ✓</td></tr>
  <tr><td>Median income</td><td>~€22,000/year</td><td>For premium markets</td></tr>
  <tr><td>Cars in circulation</td><td>~38 million</td><td>For automotive</td></tr>
  <tr><td>Smartphones</td><td>~54 million</td><td>For digital</td></tr>
  <tr><td>French GDP</td><td>~€2,800B</td><td>Check on large markets</td></tr>
</table>

<div class="warning-box"><strong>Illusory precision:</strong> Announcing "the market is €7,843,500,000" is counterproductive. A sizing is always an estimate with inherent uncertainties. Round to one significant figure and announce a range: "The market is in the order of €5 to €8B." This formulation signals analytical maturity and an understanding of the exercise's limitations.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> What top-tier firms evaluates in a market sizing is not your result but your <em>approach</em>: the decomposition structure, the justification of each assumption, the ability to calculate quickly, and above all the final sanity check. A candidate who gets €7B with a rigorous approach and a sound sanity check will be rated higher than one who gets €5B (the "right" number) by intuition with no structured approach.</div>`
);

patchFiche('CAT-04', 'F-031',
  'Bottom-Up Method and Sanity Checks',
  `
<p>The <strong>bottom-up</strong> method estimates market size by starting from the supply side rather than the demand side: you count the players, their capacity, utilization rates, and prices. It is particularly useful when demand is difficult to estimate directly (B2B markets, technical products), or as a cross-validation method for a top-down estimate.</p>

<h3>Bottom-up structure</h3>
<div class="formula-box">Supply-side approach:
Market = Number of players × Average capacity × Utilization rate × Price

Transaction-based approach:
Market = Number of transactions × Average transaction value</div>

<h3>Guided example — taxi market in Paris</h3>
<div class="example-box"><strong>Bottom-up approach:</strong><br>
Licensed taxis in Paris: ~15,000 (VTCs/rideshare included: ~35,000 total)<br>
Trips per taxi per day: ~12 to 15 (estimate: one trip every 30–45 min over an 8h shift)<br>
Days worked per year: ~280 (5 days/week × 52 weeks, excluding vacation)<br>
Average fare: €18 (based on regulated tariff)<br><br>
<strong>Taxi market only = 15,000 × 13 × 280 × €18 ≈ €984M ≈ ~€1B</strong><br>
<strong>VTC + taxi combined = 35,000 × 13 × 280 × €16 ≈ ~€2B</strong><br><br>
<strong>Top-down sanity check:</strong><br>
Paris residents + daily visitors: ~4M daily trips in the dense zone<br>
Taxi/VTC share: ~2% = 80,000 trips/day<br>
80,000 × 365 × €18 = €526M → slightly lower → revisit frequency assumptions</div>

<h3>The 5 types of sanity checks</h3>
<p><strong>Sanity check 1 — Reference player:</strong> If you know a market player and its estimated market share, calculate the implied market size and compare to your estimate. A gap below 2× is acceptable.</p>
<p><strong>Sanity check 2 — GDP ratio:</strong> For a national market, verify whether the Market/GDP ratio is plausible. The French food market is ~€200B = 7% of GDP, consistent with household food spending (~15% of budgets).</p>
<p><strong>Sanity check 3 — Geographic triangulation:</strong> France ≈ 15% of the European market, ≈ 4% of the world market. If you know the global market, divide by 25 to get a French order of magnitude.</p>
<p><strong>Sanity check 4 — Per capita spend:</strong> Market / 68M = spend per inhabitant. Is this consistent with purchasing power and consumption habits? €100/year/person for a mass-market product is plausible; €1,000 for a niche product would be suspicious.</p>
<p><strong>Sanity check 5 — Common sense coherence:</strong> Is the French beer market really larger than the wine market? Probably not — if your sizing implies that, revisit your assumptions.</p>

<div class="warning-box"><strong>Forgetting the sanity check:</strong> A sizing without a sanity check is incomplete. The interviewer will always expect you to validate your result. A candidate who says "the market is €15B" without checking or commenting on this figure leaves the impression they do not know whether their result is reasonable. Even if you are confident in your calculation, express the sanity check out loud.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> When given a sizing problem, the interviewer generally knows the order of magnitude of the market. What they evaluate is not the accuracy of your result (a 30–50% gap is tolerable) but the robustness of your approach. Using two methods (top-down and bottom-up) and cross-referencing them is the strongest signal of methodological rigor.</div>`
);

patchFiche('CAT-04', 'F-032',
  'Key Figures to Memorize — France, Europe, World',
  `
<p>Memorizing around twenty reference figures allows you to build credible sizings, perform rapid sanity checks, and answer economic context questions without hesitation. These figures do not need to be exact to within 5% — the order of magnitude and internal consistency are what matter.</p>

<h3>France — demographic and economic benchmarks</h3>
<table class="data-table">
  <tr><th>Indicator</th><th>2026 value</th></tr>
  <tr><td>Population</td><td>68 million</td></tr>
  <tr><td>Households</td><td>29 million</td></tr>
  <tr><td>Average household size</td><td>2.3 people</td></tr>
  <tr><td>Active population</td><td>30 million</td></tr>
  <tr><td>GDP</td><td>€2,800B</td></tr>
  <tr><td>GDP per capita</td><td>€42,000</td></tr>
  <tr><td>Median disposable income</td><td>€22,000/year</td></tr>
  <tr><td>Household consumption spending</td><td>~€1,300B</td></tr>
  <tr><td>Cars in circulation</td><td>38 million</td></tr>
  <tr><td>Smartphones</td><td>54 million</td></tr>
</table>

<h3>French reference markets</h3>
<table class="data-table">
  <tr><th>Market</th><th>Estimated size</th></tr>
  <tr><td>Food (grocery + food service)</td><td>€200B</td></tr>
  <tr><td>Residential real estate (transactions)</td><td>€200B</td></tr>
  <tr><td>Automotive (new + used sales)</td><td>€80B</td></tr>
  <tr><td>Healthcare (total spending)</td><td>€260B</td></tr>
  <tr><td>E-commerce</td><td>€160B</td></tr>
  <tr><td>Digital advertising</td><td>€8B</td></tr>
  <tr><td>Out-of-home coffee</td><td>€5B</td></tr>
</table>

<h3>Europe and World</h3>
<table class="data-table">
  <tr><th>Region</th><th>Population</th><th>GDP</th></tr>
  <tr><td>European Union</td><td>450 million</td><td>€15,000B</td></tr>
  <tr><td>United States</td><td>335 million</td><td>$27,000B</td></tr>
  <tr><td>China</td><td>1,400 million</td><td>$17,000B</td></tr>
  <tr><td>World</td><td>8 billion</td><td>~$100,000B</td></tr>
</table>

<h3>Useful conversion rules</h3>
<div class="formula-box">France ≈ 15% of the European (EU) market
France ≈ 4% of the world market
France ≈ 20% of the Eurozone market
To scale a French market to Europe: × 6–7
To scale a French market to the world: × 25</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Memorizing these benchmarks is not an end in itself — it is a means to reason faster and more credibly. In an interview, a candidate who spontaneously says "France = 68 million, so roughly 4% of the 8-billion world market" demonstrates the general economic culture that reassures an interviewer about their ability to work with clients without needing all baseline numbers supplied to them.</div>`
);

patchFiche('CAT-04', 'F-033',
  'Growth Strategies — the 4 Levers',
  `
<p>A <strong>growth case</strong> asks: "How can our client increase its revenues?" It may involve reaching a revenue target, responding to market share loss, or addressing shareholder pressure to accelerate. The difficulty is that growth levers are numerous and very different in terms of speed, cost, and risk. The Ansoff matrix is the most widely used framework to structure them.</p>

<h3>The Ansoff matrix — 4 strategies</h3>
<table class="data-table">
  <tr><th></th><th>Existing market</th><th>New market</th></tr>
  <tr><td><strong>Existing product</strong></td><td>Market penetration (low risk)</td><td>Market extension (medium risk)</td></tr>
  <tr><td><strong>New product</strong></td><td>Product development (medium risk)</td><td>Diversification (high risk)</td></tr>
</table>

<h3>Lever 1 — Market penetration</h3>
<p>Selling more of the same product to the same customers in the same market. This is the lowest-risk strategy but has the most limited growth potential in a mature market. Tactics include: increasing purchase frequency through loyalty programs, raising average basket size through cross-sell and upsell, and recapturing market share through better distribution or more aggressive pricing.</p>
<div class="example-box"><strong>Example:</strong> Netflix increases its content library to reduce churn and increase time on platform — without changing its market or its core product.</div>

<h3>Lever 2 — Geographic extension</h3>
<p>Selling the same product in new geographies or to new customer segments. The medium risk comes from cultural, regulatory, and competitive differences between markets. Key questions: is the current product adaptable locally? Should the company acquire a local player or enter organically? What is the timeline to profitability?</p>

<h3>Lever 3 — Product development</h3>
<p>Creating new products or services for existing customers. The risk comes from adoption uncertainty. Key questions: does the new product address an unmet need? What is the likelihood of adoption by the existing customer base? What is the time-to-market and development cost?</p>

<h3>Lever 4 — Diversification</h3>
<p>Diversification — new product in a new market — is the riskiest strategy. It is justified when the current market is in decline, when strong synergy opportunities exist with a new market, or when the company has unique transferable capabilities. In the majority of case interviews, recommending diversification without solid analysis is a red flag.</p>

<h3>Sequencing growth levers</h3>
<p>In practice, top-tier firms recommends sequencing levers in order of increasing risk. Start by maximizing penetration in the existing market (quick wins), then assess geographic extension or product development based on the company's capabilities, and only consider diversification if the other three levers are insufficient.</p>

<div class="warning-box"><strong>The bias toward new initiatives:</strong> Many candidates immediately recommend launching new products or entering new markets, as it seems more "creative." But before any new initiative, top-tier firms always verifies whether the current market's potential is fully exploited. A 2% conversion rate on an existing high-potential market often offers more growth than an uncertain new market.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In growth cases, the strongest candidates structure their response in two phases: "First, let's analyze whether the current market still offers unexploited potential (lever 1). Then, if that potential is limited, let's identify the expansion levers with the best growth-to-risk ratio." This sequence signals mature strategic thinking.</div>`
);

patchFiche('CAT-04', 'F-034',
  'Market Entry — When and How to Enter',
  `
<p>A <strong>market entry case</strong> asks: "Should our client enter this market, and if so, how?" This is one of the most frequent case types in top-tier firms interviews because it combines both strategic analysis (is this a good idea?) and operational analysis (how to execute?). A three-question sequential structure avoids the classic mistake of answering the "how" before answering the "should we."</p>

<h3>Question 1 — Market attractiveness</h3>
<p>Before anything else, assess whether the target market is structurally attractive. Four dimensions are critical: size and growth (a growing market is easier to penetrate than a stagnant one), competitive structure (a concentrated market with entrenched incumbents is hard to penetrate), sector margins (they reflect bargaining power and entry barriers), and regulatory framework (some markets require licenses, certifications, or face access restrictions).</p>
<div class="formula-box">Market attractiveness test:
Score = f(Size × Growth × Margins − Competitive intensity − Regulatory barriers)
→ Attractive market: large, growing, decent margins, non-monopolistic competition, favorable regulation</div>

<h3>Question 2 — Sustainable competitive advantage</h3>
<p>An attractive market is not sufficient to justify entry. The client must have — or be able to develop — a sustainable competitive advantage in this market. This advantage may be technological (IP, algorithms), relational (access to key customers or partners), cost-based (economies of scale, preferential sourcing), or brand-based.</p>
<p>The test question is: "Why would our client be better than existing players in this market?" If the answer is vague or relies purely on financial resources, the entry is risky. Financial resources can buy growth but not a durable advantage if competitors can match them.</p>

<h3>Question 3 — Entry mode</h3>
<table class="data-table">
  <tr><th>Entry mode</th><th>Speed</th><th>Control</th><th>Cost</th><th>When to use</th></tr>
  <tr><td>Organic (greenfield)</td><td>Slow (2–4 years)</td><td>Full</td><td>Progressive</td><td>Market well understood, time available</td></tr>
  <tr><td>Acquisition</td><td>Immediate</td><td>Full (post-integration)</td><td>High (control premium)</td><td>Speed to market critical, capabilities to acquire</td></tr>
  <tr><td>Joint venture</td><td>Fast (6–12 months)</td><td>Shared (governance risk)</td><td>Shared</td><td>Complex local market, indispensable partner</td></tr>
  <tr><td>Franchise / License</td><td>Fast</td><td>Low</td><td>Very low</td><td>Rapid scale without heavy capital, strong brand</td></tr>
  <tr><td>Distribution partner</td><td>Very fast</td><td>Minimal</td><td>Minimal</td><td>Market test, limited resources</td></tr>
</table>

<h3>Full example — market entry case</h3>
<div class="example-box"><strong>Question:</strong> "Our client, a French bank, is considering entering the Moroccan retail banking market."<br><br>
<strong>Market attractiveness:</strong> Morocco — 37M population, growing middle class, banking penetration ~55% (vs 95% in France), sector growth ~8%/year. Attractive market.<br><br>
<strong>Competitive advantage:</strong> Our client has strong relationships with the Moroccan diaspora in France (transferable relational competence) and an advanced digital offering (differentiator in a market undergoing digitization). Real advantage.<br><br>
<strong>Recommended entry mode:</strong> Acquisition of a mid-sized established local bank (existing physical distribution) + digital migration. Justification: local regulation requires physical presence for deposits, and an acquisition is faster than greenfield in a market where customer trust is critical.<br><br>
<strong>Key risks:</strong> Currency risk (dirham not fully convertible), political risk, cultural integration complexity → recommend a 2-year pilot before expanding beyond 2 regions.</div>

<div class="warning-box"><strong>Recommending entry without analyzing whether the client can win:</strong> An attractive market does not justify entry if the client has no defensible competitive advantage. In an attractive market, existing players are generally well established. An entrant with no distinctive advantage will struggle to convince customers to switch. Always ask "Why us?" before "Should we enter?"</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Candidates who succeed in market entry cases answer the three questions in order and sequentially: they do not address the entry mode before concluding on attractiveness and competitive advantage. This discipline shows they know how to distinguish the stages of rigorous strategic reasoning.</div>`
);

patchFiche('CAT-04', 'F-035',
  'Pricing — 3 Approaches with Examples',
  `
<p>A <strong>pricing case</strong> asks: "At what price should our client sell their product or service?" This is both an analytical question (calculate the viable price zone) and a strategic one (choose the positioning within that zone). The 3-approach framework — cost-based, value-based, and competitive — provides a rigorous structure for the answer.</p>

<h3>Approach 1 — Cost-plus (the floor)</h3>
<p>The cost-plus price is the minimum price below which the company cannot sell without losing money. It is calculated by adding a minimum margin to the full cost of goods.</p>
<div class="formula-box">Price floor = Full cost of goods × (1 + Minimum target margin)
Full cost = Materials + Direct labor + Allocated overhead
Example: Cost = €40, target margin 20% → Price floor = €40 × 1.20 = €48</div>
<p>The cost-plus approach is the simplest but the most dangerous: it completely ignores what customers are willing to pay and what competitors offer. In consulting, it serves only to define the floor — never the optimal price.</p>

<h3>Approach 2 — Value-based (the ceiling)</h3>
<p>The value-based price is the maximum a customer is willing to pay, equal to the economic value created by the product minus the value of the best available alternative.</p>
<div class="formula-box">Price ceiling = Total value created − Value of best alternative
Total value created = Gains generated + Costs avoided
Typical capture rate = 20–50% of value created
Optimal price = Price floor + Capture rate × (Price ceiling − Price floor)</div>
<div class="example-box"><strong>Example — Logistics optimization software:</strong><br>
A software solution reduces a SME's logistics costs by €200,000/year.<br>
Value created = €200,000/year<br>
Best alternative = Excel + 2 consultant days = €15,000/year<br>
Price ceiling = €200,000 − €15,000 = €185,000/year<br>
Capture rate = 30% → Optimal price = 30% × €185,000 = €55,500/year as SaaS</div>

<h3>Approach 3 — Competitive (the context)</h3>
<p>Competitive analysis verifies whether your calculated price is consistent with the market. If your value-based price is 3× above the market leader's price, you must either justify this differentiation or revise downward. If your price is below the first competitor, you either have an opportunity to raise it or a perceived value problem to address.</p>

<h3>Advanced pricing strategies</h3>
<table class="data-table">
  <tr><th>Strategy</th><th>Principle</th><th>Example</th></tr>
  <tr><td>Freemium</td><td>Free version + paid premium</td><td>Spotify, Dropbox</td></tr>
  <tr><td>Dynamic pricing</td><td>Variable price based on demand</td><td>Uber, hotels, airlines</td></tr>
  <tr><td>Bundling</td><td>Group multiple products together</td><td>Office 365, triple-play offers</td></tr>
  <tr><td>Penetration pricing</td><td>Low launch price to capture share, then raise</td><td>Amazon Prime, early Netflix</td></tr>
  <tr><td>Price skimming</td><td>High initial price, progressive reduction</td><td>iPhone at launch, OLED TVs</td></tr>
</table>

<div class="warning-box"><strong>Basing price solely on costs:</strong> This is the most common approach in industrial companies and one of the least effective. A company charging €100 for a product that costs €40 believes it has a 60% margin. But if the customer is willing to pay €300 (perceived value), the company is leaving €200 of value on the table. Always calculate perceived value before setting a price.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The price recommendation top-tier firms appreciates is not a single number but a <em>viable price zone</em> and a <em>positioning logic</em> within that zone. "The price floor is €48, the ceiling is €185. I recommend positioning at €95, which is 51% of the ceiling — consistent with a mid-market positioning that maximises volume while capturing a substantial share of the value created."</div>`
);

})();

