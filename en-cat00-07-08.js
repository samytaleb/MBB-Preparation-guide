// ============================================================
// EN-CAT00-07-08.JS — English translations: Methodology, Strategy, BF Sectorial
// ============================================================
(function () {

function patchFiche(courseId, ficheId, titleEN, contentEN) {
  var cat = DATA.courses.find(function(c) { return c.id === courseId; });
  if (!cat) return;
  for (var i = 0; i < cat.submodules.length; i++) {
    var f = cat.submodules[i].fiches.find(function(x) { return x.id === ficheId; });
    if (f) { if (titleEN) f.title_en = titleEN; if (contentEN) f.content_en = contentEN; return; }
  }
}

// ── Category and submodule title translations ──────────────
DATA.courses.forEach(function(c) {
  if (c.id === 'CAT-00') {
    c.title_en = 'Methodology & Approach';
    c.submodules.forEach(function(sm) {
      if (sm.id === 'CAT-00-01') sm.title_en = 'General Method';
    });
  }
  if (c.id === 'CAT-07') {
    c.title_en = 'Strategy & Competition';
    c.submodules.forEach(function(sm) {
      if (sm.id === 'CAT-07-01') sm.title_en = 'Competitive Analysis';
    });
  }
  if (c.id === 'CAT-08') {
    c.title_en = 'Sector Business Fundamentals';
    c.submodules.forEach(function(sm) {
      if (sm.id === 'CAT-08-01') sm.title_en = 'Financial Sectors';
      if (sm.id === 'CAT-08-02') sm.title_en = 'Tech & Consumer Sectors';
    });
  }
});

// ══════════════════════════════════════════════════════════
// CAT-00 — METHODOLOGY
// ══════════════════════════════════════════════════════════

patchFiche('CAT-00', 'F-000',
  'How to approach a top-tier firms case — complete guide from A to Z',
  `
<p>Before your first practice case, read this sheet. It gives you the complete method — from the moment the interviewer starts speaking to the moment you deliver your final recommendation. Every phase is explained with what you should do, what the interviewer is observing and evaluating, and the mistakes most candidates make. This sheet does not replace practice — but it gives you the map of the territory before you start exploring it.</p>

<p>A top-tier firms case interview is not a knowledge test — it is a test of how you think and communicate under pressure. The interviewer is not looking for the correct answer: they are looking to observe your reasoning process. A candidate who reaches an incorrect conclusion but follows a rigorous and well-communicated approach may pass where a candidate who finds the right answer through intuition without verbalizing the reasoning will be rejected. This distinction is fundamental: what you do out loud matters more than what you calculate silently.</p>

<p>The 6-phase structure below is an accurate description of what happens in a standard top-tier firms case interview. Some interviewers are more directive (they actively guide you), others are more silent (they observe you work). The method remains the same: clear phases, announced transitions, a guiding hypothesis, and a precise final recommendation.</p>

<h3>Overview — the 6 phases and what the interviewer observes</h3>
<table class="data-table">
  <tr><th>Phase</th><th>Typical duration</th><th>Objective</th><th>What the interviewer notes</th></tr>
  <tr><td>1. Clarification</td><td>1–2 min</td><td>Understand the problem precisely</td><td>Relevance of questions, active listening, framing ability</td></tr>
  <tr><td>2. Structuring</td><td>2–3 min</td><td>Present a MECE tree with initial hypothesis</td><td>MECE, logic, hypothesis-driven approach, prioritization</td></tr>
  <tr><td>3. Analysis</td><td>15–25 min</td><td>Explore branches, analyze data</td><td>Quantitative rigor, data management, analytical agility</td></tr>
  <tr><td>4. Calculations</td><td>Integrated into analysis</td><td>Quantify impacts, validate hypotheses</td><td>Accuracy, speed, order of magnitude, communication</td></tr>
  <tr><td>5. Synthesis</td><td>1–2 min</td><td>Summarize key findings Answer First</td><td>Conciseness, Answer First, selection of key insights</td></tr>
  <tr><td>6. Recommendation</td><td>2–3 min</td><td>Formulate a final actionable recommendation</td><td>Decision clarity, specificity, risks, next steps</td></tr>
</table>

<h3>Phase 1 — Clarification (1–2 minutes)</h3>
<p>As soon as the interviewer finishes the prompt, don't start structuring immediately. Take a short pause — 5 seconds is enough — to absorb the prompt, then ask 1 to 2 targeted clarifying questions. These questions should address one of the following: precisely understand the scope of the problem, identify what the client is really looking for (not always stated explicitly), or verify a structuring assumption critical to your framework.</p>

<p>The four priority clarification axes are: the quantified objective and time horizon ("when you say improve profitability, do you have a specific target — say +5 EBITDA margin points — and over what timeframe?"), the geographic and product scope ("does this problem concern the entire group or a specific division?"), the temporal context ("how long have you observed this trend?"), and known constraints ("are there regulatory, financial, or organizational constraints to factor in from the start?"). Never ask more than 3 questions — beyond that, the interviewer perceives hesitation or inability to operate under ambiguity.</p>

<div class="formula-box">CATEGORY 1 — Scope questions:
"When we say profitability, are we looking at the whole group or a specific entity?"
"Does this analysis cover all markets or France only?"

CATEGORY 2 — Objective questions:
"Do you have a specific margin target and timeframe in mind?"
"Is top-tier firms's goal here to identify the root cause, or to formulate an action plan?"

QUESTIONS TO AVOID:
❌ "Can you tell me everything you know about the company?" (too broad)
❌ "What is their budget?" (premature and non-structural)
❌ Questions whose answer is already in the prompt (signals lack of active listening)
❌ More than 3 questions (signals inability to prioritize)</div>

<h3>Phase 2 — Structuring (2–3 minutes)</h3>
<p>This is the most discriminating of the 6 phases. The interviewer says "take a moment to structure your response." You have 1 to 2 minutes of silence to build your tree on paper. During this time — which the interviewer observes carefully — you must accomplish four tasks in parallel. First, identify the case type (profitability, market entry, growth, M&A, operations…). Second, formulate an initial hypothesis based on the prompt elements and your sector knowledge. Third, build a MECE tree with 2–3 branches and a robust logic. Fourth, decide which branch to explore first and justify this choice based on your hypothesis.</p>

<p>Your structure presentation must follow a precise three-part format: hypothesis first, structure second, prioritization last. "My initial hypothesis is that the problem lies in costs. I will structure into two branches — revenues and costs — MECE by the identity Profit = Revenues − Costs. I will start with costs since that is where my hypothesis points. Does that work for you?" This final validation is not politeness — it is an invitation for the interviewer to redirect you if your structure is heading in the wrong direction.</p>

<h3>Phase 3 — Analysis (15–25 minutes)</h3>
<p>Analysis is an exploration guided by your hypotheses, not an exhaustive data collection exercise. For each branch you explore, follow a four-step process that you repeat until you identify the root cause or approach the end of the available time.</p>

<p><strong>Step A — Ask a targeted question and justify it:</strong> "To validate my hypothesis about variable cost drift, I would need the gross margin evolution over the last 3 years. Do you have that data?" This formulation shows you have a direction — you are not waiting for data to decide where to go.</p>
<p><strong>Step B — Analyze the data received:</strong> Never read a number out loud without analyzing it immediately. Calculate ratios, compare to benchmarks, identify the anomaly. "€40M revenue, 30% gross margin so €12M. That is 3 points below the sector benchmark of 33% — a signal that something eroded the gross margin."</p>
<p><strong>Step C — Mini-synthesis:</strong> Conclude the analysis of each branch with a sentence that updates your hypothesis. "This confirms my hypothesis about variable cost drift" or "This disproves my hypothesis — I need to revise toward fixed charges."</p>
<p><strong>Step D — Announced transition:</strong> "I will now explore fixed charges to understand if the network expansion explains the remaining gap."</p>

<h3>Phase 4 — Calculations integrated into analysis</h3>
<p>Calculations in top-tier firms cases must be done out loud, step by step, with judicious rounding to maintain communication fluidity. Never be silent while calculating — the interviewer must see your reasoning in real time. If you have doubts about a calculation, say so: "I'll round to keep the orders of magnitude clear, and verify precision afterward if needed."</p>

<div class="formula-box">STRUCTURE FOR VERBAL CALCULATIONS

BEFORE: "I need to calculate X. For that I need Y and Z."
DURING: "[Step-by-step calculation] → Result = [number with unit]."
CONTEXTUALIZATION: "This result is [above / below / within] the sector benchmark of [X%]."
IMPLICATION: "This [confirms / disproves] my hypothesis because [reason]."

FULL EXAMPLE:
"So if revenues are €100M and fell 8%, the decline is 100 × 0.08 = €8M.
Gross margin was 35%, so €35M. It fell to 30%, so €30M.
Margin impact = 35 − 30 = €5M. On initial profit of €10M, that is 50% of the total gap.
This means gross margin explains half the problem — I need to identify the rest."</div>

<h3>Phase 5 — Synthesis (1–2 minutes)</h3>
<p>Synthesis occurs when the interviewer asks "can you summarize your analysis?" or when you are 5 minutes from the end. It must strictly follow the Answer First structure: conclusion first, 2–3 quantified proofs next, then transition to the recommendation. Maximum 90 seconds. Never recap your approach — select the most important insights and express them concisely.</p>

<h3>Phase 6 — Final recommendation (2–3 minutes)</h3>
<p>Always start with the recommendation in one sentence. Then and only then: 2–3 concrete initiatives in priority order (each with a quantified impact, a timeline, and the primary risk), immediate next steps, and critical risks or assumptions that could invalidate your recommendation. A strong top-tier firms recommendation is specific, quantified, prioritized, and realistic. It answers the question "what does the client do tomorrow morning?"</p>

<h3>Example — complete structure announcement in Phase 2</h3>
<div class="example-box"><strong>Context:</strong> Profitability case. A food retailer's net margin dropped from 4% to 1% in 2 years.<br><br>
<strong>Prior clarification:</strong> "Two questions before structuring. First, does this decline concern the entire group or a division?" [Reply: entire group.] "Second, do you have a specific margin recovery target, or is the goal first to diagnose?" [Reply: diagnosis.]<br><br>
<strong>Structure announcement:</strong> "Here is my approach. My initial hypothesis: a 3-point net margin drop for a food retailer in an inflationary 2022–2024 context suggests operating cost growth outpacing revenue — specifically purchasing costs (food inflation +8–10%) and labor costs (minimum wage increases).<br><br>
I will structure into two MECE branches: first revenues — does the decline come from volume, price, or product mix issues; second costs — have costs increased structurally?<br><br>
I will start with costs since that is where my hypothesis points directly. If gross margin fell, variable costs are the culprit. If gross margin is stable, the problem is in fixed charges — I look for non-profitable expansion or overhead growth. Does that work for you?"<br><br>
<em>Total time: 45 seconds. The interviewer has heard a hypothesis, a MECE structure, and a reasoned priority.</em></div>

<div class="warning-box"><strong>The 3 costliest mistakes:</strong><br>
1. <strong>Starting to structure before clarifying:</strong> You risk working on the wrong scope or producing a generic structure not adapted to the specific context. 2 minutes of clarification often prevents 10 minutes of analysis in the wrong direction.<br>
2. <strong>Exploring branches without announcing what you're looking for:</strong> The interviewer cannot follow your reasoning if you don't explain which hypothesis you're testing at each step. Every data request must be preceded by an announcement: "To test X, I need Y."<br>
3. <strong>Ending the case without a clear recommendation:</strong> A case without a final recommendation or with a vague one — "we need to reduce costs" — scores zero on synthesis and decision-making. top-tier firms expects you to take a clear position even under uncertainty: "Based on this analysis, my recommendation is X, with the caveat that Y will need to be validated."</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The sentence that most differentiates candidates is the one following the tree presentation: "I would prioritize branch X because my hypothesis is Y." This prioritization demonstrates that you are thinking strategically rather than conducting an exhaustive inventory — the strongest signal of a consultant mindset. Interviewers hear dozens of technically correct structures every week. What stays in their memory is the candidate who knew <em>why</em> they were exploring one branch before another.</div>`
);

patchFiche('CAT-00', 'F-000b',
  'Managing time and mental pressure in interviews',
  `
<p>A top-tier firms interview lasts 45 to 60 minutes. Time management and handling mental pressure are distinct skills from mastering frameworks and sector knowledge. Two candidates with the same analytical level can achieve very different results depending on their ability to organize themselves in time and remain calm under pressure. This sheet gives you the concrete techniques for both dimensions.</p>

<p>The pressure in a top-tier firms interview is structural: you are observed continuously, questions are deliberately open or ambiguous, and some interviewers intentionally challenge your hypotheses to see whether you cave or defend your position with elegance. This pressure is not accidental — it simulates the real conditions of consulting work, where you must make decisions under time pressure, with incomplete data, facing clients who may challenge you.</p>

<p>The good news: the pressure in an interview is entirely predictable. Unlike an unpredictable top-tier firms client, an interviewer will always follow the same case structure. If you know that structure by heart — and if you have practiced following it under pressure — the interview becomes a sequence of familiar phases rather than total improvisation. Preparation is the antidote to pressure.</p>

<h3>Time budget for a 45-minute interview</h3>
<table class="data-table">
  <tr><th>Phase</th><th>Allocated time</th><th>If you overrun</th><th>What you announce</th></tr>
  <tr><td>Small talk / intro</td><td>2–3 min</td><td>Interviewer controls — follow their pace</td><td>Nothing to announce — the interviewer leads</td></tr>
  <tr><td>PEI (story + probing)</td><td>12–15 min</td><td>Shorten stories, go straight to impact</td><td>"To get to the point: the concrete impact was…"</td></tr>
  <tr><td>Case clarification</td><td>1–2 min</td><td>Maximum 2 questions, then structure</td><td>Move directly to structure after the 2nd question</td></tr>
  <tr><td>Structuring (silence)</td><td>1–2 min</td><td>Up to 3 min acceptable if visibly active</td><td>"I need 30 more seconds to finalize the tree"</td></tr>
  <tr><td>Analysis (body of case)</td><td>20–25 min</td><td>Announce "I'd like to synthesize now" if running short</td><td>"Given the time, I'd like to move to synthesis now"</td></tr>
  <tr><td>Final recommendation</td><td>2–3 min</td><td>Reduce to 1 recommendation + 2 proofs + 1 risk</td><td>Go directly to the main recommendation</td></tr>
  <tr><td>Your questions to interviewer</td><td>2–3 min</td><td>Prepare 2 smart questions in advance</td><td>Prepared questions — don't improvise</td></tr>
</table>

<h3>What to do when you get stuck</h3>
<p><strong>If you don't know where to start:</strong> Return to the base formula for the case type. For profitability: "Profit = Revenue − Costs. I'll decompose both." Simple, but it shows structure even under pressure. For market entry: "I'll evaluate whether we should enter, whether we can win, and how to enter." These base formulas are predictable and that is exactly why they work under pressure.</p>

<p><strong>If you don't understand an exhibit:</strong> Say out loud "I'm taking a moment to read the axes and units." Then: "I see that [axis X represents Y, axis Y represents Z]. What interests me in this chart is [anomaly or trend]. I read that [precise observation]. Is the data [Z] also available?"</p>

<p><strong>If you realize your structure is wrong:</strong> Don't persist. Say clearly: "Looking at this data, I realize my initial tree is suboptimal — I'd like to reformulate it to better isolate the problem." This analytical honesty is valued at top-tier firms. A candidate who corrects their trajectory based on data is more mature than one who defends a poor structure out of inertia.</p>

<p><strong>If challenged on your recommendation:</strong> Don't immediately cave, but don't defend the indefensible. Frame it: "My recommendation rests on the assumption that X is true. If you confirm X is not valid, I would revise toward Y. But if X remains valid, I maintain my recommendation for the following reasons…"</p>

<p><strong>If you are silent too long:</strong> 20–30 seconds of silence while calculating or thinking is acceptable. Beyond that, announce what you're doing: "I'm calculating the margin impact — give me 30 seconds." This simple signal is enough to eliminate the discomfort of prolonged silence.</p>

<h3>Mental pressure management techniques</h3>
<p>Interview pressure produces two measurable cognitive effects: <strong>tunnel thinking</strong> (you focus on one aspect and lose the big picture) and <strong>memory blocking</strong> (frameworks you know perfectly become suddenly inaccessible). The most effective technique against both is continuous verbalization — speaking out loud forces you to articulate clearly and prevents tunnel thinking. If you don't know what to say, announce what you're looking for: "I'm identifying the most likely branch — I'm reviewing the options."</p>

<div class="formula-box">PROTOCOL WHEN STUCK (5 steps in 30 seconds)

1. Breathe — 3 seconds of silence is tolerable
2. Restate the problem out loud: "The question is why X declined"
3. Return to the base formula: "Profit = Revenue − Costs" or "Growth = Volume × Price"
4. Identify available data: "I already have information on X and Y"
5. Propose a direction: "I will therefore focus on Z since it's the unexplored branch"

Never say "I don't know" without proposing an alternative.
Saying "I'm not sure — here is how I would approach the problem" is always acceptable.</div>

<h3>Questions YOU ask the interviewer</h3>
<p>At the end of the interview, the interviewer will ask if you have questions. This is your last opportunity to make a strong impression. Intelligent questions show you have done deep research on top-tier firms and are already thinking like a consultant. They must be specific, grounded in real knowledge of top-tier firms, and show genuine interest in the interviewer's career path.</p>

<div class="formula-box">RELEVANT QUESTIONS TO PREPARE

About the top-tier firms career path:
"What was the nature of your first engagement at top-tier firms, and what surprised you most about the day-to-day reality?"
"In retrospect, what skill would you have wished to develop earlier in your top-tier firms career?"

About Tech &amp; AI roles:
"How do analytical and technology skills combine concretely in the projects you have worked on?"
"top-tier firms Tech &amp; AI is recruiting many engineers right now — how is this expertise integrated into mixed teams with generalist consultants?"

About top-tier firms as an employer:
"In a first engagement, what competency do you see analysts develop fastest — and which takes the most time?"</div>

<div class="warning-box"><strong>Questions NOT to ask:</strong><br>
"What is the compensation?" — Trivial. Get this information through other channels (Glassdoor, network) before the interview.<br>
"What are the promotion timelines?" — Too early. Signals you're already thinking about your next role before having this one.<br>
"Do you enjoy your work?" — Too vague. Shows you haven't thought of a real question.<br>
"What is the typical work week?" — Only ask work-life balance questions this directly if you are prepared to justify it with your personal context.<br>
top-tier firms interviewers are asked to provide feedback on candidates — and the quality of your closing questions is part of that feedback.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Interviewers often spend more time on PEI than on the case — especially for Tech &amp; AI roles where the case is sometimes less discriminating between strong candidates who all have solid analytical training. Never deprioritize PEI preparation in favor of case practice. A memorable PEI story — with a quantified impact, visible leadership, and an honest reflection on difficulties encountered — can make the difference at the 2nd and 3rd round where case performances are similar.</div>`
);

// ══════════════════════════════════════════════════════════
// CAT-07 — STRATEGY & COMPETITION
// ══════════════════════════════════════════════════════════

patchFiche('CAT-07', 'F-070',
  "Porter's Five Forces — complete analysis with applications",
  `
<p>The <strong>Five Forces model</strong> (1979, Michael Porter, Harvard Business School) is the most widely used framework for analyzing the structural attractiveness of an industry in strategic consulting. It stems from a fundamental principle: the profitability of an industry is determined by 5 competitive forces that erode margins. Understanding these forces explains why some sectors are structurally more profitable than others, and where defensible competitive advantages lie.</p>

<h3>The Five Forces</h3>
<p><strong>Force 1 — Rivalry among existing competitors:</strong> Rivalry is intense when the market is fragmented (many similarly sized players), growth is weak (players fight over a static pie), fixed costs are high (every player needs volume), products are undifferentiated (competition is purely on price), and exit barriers are high (players continue even unprofitably).</p>
<div class="example-box"><strong>Examples by intensity:</strong><br>
Low rivalry: Airbus-Boeing duopoly (civil aviation), Visa-Mastercard (payments)<br>
High rivalry: grocery retail (Tesco, Carrefour), low-cost airlines<br>
Consulting implication: high rivalry compresses margins → recommendations focused on differentiation or consolidation</div>

<p><strong>Force 2 — Supplier bargaining power:</strong> Suppliers have power when they are few (oligopoly), they provide a critical and hard-to-substitute input, they represent a large share of the buyer's total cost, and switching costs are high. A powerful supplier can raise prices and reduce their customer's margin.</p>

<p><strong>Force 3 — Buyer bargaining power:</strong> Buyers have power when they are few and buy in large volumes, products are undifferentiated (easy to switch suppliers), switching costs are low, and they threaten backward vertical integration. Strong buyer pressure also compresses margins on the revenue side.</p>

<p><strong>Force 4 — Threat of new entrants:</strong> The threat is high when entry barriers are low: no significant capital intensity, no restrictive regulation, no meaningful economies of scale, no strong customer loyalty. Classic barriers include: economies of scale, brand differentiation, capital requirements, cost advantages independent of scale (patents, location), and distribution channel access.</p>

<p><strong>Force 5 — Threat of substitutes:</strong> Substitutes cap pricing power by imposing a ceiling on prices. The threat is high when the substitute's value/price ratio is attractive and switching costs to the substitute are low.</p>

<h3>Summary table — attractive vs. unattractive industries</h3>
<table class="data-table">
  <tr><th>Criterion</th><th>Attractive industry (high margins)</th><th>Unattractive industry (low margins)</th></tr>
  <tr><td>Rivalry</td><td>Weak (duopoly, niche)</td><td>Intense (fragmentation, price wars)</td></tr>
  <tr><td>Suppliers</td><td>Many, interchangeable</td><td>Few, critical</td></tr>
  <tr><td>Buyers</td><td>Many, fragmented</td><td>Concentrated, key accounts</td></tr>
  <tr><td>New entrants</td><td>High barriers</td><td>Easy entry markets</td></tr>
  <tr><td>Substitutes</td><td>Few or costly to adopt</td><td>Many, attractive pricing</td></tr>
</table>

<h3>Application in consulting cases</h3>
<p>In interviews, the Five Forces serve as a diagnostic tool for market attractiveness in Market Entry or strategy cases. The correct approach: (1) analyze each force briefly, (2) give a verdict per force (weak/moderate/strong), (3) conclude on the overall attractiveness, and (4) link the analysis to the case question. Don't describe the forces mechanically — prioritize the 2–3 forces most determinant for the specific case.</p>

<div class="warning-box"><strong>Mechanically applying Five Forces to every Market Entry case</strong> is one of the most recognizable clichés in interviews. top-tier firms interviewers expect you to adapt the analysis to the context, not recite all five forces one by one. If 2 forces dominate in the given case, focus on them and explain why they matter more than the other 3.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> The sentence that shows you master Porter beyond the memorized framework: "In this case, I'd like to focus on forces 2 and 4 — supplier power and threat of new entrants — as they seem most structural in determining whether our client can generate satisfactory margins." This spontaneous prioritization demonstrates mature analytical judgment.</div>`
);

patchFiche('CAT-07', 'F-071',
  'Sustainable competitive advantages — moats and differentiation',
  `
<p>A <strong>sustainable competitive advantage</strong> (or <em>economic moat</em>, a term popularized by Warren Buffett) is what allows a company to maintain above-average margins in its industry over the long term, despite competitive pressure and new entrants. In consulting, understanding competitive advantages is fundamental to assessing a client's strategic solidity and the sustainability of their profitability.</p>

<h3>The 5 sources of competitive advantage</h3>
<p><strong>1. Structural cost advantage:</strong> The company produces at substantially lower cost than competitors, allowing either lower prices (volume strategy) or higher margins at equivalent prices. Typical sources: economies of scale, economies of scope, proprietary processes, or privileged resource access (raw materials, strategic locations).</p>

<p><strong>2. Differentiation and brand:</strong> The company offers something customers are willing to pay more for — and that competitors cannot easily replicate. Brand is the clearest example: Hermès can sell a bag at €15,000 because the brand is irreproducible in the short term. Technical (patents, proprietary algorithms) or relational differentiation (trust built over years) plays the same role.</p>

<p><strong>3. Network effects:</strong> A network effect exists when the value of the product increases with the number of users. It's the most powerful moat because it's self-reinforcing: more users → more valuable service → harder to leave.
<div class="formula-box">Network value ≈ n² (Metcalfe's Law)
where n = number of users
→ Doubling users quadruples the theoretical network value</div></p>

<p><strong>4. Switching costs:</strong> The costs (financial, time, risk) a customer bears to change suppliers. When high, customers stay even if a competitor's offer is slightly better. ERP systems (SAP, Oracle) are the classic example: migration is a 2–5 year project costing millions.</p>

<p><strong>5. Regulatory and institutional advantages:</strong> Some industries have regulatory barriers structurally limiting competition: banking licenses, building permits in protected zones, pharmaceutical patents (20-year protection), infrastructure concessions.</p>

<h3>Evaluating the durability of a competitive advantage</h3>
<table class="data-table">
  <tr><th>Type of advantage</th><th>Durability</th><th>Primary risk</th></tr>
  <tr><td>Strong brand</td><td>10–30 years</td><td>Scandal / taste change / brand fatigue</td></tr>
  <tr><td>Network effect</td><td>5–20 years</td><td>Competing platform reaching critical mass</td></tr>
  <tr><td>Switching costs</td><td>3–10 years</td><td>Innovation making migration trivial</td></tr>
  <tr><td>Cost advantage</td><td>5–15 years</td><td>Technology changing cost structure</td></tr>
  <tr><td>Patent</td><td>Until expiry (20 years)</td><td>Patent expiry + generics</td></tr>
  <tr><td>Regulatory</td><td>Variable</td><td>Political change / market liberalization</td></tr>
</table>

<div class="example-box"><strong>Competitive advantage analysis in a case:</strong><br>
Question: "Our client is Europe's leading fleet management software provider. Is their moat durable?"<br><br>
Analysis: (1) Switching costs: migration takes 6–18 months and touches 100% of vehicle data → strong. (2) Proprietary data: 15 years of fleet data enables predictive insights new entrants cannot replicate → strong. (3) Network effect: not applicable (non-network B2B software).<br>
Verdict: Strong moat but exposed to a hyperscaler (Google/Microsoft) building equivalent features leveraging existing IT department relationships. Recommendation: accelerate data integration (unique asset) before big tech replicates it.</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> In strategic cases, the interviewer expects you to identify not only whether the company has a competitive advantage, but how long it's defensible. "The current moat is strong, but vulnerable to X within Y years" is prospective analysis showing you're thinking at the real strategic horizon, not just the current situation.</div>`
);

patchFiche('CAT-07', 'F-072',
  'Strategic matrices — Tier 1, Ansoff, top-tier firms-GE',
  `
<p>Strategic matrices are visual synthesis tools for making resource allocation decisions across different business units or markets. In consulting, they structure portfolio recommendations, investment priority decisions, and strategic sequencing. Three matrices are essential.</p>

<h3>Growth-Share Matrix (Boston Consulting Group, 1970)</h3>
<p>The Growth-Share Matrix positions a company's business units on two axes: relative market share (competitive strength) and market growth rate (attractiveness). It generates 4 quadrants:</p>
<table class="data-table">
  <tr><th>Quadrant</th><th>Market share</th><th>Market growth</th><th>Recommended strategy</th><th>Example</th></tr>
  <tr><td>⭐ Star</td><td>High</td><td>High</td><td>Invest to maintain leadership</td><td>iPhone in 2010</td></tr>
  <tr><td>💰 Cash Cow</td><td>High</td><td>Low</td><td>Extract cash, don't over-invest</td><td>Windows in 2020</td></tr>
  <tr><td>❓ Question Mark</td><td>Low</td><td>High</td><td>Decide: invest heavily or divest</td><td>New EV line from automaker</td></tr>
  <tr><td>🐕 Dog</td><td>Low</td><td>Low</td><td>Divest or harvest</td><td>Peripheral legacy activity</td></tr>
</table>
<p>The Tier 1 logic: cash from "Cash Cows" funds "Stars" and selective "Question Mark" investments. "Dogs" are liquidated or starved of capital.</p>

<h3>Ansoff Matrix (1957)</h3>
<p>The Ansoff matrix positions growth strategies on two axes: markets (existing vs. new) and products (existing vs. new). It generates 4 strategies with increasing risk levels:</p>
<div class="formula-box">Market Penetration: Existing product × Existing market → Low risk
Product Development: New product × Existing market → Medium risk
Market Development: Existing product × New market → Medium risk
Diversification: New product × New market → High risk</div>

<h3>top-tier firms-GE Matrix (General Electric)</h3>
<p>More sophisticated than the Tier 1, the top-tier firms-GE matrix evaluates each business unit on two composite dimensions: market attractiveness (size, growth, competitive intensity, profitability) and competitive strength (market share, product quality, costs, capabilities). It generates a 3×3 matrix with investment recommendations.</p>

<h3>How to choose between matrices in a case</h3>
<p>Use <strong>Tier 1</strong> when the case involves a conglomerate with multiple divisions and the question is: "How to allocate resources across divisions?" or "Which business to divest/grow?"</p>
<p>Use <strong>Ansoff</strong> when the question is: "How should our client grow?" — the matrix sequences options by risk.</p>
<p>Use <strong>top-tier firms-GE</strong> when a more granular analysis of attractiveness and competitiveness factors is needed than Tier 1 can provide.</p>

<div class="warning-box"><strong>Using a matrix without adapting it to available data:</strong> A blank Tier 1 or top-tier firms-GE matrix (without real data to position the business units) is just a shell. In interviews, announce which matrix you would use and what data you would need to populate it — don't draw an empty matrix as if it constitutes an analysis.</div>`
);

// ══════════════════════════════════════════════════════════
// CAT-08 — SECTOR BUSINESS FUNDAMENTALS
// ══════════════════════════════════════════════════════════

patchFiche('CAT-08', 'F-080',
  'Understanding banking — business model, margins, KPIs',
  `
<p>Banking is one of the most frequent sectors in top-tier firms cases, especially for digital transformation, retail strategy, and restructuring projects. Understanding its economics is essential because it's fundamentally different from industrial or services companies.</p>

<h3>The banking business model</h3>
<p>A retail bank earns money primarily through two channels: <strong>Net Interest Margin (NIM)</strong> and <strong>fees/commissions</strong>. NIM is the difference between the rate at which the bank lends (credit) and the rate at which it borrows (customer deposits, markets). It collects deposits at low cost (often 0–1%) and lends at higher rates (mortgages at 3–5%, consumer credit at 6–15%).</p>
<div class="formula-box">NIM = Average lending rate − Average deposit rate
NIM revenue = NIM × Total earning assets
Example: 2% NIM × €200Bn assets = €4Bn annual revenue

Commission revenue = Banking fees + Insurance + Asset management + Private banking
→ Growing because less sensitive to interest rates

Net income ≈ (NIM + Commissions) × (1 − CIR) − Cost of risk (provisions)
CIR = Cost-Income Ratio = Operating expenses / Revenues
Good CIR = &lt; 60% ; Worrying = &gt; 70%</div>

<h3>Key banking KPIs</h3>
<table class="data-table">
  <tr><th>KPI</th><th>Definition</th><th>European benchmark</th></tr>
  <tr><td>NIM</td><td>Net Interest Margin</td><td>1.5–2.0%</td></tr>
  <tr><td>CIR</td><td>Cost-to-income ratio</td><td>65–70% (BNP, SocGen)</td></tr>
  <tr><td>ROE</td><td>Return on equity</td><td>8–12% (well-managed)</td></tr>
  <tr><td>NPL ratio</td><td>Non-performing loans / total portfolio</td><td>&lt; 3% = healthy</td></tr>
  <tr><td>CET1 ratio</td><td>Solvency ratio (Tier 1 capital / risk-weighted assets)</td><td>Regulatory min ~12%</td></tr>
  <tr><td>LCR</td><td>Short-term liquidity coverage ratio</td><td>Regulatory min 100%</td></tr>
  <tr><td>ARPU</td><td>Average revenue per customer</td><td>€300–600/year (retail)</td></tr>
</table>

<h3>Current strategic challenges in banking</h3>
<p><strong>NIM pressure:</strong> With historically low interest rates (2015–2022), NIM compressed, forcing banks to grow fee income. The rate hikes of 2022–2025 partially restored NIM but created volatility.</p>
<p><strong>Digital transformation:</strong> Neobanks (Revolut, N26) attracted customers with superior mobile apps and zero fees. Traditional banks are investing heavily to modernize their UX.</p>
<p><strong>Branch network restructuring:</strong> The number of bank branches in France fell 40% since 2015. The question: how many physical branches to keep, for which customer segments?</p>

<div class="example-box"><strong>Typical banking case — profitability diagnosis:</strong><br>
"Our client, a French retail bank, sees ROE drop from 10% to 6% over 3 years."<br><br>
Structure: ROE = Profit / Equity = (Revenue − Expenses − Provisions) / Equity<br>
Decompose: Has NIM fallen? (rates, credit volumes) · Has CIR risen? (transformation, compliance) · Has cost of risk risen? (rising NPLs?)<br>
Hypothesis: Likely combination of compressed NIM (low rates) + rising CIR (digital investment) + normalized provisions post-COVID</div>

<div class="insight-box"><strong>top-tier firms signal:</strong> Knowing a French bank's CIR and ROE (BNP ~65%, ROE ~10%) and being able to calculate them from memory allows you to immediately contextualize any banking case. A candidate who says "a CIR of 72% for a retail bank is above the European average of ~65%" signals genuine sector financial literacy.</div>`
);

patchFiche('CAT-08', 'F-081',
  'Understanding SaaS and tech platforms — metrics and logic',
  `
<p>The <strong>SaaS (Software as a Service)</strong> sector and digital platforms follow economics radically different from industrial companies. Their key metrics are sector-specific and top-tier firms tests them regularly — either because the client is a tech company, or because the client is considering an acquisition in the space.</p>

<h3>The SaaS business model</h3>
<p>A SaaS sells a software subscription paid monthly or annually. The model is characterized by high upfront customer acquisition costs, offset by recurring revenue over multiple years. The profitability logic rests on the <strong>LTV/CAC ratio</strong>: customer lifetime value must substantially exceed the cost to acquire them.</p>
<div class="formula-box">ARR = Annual Recurring Revenue = MRR × 12
MRR = Number of customers × Monthly ARPU
Churn MRR = MRR lost monthly from cancellations
NRR = Net Revenue Retention = (ARR start − Churn + Expansion) / ARR start × 100
→ NRR &gt; 100% = growth even without new customers (expansion &gt; churn)
→ NRR &lt; 90% = serious warning sign on retention

LTV = Monthly ARPU × Gross margin × (1 / Monthly churn)
CAC = Total Sales & Marketing spend / New customers acquired
LTV/CAC = Business model health indicator
→ &lt; 3x: non-viable
→ 3–5x: good
→ &gt; 5x: excellent (strong pricing power or low CAC)</div>

<h3>Key SaaS KPIs</h3>
<table class="data-table">
  <tr><th>Metric</th><th>Short definition</th><th>Healthy benchmark</th></tr>
  <tr><td>ARR / MRR</td><td>Annual / monthly recurring revenue</td><td>Growth &gt; 30% (early stage), &gt; 15% (growth)</td></tr>
  <tr><td>Churn rate</td><td>% customers canceling per period</td><td>&lt; 5%/year (enterprise) · &lt; 10%/year (SMB)</td></tr>
  <tr><td>NRR</td><td>Net revenue retention (expansion included)</td><td>&gt; 110% (excellent) · &gt; 100% (good)</td></tr>
  <tr><td>CAC payback</td><td>Months to recover CAC</td><td>&lt; 12 months (excellent) · &lt; 24 months (acceptable)</td></tr>
  <tr><td>Gross margin</td><td>% revenue after direct costs</td><td>70–85% (pure SaaS)</td></tr>
  <tr><td>Rule of 40</td><td>ARR growth% + EBITDA margin% ≥ 40</td><td>≥ 40 = healthy overall</td></tr>
</table>

<h3>Platforms — network effects and marketplace economics</h3>
<p>Platforms (Uber, Airbnb, Amazon Marketplace) follow a different logic from SaaS. Their value comes from network effects between two market sides (supply and demand). The central metric is <strong>GMV (Gross Merchandise Value)</strong> and the <strong>take rate</strong> — the percentage taken from each transaction.</p>
<div class="formula-box">Platform revenue = GMV × Take rate
Example: Amazon Marketplace $500Bn GMV × ~15% take rate = $75Bn revenue
Typical take rates: e-commerce 10–20% · Food delivery 25–30% · Mobility 25–30% · Payments 1–3%</div>

<div class="insight-box"><strong>top-tier firms Tech & AI signal:</strong> Knowing the "Rule of 40" and being able to calculate it spontaneously is a strong signal for top-tier firms Tech & AI roles. "Our SaaS client grows at 25% but EBITDA margin is −10% → Rule of 40 = 15, well below threshold. The question is whether growth justifies the investment level or whether it's wasteful growth."</div>`
);

patchFiche('CAT-08', 'F-082',
  'Understanding luxury and retail — opposing logics',
  `
<p>Luxury and mass market retail seem similar (selling products to consumers) but follow opposing economic logics. Confusing them in an interview is a serious mistake — growth levers, key metrics, and competitive dynamics are radically different.</p>

<h3>The luxury business model</h3>
<p>Luxury derives value from <strong>perceived scarcity</strong>, <strong>brand heritage</strong>, and <strong>craftsmanship</strong>. Unlike classical economics, demand for luxury products can increase when prices increase (Veblen effect) — the price increase reinforces desirability rather than reducing it. This is why major luxury houses raise prices 8–12% per year without negative volume impact on iconic products.</p>
<div class="formula-box">Luxury — key metrics:
Gross margin: 65–70% (very high, due to pricing power)
EBITDA margin: 25–35% for leaders (Hermès, LVMH, Kering)
Revenue growth: 5–15%/year in the long run
KPIs: Sell-through rate · Average Selling Price (ASP) · Same-store sales growth · Brand desirability index</div>

<h3>The mass market retail business model</h3>
<p>Grocery retail operates on high volume at thin margins. Gross margin is 20–30%, EBITDA 3–6%. Growth comes from volume (new stores, new geographies) and operational optimization (cost reduction, stock turnover improvement). Competition is intense and differentiation is difficult.</p>
<div class="formula-box">Grocery retail — key metrics:
Revenue/m² (sales per square meter of retail space) — spatial efficiency indicator
Stock turnover = Revenue / Average inventory (objective: maximize)
Shrinkage = Losses (theft + breakage + waste) as % of revenue
GMROI = Gross Margin Return on Inventory = Gross margin / Average inventory value
Same-Store Sales Growth (SSSG): growth on same stores</div>

<h3>Comparative summary</h3>
<table class="data-table">
  <tr><th>Dimension</th><th>Luxury</th><th>Mass market retail</th></tr>
  <tr><td>Gross margin</td><td>65–70%</td><td>20–30%</td></tr>
  <tr><td>EBITDA</td><td>25–35%</td><td>3–6%</td></tr>
  <tr><td>Value driver</td><td>Price, desirability, scarcity</td><td>Volume, operational efficiency</td></tr>
  <tr><td>Price elasticity</td><td>Negative or zero (Veblen effect)</td><td>High (price-sensitive customers)</td></tr>
  <tr><td>Growth</td><td>Internationalization + premium</td><td>New channels + private label</td></tr>
  <tr><td>Main risks</td><td>Counterfeits, brand dilution, Asia</td><td>Amazon, private labels, food inflation</td></tr>
</table>

<div class="insight-box"><strong>top-tier firms signal:</strong> Knowing the margin gap between a luxury group and a grocery retailer (35% vs 5% EBITDA) and being able to explain it structurally — pricing power vs volume play — is one of the most common questions in interviews for consumer sector roles. "The superior margins in luxury don't come solely from lower production costs, but from pricing power conferred by a non-replicable brand."</div>`
);

patchFiche('CAT-08', 'F-083',
  'Understanding healthcare, pharma, and insurance',
  `
<p>Healthcare is a sector regularly featured in top-tier firms cases — in innovative pharma, medical devices, health insurance, or healthcare services. Its key characteristic is the <strong>dissociation between payer, prescriber, and beneficiary</strong> — which creates unique economic dynamics that most candidates poorly understand.</p>

<h3>The pharmaceutical business model</h3>
<p>An innovative pharma company makes money primarily during its patent protection period. The process is: R&D (10–15 years, €1–2Bn per drug) → Regulatory approval (FDA, EMA) → Commercialization under patent → Generic cliff when patent expires. A pharma company's value depends therefore as much on its <strong>pipeline</strong> (drugs in development) as on current revenues.</p>
<div class="formula-box">Gross margin (innovative drugs under patent): 65–80%
Big cap pharma EBITDA: 30–40%
R&D / Revenue: 15–20% for leaders (Sanofi, AstraZeneca)
Patent cliff: at expiry, generics can reduce a drug's revenues by 80–90% within 2–3 years

Key pharma KPIs:
→ Pipeline value (NPV of drugs in development)
→ NME count (New Molecular Entities in development)
→ Phase 3 success rate (~65% of Phase 3 drugs get approval)
→ Market share by indication</div>

<h3>The insurance business model</h3>
<p>An insurer collects premiums and pays claims. The profitability logic is distinct from other sectors. The combined ratio measures whether the core business (premiums − claims − expenses) is profitable. The investment result measures the return on the investment portfolio of reserves.</p>
<div class="formula-box">Combined Ratio = (Claims + Expenses) / Premiums × 100
→ &lt; 100%: technically profitable (each premium dollar generates profit)
→ &gt; 100%: technically loss-making (offset by investment income if positive)
→ Good combined ratio: 90–97% ; Poor: &gt; 105%

Insurer ROE: 8–15% (variable)
Key metrics: Loss ratio (claims/premiums) · Expense ratio (expenses/premiums) · Solvency II ratio (regulatory capital)</div>

<h3>Sector-specific dynamics to understand</h3>
<p><strong>Information asymmetry:</strong> In healthcare, the doctor prescribes but doesn't pay. The insurer pays but doesn't prescribe. The patient benefits but often chooses neither the treatment nor the provider. This dissociation creates adverse selection (bad risks insure more), moral hazard (insured use more care when fully covered), and cost pressure that's difficult to control.</p>
<p><strong>Regulation as a valuation factor:</strong> In pharma, an approval rejection can destroy 90% of a drug-in-development's value. In insurance, Solvency II imposes capital levels that directly constrain growth strategy.</p>

<div class="insight-box"><strong>top-tier firms signal:</strong> Spontaneously asking "what is your client's combined ratio?" in an insurance case signals authentic sector knowledge. Similarly, "what is the status of the oncology division's pipeline?" in a pharma case shows you're thinking at the horizon that really matters in this sector — not current revenues but the future value of drugs in development.</div>`
);

})();

