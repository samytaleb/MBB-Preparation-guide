(function() {
function patchFiche(courseId, ficheId, titleEN, contentEN) {
  var cat = DATA.courses.find(function(c) { return c.id === courseId; });
  if (!cat) return;
  for (var i = 0; i < cat.submodules.length; i++) {
    var f = cat.submodules[i].fiches.find(function(x) { return x.id === ficheId; });
    if (f) { if (titleEN) f.title_en = titleEN; if (contentEN) f.content_en = contentEN; return; }
  }
}

// CAT-05 category/submodule titles
DATA.courses.forEach(function(c) { if (c.id === 'CAT-05') { c.title_en = 'Analytics & Finance'; c.submodules.forEach(function(sm) { if (sm.id === 'CAT-05-01') sm.title_en = 'Data Analysis'; if (sm.id === 'CAT-05-02') sm.title_en = 'Finance & M&A'; }); } });
// CAT-06 category/submodule titles
DATA.courses.forEach(function(c) { if (c.id === 'CAT-06') { c.title_en = 'Communication & top-tier firms'; c.submodules.forEach(function(sm) { if (sm.id === 'CAT-06-01') sm.title_en = 'Synthesis & Recommendation'; if (sm.id === 'CAT-06-02') sm.title_en = 'PEI & top-tier firms Soft Skills'; }); } });

patchFiche('CAT-05', 'F-040', 'Exhibit Analysis: The UOQCEI Method', `
<p><strong>Exhibit analysis</strong> — reading a chart, table, or slide presented during a case — is a distinct skill tested in virtually every top-tier firms and Tier 1 interview. The goal is not to describe what you see — the interviewer can see it too — but to extract an <strong>actionable insight</strong> that moves the case forward. The UOQCEI method provides a framework for structuring this analysis in under 45 seconds.</p>

<h3>The UOQCEI Method — 6 Steps</h3>
<p><strong>U — Units:</strong> Immediately identify the units on every axis. Are these euros, percentages, indices, or volumes? A frequent mistake is confusing an absolute value with a growth rate or a base-100 index. Dual-axis charts (e.g., left axis in €M, right axis in %) are especially treacherous and must be flagged immediately.</p>

<p><strong>O — Object of the exhibit:</strong> In one sentence, state what the exhibit measures. "This chart shows gross margin evolution by customer segment over five years." This step forces genuine comprehension before interpretation begins.</p>

<p><strong>Q — Question being answered:</strong> Connect the exhibit to the case question. Why is this exhibit being shown at this exact moment? Which branch of your analysis is it meant to illuminate? This contextualisation is what separates a relevant analysis from a mere description.</p>

<p><strong>C — Key figures:</strong> Identify the 2–3 most important numbers or trends. Start with extremes (maximum, minimum), inflection points (where a trend changes direction), and significant gaps between the entities being compared.</p>

<p><strong>E — Exceptions and anomalies:</strong> Look for what breaks the general pattern. An atypical year, a segment behaving differently from the others, an unexpected correlation. These anomalies are often the core of the insight the interviewer is waiting for.</p>

<p><strong>I — Insight:</strong> Formulate a conclusion that directly answers the case question. The insight should begin with "This suggests that…" or "This indicates that…" and must point toward a decision or a next analytical step.</p>

<h3>Worked Example — Analysing a Profitability Chart</h3>
<div class="example-box"><strong>Exhibit:</strong> Stacked bar chart showing revenue and gross margin (%) for 4 customer segments — SMBs, Mid-market, Enterprise, and Public sector — over 3 years (Y-2 to Y).<br><br>
<strong>U:</strong> Left axis = revenue in €M; right axis = gross margin in %<br>
<strong>O:</strong> Each segment's contribution to total revenue and margin over 3 years<br>
<strong>Q:</strong> In a declining-profitability case, this exhibit identifies whether the deterioration is uniform or concentrated in one segment<br>
<strong>C:</strong> Total revenue stable at €120M. Overall margin fell from 38% to 31%. SMB segment: revenue +40%, margin 22%. Enterprise: revenue −15%, margin 52%.<br>
<strong>E:</strong> Growth is coming from SMBs (low margin) while Enterprise accounts (high margin) are declining — a classic negative mix effect.<br>
<strong>I:</strong> The margin deterioration is not caused by lower unit margins within each segment, but by a shift in sales composition toward lower-profitability segments. The priority should be to understand why Enterprise is shrinking and to define a retention strategy.</div>

<h3>Most Common Exhibit Types in top-tier firms Cases</h3>
<table class="data-table">
  <tr><th>Exhibit type</th><th>What it typically reveals</th><th>Main trap</th></tr>
  <tr><td>Time-series line chart</td><td>Trends, inflections, seasonality</td><td>Confusing absolute vs. growth axis</td></tr>
  <tr><td>Comparative bar chart</td><td>Benchmarks, gaps between entities</td><td>Ignoring scale differences</td></tr>
  <tr><td>Scatter plot</td><td>Correlations, segmentation</td><td>Confusing correlation with causation</td></tr>
  <tr><td>Data table</td><td>Precise details, ratio calculations</td><td>Getting lost in detail without extracting insight</td></tr>
  <tr><td>Waterfall chart</td><td>Bridge/variance decomposition</td><td>Overlooking offsetting effects</td></tr>
</table>

<div class="warning-box"><strong>Describing instead of interpreting:</strong> "This chart shows that margin fell from 38% to 31%" is a description. "The margin decline is entirely explained by an adverse mix effect — unit margins within each segment are stable" is an actionable interpretation. top-tier firms pays for insights, not descriptions. Force yourself to end every exhibit analysis with a sentence that begins with "This suggests we should…" or "As a result, the next question is…"</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Top candidates analyse an exhibit in 30–45 seconds and formulate an insight in one sentence. They do not comment on every bar or data point — they identify the main trend and the key anomaly. Train by analysing charts from the Financial Times or annual reports under a strict time limit.</div>`);

patchFiche('CAT-05', 'F-041', 'Reading a P&L in 5 Minutes — Critical Ratios', `
<p>In consulting, you will regularly face income statements in interviews, client slides, and analysis memos. Knowing how to read a P&L quickly — spotting warning signals, calculating critical ratios, and formulating priority questions — is a fundamental operational skill. This fiche gives you a five-minute reading protocol applicable to any income statement.</p>

<h3>The 5-Step Reading Protocol</h3>
<p><strong>Minute 1 — General orientation:</strong> Scan the key lines in order (revenue, gross profit, EBITDA, net income) without stopping on detail. The objective is to understand the order of magnitude, the sector, and whether the company is profitable. Note revenue and net margin as reference anchors.</p>

<p><strong>Minute 2 — Calculate the main ratios:</strong> Immediately compute key ratios as a percentage of revenue: gross margin, EBITDA margin, net margin, and headcount costs as a share of revenue. These ratios allow you to benchmark against industry norms without even knowing the absolute figures.</p>

<p><strong>Minute 3 — Spot anomalies:</strong> Look for line items that deviate from the sector benchmark. Any cost line running more than 5 percentage points above benchmark warrants investigation. A gross margin below benchmark signals either a pricing problem or a variable cost problem.</p>

<p><strong>Minute 4 — Analyse the trend:</strong> If prior-year data is available, calculate growth rates for the key lines. Revenue growing while margin is shrinking signals a mix or cost-structure problem. Stable revenue with improving margin signals efficiency gains.</p>

<p><strong>Minute 5 — Formulate hypotheses:</strong> Based on the quick read, articulate 2–3 priority hypotheses to test. These hypotheses will guide the questions you ask the interviewer.</p>

<h3>P&L Ratios to Calculate Systematically</h3>
<table class="data-table">
  <tr><th>Ratio</th><th>Formula</th><th>What it tells you</th></tr>
  <tr><td>Gross margin</td><td>(Revenue − COGS) / Revenue</td><td>Core business profitability before overheads</td></tr>
  <tr><td>EBITDA margin</td><td>EBITDA / Revenue</td><td>Recurring operating profitability (pre-depreciation)</td></tr>
  <tr><td>EBIT margin</td><td>EBIT / Revenue</td><td>Pure operating result</td></tr>
  <tr><td>Net margin</td><td>Net income / Revenue</td><td>Final profitability after financing and taxes</td></tr>
  <tr><td>Headcount ratio</td><td>Personnel costs / Revenue</td><td>Labour intensity of the business model</td></tr>
  <tr><td>COGS ratio</td><td>COGS / Revenue</td><td>Direct cost share — compare to sector benchmark</td></tr>
  <tr><td>Cash conversion</td><td>FCF / EBITDA</td><td>Earnings quality (below 60%: working capital or capex issue)</td></tr>
</table>

<h3>Worked Example — P&L of a Food Distributor</h3>
<div class="example-box"><strong>Figures (in €M):</strong><br>
Revenue: 500 | COGS: 375 | Gross profit: 125 (25%)<br>
Personnel: 65 (13%) | Logistics: 22 (4.4%) | Marketing: 8 (1.6%) | G&A: 10 (2%)<br>
EBITDA: 20 (4%) | D&A: 8 | EBIT: 12 (2.4%) | Net income: 7 (1.4%)<br><br>
<strong>Analysis:</strong><br>
→ Gross margin 25%: above benchmark of 20–22% → good sign, or different accounting definition worth checking<br>
→ Personnel 13%: benchmark 10–12% → overstaffing or heavy permanent/temp mix?<br>
→ EBITDA 4%: benchmark 5–8% → slightly below average<br>
→ Hypothesis 1: personnel costs are too high vs. peers (−2 pts vs. benchmark)<br>
→ Hypothesis 2: logistics (4.4%) is within norms; not a priority lever here<br>
→ Priority questions: Headcount vs. competitor? Fixed vs. temporary labour mix? Revenue per head?</div>

<div class="warning-box"><strong>Calculating ratios without interpreting them:</strong> "Gross margin is 25%" means nothing on its own. "Gross margin is 25%, which is 3–5 points above the benchmark for a food distributor — suggesting either a premium positioning or a more restrictive accounting definition of COGS" — that is an analysis. The consultant's added value lies in contextualising ratios against benchmarks, not in the raw calculation.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> A top-tier firms analyst reads a P&L in under five minutes and immediately formulates the three priority questions. In an interview, demonstrating this ability — computing the ratios, comparing to benchmarks, formulating hypotheses — in a smooth, structured sequence is one of the strongest signals of readiness for the consulting profession.</div>`);

patchFiche('CAT-05', 'F-042', 'Valuation — DCF, Comparables, and Transactions', `
<p><strong>Valuation</strong> is a skill expected in top-tier firms interviews, especially for Private Equity, M&A, and financial strategy projects. Three methods coexist and complement each other: DCF (based on future cash flows), comparables (based on current market prices), and transactions (based on historical precedents). Understanding each method and knowing when to use it is essential.</p>

<h3>Method 1 — DCF (Discounted Cash Flow)</h3>
<p>DCF values a company as the sum of its future discounted cash flows. It is the most theoretically rigorous method but also the most sensitive to assumptions.</p>
<div class="formula-box">Enterprise Value (EV) = Σ FCFt / (1+WACC)^t + Terminal Value / (1+WACC)^n
FCF (Free Cash Flow) = EBITDA − Taxes − Change in Working Capital − Capex
Terminal Value = FCFn × (1+g) / (WACC − g)
where g = long-term growth rate (typically 2–3%)
WACC = Weighted Average Cost of Capital (typically 8–12% depending on risk)</div>

<p>The limitations of DCF are important: the valuation is highly sensitive to WACC and the terminal growth rate g (a 1-point change in WACC can shift value by 20–30%), and it is difficult to calibrate for high-growth or loss-making companies. In practice, DCF is often used as a cross-check rather than as a primary method.</p>

<h3>Method 2 — Trading Comparables (Comps)</h3>
<p>This method values a company by applying the valuation multiples of comparable listed peers. It is the most widely used method in practice because it directly reflects current market conditions.</p>
<div class="formula-box">EV = Sector multiple × Financial metric
Examples:
EV / EBITDA (most common) → tech: 15–25×; industrials: 7–12×; retail: 8–12×
EV / Revenue (SaaS, startups) → SaaS: 5–15× depending on growth
Price / Earnings (P/E) → equity markets: 15–25× depending on sector</div>

<h3>Sector Reference Multiples</h3>
<table class="data-table">
  <tr><th>Sector</th><th>EV/EBITDA</th><th>EV/Revenue</th><th>P/E</th></tr>
  <tr><td>Tech / SaaS</td><td>20–30×</td><td>8–15×</td><td>30–50×</td></tr>
  <tr><td>Innovative pharma</td><td>15–25×</td><td>5–8×</td><td>20–35×</td></tr>
  <tr><td>Industrials / Manufacturing</td><td>7–12×</td><td>1–2×</td><td>12–20×</td></tr>
  <tr><td>Distribution / Retail</td><td>8–12×</td><td>0.3–0.8×</td><td>15–25×</td></tr>
  <tr><td>Retail banking</td><td>N/A</td><td>N/A</td><td>8–15× (P/BV: 1–2×)</td></tr>
  <tr><td>Telecom</td><td>6–10×</td><td>2–3×</td><td>12–20×</td></tr>
</table>

<h3>Method 3 — Transaction Comparables</h3>
<p>This method uses the multiples observed in recent acquisition transactions involving comparable companies. Transaction multiples typically include a <strong>control premium</strong> (15–30% above trading comps) because the acquirer is paying for control and expected synergies. It is the most relevant method for estimating the sale price of a company in an M&A process.</p>

<h3>Triangulating the Three Methods</h3>
<div class="example-box"><strong>Example — Valuing a mid-size logistics company:</strong><br>
EBITDA = €8M, stable growth at 3%/year, WACC = 9%<br><br>
DCF: Annual FCF ~€5M, TV = 5 × 1.03 / (0.09 − 0.03) = €86M → total EV ≈ €100M<br>
Trading comps: EV/EBITDA sector 8–12× → €64–96M → midpoint €80M<br>
Transaction comps: observed multiples 9–13× → €72–104M; with 20% control premium → €86–115M<br><br>
<strong>Valuation range: €80–100M</strong><br>
DCF confirms the upper end of the comps range. Transaction value with control premium could reach ~€115M if synergies are significant.</div>

<div class="warning-box"><strong>Applying a multiple without adjustment:</strong> A sector average multiple is a starting point, not an answer. Factors that justify a premium (above-average growth, niche market with high barriers, exceptional management) or a discount (high leverage, customer concentration, a patent nearing expiry) must be explicitly argued. Never state a valuation figure without qualifying it against the company's specific characteristics.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In M&A or financial strategy cases, never give a single valuation figure — always provide a range. Always use at least two methods and express results as a range. "The company is worth between €80M and €100M depending on the method. I recommend positioning any offer around €90M, consistent with recent transaction multiples net of control premium, given the synergies identified."</div>`);

patchFiche('CAT-05', 'F-043', 'M&A — The 4 Strategic Questions', `
<p>An <strong>M&A case</strong> requires you to advise a client on a potential acquisition. These cases test your understanding of strategic logic, your ability to assess risks, and your rigour in financial analysis — all at once. The four-question framework allows you to approach any M&A case comprehensively and in a structured way.</p>

<h3>Question 1 — Strategic Logic: Why This Acquisition?</h3>
<p>Every acquisition must answer a clear strategic rationale. The four main rationales are: <strong>market consolidation</strong> (acquiring a competitor to gain market share and economies of scale), <strong>capability acquisition</strong> (acquiring a technology, patent, or team the company cannot build internally in time), <strong>geographic expansion</strong> (entering a new market via an established local player), and <strong>diversification</strong> (entering a new sector to reduce dependence on the core business).</p>
<p>The test question is: "Is this acquisition the most efficient way to achieve this objective, compared with organic development or a partnership?" If the answer is no, the acquisition is not justified even if the target is available.</p>

<h3>Question 2 — Synergies: The Additional Value Created</h3>
<p>An acquisition only creates value if the synergies generated exceed the premium paid. Synergies fall into two categories: <strong>revenue synergies</strong> (cross-sell, upsell, access to new customers, stronger brand) and <strong>cost synergies</strong> (elimination of duplicated functions, purchasing economies of scale, production optimisation).</p>
<div class="formula-box">Synergy value = PV(Annual synergies) = Recurring synergies / (WACC − g)
Acquisition test: Premium paid &lt; Present value of synergies
Premium paid = Acquisition price − Standalone value of the target</div>
<p>Important: revenue synergies are structurally less certain than cost synergies. In practice, consultants apply a realisation rate of 60–80% on cost synergies and 30–50% on revenue synergies to arrive at a conservative estimate.</p>

<h3>Question 3 — Integration Risks</h3>
<p>Most acquisitions fail not because the strategic logic was wrong, but because integration was poorly managed. The most frequent integration risks are: loss of key talent from the target (especially in service or technology acquisitions), cultural incompatibility, technical complexity of integrating information systems, and resistance from the commercial teams of both entities. Each risk must be assessed for likelihood and potential value destruction.</p>

<h3>Question 4 — Valuation and Price Paid</h3>
<p>Even when strategic logic is sound and synergies are real, an acquisition can destroy value if the price paid is too high. The question is: "At what price does this acquisition still create value for shareholders?" The maximum price to pay is the standalone value of the target plus the present value of synergies minus the minimum return required by the acquirer's shareholders.</p>

<h3>M&A Case Response Structure</h3>
<div class="example-box"><strong>Question:</strong> "Our client, an HR software vendor, is considering acquiring an AI startup valued at €50M."<br><br>
<strong>Q1 — Strategic logic:</strong> AI is an increasingly differentiating feature in HR software. If our client cannot build this capability internally within 2 years, the acquisition is strategically justified.<br>
<strong>Q2 — Synergies:</strong> Revenue synergies: integration into 5,000-client base → upsell estimated at €2M/year (uncertain). Cost synergies: elimination of the startup's sales force → €1.5M/year (more certain). Synergy value @ 10% WACC: ~€35M conservative.<br>
<strong>Q3 — Risks:</strong> Retention of the technical team (5 key data scientists). Complex API integration. Startup culture vs. corporate culture clash.<br>
<strong>Q4 — Valuation:</strong> €50M = 25× multiple on current revenue (€2M). Only justified if synergies (€35M) materialise AND the startup triples revenue in 3 years. Reasonable maximum price: ~€60–65M with an earn-out tied to performance.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In M&A cases, the interviewer expects you to identify the central strategic question — here: "Is this the best way to acquire AI capabilities?" — before going into valuation detail. A candidate who jumps straight to DCF without answering the strategic question is thinking like a financier, not like a consultant.</div>`);

patchFiche('CAT-05', 'F-044', 'Operations — Lean, Capacity, Supply Chain', `
<p><strong>Operations cases</strong> are less frequent than profitability or growth cases, but they recur regularly in turnaround, industrial optimisation, and supply chain contexts. The key is to understand the core operational metrics and to connect an operational inefficiency directly to its financial impact.</p>

<h3>The 3 Core Operational Metrics</h3>
<p><strong>Capacity and utilisation:</strong> Capacity is the maximum volume a process can produce in a given period. The utilisation rate measures the percentage of that capacity actually used. An optimal utilisation rate is generally between 75–85%: below that, assets are under-employed and unit fixed costs are high; above it, there is no buffer for demand variation and the risk of breakdowns increases.</p>

<div class="formula-box">Available capacity = Nominal capacity × (1 − Downtime rate)
Utilisation rate = Volume produced / Available capacity
Unit fixed cost = Total fixed costs / Volume produced
→ Higher utilisation dilutes fixed cost per unit</div>

<p><strong>Bottleneck:</strong> In a sequential process, the overall throughput is limited by the slowest step — the bottleneck. Little's Law states that the capacity of the entire system equals the capacity of the bottleneck. Identifying and addressing the bottleneck is therefore the absolute priority before optimising any other step.</p>

<p><strong>Overall Equipment Effectiveness (OEE):</strong> OEE measures a machine's real performance against its theoretical potential. It is calculated as the product of three rates: availability (operating time / planned time), performance (actual speed / nominal speed), and quality (conforming units / units produced).</p>
<div class="formula-box">OEE = Availability × Performance × Quality
World-class benchmark: OEE &gt; 85%
Typical industry benchmark: OEE 55–65%</div>

<h3>Lean Principles — The 8 Wastes</h3>
<p>Lean management (derived from the Toyota Production System) identifies 8 types of waste (muda) that consume resources without adding value for the customer: overproduction, waiting, unnecessary transport, excess processing, inventory, unnecessary motion, defects and rework, and underutilised employee skills. In a consulting case, whenever you identify a lean waste, always estimate its cost as a percentage of revenue or production cost.</p>

<h3>Supply Chain — 3 Optimisation Levers</h3>
<p><strong>Lever 1 — Inventory reduction:</strong> Inventory ties up capital (carrying cost = 15–25% of inventory value per year, including cost of capital, storage, and obsolescence risk). Reducing safety stock through better demand forecasting or shorter supplier lead times directly releases cash on the balance sheet.</p>
<p><strong>Lever 2 — Supplier consolidation:</strong> Reducing the number of suppliers increases volumes and therefore negotiating power. A top-tier firms client in the automotive industry typically reduces its supplier base by 30% to save 8–12% on procurement costs.</p>
<p><strong>Lever 3 — Make-or-buy:</strong> Outsourcing a non-core activity converts fixed costs into variable costs and frees up capital. The make-or-buy decision must compare the full internal production cost (including opportunity cost of capital) against market prices. The decision should also weigh the strategic sensitivity of the activity being considered for outsourcing.</p>

<div class="insight-box"><strong>top-tier firms signal:</strong> In an operations case, the strongest candidates immediately connect the operational inefficiency to its P&L impact. "An OEE of 60% vs. a benchmark of 85% means 25% of capacity is lost — at a production cost of €100 per unit and a volume of 500,000 units, that represents a potential annual opportunity cost of €12.5M." This rapid calculation demonstrates consulting thinking, not production engineering thinking.</div>`);

patchFiche('CAT-06', 'F-050', 'Oral Synthesis in 60 Seconds — Structure and Examples', `
<p>The <strong>oral synthesis</strong> is the moment when you present your conclusions after a case analysis. In a top-tier firms interview, you will typically have 1 to 2 minutes to deliver your recommendation. It is one of the most discriminating moments: a structured, concise synthesis simultaneously demonstrates your ability to prioritise information, communicate clearly, and take a position — all central consulting skills.</p>

<h3>The 3-Part Structure — SCR or SCQA</h3>
<p>The most effective structure for an oral synthesis is <strong>SCR: Situation, Complication, Resolution</strong>. It is derived directly from Barbara Minto's Pyramid Principle and reflects the way top-tier firms structures its presentations.</p>
<div class="formula-box">S — Situation: established factual context (1 sentence)
C — Complication: the problem or central question (1 sentence)
R — Resolution: your recommendation + 2–3 supporting proofs (3–4 sentences)

Full 60-second template:
"Our client [X] is facing [situation + complication].
Based on our analysis, I recommend [R] for 3 reasons:
first [proof 1], second [proof 2], third [proof 3].
The main risk is [R], which we can mitigate by [M].
The immediate next step is [N]."</div>

<h3>Complete Example — Synthesis of a Profitability Case</h3>
<div class="example-box"><strong>Case:</strong> A food distributor sees its EBITDA margin fall from 8% to 4% in two years.<br><br>
<strong>Verbal synthesis:</strong><br><br>
"Our client, a food distributor with €500M in revenue, has seen its EBITDA margin cut in half over two years, threatening its ability to fund its logistics investments.<br><br>
I recommend a two-part priority action: first, reduce personnel costs by 2 points of revenue; second, renegotiate purchasing terms with the top 20 suppliers to recover 1 point of gross margin.<br><br>
I arrive at this recommendation for three reasons: first, our analysis shows that personnel costs are 3 points above the sector benchmark, suggesting 15–20% overstaffing in support functions. Second, the gross margin is 25% while the benchmark is 28–30%, indicating insufficient supplier negotiating power. Third, logistics costs are in line with norms, so that is not the priority.<br><br>
The main risk is that headcount reductions trigger labour disputes. I recommend proceeding through natural attrition over 18 months rather than a collective redundancy plan.<br><br>
The immediate next step is to launch a detailed headcount audit by function and to obtain purchasing data by supplier to identify quick wins."</div>

<h3>The Most Frequent Synthesis Mistakes</h3>
<p><strong>Mistake 1 — Summarising the analysis rather than concluding:</strong> "We analysed revenues, then costs, then the mix…" is not a synthesis — it is a narrative. A synthesis begins with the recommendation, not with the path that led there.</p>
<p><strong>Mistake 2 — Avoiding commitment:</strong> "We might consider reducing costs, but this depends on many factors…" is not a recommendation — it is a non-answer. top-tier firms expects clear positions, even under uncertainty.</p>
<p><strong>Mistake 3 — Omitting risks and next steps:</strong> A recommendation without an implementation plan is incomplete. Always close with one risk and one concrete next step.</p>

<div class="insight-box"><strong>top-tier firms signal:</strong> The first sentence of your synthesis must contain your recommendation — not your analyses. "I recommend X" must appear within the first 10 seconds. If you begin with "First, let us look at the market structure…", you are signalling difficulty taking a position — which is disqualifying for a top-tier firms consultant.</div>`);

patchFiche('CAT-06', 'F-051', 'top-tier firms Recommendation Format — Complete Structure', `
<p>A <strong>top-tier firms recommendation</strong> is not simply a conclusion — it is a structured presentation that answers both the "what" (the recommendation), the "why" (the evidence), the "how" (the action plan), and the "what are the risks" (the mitigation plans). This structure applies equally to verbal delivery in an interview and to written slides or memos.</p>

<h3>The Complete Recommendation Structure</h3>
<p><strong>1. The recommendation (Answer First):</strong> Begin with the recommended action, stated in specific and actionable terms. Avoid vague formulations like "improve efficiency" — prefer "reduce personnel costs by 2 points of revenue within 18 months through natural attrition replacement".</p>
<p><strong>2. The 3 proofs (the pyramid):</strong> Articulate 3 independent reasons that support your recommendation. These proofs must be MECE — neither redundant nor incomplete. Each proof should be quantified where possible.</p>
<p><strong>3. The implementation plan:</strong> A recommendation without an action plan is an opinion. Define the 2–3 key steps, the owners, and the timeline. In an interview, a sketch is sufficient.</p>
<p><strong>4. Risks and mitigations:</strong> Identify the most important risk to the recommendation and propose a concrete mitigation. This shows you are thinking operationally, not just strategically.</p>
<p><strong>5. The immediate next step:</strong> Define what must happen in the next 30 days. This next step must be concrete and assignable to a specific person or team.</p>

<h3>Written Format — Structure of a top-tier firms Memo</h3>
<div class="formula-box">Title: [Recommendation in one sentence]
Executive summary: 3–4 bullets with key points
Body:
  I.   Context: situation + problem + scope
  II.  Analysis: 3 branches analysed + supporting data
  III. Recommendation: main action + justification
  IV.  Action plan: steps / owners / timing
  V.   Risks: top 2 risks + mitigations
  VI.  Next steps: 30/60/90 days</div>

<div class="example-box"><strong>Example — Recommendation on a market entry decision:</strong><br>
<strong>Recommendation:</strong> "Do not enter the Moroccan market in 2026 via the acquisition of CIH Bank. Consider organic entry in 2027–2028 targeting only the digital B2B segment."<br><br>
<strong>3 proofs:</strong><br>
1. The premium demanded (1.8× P/BV vs. benchmark of 1.2×) fully absorbs the present value of projected synergies — zero value creation for our shareholders<br>
2. Bank Al-Maghrib regulations impose an 18–24 month approval process for foreign acquirers, eliminating the speed-to-market advantage of an acquisition<br>
3. Our analysis shows that 70% of projected synergies come from digital, a segment we can address without acquiring the bank (via a tech partnership)<br><br>
<strong>Action plan:</strong> (1) Launch a fintech partnership RFP by December 2026. (2) Test the digital model in Morocco via a pilot with 3 Franco-Moroccan export companies. (3) Reassess the acquisition opportunity in 2028 if the pilot reaches €10M ARR.</div>

<div class="warning-box"><strong>The perpetual conditional recommendation:</strong> "If synergies materialise, we recommend entering; otherwise it would need reconsidering…" is not a recommendation. top-tier firms expects you to make a clear choice and own its limitations. "I recommend not entering, and here is the signal that would make us revise this recommendation: [a clear, measurable trigger]." That is the standard.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The sentence that separates excellent candidates from good ones is the last sentence of the recommendation: the "30-day next step." This sentence proves you are thinking about implementation, not just analysis. "Within 30 days, we should conduct 10 interviews with Franco-Moroccan SMEs to validate the digital service adoption hypothesis" is the sentence that closes the loop.</div>`);

patchFiche('CAT-06', 'F-052', 'PEI — The Complete Personal Experience Interview', `
<p>The <strong>PEI (Personal Experience Interview)</strong> is the non-case portion of the top-tier firms interview. It accounts for 30–40% of total interview time and is as discriminating as the business case. top-tier firms evaluates 3 dimensions through the PEI: leadership, personal impact, and the ability to overcome obstacles. The goal is not to recount your experiences — it is to demonstrate that you exhibit the behaviours characteristic of a top-tier firms consultant.</p>

<h3>The 3 Key PEI Dimensions</h3>
<p><strong>Dimension 1 — Leadership:</strong> "Tell me about a time you led people toward a common goal." top-tier firms looks for situational leadership — the ability to mobilise people without formal authority, to create alignment in complex contexts, and to maintain direction under adversity. Leadership through hierarchical position ("I was in charge of the team") is valued less than leadership through influence ("I had to convince peers who had no reason to listen to me").</p>

<p><strong>Dimension 2 — Personal impact:</strong> "What is the achievement you are most proud of?" top-tier firms looks for evidence of significant individual contribution in a real-world context — not anonymous group work. The key elements are: your specific role, the obstacle overcome, and the measurable impact you created.</p>

<p><strong>Dimension 3 — Adversity and resilience:</strong> "Tell me about a difficult situation and how you handled it." top-tier firms looks for the ability to maintain effectiveness under pressure, to make decisions under genuine uncertainty, and to learn from failure. A story without real difficulty does not answer the question.</p>

<h3>The SAI Method — Situation, Action, Impact</h3>
<p>All your PEI stories must follow the SAI structure, which is top-tier firms's version of the STAR method (Situation, Task, Action, Result).</p>
<div class="formula-box">S — Situation (20%): factual context, stakes, what was at risk
A — Action (60%): YOUR specific actions, not the group's
I — Impact (20%): measurable result + lesson learned

Total duration: 2–3 minutes per story
Recommended split: 30s Situation + 90s Action + 30s Impact</div>

<h3>The 4 Fatal PEI Mistakes</h3>
<p><strong>Mistake 1 — Using "we" instead of "I":</strong> "We managed to convince the client," "our team delivered on time." These formulations dilute your contribution. The interviewer wants to know what YOU did. Replace every "we" with "I" systematically.</p>
<p><strong>Mistake 2 — Narrating without analysing:</strong> "I did X, then Y, then Z." Without explaining why you made those choices and what you learned, the story remains anecdotal. After each significant action, explain the reasoning or decision behind it.</p>
<p><strong>Mistake 3 — A non-measurable impact:</strong> "The project went well" is not an impact. "The project was delivered 3 weeks ahead of deadline, allowing the client to launch before peak season and generate 15% additional revenue" is an impact. Always quantify.</p>
<p><strong>Mistake 4 — Adversity that is too mild:</strong> If your "difficult situation" can be resolved with common sense and no real resistance, it is not difficult enough for top-tier firms. Look for stories where you had to make decisions under genuine uncertainty, manage serious conflicts, or assume significant personal risk.</p>

<h3>Preparing Your 3 Core Stories</h3>
<p>Prepare 3 different stories that each cover one of the 3 PEI dimensions. Each story must be adaptable — a strong story can answer multiple questions depending on the angle chosen. Test each story by asking yourself: "Which top-tier firms behaviour am I demonstrating here?" If you cannot answer clearly, the story is not ready.</p>
<table class="data-table">
  <tr><th>Story</th><th>Primary dimension</th><th>Behavioural signal</th></tr>
  <tr><td>Story 1</td><td>Leadership without authority</td><td>Ability to mobilise without a title</td></tr>
  <tr><td>Story 2</td><td>Measurable individual impact</td><td>Ownership, proactivity, clear result</td></tr>
  <tr><td>Story 3</td><td>Adversity overcome</td><td>Resilience, learning, adaptation</td></tr>
</table>

<div class="warning-box"><strong>Confusing length with quality:</strong> A 5-minute story is not better than a 2-minute one — it is usually worse. top-tier firms interviewers have finite attention spans and packed schedules. A 2–3 minute story with a clear impact and a lesson learned is perfect. Beyond 4 minutes, you lose the interviewer.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The sentence that transforms a good PEI story into an excellent one is the lesson sentence: "What I learned from this experience is [a specific, non-trivial insight]." This sentence proves that you do not simply recount the past, but analyse your experiences to extract actionable principles — exactly what top-tier firms consultants do in their daily work.</div>`);

patchFiche('CAT-06', 'F-053', 'Managing Stress and Uncertainty in Interviews', `
<p>The top-tier firms interview is designed to put candidates under controlled pressure. Interviewers observe not only the quality of your answers but also your behaviour under uncertainty: how do you react when you do not know? When the interviewer challenges your answer? When data seems inconsistent? These stress behaviours are predictive of your effectiveness on an actual engagement.</p>

<h3>The 4 Typical Stress Situations and How to Handle Them</h3>
<p><strong>Situation 1 — You do not know the answer:</strong> The normal reaction is to panic or bluff. The top-tier firms reaction is to decompose the problem out loud. "I do not have the answer directly, but here is how I would build it…" followed by a structured line of reasoning is worth far more than a confident but incorrect answer.</p>

<p><strong>Situation 2 — The interviewer challenges your recommendation:</strong> Do not cave immediately if you believe you are right — but do not defend an irrational position either. The ideal response: "That is a fair challenge. My recommendation rests on [assumption X]. If that assumption is wrong, I would revise toward [Y]. Could you tell me which part you find insufficiently grounded?" This response demonstrates both confidence and genuine openness to feedback.</p>

<p><strong>Situation 3 — You make a calculation error:</strong> Announce it immediately. "I realise I made an error in my calculation. The correct figure is X, which slightly changes my conclusion: [implication of the correction]." Correcting an error calmly and cleanly is a positive signal — it shows you are self-critical and capable of maintaining analytical quality under pressure.</p>

<p><strong>Situation 4 — You need time to think:</strong> It is entirely acceptable to take 15–30 seconds of silence to structure your thinking before responding. Signal it: "Give me a moment to organise my answer." An active silence (visible reflection) is valued; a passive silence (looking lost) is not.</p>

<h3>Managing Pace — Do Not Rush</h3>
<p>One of the most common mistakes under stress is to answer too quickly, before thought is organised. In a top-tier firms interview, 20 seconds of silence followed by a structured answer is infinitely more valuable than an immediate but disorganised response. Practise the habit of saying "Let me take a moment to structure my answer" and then delivering an organised response.</p>

<h3>Physical and Mental Preparation on the Day</h3>
<p>The evening before: review your 3 PEI stories and your 5 key frameworks — nothing more. The goal is not to learn new material but to consolidate what you know. Get 7–8 hours of sleep. On the day itself, arrive 15 minutes early to settle your mind. Before entering, spend 2 minutes recalling 3 experiences where you performed at your best — this "positive priming" has a measurable positive effect on cognitive performance.</p>

<div class="insight-box"><strong>top-tier firms signal:</strong> top-tier firms interviewers are themselves former candidates who went through the same process. They recognise stress and do not penalise it — they penalise how you handle it. A candidate who says "I am not sure; let me build a line of reasoning" inspires more confidence than one who invents an answer with aplomb. Analytical honesty is a core top-tier firms value.</div>`);

patchFiche('CAT-06', 'F-054', 'Digital & AI in Cases — What top-tier firms Expects', `
<p>top-tier firms has been recruiting specifically for <strong>Tech & AI</strong> roles since 2022. For these positions, candidates are expected to naturally integrate the implications of digital technologies and AI into their case analyses, without being prompted. This fiche gives you the frameworks and reference points to incorporate the digital dimension credibly and substantively into your cases.</p>

<h3>When to Integrate Digital into a Case</h3>
<p>Digital is relevant in virtually every type of case, but in different ways depending on the nature of the problem. In a profitability case, digital levers can reduce operational costs (automation, RPA), improve pricing (data-driven dynamic pricing), or unlock new revenue streams (data monetisation). In a growth case, digital is often the primary expansion lever (new channels, new markets without physical capex). In an operations case, AI can optimise demand forecasts, reduce inventory, and improve quality control.</p>

<h3>The 5 Core AI Use Cases in Business — Memorise These</h3>
<table class="data-table">
  <tr><th>Use case</th><th>Technology</th><th>Typical business impact</th></tr>
  <tr><td>Demand forecasting</td><td>Supervised ML (time series)</td><td>15–25% inventory reduction</td></tr>
  <tr><td>Fraud detection</td><td>Anomaly detection ML</td><td>30–50% loss reduction</td></tr>
  <tr><td>Customer personalisation</td><td>NLP + recommendation engines</td><td>+15–30% conversion rate</td></tr>
  <tr><td>Predictive maintenance</td><td>IoT + predictive ML</td><td>40–60% reduction in unplanned downtime</td></tr>
  <tr><td>Process automation (RPA + GenAI)</td><td>RPA + LLMs</td><td>20–40% cost reduction on repetitive tasks</td></tr>
</table>

<h3>Framing Digital Investments — The ROI Logic</h3>
<p>Recommending a digital initiative without grounding it in an ROI is insufficient. For any digital investment, articulate: the total cost (upfront investment plus recurring costs over 3–5 years), the expected benefits quantified (cost reduction or revenue uplift), the payback period, and the execution risks (is the data available? are internal skills present? is systems integration feasible?).</p>
<div class="formula-box">Digital ROI = (Benefits − Investment) / Investment
Payback period = Upfront investment / Recurring annual benefits
Note: AI benefits typically take 12–24 months to materialise
→ Use a 3-year discounted view, not gross benefits</div>

<h3>The 3 Key Questions on a Client's Digital Maturity</h3>
<p>Before recommending a digital initiative, assess your client's maturity across 3 axes. First, <strong>data</strong>: does the client have the data required for the proposed initiative? Is it clean, structured, and accessible? Second, <strong>skills</strong>: does the client have the data scientists and ML engineers to implement and maintain the solution, or is recruiting or outsourcing required? Third, <strong>organisation</strong>: are the business teams ready to work in an agile mode and adopt AI tools in their processes? A technically brilliant proof of concept that is not adopted by end users creates zero value.</p>

<div class="example-box"><strong>Example — AI integration in a food distribution case:</strong><br>
Context: distributor with 30,000 SKUs, manual demand forecasting, 8% out-of-stock rate.<br><br>
Digital recommendation: "I recommend deploying an ML forecasting engine on the 2,000 highest-volume SKUs (80% of revenue). This should reduce the out-of-stock rate from 8% to 3%, unlocking ~€2M in additional revenue and reducing safety stock by ~€5M."<br><br>
Maturity questions:<br>
→ Data: sales history exists (ERP) but data quality needs verification (discontinued SKUs, unlabelled promotions)<br>
→ Skills: no in-house data scientists → technology partner option over 12 months<br>
→ Organisation: buyers will need to change their replenishment process → training and change management included in the plan<br><br>
ROI: €1.5M investment over 18 months. Recurring benefits ~€3.5M/year. Payback ~6 months post go-live.</div>

<div class="insight-box"><strong>top-tier firms Tech & AI signal:</strong> For top-tier firms Tech & AI roles specifically, the interviewer will expect you to initiate the digital discussion yourself — without being prompted. "I would also like to explore a digital angle: in this sector, top performers use ML to optimise demand forecasting, generating 15–25% inventory gains. Has our client explored this?" This proactive initiative on the AI dimension is the strongest signal for this type of role.</div>`);

})();

