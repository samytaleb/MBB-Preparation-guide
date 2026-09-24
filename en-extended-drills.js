(function() {
  function pa(id, fields) {
    for (var i = 0; i < DATA.modules.length; i++) {
      var dd = DATA.modules[i].drills;
      if (!dd) continue;
      for (var j = 0; j < dd.length; j++) {
        if (dd[j].id === id) { Object.assign(dd[j], fields); return; }
      }
    }
  }

  // ============================================================
  // data-extended.js — prompt_en patches
  // CF-D4/5/6 are already in English, no patch needed
  // ============================================================

  // Module 02 — Structuring
  pa("STR-D9",  { prompt_en: "A premium smartphone manufacturer sees sales down 20% over 2 years. Structure the analysis." });
  pa("STR-D10", { prompt_en: "A municipality wants to cut its budget by 15% without impacting essential services. Structure the analysis." });
  pa("STR-D11", { prompt_en: "An e-learning platform sees its completion rate fall from 45% to 28%. Structure the analysis." });
  pa("STR-D12", { prompt_en: "A consulting firm wants to launch a generative AI offering for industrial clients. Structure the Go/No-Go." });

  // Module 03 — Profitability
  pa("PRO-D4",  { prompt_en: "Revenue Product A: €80M (45% margin), Product B: €120M (25% margin). Weighted average margin?" });
  pa("PRO-D5",  { prompt_en: "A 5-star hotel sees RevPAR fall from €350 to €280 with stable 82% occupancy. Structure the analysis." });
  pa("PRO-D6",  { prompt_en: "EBITDA €20M on €160M revenue. General expenses fall by €8M. New EBITDA margin?" });

  // Module 04 — Growth
  pa("GRO-D3", { prompt_en: "A neobank with 2M customers wants to reach 5M in 18 months. Structure the growth levers." });
  pa("GRO-D4", { prompt_en: "6 levers to increase a B2B SaaS NRR from 95% to 115% in 12 months." });
  pa("GRO-D5", { prompt_en: "Marketplace at €1Bn GMV. Growth slowing from 60% to 20%. Diagnose the slowdown." });

  // Module 06 — Market Sizing
  pa("MS-D7",  { prompt_en: "Estimate the video streaming subscription market in France." });
  pa("MS-D8",  { prompt_en: "Estimate the gym and fitness club market in France." });
  pa("MS-D9",  { prompt_en: "Estimate the number of coffees consumed in France per day." });
  pa("MS-D10", { prompt_en: "Estimate the B2B cybersecurity market in Europe." });
  pa("MS-D11", { prompt_en: "Estimate the e-bike (electric bicycle) market in France." });

  // Module 07 — Pricing
  pa("PRI-D3", { prompt_en: "A streaming service wants to introduce 3 tiers (Basic, Standard, Premium). Structure the pricing analysis." });
  pa("PRI-D4", { prompt_en: "Price €80, volume 5,000. New price €96 (+20%). Elasticity -1.2. New revenue?" });
  pa("PRI-D5", { prompt_en: "A B2B SaaS wants to shift from per-user pricing to usage-based pricing. Structure risks and opportunities." });

  // Module 08 — M&A
  pa("MA-D2", { prompt_en: "A media group wants to acquire a podcast network (€50M). Structure the strategic due diligence." });
  pa("MA-D3", { prompt_en: "Target: EBITDA €15M. Comparable multiples: 12x. Control premium: 20%. Calculate acquisition price." });
  pa("MA-D4", { prompt_en: "How do you identify and validate post-acquisition synergies? Framework in 45 seconds." });

  // Module 09 — Operations
  pa("OPS-D3", { prompt_en: "A warehouse processes 10,000 parcels/day but max capacity is 15,000. Identify potential bottlenecks." });
  pa("OPS-D4", { prompt_en: "Machine uptime 87%, target 95%. 1h downtime costs €5,000. Machine runs 24h/7d. Annual cost of unplanned stoppages?" });
  pa("OPS-D5", { prompt_en: "Apply the 7 LEAN wastes (TIMWOOD) to a call center. 90 seconds." });

  // Module 10 — Strategy
  pa("STG-D2", { prompt_en: "A physical retailer facing Amazon: develop a defense strategy in 90 seconds." });
  pa("STG-D3", { prompt_en: "3 differentiation axes for a major bank vs a neobank. 60 seconds." });
  pa("STG-D4", { prompt_en: "OpenAI enters the productivity tools market (Word, Excel). What is the real threat to Microsoft?" });

  // Module 11 — Digital & AI
  pa("AI-D4", { prompt_en: "A procurement director wants to use AI to optimize supplier contracts. Structure the business case." });
  pa("AI-D5", { prompt_en: "Translate: 'Our fraud detection model has a recall of 94% and a precision of 88% on high-value cases.'" });
  pa("AI-D6", { prompt_en: "An insurer wants to replace its actuaries with ML models. Structure risks and success conditions." });
  pa("AI-D7", { prompt_en: "6 concrete generative AI use cases in an investment bank. 90 seconds." });

  // Module 12 — Exhibit Analysis
  pa("EXH-D3", { prompt_en: "Waterfall: Revenue 100, −COGS 40, −SG&A 25, −D&A 10, +Other 5. What is EBITDA vs EBIT? Analyze." });
  pa("EXH-D4", { prompt_en: "Scatter: 15 countries on GDP growth (x) vs consulting demand (y). Outliers: Germany (high GDP, low demand), India (high both), France (low GDP, medium demand). Key insights?" });
  pa("EXH-D5", { prompt_en: "Market shares 2020→2024: Player A 45%→38%, B 25%→30%, C 15%→18%, Others 15%→14%. Main conclusions?" });

  // Module 13 — Brainstorming
  pa("BR-D5", { prompt_en: "6 ways for a car manufacturer to monetize its vehicles after the sale. 90 seconds." });
  pa("BR-D6", { prompt_en: "5 risks of deploying generative AI in HR of a large company. 2 minutes." });
  pa("BR-D7", { prompt_en: "How can a fast-food chain reduce its food waste by 30%? Categorize your ideas." });

  // Module 14 — Synthesis
  pa("SYN-D4", { prompt_en: "Growth case — 3 levers: Lever 1 +€8M in 6 months, Lever 2 +€15M in 18 months, Lever 3 +€3M in 3 months. Synthesis in 30 seconds." });
  pa("SYN-D5", { prompt_en: "Your structure was good but you didn't quantify. How do you recover in the final synthesis?" });
  pa("SYN-D6", { prompt_en: "The interviewer says 'one more minute.' Summarize this profitability case (stable revenue, costs +€20M from energy) in 60 seconds." });

  // Module 15 — Recommendation
  pa("REC-D2", { prompt_en: "Startup acquisition: €50M, ready in 6 months. Internal build: €20M, 2 years, uncertain. Recommend." });
  pa("REC-D3", { prompt_en: "5 markets, budget €30M. A: ROI 3x (€15M), B: ROI 2.5x (€8M), C: ROI 1.5x (€7M), D&E: ROI <1x. Recommend." });

  // Module 16 — Advanced
  pa("ADV-D1", { prompt_en: "Blind case: 'service company', declining profit. In the first minute, how do you identify the case type?" });
  pa("ADV-D2", { prompt_en: "Trap case: Revenue is up 20% but management is worried. What are the traps in your initial structure?" });
  pa("ADV-D3", { prompt_en: "In 45 seconds, recover from a mathematical block. What do you say to the interviewer?" });

})();

