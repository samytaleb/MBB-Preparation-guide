(function() {
function patchFiche(courseId, ficheId, titleEN, contentEN) {
  var cat = DATA.courses.find(function(c) { return c.id === courseId; });
  if (!cat) return;
  for (var i = 0; i < cat.submodules.length; i++) {
    var f = cat.submodules[i].fiches.find(function(x) { return x.id === ficheId; });
    if (f) { if (titleEN) f.title_en = titleEN; if (contentEN) f.content_en = contentEN; return; }
  }
}

// CAT-01 category title
DATA.courses.forEach(function(c) { if (c.id === 'CAT-01') { c.title_en = 'Fundamentals & Mindset'; c.submodules.forEach(function(sm) { if (sm.id === 'CAT-01-01') sm.title_en = 'Consultant Mindset'; if (sm.id === 'CAT-01-02') sm.title_en = 'top-tier firms Fundamentals'; }); } });
// CAT-02 category title
DATA.courses.forEach(function(c) { if (c.id === 'CAT-02') { c.title_en = 'Structuring & Frameworks'; c.submodules.forEach(function(sm) { if (sm.id === 'CAT-02-01') sm.title_en = 'Issue Tree & MECE'; if (sm.id === 'CAT-02-02') sm.title_en = 'Standard Frameworks'; }); } });

// ── CAT-01 ──────────────────────────────────────────────────────────────────

patchFiche('CAT-01', 'F-001',
  'Hypothesis-Driven Thinking',
  `
<p><strong>Hypothesis-driven thinking</strong> is top-tier firms's most fundamental analytical skill — and the one interviewers begin evaluating within the first seconds of a case. Instead of classical inductive reasoning (collect all available data, then derive a conclusion), the hypothesis-driven approach starts with a provisional answer and mobilizes targeted analyses to confirm or disprove it. This seemingly simple inversion completely transforms how you structure a case and the value you deliver with every minute of analysis.</p>

<p>This approach is not a methodological trick invented for interviews: it reflects the daily reality of consulting work. A top-tier firms team has six to twelve weeks to solve problems that companies have not managed to solve in months or years. In this context of constrained time and high stakes, waiting until all data is collected before forming a view is not viable. The initial hypothesis enables prioritization of analytical effort: you only analyze what can change the final decision. Everything else is noise that consumes time and energy without delivering value.</p>

<p>In a case interview, this principle applies even more strictly. You have 35 to 45 minutes, not six weeks. Every minute spent on a branch that leads nowhere is a minute wasted. The interviewer is evaluating your ability to choose <em>where to dig</em> and <em>why</em> — not just your ability to structure a problem exhaustively. A candidate who explores all branches of their tree equally, without a guiding hypothesis, gives an impression of rigor but reveals reactive rather than proactive thinking.</p>

<h3>The structure of hypothesis-driven reasoning</h3>
<div class="formula-box">EXHAUSTIVE APPROACH (avoid in consulting)
Question → Massive data collection → Analyze everything → Late conclusion

HYPOTHESIS-DRIVEN APPROACH (top-tier firms)
Question → Initial hypothesis → Targeted tests → Update hypothesis → Conclusion

FUNDAMENTAL RULE: The initial hypothesis is a BEST PROVISIONAL VIEW — not a definitive answer.
It may be wrong. What matters is that it intelligently directs your analyses.
A consultant who is wrong early but revises correctly is worth more than one who collects
all data without ever committing to a view.</div>

<h3>How to form a solid initial hypothesis</h3>
<p>A strong initial hypothesis meets three precise criteria. First, it is <strong>specific and falsifiable</strong>: "profitability declined" is not a hypothesis — it is the problem itself. "The profitability decline is primarily driven by average selling price erosion, not offset by volume growth" is a hypothesis, because you can design an analysis that confirms or refutes it. Second, it is <strong>grounded in explicit reasoning</strong>: "I believe this because the prompt mentions a mature market with recent new low-cost entrants, suggesting price pressure rather than a drop in total demand." Third, it is <strong>stated as provisional</strong>: announcing your hypothesis with the words "my initial hypothesis, which will need to be validated, is that…" signals to the interviewer that you have a view without being dogmatic.</p>

<p>In practice, forming a good initial hypothesis rests on a rapid three-step reasoning sequence. <strong>First step:</strong> identify the type of problem — profitability, growth, operational, M&A — to activate the right analytical register. <strong>Second step:</strong> mobilize your knowledge of the sector and the elements given in the prompt to identify the one or two most probable causes. <strong>Third step:</strong> formulate a hypothesis that links the symptom (the profit decline) to the probable cause (price pressure), with an explicit mechanism (new entrants forced a price decrease not offset by additional volumes).</p>

<h3>How to test a hypothesis in a targeted way</h3>
<p>Testing a hypothesis does not mean looking for data that confirms it — that is confirmation bias, which top-tier firms detects immediately. Testing a hypothesis means designing an analysis that could equally disprove it. For each hypothesis, ask yourself: "What data, at a specific value, would definitively invalidate this hypothesis?" That is the data you request first from the interviewer.</p>

<p>For example: if your hypothesis is "the profit decline comes from average selling price erosion," the critical data point is the average selling price evolution over 3 years. If the price is stable, the hypothesis is disproved and you must revise toward a cost increase or volume decline. If the price fell, the hypothesis is partially confirmed and you then quantify the impact of this decline on total profit before moving to the cost side to check for additional aggravating factors.</p>

<h3>Updating the hypothesis — the learning cycle</h3>
<p>Hypothesis-driven thinking requires <strong>continuous revision</strong> of your hypothesis as you receive new information. Each data point should either reinforce or partially invalidate your hypothesis, and you must announce this explicitly out loud to the interviewer. This behavior — publicly updating your hypothesis — is one of the strongest signals of a consultant mindset. It shows you are actively integrating information rather than passively collecting it.</p>

<h3>Full example — fast-food chain profitability case</h3>
<div class="example-box"><strong>Prompt:</strong> "A fast-food chain's profit fell 20% over two years despite 5% revenue growth. What is happening?"<br><br>

<strong>Step 1 — Initial hypothesis formulation:</strong><br>
"My initial hypothesis: a profit decline despite rising revenues indicates costs growing faster than revenues. In the 2022–2024 inflationary context and given that restaurants are labor-intensive and dependent on food raw materials, I suspect primarily variable cost overruns — labor and food costs. I will first check gross margin evolution to isolate the variable cost impact."<br><br>

<strong>Step 2 — Testing the hypothesis:</strong><br>
"To test this hypothesis, I need gross margin evolution over the 2 years. If gross margin fell, variable costs grew faster than revenue — this confirms my hypothesis. If gross margin is stable, the problem lies in fixed charges — this disproves it."<br>
Interviewer replies: "Gross margin remained stable at 62%."<br><br>

<strong>Step 3 — Updating the hypothesis:</strong><br>
"Interesting — this data disproves my first hypothesis. A stable gross margin means variable costs did not drift. I am revising: the profit decline comes from fixed charges or depreciation. In a context of network expansion, fixed charge growth — new openings, rents, depreciation — is the most probable cause. I will now request fixed charge evolution and number of new openings."<br><br>

<strong>Step 4 — Second test and conclusion:</strong><br>
Interviewer confirms 15 new openings, increasing fixed charges by 28% while revenue grew only 5%.<br>
"My conclusion: the profitability decline is almost entirely explained by aggressive network expansion that inflated fixed charges (+28%) not offset by revenue growth (+5%). The diagnosis is a growth framing problem, not operations. I would recommend analyzing unit-level profitability of new openings before any further expansion decision."</div>

<h3>Comparison — exhaustive vs hypothesis-driven approach</h3>
<table class="data-table">
  <tr><th>Criterion</th><th>Exhaustive approach</th><th>Hypothesis-driven approach</th></tr>
  <tr><td>Starting point</td><td>Data collection</td><td>Hypothesis formulation</td></tr>
  <tr><td>Direction of analysis</td><td>All branches equally</td><td>Critical branches first</td></tr>
  <tr><td>Time to identify root cause</td><td>25–35 min in a 40 min case</td><td>12–18 min in a 40 min case</td></tr>
  <tr><td>Primary risk</td><td>Running out of time for synthesis</td><td>Incorrect initial hypothesis (acceptable)</td></tr>
  <tr><td>Signal sent to interviewer</td><td>Organized but passive</td><td>Organized AND proactive</td></tr>
  <tr><td>Adaptability to new data</td><td>Low (following the structure)</td><td>High (updating the view)</td></tr>
  <tr><td>Typical top-tier firms score</td><td>Average (3/5) — "methodical but no insight"</td><td>High (4–5/5) — "clear strategic thinking"</td></tr>
</table>

<h3>The 3 signals the interviewer is looking for precisely</h3>
<p>In practice, a top-tier firms interviewer looks for three precise behaviors linked to hypothesis-driven thinking. <strong>First signal — Initial hypothesis stated before requesting data:</strong> you announce your hypothesis within the first 2–3 minutes after structuring, before asking for any exhibit or figure. This shows you think before analyzing — not that you wait for data to form a view. <strong>Second signal — Reasoned prioritization:</strong> you explicitly justify why you are exploring one branch before another. The sentence "I start with revenues because my hypothesis points to price erosion" is exactly what the interviewer wants to hear. <strong>Third signal — Updates announced out loud:</strong> when an analysis yields new information, you explicitly state how this modifies your hypothesis. This behavior shows you are actively integrating information.</p>

<div class="warning-box"><strong>The 3 most frequent mistakes:</strong><br>
1. <strong>The "parachute framework":</strong> Presenting a perfect MECE structure, then analyzing each branch equally and sequentially, without ever formulating a guiding hypothesis. top-tier firms immediately detects this pattern and penalizes it, even when the structure is technically correct. A candidate "checking boxes" without a guiding view is eliminated before a candidate whose hypothesis is incorrect but reasoned.<br>
2. <strong>The overly vague hypothesis:</strong> "My hypothesis is that it's a cost problem" is not hypothesis-driven thinking — it is a restatement of the symptom. A real hypothesis identifies the precise mechanism: "My hypothesis is that labor costs grew faster than revenue due to a minimum wage increase and the addition of 15 new store openings."<br>
3. <strong>Clinging to the hypothesis when faced with data:</strong> Defending a hypothesis against data that clearly disproves it is perceived as a lack of intellectual rigor. top-tier firms values the ability to change view rapidly based on facts. The sentence "this data disproves my initial hypothesis — I am revising toward…" is a strong positive signal.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Candidates who pass top-tier firms rounds often have an incorrect initial hypothesis — and that is expected. What distinguishes them is that they <em>know</em> it may be wrong, state it as such ("my initial hypothesis, which will need to be validated…"), and update it without resistance as soon as data demands it. The interviewer is evaluating your <em>reasoning process</em>, not your ability to be right the first time. An incorrect hypothesis correctly updated is a stronger signal than a correct hypothesis held rigidly against contradicting data.</div>`
);

patchFiche('CAT-01', 'F-002',
  'Answer First — The Minto Pyramid',
  `
<p>The <strong>Answer First</strong> principle, formalized by Barbara Minto during her time at top-tier firms in the 1970s and theorized in <em>The Pyramid Principle</em>, is the most important communication rule in consulting. The core idea: every effective communication begins with the conclusion, then descends to the supporting arguments, and ends with the data underpinning each argument. This pyramid structure is the exact inverse of how most people naturally communicate.</p>

<h3>Why we naturally communicate in reverse</h3>
<p>Natural communication follows the path of thinking: "I analyzed X, then Y, then Z, and therefore concluded that..." This is logical for the person who did the work, but exhausting for the listener. In a professional context where the recipient has little time and much information to process, this approach forces them to wait until the very end to grasp the point. A top-tier firms partner presenting to a CEO cannot afford this structure: if the CEO is interrupted after 30 seconds, nothing has been retained.</p>

<h3>The pyramid structure</h3>
<div class="formula-box">LEVEL 1 — ANSWER (the conclusion / recommendation)
  LEVEL 2 — ARGUMENTS (the 2–4 main supporting reasons)
    LEVEL 3 — EVIDENCE (data, analyses, examples)
      LEVEL 4 — DETAILS (if needed)</div>

<p>At each level, elements must satisfy two logical rules. The <strong>grouping rule</strong>: elements at the same level belong to the same logical category. The <strong>summarization rule</strong>: all elements at a given level, taken together, logically imply the element at the level above — every argument must "support" the conclusion above it.</p>

<h3>Applying Answer First orally in a case (60 seconds)</h3>
<div class="example-box"><strong>Context:</strong> You have just analyzed a profitability decline and must synthesize your findings.<br><br>
<strong>Bottom-up communication (avoid):</strong> "We first looked at revenues — they increased by 5%. Then we analyzed costs — labor rose 18%, energy 22%. We also looked at competition and the market. In conclusion, profitability fell because of costs."<br><br>
<strong>Answer First communication:</strong> "My conclusion: the profitability decline is almost entirely explained by a rise in operating expenses, primarily labor (+18%) and energy (+22%), not offset by revenue growth (+5%). I recommend addressing these two cost drivers as a priority through [specific actions]."</div>

<h3>Answer First in top-tier firms slides</h3>
<p>In top-tier firms practice, the Answer First principle translates directly into slide formatting. Each slide carries an actionable title that states the conclusion of the slide, not merely its subject. This convention — part of the <strong>SCQ</strong> (Situation–Complication–Question) framework for structuring a deck — means every slide title announces its finding, not its topic.</p>
<table class="data-table">
  <tr><th>Descriptive title (avoid)</th><th>Answer First title (use)</th></tr>
  <tr><td>Revenue Trend 2022–2024</td><td>Revenues fell 15% driven by systematic price erosion</td></tr>
  <tr><td>Competitive Analysis</td><td>3 new low-cost entrants captured 8 pts of market share</td></tr>
  <tr><td>Strategic Options</td><td>Portfolio restructuring is the only viable option within 18 months</td></tr>
</table>

<h3>The 3 logical orders in the pyramid</h3>
<p>Barbara Minto distinguishes three types of logical order for Level 2 arguments. <strong>Deductive order</strong>: each argument follows from the previous one (if A and B, then C). <strong>Inductive order</strong>: arguments are independent examples that generalize to the conclusion. <strong>Chronological order</strong>: arguments follow a temporal sequence. In case interviews, the most common order is inductive: "For three independent reasons, I recommend X. First... Second... Third..."</p>

<div class="warning-box"><strong>The "false Answer First" trap:</strong> Starting with "I think that..." followed by hesitation or a vague list is not Answer First. The conclusion must be precise, quantified where possible, and immediately followed by 2–3 main arguments. "I think the issue is costs" is too vague — "EBITDA margin fell 8 points, primarily driven by a labor cost increase representing 65% of the total gap" is a genuine Answer First conclusion.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In a top-tier firms case, your ability to be Answer First shows from the very first sentence of your synthesis. Interviewers immediately distinguish between a candidate who "narrates" and one who "concludes." If your opening synthesis sentence is not a recommendation or conclusion, you lose points immediately. Train yourself to begin every synthesis with an action infinitive or a strong noun: "Recommendation: reduce...", "Conclusion: the decline stems from...", "Key takeaway: three initiatives enable..."</div>`
);

patchFiche('CAT-01', 'F-003',
  'MECE — Mutually Exclusive, Collectively Exhaustive',
  `
<p><strong>MECE</strong> — Mutually Exclusive, Collectively Exhaustive — is the acronym that defines the quality of an analytical structure in consulting. A breakdown is MECE when each element belongs to one and only one category (Mutually Exclusive — no overlap), and when all categories together completely cover the problem (Collectively Exhaustive — no gaps). This principle, developed at top-tier firms by Barbara Minto in the 1970s, became the foundation of all rigorous structuring in strategy consulting. It applies to organizing a presentation, decomposing a problem into analytical branches, and formulating an action plan.</p>

<p>Understanding MECE goes beyond memorizing an acronym: it is a way of thinking that guarantees your analysis will not create confusion (overlap) and will not miss any important angle (gap). In a case interview, a top-tier firms interviewer instantly evaluates whether your structure is MECE. A non-MECE structure reveals either a lack of logical rigor or an insufficient grasp of the problem. Conversely, a clearly MECE structure — announced and justified as such — signals disciplined and rigorous thinking.</p>

<p>The practical difficulty is that MECE seems simple in theory but is hard to apply rigorously under pressure. Almost all poor structures in interviews suffer from a MECE problem — either an overlap (the same reality can belong to two categories) or a gap (an important aspect is not covered by any category). Recognizing these flaws in your own structure, in real time, is a skill built through repeated practice.</p>

<h3>Testing the ME property — Mutually Exclusive</h3>
<p>To check whether a structure is mutually exclusive, take a concrete representative case and ask: "Could this specific case belong to two different categories?" If yes, your categories overlap and the structure is not ME. Verification must be done with real examples, not abstractly. For example, if you split an e-retailer's problems into "product problems" and "pricing problems," the test question is: "A poorly positioned product whose price is too high for the target segment — does it belong to product or pricing?" The answer is "both" — so the structure is not ME on this point.</p>

<h3>Testing the CE property — Collectively Exhaustive</h3>
<p>To check whether a structure is collectively exhaustive, ask: "Is there any important aspect of the problem that doesn't belong to any of my categories?" Again, verification must be concrete. If you split a bank's customers into "retail" and "small business," the test question is: "Are there customers who are neither retail nor small business?" The answer is "yes: large corporations, institutional investors, local governments" — so the structure is not CE.</p>

<div class="formula-box">THE 4 TYPES OF MECE DECOMPOSITIONS IN CONSULTING

Type 1 — Mathematical or accounting identity decomposition
Example: Profit = Revenue − Costs | Revenue = Volume × Price
Advantage: MECE by construction, indisputable
Ideal use: profitability, revenue growth, cost optimization

Type 2 — Mutually exclusive segment decomposition
Example: Customers = B2B companies + B2C individuals + Public sector
Advantage: covers entire scope if definitions are precise
Ideal use: customer segmentation, geographic analysis, channel analysis

Type 3 — Sequential process steps decomposition
Example: Value chain = Sourcing → Production → Distribution → After-sales
Advantage: reflects operational sequence, steps non-overlapping by nature
Ideal use: operational cases, supply chain, digital transformation

Type 4 — Time horizon decomposition
Example: Actions = Short-term (0–6 months) + Medium-term (6–18 months) + Long-term (18 months+)
Advantage: clearly bounded axes, non-overlapping if thresholds are precisely defined
Ideal use: action plans, strategic roadmaps, initiative prioritization</div>

<h3>The 7 classic MECE structures in consulting</h3>
<table class="data-table">
  <tr><th>Structure</th><th>Typical decomposition</th><th>Use case</th><th>ME or CE risk</th></tr>
  <tr><td>Profit = Revenue − Costs</td><td>Revenue / Costs</td><td>Any profitability case</td><td>None if P&amp;L properly defined</td></tr>
  <tr><td>Revenue = Volume × Price × Mix</td><td>Volume / Price / Mix</td><td>Revenue growth, pricing</td><td>Verify mix is separated from price</td></tr>
  <tr><td>Geographic</td><td>Domestic / Europe / Rest of world</td><td>Geographic expansion</td><td>Define boundaries clearly (e.g. overseas territories?)</td></tr>
  <tr><td>Product or product line</td><td>Line A / Line B / Line C</td><td>Product portfolio analysis</td><td>Overlap if product lines poorly delineated</td></tr>
  <tr><td>Distribution channel</td><td>Direct / Indirect / Marketplace / E-commerce</td><td>Go-to-market, commercial strategy</td><td>Multi-channel customers → possible overlap</td></tr>
  <tr><td>Customer segment</td><td>B2B SME / B2B Large accounts / B2C / Public</td><td>Commercial strategy, pricing</td><td>"B2B" covers SMEs and large accounts with very different logic</td></tr>
  <tr><td>Value chain</td><td>Upstream / Production / Logistics / Downstream / After-sales</td><td>Operational cases, supply chain</td><td>Sector-dependent — always adapt to each case</td></tr>
</table>

<h3>MECE does not mean "list everything"</h3>
<p>A frequent error is confusing MECE with exhaustivity in the colloquial sense — "having many branches shows I covered everything." This is wrong. A MECE breakdown can have just two branches, and that is often preferable. "Fixed costs / Variable costs" is perfectly MECE with two categories. Adding a third "semi-variable costs" category would be potentially non-ME (overlap risk with the first two) and non-CE if "semi-variables" don't constitute a clearly delineable set. In consulting, clarity and parsimony always win over length: a 2–3 branch structure with well-defined boundaries is more actionable than an 8-branch structure with vague delimitations.</p>

<h3>Full example — building a MECE structure for an automotive case</h3>
<div class="example-box"><strong>Problem:</strong> "An automotive manufacturer's French sales fell 12% over 2 years. Why?"<br><br>

<strong>Non-MECE structure — overlap problem:</strong><br>
Sales → (1) Market problems / (2) Product problems / (3) Distribution problems / (4) Pricing problems<br>
Flaw: A pricing problem can simultaneously be a "market" issue (competition is cutting prices), a "product" issue (price positioning is wrong), and a "distribution" issue (dealers are offering too many discounts). Categories 1, 2, and 4 overlap on the pricing dimension → non-ME.<br><br>

<strong>MECE structure using a mathematical identity:</strong><br>
Sales = Number of vehicles × Average selling price per vehicle<br><br>
Branch A — Number of vehicles:<br>
→ A1: Total market demand volume trend (overall market health)<br>
→ A2: Our client's market share trend (relative competitiveness)<br><br>
Branch B — Average selling price per vehicle:<br>
→ B1: Product mix shift (share of premium vs entry-level models)<br>
→ B2: Facial price per model trend (pricing policy)<br>
→ B3: Commercial discounts granted by dealers<br><br>
ME check: A vehicle sold belongs either to Branch A (how many) or Branch B (at what average price). The two branches don't overlap by definition — volume and price are independent variables in the revenue identity.<br>
CE check: Any revenue variation comes from either a volume change or a price change, or a combination. There is no third source of revenue variation → CE by construction of the identity.<br><br>

<strong>Guiding hypothesis:</strong> "In a French automotive market stagnating at −3% (2022–2023), our client's −12% decline suggests a relative market share loss of approximately −9 points. I will prioritize Branch A2 to understand why our client is losing competitiveness — poorly adapted models, failing dealer network, or incorrect price positioning."</div>

<div class="warning-box"><strong>The 3 most frequent non-MECE structures in interviews:</strong><br>
1. <strong>"Internal factors / External factors":</strong> Appealing because it is easy to remember, but rarely MECE. A product's price is simultaneously an internal decision and a response to external competitive pressure. Regulation is external but determines internal compliance costs. This structure systematically generates overlaps — avoid it or very precisely define what goes in each category before announcing it.<br>
2. <strong>Time horizons without defined thresholds:</strong> "Short-term / Medium-term / Long-term" without definitions is non-ME. If you don't specify that "short-term = 0–6 months, medium-term = 6–18 months, long-term = beyond 18 months," your categories are vague and an action lasting 8 months could belong to either of the first two.<br>
3. <strong>Catch-all structures with 5+ branches:</strong> "Customers / Products / Operations / Finance / HR" seems exhaustive but is generally not ME — a productivity problem can be simultaneously operational and HR. Always prefer a decomposition grounded in a robust logical identity (accounting, mathematical, or sequential).</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> When presenting your structure, explicitly show that you verified its MECE property. The sentence "I structured my analysis into revenues and costs — these two branches are mutually exclusive because no cash flow can simultaneously be a revenue and a cost in the P&L, and collectively exhaustive because Profit = Revenue − Costs by accounting identity" takes 12 seconds and immediately signals strong analytical rigor. You don't need to use all seven structures from the table — choose the one that best fits the specific case and demonstrate that you thought about its logical soundness.</div>`
);

patchFiche('CAT-01', 'F-004',
  'The 5 Phases of a top-tier firms Case Interview',
  `
<p>A top-tier firms case interview typically lasts 45 to 55 minutes and follows a relatively consistent five-phase structure from one interviewer to another. This structure is not coincidental: it reflects the real problem-solving process top-tier firms uses with clients, condensed into the constrained format of an interview. Understanding this structure — and knowing precisely what the interviewer evaluates in each phase — matters as much as mastering analytical frameworks. Candidates who fail often spend too long in phase one or skip directly to phase three, signaling a lack of disciplined method rather than intelligence.</p>

<p>Each phase has a distinct objective, a precise expected behavior, and characteristic errors. It is possible to excel in some phases and be weak in others: a candidate can be brilliant in quantitative analysis but formulate a vague recommendation, losing points they had earned through rigorous analysis. top-tier firms's evaluation is multi-dimensional — each phase is scored independently. "Great analysis but weak recommendation" is a real reason for rejection in round two.</p>

<p>This sheet gives you the precise breakdown of each phase: typical duration, objective, expected behavior, and errors to avoid. After mastering the theory, practice cases while timing each phase to develop your temporal intuition — time management is a distinct skill acquired only through repeated practice.</p>

<h3>Overview — the 5 phases and what the interviewer evaluates</h3>
<table class="data-table">
  <tr><th>Phase</th><th>Duration</th><th>Objective</th><th>What the interviewer evaluates precisely</th></tr>
  <tr><td>1. Clarification</td><td>2–4 min</td><td>Frame the problem precisely</td><td>Question relevance, prioritization, active listening, operating under ambiguity</td></tr>
  <tr><td>2. Structuring</td><td>3–5 min</td><td>Build a MECE tree with guiding hypothesis</td><td>MECE, decomposition logic, initial hypothesis, branch prioritization</td></tr>
  <tr><td>3. Analysis</td><td>20–30 min</td><td>Explore branches, analyze data, calculate</td><td>Quantitative rigor, hypothesis-driven approach, data management, analytical agility</td></tr>
  <tr><td>4. Synthesis</td><td>2–3 min</td><td>Summarize key findings Answer First</td><td>Conciseness, Answer First, selection of relevant insights, narrative thread</td></tr>
  <tr><td>5. Recommendation</td><td>2–3 min</td><td>Formulate a final actionable recommendation</td><td>Decision clarity, specificity, realism, risk management, next steps</td></tr>
</table>

<h3>Phase 1 — Clarification (2–4 minutes)</h3>
<p>Clarification is the first observable phase and it begins the moment the interviewer finishes the prompt. Its objective is twofold: ensure you are solving the right problem, and demonstrate you are operating deliberately rather than reactively. A candidate who dives into structuring immediately — without asking a single question — signals they have not internalized the importance of framing. A senior consultant, before any analysis, always ensures first that they are working on the right problem.</p>

<p>Effective clarification questions address four axes. The <strong>quantified objective and time horizon</strong>: "when you say improve profitability, do you have a specific target — for example +5 EBITDA margin points — and over what timeframe?" This question is critical because it calibrates the ambition of your recommendations and the required depth of analysis. The <strong>scope</strong>: "does this concern the entire group or a specific division?" The <strong>temporal context</strong>: "how long have you observed this trend — is this a recent or long-standing deterioration?" The <strong>known constraints</strong>: "are there regulatory, financial, or organizational constraints to factor in from the start?" Choose 2 to 3 questions from these axes — never more, as excess questions signal inability to operate under ambiguity.</p>

<h3>Phase 2 — Structuring (3–5 minutes)</h3>
<p>Structuring is the most discriminating phase of the interview. The interviewer gives you 1 to 2 minutes of silent reflection. During this time — which you spend writing on paper — you must accomplish four tasks in parallel. First, <strong>identify the case type</strong> — profitability, market entry, growth, M&A, operations — to choose the right type of decomposition. Second, <strong>formulate a guiding hypothesis</strong>: your best view on the probable cause of the problem, grounded in the prompt elements. Third, <strong>build a MECE tree</strong> with 2–3 branches and a clear, verifiable logic. Fourth, <strong>decide which branch to explore first</strong> and justify this choice based on your hypothesis.</p>

<p>Your structure presentation must follow a precise three-part format. Hypothesis first: "My initial hypothesis is that the problem lies in costs, because the prompt mentions stable revenue growth but a profit decline." Structure second: "I will structure into two branches — revenues and costs — MECE by the identity Profit = Revenue − Costs." Prioritization last: "I will start with costs since that is where my hypothesis points directly. Does that approach work for you?"</p>

<div class="formula-box">STRUCTURE ANNOUNCEMENT FORMAT IN PHASE 2 (30 seconds)

HYPOTHESIS: "My initial hypothesis is [X] because [reason drawn from prompt]."
STRUCTURE: "I will structure into [2–3 MECE branches], which are [ME because…] and [CE because…]."
PRIORITIZATION: "I will start with [branch] because it most directly tests my hypothesis."
VALIDATION: "Does that approach work for you?"

→ Total: 25–35 seconds
→ Never present structure without hypothesis
→ Never present hypothesis without the prioritization it leads to</div>

<h3>Phase 3 — Analysis (20–30 minutes)</h3>
<p>The analysis phase is the longest and most technical. It should not be a linear exploration of your tree — it must be guided by your hypothesis. For each branch you explore, follow a four-step process that you repeat until identifying the root cause or approaching the end of available time.</p>

<p><strong>Step A — Ask a targeted question and justify it:</strong> announce what you're looking for and why, before requesting data. "To validate my hypothesis about price pressure, I need average selling price evolution by segment over the last 3 years. Is that available?" This formulation shows you have a direction — you are not waiting for data to decide where to go.</p>
<p><strong>Step B — Analyze the data received:</strong> never read a number out loud without analyzing it immediately. Calculate ratios, compare to benchmarks, identify the anomaly. "€40M revenue, 30% gross margin so €12M. That is 3 points below the sector benchmark of 33% — a signal that something eroded the gross margin."</p>
<p><strong>Step C — Mini-synthesis:</strong> conclude each branch analysis with a sentence that updates your hypothesis. "This confirms my hypothesis about variable cost drift" or "This disproves my hypothesis — I need to revise toward fixed charges."</p>
<p><strong>Step D — Announced transition to next branch:</strong> before requesting data on the next branch, announce your intent. "I will now explore fixed charges to understand whether network expansion explains the remaining gap."</p>

<h3>Phase 4 — Synthesis (2–3 minutes)</h3>
<p>Synthesis occurs when the interviewer asks "can you summarize your analysis?" or when you are 5 minutes from the end. It must strictly follow the Answer First structure. Start with the main conclusion, give 2–3 quantified proofs next, then transition to the recommendation. Maximum 90 seconds. Never recap your process — never say "first I looked at revenues, then costs…" Select the 2–3 critical insights and synthesize them into one coherent argument. "The margin decline comes 75% from fixed charge overrun linked to network expansion (+28% charges for +5% revenue), and 25% from slight average price erosion driven by competitive intensification."</p>

<h3>Phase 5 — Recommendation (2–3 minutes)</h3>
<p>The recommendation is distinct from the synthesis: it is action-oriented and forward-looking. It answers "what should the client do now?" rather than "what did we find?" Standard top-tier firms format: main recommendation in one sentence first, then 2–3 concrete initiatives in priority order, each with a quantified impact, a timeline, and the primary risk. A strong top-tier firms recommendation is specific (which exact lever), quantified (what order of magnitude), prioritized (in what order), and realistic (with what constraints).</p>

<h3>Example — complete structure announcement in Phase 2</h3>
<div class="example-box"><strong>Context:</strong> Profitability case. Food distributor's net margin dropped from 4% to 1% in 2 years.<br><br>
<strong>Clarification (Phase 1):</strong><br>
"Before structuring, two questions. First, does this decline concern the whole group or a division?" [Reply: whole group.] "Second, do you have a margin recovery target, or is the goal first to diagnose?" [Reply: diagnosis.]<br><br>
<strong>Structure announcement (Phase 2):</strong><br>
"Here is my approach. My initial hypothesis: a 3-point net margin drop for a food retailer in an inflationary 2022–2024 context suggests operating cost growth outpacing revenue — specifically purchasing costs (food inflation) and labor costs (minimum wage increases).<br>
I will structure into two MECE branches: first revenues — does the decline come from volume, price, or product mix; second costs — have costs increased structurally?<br>
I will start with costs since my hypothesis points there directly. If gross margin fell, variable costs are the culprit. If gross margin is stable, the problem is in fixed charges — I look for unprofitable expansion or overhead growth. Does that approach work for you?"<br><br>
<em>Total time: 45 seconds. The interviewer heard a hypothesis, a MECE structure, and a reasoned priority.</em></div>

<div class="warning-box"><strong>The 3 costliest mistakes:</strong><br>
1. <strong>Skipping Phase 2:</strong> Entering Phase 3 directly — "Let me start by looking at revenues…" — without having presented a structure. The interviewer cannot tell whether you have an overall view or are flying blind. Even 3 minutes of formal structuring makes a considerable difference in how your methodological rigor is perceived.<br>
2. <strong>Analyzing without announcing in Phase 3:</strong> Exploring a branch without stating what you're looking for and why is perceived as blind data collection. Before each analysis, the interviewer must understand which hypothesis you're testing and why that branch is a priority.<br>
3. <strong>Vague recommendation in Phase 5:</strong> "I recommend reducing costs and increasing revenues" is not a recommendation — it is a restatement of the problem. A genuine top-tier firms recommendation is specific (which cost lever exactly), quantified (estimated savings potential), prioritized (in what temporal order), and realistic (mentioning obstacles and risks).</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> A top-tier firms interviewer evaluates your performance against a scoring grid that maps exactly to these 5 phases — each phase is graded independently. Here is what interviewers say in selection committees about the most discriminating elements: the quality of prioritization in Phase 2 (does the candidate have a hypothesis or do they conduct an inventory?), the rigor of calculations in Phase 3 (do they contextualize against benchmarks?), and the clarity of the recommendation in Phase 5 (do they make a real decision or stay vague?). Never relax your effort in the last 3 minutes of the case — that is often where the decision to advance to the next round is made.</div>`
);

patchFiche('CAT-01', 'F-005',
  'Clarification Questions — Method and Examples',
  `
<p>Asking the right clarification questions at the start of a case is a strong signal of professional maturity. A junior consultant jumps into the problem; a senior consultant first ensures they are working on the right problem. top-tier firms evaluates your ability to frame the problem before solving it, because in real practice, a poorly defined problem consistently leads to unusable recommendations.</p>

<h3>The 4 priority clarification axes</h3>
<p><strong>Quantified goal and time horizon:</strong> "When you say 'improve profitability,' do you have a specific target in mind, and over what time horizon?" This question is critical because it calibrates the ambition of your recommendations. A +2 percentage point margin target over three years does not call for the same levers as a +10 percentage point target over 18 months.</p>
<p><strong>Geographic and product scope:</strong> "Does this issue concern all group activities or a specific business unit?" This question prevents you from working on an entity that is not the actual subject, or from proposing solutions applicable to too broad a perimeter.</p>
<p><strong>Temporal context:</strong> "How long have you been observing this trend?" A six-month decline does not have the same probable causes as a three-year decline.</p>
<p><strong>Known constraints:</strong> "Are there specific constraints — regulatory, financial, or organizational — that I should factor in?" This question shows you are thinking about implementation, not only analysis.</p>

<h3>The 2–3 question rule</h3>
<p>Never ask more than three clarification questions. Beyond three, the interviewer senses hesitation or a lack of confidence in your ability to operate with partial information. If you have four questions in mind, choose the two with the most impact on your structure. For the remaining questions, state assumptions explicitly and move forward: "I will assume scope is limited to the French market — correct me if that is wrong."</p>

<h3>When the interviewer does not answer</h3>
<p>Some interviewers respond "I don't have that information" or "that is for you to assume." In that case, state your assumption explicitly and continue: "In that case, I will assume the goal is to improve EBITDA margin by five points over 24 months — if this assumption is incorrect, my structure will need to be adjusted."</p>

<div class="example-box"><strong>top-tier firms formula for clarifications:</strong><br>
"Before structuring my analysis, I have two questions to ensure I frame the problem correctly. First, [question 1 with justification]. Second, [question 2 with justification]. This will allow me to [state the impact on your structure]."</div>

<div class="warning-box"><strong>Questions to avoid:</strong> Never ask a question whose answer is already in the prompt (signals inattentiveness), nor a generic question like "Can you tell me more about the company?" (signals lack of method). Every clarification question must be specific and advance your understanding of how to structure the problem.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Interviewers often score positively candidates who, after the clarification exchange, explicitly announce how the answers changed their approach: "Thank you — knowing the goal is +5 margin points over 18 months, I will focus my analysis on fast-impact levers, meaning variable costs, rather than growth initiatives which typically take longer to deliver."</div>`
);

// ── CAT-02 ──────────────────────────────────────────────────────────────────

patchFiche('CAT-02', 'F-010',
  'Building an Issue Tree — Complete Method',
  `
<p>The <strong>issue tree</strong> (also called a problem tree or logic tree) is the central structuring tool of the top-tier firms consultant. It transforms a complex question into a MECE hierarchy of sub-questions, making it possible to identify precisely which analyses will answer the original question. A well-built issue tree is both a guide for the analyst and a communication tool: it shows that you have identified all dimensions of the problem and have a logic for exploring them in the right order. It is the difference between structured exploration and intuitive exploration.</p>

<p>An issue tree follows a top-down logic: you start from the main question and decompose it into increasingly precise sub-questions until you reach "leaves" — questions precise enough to be tested with a concrete analysis executable within the time available in an interview. The quality of an issue tree is measured on two primary criteria: its MECE property (branches don't overlap and together cover the entire problem space), and its operational depth (the leaves correspond to analyses executable with data typically available in an interview).</p>

<p>It is crucial to distinguish the issue tree from two related but different tools. A <strong>memorized framework</strong> (Porter, 3Cs, 4Ps…) is a pre-built structure for a standard problem type — useful as a starting point but to be adapted systematically. A <strong>hypothesis tree</strong> starts from a provisional answer and decomposes the arguments supporting it — the top-tier firms preferred approach when you already have an early view. In practice, you combine both: start with an issue tree to delimit the problem space, then formulate a hypothesis to prioritize the branches to explore. This combination — exhaustive structure followed by hypothesis-driven prioritization — constitutes the complete top-tier firms method.</p>

<h3>The 5 construction rules of an issue tree</h3>
<div class="formula-box">RULE 1 — TOP-DOWN: start from the main question and work down
Root question → Level 1 branches → Level 2 branches → Leaves (testable analyses)
Never build bottom-up: grouping analyses into branches after the fact produces an incoherent tree

RULE 2 — MECE AT EVERY LEVEL of decomposition
ME: no branch overlaps with another branch at the same level
CE: all branches together fully cover the question at the level above
Active verification at every level — not just at level 1

RULE 3 — OPERATIONAL DEPTH of leaves
Each leaf = a testable question with a 5–10 min analysis in the interview
"Have costs increased?" is a node, not a leaf (too vague)
"Has the average hourly labor cost per restaurant increased?" is a leaf (testable)

RULE 4 — ROBUST LOGIC for every decomposition
Ideally: mathematical or accounting identity (Revenue = Volume × Price)
Acceptable: established sector decomposition (value chain)
Avoid: intuitive decomposition without explicit logical foundation

RULE 5 — DEPTH APPROPRIATE to available time
Minimum 2 levels — 1 level only is too generic to guide analysis
Maximum 3 levels at initial presentation — risk of overwhelming the interviewer
Can go to 4 levels on a priority branch during the analysis phase</div>

<h3>The 4 construction steps</h3>
<p><strong>Step 1 — Restate the root question precisely.</strong> Before drawing anything, restate the client problem as a precise question that the issue tree will answer. "Profitability declined" is not a usable root question — "Why did the French division's EBITDA margin fall by 8 points between 2022 and 2024?" is one. This restatement forces you to specify the scope (French division), the indicator measured (EBITDA margin, not net income), and the relevant period (2022–2024). A poorly stated root question contaminates the entire subsequent decomposition.</p>

<p><strong>Step 2 — First MECE decomposition (level 1).</strong> Identify 2 to 4 branches that decompose the root question in a MECE way. Search first for a decomposition grounded in a robust mathematical or accounting identity. For a profitability problem, the natural decomposition is Profit = Revenue − Costs — MECE by construction. For a revenue growth problem: Revenue = Volume × Price × Mix. If no mathematical identity applies directly, use a mutually exclusive segment decomposition (geographic, by product, by channel) while actively verifying the ME and CE properties.</p>

<p><strong>Step 3 — Go one level deeper for each branch (level 2).</strong> For each Level 1 branch, repeat the MECE decomposition. Apply the same rigor at each level: verify overlaps and gaps. Continue until the questions are "testable" — where you can imagine a concrete analysis that would provide an answer within the allotted time. In an interview, Level 2 leaves (sometimes Level 3) should each correspond to a question you can ask the interviewer and that they can answer with a number or a trend.</p>

<p><strong>Step 4 — Mark guiding hypotheses.</strong> On your tree, identify the branches that, if true, would explain most of the problem. These are your guiding hypotheses. You will test them first. This step is the link between structuring and hypothesis-driven analysis: the issue tree delimits the problem space, the guiding hypothesis directs exploration of that space.</p>

<h3>Nodes vs leaves — the critical distinction</h3>
<p>In an issue tree, a <strong>node</strong> is a branch that further decomposes into sub-branches. A <strong>leaf</strong> is a terminal branch — a question precise enough to be tested directly with concrete data. The distinction matters because it is at the leaves level that you request data from the interviewer, and at the nodes level that you announce intermediate conclusions.</p>

<p>The practical rule: if the question associated with a branch can receive very different answers depending on the lever (for example, "have costs increased?" could mean COGS, or labor costs, or fixed charges — three very different phenomena), then it is a node, not yet a leaf. If the question can only receive one concrete measurable answer (for example, "has the average hourly labor cost per store increased?" — yes or no, by how much?), then it is a leaf.</p>

<h3>Full example — issue tree built step by step for a profitability case</h3>
<div class="example-box"><strong>Root question:</strong> "Why did a food distributor's net margin fall from 4% to 1% over two years?"<br><br>

<strong>Step 1 — Level 1: accounting identity decomposition</strong><br>
Net margin = Revenue − Costs → Two distinct branches:<br>
(A) Revenue trends — (B) Cost trends<br>
Level 1 MECE check: ME because a cash flow is either revenue or a cost in the P&L. CE because Net Margin = Revenue − Costs by definition — everything is covered.<br><br>

<strong>Step 2 — Level 2: decomposing Branch A (Revenue)</strong><br>
Revenue = Volume × Price × Mix<br>
→ A1: Sales volume trend (units sold) — did we sell more or less?<br>
→ A2: Average selling price per reference trend — did we sell at a lower price?<br>
→ A3: Product mix shift — did we sell more low-margin references?<br>
Level 2-A MECE check: ME because volume, price, and mix are independent variables in the revenue identity. CE because any revenue variation comes from one of these three components.<br><br>

<strong>Step 3 — Level 2: decomposing Branch B (Costs)</strong><br>
Costs = COGS + Operating expenses<br>
→ B1: Merchandise purchasing cost trend (raw material inflation, supplier negotiations)<br>
→ B2: Labor cost trend (minimum wage increases, hiring, absenteeism)<br>
→ B3: Logistics cost trend (transport, warehouses, fuel)<br>
→ B4: Fixed charge and overhead trend (rent, depreciation, central costs)<br>
Level 2-B MECE check: ME because each cost line is distinct in the P&L. CE because these 4 lines cover a distributor's full cost structure — verify whether any exceptional item is mentioned in the prompt.<br><br>

<strong>Step 4 — Guiding hypothesis and prioritization</strong><br>
"In the 2022–2024 inflationary context, B2 (labor costs: minimum wage increase + expansion hiring) and B1 (COGS: food inflation) are the branches most likely to explain the drift. Quick estimate: if food inflation is 8% and COGS represents 50% of revenue, the impact alone is −4 margin points — explaining most of the observed decline if revenue did not grow proportionally. I prioritize B1 then B2."</div>

<h3>Types of issue trees and when to use them</h3>
<table class="data-table">
  <tr><th>Issue tree type</th><th>Decomposition basis</th><th>Use case</th><th>MECE rigor level</th></tr>
  <tr><td>Accounting (P&amp;L)</td><td>Profit = Revenue − Costs</td><td>Any profitability case</td><td>Very high — MECE by identity</td></tr>
  <tr><td>Mathematical (Revenue)</td><td>Revenue = Volume × Price × Mix</td><td>Growth, pricing</td><td>Very high — MECE by identity</td></tr>
  <tr><td>Segmental</td><td>Geographic, customer, product segments</td><td>Market entry, strategy</td><td>High if segments well defined</td></tr>
  <tr><td>Sequential process</td><td>Value chain, customer journey</td><td>Operational cases</td><td>Medium — watch for interfaces</td></tr>
  <tr><td>Hypothesis tree</td><td>Hypothesis → Arguments → Tests</td><td>All cases with guiding hypothesis</td><td>Variable — verify argument by argument</td></tr>
</table>

<div class="warning-box"><strong>The 3 most frequent errors in building an issue tree:</strong><br>
1. <strong>Copy-pasting a memorized framework without adaptation:</strong> Applying "the 4Ps" or "the 3Cs" without verifying that the decomposition is MECE and relevant for the specific case. A standard framework can be a good starting point, but some branches won't be relevant and others will need to be added. top-tier firms prefers a slightly imperfect custom structure over a standard framework recited mechanically.<br>
2. <strong>Staying at too general a level:</strong> Presenting "Revenue / Costs" as a complete structure without going to Level 2 is insufficient. The interviewer cannot give you useful data on a branch that is too abstract. The rule: every branch you present must be linkable to a concrete question you can ask within the first 5 minutes of analysis.<br>
3. <strong>Building the issue tree after starting the analysis:</strong> Starting to request data before having presented the complete tree signals you are analyzing blindly. The issue tree must be presented in full before the first data request — even if imperfect, it shows you have an overall view.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Present your issue tree out loud while simultaneously drawing it on paper. The interviewer observes your thinking process, not only the final result. Verbalize the logic of each decomposition: "I split revenue into volume, price, and mix because any revenue change necessarily comes from one of these three factors — this decomposition is MECE by the identity Revenue = Volume × Price × Mix." This verbalization of your reasoning is precisely what the interviewer is evaluating. A well-built and well-verbalized issue tree, even with an imperfect initial hypothesis, is always rated higher than a memorized framework recited without logical justification.</div>`
);

patchFiche('CAT-02', 'F-011',
  'Issue Tree vs Hypothesis Tree vs Framework',
  `
<p>There are several ways to structure a case, and the choice between them depends on the nature of the problem and the information available. Confusing these three approaches is a frequent source of disorganization in interviews. Understanding their differences allows you to select the right tool for each situation and signal analytical maturity to the interviewer.</p>

<h3>Issue Tree — the exhaustive decomposition</h3>
<p>The issue tree starts from the question and decomposes it in a MECE way without presupposing any answer. It is well-suited when the problem is open-ended, when you lack information, or when you are unfamiliar with the sector. Its advantage is being exhaustive and methodical. Its limitation is sometimes being too descriptive: it structures the problem space without actively solving it.</p>
<div class="formula-box">Issue Tree: Question → Problem dimensions → Sub-dimensions → Testable questions</div>

<h3>Hypothesis Tree — directed deduction</h3>
<p>The hypothesis tree starts from a provisional answer (a hypothesis) and decomposes it into arguments that must be validated. It is well-suited when you already have an early view on the problem — which is the norm after even a few case interviews. This is the approach top-tier firms prefers because it is more directive and demonstrates active rather than passive thinking.</p>
<div class="formula-box">Hypothesis Tree: Hypothesis → Arguments to validate → Data required → Tests</div>

<h3>Standard Framework — the memorized structure</h3>
<p>A framework is a pre-built structure suited to a standard case type. The Revenue/Cost split for profitability cases, the 3Cs (Company, Customer, Competitor) for strategy cases, or the 4Ps (Product, Price, Place, Promotion) for marketing cases are examples. Frameworks are useful as starting points but dangerous when applied without adaptation to the specific context.</p>
<div class="formula-box">Framework: Case type → Memorized structure → Adaptation to context → Analysis</div>

<h3>How to choose between the three</h3>
<table class="data-table">
  <tr><th>Situation</th><th>Recommended approach</th></tr>
  <tr><td>Unclear problem, unfamiliar sector</td><td>Issue Tree — exhaustivity before everything else</td></tr>
  <tr><td>Some data available, early intuition formed</td><td>Hypothesis Tree — focus on critical tests</td></tr>
  <tr><td>Clearly identified standard case type (e.g. pricing case)</td><td>Adapted framework + Hypothesis Tree</td></tr>
  <tr><td>Typical top-tier firms Tech &amp; AI case</td><td>Hypothesis Tree (demonstrates analytical maturity)</td></tr>
</table>

<h3>Combining the approaches in practice</h3>
<p>In a real 45-minute case, all three approaches are combined. You often start with an issue tree to map the problem space (structuring phase), then formulate a guiding hypothesis to prioritize analyses (transition to the analysis phase), and then use adapted frameworks to structure the analysis of individual branches.</p>

<div class="warning-box"><strong>The "parachute framework" trap:</strong> Applying a standard framework without adapting it to the context and without formulating a hypothesis is perceived as a lack of analytical maturity. The interviewer does not want to see whether you know Porter's Five Forces — they want to see whether you can adapt them to a specific situation and whether you have a view on what is relevant in this particular context.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In top-tier firms Tech &amp; AI interviews, candidates who succeed consistently use a hypothesis tree approach rather than a pure issue tree. Formulating a hypothesis from the outset — even an imperfect one — demonstrates active thinking and the ability to make decisions under ambiguity, which is precisely what consultants do in practice every day.</div>`
);

patchFiche('CAT-02', 'F-012',
  'The 6 Essential Frameworks',
  `
<p>A <strong>framework</strong> in consulting is an analytical structure adapted to a recurring type of problem. Knowing the six most common frameworks allows you to avoid starting from scratch on every case while demonstrating familiarity with the classic challenges top-tier firms clients face. Important caveat: a framework is not a substitute for reasoning — it is a starting point that must always be adapted to the specific context.</p>

<h3>Framework 1 — Profitability</h3>
<p>The profitability framework is the most frequently used in case interviews. It rests on the fundamental accounting identity: Profit = Revenues - Costs. Each term is then decomposed based on the sector and business model.</p>
<div class="formula-box">Profit = Revenues - Costs
Revenues = Sum of (Price_i × Volume_i) for each product or segment i
Costs = Fixed Costs + Variable Costs
Variable Costs = Unit Variable Cost × Quantity produced</div>
<p>In an interview, always begin by isolating which of the two — revenues or costs — is driving the deterioration, before digging deeper. Not jumping into costs without first verifying revenues is a basic discipline often violated by hurried candidates.</p>

<h3>Framework 2 — Market Entry</h3>
<p>This framework answers: "Should our client enter this market, and if so, how?" It is organized around three sequential and independent questions.</p>
<div class="formula-box">QUESTION 1 — SHOULD we enter?
  → Market attractiveness: size, growth, sector margins, regulatory environment
QUESTION 2 — CAN we win?
  → Sustainable competitive advantage: technology, brand, cost position, network effects
QUESTION 3 — HOW to enter?
  → Entry mode: organic build, acquisition, joint venture, license, franchise</div>
<p>The order matters: answering question 3 without answering the first two often leads to recommending entry into an attractive market where the client has no competitive advantage — a classic and costly error.</p>

<h3>Framework 3 — Growth Strategy</h3>
<p>The growth framework is often structured around the Ansoff matrix, which distinguishes four strategies based on whether products and markets are existing or new.</p>
<table class="data-table">
  <tr><th></th><th>Existing market</th><th>New market</th></tr>
  <tr><td><strong>Existing product</strong></td><td>Market penetration</td><td>Geographic expansion</td></tr>
  <tr><td><strong>New product</strong></td><td>Product development</td><td>Diversification</td></tr>
</table>
<p>Market penetration (selling more of the same product to the same customers) is always the least risky strategy. Diversification (new product on a new market) is the riskiest. In an interview, a candidate who recommends diversification without solid justification sends a warning signal to the interviewer.</p>

<h3>Framework 4 — M&amp;A</h3>
<p>The M&amp;A framework answers: "Should our client acquire this target?" It is organized around four questions that must each be addressed.</p>
<div class="formula-box">1. STRATEGY: Why acquire? What value creation logic justifies the deal?
2. VALUATION: What is the maximum price we can pay without destroying value?
3. SYNERGIES: Additional revenues + Cost savings = Total value created
4. RISKS: Cultural integration, leverage impact, regulatory approvals</div>
<p>A fundamental rule: revenue synergies (cross-sell, new market share gains) are structurally more uncertain than cost synergies (elimination of overlaps, rationalization). In an interview, discount revenue synergies by roughly 50% to reflect this uncertainty.</p>

<h3>Framework 5 — Operations</h3>
<p>The operations framework applies when the problem is improving a company's internal efficiency. It follows Porter's value chain: primary activities (production, logistics, sales) and support activities (HR, IT, procurement).</p>
<div class="formula-box">Lever 1 — Capacity: equipment utilization rates, production bottlenecks
Lever 2 — Process: waste elimination (lean), cycle time, defect rate
Lever 3 — Costs: procurement renegotiation, energy, direct labor
Lever 4 — Supply chain: inventory levels, supplier lead times, logistics cost</div>

<h3>Framework 6 — Pricing</h3>
<p>The pricing framework answers: "At what price should our client sell its product?" It distinguishes three complementary approaches that the candidate must triangulate to find the optimal price.</p>
<div class="formula-box">FLOOR: Cost of goods produced + minimum acceptable margin
CEILING: Perceived customer value = Customer benefit - Best available alternative
POSITIONING: Within the [floor, ceiling] range, consistent with desired strategic positioning

Viable price range = [cost of goods ... perceived customer value]
Optimal price = within this range, coherent with competitive positioning</div>

<div class="warning-box"><strong>The mechanical memorization trap:</strong> Knowing these six frameworks by heart but applying them without discernment is counterproductive. The interviewer immediately recognizes a candidate who is "pasting" a framework without considering its relevance. Before using a framework, ask yourself: "Is this framework suited to this specific problem? Which branches should I adapt or remove?" An imperfect but adapted framework is worth more than a perfect framework that is off-point.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The best candidates do not present a framework — they build a custom structure that resembles a standard framework, but with visible adaptations. "I will use a classic profitability structure, but I have added a product mix branch because the prompt mentions a shift toward lower-margin products — this does not appear in the standard decomposition." This capacity for deliberate adaptation is precisely what top-tier firms is looking for.</div>`
);

patchFiche('CAT-02', 'F-013',
  'Creative Brainstorming — Generating 20+ Ideas in 2 Minutes',
  `
<p>Creative brainstorming is a skill distinct from analytical structuring. In a case, it typically appears when the interviewer asks "What are all the possible reasons why..." or "List all the initiatives you might recommend to...". The goal is not to propose only perfect ideas, but to demonstrate your ability to explore a solution space broadly and rapidly, before prioritizing down to the most impactful options.</p>

<h3>The 5-axis method</h3>
<p>To generate many ideas quickly, systematically sweep through five axes of reflection. This structure guarantees you will not overlook entire categories of solutions and signals to the interviewer that your exploration is disciplined, not random.</p>
<div class="formula-box">AXIS 1 — CUSTOMER: What can the company do on the demand side? (acquisition, retention, average basket, unaddressed segments)
AXIS 2 — PRODUCT: What can the company do on the offering side? (new products, reformulation, packaging, premium/entry-level tiers)
AXIS 3 — CHANNEL: What can the company do on distribution? (new channels, digital, partnerships, internationalization)
AXIS 4 — COSTS: What can the company do on internal efficiency? (automation, renegotiation, consolidation, outsourcing)
AXIS 5 — ECOSYSTEM: What can the company do with external partners? (acquisitions, alliances, licensing, joint ventures)</div>

<h3>Guided example — "What levers can increase revenues for a hotel chain?"</h3>
<div class="example-box"><strong>Customer axis:</strong> loyalty program, acquisition through OTAs (Booking, Airbnb), targeting long-stay business travelers, commission-free direct booking incentives<br>
<strong>Product axis:</strong> upgrading select properties, adding premium services (spa, coworking), package deals (hotel plus activities), more aggressive dynamic pricing at peak demand<br>
<strong>Channel axis:</strong> mobile app with direct booking rewards, airline partnership programs, corporate B2B contracts<br>
<strong>Cost axis:</strong> pooling services across city properties (laundry, kitchen), yield management optimization tools<br>
<strong>Ecosystem axis:</strong> acquiring independent boutique hotels to densify the network, franchising the brand in new international markets<br><br>
<strong>Total:</strong> approximately 18 ideas generated in about 90 seconds</div>

<h3>How to present the result</h3>
<p>Do not list all your ideas without organizing them. After generating the list mentally, group ideas into three to four categories before presenting. Then identify the two or three most promising initiatives and explain precisely why: potential impact, feasibility, and estimated implementation timeline.</p>

<div class="warning-box"><strong>The timid brainstorm:</strong> Some candidates, fearing they might say something absurd, limit themselves to three or four very safe ideas. This is the opposite of what top-tier firms is looking for. Stating a creative or unconventional idea — even if it is later discarded — shows the ability to think beyond obvious solutions and not self-censor. Proposing 15 ideas of which five are imperfect is better than five ideas that are all safe and predictable.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In brainstorming cases, the interviewer observes whether you structure your exploration (using the five axes or an equivalent framework) or whether you list ideas randomly. A candidate who says "I will systematically explore five axes: customer, product, channel, costs, and ecosystem" before starting immediately signals analytical discipline and the ability to be exhaustive under time pressure — two core top-tier firms values.</div>`
);

patchFiche('CAT-02', 'F-014',
  'Branch Prioritization — Impact × Feasibility',
  `
<p>Branch prioritization is the skill that transforms a structure into an action plan. Once your issue tree is built, you cannot explore every branch within the time allotted. Choosing intelligently where to start — and knowing how to explain that choice clearly — is a strong signal of analytical maturity and operational judgment.</p>

<h3>The Impact × Feasibility matrix</h3>
<p>Prioritization rests on two dimensions. The <strong>potential impact</strong> of a branch is the size of the gap that branch could explain if your hypothesis is correct — how much of the observed problem would this branch account for? The <strong>feasibility of the analysis</strong> is the ease with which you can obtain an answer for that branch — this depends on data availability and the complexity of the required analysis.</p>
<div class="formula-box">Priority score = Potential impact × Analysis feasibility
→ Start with high-score branches: high impact AND data readily available
→ Defer low-score branches: marginal impact OR analysis too time-consuming</div>

<h3>Quantified prioritization example</h3>
<div class="example-box"><strong>Problem:</strong> 12M profit decline. Structure: Revenues / Variable Costs / Fixed Costs.<br><br>
<strong>Revenue branch:</strong> Interviewer notes revenues fell slightly → estimated impact ~4M, data available (revenue figures provided). Score: high.<br>
<strong>Variable Costs branch:</strong> Inflationary context, food sector → estimated impact ~7M, data available (purchasing records). Score: very high → Explore FIRST.<br>
<strong>Fixed Costs branch:</strong> Rent and depreciation appear stable a priori → estimated impact ~1M, would require a full accounting audit → Score: low. Defer.<br><br>
<strong>Announcement to interviewer:</strong> "I propose starting with variable costs, because in an environment of raw material and energy inflation, this branch is most likely to explain the bulk of the gap — and we have the data to test it quickly."</div>

<h3>The oral prioritization formula</h3>
<p>When announcing your prioritization to the interviewer, use a three-part formula: identify the priority branch, justify by potential impact, then specify the feasibility of the analysis.</p>
<div class="formula-box">"I suggest starting with [branch X] because, if my hypothesis is correct, this branch could explain [Y%] of the observed gap — and we should be able to test it quickly using [expected data type]."</div>

<div class="warning-box"><strong>Prioritization without justification:</strong> Announcing "I will start with revenues" without explaining why is a missed opportunity. The interviewer has no way of distinguishing whether your choice is deliberate or arbitrary. Always justify your exploration order in a single sentence — even brief, even imperfect. The justification is as important as the choice itself.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The most effective interview candidates do one additional thing: they announce during the structuring phase which branches they plan to explore in what order and why. "I will first verify branch 1 as it is most likely the primary cause, then branch 2 to confirm, and I will leave branch 3 for last as the impact appears marginal." This level of explicit forward planning saves time and demonstrates the ability to drive an analysis autonomously — exactly what is expected of a top-tier firms associate on day one.</div>`
);

})();

