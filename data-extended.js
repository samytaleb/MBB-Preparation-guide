(function () {

// ============================================================
// i18n
// ============================================================
DATA.i18n = {
  fr: {
    title_dashboard:'Dashboard', title_today:"Aujourd'hui", title_academy:'Case Academy',
    title_cases:'Bibliothèque de Cases', title_drills:'Drills', title_math:'Mental Math',
    title_sizing:'Market Sizing', title_exhibits:"Analyse d'Exhibits", title_fundamentals:'Business Fundamentals',
    title_shl:'Préparation SHL', title_pei:'PEI Practice', title_stories:'Story Bank',
    title_mocks:'Mocks', title_howto:'Comment se Préparer', title_partners:'Trouver des Partenaires',
    title_mistakes:"Journal d'Erreurs", title_progress:'Progression', title_resources:'Ressources',
    title_casebooks:'Casebooks', title_calendar:'Calendrier', title_settings:'Paramètres',
    readiness:'Niveau de Préparation', ready:'Prêt', almost_ready:'Presque Prêt', needs_work:'À Travailler',
    countdown:'Compte à Rebours', days_until:'jours avant les grands cabinets', cases_done:'cases réalisés',
    target_cases:'objectif', streak:'Jours Consécutifs', days:'jours', today:"Aujourd'hui",
    skill_snapshot:'Snapshot Compétences', quick_actions:'Actions Rapides',
    strength_gap:'Forces & Points Faibles', math_accuracy:'Précision Math',
    adaptive_rec:'Recommandation Personnalisée', marked_done:'✓ Terminé', mark_read:'Marquer Fait',
    candidate_led:'Candidate-Led', interviewer_led:'Interviewer-Led', completed:'Complété', free:'Gratuit',
  },
  en: {
    title_dashboard:'Dashboard', title_today:'Today', title_academy:'Case Academy',
    title_cases:'Case Library', title_drills:'Drills', title_math:'Mental Math',
    title_sizing:'Market Sizing', title_exhibits:'Exhibit Analysis', title_fundamentals:'Business Fundamentals',
    title_shl:'SHL Prep', title_pei:'PEI Practice', title_stories:'Story Bank',
    title_mocks:'Mock Interviews', title_howto:'How to Prepare', title_partners:'Find Partners',
    title_mistakes:'Mistake Log', title_progress:'Progress', title_resources:'Resources',
    title_casebooks:'Casebooks', title_calendar:'Calendar', title_settings:'Settings',
    readiness:'Readiness', ready:'Ready', almost_ready:'Almost Ready', needs_work:'Needs Work',
    countdown:'Countdown', days_until:'days until les grands cabinets', cases_done:'cases done',
    target_cases:'target', streak:'Day Streak', days:'days', today:'Today',
    skill_snapshot:'Skill Snapshot', quick_actions:'Quick Actions',
    strength_gap:'Strengths & Gaps', math_accuracy:'Math Accuracy',
    adaptive_rec:'Adaptive Recommendation', marked_done:'✓ Done', mark_read:'Mark Done',
    candidate_led:'Candidate-Led', interviewer_led:'Interviewer-Led', completed:'Completed', free:'Free',
  }
};

// ============================================================
// Scoring — label_en
// ============================================================
const labelEnMap = { structuring:'Structuring', quantitative:'Quantitative', businessIntuition:'Business Intuition',
  hypothesisDriven:'Hypothesis-Driven', exhibits:'Exhibit Analysis', creativity:'Creativity',
  communication:'Communication', synthesis:'Synthesis', recommendation:'Recommendation' };
DATA.scoring.dimensions.forEach(d => { d.label_en = labelEnMap[d.id] || d.label; });

// ============================================================
// Resources — replace with full verified list
// ============================================================
DATA.resources = [
  // --- Case Practice ---
  { id:'mckinsey-official', name:'Firm Official Interview Prep', url:'https://www.mckinsey.com/careers/interviewing', category:'Case Practice', type:'Official', free:true, freeContent:'Official cases (Beautify, Diconsa...), PSI guide, Solve game overview', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'All', level:'All' },
  { id:'preplounge', name:'PrepLounge', url:'https://www.preplounge.com/', category:'Case Practice', type:'Platform', free:'Freemium', freeContent:'Case Basics (full), 200+ cases (limited), live partner matching (free), 200+ drills, forum', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'Cases, Live Practice, Drills', level:'All' },
  { id:'caseinterview', name:'CaseInterview.com (Victor Cheng)', url:'https://www.caseinterview.com/', category:'Case Practice', type:'Videos + Drills', free:true, freeContent:'6h free training videos, interactive math tool, framework PDFs, 800+ articles', quality:4, realism:4, tier1Relevance:4, priority:'Must', skill:'Frameworks, Math, Mindset', level:'Beginner-Intermediate' },
  { id:'igotanoffer', name:'IGotAnOffer', url:'https://igotanoffer.com/blogs/mckinsey-case-interview-blog', category:'Case Practice', type:'Guides + YouTube', free:'Freemium', freeContent:'Complete les grands cabinets case guide, framework library, market sizing guide, YouTube walkthroughs', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'Frameworks, Cases, PEI', level:'All' },
  { id:'craftingcases', name:'CraftingCases', url:'https://www.craftingcases.com/', category:'Case Practice', type:'Course + Guides', free:'Freemium', freeContent:'Free 7-day structuring course, Issue Tree guide, MECE guide, 5 free case examples', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'Structuring, Issue Trees', level:'Intermediate-Advanced' },
  { id:'myconsultingoffer', name:'My Consulting Offer', url:'https://www.myconsultingoffer.org/', category:'Case Practice', type:'Guides + Videos', free:'Freemium', freeContent:'100+ free articles, free video training, framework guides, firm-specific tips', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Frameworks, Cases', level:'Beginner-Intermediate' },
  { id:'masterthecase', name:'MasterTheCase', url:'https://masterthecase.com/', category:'Case Practice', type:'Videos + Casebooks', free:'Freemium', freeContent:'Free sample videos, full casebook library (Wharton, Darden, LBS) with free registration', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Cases, Casebooks', level:'Beginner-Intermediate' },
  { id:'rocketblocks', name:'RocketBlocks', url:'https://www.rocketblocks.me/', category:'Case Practice', type:'Drills', free:'Freemium', freeContent:'Structuring guide, MECE guide, 7-day free trial for drills', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Drills, Structuring', level:'Intermediate-Advanced' },
  { id:'management-consulted', name:'Management Consulted', url:'https://managementconsulted.com/', category:'Case Practice', type:'Cases + Resources', free:'Freemium', freeContent:'Free Case of the Month, framework guides, mental math drills, YouTube channel', quality:4, realism:3, tier1Relevance:4, priority:'Should', skill:'Cases, Frameworks, Math', level:'Beginner-Intermediate' },
  { id:'consultingcase101', name:'ConsultingCase101', url:'https://www.consultingcase101.com/', category:'Case Practice', type:'Case Database', free:'Freemium', freeContent:'Searchable case database by firm and type, partner matching', quality:3, realism:4, tier1Relevance:4, priority:'Should', skill:'Cases', level:'Intermediate' },
  { id:'casecoach', name:'CaseCoach', url:'https://casecoach.com/', category:'Case Practice', type:'Course + Videos', free:'Freemium', freeContent:'Free intro course, some case examples, YouTube walkthroughs with scoring commentary', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Frameworks, Cases', level:'Beginner-Intermediate' },
  { id:'htci', name:'Hacking The Case Interview', url:'https://www.hackingthecaseinterview.com/', category:'Case Practice', type:'Guides + Casebook Index', free:'Freemium', freeContent:'Framework guides, casebook list, case examples', quality:3, realism:3, tier1Relevance:3, priority:'Should', skill:'Casebooks, Frameworks', level:'Beginner' },
  { id:'consultingprep', name:'Tier 1 Prep', url:'https://www.mckinseyprep.com/', category:'Case Practice', type:'Guide', free:'Freemium', freeContent:'Free case prep ebook, intro framework guides', quality:3, realism:3, tier1Relevance:4, priority:'Optional', skill:'Frameworks', level:'Beginner' },
  { id:'case-prep', name:'Case-Prep.com', url:'https://www.case-prep.com/', category:'Case Practice', type:'Drills + Cases', free:'Freemium', freeContent:'Sample cases, structuring drills, mental math practice', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Drills, Cases', level:'Intermediate' },
  // --- SHL ---
  { id:'shl-direct', name:'SHL Direct (Official)', url:'https://www.shl.com/shldirect/en/practice-tests', category:'SHL', type:'Official SHL', free:true, freeContent:'Official free SHL sample tests: Numerical, Verbal, Inductive, Deductive, SJT, Checking, Coding — no login required', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'SHL All', level:'All' },
  { id:'assessmentday', name:'AssessmentDay', url:'https://www.assessmentday.co.uk/', category:'SHL', type:'Aptitude Practice', free:'Freemium', freeContent:'1 free full test per category: Numerical, Verbal, Inductive, Logical, Diagrammatic, Mechanical, SJT. Covers SHL & Saville formats.', quality:4, realism:4, tier1Relevance:4, priority:'Must', skill:'SHL Numerical, Verbal, Inductive', level:'All' },
  { id:'practice-aptitude-tests', name:'PracticeAptitudeTests.com', url:'https://www.practiceaptitudetests.com/', category:'SHL', type:'Aptitude Practice', free:'Freemium', freeContent:'1 free full test in 17 formats (Numerical, Verbal, Abstract, Logical, SJT...). Covers SHL, Saville, Korn Ferry.', quality:4, realism:4, tier1Relevance:4, priority:'Must', skill:'SHL All', level:'All' },
  { id:'graduates-first', name:'Graduates First', url:'https://www.graduatesfirst.com/', category:'SHL', type:'Aptitude Practice', free:'Freemium', freeContent:'Free registration: full Numerical + Verbal + Logical tests with explanations + 150 strategy videos + benchmarking', quality:4, realism:4, tier1Relevance:4, priority:'Must', skill:'Numerical, Verbal, Logical', level:'All' },
  { id:'psychometric-success', name:'Psychometric Success', url:'https://www.psychometric-success.com/', category:'SHL', type:'Practice + Guides', free:true, freeContent:'Free tests (no login): Numerical, Verbal, Diagrammatic, Spatial, Mechanical. Detailed guides on each test type.', quality:3, realism:3, tier1Relevance:3, priority:'Should', skill:'SHL Numerical, Verbal, Diagrammatic', level:'Beginner-Intermediate' },
  { id:'wikijob', name:'WikiJob — Aptitude Tests', url:'https://www.wikijob.co.uk/aptitude-tests', category:'SHL', type:'Practice + Guides', free:'Freemium', freeContent:'Free practice tests + comprehensive 2026 guides for each test type with worked examples', quality:3, realism:3, tier1Relevance:3, priority:'Should', skill:'Numerical, Verbal, Inductive', level:'Beginner-Intermediate' },
  { id:'jobtestprep', name:'JobTestPrep', url:'https://www.jobtestprep.com/', category:'SHL', type:'Practice', free:'Freemium', freeContent:'Free sample tests for general aptitude, personality, critical thinking. SHL-specific packs are paid.', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'SHL', level:'All' },
  { id:'123test', name:'123test.com', url:'https://www.123test.com/', category:'SHL', type:'Practice', free:true, freeContent:'Fully free: Abstract Reasoning, Inductive Reasoning, Intelligence Test, Career Aptitude — no signup needed', quality:3, realism:3, tier1Relevance:3, priority:'Should', skill:'Abstract, Inductive', level:'Beginner-Intermediate' },
  // --- Video & YouTube ---
  { id:'yt-igotanoffer', name:'IGotAnOffer (YouTube)', url:'https://www.youtube.com/@IGotAnOffer-Consulting', category:'Video & YouTube', type:'YouTube', free:true, freeContent:'Full case walkthroughs (les grands cabinets/Tier 1/Tier 1), framework videos, live mock interviews, PEI coaching', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'Cases, Frameworks, PEI', level:'All' },
  { id:'yt-management-consulted', name:'Management Consulted (YouTube)', url:'https://www.youtube.com/@ManagementConsulted', category:'Video & YouTube', type:'YouTube', free:true, freeContent:'500k+ subs. Case tips, frameworks, firm-specific guides, mental math, mock interviews', quality:4, realism:4, tier1Relevance:4, priority:'Must', skill:'Cases, Frameworks', level:'Beginner-Intermediate' },
  { id:'yt-craftingcases', name:'CraftingCases (YouTube)', url:'https://www.youtube.com/@CraftingCases', category:'Video & YouTube', type:'YouTube', free:true, freeContent:'Deep dives on MECE, Issue Trees, structuring. Fewer videos, very high depth per video.', quality:5, realism:5, tier1Relevance:5, priority:'Must', skill:'Structuring, Issue Trees', level:'Intermediate-Advanced' },
  { id:'yt-preplounge', name:'PrepLounge (YouTube)', url:'https://www.youtube.com/@PrepLounge', category:'Video & YouTube', type:'YouTube', free:true, freeContent:'Case examples with expert commentary, Tier 1-specific tips, webinars', quality:4, realism:5, tier1Relevance:5, priority:'Should', skill:'Cases, Frameworks', level:'All' },
  { id:'yt-casecoach', name:'CaseCoach (YouTube)', url:'https://www.youtube.com/c/CaseCoach', category:'Video & YouTube', type:'YouTube', free:true, freeContent:'Full case walkthroughs with scoring commentary, Tier 1 Written Case walkthroughs', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Cases, Scoring', level:'Intermediate' },
  { id:'yt-myconsultingoffer', name:'My Consulting Offer (YouTube)', url:'https://www.youtube.com/@MyConsultingOffer', category:'Video & YouTube', type:'YouTube', free:true, freeContent:'Case walkthroughs, firm-specific prep, PEI guidance, success stories', quality:4, realism:4, tier1Relevance:4, priority:'Should', skill:'Cases, PEI', level:'Beginner-Intermediate' },
];

// ============================================================
// NEW CASES — 10 additional
// ============================================================
DATA.cases.push(
  { id:"CASE-006", title:"Bank Digital Transformation", source:"les grands cabinets Banking", firm:"Grand Cabinet-style",
    sector:"Banking", type:"Strategy", difficulty:"Intermediate", duration:40, candidateLed:false,
    skills:["Strategy","Digital","Business Fundamentals"],
    prompt:"Your client is a top-5 French retail bank. Over the past 3 years they have lost 12% of their under-35 customer base to neo-banks (Revolut, N26). The CEO wants a strategy to win back and retain younger customers.",
    clarifications:["What is the current digital offering vs neo-banks?","What is the LTV of under-35 customers?","Budget constraints on digital investment?"],
    keyHypotheses:["Product gap: neo-banks offer superior UX","Neo-banks lack mortgage/savings → the bank has a life-stage advantage","Winning back churned customers costs 3x more than retaining those about to leave"],
    structure:"Why are customers leaving? (Product, Price, UX, Trust) → Can we retain/win back? → How? (Build vs Partner vs Acquire) → Prioritize",
    insights:["UX gap is #1 driver (78% of churned customers cite 'app experience')","Life-stage products (mortgage, investment) are a durable competitive moat","UX refresh via fintech partnership is faster/cheaper than in-house build"],
    recommendation:"Don't compete on current accounts — win on life-stage moments. Short-term: fintech UX partnership. Medium-term: dedicated under-35 mobile product with no fees + instant onboarding.",
    scoring:{structure:3,math:1,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-007", title:"E-commerce Profitability Crisis", source:"Tier 1 Practice", firm:"Tier 1",
    sector:"E-commerce", type:"Profitability", difficulty:"Intermediate", duration:35, candidateLed:true,
    skills:["Profitability","Operations","Structuring","Mental Math"],
    prompt:"Your client is a French online fashion retailer (€400M revenue). Despite growing 30% over 2 years they went from profitable to losing €15M/year. More growth, less profit — why?",
    clarifications:["What are the main cost lines and how have they evolved?","What is the return rate by category?","Has customer mix changed?"],
    keyHypotheses:["Returns rate destroying margins (fashion: 30-40% returns)","Fulfillment costs scaling faster than revenue","Paid acquisition cost inflating post-iOS14"],
    structure:"Revenue grew → Profit fell → Must be cost lines scaling worse than revenue → Identify which → Quantify → Fix top 2",
    insights:["Returns rate: 22% → 38%. Processing costs + unsellable items = €8M drag","Fulfillment cost per order +45% (fuel, labor, speed pressure)","Customer acquisition cost +60% but repeat LTV is 4x first purchase"],
    recommendation:"Three actions: 1) Returns reduction program (size guidance + keep incentive = €8M/yr saving). 2) Shift to owned acquisition (email, loyalty). 3) Renegotiate fulfillment contracts.",
    scoring:{structure:3,math:3,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-008", title:"Airline Turnaround", source:"Operations Practice", firm:"Grand Cabinet-style",
    sector:"Aviation", type:"Profitability + Operations", difficulty:"Intermediate", duration:40, candidateLed:true,
    skills:["Profitability","Operations","Structuring"],
    prompt:"A mid-size European airline has gone from +€80M to -€120M EBIT in 2 years. The board has 18 months before running out of cash. You are brought in on Day 1.",
    clarifications:["What drove the deterioration? (fuel, demand, specific events)","What is the fleet and network structure?","How do competitors on the same routes perform?"],
    keyHypotheses:["Fuel cost explosion (no hedging program)","Load factor below breakeven on key routes","Labor costs above European average from legacy contracts"],
    structure:"Identify €200M delta (Revenue vs Cost drivers) → Quick wins (0-6 months) vs structural fixes (6-18 months) → Prioritize by impact × feasibility",
    insights:["Fuel +65% = €130M incremental cost (no hedging)","Load factor 71% vs 78% breakeven on 40% of routes","6 loss-making Mediterranean routes = €30M/yr drag"],
    recommendation:"Immediate: close 6 loss-making routes (€30M), implement fuel hedging. Short-term: renegotiate labor, optimize yield management. Total turnaround potential: €90M EBIT improvement in 18 months.",
    scoring:{structure:3,math:3,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-009", title:"EdTech B2B Market Entry", source:"Growth Module", firm:"Tier 1",
    sector:"EdTech / SaaS", type:"Market Entry + Growth", difficulty:"Intermediate", duration:35, candidateLed:true,
    skills:["Market Entry","Market Sizing","Growth","Digital"],
    prompt:"Your client is a French language learning app with 5M MAU and €40M ARR. They are considering launching a B2B corporate training product. Should they?",
    clarifications:["Why is B2B being considered now?","Any existing corporate clients?","Target customer profile (SME, enterprise)?"],
    keyHypotheses:["Corporate language training market is large and growing","Client's B2C engagement (15 min/day avg) is a differentiator vs traditional classroom formats","B2B LTV is 5-10x B2C"],
    structure:"Market attractiveness (size, growth, competition) → Client fit (product, go-to-market) → Financial case → Entry strategy",
    insights:["Corporate language training: €2.5Bn France, €15Bn Europe, +8%/yr","Incumbents (Berlitz, Rosetta Stone Business) are expensive and not mobile-first","Key gap: need admin dashboard, compliance reporting, bulk licensing for enterprise"],
    recommendation:"Yes, enter B2B. Launch a 'Teams' product (€15/user/month) in 3 months, expand to enterprise with full L&D platform in 12 months. Target: €5M ARR year 1.",
    scoring:{structure:3,math:2,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-010", title:"Luxury Brand Pricing Decision", source:"Strategy Practice", firm:"Grand Cabinet-style",
    sector:"Luxury", type:"Pricing + Strategy", difficulty:"Advanced", duration:40, candidateLed:false,
    skills:["Pricing","Strategy","Business Fundamentals"],
    prompt:"Your client is a major French luxury maison. The CFO wants a blanket 15% price increase to offset rising materials costs. The CEO is hesitant. Should they increase prices, and by how much?",
    clarifications:["What is the brand positioning vs Hermès, Chanel, LV?","Customer breakdown by nationality?","How much are costs actually up?"],
    keyHypotheses:["Core iconic products have near-zero price elasticity (Hermès raises 8-10%/yr with no volume impact)","Entry-level products have higher elasticity — more price-sensitive aspirational buyers","Materials cost increase is only €25M on €1.2Bn revenue — a 2% headwind, not 15%"],
    structure:"Demand elasticity by product line → Competitor pricing behavior → Customer segment sensitivity → Financial impact of 3 scenarios",
    insights:["Iconic bags: inelastic — full 12-15% increase justified","Entry products (accessories): only 5-7% to protect aspirational volume","Chinese buyers (35% of revenue) sensitive to price gaps vs local Chinese markets"],
    recommendation:"Differentiated pricing: iconic bags +12-15%, entry products +5-7%. Do NOT blanket 15%. Net: €40-50M additional margin vs €25M cost headwind.",
    scoring:{structure:3,math:3,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-011", title:"Private Equity Healthcare Investment", source:"M&A Module", firm:"Grand Cabinet-style",
    sector:"Private Equity / Healthcare", type:"M&A + Valuation", difficulty:"Advanced", duration:45, candidateLed:false,
    skills:["M&A","Valuation","Healthcare","Structuring"],
    prompt:"A PE fund is considering investing €200M for a 60% stake in a French home care services company (elderly care). The fund has a 5-year exit horizon. Should they invest?",
    clarifications:["Current financials (Revenue, EBITDA, growth rate)?","Regulatory environment for home care pricing in France?","Current shareholder structure and exit path?"],
    keyHypotheses:["Demographic tailwind: aging population = structural demand","Fragmented market = roll-up opportunity","Regulatory risk: pricing often set by government (limited pricing power)"],
    structure:"Market attractiveness → Company quality (financials, moat) → Value creation levers (organic + M&A) → Valuation → Risks",
    insights:["Market: €6Bn France, +7%/yr — demographic tailwind is real","Company: €80M revenue, €10M EBITDA (12.5%), +15%/yr","Implied valuation: €200M / 60% = €333M total = 33x EBITDA — sector comps are 15-20x","French government controls reimbursement rates — pricing power structurally limited"],
    recommendation:"Attractive sector, good company — but overpriced at 33x EBITDA. Fair value: €250-280M total. Recommend bid at €240M with milestone structure. Walk away above €300M.",
    scoring:{structure:3,math:3,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-012", title:"Regional Hospital Deficit Turnaround", source:"Public Sector", firm:"Grand Cabinet-style",
    sector:"Healthcare / Public", type:"Operations", difficulty:"Intermediate", duration:35, candidateLed:true,
    skills:["Operations","Structuring","Public Sector"],
    prompt:"A major regional French hospital (800 beds, €600M budget) runs a €50M annual deficit. The health authority asks you to identify how to break even within 3 years without cutting care quality.",
    clarifications:["Main cost lines and revenue sources?","Benchmark vs similar hospitals (GHM data)?","Any departments with known inefficiencies?"],
    keyHypotheses:["OR utilization is low (French public average: 65-70% vs 80% benchmark)","Medical coding errors lead to under-reimbursement from CNAM","Purchasing costs above benchmark (public sector procurement)"],
    structure:"Revenue optimization (coding, activity mix) → Cost reduction (OR utilization, purchasing, support services) → Prioritize by impact × feasibility × political acceptability",
    insights:["OR utilization 68% vs 80% benchmark → 500 additional cases/yr = €8M revenue","Coding errors on 12% of T2A claims = €6M under-reimbursement annually","Purchasing: 18% above benchmark on consumables = €5M saving with GPO","Outsourcing laundry/cleaning: €8M potential saving"],
    recommendation:"Year 1: code review (€6M) + OR program (€4M) + purchasing renegotiation (€5M). Year 2: support services restructuring (€8M). Year 3: activity mix optimization (€8M). Total: €31M — deficit goes from €50M to €19M. Full breakeven by year 4.",
    scoring:{structure:3,math:3,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-013", title:"Premium Beverage Launch", source:"Growth Module", firm:"Tier 1",
    sector:"FMCG", type:"Growth + Pricing", difficulty:"Beginner", duration:30, candidateLed:true,
    skills:["Market Sizing","Pricing","Growth","Business Fundamentals"],
    prompt:"Your client is a major French F&B company (€3Bn revenue) launching a premium functional beverage (energy + wellness) targeting 25-40 year olds. What price point, what distribution, and what is the revenue potential?",
    clarifications:["Unique value prop vs Red Bull, Monster, Celsius?","Target channels (supermarket, gyms, online)?","Production cost per unit?"],
    keyHypotheses:["Premium wellness positioning justifies €2.50-3.20 price vs €1.80 mainstream energy","Gym/specialty retail first to build premium perception, then GMS in year 2","French functional beverage market growing 15%/yr"],
    structure:"Market sizing → Competitive pricing benchmark → Value-based pricing → Distribution → Revenue projection",
    insights:["French functional beverage market: €800M, +15%/yr","Price comps: Red Bull €1.80, Celsius €2.50, premium kombucha €3-4","WTP analysis: target customer €2.80-3.20","Year 1 at 1% share: €8M → Year 3 at 5% share: €60M at 20% margin"],
    recommendation:"Price at €2.99. Launch via gyms and health food stores (premium positioning), enter GMS year 2. Key success factor: fitness influencer partnerships at launch.",
    scoring:{structure:2,math:2,hypothesis:2,synthesis:2,communication:3}
  },
  { id:"CASE-014", title:"AI Claims Automation Acquisition", source:"Digital & AI Module", firm:"Entretien Consulting style",
    sector:"Technology / AI / Insurance", type:"Strategy + M&A", difficulty:"Advanced", duration:45, candidateLed:false,
    skills:["Strategy","Digital","M&A","AI Business Case"],
    prompt:"A large European insurance group found an AI startup using computer vision to automate claims damage assessment. The startup has 20 clients, €4M ARR, growing 200%. Acquisition price: €80M. Should the insurer acquire?",
    clarifications:["Current claims assessment process and its total cost?","Technology defensibility vs other AI vendors?","Build vs buy: could they build this internally?"],
    keyHypotheses:["Claims automation = major cost saving for the insurer","€80M justified by NPV of savings","Integration risk: AI needs proprietary data to keep improving — data ownership is critical"],
    structure:"Strategic rationale (buy vs build?) → Value creation (NPV of cost savings) → Valuation → Integration risks → Recommendation",
    insights:["Claims process: €250 fully-loaded per claim × 800,000 claims/yr = €200M total","AI automatable: 60% of claims at 70% cost reduction = €84M/yr savings","NPV over 5 years (phased): €180-220M >> €80M acquisition price","Build alternative: 3-4 years, €30-40M, uncertain outcome","€80M = 20x ARR for 200%-growth startup — market rate"],
    recommendation:"Acquire at ≤€80M. NPV far exceeds price. Conditions: retain core tech team (3-yr earnout), ensure data ownership clause, begin claims system integration planning Day 1.",
    scoring:{structure:3,math:3,hypothesis:3,synthesis:3,communication:3}
  },
  { id:"CASE-015", title:"Sustainable Fashion Brand Growth", source:"Strategy Practice", firm:"Tier 1",
    sector:"Fashion / Consumer", type:"Growth", difficulty:"Beginner", duration:30, candidateLed:true,
    skills:["Growth","Structuring","Market Sizing","Brainstorming"],
    prompt:"Your client is a French sustainable fashion brand (€20M revenue, 25%/yr growth, 15% EBITDA). Growth slowed from 40% to 25% and they want to re-accelerate to 40%+. What do you recommend?",
    clarifications:["Current channels (DTC, wholesale, marketplace)?","Geographies currently served?","Customer retention and repeat purchase metrics?"],
    keyHypotheses:["Core French audience is saturating (niche premium sustainable segment)","International demand untapped (30% of web traffic from outside France)","Product range too narrow — limits repeat purchase frequency"],
    structure:"Why is growth slowing? (Acquisition saturation, rising churn, competition) → Growth levers (segments, channels, geographies, products) → Prioritize",
    insights:["French core segment 80% penetrated — saturation confirmed","UK and Germany: large markets, French brand has premium cachet","Corporate gifting: growing B2B demand for sustainable branded gifts (untapped)","Only 3 core collections → no reason for loyal customers to return more often"],
    recommendation:"Two priorities: 1) UK launch targeting €5M incremental revenue year 1. 2) SKU expansion (accessories, homewear) to increase basket and visit frequency. Path to 40%+ growth.",
    scoring:{structure:2,math:1,hypothesis:3,synthesis:3,communication:3}
  }
);

// ============================================================
// MENTAL MATH — 40 additional exercises
// ============================================================
DATA.mentalMath.exercises.push(
  { id:"MM21", cat:"Percentages", q:"What is 37.5% of 160?", a:"60", hint:"37.5% = 3/8. 160 × 3/8 = 60" },
  { id:"MM22", cat:"Percentages", q:"Revenue went from 45M to 54M. What % growth?", a:"20%", hint:"9/45 = 1/5 = 20%" },
  { id:"MM23", cat:"Percentages", q:"After a 30% increase a price is 130€. Original price?", a:"100€", hint:"130 / 1.30 = 100" },
  { id:"MM24", cat:"Percentages", q:"Costs are 65% of revenue. Revenue = 120M. Costs?", a:"78M", hint:"120 × 0.65 = 78M" },
  { id:"MM25", cat:"Percentages", q:"Two successive 10% increases. Total % increase?", a:"21%", hint:"1.1 × 1.1 = 1.21 → 21%" },
  { id:"MM26", cat:"Margins", q:"Revenue 80M, gross margin 45%. Gross profit?", a:"36M", hint:"80 × 0.45 = 36M" },
  { id:"MM27", cat:"Margins", q:"COGS 60M on 100M revenue. Gross margin?", a:"40%", hint:"(100-60)/100 = 40%" },
  { id:"MM28", cat:"Margins", q:"EBITDA margin 18% on €250M revenue. EBITDA?", a:"45M€", hint:"250 × 0.18 = 45M" },
  { id:"MM29", cat:"Margins", q:"Contribution margin 60€/unit. Fixed costs 3M. Volume 60,000 units. Operating profit?", a:"600k€", hint:"60k × 60 = 3.6M − 3M = 600k" },
  { id:"MM30", cat:"Margins", q:"Gross margin went from 38% to 42%. Revenue 200M. Impact?", a:"+8M€", hint:"4% × 200M = 8M" },
  { id:"MM31", cat:"CAGR", q:"From 50M to 200M in 4 years. CAGR?", a:"~41%", hint:"4^0.25 ≈ 1.41 → 41%" },
  { id:"MM32", cat:"CAGR", q:"Revenue doubles in 5 years. CAGR?", a:"~15%", hint:"Rule of 70: 70/5 = 14. More precisely 2^(1/5) ≈ 1.149 → ~15%" },
  { id:"MM33", cat:"CAGR", q:"Market 100M today, CAGR 8%. Value in 3 years?", a:"~126M", hint:"100 × 1.08³ ≈ 100 × 1.26 = 126M" },
  { id:"MM34", cat:"CAGR", q:"From 200M to 270M in 3 years. Approx CAGR?", a:"~10%", hint:"270/200=1.35. ∛1.35 ≈ 1.10 → 10%" },
  { id:"MM35", cat:"Market Share", q:"You have 8M revenue in a 64M market. Market share?", a:"12.5%", hint:"8/64 = 1/8 = 12.5%" },
  { id:"MM36", cat:"Market Share", q:"Market 400M. Share goes from 15% to 20%. Revenue increase?", a:"20M€", hint:"5% × 400M = 20M" },
  { id:"MM37", cat:"Market Share", q:"Players: A 120M, B 80M, C 50M, Others 50M. A's market share?", a:"40%", hint:"Total=300M. 120/300=40%" },
  { id:"MM38", cat:"Market Share", q:"You have 20% share. Competitor takes 5pts from you. New revenue? (Market=500M)", a:"75M€", hint:"New share: 15%. 15% × 500M = 75M" },
  { id:"MM39", cat:"Breakeven", q:"Fixed costs 15M. Variable margin 25€/unit. Breakeven volume?", a:"600,000 units", hint:"15M / 25 = 600,000" },
  { id:"MM40", cat:"Breakeven", q:"Investment 8M. Flows: Y1 1.5M, Y2 2M, Y3 2.5M, Y4 2.5M. Payback?", a:"~3.8 years", hint:"Y1+Y2+Y3=6M. Need 2M more: 2/2.5=0.8 → 3.8 years" },
  { id:"MM41", cat:"Breakeven", q:"Price 50€, Variable cost 30€, Fixed costs 5M. Units to break even?", a:"250,000", hint:"Contribution: 50-30=20. 5M/20=250,000" },
  { id:"MM42", cat:"Division", q:"7,200 / 18 = ?", a:"400", hint:"7200/18=400" },
  { id:"MM43", cat:"Division", q:"4,500 / 36 = ?", a:"125", hint:"4500/36=125" },
  { id:"MM44", cat:"Division", q:"13,200 / 24 = ?", a:"550", hint:"13200/24=550" },
  { id:"MM45", cat:"Division", q:"91,000 / 7 = ?", a:"13,000", hint:"91k/7=13k" },
  { id:"MM46", cat:"Multiplication", q:"45 × 22 = ?", a:"990", hint:"45×20=900 + 45×2=90 = 990" },
  { id:"MM47", cat:"Multiplication", q:"2.4M × 15% = ?", a:"360k", hint:"2.4M × 0.15 = 360k" },
  { id:"MM48", cat:"Multiplication", q:"125 × 48 = ?", a:"6,000", hint:"125×50−125×2=6250−250=6000" },
  { id:"MM49", cat:"Multiplication", q:"3.6M × 35% = ?", a:"1.26M", hint:"3.6×0.35=1.26M" },
  { id:"MM50", cat:"Multiplication", q:"78 × 125 = ?", a:"9,750", hint:"78/8×1000=9.75k" },
  { id:"MM51", cat:"Margins", q:"Churn 8%/yr. 100,000 customers today. How many in 3 years?", a:"~78,000", hint:"100k × 0.92³ ≈ 78k" },
  { id:"MM52", cat:"Percentages", q:"LTV = €500. CAC = €120. LTV/CAC ratio?", a:"4.2x", hint:"500/120≈4.2" },
  { id:"MM53", cat:"CAGR", q:"Market grew from 1.5Bn to 2.2Bn in 4 years. Approx CAGR?", a:"~10%", hint:"2.2/1.5≈1.47. ⁴√1.47≈1.10→10%" },
  { id:"MM54", cat:"Breakeven", q:"SaaS: MRR 500k, fixed costs 200k/mo, variable costs 20% of revenue. Profitable?", a:"Yes — 200k profit", hint:"500k−100k variable−200k fixed=200k profit" },
  { id:"MM55", cat:"Market Share", q:"Total market 2Bn€. Top 3: 40%, 25%, 15%. Others' total revenue?", a:"400M€", hint:"20% × 2Bn=400M" },
  { id:"MM56", cat:"Margins", q:"Combined ratio 104%. Premiums 300M. Underwriting loss?", a:"12M€", hint:"104%×300M=312M costs. Loss=12M" },
  { id:"MM57", cat:"CAGR", q:"€1 at 7% CAGR for 10 years. Value? (Rule of 72)", a:"~€1.97", hint:"Rule of 72: doubles in 10.3 yrs at 7%. ≈€1.97" },
  { id:"MM58", cat:"Division", q:"€4.2M operating profit on €35M revenue. Operating margin?", a:"12%", hint:"4.2/35=12%" },
  { id:"MM59", cat:"Percentages", q:"Price elasticity = -2. Revenue 100M. Price up 5%. New revenue?", a:"94.5M", hint:"Volume falls 10%. New revenue: 1.05×0.90=0.945→94.5M" },
  { id:"MM60", cat:"Margins", q:"NIM was 2.1%, now 1.7% on an assets base of €50Bn. Annual revenue impact?", a:"-200M€", hint:"−0.4% × 50Bn=−200M€" }
);

// ============================================================
// MODULE DRILLS — augment thin modules
// ============================================================
function addDrills(id, drills) {
  const m = DATA.modules.find(m => m.id === id);
  if (m) m.drills.push(...drills);
}
function addSection(id, section) {
  const m = DATA.modules.find(m => m.id === id);
  if (m) m.sections.push(section);
}

addDrills("01", [
  { id:"CF-D4", type:"communication", prompt:"You found revenue decline is 70% due to one product line. State this as a les grands cabinets recommendation (answer first) in 2 sentences.", time:30 },
  { id:"CF-D5", type:"structuring", prompt:"An online marketplace sees engagement drop 25% in 6 months. Formulate your initial hypothesis before looking at any data.", time:45 },
  { id:"CF-D6", type:"synthesis", prompt:"In 20 seconds: what is the difference between a framework and a custom structure?", time:20 }
]);

addDrills("02", [
  { id:"STR-D9", type:"structuring", prompt:"Un constructeur de smartphones premium voit ses ventes baisser de 20% en 2 ans. Structurez.", time:60 },
  { id:"STR-D10", type:"structuring", prompt:"Une municipalité veut réduire son budget de 15% sans impacter les services essentiels. Structurez.", time:90 },
  { id:"STR-D11", type:"structuring", prompt:"Une plateforme e-learning voit son taux de complétion passer de 45% à 28%. Structurez l'analyse.", time:60 },
  { id:"STR-D12", type:"structuring", prompt:"Un cabinet de conseil veut lancer une offre IA générative pour clients industriels. Structurez le Go/No-Go.", time:90 }
]);

addDrills("03", [
  { id:"PRO-D4", type:"math", prompt:"Revenue Product A: 80M (marge 45%), Product B: 120M (marge 25%). Weighted average margin?", time:90 },
  { id:"PRO-D5", type:"structuring", prompt:"Un hôtel 5★ voit son RevPAR baisser de 350€ à 280€ avec occupancy stable à 82%. Structurez.", time:90 },
  { id:"PRO-D6", type:"math", prompt:"EBITDA 20M sur 160M revenue. Frais généraux baissent de 8M. Nouvel EBITDA margin?", time:60 }
]);

addDrills("04", [
  { id:"GRO-D3", type:"structuring", prompt:"Une néobanque à 2M clients veut atteindre 5M en 18 mois. Structurez les leviers.", time:90 },
  { id:"GRO-D4", type:"brainstorming", prompt:"6 leviers pour faire passer le NRR d'un SaaS B2B de 95% à 115% en 12 mois.", time:90 },
  { id:"GRO-D5", type:"structuring", prompt:"Marketplace à 1Bn€ GMV. Croissance ralentit de 60% à 20%. Diagnostiquez.", time:90 }
]);

addDrills("06", [
  { id:"MS-D7", type:"sizing", prompt:"Estimez le marché des abonnements streaming vidéo en France.", time:300 },
  { id:"MS-D8", type:"sizing", prompt:"Estimez le marché des salles de sport en France.", time:300 },
  { id:"MS-D9", type:"sizing", prompt:"Estimez le nombre de cafés consommés en France par jour.", time:300 },
  { id:"MS-D10", type:"sizing", prompt:"Estimez le marché de la cybersécurité B2B en Europe.", time:300 },
  { id:"MS-D11", type:"sizing", prompt:"Estimez la taille du marché des vélos électriques en France.", time:300 }
]);

addDrills("07", [
  { id:"PRI-D3", type:"structuring", prompt:"Un streaming veut passer à 3 tiers (Basic, Standard, Premium). Structurez l'analyse de pricing.", time:90 },
  { id:"PRI-D4", type:"math", prompt:"Price 80€, volume 5000. New price 96€ (+20%). Elasticity -1.2. New revenue?", time:120 },
  { id:"PRI-D5", type:"structuring", prompt:"Un SaaS B2B veut passer d'un pricing par user à un pricing à l'usage. Structurez risques et opportunités.", time:90 }
]);

addDrills("08", [
  { id:"MA-D2", type:"structuring", prompt:"Un groupe média veut acquérir un podcast network (50M€). Structurez la due diligence stratégique.", time:90 },
  { id:"MA-D3", type:"math", prompt:"Cible: EBITDA 15M€. Comparables: 12x. Premium de contrôle 20%. Prix d'acquisition?", time:90 },
  { id:"MA-D4", type:"structuring", prompt:"Comment identifier et valider des synergies post-acquisition ? Framework en 45 secondes.", time:45 }
]);

addDrills("09", [
  { id:"OPS-D3", type:"structuring", prompt:"Un entrepôt traite 10,000 colis/jour mais capacité max est 15,000. Identifiez les goulots potentiels.", time:90 },
  { id:"OPS-D4", type:"math", prompt:"Machine uptime 87%, target 95%. 1h d'arrêt = 5,000€. Machine tourne 24h/7j. Coût annuel des arrêts non-planifiés?", time:120 },
  { id:"OPS-D5", type:"brainstorming", prompt:"Appliquez les 7 gaspillages LEAN (TIMWOOD) à un call center. 90 secondes.", time:90 }
]);

addDrills("10", [
  { id:"STG-D2", type:"structuring", prompt:"Un retailer physique face à Amazon : développez une stratégie de défense en 90 secondes.", time:90 },
  { id:"STG-D3", type:"brainstorming", prompt:"3 axes de différenciation d'une grande banque vs une néobanque. 60 secondes.", time:60 },
  { id:"STG-D4", type:"structuring", prompt:"OpenAI entre sur le marché des outils de productivité (Word, Excel). Quelle est la menace réelle pour Microsoft?", time:90 }
]);

addDrills("11", [
  { id:"AI-D4", type:"structuring", prompt:"Un directeur achats veut utiliser l'IA pour optimiser ses contrats fournisseurs. Structurez le business case.", time:90 },
  { id:"AI-D5", type:"translation", prompt:"Traduisez : 'Notre modèle de détection de fraude a un recall de 94% et une precision de 88% sur les cas high-value.'", time:60 },
  { id:"AI-D6", type:"structuring", prompt:"Une assurance veut remplacer ses actuaires par des modèles ML. Structurez risques et conditions de succès.", time:90 },
  { id:"AI-D7", type:"brainstorming", prompt:"6 cas d'usage concrets de l'IA générative dans une banque d'investissement. 90 secondes.", time:90 }
]);

addDrills("12", [
  { id:"EXH-D3", type:"exhibit", prompt:"Waterfall: Revenue 100, −COGS 40, −SG&A 25, −D&A 10, +Other 5. What is EBITDA vs EBIT? Analysez.", time:60 },
  { id:"EXH-D4", type:"exhibit", prompt:"Scatter: 15 countries on GDP growth (x) vs consulting demand (y). Outliers: Germany (high GDP, low demand), India (high both), France (low GDP, medium demand). Insight?", time:90 },
  { id:"EXH-D5", type:"exhibit", prompt:"Market shares 2020→2024: Player A 45%→38%, B 25%→30%, C 15%→18%, Others 15%→14%. Principales conclusions?", time:90 }
]);

addDrills("13", [
  { id:"BR-D5", type:"brainstorming", prompt:"6 façons pour un constructeur auto de monétiser ses véhicules après la vente. 90 secondes.", time:90 },
  { id:"BR-D6", type:"brainstorming", prompt:"5 risques du déploiement d'IA générative dans les RH d'une grande entreprise. 2 minutes.", time:120 },
  { id:"BR-D7", type:"brainstorming", prompt:"Comment une chaîne de fast-food peut-elle réduire son gaspillage alimentaire de 30% ? Catégoriser.", time:120 }
]);

addDrills("14", [
  { id:"SYN-D4", type:"synthesis", prompt:"Growth case — 3 leviers: Levier 1 +8M€ en 6 mois, Levier 2 +15M€ en 18 mois, Levier 3 +3M€ en 3 mois. Synthèse en 30 secondes.", time:30 },
  { id:"SYN-D5", type:"synthesis", prompt:"Votre structure était bonne mais vous n'avez pas quantifié. Comment rattraper dans la synthèse finale?", time:45 },
  { id:"SYN-D6", type:"synthesis", prompt:"L'interviewer dit 'one more minute.' Résumez ce cas profitability (revenue stable, coûts +20M dus à énergie) en 60 secondes.", time:60 }
]);

addDrills("15", [
  { id:"REC-D2", type:"recommendation", prompt:"Acquisition startup: 50M€, prêt en 6 mois. Build interne: 20M€, 2 ans, incertain. Recommandez.", time:45 },
  { id:"REC-D3", type:"recommendation", prompt:"5 marchés, budget 30M€. A: ROI 3x (15M€), B: ROI 2.5x (8M€), C: ROI 1.5x (7M€), D&E: ROI <1x. Recommandez.", time:45 }
]);

addDrills("16", [
  { id:"ADV-D1", type:"structuring", prompt:"Blind case: 'service company', profit qui baisse. Dès la 1ère minute, comment identifiez-vous le type de cas?", time:60 },
  { id:"ADV-D2", type:"structuring", prompt:"Trap case: Les revenus augmentent de 20% mais le management est inquiet. Quels pièges dans votre structure initiale?", time:60 },
  { id:"ADV-D3", type:"synthesis", prompt:"En 45 secondes, récupérez d'un blocage mathématique. Que dites-vous à l'interviewer?", time:45 }
]);

// ============================================================
// HOW TO PREPARE — Bilingual beginner guide
// ============================================================
DATA.howToPrepare = {
  fr: [
    {
      title: "🎯 C'est quoi un entretien consulting ?",
      body: `<h3>Le cabinet de conseil en 2 minutes</h3>
<p>les grands cabinets, Tier 1, Tier 1 (le "Tier 1") sont les cabinets de stratégie les plus prestigieux au monde. Leur rôle : aider les PDG de grandes entreprises à prendre des décisions complexes. Un consultant junior analyse des problèmes business, produit des recommandations, et présente aux dirigeants.</p>
<p>Pour sélectionner leurs consultants, ces cabinets utilisent un processus d'entretien très structuré. Le CV ouvre la porte — l'entretien fait la sélection.</p>
<h3>Format Entretien Consulting</h3>
<table class="data-table">
<tr><th>Partie</th><th>Durée</th><th>Ce qu'on teste</th></tr>
<tr><td><strong>PEI</strong></td><td>~15-20 min</td><td>Leadership, Drive, Connection, Growth</td></tr>
<tr><td><strong>Case</strong></td><td>~25-30 min</td><td>Raisonnement structuré, analyse, recommandation</td></tr>
</table>
<p>Tu passes <strong>2 tours</strong>, chacun avec ces deux parties. Le case est une simulation d'un vrai problème business : l'interviewer joue le client, toi tu joues le consultant junior.</p>
<h3>Format le cabinet</h3>
<ol>
<li><strong>Tests SHL en ligne</strong> — Numérique (18q), Inductif (24q), Verbal (30q). Chronométrés, passés de chez toi.</li>
<li><strong>Entretien(s)</strong> — Si tu passes les SHL : case + motivation.</li>
</ol>
<div class="insight-box"><strong>Priorité immédiate :</strong> Pour l entretien → case + PEI d'abord. Pour le cabinet → commence par les SHL.</div>`
    },
    {
      title: "📊 Les 7 types de cas business",
      body: `<p>Il n'existe pas un seul type de case. En voici 7, par fréquence chez les grands cabinets :</p>
<h3>1. Profitability (~35%) — le plus fréquent</h3>
<p><em>"Notre retailer voit son profit baisser de 20%. Que se passe-t-il ?"</em></p>
<p><strong>Structure :</strong> Profit = Revenue − Costs. Le problème vient de l'un des deux. On cherche lequel, puis pourquoi.</p>
<h3>2. Market Entry (~20%)</h3>
<p><em>"Notre client veut entrer sur le marché américain. Doit-il ? Comment ?"</em></p>
<p><strong>Structure :</strong> Le marché est-il attractif ? Peut-on gagner ? Comment entrer ?</p>
<h3>3. Growth (~15%)</h3>
<p><em>"Notre client veut doubler son CA en 3 ans. Comment ?"</em></p>
<p><strong>Structure :</strong> Nouveaux clients / Clients existants / Nouveaux produits-marchés</p>
<h3>4. M&A (~10%)</h3>
<p><em>"Doit-on acquérir ce concurrent ?"</em></p>
<p><strong>Structure :</strong> Rationale → Attractivité cible → Synergies → Risques → Prix</p>
<h3>5. Operations (~8%)</h3>
<p><em>"La productivité de l'usine a chuté de 15%."</em></p>
<p><strong>Structure :</strong> Identifier le goulot → Mesurer l'écart vs benchmark → Actions</p>
<h3>6. Pricing (~5%)</h3>
<p><em>"Notre client veut augmenter ses prix. De combien ?"</em></p>
<p><strong>Structure :</strong> 3 approches (cost-plus, concurrence, value-based) → choisir la bonne</p>
<h3>7. Market Sizing (~7%)</h3>
<p><em>"Estimez le marché des drones de livraison en France."</em></p>
<p><strong>Structure :</strong> Équation → Hypothèses → Calcul → Sanity check → Implication</p>
<div class="insight-box"><strong>Clé :</strong> La plupart des cases les grands cabinets sont <em>mixtes</em> — un case peut commencer en profitabilité et dériver vers Market Entry. Reconnaître le shift est une compétence avancée.</div>`
    },
    {
      title: "🎬 Comment se déroule un vrai case ?",
      body: `<h3>Minute par minute — 30 minutes</h3>
<table class="data-table">
<tr><th>Temps</th><th>Phase</th><th>Ce que tu fais</th><th>Erreur fréquente</th></tr>
<tr><td>0-2 min</td><td>Écoute</td><td>Prendre des notes sans interrompre</td><td>Commencer à structurer pendant que l'interviewer parle</td></tr>
<tr><td>2-4 min</td><td>Clarification</td><td>1-2 questions ciblées + reformulation</td><td>Poser 5 questions ou ne pas reformuler</td></tr>
<tr><td>4-7 min</td><td>Structuration</td><td>Silence de réflexion → annoncer structure + hypothèse</td><td>Framework mémorisé appliqué sans adaptation</td></tr>
<tr><td>7-22 min</td><td>Analyse</td><td>Explorer branches, demander données, calculer</td><td>Analyse exhaustive au lieu de prioriser</td></tr>
<tr><td>22-25 min</td><td>Synthèse</td><td>Résumer les findings en 30-60s (answer first)</td><td>Résumé chronologique sans conclusion</td></tr>
<tr><td>25-30 min</td><td>Recommandation</td><td>Décision nette + risques + next steps</td><td>Recommandation vague ou absente</td></tr>
</table>
<h3>Les 3 choses que les grands cabinets observe systématiquement</h3>
<ol>
<li><strong>Tu penses à voix haute ?</strong> les grands cabinets veut entendre ton raisonnement, pas seulement ta conclusion.</li>
<li><strong>Tu es à l'aise avec les chiffres ?</strong> Arrondir intelligemment = compétence valorisée. Bloquer = perte de confiance.</li>
<li><strong>Tu recommandes ?</strong> Un consultant qui ne prend pas position n'apporte rien. les grands cabinets veut "Je recommande X."</li>
</ol>
<div class="warning-box"><strong>Piège du débutant :</strong> Chercher "la bonne réponse." Il n'y en a pas. les grands cabinets évalue <em>comment tu penses</em>, pas ce à quoi tu arrives.</div>`
    },
    {
      title: "🧠 Le PEI les grands cabinets — 4 dimensions",
      body: `<h3>Ce n'est pas une conversation informelle</h3>
<p>Le PEI compte pour ~50% de la décision. les grands cabinets évalue 4 dimensions :</p>
<h3>1. Connection / Personal Impact</h3>
<p>Tu sais construire des relations authentiques avec des personnes très différentes de toi.</p>
<p><em>Question type :</em> "Tell me about a time you connected with someone very different from yourself."</p>
<h3>2. Leadership</h3>
<p>Tu obtiens des résultats <em>à travers</em> les autres, pas seulement par ton travail individuel.</p>
<p><em>Question type :</em> "Tell me about a time you led a team through a challenging situation."</p>
<h3>3. Growth / Learning</h3>
<p>Tu cherches activement le feedback difficile. Tu transformes les échecs en progrès réels.</p>
<p><em>Question type :</em> "Tell me about a significant failure and what you learned."</p>
<h3>4. Drive / Entrepreneurial Drive</h3>
<p>Ambition réelle, persistance face aux obstacles, impact mesurable.</p>
<p><em>Question type :</em> "Tell me about a time you pushed through when others would have given up."</p>
<h3>La méthode SAI (Situation-Action-Impact)</h3>
<table class="data-table">
<tr><th>Élément</th><th>% du temps</th><th>Piège</th></tr>
<tr><td>Situation</td><td>15-20%</td><td>Trop de contexte</td></tr>
<tr><td>Actions (TON rôle uniquement)</td><td>50-60%</td><td>Dire "nous" au lieu de "je"</td></tr>
<tr><td>Impact (chiffré si possible)</td><td>15-20%</td><td>Impact vague ("ça s'est bien passé")</td></tr>
</table>
<h3>Comment préparer tes histoires</h3>
<ol>
<li>Lister 8-12 expériences (stages, projets, sport, associatif)</li>
<li>Pour chaque expérience : quelle(s) dimension(s) illustre-t-elle ?</li>
<li>Préparer une version 2 minutes et une version 45 secondes</li>
<li>S'entraîner à voix haute — obligatoire</li>
<li>Préparer les relances difficiles : "What would you do differently?", "What was your biggest mistake?"</li>
</ol>
<div class="insight-box"><strong>Ton atout SAP Barcelone :</strong> Parfait pour les grands cabinets. Leadership (coordination équipe internationale ?), Growth (feedback difficile d'un client ?), Drive (dépassement des attentes ?).</div>`
    },
    {
      title: "📐 Les tests SHL — le cabinet",
      body: `<h3>C'est quoi un test SHL ?</h3>
<p>SHL (Saville & Holdsworth) est le leader mondial des tests psychométriques en recrutement. Ils mesurent ton raisonnement <em>indépendamment</em> de tes connaissances — pas de formules à mémoriser, mais une capacité à raisonner vite et efficacement.</p>
<p>le cabinet utilise 3 tests SHL Verify :</p>
<table class="data-table">
<tr><th>Test</th><th>Questions</th><th>Durée</th><th>Ce qui est testé</th></tr>
<tr><td>Raisonnement Numérique</td><td>18</td><td>17-25 min</td><td>Interpréter tableaux/graphiques, calculs simples, conclusions</td></tr>
<tr><td>Raisonnement Inductif</td><td>24</td><td>25 min</td><td>Identifier des règles dans des séquences de patterns</td></tr>
<tr><td>Raisonnement Verbal</td><td>30</td><td>17-19 min</td><td>Passage → affirmation → Vrai / Faux / Impossible à dire</td></tr>
</table>
<h3>Conseils clés par test</h3>
<p><strong>Numérique :</strong> ~75 secondes/question. Ne jamais rester bloqué > 90s. Passer et revenir.</p>
<p><strong>Inductif :</strong> Variables à observer systématiquement : couleur, taille, position, rotation, nombre. Ne jamais deviner sans analyser.</p>
<p><strong>Verbal :</strong> "Impossible à dire" est souvent la réponse. Baser UNIQUEMENT sur le texte du passage, jamais sur tes connaissances.</p>
<h3>Plan d'entraînement SHL</h3>
<ol>
<li><strong>SHL Direct officiel</strong> (shldirect.com) — gratuit, tests officiels — commencer ici</li>
<li><strong>AssessmentDay</strong> — séries complètes, specs identiques à le cabinet</li>
<li><strong>Graduates First</strong> — tests complets gratuits + 150 vidéos de stratégie</li>
<li><strong>Toujours chronométré</strong> — la gestion du temps compte pour 50% de la performance</li>
</ol>
<div class="warning-box"><strong>Erreur fréquente :</strong> Penser que les SHL "ne se préparent pas." Un entraînement de 5-8h augmente les scores de 15-25% — déterminant sur un processus sélectif.</div>`
    },
    {
      title: "📅 Plan de préparation recommandé",
      body: `<h3>Combien de temps faut-il ?</h3>
<p>les grands cabinets recommande 200-300h pour les meilleurs candidats. Avec un plan structuré, 100-150h concentrées sur 31 jours sont suffisantes pour partir de zéro et viser les grands cabinets.</p>
<table class="data-table">
<tr><th>Semaine</th><th>Thème</th><th>Objectif</th></tr>
<tr><td>S1 (15-21 sept)</td><td>Fondations</td><td>Survivre à un premier case, découvrir les SHL</td></tr>
<tr><td>S2 (22-28 sept)</td><td>Core Skills</td><td>Maîtriser tous les types de cases, accélérer</td></tr>
<tr><td>S3 (29 sept-5 oct)</td><td>Volume & Pression</td><td>Performer sous stress, blind cases</td></tr>
<tr><td>S4 (6-16 oct)</td><td>Mode Entretien</td><td>Simuler exactement les grands cabinets</td></tr>
</table>
<h3>Volume minimum</h3>
<table class="data-table">
<tr><th>Type de pratique</th><th>Volume minimum (31 jours)</th></tr>
<tr><td>Cases complets</td><td>20-25 (dont 8-10 live avec partenaire)</td></tr>
<tr><td>Drills structuring</td><td>40-50</td></tr>
<tr><td>Mental math</td><td>300+ exercices</td></tr>
<tr><td>SHL numérique</td><td>150+ questions</td></tr>
<tr><td>SHL inductif/verbal</td><td>100+ questions chacun</td></tr>
<tr><td>PEI histoires</td><td>4 complètes (1 par dimension)</td></tr>
</table>
<div class="insight-box"><strong>Distribution idéale :</strong> 40% cases · 20% drills · 20% math/SHL · 10% PEI · 10% business fundamentals</div>`
    },
    {
      title: "📚 Les ressources à utiliser",
      body: `<h3>La règle : 3-4 ressources max, profondeur > largeur</h3>
<h3>🥇 Priorité absolue</h3>
<ul>
<li><strong>les grands cabinets.com/careers/interviewing</strong> — Gratuit, officiel. Exemples de cases réels, guide du PSI. À faire en premier.</li>
<li><strong>PrepLounge Case Basics</strong> — Gratuit, Tier 1-focused. Meilleure introduction méthodologique en ligne.</li>
<li><strong>PrepLounge Case Partners</strong> — Matching de partenaires de mock gratuit. Vise 8-10 mocks live.</li>
</ul>
<h3>🥈 Cases et vidéos</h3>
<ul>
<li><strong>IGotAnOffer (YouTube + site)</strong> — Full mock interviews Grand Cabinet-style. Meilleures simulations gratuites disponibles.</li>
<li><strong>CraftingCases</strong> — Meilleure ressource sur la structuration (Issue Trees, MECE). Cours gratuit 7 jours.</li>
<li><strong>Casebooks Darden, Wharton, Duke</strong> — 50-100 cases supplémentaires. PDFs gratuits.</li>
</ul>
<h3>🥉 SHL</h3>
<ul>
<li><strong>SHL Direct</strong> — Tests officiels gratuits. Les plus proches du vrai test le cabinet.</li>
<li><strong>AssessmentDay + Graduates First</strong> — Tests complets gratuits, benchmarking.</li>
</ul>
<div class="insight-box"><strong>Règle d'or :</strong> N'achète rien avant d'avoir épuisé les ressources gratuites. 90% de la préparation nécessaire est accessible gratuitement.</div>`
    },
    {
      title: "⚠️ Les 10 erreurs des débutants",
      body: `<h3>#1 — Mémoriser des frameworks plutôt que comprendre</h3>
<p>les grands cabinets voit immédiatement un framework mémorisé appliqué mécaniquement. Comprends la <em>logique</em> derrière chaque framework — pas les étapes.</p>
<h3>#2 — Aller trop vite dans la structuration</h3>
<p>Les débutants proposent une structure après 30 secondes. Prends 2-3 minutes. Le silence réfléchi est valorisé.</p>
<h3>#3 — Ne pas formuler d'hypothèse</h3>
<p>Annoncer "je vais regarder les revenues, puis les coûts..." sans dire ce que tu suspectes = analyse bottom-up. les grands cabinets veut ton hypothèse d'abord.</p>
<h3>#4 — Vouloir tout couvrir au lieu de prioriser</h3>
<p>Un arbre avec 7 branches dit "je ne sais pas prioriser." Vise 2-3 branches avec une priorisation claire.</p>
<h3>#5 — Paniquer face aux chiffres</h3>
<p>Arrondir intelligemment est une compétence. Bloquer 3 minutes sur un calcul = perte de confiance.</p>
<h3>#6 — Oublier le "So What?"</h3>
<p>Après chaque calcul, enchaîne immédiatement : "Ce résultat suggère que... Je recommande d'investiguer..."</p>
<h3>#7 — Être trop timide dans la recommandation</h3>
<p>les grands cabinets veut "Je recommande de faire X." Pas "il faudrait peut-être envisager de..."</p>
<h3>#8 — Sous-préparer le PEI</h3>
<p>Beaucoup passent 95% de leur temps sur le case et improvisent le PEI. C'est 50% de la décision.</p>
<h3>#9 — Ne faire que des cases solo</h3>
<p>La pression et les relances imprévues d'un vrai interviewer ne s'apprennent qu'en live. Vise 8-10 mocks live.</p>
<h3>#10 — Sous-estimer les SHL</h3>
<p>Pour le cabinet, les SHL filtrent la majorité des candidats. Score < 75ème percentile = élimination automatique.</p>
<div class="insight-box"><strong>Le méta-conseil :</strong> La préparation consulting, c'est 20% de connaissance et 80% d'entraînement délibéré. Tu ne peux pas "comprendre" le case depuis un fauteuil. Il faut pratiquer, échouer, corriger, recommencer.</div>`
    }
  ],
  en: [
    {
      title: "🎯 What is a consulting interview?",
      body: `<h3>Management consulting in 2 minutes</h3>
<p>les grands cabinets, Tier 1, and Tier 1 (the "Tier 1") are the world's most prestigious strategy firms. They help CEOs of large corporations make complex decisions. A junior consultant analyzes business problems, builds recommendations, and presents to senior leadership.</p>
<p>To select their consultants, these firms use a highly structured interview process. Your CV opens the door — the interview makes the selection.</p>
<h3>Entretien Consulting Format</h3>
<table class="data-table">
<tr><th>Part</th><th>Duration</th><th>What's tested</th></tr>
<tr><td><strong>PEI</strong></td><td>~15-20 min</td><td>Leadership, Drive, Connection, Growth</td></tr>
<tr><td><strong>Case</strong></td><td>~25-30 min</td><td>Structured reasoning, analysis, recommendation</td></tr>
</table>
<p>You have <strong>2 rounds</strong>, each with these two parts. The case is a simulation of a real business problem: the interviewer plays the client, you play the junior consultant.</p>
<h3>le cabinet Format</h3>
<ol><li><strong>SHL Online Tests</strong> — Numerical (18q), Inductive (24q), Verbal (30q). Timed, taken from home.</li>
<li><strong>Interview(s)</strong> — If you pass the SHL: case + motivation interview.</li></ol>`
    },
    {
      title: "📊 The 7 types of business cases",
      body: `<p>There isn't just one type of case. Here are the 7 most common at les grands cabinets, by frequency:</p>
<h3>1. Profitability (~35%) — most frequent</h3>
<p><em>"Our retailer's profit dropped 20%. What's happening?"</em></p>
<p><strong>Structure:</strong> Profit = Revenue − Costs. The problem comes from one of the two. Find which, then why.</p>
<h3>2. Market Entry (~20%)</h3>
<p><em>"Our client wants to enter the US market. Should they? How?"</em></p>
<p><strong>Structure:</strong> Is the market attractive? Can we win? How do we enter?</p>
<h3>3. Growth (~15%)</h3>
<p><em>"Our client wants to double revenue in 3 years. How?"</em></p>
<p><strong>Structure:</strong> New customers / Existing customers / New products-markets</p>
<h3>4. M&A (~10%)</h3>
<p><em>"Should we acquire this competitor?"</em></p>
<p><strong>Structure:</strong> Strategic rationale → Target attractiveness → Synergies → Integration risks → Price</p>
<h3>5. Operations (~8%)</h3>
<p><em>"Factory productivity dropped 15%."</em></p>
<h3>6. Pricing (~5%)</h3>
<p><em>"Our client wants to raise prices. By how much?"</em></p>
<h3>7. Market Sizing (~7%)</h3>
<p><em>"Estimate the market for delivery drones in France."</em></p>
<div class="insight-box"><strong>Key point:</strong> Most les grands cabinets cases are <em>mixed</em> — a case can start as profitability and shift to Market Entry. Recognizing the shift is an advanced skill.</div>`
    },
    {
      title: "🎬 How does a real case unfold?",
      body: `<h3>Minute by minute — 30 minutes</h3>
<table class="data-table">
<tr><th>Time</th><th>Phase</th><th>What you do</th><th>Common mistake</th></tr>
<tr><td>0-2 min</td><td>Listening</td><td>Take notes without interrupting</td><td>Starting to structure while interviewer is still talking</td></tr>
<tr><td>2-4 min</td><td>Clarification</td><td>1-2 targeted questions + restatement</td><td>5 questions or no restatement</td></tr>
<tr><td>4-7 min</td><td>Structuring</td><td>Reflective silence → announce structure + hypothesis</td><td>Memorized framework applied without adaptation</td></tr>
<tr><td>7-22 min</td><td>Analysis</td><td>Explore branches, request data, calculate</td><td>Exhaustive analysis instead of prioritizing</td></tr>
<tr><td>22-25 min</td><td>Synthesis</td><td>Summarize findings 30-60s (answer first)</td><td>Chronological summary without a conclusion</td></tr>
<tr><td>25-30 min</td><td>Recommendation</td><td>Decisive recommendation + risks + next steps</td><td>Vague or absent recommendation</td></tr>
</table>
<div class="warning-box"><strong>Beginner trap:</strong> Looking for "the right answer." There isn't one. les grands cabinets evaluates <em>how you think</em>, not what you arrive at.</div>`
    },
    {
      title: "🧠 The les grands cabinets PEI — 4 Dimensions",
      body: `<h3>This is not an informal conversation</h3>
<p>The PEI counts for ~50% of the hiring decision. les grands cabinets evaluates 4 dimensions:</p>
<p><strong>Connection:</strong> You build authentic relationships with people very different from you.<br>
<strong>Leadership:</strong> You achieve results <em>through</em> others, not just through individual work.<br>
<strong>Growth:</strong> You actively seek difficult feedback. You turn failures into real progress.<br>
<strong>Drive:</strong> Real ambition, persistence under adversity, measurable impact.</p>
<h3>The SAI Method (Situation-Action-Impact)</h3>
<table class="data-table">
<tr><th>Element</th><th>% of time</th><th>Common mistake</th></tr>
<tr><td>Situation</td><td>15-20%</td><td>Too much context</td></tr>
<tr><td>Actions (YOUR role only)</td><td>50-60%</td><td>Saying "we" instead of "I"</td></tr>
<tr><td>Impact (quantified if possible)</td><td>15-20%</td><td>Vague impact ("it went well")</td></tr>
</table>
<h3>How to prepare your stories</h3>
<ol>
<li>List 8-12 experiences (internships, projects, sports, associations)</li>
<li>For each: which dimension(s) does it illustrate?</li>
<li>Prepare a 2-minute version and a 45-second version</li>
<li>Practice out loud — mandatory</li>
<li>Prepare for hard follow-ups: "What would you do differently?", "What was your biggest mistake?"</li>
</ol>`
    },
    {
      title: "📐 The SHL Tests — le cabinet",
      body: `<h3>What is an SHL test?</h3>
<p>SHL (Saville & Holdsworth) is the world leader in psychometric recruitment tests. They measure your reasoning ability <em>independently</em> of your knowledge — no formulas to memorize. You need to reason quickly and efficiently.</p>
<p>le cabinet uses 3 SHL Verify tests:</p>
<table class="data-table">
<tr><th>Test</th><th>Questions</th><th>Duration</th><th>What's tested</th></tr>
<tr><td>Numerical Reasoning</td><td>18</td><td>17-25 min</td><td>Interpret tables/charts, simple calculations, draw conclusions</td></tr>
<tr><td>Inductive Reasoning</td><td>24</td><td>25 min</td><td>Identify rules in sequences of patterns</td></tr>
<tr><td>Verbal Reasoning</td><td>30</td><td>17-19 min</td><td>Passage → statement → True / False / Cannot Say</td></tr>
</table>
<h3>How to practice</h3>
<ol>
<li><strong>SHL Direct (official)</strong> — free, official tests — start here</li>
<li><strong>AssessmentDay</strong> — full series, identical specs to le cabinet</li>
<li><strong>Graduates First</strong> — full free tests + 150 strategy videos + benchmarking</li>
<li><strong>Always timed</strong> — time management is 50% of performance</li>
</ol>`
    },
    {
      title: "📅 Recommended preparation plan",
      body: `<h3>Week by week</h3>
<table class="data-table">
<tr><th>Week</th><th>Theme</th><th>Goal</th></tr>
<tr><td>W1 (Sep 15-21)</td><td>Foundations</td><td>Survive a first case, discover SHL</td></tr>
<tr><td>W2 (Sep 22-28)</td><td>Core Skills</td><td>Master all case types, speed up</td></tr>
<tr><td>W3 (Sep 29-Oct 5)</td><td>Volume & Pressure</td><td>Perform under stress, blind cases</td></tr>
<tr><td>W4 (Oct 6-16)</td><td>Interview Mode</td><td>Simulate exactly les grands cabinets</td></tr>
</table>
<h3>Minimum volume (31 days)</h3>
<table class="data-table">
<tr><th>Practice type</th><th>Minimum volume</th></tr>
<tr><td>Full cases</td><td>20-25 (incl. 8-10 live with partner)</td></tr>
<tr><td>Structuring drills</td><td>40-50</td></tr>
<tr><td>Mental math</td><td>300+ exercises</td></tr>
<tr><td>SHL numerical</td><td>150+ questions</td></tr>
<tr><td>SHL inductive/verbal</td><td>100+ each</td></tr>
<tr><td>PEI stories</td><td>4 complete (1 per dimension)</td></tr>
</table>
<div class="insight-box"><strong>Ideal split:</strong> 40% cases · 20% drills · 20% math/SHL · 10% PEI · 10% business fundamentals</div>`
    },
    {
      title: "📚 Resources to use",
      body: `<h3>Rule: 3-4 resources max, depth over breadth</h3>
<h3>🥇 Absolute priority</h3>
<ul>
<li><strong>les grands cabinets.com/careers/interviewing</strong> — Free, official. Real case examples, PSI guide. Start here.</li>
<li><strong>PrepLounge Case Basics</strong> — Free, Tier 1-focused. Best online methodological introduction.</li>
<li><strong>PrepLounge Case Partners</strong> — Free mock partner matching. Target 8-10 live mocks.</li>
</ul>
<h3>🥈 Cases & videos</h3>
<ul>
<li><strong>IGotAnOffer (YouTube + site)</strong> — Full Grand Cabinet-style mock interviews. Best free simulations available.</li>
<li><strong>CraftingCases</strong> — Best structuring resource (Issue Trees, MECE). Free 7-day course.</li>
<li><strong>Darden, Wharton, Duke Casebooks</strong> — 50-100 additional cases. Free PDFs.</li>
</ul>
<h3>🥉 SHL</h3>
<ul>
<li><strong>SHL Direct</strong> — Official free tests. Closest to the real le cabinet test.</li>
<li><strong>AssessmentDay + Graduates First</strong> — Full free tests, benchmarking.</li>
</ul>`
    },
    {
      title: "⚠️ The 10 beginner mistakes",
      body: `<h3>#1 — Memorizing frameworks instead of understanding problems</h3>
<p>les grands cabinets immediately spots a mechanically applied framework. Understand the <em>logic</em> behind each framework, not the steps.</p>
<h3>#2 — Moving too fast into structuring</h3>
<p>Beginners propose a structure after 30 seconds. Take 2-3 minutes. Thoughtful silence is valued.</p>
<h3>#3 — Not formulating a hypothesis</h3>
<p>Announcing "I'll look at revenues, then costs..." without stating what you suspect = bottom-up analysis. les grands cabinets wants your hypothesis first.</p>
<h3>#4 — Trying to cover everything instead of prioritizing</h3>
<p>A tree with 7 branches says "I don't know how to prioritize." Aim for 2-3 branches with clear prioritization.</p>
<h3>#5 — Panicking with numbers</h3>
<p>Smart rounding is a valued skill. Blocking for 3 minutes on a calculation = loss of confidence.</p>
<h3>#6 — Forgetting the "So What?"</h3>
<p>After every calculation, immediately chain: "This suggests that... I recommend investigating..."</p>
<h3>#7 — Being too timid in the recommendation</h3>
<p>les grands cabinets wants "I recommend doing X." Not "one might perhaps consider..."</p>
<h3>#8 — Under-preparing the PEI</h3>
<p>Many spend 95% of time on the case and improvise the PEI. It's 50% of the decision.</p>
<h3>#9 — Only doing solo cases</h3>
<p>The pressure and unexpected follow-ups of a real interviewer can only be learned live. Aim for 8-10 live mocks minimum.</p>
<h3>#10 — Underestimating the SHL tests</h3>
<p>For le cabinet, SHL filters the majority of candidates. Score below 75th percentile = automatic elimination.</p>
<div class="insight-box"><strong>The meta-advice:</strong> Consulting prep is 20% knowledge and 80% deliberate practice. You can't "understand" the case from an armchair. Practice, fail, understand why, fix it, repeat.</div>`
    }
  ]
};

})();


