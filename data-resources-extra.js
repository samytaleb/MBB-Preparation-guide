// ============================================================
// DATA-RESOURCES-EXTRA.JS — Ressources supplémentaires + casebooks additionnels
// ============================================================
(function () {

// ══════════════════════════════════════════════════════════
// RESSOURCES SUPPLÉMENTAIRES
// ══════════════════════════════════════════════════════════
var extraResources = [

  // --- Préparation les grands cabinets spécifique ---
  {
    id: 'les grands cabinets-academy',
    title: 'les grands cabinets Insights & Articles officiels',
    url: 'https://www.mckinsey.com/insights',
    category: 'les grands cabinets Officiel',
    priority: 'essential',
    description: 'Articles de réflexion stratégique publiés par les grands cabinets — idéaux pour enrichir les cas et montrer que tu lis les publications du cabinet. Focus sur Tech, AI, Sustainability.',
    recommended_for: ['Entretien Consulting', 'Cas stratégiques'],
    time_investment: '30 min/semaine',
    language: 'EN'
  },
  {
    id: 'les grands cabinets-careers',
    title: 'les grands cabinets Careers — Conseils préparation officiels',
    url: 'https://www.mckinsey.com/careers/interviewing',
    category: 'les grands cabinets Officiel',
    priority: 'essential',
    description: 'La page carrières officielle les grands cabinets avec les conseils de préparation du cabinet lui-même. Inclut des vidéos de démo, le format PEI, et ce que les grands cabinets cherche réellement.',
    recommended_for: ['Tous candidats les grands cabinets'],
    time_investment: '2h à lire une fois en profondeur',
    language: 'EN'
  },
  {
    id: 'lenny-rachitsky',
    title: 'Lenny\'s Newsletter — Product & Strategy',
    url: 'https://www.lennysnewsletter.com',
    category: 'Veille Stratégique',
    priority: 'recommended',
    description: 'Newsletter hebdomadaire sur la stratégie produit et les modèles d\'entreprise tech. Excellent pour les cas Entretien Consulting. Des analyses approfondies des business models des grandes plateformes.',
    recommended_for: ['Entretien Consulting', 'Cas plateformes digitales'],
    time_investment: '30 min/semaine',
    language: 'EN'
  },
  {
    id: 'stratechery',
    title: 'Stratechery — Ben Thompson',
    url: 'https://stratechery.com',
    category: 'Veille Stratégique',
    priority: 'recommended',
    description: 'Les analyses les plus poussées du web sur la stratégie des entreprises tech (Apple, Google, Microsoft, Meta, Amazon). Idéal pour développer un raisonnement stratégique sur la tech.',
    recommended_for: ['Entretien Consulting', 'Cas stratégie digitale'],
    time_investment: '20 min/article, 2–3 articles/semaine',
    language: 'EN'
  },
  {
    id: 'harvard-business-review',
    title: 'Harvard Business Review',
    url: 'https://hbr.org',
    category: 'Veille Stratégique',
    priority: 'recommended',
    description: 'Articles de management et stratégie de référence. Particulièrement utile pour les cas RH, leadership, et transformation organisationnelle. Lire les articles de Porter et Christensen.',
    recommended_for: ['Tout type de cas', 'PEI'],
    time_investment: '20 min/article, 1–2 articles/semaine',
    language: 'EN'
  },
  {
    id: 'the-economist',
    title: 'The Economist',
    url: 'https://www.economist.com',
    category: 'Veille Stratégique',
    priority: 'recommended',
    description: 'La publication de référence pour la culture économique et géopolitique. Tes interviewers les grands cabinets le lisent — citer un article de The Economist est toujours apprécié.',
    recommended_for: ['Tous cas', 'Market sizing', 'Culture générale'],
    time_investment: '30 min/semaine',
    language: 'EN'
  },

  // --- Pratique des cas ---
  {
    id: 'rconsulting-reddit',
    title: 'r/consulting — Reddit',
    url: 'https://www.reddit.com/r/consulting/',
    category: 'Communauté',
    priority: 'useful',
    description: 'Communauté Reddit de consultants et candidats. Témoignages d\'entretiens chez les grands cabinets, Tier 1, Tier 1. Threads utiles sur les PEI, les cas reçus, les résultats. À lire mais pas à sur-utiliser.',
    recommended_for: ['Témoignages', 'Préparation mentale'],
    time_investment: '30 min/session, 1–2 fois/semaine',
    language: 'EN'
  },
  {
    id: 'consulting-forum-mycase',
    title: 'Management Consulted — Case Library',
    url: 'https://managementconsulted.com/case-interview/',
    category: 'Pratique Cas',
    priority: 'recommended',
    description: 'Bibliothèque de cas interviews avec solutions détaillées. Includes des cas les grands cabinets simulés avec niveau de difficulté progressif. Aussi utile pour les vidéos d\'exemples d\'entretien commentés.',
    recommended_for: ['Pratique cas', 'les grands cabinets'],
    time_investment: '1h par cas, 3–4 cas/semaine',
    language: 'EN'
  },
  {
    id: 'crafting-cases',
    title: 'Crafting Cases',
    url: 'https://www.craftingcases.com',
    category: 'Pratique Cas',
    priority: 'useful',
    description: 'Ressource en ligne avec des approches pédagogiques alternatives pour comprendre les cas consulting. Bons articles sur l\'hypothesis-driven thinking et la structuration MECE.',
    recommended_for: ['Structuration', 'Mindset consultant'],
    time_investment: '2–3 articles clés à lire',
    language: 'EN'
  },
  {
    id: 'igotanoffer',
    title: 'IGotAnOffer — Practice Platform',
    url: 'https://igotanoffer.com/en/les grands cabinets-case-interview',
    category: 'Pratique Cas',
    priority: 'recommended',
    description: 'Plateforme spécialisée les grands cabinets avec des guides, des cas pratiques, et une bibliothèque de ressources. Particulièrement bon pour les conseils sur le format Solve (ProblemSolving Test numérique les grands cabinets).',
    recommended_for: ['les grands cabinets Solve', 'Cas pratiques'],
    time_investment: 'Variable',
    language: 'EN'
  },

  // --- Tests le cabinet SHL ---
  {
    id: 'shl-practice-official',
    title: 'SHL Practice Tests — Portail officiel',
    url: 'https://www.shl.com/solutions/products/product-type/assessments/',
    category: 'Préparation SHL / le cabinet',
    priority: 'essential',
    description: 'Tests de pratique officiels SHL — les mêmes formats que ceux utilisés pour les présélections le cabinet. Tests de raisonnement verbal, numérique, et inductif. Accès gratuit partiel, payant pour les versions complètes.',
    recommended_for: ['le cabinet', 'Tous cabinets avec SHL'],
    time_investment: '1h de pratique/jour pendant 2 semaines avant le test',
    language: 'EN/FR'
  },
  {
    id: 'psychometric-success',
    title: 'Psychometric Success',
    url: 'https://psychometric-success.com',
    category: 'Préparation SHL / le cabinet',
    priority: 'essential',
    description: 'Centaines de tests de pratique gratuits pour raisonnement numérique, verbal et inductif. Interface similaire aux vrais tests SHL. Commence par les tests numériques car les plus discriminants pour consulting.',
    recommended_for: ['le cabinet', 'SHL numérique'],
    time_investment: '45 min/jour, 2 semaines avant test',
    language: 'EN'
  },
  {
    id: 'jobtestprep-shl',
    title: 'JobTestPrep — SHL Preparation',
    url: 'https://www.jobtestprep.com/shl-tests',
    category: 'Préparation SHL / le cabinet',
    priority: 'recommended',
    description: 'Pack de préparation payant (30–60€) avec simulations de tests SHL fidèles. Recommandé si tu passes un test le cabinet — le niveau de fidélité est supérieur aux ressources gratuites.',
    recommended_for: ['le cabinet', 'SHL'],
    time_investment: 'Pack 1 semaine de pratique intensive',
    language: 'EN/FR'
  },
  {
    id: 'practice-reasoningtests',
    title: 'Practice Reasoning Tests',
    url: 'https://practicereasoningtests.com',
    category: 'Préparation SHL / le cabinet',
    priority: 'useful',
    description: 'Excellent pour la pratique des tests de raisonnement inductif (suites de figures, matrices). Format gratuit, proche du Watson-Glaser utilisé par certains cabinets.',
    recommended_for: ['SHL inductif', 'le cabinet'],
    time_investment: '30 min/session',
    language: 'EN'
  },

  // --- les grands cabinets Solve ---
  {
    id: 'les grands cabinets-solve-prep',
    title: 'les grands cabinets Solve Practice — PrepLounge',
    url: 'https://www.preplounge.com/en/les grands cabinets-solve',
    category: 'les grands cabinets Officiel',
    priority: 'essential',
    description: 'PrepLounge offre des ressources spécifiques pour le les grands cabinets Solve (Imbellus) — le test de simulation numérique de les grands cabinets qui remplace le PSMAT depuis 2020. Comprend des explications sur les 2 jeux du Solve.',
    recommended_for: ['les grands cabinets spécifiquement'],
    time_investment: '5h de préparation dédiée',
    language: 'EN'
  },
  {
    id: 'les grands cabinets-solve-ecosystem',
    title: 'les grands cabinets Solve — Guide d\'ecosystème',
    url: 'https://www.hackingthecaseinterview.com/p/les grands cabinets-solve',
    category: 'les grands cabinets Officiel',
    priority: 'recommended',
    description: 'Guide détaillé sur les deux jeux du les grands cabinets Solve : Ecosystem Building et Redrock Study. Explications sur les compétences évaluées et les stratégies pour performer. Probablement le meilleur guide disponible gratuitement.',
    recommended_for: ['les grands cabinets Solve'],
    time_investment: '3h de lecture + pratique',
    language: 'EN'
  },

  // --- YouTube et vidéos ---
  {
    id: 'youtube-les grands cabinets-pei',
    title: 'YouTube : "les grands cabinets PEI" — Davis Nguyen',
    url: 'https://www.youtube.com/@DavisNguyen',
    category: 'Vidéos & YouTube',
    priority: 'essential',
    description: 'Davis Nguyen est un ex-les grands cabinets qui a la meilleure chaîne YouTube sur la préparation PEI et les cas. Ses vidéos sur les "3 les grands cabinets stories" et le PEI Leadership sont indispensables.',
    recommended_for: ['PEI', 'Mindset les grands cabinets'],
    time_investment: '10–15 vidéos de 10–20 min',
    language: 'EN'
  },
  {
    id: 'youtube-case-interviews',
    title: 'YouTube : Case Interview Prep — Firm Learning',
    url: 'https://www.youtube.com/@FirmLearning',
    category: 'Vidéos & YouTube',
    priority: 'recommended',
    description: 'Chaîne dédiée aux entretiens de cas consulting. Exemples d\'entretiens complets filmés, commentaires de consultants, et analyses de frameworks. Très bon pour comprendre ce que l\'interviewer observe réellement.',
    recommended_for: ['Pratique cas', 'Compréhension format'],
    time_investment: '5–8 vidéos complètes',
    language: 'EN'
  },
  {
    id: 'youtube-maths-mental',
    title: 'YouTube : "Mental Math for Consultants"',
    url: 'https://www.youtube.com/results?search_query=mental+math+consulting+interview',
    category: 'Vidéos & YouTube',
    priority: 'useful',
    description: 'Plusieurs chaînes proposent des tutoriels de mental math appliqués aux cas consulting. Cherche : "mental math consulting", "quick calculation consulting interview". Praticable comme complément aux drills de cette application.',
    recommended_for: ['Mental math', 'Calculs rapides'],
    time_investment: '20 min/session',
    language: 'EN'
  }
];

extraResources.forEach(function(r) {
  var priorityMap = { essential: 'Must', recommended: 'Should', useful: 'Optional', useful_optional: 'Optional' };
  DATA.resources.push({
    id: r.id,
    name: r.name || r.title,
    url: r.url,
    category: r.category || 'Other',
    priority: priorityMap[r.priority] || r.priority || 'Should',
    free: r.free !== undefined ? r.free : true,
    freeContent: r.freeContent || r.description || (r.time_investment ? 'Temps estimé : ' + r.time_investment : 'Ressource gratuite'),
    quality: r.quality || (r.priority === 'essential' ? 5 : r.priority === 'recommended' ? 4 : 3),
    skill: r.skill || (Array.isArray(r.recommended_for) ? r.recommended_for.join(', ') : (r.recommended_for || 'General')),
    level: r.level || 'All'
  });
});

})();


