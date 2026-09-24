(function() {

  // ============================================================
  // NEW MENTAL MATH DRILLS — MM116 to MM135
  // All bilingual (EN only — math drills are natively in English)
  // Level: Intermediate to Advanced (consulting interview standard)
  // ============================================================

  var newMath = [

    // --- Fractions & Percentages ---
    { id:"MM116", cat:"Percentages", q:"A product's price drops from 240€ to 180€. What is the % decrease?", a:"25%", hint:"(240-180)/240 = 60/240 = 1/4 = 25%" },
    { id:"MM117", cat:"Percentages", q:"Revenue Q1: 45M, Q2: 54M. What is the Q1→Q2 growth? What if Q3 is flat?", a:"Q1→Q2: +20%. Q3 at 54M, same as Q2.", hint:"9/45 = 20%. Flat means no change." },
    { id:"MM118", cat:"Margins", q:"COGS = 130M on revenue 200M. What is gross margin %? Then gross profit?", a:"Gross margin = 35%. Gross profit = 70M.", hint:"(200-130)/200 = 70/200 = 35%" },
    { id:"MM119", cat:"Percentages", q:"A store applies a 40% markup on cost. Cost = 70€. Selling price?", a:"98€", hint:"70 × 1.40 = 98" },
    { id:"MM120", cat:"Percentages", q:"After two consecutive -10% decreases, what is the total % decline?", a:"-19%", hint:"0.9 × 0.9 = 0.81 → -19%" },

    // --- Market Share & Growth ---
    { id:"MM121", cat:"Market Share", q:"Market size 4Bn. Company A has 35% share. If market grows 20% next year, what is Company A's revenue assuming stable share?", a:"1.68Bn", hint:"4Bn × 1.20 × 35% = 4.8Bn × 0.35 = 1.68Bn" },
    { id:"MM122", cat:"Market Share", q:"Player A: 450M, B: 300M, C: 150M, Others: 100M. What is Player A's market share?", a:"45%", hint:"Total = 1Bn. 450/1000 = 45%" },
    { id:"MM123", cat:"Growth", q:"Company grew from 80M to 320M in 2 years. What is the CAGR?", a:"100%", hint:"320/80 = 4 = 2². CAGR = 100% per year." },
    { id:"MM124", cat:"Growth", q:"CAGR of 25% for 3 years starting from 100M. Final revenue?", a:"~195M", hint:"1.25³ = 1.953 → ~195M" },

    // --- Break-Even & Contribution ---
    { id:"MM125", cat:"Break-even", q:"Fixed costs: 12M€. Selling price per unit: 80€. Variable cost per unit: 50€. Break-even volume?", a:"400,000 units", hint:"Contribution margin = 30€/unit. 12M / 30 = 400k units" },
    { id:"MM126", cat:"Break-even", q:"Contribution margin: 25€/unit. Fixed costs: 5M€. Current volume: 300k units. Operating profit?", a:"2.5M€", hint:"300k × 25 = 7.5M. 7.5M - 5M = 2.5M" },
    { id:"MM127", cat:"Break-even", q:"To increase operating profit by 3M€, how many additional units needed? (Contribution margin: 40€/unit)", a:"75,000 units", hint:"3M / 40 = 75,000" },

    // --- Finance & Ratios ---
    { id:"MM128", cat:"Finance", q:"EBIT: 30M€. Tax rate: 30%. D&A: 8M€. EBITDA? Net income?", a:"EBITDA = 38M€. Net income = 21M€", hint:"EBITDA = EBIT + D&A = 38M. Net income = 30M × (1-0.30) = 21M" },
    { id:"MM129", cat:"Finance", q:"Revenue 500M€. EBITDA margin 22%. D&A 15M€. Capex 25M€. ΔWC = +8M€. Free Cash Flow?", a:"62M€", hint:"EBITDA = 110M. EBIT = 95M. FCF = EBITDA - Capex - ΔWC = 110-25-8 = 77M (unlevered). Or: EBIT(1-T) + D&A - Capex - ΔWC." },
    { id:"MM130", cat:"Finance", q:"LTV of a customer: monthly spend 50€, gross margin 60%, monthly churn rate 2%. What is LTV?", a:"1,500€", hint:"LTV = (Monthly spend × Margin) / Churn = (50 × 0.6) / 0.02 = 30/0.02 = 1,500" },
    { id:"MM131", cat:"Finance", q:"CAC = 120€. Monthly margin per customer = 15€. How many months to payback CAC?", a:"8 months", hint:"120 / 15 = 8 months" },

    // --- Mixed / Advanced ---
    { id:"MM132", cat:"Mixed", q:"Price elasticity = -1.5. Current price 100€, volume 10,000 units. Price raised +10%. New volume? New revenue?", a:"Volume: 8,500 units. Revenue: 850,000€ (down from 1M€)", hint:"Volume change = -1.5 × 10% = -15%. New volume = 8,500. Revenue = 110 × 8,500 = 935,000." },
    { id:"MM133", cat:"Mixed", q:"Factory runs 18 hours/day, 300 days/year. Output rate: 120 units/hour. Defect rate: 5%. Annual good output?", a:"615,600 units", hint:"18×300×120 = 648,000 total. × 0.95 = 615,600" },
    { id:"MM134", cat:"CAGR", q:"Market will grow from 2.5Bn to 4Bn in 3 years. Approximate CAGR using rule of 70?", a:"~17%", hint:"4/2.5 = 1.6 → 60% total growth. CAGR ≈ (60/3)% rough = 20%, more precisely: 1.6^(1/3) ≈ 1.17 → 17%" },
    { id:"MM135", cat:"Mixed", q:"Total costs: 450M€. Of which: 60% variable, 40% fixed. Revenue: 600M€. Contribution margin %? Operating profit?", a:"CM% = 55%. Operating profit = 150M€.", hint:"Variable costs = 270M. Revenue - Variable = 330M. CM% = 330/600 = 55%. OP = 600-450 = 150M." }

  ];

  // Add to mental math array
  if (DATA.mentalMath && DATA.mentalMath.exercises) {
    newMath.forEach(function(e) { DATA.mentalMath.exercises.push(e); });
  }

})();

