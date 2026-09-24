// ============================================================
// SAMY CONSULTING INTERVIEW OS — DATA LAYER
// ============================================================

window.DATA = {

// ============================================================
// PROGRAM — 4 WEEKS SCHEDULE
// ============================================================
weeks: [
  {
    id: 1, label: "Week 1", title: "Foundations & Mindset Shift",
    title_en: "Foundations & Mindset Shift",
    theme: "Désapprendre l'ingénieur, activer le consultant",
    theme_en: "Stop thinking like an engineer, start thinking like a consultant",
    focus: ["Consulting Mindset", "Profitability", "Market Sizing", "Mental Math", "Business Fundamentals"],
    days: [
      { date: "2026-09-16", label: "Mar 16", theme: "Orientation & Mindset", theme_en: "Orientation & Mindset",
        tasks: ["Lire les fiches CAT-00 : Hypothesis-Driven Thinking + Answer First + MECE", "Module Consulting Fundamentals (Case Academy) — quiz complet", "Business Fundamentals : secteur bancaire (F-080) + SaaS (F-081)", "Mental Math : fractions et pourcentages — 15 drills", "PEI : lister toutes ses expériences (stage SAP, projets Mines, etc.) dans un tableau"],
        tasks_en: ["Read CAT-00 fiches: Hypothesis-Driven Thinking + Answer First + MECE", "Case Academy module: Consulting Fundamentals — full quiz", "Business Fundamentals: Banking (F-080) + SaaS (F-081)", "Mental math: fractions and percentages — 15 drills", "PEI: list all experiences (SAP internship, Mines projects, etc.) in a table"] },
      { date: "2026-09-17", label: "Mer 17", theme: "Structuration MECE", theme_en: "MECE Structuring",
        tasks: ["Lire les fiches CAT-02 : Issue Tree + Frameworks + Brainstorming", "20 drills de structuration (type 'décomposer en branches MECE')", "Premier cas solo de profitabilité simple (PrepLounge ou casebook)", "Mental Math : marges et markups — 15 drills", "PEI : rédiger 1 histoire Leadership complète (format SAI) sur le stage SAP"],
        tasks_en: ["Read CAT-02 fiches: Issue Tree + Frameworks + Brainstorming", "20 structuring drills ('decompose into MECE branches')", "First solo profitability case (PrepLounge or casebook)", "Mental math: margins and markups — 15 drills", "PEI: write 1 full Leadership story (SAI format) about SAP internship"] },
      { date: "2026-09-18", label: "Jeu 18", theme: "Profitabilité", theme_en: "Profitability",
        tasks: ["Lire les fiches CAT-03 : P&L complet (F-020) + Analyse revenus (F-021) + Analyse coûts (F-022)", "10 drills de profitabilité (identifier levier de baisse de marge)", "Cas solo : profitabilité niveau moyen avec décomposition complète", "Mental Math : divisions et ratios — 15 drills", "Business Fundamentals : luxe & retail (F-082) + pharma (F-083)"],
        tasks_en: ["Read CAT-03 fiches: Full P&L (F-020) + Revenue analysis (F-021) + Cost analysis (F-022)", "10 profitability drills (identify margin decline driver)", "Solo case: mid-level profitability with full decomposition", "Mental math: divisions and ratios — 15 drills", "Business Fundamentals: Luxury & Retail (F-082) + Pharma (F-083)"] },
      { date: "2026-09-19", label: "Ven 19", theme: "Market Sizing", theme_en: "Market Sizing",
        tasks: ["Lire les fiches CAT-04 : Sizing top-down France (F-030) + Sizing bottom-up (F-031)", "5 exercices de market sizing complets (marché voitures électriques en France, marché café hors domicile...)", "Mémoriser les chiffres France clés : population, PIB, foyers, taux d'urbanisation", "Mental Math : CAGR et puissances de 10 — 10 drills", "SHL introduction : 30 questions numériques (psychometric-success.com)"],
        tasks_en: ["Read CAT-04 fiches: Top-down sizing France (F-030) + Bottom-up sizing (F-031)", "5 full market sizing exercises (EV market in France, out-of-home coffee market...)", "Memorize key French data: population, GDP, households, urbanization rate", "Mental math: CAGR and powers of 10 — 10 drills", "SHL introduction: 30 numerical questions (psychometric-success.com)"] },
      { date: "2026-09-20", label: "Sam 20", theme: "Premier case live", theme_en: "First live case",
        tasks: ["Préparer sa communication : Answer First + Bottom Line Up Front (relire F-050)", "PREMIER CAS LIVE sur PrepLounge ou avec partenaire — profitabilité", "Debrief immédiat : noter top 3 erreurs commises, corriger", "Mental Math : multiplications rapides 2 chiffres × 2 chiffres — 20 drills", "Business Fundamentals : assurance & asset management — lire nouvelles fiches"],
        tasks_en: ["Prepare communication: Answer First + Bottom Line Up Front (re-read F-050)", "FIRST LIVE CASE on PrepLounge or with partner — profitability", "Immediate debrief: note top 3 mistakes made, correct them", "Mental math: fast 2-digit × 2-digit multiplication — 20 drills", "Business Fundamentals: Insurance & Asset Management — read new fiches"] },
      { date: "2026-09-21", label: "Dim 21", theme: "Révision S1", theme_en: "Week 1 Review",
        tasks: ["Révision hebdomadaire : relire toutes les fiches CAT-00, CAT-02, CAT-03 touchées cette semaine", "Identifier 3 faiblesses précises (ex: je rate l'effet mix, je perd le fil dans l'issue tree)", "Corriger faiblesse #1 : refaire les drills ou relire la fiche correspondante", "PEI : compléter la story bank — écrire 1 histoire Personal Impact", "Mental Math récap : refaire les 10 erreurs de la semaine"],
        tasks_en: ["Weekly review: re-read all CAT-00, CAT-02, CAT-03 fiches touched this week", "Identify 3 specific weaknesses (e.g., miss the mix effect, lose thread in issue tree)", "Fix weakness #1: redo drills or re-read the corresponding fiche", "PEI: complete story bank — write 1 Personal Impact story", "Mental math recap: redo the 10 mistakes from this week"] }
    ]
  },
  {
    id: 2, label: "Week 2", title: "Core Case Skills",
    title_en: "Core Case Skills",
    theme: "Maîtriser tous les types de cases, accélérer",
    theme_en: "Master all case types, increase speed",
    focus: ["Growth", "Market Entry", "Pricing", "M&A", "Operations", "Exhibits", "Synthesis"],
    days: [
      { date: "2026-09-22", label: "Lun 22", theme: "Croissance & Stratégies", theme_en: "Growth & Strategy",
        tasks: ["Lire les fiches CAT-04 : Stratégies de croissance (F-032) + Market Entry (F-033)", "5 drills de structuration growth (décomposer leviers de croissance d'un SaaS B2B)", "Cas solo : growth strategy — identifier les 3 leviers prioritaires", "Mental Math : parts de marché et variations — 15 drills", "Business Fundamentals : e-commerce & marketplace + télécom (nouvelles fiches)"],
        tasks_en: ["Read CAT-04 fiches: Growth strategies (F-032) + Market Entry (F-033)", "5 growth structuring drills (decompose growth levers of a B2B SaaS)", "Solo case: growth strategy — identify top 3 priority levers", "Mental math: market share and variations — 15 drills", "Business Fundamentals: E-commerce & Marketplace + Telecom (new fiches)"] },
      { date: "2026-09-23", label: "Mar 23", theme: "Market Entry", theme_en: "Market Entry",
        tasks: ["Module Market Entry (Case Academy) — framework complet : attractivité × capacité", "Cas Market Entry solo : entrée d'un retailer européen au Maroc", "SHL Numérique chronométré : 20 questions en 20 min (psychometric-success.com)", "Business Fundamentals : automobile + énergie (nouvelles fiches)", "PEI : rédiger 1 histoire Growth en format SAI — résultat chiffré obligatoire"],
        tasks_en: ["Case Academy Market Entry module — full framework: attractiveness × capability", "Solo Market Entry case: European retailer entering Morocco", "SHL Numerical timed: 20 questions in 20 min (psychometric-success.com)", "Business Fundamentals: Automotive + Energy (new fiches)", "PEI: write 1 Growth story in SAI format — must include quantified result"] },
      { date: "2026-09-24", label: "Mer 24", theme: "Pricing", theme_en: "Pricing",
        tasks: ["Lire la fiche CAT-04 : Pricing — 3 approches (F-034)", "Cas solo pricing : tarification d'un service B2B SaaS — quelle stratégie entre value-based, cost-plus, competitive?", "SHL Logique chronométré : 15 questions inductives en 15 min", "Mental Math : BEP (breakeven) et rentabilité — 15 drills", "PEI Growth : polish de l'histoire — relire et enregistrer à voix haute"],
        tasks_en: ["Read CAT-04 fiche: Pricing — 3 approaches (F-034)", "Solo pricing case: pricing a B2B SaaS service — value-based vs cost-plus vs competitive?", "SHL Inductive timed: 15 inductive questions in 15 min", "Mental math: breakeven and profitability — 15 drills", "PEI Growth: polish the story — read aloud and record yourself"] },
      { date: "2026-09-25", label: "Jeu 25", theme: "Exhibit Analysis", theme_en: "Exhibit Analysis",
        tasks: ["Lire la fiche CAT-05 : Exhibit Analysis UOQCEI complet (F-040)", "Analyser 10 graphiques variés (bar charts, scatter plots, waterfalls) en suivant le protocole UOQCEI", "Cas live (avec partenaire ou PrepLounge) : cas avec données graphiques à interpréter", "Mental Math : pourcentages composés et CAGR — 10 drills", "Business Fundamentals : conseil & services professionnels (nouvelle fiche)"],
        tasks_en: ["Read CAT-05 fiche: Full Exhibit Analysis UOQCEI (F-040)", "Analyze 10 varied charts (bar charts, scatter plots, waterfalls) using UOQCEI protocol", "Live case (partner or PrepLounge): case with chart data to interpret", "Mental math: compound percentages and CAGR — 10 drills", "Business Fundamentals: Consulting & Professional Services (new fiche)"] },
      { date: "2026-09-26", label: "Ven 26", theme: "M&A & Finance", theme_en: "M&A & Finance",
        tasks: ["Lire les fiches CAT-05 : Lire un P&L en 5 min (F-041) + M&A questions clés (F-043)", "Cas M&A solo : 'Notre client envisage d'acquérir un concurrent — 5 questions à poser avant d'évaluer'", "SHL Verbal chronométré : 15 questions en 20 min", "Business Fundamentals : hôtellerie & tourisme (nouvelle fiche)", "PEI : tester son histoire Connection + Leadership face au miroir"],
        tasks_en: ["Read CAT-05 fiches: Reading a P&L in 5 min (F-041) + Key M&A questions (F-043)", "Solo M&A case: 'Client considers acquiring a competitor — 5 questions before evaluating'", "SHL Verbal timed: 15 questions in 20 min", "Business Fundamentals: Hospitality & Tourism (new fiche)", "PEI: rehearse Connection + Leadership stories in the mirror"] },
      { date: "2026-09-27", label: "Sam 27", theme: "Opérations + cas live", theme_en: "Operations + Live Case",
        tasks: ["Lire la fiche CAT-05 : Opérations — lean, capacité, supply chain (F-044)", "CAS LIVE + debrief immédiat — noter toutes les hésitations et erreurs de structure", "10 drills de synthèse (formulation d'une recommandation en 45 secondes)", "Mental Math : révision des erreurs de la semaine", "Business Fundamentals : révision de 3 secteurs difficiles au choix"],
        tasks_en: ["Read CAT-05 fiche: Operations — lean, capacity, supply chain (F-044)", "LIVE CASE + immediate debrief — note all hesitations and structure errors", "10 synthesis drills (formulate a recommendation in 45 seconds)", "Mental math: review week's mistakes", "Business Fundamentals: review 3 difficult sectors of choice"] },
      { date: "2026-09-28", label: "Dim 28", theme: "Révision S2", theme_en: "Week 2 Review",
        tasks: ["Révision hebdomadaire S2 : relire fiches CAT-04, CAT-05 touchées cette semaine", "Corriger les 2 faiblesses prioritaires identifiées (cas live du samedi)", "Mock oral PEI : 10 min Connection + 10 min Leadership avec partenaire, debrief", "Mental Math : récap sprint — 25 exercices mixtes", "Préparer la semaine 3 : identifier 2 secteurs difficiles à travailler"],
        tasks_en: ["Weekly review S2: re-read CAT-04, CAT-05 fiches touched this week", "Fix top 2 priority weaknesses identified (Saturday live case)", "Oral PEI mock: 10 min Connection + 10 min Leadership with partner, debrief", "Mental math: sprint recap — 25 mixed exercises", "Prep Week 3: identify 2 difficult sectors to work on"] }
    ]
  },
  {
    id: 3, label: "Week 3", title: "Volume & Difficulty",
    title_en: "Volume & Difficulty",
    theme: "Vitesse, pression, blind cases",
    theme_en: "Speed, pressure, blind cases",
    focus: ["Full Cases", "Blind Cases", "Interviewer-led", "SHL Simulations", "PEI Mocks"],
    days: [
      { date: "2026-09-29", label: "Lun 29", theme: "Blind Case Day", theme_en: "Blind Case Day",
        tasks: ["CAS AVEUGLE solo : tirer un cas au hasard (type inconnu), résoudre sans aide, 35 min", "Debrief écrit détaillé : structure utilisée, erreurs, ce que j'aurais fait différemment", "SHL simulation complète : 30 questions numériques chronométrées (30 min max)", "Mental Math intensif : 30 exercices mixtes en 20 min", "Business Fundamentals : revoir 2 secteurs où tu te sens faible"],
        tasks_en: ["BLIND SOLO CASE: draw a random case (unknown type), solve without help, 35 min", "Detailed written debrief: structure used, mistakes, what I'd do differently", "Full SHL simulation: 30 timed numerical questions (30 min max)", "Intensive mental math: 30 mixed exercises in 20 min", "Business Fundamentals: review 2 sectors where you feel weak"] },
      { date: "2026-09-30", label: "Mar 30", theme: "Full Mock Interview", theme_en: "Full Mock Interview",
        tasks: ["FULL MOCK complet avec partenaire (PEI 15 min + Cas complet 30 min)", "Debrief immédiat structuré : points forts, points à améliorer, score global", "Refaire la partie du cas ratée (ex: si exhibit raté, refaire 5 exhibits)", "Mental Math : fractions avancées et estimations d'ordre de grandeur", "Écrire ses impressions à chaud : comment se sentait-on sous pression ?"],
        tasks_en: ["FULL MOCK with partner (PEI 15 min + Full case 30 min)", "Structured immediate debrief: strengths, improvement areas, overall score", "Redo the failed part of the case (e.g., if exhibit failed, redo 5 exhibits)", "Mental math: advanced fractions and order-of-magnitude estimates", "Write hot impressions: how did you feel under pressure?"] },
      { date: "2026-10-01", label: "Mer 1", theme: "Secteurs difficiles", theme_en: "Hard Sectors",
        tasks: ["Cas Healthcare/Pharma : cas de type 'lancement d'un médicament' ou 'acquisition d'un laboratoire'", "Cas FMCG/Retail : décomposition d'une baisse de same-store sales d'un distributeur", "Business Fundamentals : relire les fiches pharma + automobile + énergie en profondeur", "PEI Drive : rédiger 1 histoire Drive/Impact — inclure obstacle surmonté + résultat mesurable", "Mental Math : pourcentages de variation — 20 drills"],
        tasks_en: ["Healthcare/Pharma case: 'drug launch' or 'lab acquisition' type case", "FMCG/Retail case: decompose same-store sales decline at a retailer", "Business Fundamentals: deep-read pharma + automotive + energy fiches", "PEI Drive: write 1 Drive/Impact story — include overcome obstacle + measurable result", "Mental math: percentage changes — 20 drills"] },
      { date: "2026-10-02", label: "Jeu 2", theme: "Format Interviewer-led", theme_en: "Interviewer-led Format",
        tasks: ["Comprendre le format interviewer-led cabinet de conseil : l'interviewer guide les questions, pas de framework libre", "Cas live interviewer-led : se laisser guider, répondre précisément à chaque question, pas surstructurer", "SHL simulation : 20 questions logiques (inductive reasoning) en 20 min", "PEI Growth + Drive : mock oral 10 min chacune avec partenaire, feedback", "Mental Math : volumes et surfaces — estimations pour cas manufacturing"],
        tasks_en: ["Understand cabinet de conseil interviewer-led format: interviewer guides questions, no free framework", "Interviewer-led live case: let yourself be guided, answer precisely, don't over-structure", "SHL simulation: 20 inductive reasoning questions in 20 min", "PEI Growth + Drive: 10-min oral mock each with partner, feedback", "Mental math: volumes and surfaces — estimates for manufacturing cases"] },
      { date: "2026-10-03", label: "Ven 3", theme: "Cas avancé haute difficulté", theme_en: "Advanced High-Difficulty Case",
        tasks: ["CAS AVANCÉ niveau cabinet de conseil final round : cas multi-étapes avec exhibits + sizing + recommandation", "Debrief exhaustif avec scoring sur chaque dimension (structuration, analytics, communication, insight)", "Identifier les 3 faiblesses résiduelles les plus importantes — plan de correction pour S4", "Mental Math : récap complet — refaire tous les types d'erreurs", "PEI : relire toutes les histoires — tester cohérence et impact narratif"],
        tasks_en: ["ADVANCED cabinet de conseil final-round level case: multi-step with exhibits + sizing + recommendation", "Exhaustive debrief with scoring on each dimension (structuring, analytics, communication, insight)", "Identify top 3 remaining weaknesses — correction plan for Week 4", "Mental math: full recap — redo all error types", "PEI: re-read all stories — test coherence and narrative impact"] },
      { date: "2026-10-04", label: "Sam 4", theme: "Volume maximal", theme_en: "Maximum Volume",
        tasks: ["Cas solo #1 : variété sectorielle (financier, santé ou tech)", "Cas solo #2 : variété sectorielle différente (industrie ou telecom)", "CAS LIVE avec partenaire — type inconnu — 35 min + debrief 15 min", "SHL simulation complète (numérique + logique) : 45 min total", "Mental Math : 25 exercices variés (focus sur les erreurs récurrentes)"],
        tasks_en: ["Solo case #1: sector variety (financial, healthcare or tech)", "Solo case #2: different sector variety (industry or telecom)", "LIVE CASE with partner — unknown type — 35 min + 15 min debrief", "Full SHL simulation (numerical + logical): 45 min total", "Mental math: 25 varied exercises (focus on recurring mistakes)"] },
      { date: "2026-10-05", label: "Dim 5", theme: "Révision S3 — Sprint Final", theme_en: "Week 3 Review — Final Sprint",
        tasks: ["Révision hebdomadaire S3 : noter les progrès vs S1/S2 sur chaque dimension", "Corriger les 3 faiblesses identifiées vendredi — exercices ciblés", "PEI : 4 histoires complètes polies et mémorisées — tester à voix haute", "Préparer le plan détaillé de la semaine 4 : qui seront mes partenaires de mock ?", "Mental Math : simulation 20 exercices en 15 min (préparation pour S4)"],
        tasks_en: ["Weekly review S3: note progress vs S1/S2 on each dimension", "Fix 3 weaknesses identified Friday — targeted exercises", "PEI: 4 complete polished stories memorized — test aloud", "Prepare detailed Week 4 plan: who will be my mock partners?", "Mental math: simulate 20 exercises in 15 min (prep for Week 4)"] }
    ]
  },
  {
    id: 4, label: "Week 4", title: "Interview Mode",
    title_en: "Interview Mode",
    theme: "Simuler exactement l'entretien",
    theme_en: "Simulate exactly the interview (October 16)",
    focus: ["Full Mocks", "grand-cabinet-style Cases", "PEI Simulations", "Final Prep"],
    days: [
      { date: "2026-10-06", label: "Mar 6", theme: "Full Mock cabinet de conseil #1", theme_en: "cabinet de conseil Full Mock #1",
        tasks: ["FULL MOCK grand-cabinet-style avec partenaire #1 (PEI 15 min + Cas 35 min)", "Debrief exhaustif : scoring sur 5 dimensions (structure, analytics, comm, insight, PEI)", "Correction des 2 erreurs les plus graves immédiatement", "Mental Math : 20 exercices en 15 min — test de vitesse", "Business Fundamentals : révision flash des 10 secteurs clés (2 min par secteur)"],
        tasks_en: ["grand-cabinet-style FULL MOCK with partner #1 (PEI 15 min + Case 35 min)", "Exhaustive debrief: scoring on 5 dimensions (structure, analytics, comm, insight, PEI)", "Immediately fix the 2 most serious errors", "Mental math: 20 exercises in 15 min — speed test", "Business Fundamentals: flash review of 10 key sectors (2 min per sector)"] },
      { date: "2026-10-07", label: "Mer 7", theme: "Correction Faiblesse Principale", theme_en: "Fix Top Weakness",
        tasks: ["Journée entière consacrée à la faiblesse #1 identifiée lors du mock de mardi", "Si faiblesse = structuration : 30 drills d'issue tree + 2 cas solo structuration", "Si faiblesse = analytics : 15 exercices exhibit + 2 cas avec données complexes", "Si faiblesse = PEI : 5 runs à voix haute par histoire, enregistrement et écoute critique", "Bilan soir : test de la correction — réfaire l'exercice raté du mock"],
        tasks_en: ["Entire day dedicated to weakness #1 identified in Tuesday's mock", "If weakness = structuring: 30 issue tree drills + 2 solo structuring cases", "If weakness = analytics: 15 exhibit exercises + 2 cases with complex data", "If weakness = PEI: 5 oral runs per story, record and listen critically", "Evening assessment: test the fix — redo the failed exercise from the mock"] },
      { date: "2026-10-08", label: "Jeu 8", theme: "Full Mock #2 + SHL Final", theme_en: "Full Mock #2 + SHL Final",
        tasks: ["FULL MOCK #2 avec partenaire différent du mock #1", "Debrief structuré — comparer avec mock #1 : progression ou régression ?", "SHL simulation finale : test complet (numérique + verbal + logique) — conditions réelles 45 min", "Mental Math : 15 exercices en 10 min — objectif 0 erreur", "PEI : polish final des 4 histoires — vérifier que chaque résultat est chiffré"],
        tasks_en: ["FULL MOCK #2 with a different partner than mock #1", "Structured debrief — compare with mock #1: progress or regression?", "Final SHL simulation: complete test (numerical + verbal + logical) — real conditions 45 min", "Mental math: 15 exercises in 10 min — target 0 mistakes", "PEI: final polish of 4 stories — verify each outcome is quantified"] },
      { date: "2026-10-09", label: "Ven 9", theme: "Cas Avancés + Relances PEI", theme_en: "Advanced Cases + PEI Follow-ups",
        tasks: ["2 blind cases avancés niveau final round cabinet de conseil (sans aide, 35 min chacun)", "10 drills de synthèse et recommandation (formulation en 45 secondes)", "PEI : drill spécifique sur les relances difficiles — 'Et si tu n'avais pas réussi ?', 'Qu'aurais-tu fait différemment ?'", "Mental Math : 20 exercices — focus pourcentages composés et croissance", "Revoir les 3 business sectors les moins maîtrisés"],
        tasks_en: ["2 advanced blind cases cabinet de conseil final-round level (no help, 35 min each)", "10 synthesis and recommendation drills (formulation in 45 seconds)", "PEI: drill on difficult follow-ups — 'What if you hadn't succeeded?', 'What would you do differently?'", "Mental math: 20 exercises — focus on compound percentages and growth", "Review the 3 least-mastered business sectors"] },
      { date: "2026-10-10", label: "Sam 10", theme: "Full Mock #3 — Verdict Final", theme_en: "Full Mock #3 — Final Verdict",
        tasks: ["FULL MOCK #3 grand-cabinet-style — conditions les plus proches du vrai entretien", "Debrief Final Verdict : 'Suis-je prêt pour le 16 octobre ?' — scoring honnête", "Identifier les ajustements ultimes (max 2) à corriger dans les 6 jours restants", "Mental Math : dernier test de vitesse 20 exercices en 12 min", "PEI : run complet des 4 histoires à voix haute — timing et fluidité"],
        tasks_en: ["FULL MOCK #3 grand-cabinet-style — conditions closest to real interview", "Final Verdict debrief: 'Am I ready for October 16?' — honest scoring", "Identify ultimate adjustments (max 2) to fix in the 6 remaining days", "Mental math: last speed test 20 exercises in 12 min", "PEI: full run of 4 stories aloud — timing and fluency"] },
      { date: "2026-10-11", label: "Dim 11", theme: "Consolidation", theme_en: "Consolidation",
        tasks: ["1 cas grand-cabinet-style solo — variété au choix, 35 min, debrief personnel", "Révision des 3 structures favorites : profitabilité, market entry, growth — dessiner de mémoire", "PEI : révision des 4 histoires — lire sans les mémoriser (elles doivent venir naturellement)", "Mental math léger : 10 exercices, sans pression", "Revoir une fois tous les business fundamentals sectoriels en flash review"],
        tasks_en: ["1 solo grand-cabinet-style case — sector of choice, 35 min, personal debrief", "Review 3 favorite frameworks: profitability, market entry, growth — draw from memory", "PEI: review 4 stories — read without memorizing (they should come naturally)", "Light mental math: 10 exercises, no pressure", "Flash review all sectoral business fundamentals once"] },
      { date: "2026-10-12", label: "Lun 12", theme: "Décharge cognitive", theme_en: "Cognitive Rest Day",
        tasks: ["Mental math léger : 10 exercices calmes (maintenir la vitesse sans se fatiguer)", "Révision BF : revoir uniquement les 3 secteurs les plus susceptibles d'apparaître (banque, tech, pharma)", "PEI : relecture des 4 histoires à voix haute — viser la fluidité naturelle", "PAS de cas complet aujourd'hui — protéger l'énergie pour les 4 derniers jours", "Sommeil : 8h minimum — la préparation cognitive se consolide pendant le sommeil"],
        tasks_en: ["Light mental math: 10 calm exercises (maintain speed without fatigue)", "BF review: revisit only the 3 most likely sectors (banking, tech, pharma)", "PEI: read 4 stories aloud — aim for natural fluency", "NO full case today — protect energy for the final 4 days", "Sleep: 8 hours minimum — cognitive preparation consolidates during sleep"] },
      { date: "2026-10-13", label: "Mar 13", theme: "Mock Final + Ultimes Corrections", theme_en: "Final Mock + Last Corrections",
        tasks: ["FULL MOCK FINAL avec meilleur partenaire disponible — conditions parfaites", "Debrief immédiat : top 3 corrections ultimes", "Implémenter les corrections #1 et #2 en exercice ciblé (30 min max chacune)", "Mental math : 15 exercices en 10 min — dernier test de précision", "PEI : run des 4 histoires — noter les formulations exactes qui fonctionnent le mieux"],
        tasks_en: ["FINAL FULL MOCK with best available partner — perfect conditions", "Immediate debrief: top 3 ultimate corrections", "Implement corrections #1 and #2 in targeted exercise (30 min max each)", "Mental math: 15 exercises in 10 min — last precision test", "PEI: run 4 stories — note the exact formulations that work best"] },
      { date: "2026-10-14", label: "Mer 14", theme: "Affûtage Final", theme_en: "Final Sharpening",
        tasks: ["Revoir ses 3 structures favorites — les dessiner et les commenter à voix haute", "Mental math court : 10 exercices en 7 min — maintien uniquement", "PEI : prononcer les 4 histoires à voix haute 1 fois chacune — ne plus modifier", "Relire les 5 fiches les plus importantes pour soi (identifier lesquelles ce matin)", "Activité physique + bonne nuit de sommeil — condition physique = condition mentale"],
        tasks_en: ["Review 3 favorite frameworks — draw and narrate aloud", "Short mental math: 10 exercises in 7 min — maintenance only", "PEI: say all 4 stories aloud once each — no more changes", "Re-read the 5 most important fiches for you (identify which ones this morning)", "Physical exercise + good night's sleep — physical condition = mental condition"] },
      { date: "2026-10-15", label: "Jeu 15", theme: "Jour J-1 — Mode Sérénité", theme_en: "Day J-1 — Serenity Mode",
        tasks: ["Lire uniquement (sans écrire) : 3 principes fondamentaux, 3 structures favorites, 4 stories PEI", "Visualisation positive : imaginer l'entretien qui se passe bien de A à Z", "Préparer logistiquement : trajet, horaire, tenue, documents, chargeur téléphone", "AUCUNE nouvelle matière — tout ce qu'il y a à apprendre est déjà en toi", "Coucher tôt : objectif 8h de sommeil avant le grand jour"],
        tasks_en: ["Read only (no writing): 3 core principles, 3 favorite frameworks, 4 PEI stories", "Positive visualization: imagine the interview going well from A to Z", "Logistics prep: commute, schedule, outfit, documents, phone charger", "NO NEW MATERIAL — everything to learn is already inside you", "Early bedtime: target 8 hours of sleep before the big day"] },
      { date: "2026-10-16", label: "Ven 16", theme: "⚡ ENTRETIEN — Interview Day", theme_en: "⚡ ENTRETIEN — Interview Day",
        tasks: ["ENTRETIEN CONSULTING", "Mode interview uniquement : confiance, écoute active, answer first", "Aucune nouvelle matière — uniquement relire ses 3 principes si besoin", "Arriver 15 min en avance — s'installer, respirer, sourire", "Tu as travaillé dur. Fais confiance à ta préparation. 🚀"],
        tasks_en: ["ENTRETIEN CONSULTING", "Interview mode only: confidence, active listening, answer first", "No new material — just re-read your 3 principles if needed", "Arrive 15 min early — settle in, breathe, smile", "You worked hard. Trust your preparation. 🚀"] }
    ]
  }
],

// ============================================================
// CASE ACADEMY — 16 MODULES
// ============================================================
modules: [
  {
    id: "01", slug: "consulting-fundamentals", title: "Consulting Fundamentals",
    icon: "🧭", color: "#3b82f6",
    objectives: ["Comprendre le rôle d'un consultant", "Maîtriser la pensée hypothesis-driven", "Connaître les attentes de cabinet de conseil"],
    sections: [
      {
        title: "Le mindset consultant",
        content: `<h3>L'inversion fondamentale</h3>
<p>Un <strong>ingénieur</strong> part des données et remonte vers la conclusion.<br>
Un <strong>consultant</strong> part d'une hypothèse et descend pour la tester.</p>
<div class="insight-box">
<strong>Ingénieur</strong> : Collecter → Analyser → Conclure<br>
<strong>Consultant</strong> : Hypothèse → Cibler les données → Tester → Conclure
</div>
<p>Ce n'est pas une nuance. C'est une inversion complète du processus cognitif. C'est ta transformation principale.</p>
<h3>Le "So What?" permanent</h3>
<p>Après chaque analyse, tu dois te poser <em>immédiatement</em> :</p>
<ol>
<li><strong>So what?</strong> — Qu'est-ce que ça veut dire pour le client ?</li>
<li><strong>Implication</strong> — Quelle action est suggérée ?</li>
<li><strong>Recommendation</strong> — Que dois-je recommander ?</li>
</ol>
<p>Un consultant qui ne dit pas "so what" n'apporte pas de valeur. Il fait de la description, pas de l'analyse.</p>
<h3>Answer First</h3>
<p>cabinet de conseil applique la <strong>Pyramid Principle</strong> : la recommandation d'abord, les preuves ensuite.</p>
<div class="insight-box">
<strong>Mauvais</strong> : "J'ai analysé les revenus, puis les coûts, et je suis arrivé à la conclusion que..."<br>
<strong>Bon</strong> : "Je recommande X. Voici les trois raisons : 1) ... 2) ... 3) ..."
</div>`
      },
      {
        title: "La structure d'un case cabinet de conseil",
        content: `<h3>Les 6 phases d'un case</h3>
<ol>
<li><strong>Clarification</strong> — Poser 1-2 questions de clarification essentielles</li>
<li><strong>Reformulation</strong> — Reformuler le problème pour confirmer la compréhension</li>
<li><strong>Structuration</strong> — Construire l'arbre, annoncer la structure</li>
<li><strong>Analyse</strong> — Explorer les branches, poser des questions, analyser les données</li>
<li><strong>Synthesis</strong> — Synthétiser les findings</li>
<li><strong>Recommendation</strong> — Formuler la recommendation finale + risques + next steps</li>
</ol>
<h3>Ce que cabinet de conseil évalue à chaque phase</h3>
<table class="data-table">
<tr><th>Phase</th><th>Ce qu'ils regardent</th><th>Erreur fréquente</th></tr>
<tr><td>Clarification</td><td>Questions pertinentes, pas génériques</td><td>Poser trop de questions ou aucune</td></tr>
<tr><td>Structure</td><td>MECE, adapté au problème, hypothèse claire</td><td>Framework mémorisé appliqué mécaniquement</td></tr>
<tr><td>Analyse</td><td>Priorisation, hypothesis-driven, insight</td><td>Analyse exhaustive sans priorisation</td></tr>
<tr><td>Synthesis</td><td>Clarity, concision, answer-first</td><td>Résumé chronologique sans conclusion</td></tr>
<tr><td>Recommendation</td><td>Décision claire, quantifiée, risques, next steps</td><td>Recommendation vague ou absente</td></tr>
</table>`
      },
      {
        title: "Hypothesis-Driven Thinking",
        content: `<h3>La formule clé</h3>
<div class="formula-box">
Je suspecte X<br>
parce que Y.<br>
Je commencerai donc par tester Z.
</div>
<h3>Exemple appliqué</h3>
<p><em>Contexte : Un retailer voit ses profits baisser de 20%.</em></p>
<p><strong>Réponse bottom-up (à éviter)</strong> : "Je vais regarder les revenus, puis les coûts, puis..."</p>
<p><strong>Réponse hypothesis-driven (à adopter)</strong> : "Je suspecte que la baisse vient des revenus plutôt que des coûts, parce que les secteurs retail connaissent actuellement une forte pression concurrentielle. Je commencerai donc par analyser l'évolution du volume de ventes vs prix moyen."</p>
<h3>Les 4 qualités d'une bonne hypothèse</h3>
<ul>
<li>Elle est <strong>testable</strong> : on peut la confirmer ou infirmer avec des données</li>
<li>Elle est <strong>précise</strong> : elle pointe vers quelque chose de spécifique</li>
<li>Elle est <strong>business-grounded</strong> : elle reflète une intuition business réelle</li>
<li>Elle est <strong>falsifiable</strong> : une hypothèse qu'on ne peut pas réfuter n'est pas utile</li>
</ul>`
      }
    ],
    drills: [
      { id: "CF-D1", type: "structuring", prompt: "Un cabinet de conseil voit son CA baisser de 15% sur 2 ans. Formulez une hypothèse initiale.", time: 60, prompt_en: "A consulting firm's revenue fell 15% over 2 years. Formulate an initial hypothesis.", answer: "Hypothèse initiale : La baisse de CA est principalement due à une perte de clients existants (churn) plutôt qu'à un manque d'acquisitions nouvelles. Raisonnement : dans un cabinet de conseil, les revenus proviennent de mandats répétés avec des clients existants (60-80% en moyenne). Une baisse de 15% sur 2 ans est plus cohérente avec la perte de comptes majeurs qu'avec une défaillance commerciale sur les nouveaux clients. Tests à réaliser : (1) Taux de renouvellement des clients ; (2) Nombre de clients représentant >10% du CA ; (3) Évolution du nombre de projets par client existant.", answer_en: "Initial hypothesis: The revenue decline is primarily driven by client churn rather than failure to win new clients. Rationale: In a consulting firm, 60-80% of revenue typically comes from existing clients. A 15% drop over 2 years is more consistent with losing major accounts than with a new business development failure. Tests to run: (1) Client renewal rate; (2) Number of clients representing >10% of revenue; (3) Number of projects per existing client." },
      { id: "CF-D2", type: "synthesis", prompt: "Vous avez 30 secondes. Résumez en 2 phrases ce qu'un consultant fait différemment d'un analyste data.", time: 30, prompt_en: "30 seconds. Summarize in 2 sentences what a consultant does differently from a data analyst.", answer: "Un consultant structure un problème ambiguë en arbre d'hypothèses avant même d'avoir les données, et formule une recommandation actionnable pour un décideur — pas un résultat de modèle. Un analyste data optimise la précision d'un modèle et présente ses résultats ; un consultant doit transformer l'incertitude en décision dans les contraintes de temps du client.", answer_en: "A consultant structures an ambiguous problem into a hypothesis tree before having any data, and formulates an actionable recommendation for a decision-maker — not a model output. A data analyst optimizes model accuracy and presents findings; a consultant must convert uncertainty into a decision within the client's time constraints." },
      { id: "CF-D3", type: "communication", prompt: "Reformulez : 'Le modèle montre une précision de 87% sur le dataset de validation.' en langage consultant.", time: 45, prompt_en: "Rephrase: 'The model shows 87% accuracy on the validation dataset.' in consultant language.", answer: "Reformulation : 'Notre analyse préliminaire indique que l'algorithme identifie correctement 9 cas sur 10 parmi nos données de test — ce qui nous donne un niveau de confiance suffisant pour passer au pilote sur un segment limité, avant de déployer à l'échelle.' Le principe : remplacer le vocabulaire technique par l'implication business (niveau de confiance → décision d'action).", answer_en: "Rephrased: 'Our preliminary analysis shows the algorithm correctly identifies 9 cases out of 10 in our test data — giving us sufficient confidence to proceed to a limited pilot before full-scale deployment.' The principle: replace technical vocabulary with the business implication (confidence level → action decision)." }
    ]
  },
  {
    id: "02", slug: "structuring", title: "Structuring",
    icon: "🌳", color: "#10b981",
    objectives: ["Construire des structures MECE adaptées", "Éviter les frameworks mécaniques", "Prioriser les branches immédiatement"],
    sections: [
      {
        title: "Principes MECE",
        content: `<h3>MECE : Mutually Exclusive, Collectively Exhaustive</h3>
<p><strong>Mutuellement exclusif</strong> : Aucun overlap entre les branches. Chaque élément appartient à UNE seule branche.</p>
<p><strong>Collectivement exhaustif</strong> : L'ensemble des branches couvre tout l'espace du problème.</p>
<div class="insight-box">
<strong>Mauvais</strong> : Branch 1 = Revenue, Branch 2 = Pricing<br>
(Pricing est une composante de Revenue → overlap)<br><br>
<strong>Bon</strong> : Branch 1 = Revenue, Branch 2 = Costs<br>
(Mutuellement exclusifs + exhaustifs pour Profit)
</div>
<h3>La règle des 2-3 branches</h3>
<p>cabinet de conseil valorise la clarté sur l'exhaustivité. <strong>2-3 branches max au premier niveau.</strong></p>
<p>Pourquoi ? Un arbre avec 6 branches de premier niveau dit à l'interviewer : "Je ne sais pas prioriser."</p>`
      },
      {
        title: "Adapter la structure au problème",
        content: `<h3>La tentation du framework mémorisé</h3>
<p>La tentation sera d'appliquer automatiquement :</p>
<ul>
<li>Porter's 5 Forces pour tout Market Entry</li>
<li>4P pour tout problème marketing</li>
<li>Revenue/Costs pour tout problème profitability</li>
</ul>
<p>Ces frameworks sont des <em>points de départ</em>, pas des réponses. L'interviewer veut voir que tu <strong>adaptes</strong> la structure au contexte spécifique.</p>
<h3>Process de structuration en 60 secondes</h3>
<ol>
<li>Quel est l'objectif du client ? (10 sec)</li>
<li>Quelle est l'hypothèse principale ? (10 sec)</li>
<li>Quelles sont les 2-3 variables qui expliquent cette hypothèse ? (20 sec)</li>
<li>Annoncer la structure + prioriser la branche à explorer d'abord (20 sec)</li>
</ol>`
      }
    ],
    drills: [
      { id: "STR-D1", type: "structuring", prompt: "Un hôtel 4 étoiles parisien voit son RevPAR baisser de 25% en 6 mois. Structurez.", time: 60, prompt_en: "A 4-star Paris hotel sees its RevPAR fall 25% in 6 months. Structure your analysis.", answer: "Structure : RevPAR = ADR × Taux d'occupation. Branche 1 — ADR en baisse ? (pricing moins élevé, promotions, déclassement du mix clientèle vers moins de corporate). Branche 2 — Taux d'occupation en baisse ? (moins de clients). Causes possibles : (A) Problème de positionnement / réputation (TripAdvisor, événements négatifs) ; (B) Concurrence nouvelle (hôtel rival, Airbnb) ; (C) Baisse du tourisme ou du corporate dans ce quartier ; (D) Problème opérationnel (rénovation, fermeture partielle). Priorisation : commencer par le taux d'occupation car une baisse de 25% sur 6 mois suggère un problème de demande, pas uniquement de pricing.", answer_en: "Structure: RevPAR = ADR × Occupancy rate. Branch 1 — ADR declining? (lower pricing, promotions, shift from corporate to leisure mix). Branch 2 — Occupancy declining? (fewer guests). Possible causes: (A) Positioning/reputation issue (TripAdvisor, negative events); (B) New competition (rival hotel, Airbnb); (C) Tourism or corporate travel decline in the district; (D) Operational issue (renovation, partial closure). Prioritization: start with occupancy, as a 25% drop in 6 months suggests a demand issue more than a pure pricing issue." },
      { id: "STR-D2", type: "structuring", prompt: "Une banque retail veut augmenter sa part de marché sur les crédits immobiliers. Structurez.", time: 60, prompt_en: "A retail bank wants to increase its mortgage market share. Structure your analysis.", answer: "Structure en 3 branches : (1) Attirer plus de prospects (marketing, partenariats courtiers, présence agences) ; (2) Améliorer le taux de conversion (compétitivité du taux, rapidité de décision, UX du parcours digital) ; (3) Réduire le churn clients existants (refinancements internes, packages fidélité). Priorisation : taux de conversion est souvent le levier le plus sous-exploité — si 60% des prospects vont voir un concurrent parce que la décision prend 10 jours vs 3 jours chez N26/Boursorama, le gain est immédiat sans acquisition.", answer_en: "Structure with 3 branches: (1) Attract more prospects (marketing, broker partnerships, branch presence); (2) Improve conversion rate (competitive rate, fast decisions, digital UX); (3) Reduce existing client churn (internal refinancing, loyalty packages). Prioritization: conversion rate is often the most under-exploited lever — if 60% of prospects go to a competitor because the decision takes 10 days vs 3 days at N26/Boursorama, the gain is immediate without additional acquisition costs." },
      { id: "STR-D3", type: "structuring", prompt: "Un laboratoire pharmaceutique décide d'entrer sur le marché américain. Structurez.", time: 60, prompt_en: "A pharmaceutical company decides to enter the US market. Structure the decision.", answer: "Structure Market Entry : Question 1 — Le marché est-il attractif ? (taille marché US = 45% du mondial, remboursement FDA, concurrence.) Question 2 — L'entreprise peut-elle gagner ? (brevets valides aux US ? homologation FDA déjà en cours ? force commerciale locale ou partenaire ?) Question 3 — Quel mode d'entrée ? (filiale propre, partenariat avec un acteur US, acquisition d'un distributeur, licence.) Risques clés : coût de la FDA (~500M€ pour un NDA complet), durée (5-10 ans), litige brevet aux US (procédures ANDA des génériques).", answer_en: "Market Entry structure: Q1 — Is the market attractive? (US = 45% of global market, FDA reimbursement, competition). Q2 — Can the company win? (patents valid in US? FDA approval underway? local commercial force or partner?). Q3 — What entry mode? (own subsidiary, US partnership, distributor acquisition, license). Key risks: FDA cost (~$500M for full NDA), timeline (5-10 years), US patent litigation (generic ANDA procedures)." },
      { id: "STR-D4", type: "structuring", prompt: "Une compagnie aérienne low-cost veut réduire ses coûts de 10%. Structurez.", time: 60, prompt_en: "A low-cost airline wants to reduce costs by 10%. Structure your analysis.", answer: "Structure par catégorie de coûts : Carburant (~25-30% des coûts) : hedging, efficience de la flotte (A320neo vs A320ceo), routes optimisées. Coûts aéroportuaires (~15%) : négocier les redevances, privilégier les aéroports secondaires. Coûts crew (~25%) : optimiser les rotations, formation croisée. Maintenance (~10%) : contrats power-by-the-hour vs ownership. Autres (~25%) : commissions de distribution, frais de handling. Priorisation : carburant et crew représentent 50% — priorité absolue. Attention : des coupes sur la maintenance ne doivent jamais compromettre la sécurité (impact réglementaire + réputation).", answer_en: "Structure by cost category: Fuel (~25-30%): hedging, fleet efficiency (A320neo vs A320ceo), route optimization. Airport costs (~15%): negotiate fees, favor secondary airports. Crew costs (~25%): optimize rotations, cross-training. Maintenance (~10%): power-by-the-hour contracts vs ownership. Other (~25%): distribution fees, handling costs. Prioritization: fuel and crew = 50% of costs — absolute priority. Caution: cuts on maintenance must never compromise safety (regulatory and reputational risk)." },
      { id: "STR-D5", type: "structuring", prompt: "Un SaaS B2B voit son churn rate doubler en 3 mois. Structurez.", time: 60, prompt_en: "A B2B SaaS company sees its churn rate double in 3 months. Structure your analysis.", answer: "Structure : Churn = clients qui partent / clients totaux. Branche 1 — Problème produit (bugs récents, dégradation de performance, features manquantes vs concurrents). Branche 2 — Problème de valeur perçue (mauvais onboarding, usage faible = clients n'utilisent pas le produit). Branche 3 — Problème commercial/prix (hausse de prix récente, offre concurrente moins chère). Branche 4 — Problème de support (délais de réponse, qualité de l'aide). Priorisation : commencer par segmenter le churn — s'il est concentré sur les clients <6 mois d'ancienneté, c'est un problème d'onboarding ; s'il est concentré sur les gros clients, c'est un risque stratégique immédiat.", answer_en: "Structure: Churn = clients leaving / total clients. Branch 1 — Product issue (recent bugs, performance degradation, missing features vs competitors). Branch 2 — Perceived value issue (poor onboarding, low usage = clients not using the product). Branch 3 — Commercial/pricing issue (recent price increase, cheaper competitor offer). Branch 4 — Support issue (response times, quality). Prioritization: start by segmenting churn — if concentrated in clients <6 months tenure, it's an onboarding problem; if concentrated in large clients, it's an immediate strategic risk." },
      { id: "STR-D6", type: "structuring", prompt: "Un constructeur automobile envisage de lancer une gamme électrique. Structurez le Go/No-Go.", time: 90, prompt_en: "An automaker considers launching an electric vehicle range. Structure the Go/No-Go.", answer: "Structure en 4 questions : (1) Le marché EV est-il suffisamment attractif ? (taille, croissance, subsidies, infrastructure de charge). (2) L'entreprise a-t-elle les capacités requises ? (accès aux batteries, R&D électrique, partenariats software). (3) L'équation économique est-elle viable ? (coût de développement plateforme EV vs partage avec partenaires, marge anticipée EV vs ICE). (4) Le risque de ne pas y aller est-il supérieur au risque d'y aller ? (cannibalisation, réputation, régulation 2035 UE). Conclusion de principe : le risque de ne pas lancer est probablement supérieur à 2025 — la question est 'comment' pas 'si'.", answer_en: "Structure with 4 questions: (1) Is the EV market sufficiently attractive? (size, growth, subsidies, charging infrastructure). (2) Does the company have the required capabilities? (battery access, EV R&D, software partnerships). (3) Is the economic equation viable? (platform development cost vs platform sharing, expected EV vs ICE margins). (4) Is the risk of not doing it greater than the risk of doing it? (cannibalization, reputation, EU 2035 regulation). Bottom line: at this stage, the risk of not launching probably outweighs the risk of launching — the question is 'how' not 'if'." },
      { id: "STR-D7", type: "structuring", prompt: "Une chaîne de fast-food veut ouvrir 50 restaurants en France. Structurez les critères de sélection.", time: 90, prompt_en: "A fast-food chain wants to open 50 restaurants in France. Structure the selection criteria.", answer: "Structure critères de sélection en 3 niveaux : (1) Critères de localisation (trafic piéton >8 000/jour pour un centre-ville, proximité transports, visibilité) ; (2) Critères de marché local (densité de population, concurrence directe dans un rayon de 500m, revenus moyens du quartier) ; (3) Critères immobiliers et opérationnels (surface disponible 150-300m², coût du loyer <8% du CA projeté, accessibilité livraisons). Priorisation : le trafic piéton est le critère #1 — une erreur de localisation est irréversible sur un bail de 9 ans. Sanity check : 50 restaurants = ~100M€ d'investissement. Le pipeline doit être validé restaurant par restaurant.", answer_en: "Selection criteria structure on 3 levels: (1) Location criteria (foot traffic >8,000/day for city center, proximity to transit, visibility); (2) Local market criteria (population density, direct competition within 500m, neighborhood income level); (3) Real estate and operational criteria (available floor space 150-300m², rent cost <8% of projected revenue, delivery access). Prioritization: foot traffic is criterion #1 — a location mistake is irreversible on a 9-year lease. Sanity check: 50 restaurants = ~€100M investment. The pipeline must be validated restaurant by restaurant." },
      { id: "STR-D8", type: "structuring", prompt: "Une assurance voit son combined ratio dépasser 105%. Structurez.", time: 60, prompt_en: "An insurer sees its combined ratio exceed 105%. Structure your analysis.", answer: "Structure : Combined Ratio = Loss Ratio + Expense Ratio. Branche 1 — Loss Ratio en hausse (sinistres / primes) : fréquence des sinistres augmentée ? coût moyen par sinistre augmenté ? mauvaise sélection des risques à la souscription ? Branche 2 — Expense Ratio en hausse (frais / primes) : coûts de distribution trop élevés ? frais de gestion des sinistres ? Branche 3 — Primes insuffisantes (concurrence sur le pricing sans ajustement du risque). Priorisation : un CR >105% signifie une perte technique de 5€ pour 100€ de primes. Si le résultat financier (rendement des réserves) ne compense pas, l'assureur est déficitaire. Action immédiate : audit du portefeuille sinistres et réévaluation du pricing.", answer_en: "Structure: Combined Ratio = Loss Ratio + Expense Ratio. Branch 1 — Loss ratio rising (claims/premiums): claim frequency increased? average cost per claim increased? poor risk selection at underwriting? Branch 2 — Expense ratio rising (expenses/premiums): distribution costs too high? claims management costs? Branch 3 — Premiums too low (competitive pricing without risk adjustment). Prioritization: a CR >105% means a technical loss of €5 per €100 of premiums. If investment income from reserves does not offset, the insurer is in deficit. Immediate action: claims portfolio audit and pricing reassessment." }
    ]
  },
  {
    id: "03", slug: "profitability", title: "Profitability",
    icon: "📊", color: "#f59e0b",
    objectives: ["Décomposer Profit = Revenue - Costs en profondeur", "Identifier les drivers actionnables", "Gérer les mix effects et one-time effects"],
    sections: [
      {
        title: "Framework Profitability",
        content: `<h3>L'arbre de base</h3>
<div class="formula-box">
Profit = Revenue − Costs<br><br>
Revenue = Volume × Prix<br>
Volume = # clients × fréquence × taille panier<br>
Prix = prix liste − rabais − mix produit<br><br>
Costs = Fixed Costs + Variable Costs<br>
Variable Costs = COGS + Distribution + Marketing<br>
Fixed Costs = Loyer + Salaires + Amortissement
</div>
<h3>Les 5 questions à se poser immédiatement</h3>
<ol>
<li>Le problème est côté <strong>Revenue</strong> ou <strong>Costs</strong> ? (ou les deux ?)</li>
<li>Le problème est <strong>récent</strong> ou structurel ?</li>
<li>Le problème est <strong>isolé</strong> (produit/géographie/segment) ou généralisé ?</li>
<li>Y a-t-il eu un <strong>changement récent</strong> (pricing, concurrence, réglementation) ?</li>
<li>Comment la <strong>concurrence</strong> se comporte-t-elle ?</li>
</ol>`
      },
      {
        title: "Mix Effects — piège fréquent",
        content: `<h3>Le mix effect</h3>
<p>Le profit peut baisser même si chaque produit performe mieux, simplement parce que le mix de ventes change.</p>
<div class="example-box">
<strong>Exemple</strong> : Un retailer vend 2 produits.<br>
Produit A (marge 40%) → passe de 70% à 50% des ventes<br>
Produit B (marge 20%) → passe de 30% à 50% des ventes<br>
→ Marge globale : 34% → 30%. <strong>Baisse de 4 points sans que rien "aille mal".</strong>
</div>
<h3>Autres effets à vérifier</h3>
<ul>
<li><strong>Géographic mix</strong> : marchés à marges différentes</li>
<li><strong>Customer mix</strong> : segments à rentabilité différente</li>
<li><strong>Channel mix</strong> : direct vs indirect vs digital</li>
<li><strong>One-time effects</strong> : charge exceptionnelle, cession d'actif</li>
</ul>`
      }
    ],
    drills: [
      { id: "PRO-D1", type: "math", prompt: "Un retailer voit son profit baisser de 8M€ à 5M€. Revenue = 100M€ (stable). Quelles sont vos 3 premières hypothèses côté coûts ?", time: 90, prompt_en: "A retailer sees profit fall from €8M to €5M. Revenue = €100M (stable). What are your top 3 cost-side hypotheses?", answer: "Hypothèses par ordre de probabilité : (1) Hausse des coûts de marchandises (COGS) — inflation des matières premières, ruptures fournisseurs, dépréciation du stock. Impact potentiel : si COGS passe de 65% à 68% du CA → écart de 3M€ = explique l'essentiel. (2) Hausse des coûts logistiques — carburant, transport dernier kilomètre, entrepôts. (3) Hausse des coûts de personnel — augmentations salariales, heures supplémentaires, turnover élevé. À exclure rapidement : loyers (contrats longs, peu volatils sur 2 ans).", answer_en: "Hypotheses in order of probability: (1) Higher COGS — raw material inflation, supplier disruptions, inventory write-downs. Potential impact: if COGS moves from 65% to 68% of revenue → €3M gap = explains most of the decline. (2) Higher logistics costs — fuel, last-mile delivery, warehousing. (3) Higher personnel costs — salary increases, overtime, high turnover. Quick exclusions: rents (long-term contracts, not volatile over 2 years)." },
      { id: "PRO-D2", type: "structuring", prompt: "Une banque voit sa marge nette d'intérêt baisser de 2.1% à 1.8%. Structurez l'analyse.", time: 60, prompt_en: "A bank sees its net interest margin decline from 2.1% to 1.8%. Structure your analysis.", answer: "NIM = Taux moyen des prêts − Taux moyen des dépôts. Branche 1 — Taux prêts en baisse : remboursements anticipés de prêts à taux élevé + nouveaux prêts à taux plus bas (contexte de taux), concurrence sur les crédits immobiliers. Branche 2 — Taux dépôts en hausse : les clients migrent vers des livrets rémunérés (Livret A à 3%), comptes à terme — la banque doit payer plus pour retenir les dépôts. Branche 3 — Mix du portefeuille : proportion accrue de prêts moins rentables (crédits immobiliers vs crédits conso). Chiffrage : 0.3% de NIM sur 500Md€ d'actifs = 1.5Md€ de manque à gagner annuel.", answer_en: "NIM = Loan rate − Deposit rate. Branch 1 — Loan rates declining: early repayment of high-rate loans + new loans at lower rates (rate environment), competition on mortgages. Branch 2 — Deposit rates rising: clients migrating to remunerated savings (Livret A at 3%), term accounts — bank must pay more to retain deposits. Branch 3 — Portfolio mix: increased proportion of less profitable loans (mortgages vs consumer credit). Quantification: 0.3% NIM on €500Bn assets = €1.5Bn annual revenue shortfall." },
      { id: "PRO-D3", type: "math", prompt: "Revenue: produit A 60M (marge 30%), produit B 40M (marge 20%). Mix shift: A passe à 50%, B à 50%. Calculez l'impact sur la marge.", time: 120, prompt_en: "Revenue: product A €60M (30% margin), product B €40M (20% margin). Mix shift: A goes to 50%, B to 50%. Calculate the impact on margin.", answer: "Marge initiale : (60 × 30% + 40 × 20%) / 100 = (18 + 8) / 100 = 26%. Nouveau CA total = 100M€ (stable). Nouveau mix : A = 50M€, B = 50M€. Nouvelle marge : (50 × 30% + 50 × 20%) / 100 = (15 + 10) / 100 = 25%. Impact de l'effet mix : −1 point de marge. En euros : −1M€ de marge brute (de 26M€ à 25M€). Enseignement : même à CA stable, un glissement du mix vers le produit moins rentable dégrade la marge — c'est l'effet mix pur.", answer_en: "Initial margin: (60 × 30% + 40 × 20%) / 100 = (18 + 8) / 100 = 26%. New total revenue = €100M (stable). New mix: A = €50M, B = €50M. New margin: (50 × 30% + 50 × 20%) / 100 = (15 + 10) / 100 = 25%. Mix effect impact: −1 margin point. In euros: −€1M gross margin (from €26M to €25M). Key takeaway: even with stable revenue, a mix shift toward the less profitable product erodes margin — this is the pure mix effect." }
    ]
  },
  {
    id: "04", slug: "growth", title: "Growth",
    icon: "📈", color: "#6366f1",
    objectives: ["Analyser les leviers de croissance", "Distinguer acquisition vs rétention vs expansion", "Prioriser les initiatives de croissance"],
    sections: [
      {
        title: "Framework Growth",
        content: `<h3>Les 3 sources de croissance</h3>
<div class="formula-box">
Croissance Revenue = <br>
Nouveaux clients × Prix moyen<br>
+ Clients existants × (Fréquence × Panier)<br>
+ Prix moyen (pricing power)
</div>
<h3>L'arbre growth classique</h3>
<p><strong>Branche 1 : Acquisition</strong></p>
<ul>
<li>Nouveaux segments</li>
<li>Nouveaux géographies</li>
<li>Nouveaux canaux</li>
<li>Meilleure conversion</li>
</ul>
<p><strong>Branche 2 : Rétention & Expansion</strong></p>
<ul>
<li>Réduction du churn</li>
<li>Cross-sell / Upsell</li>
<li>Augmentation fréquence d'achat</li>
<li>Prix (si pricing power)</li>
</ul>
<p><strong>Branche 3 : Nouvelles offres / marchés</strong></p>
<ul>
<li>Nouveaux produits</li>
<li>Adjacences</li>
<li>Vertical integration</li>
</ul>`
      }
    ],
    drills: [
      { id: "GRO-D1", type: "structuring", prompt: "Un SaaS B2B à 50M€ ARR veut doubler en 3 ans. Structurez les leviers.", time: 90, prompt_en: "A B2B SaaS at €50M ARR wants to double in 3 years. Structure the growth levers.", answer: "Objectif : passer de 50M€ à 100M€ ARR en 3 ans = CAGR ~26%. Leviers : (1) Nouveaux clients (outbound sales, inbound marketing, partenaires/canaux) — si CAGR actuel clients = 20%, il faut l'accélérer à 30%. (2) Expansion des clients existants (upsell, cross-sell, expansion des sièges) — si NRR = 110%, l'expansion seule génère 5M€/an supplémentaires. (3) Réduction du churn (si churn ARR = 8%, le passer à 5% économise 1.5M€/an). Calcul de la combinaison : avec +30% nouveaux clients et NRR 115% et churn 5%, l'objectif 100M€ est atteignable d'ici an 3.", answer_en: "Target: grow from €50M to €100M ARR in 3 years = ~26% CAGR. Levers: (1) New clients (outbound sales, inbound marketing, channel partners) — if current client CAGR = 20%, must accelerate to 30%. (2) Existing client expansion (upsell, cross-sell, seat expansion) — if NRR = 110%, expansion alone generates €5M/year additional. (3) Churn reduction (if churn ARR = 8%, moving to 5% saves €1.5M/year). Combination math: with +30% new clients, NRR 115% and 5% churn, the €100M target is achievable by year 3." },
      { id: "GRO-D2", type: "brainstorming", prompt: "Générez 8 idées pour augmenter le panier moyen d'un supermarché premium en 90 secondes.", time: 90, prompt_en: "Generate 8 ideas to increase the average basket of a premium supermarket in 90 seconds.", answer: "1. Bundling produits (offres repas complets, hampers saisonniers). 2. Cross-selling en caisse (produits complémentaires suggérés). 3. Programme de fidélité basé sur le montant (bonus au-dessus d'un seuil). 4. Vente de services premium (traiteur, livraison, conciergerie alimentaire). 5. Corner gastronomie locale (produits artisanaux à marge élevée). 6. Abonnement box mensuelle (sélection curatée de nouveautés). 7. Recommandations personnalisées app mobile (basées sur l'historique d'achat). 8. Événements dégustations (wine tasting, chef's tables) pour clients réguliers.", answer_en: "1. Product bundling (complete meal offers, seasonal hampers). 2. Checkout cross-selling (suggested complementary products). 3. Spend-based loyalty program (bonus above a threshold). 4. Premium services (catering, delivery, food concierge). 5. Local gastronomy corner (artisanal products at high margin). 6. Monthly subscription box (curated selection of new products). 7. Personalized recommendations via app (based on purchase history). 8. Tasting events (wine tastings, chef's tables) for regular customers." }
    ]
  },
  {
    id: "05", slug: "market-entry", title: "Market Entry",
    icon: "🗺️", color: "#ec4899",
    objectives: ["Evaluer l'attractivité d'un marché", "Analyser la faisabilité pour le client", "Structurer le mode d'entrée"],
    sections: [
      {
        title: "Framework Market Entry",
        content: `<h3>Les 3 questions fondamentales</h3>
<ol>
<li><strong>Doit-on entrer ?</strong> (Attractivité du marché)</li>
<li><strong>Peut-on entrer ?</strong> (Capacités du client)</li>
<li><strong>Comment entrer ?</strong> (Mode d'entrée)</li>
</ol>
<h3>Attractivité du marché</h3>
<ul>
<li>Taille et croissance du marché</li>
<li>Profitabilité du secteur (marges)</li>
<li>Intensité concurrentielle</li>
<li>Barrières à l'entrée</li>
<li>Fit avec l'objectif stratégique du client</li>
</ul>
<h3>Capacités du client</h3>
<ul>
<li>Avantages compétitifs transférables</li>
<li>Ressources disponibles (capital, humain, tech)</li>
<li>Synergies avec l'activité existante</li>
</ul>
<h3>Mode d'entrée</h3>
<ul>
<li>Organique (build from scratch)</li>
<li>Acquisition (M&A)</li>
<li>Joint venture / partenariat</li>
<li>Licence / franchise</li>
</ul>`
      }
    ],
    drills: [
      { id: "ME-D1", type: "structuring", prompt: "Un assureur français veut entrer sur le marché marocain. Structurez l'analyse.", time: 90, prompt_en: "A French insurer wants to enter the Moroccan market. Structure your analysis.", answer: "Structure Market Entry : Q1 — Attractivité ? Marché assurance Maroc : ~4Md$ (2023), taux de pénétration 4% du PIB (vs 12% en France) = fort potentiel de croissance. Classe moyenne en expansion. Q2 — Capacité à gagner ? Avantages : marque reconnue, expertise technique, capitaux. Handicaps : pas de présence locale, méconnaissance culturelle, régulation ACAPS marocaine spécifique. Q3 — Mode d'entrée ? Acquisition d'un acteur local (Wafa Assurance, Atlanta) vs joint-venture vs filiale greenfield. Recommandation : JV avec acteur local = accès immédiat au réseau de distribution + gestion du risque réglementaire.", answer_en: "Market Entry structure: Q1 — Attractiveness? Moroccan insurance market: ~$4Bn (2023), penetration rate 4% of GDP (vs 12% in France) = strong growth potential. Expanding middle class. Q2 — Ability to win? Advantages: recognized brand, technical expertise, capital. Disadvantages: no local presence, cultural unfamiliarity, specific ACAPS Moroccan regulation. Q3 — Entry mode? Acquisition of a local player (Wafa Assurance, Atlanta) vs joint-venture vs greenfield subsidiary. Recommendation: JV with local player = immediate access to distribution network + regulatory risk management." },
      { id: "ME-D2", type: "structuring", prompt: "Un SaaS RH européen envisage d'entrer sur le marché américain. Structurez la décision.", time: 90, prompt_en: "A European HR SaaS is considering entering the US market. Structure the decision.", answer: "Structure : Q1 — Marché attractif ? (US HRTech = 35Md$ en 2023, CAGR 12%, marché le plus mature du monde). Q2 — Peut-on gagner ? (forces : produit validé en Europe, références clients tier 1 ; faiblesses : aucune présence commerciale US, compétition intense avec Workday/ADP/Rippling, différences RH entre Europe et US importantes — FLSA, at-will employment). Q3 — Mode d'entrée ? Options : hub San Francisco ou NYC, acquisition d'une PME US pour accélérer, partenariat OEM avec un acteur US établi. Q4 — Go ou No-Go ? Si ARR actuel >10M€ et NRR >110% en Europe : Go avec une équipe dédiée US de 5-10 personnes.", answer_en: "Structure: Q1 — Attractive market? (US HRTech = $35Bn in 2023, 12% CAGR, most mature market globally). Q2 — Can we win? (strengths: validated European product, tier-1 client references; weaknesses: no US commercial presence, intense competition with Workday/ADP/Rippling, significant US-Europe HR differences — FLSA, at-will employment). Q3 — Entry mode? Options: San Francisco or NYC hub, acquisition of a US SME for acceleration, OEM partnership with established US player. Q4 — Go or No-Go? If current ARR >€10M and NRR >110% in Europe: Go with a dedicated US team of 5-10 people." }
    ]
  },
  {
    id: "06", slug: "market-sizing", title: "Market Sizing",
    icon: "🔢", color: "#14b8a6",
    objectives: ["Maîtriser top-down et bottom-up", "Formuler une équation claire avant calcul", "Faire des sanity checks systématiques"],
    sections: [
      {
        title: "Méthode Market Sizing",
        content: `<h3>Les 8 étapes</h3>
<ol>
<li><strong>Clarify</strong> : Quel marché exactement ? Géographie ? Périmètre ?</li>
<li><strong>Scope</strong> : Top-down ou bottom-up ? Pourquoi ?</li>
<li><strong>Equation</strong> : Poser l'équation AVANT de calculer</li>
<li><strong>Assumptions</strong> : Poser les hypothèses explicitement</li>
<li><strong>Calculate</strong> : Calculer proprement</li>
<li><strong>Sanity Check</strong> : Est-ce cohérent avec ce qu'on sait ?</li>
<li><strong>Implication</strong> : Qu'est-ce que ce chiffre veut dire ?</li>
<li><strong>Sensitivity</strong> : Quelle hypothèse aurait le plus d'impact si elle change ?</li>
</ol>
<h3>Top-down vs Bottom-up</h3>
<p><strong>Top-down</strong> : Du général au spécifique. Population → Segmentation → Pénétration → Fréquence.</p>
<p><strong>Bottom-up</strong> : Du spécifique au général. Unité de base → Multiplication → Agrégation.</p>
<div class="insight-box">
Utiliser <strong>les deux</strong> si le temps le permet et les croiser. Un résultat cohérent des deux côtés = crédibilité.
</div>`
      }
    ],
    drills: [
      { id: "MS-D1", type: "sizing", prompt: "Estimez le marché des trottinettes électriques en libre-service à Paris.", time: 300, prompt_en: "Estimate the electric scooter sharing market in Paris.", answer: "Approche top-down : Population Paris intra-muros : 2,1M hab. + banlieue proche : 2,9M = zone d'usage 5M. Utilisateurs actifs trottinettes : 10% des adultes (18-55 ans) = 400 000 utilisateurs. Fréquence : 2 trajets/semaine en saison (avril-octobre = 6 mois) + 0,5/semaine hors saison. Fréquence annuelle : 2×26 + 0.5×26 = 65 trajets/an. Prix moyen : 0,25€ unlock + 0,15€/min × 10 min = 1,75€/trajet. Marché total : 400 000 × 65 × 1,75 = 45,5M€. Sanity check : Lime et Tier annoncent ~30-50M€ de revenus en France (Paris = ~70%) → ~21-35M€ → ordre de grandeur cohérent.", answer_en: "Top-down approach: Population Paris intra-muros: 2.1M + greater Paris: 2.9M = 5M usage zone. Active scooter users: 10% of adults (18-55) = 400,000 users. Frequency: 2 trips/week in season (April-October = 6 months) + 0.5/week off-season. Annual frequency: 2×26 + 0.5×26 = 65 trips/year. Average price: €0.25 unlock + €0.15/min × 10 min = €1.75/trip. Total market: 400,000 × 65 × 1.75 = €45.5M. Sanity check: Lime and Tier report ~€30-50M revenue in France (Paris ~70%) → ~€21-35M → consistent order of magnitude." },
      { id: "MS-D2", type: "sizing", prompt: "Estimez le nombre de pizzas consommées en France par an.", time: 300, prompt_en: "Estimate the number of pizzas consumed in France per year.", answer: "Approche top-down : Population France : 68M. Adultes + enfants >10 ans : 80% = 54M. % mangeant de la pizza au moins 1x/mois : 60% = 32M. Fréquence moyenne : 2 pizzas/mois (livraison + restaurant + faite maison). Total mensuel : 32M × 2 = 64M pizzas/mois. Total annuel : 64M × 12 = ~768M. Sanity check par l'offre : 15 000 pizzerias France × 100 pizzas/jour × 300 jours = 450M (hors livraison + surgelées + supermarché). En ajoutant livraison (~200M) + surgelées (~150M) → ~800M. Résultat : ~750M à 1 Md de pizzas/an.", answer_en: "Top-down: Population France: 68M. Adults + children >10: 80% = 54M. % eating pizza at least once/month: 60% = 32M. Average frequency: 2 pizzas/month (delivery + restaurant + homemade). Monthly total: 32M × 2 = 64M pizzas/month. Annual total: 64M × 12 = ~768M. Supply-side check: 15,000 pizzerias × 100 pizzas/day × 300 days = 450M (excluding delivery + frozen + supermarket). Adding delivery (~200M) + frozen (~150M) → ~800M. Result: ~750M to 1Bn pizzas/year." },
      { id: "MS-D3", type: "sizing", prompt: "Estimez la taille du marché des logiciels RH SaaS en Europe.", time: 300, prompt_en: "Estimate the size of the HR SaaS software market in Europe.", answer: "Approche par l'offre (entreprises) : Entreprises >50 salariés en Europe : environ 500 000 entreprises (Eurostat). % déjà dotées d'un logiciel RH SaaS : 40% = 200 000. ARPU annuel moyen : 5 000€ (PME) à 200 000€ (entreprises >1 000 salariés). En supposant un ARPU moyen pondéré de 15 000€/an : Revenus totaux = 200 000 × 15 000 = 3Md€. Potentiel non capturé (60% restant) : marché adressable total ~7,5Md€. Sanity check : Workday Europe ~2Md€, SAP HR ~1,5Md€, Personio ~0,5Md€ → les leaders capturent 4Md€ → ordre de grandeur cohérent avec ~5-8Md€ total.", answer_en: "Supply-side approach (companies): Companies with >50 employees in Europe: ~500,000 companies (Eurostat). % already with HR SaaS: 40% = 200,000. Average annual ARPU: €5,000 (SMEs) to €200,000 (companies >1,000 employees). Assuming weighted average ARPU of €15,000/year: Total revenues = 200,000 × 15,000 = €3Bn. Uncaptured potential (60% remaining): total addressable market ~€7.5Bn. Sanity check: Workday Europe ~€2Bn, SAP HR ~€1.5Bn, Personio ~€0.5Bn → leaders capture €4Bn → consistent with ~€5-8Bn total." },
      { id: "MS-D4", type: "sizing", prompt: "Estimez le nombre de voitures neuves vendues en France par an.", time: 300, prompt_en: "Estimate the number of new cars sold in France per year.", answer: "Approche par la demande : Parc automobile France : ~38M voitures. Durée de vie moyenne d'une voiture : 12 ans. Taux de renouvellement théorique : 38M / 12 = ~3,2M/an. Mais correction : toutes les voitures ne sont pas remplacées à l'identique. En pratique : marché VP neuf France = 1,6-1,7M/an (données AAA 2023). Pourquoi l'écart ? Les voitures restent plus longtemps (moyenne d'âge du parc = 11 ans et croît), certaines sont des imports d'occasion, certaines sont radiées sans remplacement. Sanity check : CCFA/AA donnent ~1,6M VP neufs en 2023. Résultat final : ~1,6M voitures neuves/an.", answer_en: "Demand-side approach: French car fleet: ~38M vehicles. Average vehicle lifespan: 12 years. Theoretical renewal rate: 38M / 12 = ~3.2M/year. But correction: not all vehicles are replaced like-for-like. In practice: French new passenger car market = 1.6-1.7M/year (AAA 2023 data). Why the gap? Cars are kept longer (average fleet age = 11 years and growing), some are replaced by used imports, some are scrapped without replacement. Sanity check: CCFA/AA report ~1.6M new passenger cars in 2023. Final result: ~1.6M new cars/year." },
      { id: "MS-D5", type: "sizing", prompt: "Estimez le marché des data centers en France.", time: 300, prompt_en: "Estimate the French data center market.", answer: "Approche par les acteurs : Grands hyperscalers (AWS, Azure, GCP) : 3 acteurs × ~500M€ annuel d'investissement France = 1,5Md€. Opérateurs colos (Equinix, Digital Realty, Interxion) : 20 data centers majeurs × ~50M€ de revenus annuels = 1Md€. Data centers des entreprises privées et administrations (captifs) : estimé à ~60% du marché total = aussi grand que les deux précédents. Marché total France : ~3-4Md€ de revenus annuels. Sanity check : France = ~8% du marché DC européen (~40Md€) → 3,2Md€. Cohérent.", answer_en: "Actor-based approach: Major hyperscalers (AWS, Azure, GCP): 3 players × ~€500M annual France investment = €1.5Bn. Colo operators (Equinix, Digital Realty, Interxion): 20 major data centers × ~€50M annual revenue = €1Bn. Enterprise and government captive data centers: estimated ~60% of total market = as large as the previous two. Total French market: ~€3-4Bn annual revenues. Sanity check: France = ~8% of European DC market (~€40Bn) → €3.2Bn. Consistent." },
      { id: "MS-D6", type: "sizing", prompt: "Estimez la valeur du marché de la livraison de repas à domicile en France.", time: 300, prompt_en: "Estimate the food delivery market in France.", answer: "Approche par la demande : Population 18-45 ans (cœur de cible) : 25M. % commandant au moins 1x/mois : 35% = 8,75M utilisateurs actifs. Fréquence : 1,5 commande/mois = 18 commandes/an. Panier moyen : 28€ (repas + livraison + tips). Revenus GMV : 8,75M × 18 × 28 = 4,41Md€ GMV. Revenus plateformes (take rate 25%) : 1,1Md€. Sanity check : Deliveroo + UberEats + JustEat France = ~1,2-1,5Md€ de revenus combinés → cohérent avec 1,1Md€ (quelques acteurs non comptés).", answer_en: "Demand-side approach: Population 18-45 (core target): 25M. % ordering at least once/month: 35% = 8.75M active users. Frequency: 1.5 orders/month = 18 orders/year. Average basket: €28 (meal + delivery + tips). GMV revenues: 8.75M × 18 × 28 = €4.41Bn GMV. Platform revenues (25% take rate): €1.1Bn. Sanity check: Deliveroo + UberEats + JustEat France = ~€1.2-1.5Bn combined revenues → consistent with €1.1Bn (a few smaller players not counted)." }
    ]
  },
  {
    id: "07", slug: "pricing", title: "Pricing",
    icon: "💰", color: "#f97316",
    objectives: ["Comprendre les 3 approches pricing", "Analyser l'élasticité", "Structurer une décision de pricing"],
    sections: [
      {
        title: "Framework Pricing",
        content: `<h3>Les 3 approches</h3>
<p><strong>1. Cost-plus pricing</strong> : Coût + marge cible<br>Simple mais ignore la valeur et la concurrence.</p>
<p><strong>2. Competitive pricing</strong> : S'aligner sur la concurrence<br>Pertinent sur des marchés commoditisés.</p>
<p><strong>3. Value-based pricing</strong> : Prix = valeur perçue par le client<br>Approche cabinet de conseil préférée. Maximum de la willingness to pay.</p>
<h3>La question de l'élasticité</h3>
<div class="formula-box">
Élasticité = % variation de la demande / % variation du prix
</div>
<p>Si élasticité > 1 : demande élastique (sensible au prix)<br>
Si élasticité < 1 : demande inélastique (peu sensible)<br>
Cas pratique : Luxury goods, pharma, logiciels B2B = faible élasticité</p>`
      }
    ],
    drills: [
      { id: "PRI-D1", type: "structuring", prompt: "Un éditeur de logiciel B2B SaaS envisage d'augmenter ses prix de 20%. Structurez l'analyse.", time: 90, prompt_en: "A B2B SaaS software publisher considers a 20% price increase. Structure your analysis.", answer: "Structure en 3 questions : (1) L'élasticité prix — une hausse de 20% va-t-elle provoquer du churn ? Tester sur un segment pilote. Référence : logiciels B2B avec switching costs élevés ont une élasticité faible (−0,2 à −0,5). (2) La valeur délivrée justifie-t-elle la hausse ? Si l'outil économise 10 000€/mois à l'utilisateur et coûte 500€/mois, une hausse à 600€/mois = still 15× ROI. (3) La mise en œuvre — grandfathering (pas de hausse clients existants), préavis contractuel, différenciation par tier (hausse plus forte sur les tiers Enterprise). Recommandation : une hausse de 20% sur les nouveaux contrats uniquement est risque faible — sur le renouvellement des contrats existants, négocier avec chaque client stratégique.", answer_en: "Structure with 3 questions: (1) Price elasticity — will a 20% increase trigger churn? Test on a pilot segment. Reference: B2B software with high switching costs has low elasticity (−0.2 to −0.5). (2) Does the delivered value justify the increase? If the tool saves €10,000/month for the user and costs €500/month, a rise to €600/month = still 15× ROI. (3) Implementation — grandfathering (no increase for existing clients), contractual notice period, tier differentiation (larger increase on Enterprise tiers). Recommendation: a 20% increase on new contracts only is low risk — on existing contract renewals, negotiate with each strategic client." },
      { id: "PRI-D2", type: "math", prompt: "Prix actuel 100€, volume 10000 unités. Élasticité = -1.5. Quel est l'impact d'une hausse de 10% sur le revenu ?", time: 120, prompt_en: "Current price €100, volume 10,000 units. Elasticity = −1.5. What is the revenue impact of a 10% price increase?", answer: "Calcul : Hausse de prix = +10% → nouveau prix = 110€. Élasticité = −1,5 → variation volume = −1,5 × 10% = −15%. Nouveau volume = 10 000 × (1 − 0,15) = 8 500 unités. Revenu initial = 100€ × 10 000 = 1 000 000€. Nouveau revenu = 110€ × 8 500 = 935 000€. Impact = −65 000€ = −6,5%. Conclusion : avec une élasticité de −1,5 (élasticité > 1 en valeur absolue = demande élastique), la hausse de prix réduit le revenu total. Il aurait fallu une élasticité < 1 pour que la hausse soit revenue-accretive.", answer_en: "Calculation: Price increase = +10% → new price = €110. Elasticity = −1.5 → volume change = −1.5 × 10% = −15%. New volume = 10,000 × (1 − 0.15) = 8,500 units. Initial revenue = €100 × 10,000 = €1,000,000. New revenue = €110 × 8,500 = €935,000. Impact = −€65,000 = −6.5%. Conclusion: with elasticity of −1.5 (|elasticity| > 1 = elastic demand), the price increase reduces total revenue. An elasticity < 1 in absolute value would have been needed for the price increase to be revenue-accretive." }
    ]
  },
  {
    id: "08", slug: "ma", title: "M&A",
    icon: "🤝", color: "#8b5cf6",
    objectives: ["Évaluer la rationale stratégique", "Analyser l'attractivité de la cible", "Estimer les synergies et risques"],
    sections: [
      {
        title: "Framework M&A",
        content: `<h3>Les 4 questions M&A</h3>
<ol>
<li><strong>Pourquoi acquérir ?</strong> (Strategic rationale)</li>
<li><strong>La cible est-elle attractive ?</strong> (Target analysis)</li>
<li><strong>À quel prix ?</strong> (Valuation + synergies)</li>
<li><strong>Peut-on intégrer ?</strong> (Integration risks)</li>
</ol>
<h3>Types de synergies</h3>
<p><strong>Synergies de revenus</strong> : Cross-sell, nouveaux clients, pricing power, nouvelles géographies</p>
<p><strong>Synergies de coûts</strong> : Économies d'échelle, élimination de doublons, optimisation achats</p>
<div class="insight-box">
<strong>Règle d'or</strong> : Les synergies de coûts sont plus certaines que les synergies de revenus. cabinet de conseil conseille d'être conservateur sur les revenues synergies.
</div>`
      }
    ],
    drills: [
      { id: "MA-D1", type: "structuring", prompt: "Un assureur envisage d'acquérir un insurtech. Structurez la décision.", time: 90, prompt_en: "An insurer is considering acquiring an insurtech. Structure the decision.", answer: "Structure M&A en 4 questions : (1) Pourquoi acquérir ? Logique stratégique = accès à la technologie (pricing algorithme, distribution digitale), acquisition de talents, accélération de la transformation digitale sans build interne. (2) La cible est-elle la bonne ? (technologie différenciante et brevets ? équipe clé prête à rester ? synergies estimées > 20% du prix d'acquisition ?). (3) L'équation financière est-elle viable ? (valorisation : insurtechs SaaS typiquement 8-12× ARR = cher. Payback sur synergies ? Deal dilutif ou accretif ?). (4) Les risques d'intégration sont-ils maîtrisables ? (culture clash grand assureur vs startup, départ des fondateurs post-closing). Recommandation de process : due diligence technique + rétention contractuelle des fondateurs sur 3 ans.", answer_en: "M&A structure with 4 questions: (1) Why acquire? Strategic rationale = access to technology (pricing algorithm, digital distribution), talent acquisition, accelerating digital transformation without internal build. (2) Is the target the right one? (differentiating technology and patents? key team willing to stay? estimated synergies > 20% of acquisition price?). (3) Is the financial equation viable? (valuation: insurtech SaaS typically 8-12× ARR = expensive. Synergy payback? Dilutive or accretive deal?). (4) Are integration risks manageable? (culture clash large insurer vs startup, founder departure post-closing). Process recommendation: technical due diligence + contractual founder retention over 3 years." }
    ]
  },
  {
    id: "09", slug: "operations", title: "Operations",
    icon: "⚙️", color: "#6b7280",
    objectives: ["Analyser les goulots d'étranglement", "Optimiser la chaîne de valeur", "Mesurer la productivité"],
    sections: [
      {
        title: "Framework Operations",
        content: `<h3>L'arbre opérationnel</h3>
<div class="formula-box">
Productivité = Output / Input<br>
Utilisation = Capacité utilisée / Capacité totale<br>
Throughput = Taux × Capacité × Disponibilité
</div>
<h3>Les 5 questions clés</h3>
<ol>
<li>Quel est le <strong>goulot d'étranglement</strong> (bottleneck) ?</li>
<li>Quel est le <strong>niveau d'utilisation</strong> des ressources ?</li>
<li>Y a-t-il des <strong>gaspillages</strong> (LEAN : TIMWOOD) ?</li>
<li>Comment se compare-t-on aux <strong>benchmarks</strong> du secteur ?</li>
<li>Quelles <strong>initiatives d'amélioration</strong> ont le meilleur ROI ?</li>
</ol>`
      }
    ],
    drills: [
      { id: "OPS-D1", type: "structuring", prompt: "Une usine automobile voit sa productivité baisser de 15% sans changement de personnel. Structurez.", time: 90, prompt_en: "An automotive plant sees productivity fall 15% with no staffing changes. Structure your analysis.", answer: "Structure : Productivité = Output / Input. Output en baisse (problème de production) OU Input en hausse (problème d'efficience). Branche 1 — Équipements (pannes machines récentes, maintenance déférrée, taux de rendement synthétique TRS en baisse ?). Branche 2 — Processus (changement de processus récent, problème de qualité → retouches → temps perdu, goulot d'étranglement nouveau). Branche 3 — Matières premières (composants défectueux, délais fournisseurs causant des arrêts de ligne). Branche 4 — Facteur humain (turnover élevé récent, changement d'équipe, moral). Priorisation : regarder le TRS (Overall Equipment Effectiveness) d'abord — en France auto, TRS cible = 75-85%. Si TRS <65%, le problème est équipement ou processus.", answer_en: "Structure: Productivity = Output / Input. Output declining (production problem) OR Input increasing (efficiency problem). Branch 1 — Equipment (recent machine breakdowns, deferred maintenance, declining OEE/TRS?). Branch 2 — Process (recent process change, quality issue → rework → lost time, new bottleneck). Branch 3 — Raw materials (defective components, supplier delays causing line stoppages). Branch 4 — Human factor (recent high turnover, team change, morale). Prioritization: look at OEE (Overall Equipment Effectiveness) first — French auto target = 75-85%. If OEE <65%, the issue is equipment or process." },
      { id: "OPS-D2", type: "structuring", prompt: "Un e-commerce voit son délai de livraison augmenter de 2 à 4 jours. Structurez l'analyse.", time: 90, prompt_en: "An e-commerce company sees its delivery time increase from 2 to 4 days. Structure your analysis.", answer: "Structure : Délai total = Délai de traitement commande + Délai de préparation (picking/packing) + Délai transporteur. Branche 1 — Traitement commande (systèmes IT lents, validation manuelle des paiements). Branche 2 — Entrepôt : (a) Capacité saturée ? (volume de commandes en hausse, pas d'ajout de ressources) ; (b) Erreurs de stock ? ; (c) Réorganisation récente du WMS. Branche 3 — Transporteur : délais Colissimo / DHL en hausse, problème de collecte (créneaux de collecte réduits). Priorisation : si délai entrepôt = 1 jour → 2 jours, c'est là que l'écart se crée. Diagnostiquer l'OTD (On-Time Delivery) par sous-étape.", answer_en: "Structure: Total lead time = Order processing delay + Preparation delay (picking/packing) + Carrier delay. Branch 1 — Order processing (slow IT systems, manual payment validation). Branch 2 — Warehouse: (a) Saturated capacity? (order volume up, no resource addition); (b) Stock errors?; (c) Recent WMS reorganization. Branch 3 — Carrier: Colissimo/DHL delays increasing, collection issue (reduced pickup windows). Prioritization: if warehouse delay went from 1 day → 2 days, that's where the gap is created. Diagnose OTD (On-Time Delivery) by sub-step." }
    ]
  },
  {
    id: "10", slug: "strategy", title: "Strategy",
    icon: "♟️", color: "#0891b2",
    objectives: ["Analyser la position concurrentielle", "Identifier les avantages compétitifs", "Formuler une stratégie de différenciation"],
    sections: [
      {
        title: "Strategic Analysis",
        content: `<h3>Les 3 questions stratégiques fondamentales</h3>
<ol>
<li><strong>Où sommes-nous ?</strong> (Position actuelle, avantages, faiblesses)</li>
<li><strong>Où voulons-nous aller ?</strong> (Objectif, ambition)</li>
<li><strong>Comment y aller ?</strong> (Initiatives, ressources, timeline)</li>
</ol>
<h3>Avantage compétitif durable</h3>
<p>cabinet de conseil parle de <strong>moat</strong> : qu'est-ce qui protège l'entreprise de la concurrence ?</p>
<ul>
<li><strong>Cost advantage</strong> : Produire moins cher que la concurrence</li>
<li><strong>Differentiation</strong> : Offrir quelque chose que les autres ne peuvent pas copier facilement</li>
<li><strong>Network effects</strong> : Plus d'utilisateurs → plus de valeur (plateformes, marketplaces)</li>
<li><strong>Switching costs</strong> : Difficile de changer de fournisseur (ERP, données clients)</li>
<li><strong>Scale</strong> : Économies d'échelle inatteignables pour les concurrents</li>
</ul>`
      }
    ],
    drills: [
      { id: "STG-D1", type: "structuring", prompt: "Amazon entre sur le marché de l'assurance en France. Comment les assureurs traditionnels doivent-ils réagir ?", time: 90, prompt_en: "Amazon enters the insurance market in France. How should traditional insurers react?", answer: "Analyse de la menace : Amazon = distribution digitale parfaite + données client + confiance = concurrent asymétrique sur les produits simple (assurance auto, habitation). PAS une menace sur les produits complexes (assurance vie, professionnelle). Réactions possibles : (1) Défensif — durcir les barrières à l'entrée (partenariats exclusifs courtiers, investissements fidélité client, amélioration UX app). (2) Offensif — devenir le backend d'Amazon (être l'assureur qui accepte de whitelabeler pour Amazon). (3) Différenciation — se positionner sur la complexité et le conseil que Amazon ne peut pas offrir. Recommandation : option 2 (devenir partenaire) est paradoxalement la plus lucrative pour un assureur leader — si Amazon lance, il aura besoin d'un assureur régulé en backend.", answer_en: "Threat analysis: Amazon = perfect digital distribution + customer data + trust = asymmetric competitor on simple products (car, home insurance). NOT a threat on complex products (life, professional insurance). Possible reactions: (1) Defensive — harden entry barriers (exclusive broker partnerships, loyalty investments, app UX improvements). (2) Offensive — become Amazon's backend (be the insurer willing to whitelabel for Amazon). (3) Differentiation — position on complexity and advice that Amazon cannot offer. Recommendation: option 2 (become a partner) is paradoxically the most lucrative for a leading insurer — if Amazon launches, it will need a licensed insurer as backend." }
    ]
  },
  {
    id: "11", slug: "digital-ai", title: "Digital & AI",
    icon: "🤖", color: "#7c3aed",
    objectives: ["Structurer un case AI/Tech", "Traduire les insights techniques en recommandations business", "Éviter le piège 'AI guy'"],
    sections: [
      {
        title: "AI Strategy Framework",
        content: `<h3>Attention — ton avantage et ton piège</h3>
<p>Ton background AI est un <strong>avantage différenciant</strong> chez Entretien Consulting. Mais tu dois l'activer <em>intelligemment</em>.</p>
<div class="warning-box">
<strong>Piège</strong> : Devenir "the AI guy" qui parle de modèles, d'accuracy et d'architecture.<br>
<strong>Objectif</strong> : Être le consultant qui comprend l'IA ET sait ce que ça veut dire pour le business.
</div>
<h3>Framework AI Business Case</h3>
<ol>
<li><strong>Problem definition</strong> : Quel problème business l'IA résout-elle vraiment ?</li>
<li><strong>Value creation</strong> : Comment se traduit l'impact en €/temps/risque ?</li>
<li><strong>Feasibility</strong> : Données disponibles ? Qualité ? Gouvernance ?</li>
<li><strong>Implementation</strong> : Build vs Buy ? Timeline ? Change management ?</li>
<li><strong>Risks</strong> : Biais algorithmiques, régulation, dépendance fournisseur</li>
</ol>
<h3>Translation Tech → Business</h3>
<table class="data-table">
<tr><th>Langage technique</th><th>Langage consultant</th></tr>
<tr><td>Précision du modèle 87%</td><td>Réduit de 13% les erreurs de classification</td></tr>
<tr><td>RAG sur base documentaire</td><td>Accès instantané à la connaissance interne</td></tr>
<tr><td>Latence p95 < 200ms</td><td>Expérience utilisateur fluide sans attente perçue</td></tr>
<tr><td>F1-score 0.82</td><td>Meilleur équilibre détection/faux positifs qu'un expert humain</td></tr>
<tr><td>Feature importance: colonne X</td><td>Le principal driver de décision est X</td></tr>
</table>`
      }
    ],
    drills: [
      { id: "AI-D1", type: "translation", prompt: "Traduisez : 'Notre LLM fine-tuné a un BLEU score de 0.73 sur le dataset de validation interne.' → Communication client senior.", time: 60, prompt_en: "Translate: 'Our fine-tuned LLM has a BLEU score of 0.73 on the internal validation dataset.' → Senior client communication.", answer: "Reformulation : 'Notre modèle d'intelligence artificielle a été entraîné spécifiquement sur les données de votre secteur et produit des textes de qualité professionnelle dans 7 cas sur 10 lors de nos tests internes. Les 3 cas restants nécessitent une revue humaine rapide — ce qui est standard pour cette catégorie de technologie à ce stade de maturité.' Principe : supprimer le jargon technique (BLEU score, LLM, fine-tuning, dataset) et remplacer par la réalité opérationnelle (7/10, revue humaine) et le benchmark sectoriel (standard pour cette technologie).", answer_en: "Rephrased: 'Our AI model was trained specifically on your industry's data and produces professional-quality text in 7 out of 10 cases during our internal tests. The remaining 3 cases require a quick human review — which is standard for this category of technology at its current maturity stage.' Principle: remove technical jargon (BLEU score, LLM, fine-tuning, dataset) and replace with operational reality (7/10, human review) and industry benchmark (standard for this technology)." },
      { id: "AI-D2", type: "structuring", prompt: "Une banque veut utiliser l'IA générative pour son service client. Structurez la décision stratégique.", time: 90, prompt_en: "A bank wants to use generative AI for customer service. Structure the strategic decision.", answer: "Structure en 3 axes : (1) Cas d'usage prioritaires (chatbot FAQ = ROI rapide, résumé des appels agents = gain de productivité, personnalisation des offres = revenu). (2) Prérequis techniques et de données (données structurées clients disponibles ? RGPD compliance ? Infrastructure MLOps ?). (3) Risques et gouvernance (hallucinations = risque réglementaire bancaire, biais algorithmiques, explicabilité requise par la BCE). Recommandation de séquencement : commencer par les cas d'usage internes (résumé d'appels, aide aux agents) avant d'exposer l'IA aux clients — le coût d'une erreur interne est 100× inférieur à une erreur face client dans une banque régulée.", answer_en: "Structure on 3 axes: (1) Priority use cases (FAQ chatbot = fast ROI, agent call summaries = productivity gain, offer personalization = revenue). (2) Technical and data prerequisites (structured client data available? GDPR compliance? MLOps infrastructure?). (3) Risks and governance (hallucinations = banking regulatory risk, algorithmic bias, ECB-required explainability). Sequencing recommendation: start with internal use cases (call summaries, agent assistance) before exposing AI to customers — the cost of an internal error is 100× lower than a client-facing error in a regulated bank." },
      { id: "AI-D3", type: "structuring", prompt: "Un industriel veut déployer une IA de maintenance prédictive. Structurez le business case.", time: 90, prompt_en: "An industrial company wants to deploy predictive maintenance AI. Structure the business case.", answer: "Business case en 4 étapes : (1) Quantifier le problème actuel — coût des arrêts non planifiés × fréquence × durée. Exemple : 10 arrêts/an × 8h × 50 000€/h = 4M€/an. (2) Estimer les bénéfices de l'IA — réduction des arrêts non planifiés de 60-70% selon les études sectorielles = économie de 2,4-2,8M€/an. Réduction des pièces de rechange (meilleur timing). (3) Coût du déploiement — capteurs IoT, plateforme de données, formation + change management. Typiquement 500K€-2M€ selon la complexité. (4) ROI et décision — avec 2.5M€ d'économies annuelles et 1M€ d'investissement, ROI = 150% à an 1, payback < 6 mois.", answer_en: "Business case in 4 steps: (1) Quantify the current problem — cost of unplanned downtime × frequency × duration. Example: 10 stoppages/year × 8h × €50,000/h = €4M/year. (2) Estimate AI benefits — 60-70% reduction in unplanned stoppages per industry studies = €2.4-2.8M/year savings. Reduced spare parts (better timing). (3) Deployment cost — IoT sensors, data platform, training + change management. Typically €500K-2M depending on complexity. (4) ROI and decision — with €2.5M annual savings and €1M investment, ROI = 150% at year 1, payback < 6 months." }
    ]
  },
  {
    id: "12", slug: "exhibits", title: "Exhibit Analysis",
    icon: "📉", color: "#dc2626",
    objectives: ["Lire un exhibit complexe en moins de 90 secondes", "Identifier l'insight caché", "Formuler une implication actionnable"],
    sections: [
      {
        title: "Méthode UOQCEI",
        content: `<h3>Les 6 étapes</h3>
<div class="formula-box">
U — Understand : Que mesure ce graphique ?<br>
O — Observe : Que vois-je ? (tendances, outliers, comparaisons)<br>
Q — Quantify : Quels sont les chiffres clés ?<br>
C — Compare : Par rapport à quoi ? (benchmark, historique, budget)<br>
E — Explain : Pourquoi ? (hypothèses causales)<br>
I — Implication : So what ? Que fait-on ?
</div>
<h3>Types d'exhibits fréquents en case</h3>
<ul>
<li><strong>Bar chart</strong> : Comparaison entre entités</li>
<li><strong>Line chart</strong> : Évolution dans le temps</li>
<li><strong>Stacked bar</strong> : Composition + évolution</li>
<li><strong>Waterfall</strong> : Décomposition d'une variation</li>
<li><strong>Scatter plot</strong> : Corrélation entre 2 variables</li>
<li><strong>Table</strong> : Données multi-dimensionnelles</li>
</ul>
<h3>Questions à se poser devant tout exhibit</h3>
<ol>
<li>Quelle est l'unité ? Quelle est l'échelle ?</li>
<li>Y a-t-il un outlier évident ?</li>
<li>Quelle est la tendance dominante ?</li>
<li>Y a-t-il une rupture dans la tendance ?</li>
<li>Qu'est-ce que l'exhibit NE montre PAS ?</li>
</ol>`
      }
    ],
    drills: [
      { id: "EXH-D1", type: "exhibit", prompt: "Un bar chart montre: Q1 marge 22%, Q2 marge 19%, Q3 marge 16%, Q4 marge 21%. Analysez en 90 secondes.", time: 90, prompt_en: "A bar chart shows: Q1 margin 22%, Q2 19%, Q3 16%, Q4 21%. Analyze in 90 seconds.", answer: "Analyse UOQCEI : U — Unités : % de marge (pas précisé si brute ou nette — demander). O — Objet : évolution trimestrielle des marges sur l'année. Q — Chiffres clés : marge moyenne = 19,5%, écart max = 6 points (Q1 22% vs Q3 16%). C — Comparaison : tendance baissière Q1-Q3 puis rebond Q4. E — Explication : le creux Q3 suggère un effet saisonnalité (coûts estivaux ? baisse d'activité ?) ou un problème ponctuel Q3. Le rebond Q4 peut être lié à un pricing de fin d'année ou à des coûts plus faibles. I — Implication : la marge annuelle de 19,5% cache une forte volatilité trimestrielle. Il faut comprendre les drivers de Q3 pour stabiliser la marge à 21-22% tout au long de l'année.", answer_en: "UOQCEI analysis: U — Units: % margin (gross or net not specified — ask). O — Object: quarterly margin evolution over the year. Q — Key figures: average margin = 19.5%, max gap = 6 points (Q1 22% vs Q3 16%). C — Compare: declining trend Q1-Q3 then Q4 rebound. E — Explain: Q3 trough suggests a seasonality effect (summer costs? activity decline?) or a one-off Q3 issue. Q4 rebound may relate to year-end pricing or lower costs. I — Implication: the 19.5% annual margin masks significant quarterly volatility. Must understand Q3 drivers to stabilize margin at 21-22% year-round." },
      { id: "EXH-D2", type: "exhibit", prompt: "Tableau: Seg A (volume +15%, marge -3%), Seg B (volume -8%, marge +5%), Seg C (volume +2%, marge +1%). Insight ?", time: 90, prompt_en: "Table: Seg A (volume +15%, margin -3%), Seg B (volume -8%, margin +5%), Seg C (volume +2%, margin +1%). What is the key insight?", answer: "Analyse des effets croisés : Seg A (+vol, −marge) : croissance forte mais dégraissante — suspect de pricing agressif pour gagner des volumes ou d'un mix interne défavorable. Seg B (−vol, +marge) : contraction du volume mais amélioration des marges — signe d'une discipline tarifaire accrue ou d'une montée en gamme (élagage du bas de gamme). Seg C : croissance faible mais saine. Insight principal : il y a une tension stratégique — le segment qui croît le plus (A) tire la marge globale vers le bas, tandis que le segment qui se contracte (B) améliore la qualité du mix. Si A représente 60% du CA, la marge globale va baisser malgré les performances de B. Implication : décision stratégique — accepter la croissance de A avec un programme d'amélioration de sa marge, ou contraindre sa croissance pour préserver la marge ?", answer_en: "Cross-effects analysis: Seg A (+volume, −margin): strong but margin-dilutive growth — suspect aggressive pricing to gain volume or unfavorable internal mix. Seg B (−volume, +margin): volume contraction but margin improvement — sign of greater pricing discipline or upgrading (pruning low-end). Seg C: modest but healthy growth. Main insight: there is a strategic tension — the fastest-growing segment (A) pulls overall margin down, while the contracting segment (B) improves mix quality. If A represents 60% of revenue, overall margin will fall despite B's performance. Implication: strategic choice — accept A's growth with a margin improvement program, or constrain its growth to preserve margin?" }
    ]
  },
  {
    id: "13", slug: "brainstorming", title: "Brainstorming",
    icon: "💡", color: "#d97706",
    objectives: ["Générer des idées structurées rapidement", "Équilibrer volume et faisabilité", "Catégoriser avant d'idéer"],
    sections: [
      {
        title: "Méthode Brainstorming Structuré",
        content: `<h3>La règle : catégories d'abord</h3>
<p>Ne jamais générer des idées sans catégories. L'interviewer évalue ta capacité à <strong>structurer</strong> ta créativité.</p>
<div class="formula-box">
Étape 1 : Annoncer les catégories (10 sec)<br>
Étape 2 : 2-3 idées par catégorie (en montrant la logique)<br>
Étape 3 : Prioriser 2-3 idées phares avec justification
</div>
<h3>Exemple : Comment augmenter la fidélisation d'un SaaS B2B ?</h3>
<p><strong>Catégorie 1 — Valeur produit</strong> : Nouvelles fonctionnalités, intégrations, personnalisation</p>
<p><strong>Catégorie 2 — Relation client</strong> : Customer success proactif, training, community</p>
<p><strong>Catégorie 3 — Switching costs</strong> : Lock-in données, certifications, API ecosystem</p>
<p><strong>Catégorie 4 — Pricing</strong> : Contrats long terme, volume discounts, bundles</p>
<p>→ <strong>Priorisation</strong> : "La priorité serait sur la relation client car c'est le driver #1 de churn dans les SaaS B2B."</p>`
      }
    ],
    drills: [
      { id: "BR-D1", type: "brainstorming", prompt: "Générez 8 idées pour réduire le churn d'une néobanque. 90 secondes.", time: 90, prompt_en: "Generate 8 ideas to reduce churn at a neobank. 90 seconds.", answer: "1. Améliorer l'onboarding (tutoriels in-app, appel de bienvenue dans les 48h). 2. Alertes proactives personnalisées (dépenses inhabituelles, objectifs d'épargne atteints). 3. Programme de fidélité (cashback sur transactions, intérêts améliorés après 1 an). 4. Produits d'ancrage (crédit immobilier, assurance auto via la néobanque = forte rétention). 5. Analyse du comportement pré-churn (baisse d'utilisation détectée → offre proactive). 6. Service client exceptionnel (chat réponse <2 min = différenciateur vs banques traditionnelles). 7. Features exclusives abonnés longue durée (accès prioritaire aux nouvelles fonctionnalités). 8. Comptes joints et multi-utilisateurs (plus difficile à quitter si partagé).", answer_en: "1. Better onboarding (in-app tutorials, welcome call within 48h). 2. Personalized proactive alerts (unusual spending, savings goals reached). 3. Loyalty program (cashback on transactions, improved interest after 1 year). 4. Anchor products (mortgage, car insurance via neobank = strong retention). 5. Pre-churn behavior analysis (usage decline detected → proactive offer). 6. Exceptional customer service (chat response <2 min = differentiator vs traditional banks). 7. Exclusive features for long-term subscribers (priority access to new features). 8. Joint and multi-user accounts (harder to leave if shared)." },
      { id: "BR-D2", type: "brainstorming", prompt: "Comment un aéroport peut-il augmenter ses revenus non-aéronautiques ? 2 minutes.", time: 120, prompt_en: "How can an airport increase non-aeronautical revenues? 2 minutes.", answer: "Structure en 3 axes : Avant l'embarquement (zone publique) : (1) Premium lounges payants ; (2) Click & Collect optimisé (Amazon lockers, click & collect express) ; (3) Food & Bev premium (restaurants gastronomiques, pas seulement des chaînes). Dans les terminaux (côté piste) : (4) Duty-free optimisé (layout, personnalisation selon le vol, prix compétitifs vs en ligne) ; (5) Espaces de travail payants (WeWork-style) ; (6) Spa et wellbeing. Hors voyage : (7) Location de salles de conférence et évènements d'entreprise ; (8) Publicité ciblée dans les espaces digitaux de l'aéroport ; (9) Parking optimisé par yield management (tarifs dynamiques). Levier principal : chaque +€1 de dépense non-aéronautique par passager = impact direct sur le revenu sans coût variable significatif.", answer_en: "Structure on 3 axes: Before boarding (public zone): (1) Paid premium lounges; (2) Optimized click & collect (Amazon lockers, express pickup); (3) Premium F&B (gastronomic restaurants, not just chains). In terminals (airside): (4) Optimized duty-free (layout, flight-based personalization, competitive pricing vs online); (5) Paid workspaces (WeWork-style); (6) Spa and wellbeing. Outside travel: (7) Conference room rental and corporate events; (8) Targeted advertising in airport digital spaces; (9) Parking optimized by yield management (dynamic pricing). Main lever: every +€1 of non-aeronautical spend per passenger = direct revenue impact with no significant variable cost." },
      { id: "BR-D3", type: "brainstorming", prompt: "Quelles sont les opportunités d'IA pour un cabinet d'avocats ? 2 minutes.", time: 120, prompt_en: "What are the AI opportunities for a law firm? 2 minutes.", answer: "Court terme (ROI rapide) : (1) Revue de contrats IA (réduction du temps de due diligence de 60-80%) ; (2) Recherche juridique assistée (Westlaw AI, LexisNexis AI) ; (3) Rédaction automatique de documents standard (courriers, NDAs). Moyen terme : (4) Prédiction du résultat de litiges (analyse jurisprudentielle) ; (5) Facturation intelligente (temps automatiquement loggé, détection des anomalies) ; (6) Connaissance client améliorée (synthèses automatiques des dossiers). Risques et limites : confidentialité client (RGPD, secret professionnel) = impossibilité d'envoyer des données client à des LLMs publics. Règle : LLM déployé en interne sur infrastructure sécurisée uniquement. Opportunité différenciante : le premier cabinet à proposer 'due diligence M&A en 48h vs 3 semaines' grâce à l'IA crée un avantage compétitif majeur.", answer_en: "Short term (fast ROI): (1) AI contract review (60-80% reduction in due diligence time); (2) AI-assisted legal research (Westlaw AI, LexisNexis AI); (3) Automated drafting of standard documents (letters, NDAs). Medium term: (4) Litigation outcome prediction (jurisprudence analysis); (5) Smart billing (time automatically logged, anomaly detection); (6) Improved client knowledge (automatic case summaries). Risks and limitations: client confidentiality (GDPR, professional secrecy) = inability to send client data to public LLMs. Rule: LLM deployed internally on secure infrastructure only. Differentiating opportunity: first firm to offer 'M&A due diligence in 48h vs 3 weeks' via AI creates a major competitive advantage." },
      { id: "BR-D4", type: "brainstorming", prompt: "Comment une chaîne d'hôtels peut-elle réduire son empreinte carbone tout en maintenant sa rentabilité ? 90s.", time: 90, prompt_en: "How can a hotel chain reduce its carbon footprint while maintaining profitability?", answer: "Axes sans coût ou ROI positif : (1) Gestion intelligente de l'énergie (BMS, thermostats par capteur de présence = −20-30% énergie, payback 2-3 ans) ; (2) Linge et serviettes à la demande seulement (réduction eau/énergie, déjà pratiqué = −15% laverie) ; (3) Réduction du gaspillage alimentaire (IA pour prévoir les repas du lendemain = coûts alimentaires −10%). Investissements plus importants mais ROI positif : (4) Panneaux solaires sur les toitures (autoproduction jusqu'à 30% des besoins pour les hôtels en zone solaire, amortissement 7 ans) ; (5) Certification HQE ou LEED = prime de 5-10% sur le prix chambre pour segment business travel. Communication ROI : positionner les efforts carbone comme un argument commercial auprès des entreprises (ESG reporting clients = demande en hausse).", answer_en: "Zero-cost or positive ROI initiatives: (1) Smart energy management (BMS, motion-sensor thermostats = −20-30% energy, 2-3 year payback); (2) Linen and towels on demand only (water/energy savings, already practiced = −15% laundry); (3) Food waste reduction (AI to forecast next-day meals = −10% food costs). Larger investments with positive ROI: (4) Solar panels on rooftops (self-generation up to 30% of needs for sun-zone hotels, 7-year payback); (5) HQE or LEED certification = 5-10% room rate premium for business travel segment. Commercial ROI: position carbon efforts as a commercial argument with corporations (client ESG reporting = growing demand)." }
    ]
  },
  {
    id: "14", slug: "synthesis", title: "Synthesis",
    icon: "📋", color: "#0284c7",
    objectives: ["Synthétiser un case en 30-60 secondes", "Format Answer → Evidence → Implication → Risks → Next Steps", "Answer First absolu"],
    sections: [
      {
        title: "L'art de la synthèse",
        content: `<h3>Le format AEIRN</h3>
<div class="formula-box">
A — Answer : La recommandation en 1 phrase<br>
E — Evidence : 2-3 preuves clés (chiffres si possible)<br>
I — Implication : Ce que ça veut dire pour le client<br>
R — Risks : 1-2 risques principaux à surveiller<br>
N — Next Steps : 2-3 prochaines étapes concrètes
</div>
<h3>Exemple (30 secondes)</h3>
<p><em>Case : Un retailer envisage d'entrer en Allemagne.</em></p>
<div class="example-box">
"Je recommande d'entrer en Allemagne, mais uniquement en ligne dans un premier temps. Les trois raisons : le marché allemand représente 90Md€ avec une croissance de 8%, notre modèle e-commerce a démontré sa scalabilité, et une entrée physique nécessiterait 50M€ de capex. Le principal risque est la concurrence locale forte — Amazon DE et Zalando. Prochaines étapes : tester via marketplace, analyser la data, décider de l'extension physique à 18 mois."
</div>`
      }
    ],
    drills: [
      { id: "SYN-D1", type: "synthesis", prompt: "Vous avez analysé un cas profitability : Revenue stable, mais coûts variables +25% dus à des hausses matières premières. Synthétisez en 30 secondes.", time: 30 },
      { id: "SYN-D2", type: "synthesis", prompt: "Cas : Un SaaS B2B devrait-il acquérir un concurrent pour 50M€ ? Synergies estimées = 8M€/an, risques d'intégration élevés. Synthèse en 45 secondes.", time: 45 },
      { id: "SYN-D3", type: "synthesis", prompt: "Cas Market Entry : Marché attractif (8Md€, +12%/an), mais notre client n'a pas les capacités locales. Synthèse en 30 secondes.", time: 30 }
    ]
  },
  {
    id: "15", slug: "recommendation", title: "Recommendation",
    icon: "✅", color: "#16a34a",
    objectives: ["Formuler une recommandation claire et décisive", "Quantifier l'impact", "Intégrer les risques et next steps"],
    sections: [
      {
        title: "L'art de recommander",
        content: `<h3>Ce que cabinet de conseil veut</h3>
<p>Une recommendation n'est pas un résumé. C'est une <strong>décision</strong>.</p>
<div class="warning-box">
<strong>À éviter</strong> : "Il faudrait envisager d'explorer la possibilité de..."<br>
<strong>cabinet de conseil veut</strong> : "Je recommande de faire X. Voici pourquoi."
</div>
<h3>Les 4 caractéristiques d'une bonne recommendation</h3>
<ol>
<li><strong>Décisive</strong> : Oui ou Non. Faire ou Ne pas faire. Pas "ça dépend".</li>
<li><strong>Quantifiée</strong> : Impact chiffré si possible (€, %, timeline)</li>
<li><strong>Risques identifiés</strong> : Montrer qu'on a pensé aux downside scenarios</li>
<li><strong>Actionnable</strong> : Next steps concrets, responsables, timeline</li>
</ol>`
      }
    ],
    drills: [
      { id: "REC-D1", type: "recommendation", prompt: "Après analyse : un opérateur telecom devrait-il lancer une offre 5G premium à +30€/mois ? Marché favorable, risque sur adoption. Recommandez.", time: 45 }
    ]
  },
  {
    id: "16", slug: "advanced-cases", title: "Advanced Cases",
    icon: "🎯", color: "#b91c1c",
    objectives: ["Gérer les cases ambigus", "Combiner plusieurs types en un seul case", "Performer sous pression maximale"],
    sections: [
      {
        title: "Advanced Case Patterns",
        content: `<h3>Les 3 patterns cabinet de conseil avancés</h3>
<p><strong>Pattern 1 : Case imbriqué</strong><br>
Un case commence comme profitability, devient growth, puis market entry. Tu dois reconnaître le shift et adapter ta structure.</p>
<p><strong>Pattern 2 : Ambiguité volontaire</strong><br>
L'interviewer donne des informations incomplètes ou contradictoires. Il teste ta capacité à gérer l'incertitude et à poser les bonnes questions.</p>
<p><strong>Pattern 3 : Trap case</strong><br>
Les premières données pointent vers une conclusion évidente — mais fausse. Le vrai insight est contre-intuitif.</p>
<h3>Comment survivre à un advanced case</h3>
<ol>
<li>Ne jamais se précipiter sur la première structure</li>
<li>Reformuler 2 fois si nécessaire</li>
<li>Toujours annoncer sa logique avant de l'appliquer</li>
<li>En cas de blocage : "Let me step back and reconsider."</li>
</ol>`
      }
    ],
    drills: []
  }
],

// ============================================================
// BUSINESS FUNDAMENTALS — SECTOR SHEETS
// ============================================================
sectors: [
  {
    id: "banking", name: "Banking / Retail Banking",
    model: "Banques de détail collectent dépôts, octroient des crédits, génèrent des revenus d'intérêts et commissions.",
    revenue: ["Net Interest Income (NIM) = Taux actif - Taux passif", "Commissions & fees (gestion de compte, moyens de paiement)", "Trading (banques universelles)", "Assurance-vie (bancassurance)"],
    costs: ["Salaires & frais généraux (~60-70% des revenus)", "Coûts du risque (provisions sur créances douteuses)", "Coûts IT (transformation digitale lourde)", "Coûts réglementaires (Bâle III/IV)"],
    margins: "Marges nettes 15-25% dans le retail banking. NIM typique 1.5-2.5% en Europe.",
    kpis: ["NIM (Net Interest Margin)", "Cost-to-Income Ratio (<50% = bon)", "NPL Ratio (Non-Performing Loans)", "ROE (Return on Equity)", "CET1 Ratio (solvabilité)"],
    issues: ["Taux bas / négatifs (compression des marges)", "Digitalisation (néobanques, fintechs)", "Coûts réglementaires croissants", "Consolidation sectorielle"],
    risks: ["Risque de crédit", "Risque de taux", "Risque opérationnel", "Risque cyber"]
  },
  {
    id: "insurance", name: "Insurance",
    model: "Collecte des primes, investit le float, paie les sinistres. Profitabilité = sous-writing + investissement.",
    revenue: ["Primes brutes émises", "Résultat de placement (float)", "Commissions (courtage)"],
    costs: ["Sinistres & prestations (70-80% des primes)", "Frais de gestion (15-20%)", "Coûts d'acquisition (commissions agents)", "Réassurance"],
    margins: "Combined Ratio cible < 100%. Marge opérationnelle 8-15%.",
    kpis: ["Combined Ratio = (Sinistres + Frais) / Primes", "Loss Ratio", "Expense Ratio", "Solvency II Ratio", "Return on Equity"],
    issues: ["Catastrophes naturelles croissantes", "Fraude", "Digitalisation (insurtechs)", "Environnement de taux", "Réglementation IFRS 17"],
    risks: ["Risque de souscription", "Risque de marché", "Risque opérationnel"]
  },
  {
    id: "saas", name: "SaaS B2B",
    model: "Revenus récurrents (abonnements). Croissance = acquisition - churn. Profitabilité longue via LTV/CAC.",
    revenue: ["MRR/ARR (Monthly/Annual Recurring Revenue)", "Professional services (implémentation)", "Add-ons et modules premium"],
    costs: ["R&D (30-50% revenus early stage)", "S&M (Sales & Marketing: 25-45%)", "G&A (10-20%)", "Infrastructure cloud (COGS: 15-30%)"],
    margins: "Gross Margin typique 70-85%. Operating Margin variable (négatif early stage → +20-30% mature).",
    kpis: ["ARR et growth rate", "NRR (Net Revenue Retention > 120% = excellent)", "CAC (Customer Acquisition Cost)", "LTV (Lifetime Value)", "CAC Payback Period", "Churn Rate (<5%/an B2B = bon)", "Rule of 40"],
    issues: ["Compression des valuations 2023-24", "Efficacité go-to-market", "Enterprise vs SMB", "Land and Expand"],
    risks: ["Churn", "Compétition (build vs buy des grands)", "Dépendance cloud providers"]
  },
  {
    id: "retail", name: "Retail",
    model: "Achète en gros (fournisseurs), vend au détail (consommateurs). Marge sur la différence.",
    revenue: ["Ventes produits (volume × prix moyen)", "Services (livraison, click-and-collect)", "Publicité / data (retail media)"],
    costs: ["COGS (coût d'achat, 60-70%)", "Loyer / immobilier (10-15%)", "Masse salariale (15-20%)", "Logistique", "Marketing"],
    margins: "Gross margin: alimentation 20-25%, non-alimentaire 40-60%. EBITDA 5-8%.",
    kpis: ["Chiffre d'affaires/m²", "Taux de marge brute", "Shrinkage (vol, casse)", "Same-Store Sales Growth", "Basket size", "Conversion rate"],
    issues: ["E-commerce vs physique", "Inflation coûts logistiques", "Gestion des stocks", "Prix fournisseurs"],
    risks: ["Concurrence Amazon", "Evolution des comportements d'achat", "Inflation alimentaire"]
  },
  {
    id: "telecom", name: "Telecom",
    model: "Infrastructure lourde (réseau) → Services (mobile, fixe, data) → Rentabilité via ARPU et volume.",
    revenue: ["ARPU mobile × nb abonnés", "Revenus fixes (fibre, ADSL)", "Entreprises (B2B)", "Roaming"],
    costs: ["Capex réseau (30-40% revenus)", "Masse salariale", "Marketing et acquisition", "Contenu (si offre TV)"],
    margins: "EBITDA ~35-40%. Marges sous pression avec guerre des prix.",
    kpis: ["ARPU (Average Revenue Per User)", "Churn rate (<1%/mois = bon)", "NPS", "Data usage/subscriber", "Network quality (NPS technique)"],
    issues: ["Guerre des prix (Free en France)", "5G déploiement coûteux", "OTT players (WhatsApp, Netflix)", "Consolidation"],
    risks: ["Régulation", "Commoditisation", "Saturation du marché mobile"]
  },
  {
    id: "pharma", name: "Pharma",
    model: "R&D intensive → Brevet → Commercialisation → Generic cliff. Pipeline = valeur principale.",
    revenue: ["Médicaments sous brevet (marges élevées)", "Génériques (marges faibles)", "OTC (Over-The-Counter)"],
    costs: ["R&D (15-20% revenus pour Big Pharma)", "Production (GMP compliance)", "MSD = Medical Sales & Distribution", "Réglementation & compliance"],
    margins: "Gross margin 65-80%. EBITDA 25-35% pour Big Pharma. R&D = investissement de 10-15 ans par médicament.",
    kpis: ["Pipeline value", "Patent cliff exposure", "R&D ROI", "Time-to-market", "Market share par indication"],
    issues: ["Generic cliff", "Pricing pressure (remboursement)", "R&D coût croissant", "Digitalisation (biotech, IA drug discovery)"],
    risks: ["Échec clinique", "Régulation FDA/EMA", "Responsabilité"]
  },
  {
    id: "automotive", name: "Automotive",
    model: "Capital intensif. Marges sous pression. Transition électrique = disruption totale du modèle.",
    revenue: ["Ventes véhicules (volume × prix)", "Pièces & services après-vente (marges élevées)", "Financement (captives financières)", "Licences (tech)"],
    costs: ["COGS (70-80%)", "R&D (5-8%)", "Frais commerciaux", "Garanties"],
    margins: "EBIT 5-8% pour un OEM mature. Premium (BMW, Mercedes) = 10-15%.",
    kpis: ["Market share", "EBIT margin", "R&D / Capex", "EV mix", "Order backlog"],
    issues: ["Transition électrique (investissements massifs)", "Supply chain (semi-conducteurs)", "Software-defined vehicles", "Tesla comme benchmark"],
    risks: ["Recall", "Régulation émissions", "Disruption Tesla/Chinese EVs"]
  },
  {
    id: "fmcg", name: "FMCG (Fast-Moving Consumer Goods)",
    model: "Innovation produit + distribution massive + marketing = leadership marque → pricing power.",
    revenue: ["Ventes retail (B2B2C)", "E-commerce direct", "Géographies émergentes"],
    costs: ["COGS (matières premières: 40-50%)", "Marketing & trade (20-30%)", "Distribution", "R&D (innovation)"],
    margins: "Gross margin 50-60%. EBITDA 18-25% pour les leaders.",
    kpis: ["Market share", "Brand equity", "Distribution / présence linéaire", "Innovation rate (% CA nouveaux produits)", "Price realization"],
    issues: ["Inflation matières premières", "MDD (marques de distributeurs)", "Santé / naturalité", "Sustainability"],
    risks: ["Brand damage", "Supply disruption", "Prix matières"]
  },
  {
    id: "cloud", name: "Cloud / Hyperscalers",
    model: "Infrastructure as a Service → Platform as a Service → Economies of scale massives. Winner-takes-most.",
    revenue: ["IaaS/PaaS (compute, storage, network)", "SaaS intégré", "Professional services"],
    costs: ["Capex centres de données", "Energie (40-50% des opex)", "R&D", "Sales (enterprise sales expensive)"],
    margins: "AWS: operating margin ~25-30%. Azure/GCP: variable mais croissant.",
    kpis: ["Cloud revenue growth", "Operating margin", "Customer count", "Data center capacity", "Energy efficiency (PUE)"],
    issues: ["Souveraineté cloud (Europe)", "AI infrastructure investment", "Multicloud / hybrid cloud", "Price pressure"],
    risks: ["Regulation (RGPD, NIS2)", "Outages", "Energy supply", "Chinese competition"]
  },
  {
    id: "logistics", name: "Logistics & Transport",
    model: "Asset-heavy (ou asset-light). Revenus = volume × tarif. Marges limitées. Scale et réseau = avantage.",
    revenue: ["Fret (volume × distance × tarif)", "Services à valeur ajoutée (stockage, douane)", "Last-mile (e-commerce)"],
    costs: ["Carburant (20-30%)", "Main d'oeuvre (30-40%)", "Amortissement flotte / entrepôts", "IT et tracking"],
    margins: "EBIT 3-8% pour les transporteurs. Logisticiens intégrés : 6-10%.",
    kpis: ["Fill rate", "On-time delivery", "Cost per km", "CO2 per tonne-km", "Asset utilization"],
    issues: ["Pénurie chauffeurs", "Transition verts (véhicules zéro émission)", "E-commerce last-mile", "Digitalisation (visibilité temps réel)"],
    risks: ["Hausse carburant", "Grèves", "Régulation émissions"]
  }
],

// ============================================================
// MENTAL MATH — EXERCISES
// ============================================================
mentalMath: {
  categories: ["Percentages", "Margins", "CAGR", "Market Share", "Breakeven", "Division", "Multiplication"],
  exercises: [
    { id: "MM1", cat: "Percentages", q: "What is 15% of 240?", a: "36", hint: "240 × 0.15 = 24 × 1.5 = 36" },
    { id: "MM2", cat: "Percentages", q: "Revenue went from 80M to 92M. What % growth?", a: "15%", hint: "12/80 = 0.15 = 15%" },
    { id: "MM3", cat: "Margins", q: "Revenue 150M, COGS 90M. What is gross margin?", a: "40%", hint: "(150-90)/150 = 60/150 = 40%" },
    { id: "MM4", cat: "Margins", q: "Gross margin 35%. Revenue 200M. What is gross profit?", a: "70M", hint: "200 × 0.35 = 70M" },
    { id: "MM5", cat: "CAGR", q: "Revenue grew from 100M to 161M in 3 years. What is the CAGR?", a: "17%", hint: "(161/100)^(1/3) ≈ 1.17 → 17%" },
    { id: "MM6", cat: "CAGR", q: "Market is 50M today. CAGR 12%. What will it be in 4 years?", a: "~79M", hint: "50 × (1.12)^4 ≈ 50 × 1.57 = 78.6M" },
    { id: "MM7", cat: "Market Share", q: "Company A has 25M revenue. Total market 180M. Market share?", a: "~14%", hint: "25/180 ≈ 13.9%" },
    { id: "MM8", cat: "Market Share", q: "Market share went from 12% to 18%. Market is 500M. Revenue increase?", a: "30M", hint: "(18%-12%) × 500M = 6% × 500 = 30M" },
    { id: "MM9", cat: "Breakeven", q: "Fixed costs 20M/year. Contribution margin per unit 40€. Breakeven volume?", a: "500,000 units", hint: "20M / 40 = 500,000" },
    { id: "MM10", cat: "Breakeven", q: "Project costs 5M upfront. Annual savings 800k. Payback period?", a: "6.25 years", hint: "5M / 800k = 6.25 years" },
    { id: "MM11", cat: "Division", q: "2,400 / 16 = ?", a: "150", hint: "2400 / 16 = 150" },
    { id: "MM12", cat: "Division", q: "3,750 / 25 = ?", a: "150", hint: "3750 / 25 = 150" },
    { id: "MM13", cat: "Multiplication", q: "23 × 47 = ?", a: "1,081", hint: "23×47 = 23×50 - 23×3 = 1150 - 69 = 1081" },
    { id: "MM14", cat: "Multiplication", q: "1.8M × 35% = ?", a: "630k", hint: "1.8M × 35% = 0.63M = 630k" },
    { id: "MM15", cat: "Percentages", q: "Price dropped 20%, then increased 25%. Net change?", a: "0%", hint: "0.8 × 1.25 = 1.0 → no change" },
    { id: "MM16", cat: "Margins", q: "Operating costs 12M on 80M revenue. Operating margin?", a: "85%", hint: "Wait — operating margin = (Revenue - Op Costs) / Revenue = 68/80 = 85%" },
    { id: "MM17", cat: "CAGR", q: "Double in 7 years. What CAGR? (Use rule of 70)", a: "~10%", hint: "70 / 7 = 10%. CAGR ≈ 10%" },
    { id: "MM18", cat: "Market Share", q: "You gain 5pts market share in a 2Bn€ market. Revenue impact?", a: "100M€", hint: "5% × 2Bn = 100M€" },
    { id: "MM19", cat: "Percentages", q: "Costs increased by 8%. They were 45M€. New total costs?", a: "48.6M€", hint: "45M × 1.08 = 48.6M" },
    { id: "MM20", cat: "Breakeven", q: "Investment: 12M. Year 1 cash flow: 2M, Year 2: 3M, Year 3: 4M, Year 4: 4M. Payback?", a: "~3.75 years", hint: "2+3+4=9M after Y3. Need 3M more → 3M/4M = 0.75 → 3.75 years" }
  ]
},

// ============================================================
// PEI — cabinet de conseil 4 DIMENSIONS
// ============================================================
pei: {
  dimensions: [
    {
      id: "connection", name: "Connection",
      what: "cabinet de conseil veut voir que tu t'intéresses sincèrement aux gens, que tu construis des relations authentiques, que tu sais créer de la confiance rapidement.",
      signals: ["Curiosité genuinne", "Empathie", "Écoute active", "Capacité à créer de la confiance", "Intérêt pour des personnes différentes de toi"],
      questions: [
        "Tell me about a time you connected with someone very different from you.",
        "Describe a situation where you had to build rapport with a client or colleague you found difficult.",
        "Tell me about a time you had to influence someone without having formal authority.",
        "Describe a relationship you've built that had a meaningful impact on your work."
      ],
      follow_ups: [
        "What did you specifically do to understand their perspective?",
        "What obstacles did you face in building this relationship?",
        "How did you adapt your approach based on their reaction?",
        "What would you do differently?"
      ]
    },
    {
      id: "leadership", name: "Leadership",
      what: "cabinet de conseil cherche des leaders qui mobilisent, inspirent et obtiennent des résultats à travers les autres — pas seulement à travers leur expertise individuelle.",
      signals: ["Initiative proactive", "Mobilisation d'équipes", "Impact via les autres", "Décisions sous incertitude", "Direction d'un groupe sans autorité formelle"],
      questions: [
        "Tell me about a time you led a team through a challenging situation.",
        "Describe a time you took initiative on something that wasn't your job.",
        "Tell me about a time you had to make a decision with incomplete information.",
        "Describe a situation where you had to lead a change that was resisted."
      ],
      follow_ups: [
        "What specifically did you do to get others on board?",
        "What was the biggest obstacle to your leadership?",
        "What was the measurable impact of your leadership?",
        "Who opposed you and how did you handle it?"
      ]
    },
    {
      id: "growth", name: "Growth",
      what: "cabinet de conseil veut voir que tu cherches activement à apprendre, que tu accueilles le feedback difficile, et que tu as transformé des échecs en progrès réels.",
      signals: ["Feedback seeking proactif", "Échec → apprentissage → changement", "Remise en question de ses certitudes", "Sortie de zone de confort volontaire"],
      questions: [
        "Tell me about a significant failure and what you learned from it.",
        "Describe a time you received feedback that was hard to hear. How did you respond?",
        "Tell me about a time you had to learn something completely new under time pressure.",
        "Describe a moment when you changed your mind significantly about something important."
      ],
      follow_ups: [
        "What specifically changed in your behavior after this?",
        "How did this failure affect your confidence?",
        "What would you tell a junior colleague facing the same situation?",
        "How did you seek help when you were struggling?"
      ]
    },
    {
      id: "drive", name: "Drive",
      what: "cabinet de conseil veut voir une ambition réelle, une capacité à maintenir l'énergie face à la difficulté, et un impact mesurable que tu as généré.",
      signals: ["Ambition claire et assumée", "Persistance face aux obstacles", "Énergie transmissible", "Impact quantifié", "Dépassement des attentes"],
      questions: [
        "Tell me about a time you pushed through when others would have given up.",
        "Describe a time you set an ambitious goal and achieved it against the odds.",
        "Tell me about your proudest professional achievement.",
        "Describe a time you went significantly beyond what was expected of you."
      ],
      follow_ups: [
        "What was at stake for you personally?",
        "What was the measurable outcome of your effort?",
        "Where did your energy come from when things got hard?",
        "How did others react to your level of drive?"
      ]
    }
  ],
  structure: {
    name: "Situation-Action-Impact (cabinet de conseil preferred)",
    format: `<strong>Situation</strong> (15-20%) : Contexte minimal mais précis.<br>
<strong>Challenge</strong> (10-15%) : L'obstacle ou enjeu réel.<br>
<strong>Actions</strong> (50-60%) : Ce que TU as fait. Spécifique. Verbes d'action. Pas "nous".<br>
<strong>Impact</strong> (15-20%) : Résultat mesurable. Chiffres si possible.<br>
<strong>Reflection</strong> (optionnel) : Ce que tu en as appris.`
  }
},

// ============================================================
// RESOURCES — VERIFIED FREE RESOURCES
// ============================================================
resources: [
  {
    id: "cabinet de conseil-official", name: "cabinet de conseil Interview Prep", url: "https://www.cabinet de conseil.com/careers/interviewing",
    type: "Official", free: true, freeContent: "Public case examples, interview guide, problem solving game",
    quality: 5, realism: 5, tier1Relevance: 5, priority: "Must", skill: "All", level: "All"
  },
  {
    id: "preplounge", name: "PrepLounge", url: "https://www.preplounge.com/",
    type: "Case Practice + Partners", free: "Freemium",
    freeContent: "Case Interview Basics (full access), case library (limited), case partner matching (core feature free), forum",
    quality: 5, realism: 5, tier1Relevance: 5, priority: "Must", skill: "Cases + Live Practice", level: "All"
  },
  {
    id: "case-prep", name: "Case-Prep", url: "https://www.case-prep.com/",
    type: "Drills + Cases", free: "Freemium",
    freeContent: "Sample cases, some drills, mental math practice — verify current free tier",
    quality: 4, realism: 4, tier1Relevance: 4, priority: "Must", skill: "Drills, Cases", level: "Intermediate"
  },
  {
    id: "casecoach", name: "CaseCoach", url: "https://casecoach.com/",
    type: "Structured Learning", free: "Freemium",
    freeContent: "Free case interview course, some case examples — verify current scope",
    quality: 4, realism: 4, tier1Relevance: 4, priority: "Should", skill: "Frameworks, Cases", level: "Beginner-Intermediate"
  },
  {
    id: "mc", name: "Management Consulted", url: "https://managementconsulted.com/",
    type: "Resources + Cases", free: "Freemium",
    freeContent: "Free frameworks, free articles, Case of the Month, some video content",
    quality: 4, realism: 3, tier1Relevance: 4, priority: "Should", skill: "Frameworks, Mental Math", level: "Beginner-Intermediate"
  },
  {
    id: "htci", name: "Hacking The Case Interview", url: "https://www.hackingthecaseinterview.com/",
    type: "Resource Index", free: "Freemium",
    freeContent: "Casebook list, framework guides, some case examples",
    quality: 3, realism: 3, tier1Relevance: 3, priority: "Should", skill: "Casebooks, Frameworks", level: "Beginner"
  },
  {
    id: "tier1prep", name: "Consulting Prep (MBB)", url: "https://www.consultingprep.com/",
    type: "Guide + Cases", free: "Freemium",
    freeContent: "Free case prep ebook, guides, some practice questions",
    quality: 3, realism: 3, tier1Relevance: 4, priority: "Should", skill: "Frameworks, Cases", level: "Beginner"
  },
  {
    id: "shl-official", name: "SHL Official Practice", url: "https://www.shl.com/",
    type: "SHL", free: true,
    freeContent: "Official sample questions for all test types (numerical, verbal, logical)",
    quality: 5, realism: 5, tier1Relevance: 5, priority: "Must", skill: "SHL", level: "All"
  },
  {
    id: "jobtestprep", name: "JobTestPrep", url: "https://www.jobtestprep.com/",
    type: "SHL Practice", free: "Freemium",
    freeContent: "Free sample tests for SHL numerical and logical — limited questions",
    quality: 4, realism: 4, tier1Relevance: 4, priority: "Should", skill: "SHL", level: "All"
  },
  {
    id: "123test", name: "123test", url: "https://www.123test.com/",
    type: "SHL Practice", free: true,
    freeContent: "Free reasoning tests (numerical, logical, verbal, spatial) — solid practice",
    quality: 3, realism: 3, tier1Relevance: 3, priority: "Should", skill: "SHL", level: "Beginner-Intermediate"
  }
],

// ============================================================
// CASE LIBRARY — CASES
// ============================================================
cases: [
  {
    id: "CASE-001", title: "Retailer Profit Decline",
    source: "PrepLounge", firm: "grand-cabinet-style",
    sector: "Retail", type: "Profitability", difficulty: "Beginner",
    duration: 30, candidateLed: true,
    skills: ["Profitability", "Structuring", "Mental Math"],
    prompt: "Your client is a large French supermarket chain. Over the past 2 years, their net profit margin has declined from 4% to 2%, despite relatively stable revenues of ~8 billion euros. The CEO is alarmed and wants to understand the root cause and what to do about it.",
    clarifications: [
      "Which business segments are affected? (All formats or specific?)",
      "Has the competition been affected similarly?",
      "Any significant business changes in the past 2 years (new stores, price wars)?"
    ],
    keyHypotheses: [
      "Cost increase driving the margin decline (most likely, given stable revenues)",
      "Revenue mix shift toward lower-margin products",
      "One-time costs inflating expenses"
    ],
    structure: "Profit = Revenue - Costs → Revenue stable → Focus on Costs → Fixed vs Variable → Identify which cost line increased → Benchmark vs industry",
    insights: [
      "Energy costs (+40% due to crisis) account for 60% of the decline",
      "Labor costs +8% due to minimum wage increases",
      "Revenue mix shift toward private label (lower margin but this is positive, not negative)"
    ],
    recommendation: "Short-term: energy hedging contracts, efficiency initiatives in high-energy stores. Medium-term: accelerate private label where margins are actually higher, renegotiate supplier contracts. The decline is largely external-driven but partially manageable.",
    scoring: { structure: 3, math: 2, hypothesis: 3, synthesis: 3, communication: 3 }
  },
  {
    id: "CASE-002", title: "SaaS Market Entry Germany",
    source: "LBS Casebook", firm: "BCG-style",
    sector: "Technology / SaaS", type: "Market Entry", difficulty: "Intermediate",
    duration: 35, candidateLed: true,
    skills: ["Market Entry", "Market Sizing", "Structuring"],
    prompt: "Your client is a French HR SaaS company with 50M€ ARR growing 40% annually. They are considering entering the German market. Should they, and if so, how?",
    clarifications: [
      "What is the client's current product offering and ICP?",
      "Do they have any presence in Germany already?",
      "What is their target timeline and investment budget?"
    ],
    keyHypotheses: [
      "Germany is an attractive market (size, growth, willingness to pay for HR software)",
      "Client has transferable advantages but needs localization",
      "Organic entry vs partnership vs acquisition?"
    ],
    structure: "Should they enter? (Market attractiveness + Client fit) → How? (Entry mode) → When? (Sequencing)",
    insights: [
      "German HR SaaS market ~2.5Bn€, growing 15%/year",
      "Low penetration vs France (more manual processes = opportunity)",
      "Language/compliance barrier significant (Betriebsrat, DSGVO)",
      "Client's competitive advantage: AI-powered analytics → differentiator in Germany"
    ],
    recommendation: "Yes, enter Germany — the market is 5x larger than France per capita for HR SaaS. Recommended approach: partnership with a German HR consultancy for initial sales + localization investment. Organic full entry in 18 months if initial traction confirmed.",
    scoring: { structure: 3, math: 2, hypothesis: 3, synthesis: 3, communication: 3 }
  },
  {
    id: "CASE-003", title: "Insurance Company Combined Ratio",
    source: "Case-Prep", firm: "grand-cabinet-style",
    sector: "Insurance", type: "Profitability", difficulty: "Intermediate",
    duration: 35, candidateLed: true,
    skills: ["Profitability", "Insurance Fundamentals", "Exhibits"],
    prompt: "Your client is a mid-size French P&C insurance company. Their combined ratio has risen from 97% to 108% over the past 3 years. The board is concerned. What is driving this and what should they do?",
    clarifications: [
      "Which lines of business are most affected?",
      "What is the claims frequency trend vs claims severity trend?",
      "How does this compare to industry benchmarks?"
    ],
    keyHypotheses: [
      "Claims severity increasing (inflation effect on repair costs)",
      "Claims frequency increasing (weather events, fraud)",
      "Expense ratio increasing (cost of distribution, IT)"
    ],
    structure: "Combined Ratio = Loss Ratio + Expense Ratio → Analyze each → By line of business → Vs benchmark → Actions",
    insights: [
      "Loss ratio went from 72% to 83% — the main driver",
      "Claims severity +18% (auto repair costs, construction costs up due to inflation)",
      "Claims frequency stable — so this is purely a cost inflation issue",
      "Expense ratio relatively stable at 25%"
    ],
    recommendation: "3 actions: 1) Immediate repricing (+8-10% on auto and home), 2) Fraud detection improvement (AI-based triage), 3) Preferred repair network renegotiation to cap cost inflation. Target: return to 100-102% combined ratio in 18 months.",
    scoring: { structure: 3, math: 3, hypothesis: 3, synthesis: 3, communication: 3 }
  },
  {
    id: "CASE-004", title: "Telecom 5G Strategy",
    source: "Digital/AI Module", firm: "Entretien Consulting style",
    sector: "Telecom / Technology", type: "Strategy", difficulty: "Intermediate",
    duration: 40, candidateLed: false,
    skills: ["Strategy", "Digital", "Market Sizing", "Business Fundamentals"],
    prompt: "A major European telecom operator is deciding whether to invest 3 billion euros in 5G infrastructure over the next 5 years. The CEO wants to know: is this investment justified, and what is the optimal strategy?",
    clarifications: [
      "What markets are covered (which countries)?",
      "What are current 4G revenues and margin profile?",
      "Who are the main competitors and their 5G status?"
    ],
    keyHypotheses: [
      "5G enables premium pricing and revenue uplift",
      "5G unlocks new B2B revenue streams (IoT, private networks)",
      "Risk: commoditization if all operators invest similarly"
    ],
    structure: "Is the market attractive (5G demand, revenue uplift)? → Can we capture value (competitive position)? → What is the financial case? → What are the risks?",
    insights: [
      "B2C 5G uplift limited in Europe (price sensitive market)",
      "B2B private 5G networks: significant opportunity for industry 4.0",
      "Infrastructure sharing could reduce capex by 30-40%",
      "Regulation pushing toward network sharing (ARCEP)"
    ],
    recommendation: "Invest, but selectively. Priority: B2B/private network use cases + infrastructure sharing to optimize ROI. Don't overpay for consumer speed premium that users won't pay for.",
    scoring: { structure: 3, math: 2, hypothesis: 3, synthesis: 3, communication: 3 }
  },
  {
    id: "CASE-005", title: "Pharma M&A Decision",
    source: "Advanced Module", firm: "BCG-style",
    sector: "Pharma", type: "M&A", difficulty: "Advanced",
    duration: 45, candidateLed: false,
    skills: ["M&A", "Strategy", "Valuation", "Pharma Fundamentals"],
    prompt: "Your client, a large European pharmaceutical company, is considering acquiring a biotech startup with a promising oncology drug in Phase 2 clinical trials. The asking price is 800M€. Should they proceed?",
    clarifications: [
      "What is the probability of Phase 2 → Phase 3 → approval success?",
      "What is the estimated peak sales potential if approved?",
      "What are the synergies with the client's existing oncology portfolio?"
    ],
    keyHypotheses: [
      "NPV of drug pipeline > 800M€ (acquisition justified)",
      "Portfolio synergies create additional value",
      "Integration risk manageable given client's experience"
    ],
    structure: "Strategic rationale → Target attractiveness (pipeline value, fit) → Financial case (NPV vs price) → Synergies → Integration risks → Recommendation",
    insights: [
      "Phase 2 success rate in oncology: ~50%",
      "Phase 3 + approval: ~40% of those who pass Phase 2 → 20% overall",
      "Peak sales potential: 2Bn€/year in year 8-10",
      "NPV (risk-adjusted): ~900-1100M€ → acquisition price at a slight discount to value",
      "Strong portfolio fit: client's oncology sales team + distribution"
    ],
    recommendation: "Proceed with acquisition at ≤800M€ given risk-adjusted NPV slightly above asking price. Key conditions: milestone-based payment structure (not upfront), retain key scientific team, start portfolio integration planning now.",
    scoring: { structure: 3, math: 3, hypothesis: 3, synthesis: 3, communication: 3 }
  }
],

// ============================================================
// SCORING SYSTEM
// ============================================================
scoring: {
  dimensions: [
    { id: "structuring", label: "Structuring", weight: 20, color: "#3b82f6" },
    { id: "quantitative", label: "Quantitative", weight: 15, color: "#10b981" },
    { id: "businessIntuition", label: "Business Intuition", weight: 10, color: "#f59e0b" },
    { id: "hypothesisDriven", label: "Hypothesis-Driven", weight: 10, color: "#8b5cf6" },
    { id: "exhibits", label: "Exhibit Analysis", weight: 10, color: "#ec4899" },
    { id: "creativity", label: "Creativity", weight: 10, color: "#f97316" },
    { id: "communication", label: "Communication", weight: 10, color: "#0284c7" },
    { id: "synthesis", label: "Synthesis", weight: 10, color: "#16a34a" },
    { id: "recommendation", label: "Recommendation", weight: 5, color: "#dc2626" }
  ],
  thresholds: {
    ready: 78,
    almostReady: 62,
    needsWork: 0
  }
}

,

// ============================================================
// CASEBOOKS — VERIFIED FREE DOWNLOADS (Sept 2026)
// ============================================================
casebooks: [
  {
    id: "lbs-2006", name: "London Business School", year: 2006, pages: null,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/LBS%5F2006.pdf",
    quality: 4, notes: "Classic Tier 1-style cases. Good profitability and market entry examples.",
    verified: true
  },
  {
    id: "columbia-2006", name: "Columbia Business School", year: 2006, pages: 89,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Columbia%5F2006.pdf",
    quality: 4, notes: "89 pages. Solid variety of case types.",
    verified: true
  },
  {
    id: "wharton-2010", name: "Wharton (Penn)", year: 2010, pages: null,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Wharton%5F2010.pdf",
    quality: 5, notes: "Widely cited as one of the best casebooks. High-quality Tier 1-style cases with detailed scoring rubrics.",
    verified: true
  },
  {
    id: "darden-2019", name: "Darden (UVA)", year: 2019, pages: null,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Darden%5FCase%5FBook%5F2018-2019.pdf",
    quality: 5, notes: "Most recent edition available (2018-19). High quality, Tier 1-style, excellent structure.",
    verified: true
  },
  {
    id: "darden-2012", name: "Darden (UVA) 2012", year: 2012, pages: 195,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Darden%5F2012.pdf",
    quality: 4, notes: "195 pages. Older edition but comprehensive.",
    verified: true
  },
  {
    id: "duke-2014", name: "Duke Fuqua", year: 2014, pages: 256,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Fuqua-Case-book-2014.pdf",
    quality: 4, notes: "256 pages — most comprehensive in page count. Scanned PDF.",
    verified: true
  },
  {
    id: "duke-2011", name: "Duke Fuqua 2011", year: 2011, pages: 146,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Duke%5F2011.pdf",
    quality: 4, notes: "146 pages. Good variety.",
    verified: true
  },
  {
    id: "mit-2001", name: "MIT Sloan", year: 2001, pages: 168,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/MIT%5F2001.pdf",
    quality: 3, notes: "168 pages. Dated (2001) but good for fundamentals.",
    verified: true
  },
  {
    id: "haas-2006", name: "UC Berkeley Haas", year: 2006, pages: null,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Haas%5F2006.pdf",
    quality: 3, notes: "Good variety of industries.",
    verified: true
  },
  {
    id: "ross-2010", name: "Michigan Ross", year: 2010, pages: null,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/Ross%5F2010.pdf",
    quality: 4, notes: "Well-structured cases with scoring guides.",
    verified: true
  },
  {
    id: "esade-2011", name: "ESADE Business School", year: 2011, pages: 108,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/ESADE%5F2011.pdf",
    quality: 3, notes: "108 pages. European focus — relevant for le cabinet.",
    verified: true
  },
  {
    id: "notre-dame-2017", name: "Notre Dame", year: 2017, pages: 110,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/2017%5FNotre%5FDame%5FCase%5FBook.pdf",
    quality: 3, notes: "110 pages. Recent enough to be relevant.",
    verified: true
  },
  {
    id: "illinois-2015", name: "Illinois Gies", year: 2015, pages: 79,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/2015%5FIllinois%5FGies%5FCase%5FBook.pdf",
    quality: 3, notes: "79 pages. Good for beginner practice.",
    verified: true
  },
  {
    id: "emory-2006", name: "Emory Goizueta", year: 2006, pages: 666,
    url: "https://d3no4ktch0fdq4.cloudfront.net/public/course/files/2006%5FEmory%5FCase%5FBook.pdf",
    quality: 3, notes: "666 pages (!) — multi-year compilation. Good library for variety.",
    verified: true
  }
]

}; // end window.DATA



