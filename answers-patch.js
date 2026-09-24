(function() {
  function pa(id, fr, en) {
    for (var i = 0; i < DATA.modules.length; i++) {
      var dd = DATA.modules[i].drills;
      if (!dd) continue;
      for (var j = 0; j < dd.length; j++) {
        if (dd[j].id === id) { dd[j].answer = fr; if (en) dd[j].answer_en = en; return; }
      }
    }
  }

pa("SYN-D1",
    "La situation est preoccupante : notre client subit une compression significative de ses marges. En une phrase : les couts variables ont augmente de 25% sous l'effet de la hausse des matieres premieres, tandis que le chiffre d'affaires reste stable, ce qui erode directement la rentabilite.\n\nJe recommande trois leviers d'action prioritaires. Premier levier : renegocier les contrats fournisseurs ou diversifier les sources d'approvisionnement pour reduire l'exposition aux matieres premieres, avec un potentiel de gain de 5 a 10 points sur les couts. Deuxieme levier : reviser la politique tarifaire pour repercuter partiellement la hausse sur les clients finaux, en segmentant les clients a forte valeur qui accepteront une augmentation de prix. Troisieme levier : lancer un programme d'efficience operationnelle pour substituer ou reduire la consommation des matieres les plus impactees.\n\nLa priorisation depend de deux facteurs : le pouvoir de negociation vis-a-vis des fournisseurs et l'elasticite-prix de la clientele. Je recommande de commencer par l'analyse fournisseurs sous 30 jours pour qualifier le potentiel de chaque levier avant d'engager des ressources.",
    "The situation is concerning: our client is experiencing significant margin compression. In one sentence: variable costs have risen 25% driven by raw material inflation while revenue remains flat, directly eroding profitability.\n\nI recommend three priority action levers. First: renegotiate supplier contracts or diversify sourcing to reduce raw material exposure, with a potential 5 to 10 point improvement on costs. Second: revise pricing policy to partially pass through cost increases to end customers, segmenting high-value clients most likely to absorb a price increase. Third: launch an operational efficiency program to substitute or reduce consumption of the most impacted materials.\n\nPrioritization depends on two factors: negotiating power with suppliers and customer price elasticity. I recommend starting with supplier analysis within 30 days to qualify the potential of each lever before committing resources. The key watch-out is sequencing: pricing action without supply-side progress signals weakness to customers, so the two levers should advance in parallel."
  );

  pa("SYN-D2",
    "Ma recommandation est conditionnelle : l'acquisition a 50M euros est justifiable uniquement si les conditions d'integration sont maitrisees. Voici le raisonnement.\n\nSur le business case pur : les synergies estimees a 8M euros par an permettent un retour sur investissement en 6,25 ans hors couts d'integration. En ajoutant une prime de risque d'integration elevee, le payback reel depasse probablement 8 a 9 ans, ce qui est a la limite pour une acquisition de cette nature.\n\nJe pose trois conditions pour recommander le GO. Premierement, que les synergies soient au moins partiellement contractualisees ou liees a des contrats clients existants du concurrent. Deuxiemement, que le plan d'integration soit planifie sur 18 mois maximum avec une gouvernance dediee et des jalons mesurables. Troisiemement, que le financement soit non-dilutif et que le levier de dette reste acceptable au regard des covenants actuels.\n\nSi ces conditions ne sont pas reunies, je recommande d'explorer une alternative moins risquee : un partenariat commercial ou une integration partielle limitee a la technologie ou a la base clients, pour limiter l'exposition au risque d'integration tout en capturant une partie de la valeur identifiee.",
    "My recommendation is conditional: the 50M euro acquisition is justifiable only if integration conditions can be managed. Here is the reasoning.\n\nOn the pure business case: synergies estimated at 8M euros per year imply a payback period of 6.25 years excluding integration costs. Adding a high integration risk premium, the real payback likely exceeds 8 to 9 years, which is borderline for this type of acquisition.\n\nI set three conditions for a GO recommendation. First, that synergies are at least partially underpinned by contractual relationships or existing client contracts of the target. Second, that the integration plan is scoped to a maximum of 18 months with dedicated governance and measurable milestones. Third, that financing is non-dilutive and debt leverage remains acceptable relative to current covenants.\n\nIf these conditions are not met, I recommend exploring a lower-risk alternative: a commercial partnership or partial integration limited to technology or the client base, to cap integration risk exposure while still capturing part of the identified value."
  );

  pa("SYN-D3",
    "La synthese est la suivante : le marche est attractif par ses fondamentaux, mais notre client ne peut pas y entrer seul dans un horizon court. Je recommande une entree indirecte.\n\nLe marche presente deux signaux tres positifs : 8 milliards d'euros de taille et une croissance de 12% par an, ce qui en fait une priorite strategique difficile a ignorer. En revanche, l'absence de capacites locales constitue un frein operationnel majeur qui rendrait une entree directe lente et couteuse.\n\nFace a ce constat, je vois deux alternatives credibles. Premiere alternative : l'acquisition d'un acteur local, qui permet d'acheter les capacites manquantes et d'accelerer l'entree, au prix d'un investissement significatif et d'un risque d'integration a gerer. Deuxieme alternative : une joint-venture avec un partenaire local bien implante, qui reduit le risque d'execution et partage les couts d'entree, mais implique une gouvernance partagee et un potentiel de conflit d'interets a anticiper.\n\nMa recommandation : initier immediatement un mapping des cibles d'acquisition et des partenaires JV potentiels, avec une decision d'orientation sous 60 jours. Le critere de choix entre les deux alternatives sera le niveau de controle strategique que notre client souhaite exercer a terme.",
    "The synthesis is as follows: the market is attractive on its fundamentals, but our client cannot enter it alone within a short timeframe. I recommend an indirect entry.\n\nThe market shows two strong positive signals: 8 billion euros in size and 12% annual growth, making it a strategic priority that is difficult to ignore. However, the absence of local capabilities is a major operational barrier that would make a direct entry slow and costly.\n\nGiven this assessment, I see two credible alternatives. First alternative: acquiring a local player, which allows the client to buy the missing capabilities and accelerate entry, at the cost of significant investment and integration risk. Second alternative: a joint venture with a well-established local partner, which reduces execution risk and shares entry costs, but involves shared governance and potential conflicts of interest to anticipate.\n\nMy recommendation: immediately initiate a mapping of acquisition targets and potential JV partners, with a strategic direction decision within 60 days. The choice criterion between the two alternatives will be the level of strategic control our client wishes to exercise long-term."
  );

  pa("REC-D1",
    "Ma recommandation est GO conditionnel sur le lancement 5G premium, avec une strategie d'entree progressive et des KPIs de validation etape par etape.\n\nVoici le raisonnement. Le marche est favorable : la 5G est en phase d'adoption croissante, et un positionnement premium a +30 euros par mois est coherent avec les marches analogues en Europe du Nord et en Asie. Le risque d'adoption est reel, mais il est gerable si l'entree est bien sequencee et non pas lancee en grand deploiement d'emblee.\n\nJe recommande une strategie en trois phases. Phase 1, sur 3 mois : lancer une offre pilote sur les 5 a 10 plus grandes metropoles, ciblant les early adopters et les professionnels a fort usage data. L'objectif est de valider le taux de conversion et la retention a 30 et 90 jours. Phase 2, sur 6 a 9 mois : deployer nationalement si les KPIs pilote confirment un ARPU additionnel positif et un churn mensuel inferieur a 3%. Phase 3 : developper les use cases differenciants qui justifient la prime tarifaire, notamment la latence ultra-basse pour les usages professionnels.\n\nLe point de vigilance principal est la cannibalisation du portefeuille existant. Je recommande de concevoir l'offre pour qu'elle cible exclusivement les segments qui n'auraient pas souscrit autrement.",
    "My recommendation is conditional GO on the 5G premium launch, with a phased entry strategy and step-by-step validation KPIs.\n\nHere is the reasoning. The market is favorable: 5G is in a growing adoption phase, and a premium positioning at +30 euros per month is consistent with comparable markets across Northern Europe and Asia. The adoption risk is real but manageable if entry is properly sequenced rather than launched as a full national rollout from day one.\n\nI recommend a three-phase strategy. Phase 1, over 3 months: launch a pilot offer in the 5 to 10 largest metropolitan areas, targeting early adopters and high-data-usage professionals. The objective is to validate conversion rates and retention at 30 and 90 days. Phase 2, over 6 to 9 months: roll out nationally if pilot KPIs confirm positive incremental ARPU and monthly churn below 3%. Phase 3: develop differentiated use cases that justify the premium, particularly ultra-low latency for professional applications.\n\nThe main watch-out is cannibalization of the existing portfolio. I recommend designing the offer to exclusively target segments that would not have subscribed otherwise."
  );

  pa("CF-D4",
    "Answer first: I recommend we immediately restructure or divest Product Line X, as it is responsible for 70% of our revenue decline and continued inaction will deepen the erosion.\n\nHere is the supporting evidence. Our analysis reveals that the revenue drop is not a company-wide phenomenon but is concentrated in a single product line. This means the root cause is specific and actionable rather than systemic, which is actually good news because it narrows the intervention.\n\nThe cabinet de conseil answer-first principle requires that the recommendation precede the evidence, not follow it. In practice, this means opening with the so-what, not the observation. The wrong form is: 'Revenue declined, and when we analyzed the breakdown, we found Product Line X accounts for 70% of the drop, which suggests we should consider...' The correct form is: 'We recommend restructuring Product Line X because it drives 70% of the revenue decline. Here is the evidence supporting this recommendation.'\n\nThe two-sentence version of this answer: 'Revenue decline is driven by a single underperforming product line, which accounts for 70% of the drop. We recommend an immediate strategic review of this line to determine whether to reposition, restructure, or divest it within the next 90 days.'",
    "Answer first: I recommend we immediately restructure or divest Product Line X, as it is responsible for 70% of our revenue decline and continued inaction will deepen the erosion.\n\nHere is the supporting evidence. Our analysis reveals that the revenue drop is not a company-wide phenomenon but is concentrated in a single product line. This means the root cause is specific and actionable rather than systemic, which is actually good news because it narrows the intervention.\n\nThe cabinet de conseil answer-first principle requires that the recommendation precede the evidence, not follow it. In practice, this means opening with the so-what, not the observation. The wrong form is: 'Revenue declined, and when we analyzed the breakdown, we found Product Line X accounts for 70% of the drop, which suggests we should consider...' The correct form is: 'We recommend restructuring Product Line X because it drives 70% of the revenue decline. Here is the evidence supporting this recommendation.'\n\nThe two-sentence version of this answer: 'Revenue decline is driven by a single underperforming product line, which accounts for 70% of the drop. We recommend an immediate strategic review of this line to determine whether to reposition, restructure, or divest it within the next 90 days.'"
  );

  pa("CF-D5",
    "My initial hypothesis is that the 25% engagement drop is primarily driven by a product-market fit deterioration rather than a technical issue, based on the duration and magnitude of the decline.\n\nHere is the structured reasoning. Before seeing any data, I frame this as a MECE hypothesis tree with four branches. First, supply-side quality: the marketplace may have onboarded lower-quality sellers or let listing quality deteriorate, reducing the value proposition for buyers. Second, demand-side behavioral shift: user needs may have evolved and the platform has not adapted, creating a relevance gap. Third, competitive displacement: a new or improved competitor may be capturing the marginal user who previously chose our platform. Fourth, product experience: a UX regression, algorithm change, or notification fatigue may have structurally reduced session frequency.\n\nMy prioritized hypothesis is supply-side quality degradation combined with competitive pressure, because these two factors together are the most common driver of sustained engagement decline in marketplace models. A single UX regression would typically show a sharper, shorter drop.\n\nThe initial data I would request to validate this: seller cohort performance over 6 months, buyer-side NPS trend, and share-of-wallet data if available. This allows me to confirm or reject the hypothesis efficiently before going further.",
    "My initial hypothesis is that the 25% engagement drop is primarily driven by a product-market fit deterioration rather than a technical issue, based on the duration and magnitude of the decline.\n\nHere is the structured reasoning. Before seeing any data, I frame this as a MECE hypothesis tree with four branches. First, supply-side quality: the marketplace may have onboarded lower-quality sellers or let listing quality deteriorate, reducing the value proposition for buyers. Second, demand-side behavioral shift: user needs may have evolved and the platform has not adapted, creating a relevance gap. Third, competitive displacement: a new or improved competitor may be capturing the marginal user who previously chose our platform. Fourth, product experience: a UX regression, algorithm change, or notification fatigue may have structurally reduced session frequency.\n\nMy prioritized hypothesis is supply-side quality degradation combined with competitive pressure, because these two factors together are the most common driver of sustained engagement decline in marketplace models. A single UX regression would typically show a sharper, shorter drop.\n\nThe initial data I would request to validate this: seller cohort performance over 6 months, buyer-side NPS trend, and share-of-wallet data if available. This allows me to confirm or reject the hypothesis efficiently before going further."
  );

  pa("CF-D6",
    "A framework is a pre-built, reusable structure that provides a standard starting point for analyzing a class of problems. A custom structure is built from scratch for one specific problem.\n\nThe distinction matters in consulting interviews and in practice. A framework such as Porter's Five Forces or the profitability tree gives speed and completeness for common problem types. The risk is that it feels generic and may not map cleanly onto the specifics of the case at hand.\n\nA custom structure is built by asking: what are the three or four key questions that, if answered, would fully resolve this specific problem? It takes slightly longer to construct but signals sharper, first-principles thinking.\n\ncabinet de conseil interviewers generally prefer custom structures because they demonstrate problem-specific reasoning rather than template application. The ideal approach is to use a framework as an internal reference to ensure MECE coverage, then present a structure that looks custom and is tailored to the case.\n\nPractical rule: never name the framework out loud in the interview. Instead, absorb its underlying logic and translate it into problem-specific language. The result should look like original thinking even if a standard framework informed it internally. The goal is to show you can think, not that you memorized a list.",
    "A framework is a pre-built, reusable structure that provides a standard starting point for analyzing a class of problems. A custom structure is built from scratch for one specific problem.\n\nThe distinction matters in consulting interviews and in practice. A framework such as Porter's Five Forces or the profitability tree gives speed and completeness for common problem types. The risk is that it feels generic and may not map cleanly onto the specifics of the case at hand.\n\nA custom structure is built by asking: what are the three or four key questions that, if answered, would fully resolve this specific problem? It takes slightly longer to construct but signals sharper, first-principles thinking.\n\ncabinet de conseil interviewers generally prefer custom structures because they demonstrate problem-specific reasoning rather than template application. The ideal approach is to use a framework as an internal reference to ensure MECE coverage, then present a structure that looks custom and is tailored to the case.\n\nPractical rule: never name the framework out loud in the interview. Instead, absorb its underlying logic and translate it into problem-specific language. The result should look like original thinking even if a standard framework informed it internally. The goal is to show you can think, not that you memorized a list."
  );

  pa("STR-D9",
    "Je propose une structure en quatre blocs MECE pour analyser la baisse des ventes de 20% sur deux ans.\n\nBloc 1, le marche : le segment premium smartphones est-il en contraction globale, ou notre client perd-il des parts de marche face a des concurrents specifiques ? Il faut distinguer un probleme de marche d'un probleme de competitivite relative.\n\nBloc 2, le produit : nos appareils sont-ils toujours percus comme premium par les clients ? Cela inclut l'analyse du cycle de vie produit, des innovations differenciantes face a Apple et Samsung, et de la perception de la marque dans les etudes consommateurs.\n\nBloc 3, la distribution et le prix : la baisse vient-elle d'une reduction de la couverture distribution, d'une pression tarifaire des distributeurs, ou d'une inadequation du pricing face aux nouveaux entrants chinois qui offrent des fonctionnalites comparables a prix inferieur ?\n\nBloc 4, le comportement consommateur : les cycles de renouvellement s'allongent-ils ? Y a-t-il une migration vers le segment milieu de gamme ?\n\nMon hypothese initiale : la baisse est principalement due a un deficit d'innovation percu combine a la montee en gamme de constructeurs comme Xiaomi qui proposent des fonctionnalites premium a 30% moins cher. Je commencerais par l'analyse comparative des attributs produit et du Net Promoter Score par segment.",
    "I propose a four-block MECE structure to analyze the 20% sales decline over two years.\n\nBlock 1, the market: is the premium smartphone segment contracting overall, or is our client losing market share to specific competitors? We must distinguish between a market problem and a relative competitiveness problem.\n\nBlock 2, the product: are our devices still perceived as premium by customers? This includes product lifecycle analysis, differentiated innovation versus Apple and Samsung, and brand perception in consumer studies.\n\nBlock 3, distribution and pricing: is the decline driven by reduced distribution coverage, distributor margin pressure, or a pricing mismatch against Chinese entrants who offer comparable features at lower price points?\n\nBlock 4, consumer behavior: are renewal cycles extending? Is there migration toward the mid-range segment?\n\nMy initial hypothesis: the decline is primarily driven by a perceived innovation deficit combined with the premiumization of competitors such as Xiaomi, which offer premium-equivalent features at 30% lower prices. I would start with a comparative product attribute analysis and Net Promoter Score trends by segment to confirm or challenge this hypothesis before proceeding."
  );

  pa("STR-D10",
    "Je structure la reduction budgetaire de 15% autour de quatre leviers, en distinguant les coupes a faible risque des coupes sensibles sur les services.\n\nLevier 1, la rationalisation administrative : reduction des doublons organisationnels, mutualisation des fonctions support entre departements et optimisation des achats publics via la massification. Ce levier est le moins risque sur les services aux citoyens et peut representer 4 a 6 points du budget total.\n\nLevier 2, la revue des services non-essentiels : identifier et reduire les services a faible impact citoyen en appliquant un critere de valeur percue par les usagers. Ce levier necessite une consultation pour eviter les effets politiques negatifs et doit etre documente avec transparence.\n\nLevier 3, l'efficience operationnelle : digitalisation des procedures administratives, reduction des couts energetiques du patrimoine immobilier et optimisation des transports municipaux. Des gains de 2 a 3 points sont realisables sur 18 a 24 mois.\n\nLevier 4, les revenus complementaires : valorisation du patrimoine immobilier, developpement des redevances sur services existants et partenariats public-prive sur les infrastructures.\n\nCritere de priorisation : impact sur les services essentiels d'abord, puis delai de realisation, puis acceptabilite politique. Je recommande de commencer par les leviers 1 et 3 qui presentent le meilleur ratio impact sur budget versus risque social.",
    "I structure the 15% budget reduction around four levers, distinguishing low-risk cuts from cuts that carry service sensitivity.\n\nLever 1, administrative rationalization: eliminating organizational overlaps, pooling support functions across departments, and optimizing public procurement through volume consolidation. This lever carries the lowest service risk and can represent 4 to 6 percentage points of total budget savings.\n\nLever 2, review of non-essential services: identify and reduce services with low citizen impact by applying a user-perceived value criterion. This lever requires consultation to avoid negative political effects and must be documented with transparency.\n\nLever 3, operational efficiency: digitizing administrative processes, reducing energy costs of the real estate portfolio, and optimizing municipal transport. Gains of 2 to 3 percentage points are achievable within 18 to 24 months.\n\nLever 4, complementary revenues: monetizing the real estate portfolio, developing user fees on existing services, and public-private partnerships on infrastructure.\n\nPrioritization criteria: impact on essential services first, then implementation timeline, then political acceptability. I recommend starting with levers 1 and 3, which offer the best budget-impact-to-social-risk ratio."
  );

  pa("STR-D11",
    "La baisse du taux de completion de 45% a 28% est un signal fort de desengagement structurel. Je propose cinq axes d'analyse prioritaires.\n\nAxe 1, le mix utilisateurs : la plateforme a-t-elle attire un nouveau segment d'utilisateurs moins engages, par exemple via une promotion a bas prix ou un canal d'acquisition different ? Un changement de mix peut expliquer une partie de la baisse sans que la plateforme elle-meme ait change.\n\nAxe 2, l'experience utilisateur : y a-t-il eu des changements d'interface, une augmentation de la friction a la connexion ou une degradation de la performance technique qui aurait augmente le taux d'abandon precoce ?\n\nAxe 3, la qualite du contenu : les cours recemment ajoutes ont-ils des taux de completion inferieurs a l'historique ? Cela indiquerait un probleme de pertinence ou de format.\n\nAxe 4, les mecanismes d'engagement : les rappels, certificats et fonctionnalites communautaires ont-ils ete modifies ou supprimes ?\n\nAxe 5, la concurrence : de nouveaux entrants proposent-ils des formats plus courts ou plus engageants qui captent l'attention des memes utilisateurs ?\n\nMon hypothese initiale : la baisse s'explique par un changement de mix utilisateurs combine a un deficit de mecanismes de re-engagement. Je commencerais par une analyse cohorte par canal d'acquisition pour isoler l'effet mix de l'effet produit.",
    "The drop in completion rate from 45% to 28% is a strong signal of structural disengagement. I propose five priority analysis dimensions.\n\nDimension 1, user mix: has the platform attracted a new, less engaged user segment, for example through a low-price promotion or a different acquisition channel? A mix shift can explain part of the decline without the platform itself having changed.\n\nDimension 2, user experience: have there been interface changes, increased login friction, or technical performance degradation that raised early dropout rates?\n\nDimension 3, content quality: do recently added courses have lower completion rates than historical content? This would indicate a relevance or format issue.\n\nDimension 4, engagement mechanisms: have reminders, certificates, and community features been modified or removed?\n\nDimension 5, competition: are new entrants offering shorter or more engaging formats that are capturing attention from the same user base?\n\nMy initial hypothesis: the decline is explained by a user mix shift combined with insufficient re-engagement mechanisms. I would start with a cohort analysis by acquisition channel to isolate the mix effect from the product effect before designing any intervention."
  );

  pa("STR-D12",
    "Je structure le Go/No-Go autour de quatre blocs de decision avec des criteres explicites pour chacun.\n\nBloc 1, le marche : quelle est la taille du marche adressable pour l'IA generative dans le secteur industriel, et quel est le profil de la demande client actuelle ? Les industriels ont-ils deja un budget identifie pour ce type d'offre, ou faut-il creer la demande ?\n\nBloc 2, les competences internes : le cabinet dispose-t-il des talents necessaires en IA, en MLOps et en connaissance sectorielle industrielle ? Ou faudra-t-il recruter massivement ou acquerir une expertise externe dans un delai court ?\n\nBloc 3, la differenciation : sur quoi repose l'avantage concurrentiel de cette offre ? Est-ce la profondeur sectorielle, la propriete intellectuelle sur les modeles, la vitesse d'execution ou les donnees proprietaires issues des missions precedentes ?\n\nBloc 4, le business case : quel est le modele economique, honoraires a la mission versus abonnement produit, et quel est le seuil de rentabilite en nombre de clients et en mois ?\n\nCriteres de decision Go : marche adressable superieur a 200M euros, au moins 3 clients pilotes identifies, et un proof of concept technique valide. Criteres No-Go : absence de differenciation defendable face aux cabinets de strategie qui investissent massivement dans l'IA et absence de talent interne suffisant.",
    "I structure the Go/No-Go decision around four decision blocks with explicit criteria for each.\n\nBlock 1, the market: what is the addressable market size for generative AI in the industrial sector, and what is the profile of current client demand? Do industrial players already have an identified budget for this type of offering, or does demand need to be created?\n\nBlock 2, internal capabilities: does the firm have the necessary talent in AI, MLOps, and industrial sector knowledge? Or will significant recruiting or external expertise acquisition be required within a short timeframe?\n\nBlock 3, differentiation: what underpins the competitive advantage of this offering? Is it sector depth, intellectual property on the models, execution speed, or proprietary data from previous engagements?\n\nBlock 4, the business case: what is the economic model, project-based fees versus product subscription, and what is the break-even in terms of number of clients and months?\n\nGo decision criteria: addressable market above 200M euros, at least 3 identified pilot clients, and a validated technical proof of concept. No-Go criteria: absence of a defensible differentiation against strategy firms investing heavily in AI, and insufficient internal talent to deliver at scale."
  );

  pa("PRO-D4",
    "Calculons la marge moyenne ponderee etape par etape.\n\nEtape 1, calcul de la marge absolue de chaque produit. Product A : 80M euros de revenue a 45% de marge = 36M euros de marge absolue. Product B : 120M euros de revenue a 25% de marge = 30M euros de marge absolue.\n\nEtape 2, calcul des totaux. Revenue total : 80M + 120M = 200M euros. Marge absolue totale : 36M + 30M = 66M euros.\n\nEtape 3, calcul de la marge ponderee. Marge ponderee = 66M divise par 200M = 33%.\n\nVerification rapide : 33% est bien compris entre 25% et 45%, et se trouve plus pres de 25% car Product B represente 60% du revenue. La ponderation est coherente.\n\nInterpretation strategique : la marge ponderee de 33% est tiree vers le bas par le Product B, qui represente 60% du revenue mais affiche une marge bien inferieure. Si le mix revenue continuait a se deplacer vers le Product B, la marge globale se degraderait mecaniquement. A l'inverse, une croissance relative du Product A de seulement 10 points de mix permettrait de recuperer environ 2 points de marge globale. Ce type d'analyse de mix est fondamental pour tout diagnostic de rentabilite et pour evaluer les decisions d'allocation de ressources commerciales.",
    "Let us calculate the weighted average margin step by step.\n\nStep 1, calculate the absolute margin for each product. Product A: 80M euros revenue at 45% margin = 36M euros absolute margin. Product B: 120M euros revenue at 25% margin = 30M euros absolute margin.\n\nStep 2, calculate totals. Total revenue: 80M + 120M = 200M euros. Total absolute margin: 36M + 30M = 66M euros.\n\nStep 3, calculate the weighted margin. Weighted margin = 66M divided by 200M = 33%.\n\nQuick check: 33% falls between 25% and 45%, and sits closer to 25% because Product B represents 60% of revenue. The weighting is internally consistent.\n\nStrategic interpretation: the 33% weighted margin is pulled down by Product B, which represents 60% of revenue but carries a significantly lower margin. If the revenue mix continues to shift toward Product B, overall margin will mechanically deteriorate. Conversely, a relative increase of only 10 percentage points in Product A's mix share would recover approximately 2 points of overall margin. This type of mix analysis is fundamental to any profitability diagnostic and to evaluating commercial resource allocation decisions."
  );

  pa("PRO-D5",
    "La deduction cle est la suivante : si l'occupation est stable a 82% et que le RevPAR baisse de 350 euros a 280 euros, c'est necessairement l'ADR qui a chute.\n\nVerifions par le calcul. RevPAR = ADR multiplie par le taux d'occupation. Avant : 350 = ADR x 0,82, donc ADR = 427 euros. Apres : 280 = ADR x 0,82, donc ADR = 341 euros. La baisse d'ADR est de 86 euros, soit -20%, ce qui est tres significatif pour un etablissement 5 etoiles.\n\nJe vois quatre causes probables a investiguer. Premiere cause : une pression tarifaire concurrentielle, par exemple l'ouverture d'un nouvel hotel 5 etoiles dans le meme marche ayant force des baisses de prix defensives. Deuxieme cause : une degradation du mix clientele avec une part croissante de groupes ou de sejours loisirs a tarif negocie, au detriment des voyageurs affaires a tarif plein. Troisieme cause : une perte de positionnement dans les OTAs ayant force des promotions tarifaires pour maintenir la visibilite et l'occupation. Quatrieme cause : une baisse de la perception qualite, notations en ligne en recul, ayant conduit a une pression a la reduction de prix pour soutenir la demande.\n\nJe commencerais l'analyse par la decomposition du mix clientele et l'evolution des tarifs negocies versus tarifs rack sur 24 mois.",
    "The key deduction is as follows: if occupancy is stable at 82% and RevPAR falls from 350 euros to 280 euros, it is necessarily the ADR that has dropped.\n\nLet us verify through calculation. RevPAR = ADR times occupancy rate. Before: 350 = ADR times 0.82, so ADR = 427 euros. After: 280 = ADR times 0.82, so ADR = 341 euros. The ADR decline is 86 euros, or -20%, which is very significant for a 5-star property.\n\nI see four probable causes to investigate. First cause: competitive pricing pressure, for example the opening of a new 5-star hotel in the same market forcing defensive price reductions. Second cause: guest mix deterioration with a growing share of groups or leisure stays at negotiated rates, at the expense of full-rate business travelers. Third cause: loss of OTA positioning that forced price promotions to maintain visibility while sustaining occupancy. Fourth cause: declining quality perception with lower online ratings, which led to price reduction pressure to sustain demand levels.\n\nI would start the analysis with a breakdown of the guest mix and the evolution of negotiated versus rack rates over 24 months, to isolate the mix effect from the pricing power effect."
  );

  pa("PRO-D6",
    "Calculons l'impact de la baisse des frais generaux sur la marge EBITDA.\n\nSituation initiale : EBITDA de 20M euros sur un revenue de 160M euros, soit une marge EBITDA de 12,5%.\n\nImpact de la mesure : les frais generaux baissent de 8M euros. Cette reduction impacte directement l'EBITDA, qui passe de 20M a 28M euros. Le revenue reste inchange a 160M euros.\n\nNouvelle marge EBITDA : 28M divise par 160M = 17,5%.\n\nL'amelioration est donc de 500 points de base, ce qui represente une progression remarquable pour une seule initiative d'efficience. En termes relatifs, c'est une amelioration de 40% de la marge EBITDA en valeur absolue.\n\nInterpretation strategique : une amelioration de 500 bps en une seule action sur les frais generaux suggere que ces couts etaient structurellement eleves, signe classique d'une croissance rapide non accompagnee d'une discipline cost rigoureuse. Il est important de verifier trois points : que cette reduction est durable et non conjoncturelle, qu'elle ne comprime pas des capacites necessaires a la croissance future, et qu'elle ne cree pas de risques operationnels differes. Un suivi de la marge a 6 et 12 mois est recommande pour confirmer la tenue de l'objectif.",
    "Let us calculate the impact of the reduction in general and administrative expenses on EBITDA margin.\n\nInitial situation: EBITDA of 20M euros on revenue of 160M euros, giving an EBITDA margin of 12.5%.\n\nImpact of the measure: general expenses decrease by 8M euros. This reduction flows directly to EBITDA, which increases from 20M to 28M euros. Revenue remains unchanged at 160M euros.\n\nNew EBITDA margin: 28M divided by 160M = 17.5%.\n\nThe improvement is therefore 500 basis points, representing a remarkable gain from a single efficiency initiative. In relative terms, this is a 40% improvement in EBITDA margin in absolute value.\n\nStrategic interpretation: a 500 bps improvement from a single action on general expenses suggests these costs were structurally elevated, a classic sign of rapid growth not accompanied by rigorous cost discipline. Three points must be verified: that this reduction is sustainable and not cyclical, that it does not compress capabilities needed for future growth, and that it does not create deferred operational risks. A margin follow-up at 6 and 12 months is recommended to confirm the target holds."
  );

  pa("GRO-D3",
    "Structurons les leviers de croissance pour atteindre 5M de clients en partant de 2M en 18 mois.\n\nCalibrage de la cible : il faut acquerir 3M de clients nets en 18 mois, soit environ 167 000 clients nets par mois. En supposant un churn mensuel actuel de 2%, il faut en realite acquerir environ 207 000 nouveaux clients bruts par mois pour atteindre la cible nette. C'est une ambition tres elevee qui necessite de combiner plusieurs leviers en parallele.\n\nJe vois cinq leviers sequences. Levier 1, la croissance organique : ameliorer le referral program et les boucles virales dans le produit, objectif 30 a 40% des acquisitions. Levier 2, l'acquisition payante : scaling des canaux paid social et search, avec un suivi strict du CAC versus LTV pour eviter la destruction de valeur. Levier 3, la reduction du churn : identifier les cohortes a churn eleve et deployer des mecanismes de retention proactifs incluant engagement, offres de retention et amelioration du onboarding. Levier 4, l'expansion geographique : cibler 2 a 3 nouvelles villes ou regions avec un fort potentiel sous-penetre. Levier 5, le segment B2B : lancer une offre entreprise pour acquerir des volumes plus importants par contrat.\n\nSequencage recommande : leviers 1 et 3 en mois 1 a 3 pour optimiser l'existant, puis leviers 2 et 4 en mois 4 a 12, puis levier 5 en mois 9 a 18.",
    "Let us structure the growth levers to reach 5M customers from 2M in 18 months.\n\nTarget calibration: 3M net customers must be acquired in 18 months, approximately 167,000 net customers per month. Assuming a current monthly churn of 2%, approximately 207,000 gross new customers per month are actually needed to reach the net target. This is a highly ambitious goal that requires combining several levers in parallel.\n\nI see five sequenced levers. Lever 1, organic growth: improve the referral program and in-product viral loops, targeting 30 to 40% of acquisitions. Lever 2, paid acquisition: scale paid social and search channels with strict CAC versus LTV monitoring to avoid value destruction. Lever 3, churn reduction: identify high-churn cohorts and deploy proactive retention mechanisms including engagement campaigns, retention offers, and onboarding improvements. Lever 4, geographic expansion: target 2 to 3 new underpenetrated cities or regions with high potential. Lever 5, B2B segment: launch an enterprise offer to acquire larger volumes per contract.\n\nRecommended sequencing: levers 1 and 3 in months 1 to 3 to optimize the existing base, then levers 2 and 4 in months 4 to 12, then lever 5 in months 9 to 18."
  );

  pa("GRO-D4",
    "Pour faire passer le NRR de 95% a 115%, je propose six leviers concrets sequences par impact et rapidite d'execution.\n\nLevier 1, le Customer Success proactif : passer d'un modele reactif a un modele proactif avec des health scores par compte et des interventions declenchees avant le renouvellement. Objectif : reduire le churn volontaire de 3 a 4 points sur 12 mois.\n\nLevier 2, les upsell triggers bases sur l'usage : identifier les signaux d'usage qui precedent une volonte d'upgrade, par exemple les comptes qui approchent de leur limite de capacite, et declencher des conversations commerciales au bon moment.\n\nLevier 3, l'expansion des seats ou licences : developper un programme de croissance du nombre d'utilisateurs au sein des comptes existants, en ciblant les departements adjacents non encore adresses.\n\nLevier 4, le cross-sell sur l'offre complementaire : identifier les modules ou produits adjacents que les clients actuels n'ont pas encore adoptes et creer des packs ou bundling incitatifs.\n\nLevier 5, le passage a un modele usage-based pricing : introduire des composantes de revenus variables correlees a la valeur delivree, ce qui augmente mecaniquement le NRR a mesure que le client croit.\n\nLevier 6, la reduction du churn involontaire : automatiser les relances sur les echecs de paiement et securiser les renouvellements annuels 90 jours a l'avance.",
    "To increase NRR from 95% to 115%, I propose six concrete levers sequenced by impact and execution speed.\n\nLever 1, proactive Customer Success: shift from a reactive to a proactive model with account health scores and interventions triggered before renewal. Target: reduce voluntary churn by 3 to 4 points over 12 months.\n\nLever 2, usage-based upsell triggers: identify usage signals that precede upgrade intent, for example accounts approaching their capacity limit, and trigger commercial conversations at the right moment.\n\nLever 3, seat or license expansion: develop a growth program for the number of users within existing accounts, targeting adjacent departments not yet addressed.\n\nLever 4, cross-sell on complementary offerings: identify modules or adjacent products that current customers have not yet adopted and create incentive packs or bundling structures.\n\nLever 5, shift to usage-based pricing: introduce variable revenue components correlated to value delivered, which mechanically increases NRR as the customer grows.\n\nLever 6, reduction of involuntary churn: automate follow-ups on payment failures and secure annual renewals 90 days in advance. This lever is often underestimated but can recover 1 to 2 NRR points at low cost."
  );

  pa("GRO-D5",
    "Structurons le diagnostic du ralentissement de croissance d'une marketplace passant de 60% a 20% de croissance annuelle du GMV.\n\nJe propose cinq axes d'analyse.\n\nAxe 1, l'offre (cote vendeurs) : le nombre de sellers actifs et la qualite des listings ont-ils stagne ? Une marketplace ralentit souvent lorsque le catalogue cesse de s'enrichir en nouvelles references.\n\nAxe 2, la demande (cote acheteurs) : le nombre de buyers actifs et la frequence d'achat ont-ils evolue ? La penetration du marche cible est-elle proche de la saturation ?\n\nAxe 3, la frequence et le panier moyen : la baisse de croissance du GMV vient-elle d'une reduction de la frequence d'achat, d'une baisse du panier moyen, ou des deux simultanement ?\n\nAxe 4, la concurrence : un concurrent a-t-il capture une part significative de l'audience ou des vendeurs, et sur quels segments specifiques ?\n\nAxe 5, la geographie et les segments : la croissance est-elle homogene ou concentree sur quelques geographies ou categories en phase de maturite ?\n\nConclusion probable : ce profil de ralentissement apres forte croissance initiale correspond classiquement a une saturation des early adopters combinee a une hausse du CAC. Les utilisateurs les plus faciles a acquerir ont deja ete captures. La prochaine phase de croissance requiert soit une expansion vers de nouveaux segments et geographies, soit un travail intensif sur la frequence d'achat des utilisateurs existants via des mecanismes de fidelisation.",
    "Let us structure the diagnosis of a marketplace slowing from 60% to 20% annual GMV growth.\n\nI propose five analysis dimensions.\n\nDimension 1, supply side (sellers): have active seller counts and listing quality stagnated? A marketplace often slows when the catalog stops growing with new references.\n\nDimension 2, demand side (buyers): have active buyer counts and purchase frequency evolved? Is penetration of the target market approaching saturation?\n\nDimension 3, frequency and average basket: is the GMV growth slowdown driven by reduced purchase frequency, a lower average basket value, or both simultaneously?\n\nDimension 4, competition: has a competitor captured a significant share of audience or sellers, and in which specific segments?\n\nDimension 5, geography and segments: is growth homogeneous or concentrated in a few geographies or categories in a maturity phase?\n\nMost probable conclusion: this slowdown profile after strong initial growth classically corresponds to early adopter saturation combined with rising CAC. The easiest-to-acquire users have already been captured. The next growth phase requires either expansion toward new segments and geographies, or intensive work on purchase frequency among existing users through loyalty mechanisms and personalized re-engagement."
  );

pa("MS-D7",
    "Approche top-down.\n\nFrance 68M habitants → 28M foyers. Pénétration streaming : 65% des foyers = 18M foyers abonnés. Nombre moyen d'abonnements par foyer abonné : 1.8 (Netflix + Disney+ ou Prime, typique 2025-2026). Total abonnements : 18M × 1.8 = 32M. Prix moyen mensuel : 12€ (mix Basic/Standard).\n\nRevenu annuel : 32M × 12 × 12 = 4.6Bn€, arrondi à ~4.7Bn€/an.\n\nSanity check : Netflix France seul = ~10M abonnés × 12€ × 12 = ~1.44Bn€. Part de marché implicite ~30% dans un marché total de 4.7Bn€. Cohérent avec la position de Netflix comme leader avec 30-35% de part valeur. Autres acteurs (Prime Video ~8M, Disney+ ~6M, Canal+ ~5M) représentent les 65-70% restants.",
    "Top-down approach.\n\nFrance 68M inhabitants → 28M households. Streaming penetration: 65% of households = 18M subscribing households. Average subscriptions per subscribing household: 1.8 (Netflix + Disney+ or Prime, typical 2025-2026). Total subscriptions: 18M × 1.8 = 32M. Average monthly price: €12 (mix of Basic/Standard).\n\nAnnual revenue: 32M × 12 × 12 = €4.6Bn, rounded to ~€4.7Bn/year.\n\nSanity check: Netflix France alone = ~10M subscribers × €12 × 12 = ~€1.44Bn. Implied market share ~30% in a €4.7Bn total market. Consistent with Netflix's position as leader with 30-35% value share. Other players (Prime Video ~8M, Disney+ ~6M, Canal+ ~5M) represent the remaining 65-70%."
  );

  // ── MS-D8 : Salles de sport France ───────────────────────────────────────
  pa("MS-D8",
    "Approche bottom-up.\n\nFrance 68M → Population cible 18-65 ans = ~50M. Taux de membres actifs dans une salle de sport : 15% = 7.5M membres. Dépense mensuelle moyenne : 35€/mois (mix low-cost à 25€ et salles premium à 70€, pondéré par volume). Revenu annuel abonnements : 7.5M × 35€ × 12 = 3.15Bn€.\n\nRevenus annexes (personal training, retail, boissons, cours spéciaux) : ~10% = 315M€. Total estimé : ~3.5Bn€, soit ~3Bn€ dans une hypothèse conservatrice.\n\nSanity check : Basic-Fit France ~600k membres × 25€ × 12 = 180M€ → représente ~5-6% du marché. Cohérent avec leur positionnement de chaîne mid-size. Le secteur reste très fragmenté : les 5 premières chaînes représentent environ 30% du marché, le reste étant des indépendants.",
    "Bottom-up approach.\n\nFrance 68M → Target population 18-65 = ~50M. Active gym membership rate: 15% = 7.5M members. Average monthly spend: €35/month (mix of low-cost at €25 and premium at €70, weighted by volume). Annual subscription revenue: 7.5M × €35 × 12 = €3.15Bn.\n\nAncillary revenues (personal training, retail, beverages, special classes): ~10% = €315M. Total estimate: ~€3.5Bn, or ~€3Bn in a conservative scenario.\n\nSanity check: Basic-Fit France ~600k members × €25 × 12 = €180M → represents ~5-6% of the market. Consistent with their positioning as a mid-size chain. The sector remains highly fragmented: the top 5 chains represent roughly 30% of the market, the rest being independents."
  );

  // ── MS-D9 : Cafés par jour France ────────────────────────────────────────
  pa("MS-D9",
    "Décomposition par lieu de consommation.\n\nFrance 68M → 60% de buveurs réguliers = 41M personnes. Consommation moyenne : 2.5 tasses/jour/buveur régulier. Total brut : 41M × 2.5 = ~100M tasses/jour.\n\nVentilation par canal : domicile (60%) = 62M tasses ; bureau/travail (25%) = 25M tasses ; café/restaurant/distributeur (15%) = 15M tasses.\n\nSanity check ICO : l'Organisation Internationale du Café estime la consommation française à ~5.5kg de café vert/habitant/an, soit ~85-100M tasses/jour toutes préparations incluses (espresso, filtre, capsule). Notre estimation de 100M est cohérente avec la fourchette haute. En ne comptant que les cafés hors domicile : ~40M tasses/jour, ce qui correspond aux données de marché du café OOH en France.",
    "Breakdown by consumption location.\n\nFrance 68M → 60% regular coffee drinkers = 41M people. Average consumption: 2.5 cups/day/regular drinker. Gross total: 41M × 2.5 = ~100M cups/day.\n\nBreakdown by channel: home (60%) = 62M cups; office/work (25%) = 25M cups; cafe/restaurant/vending machine (15%) = 15M cups.\n\nICO sanity check: the International Coffee Organization estimates French consumption at ~5.5kg of green coffee per inhabitant per year, or ~85-100M cups/day across all preparation methods (espresso, filter, capsule). Our estimate of 100M is consistent with the high end of the range. Counting only out-of-home coffee: ~40M cups/day, consistent with market data for the French OOH coffee market."
  );

  // ── MS-D10 : Cybersécurité B2B Europe ────────────────────────────────────
  pa("MS-D10",
    "Approche top-down via PIB.\n\nPIB UE ~20 000Md€. Part des dépenses IT dans le PIB : ~3% = 600Md€ de dépenses IT totales en Europe. Part cybersécurité dans les dépenses IT : ~8% (benchmark sectoriel Gartner/IDC) = 48Md€. Part B2B : ~90% (les particuliers représentent ~10% des dépenses cyber) = ~43Md€.\n\nSanity check Gartner : marché mondial cybersécurité ~200Md$ en 2026. L'Europe représente ~20% du marché mondial = 40Md$ ≈ 37Md€. Notre estimation de 43Md€ est cohérente avec la fourchette Gartner, l'écart s'expliquant par les différences de scope (cloud security incluse ou non) et de taux de change.\n\nConclusion : marché B2B cybersécurité Europe estimé à 40-43Md€, en croissance structurelle de 12-15%/an.",
    "Top-down via GDP approach.\n\nEU GDP ~€20,000Bn. IT spend as % of GDP: ~3% = €600Bn total IT spending in Europe. Cybersecurity as % of IT spend: ~8% (Gartner/IDC industry benchmark) = €48Bn. B2B share: ~90% (individuals represent ~10% of cyber spend) = ~€43Bn.\n\nGartner sanity check: global cybersecurity market ~$200Bn in 2026. Europe = ~20% of global market = $40Bn ≈ €37Bn. Our €43Bn estimate is consistent with the Gartner range; the gap is explained by scope differences (cloud security included or not) and exchange rate assumptions.\n\nConclusion: European B2B cybersecurity market estimated at €40-43Bn, in structural growth of 12-15%/year."
  );

  // ── MS-D11 : Vélos électriques France ────────────────────────────────────
  pa("MS-D11",
    "Approche par volumes et segments de valeur.\n\nMarché France : ~900 000 VAE vendus par an (estimation 2025-2026 selon données Vélo & Territoires). Prix moyen : 1 500€/unité (mix entrée de gamme à 800€, milieu de gamme à 1 500€, haut de gamme à 3 500€). Revenu ventes directes : 900k × 1 500€ = 1.35Md€.\n\nRevenus services annexes : entretien et réparation (25% du marché matériel) = 340M€. Location longue durée B2B et flottes entreprises (10% et croissant) = 130M€. Accessoires et équipements (casques, antivols, batteries) = 150M€. Total : ~1.97Md€ ≈ 1.8 à 2Md€/an.\n\nSanity check : marché total vélo France (VAE + musculaire) = ~3Md€ selon l'Union Sport & Cycle. Les VAE représentent 60-65% de la valeur → cohérent avec notre estimation de ~1.8-2Md€.",
    "Volume and value segment approach.\n\nFrench market: ~900,000 e-bikes sold per year (2025-2026 estimate per Vélo & Territoires data). Average price: €1,500/unit (mix of entry-level at €800, mid-range at €1,500, premium at €3,500). Direct sales revenue: 900k × €1,500 = €1.35Bn.\n\nAncillary service revenues: maintenance and repair (25% of hardware market) = €340M. Long-term B2B rental and corporate fleets (10% and growing) = €130M. Accessories and equipment (helmets, locks, batteries) = €150M. Total: ~€1.97Bn ≈ €1.8-2Bn/year.\n\nSanity check: total French bicycle market (e-bike + traditional) = ~€3Bn per Union Sport & Cycle. E-bikes represent 60-65% of value → consistent with our ~€1.8-2Bn estimate."
  );

  // ── PRI-D3 : Pricing tiers streaming ─────────────────────────────────────
  pa("PRI-D3",
    "Structure en 5 blocs MECE.\n\n1. SEGMENTATION ET WTP : identifier les segments (casual viewer, regular user, famille multi-écrans, power user cinéphile) et leur willingness-to-pay via conjoint analysis ou A/B tests. Clé : le WTP varie du simple au triple selon le segment.\n\n2. BENCHMARKS CONCURRENTS : cartographier Netflix, Disney+, Prime Video sur 3 axes — prix, features, positionnement. Identifier les whitespaces tarifaires exploitables.\n\n3. ARCHITECTURE DES TIERS : définir les features distinctives de chaque tier (Basic : 1 écran SD sans téléchargement ; Standard : 2 écrans HD ; Premium : 4 écrans 4K + téléchargement). Points de prix optimaux basés sur la courbe de WTP.\n\n4. RISQUE DE CANNIBALISATION : modéliser les migrations inter-tiers (ex : 30% des Premium downgrade vers Standard → impact sur ARPU moyen). Calculer le break-even d'acquisition de nouveaux abonnés Basic.\n\n5. IMPACT FINANCIER : modéliser le nouvel ARPU moyen, la variation de marge brute, et le payback de la migration. KPIs : ARPU, churn par tier, upgrade rate à 6 mois.",
    "5-block MECE structure.\n\n1. SEGMENTATION AND WTP: identify segments (casual viewer, regular user, multi-screen family, power user cinephile) and their willingness-to-pay via conjoint analysis or A/B tests. Key: WTP varies by a factor of 3 across segments.\n\n2. COMPETITOR BENCHMARKS: map Netflix, Disney+, Prime Video on 3 axes — price, features, positioning. Identify exploitable pricing whitespaces.\n\n3. TIER ARCHITECTURE: define differentiating features per tier (Basic: 1 screen SD no download; Standard: 2 screens HD; Premium: 4 screens 4K + offline). Optimal price points based on the WTP curve.\n\n4. CANNIBALIZATION RISK: model inter-tier migrations (e.g., 30% of Premium customers downgrade to Standard → ARPU impact). Calculate break-even for acquiring new Basic subscribers.\n\n5. FINANCIAL IMPACT: model new average ARPU, gross margin variation, and migration payback. KPIs: ARPU, churn by tier, 6-month upgrade rate."
  );

  // ── PRI-D4 : Élasticité-prix calcul ──────────────────────────────────────
  pa("PRI-D4",
    "Calcul de l'impact d'une hausse de prix avec élasticité.\n\nDonnées : prix initial 80€, volume initial 5 000 unités, hausse +20% → nouveau prix 96€, élasticité-prix = -1.2.\n\nÉtape 1 — Variation de volume :\nVariation % volume = élasticité × variation % prix = -1.2 × 20% = -24%.\n\nÉtape 2 — Nouveau volume :\n5 000 × (1 - 24%) = 5 000 × 0.76 = 3 800 unités.\n\nÉtape 3 — Calcul des revenus :\nRevenu initial = 5 000 × 80€ = 400 000€.\nNouveau revenu = 3 800 × 96€ = 364 800€.\nVariation = (364 800 - 400 000) / 400 000 = -8.8%.\n\nConclusion : la hausse de prix de 20% est destructrice de valeur (-8.8% de revenu). L'élasticité > 1 en valeur absolue signifie que la demande est élastique : chaque point de hausse de prix perd plus en volume qu'il ne gagne en marge unitaire. Recommandation : ne pas appliquer une hausse uniforme ; envisager une segmentation par canal ou par client.",
    "Price increase impact calculation with elasticity.\n\nData: initial price €80, initial volume 5,000 units, price increase +20% → new price €96, price elasticity = -1.2.\n\nStep 1 — Volume change:\n% volume change = elasticity × % price change = -1.2 × 20% = -24%.\n\nStep 2 — New volume:\n5,000 × (1 - 24%) = 5,000 × 0.76 = 3,800 units.\n\nStep 3 — Revenue calculation:\nInitial revenue = 5,000 × €80 = €400,000.\nNew revenue = 3,800 × €96 = €364,800.\nChange = (364,800 - 400,000) / 400,000 = -8.8%.\n\nConclusion: the 20% price increase destroys value (-8.8% revenue). Absolute elasticity > 1 means demand is elastic: each percentage point of price increase loses more in volume than it gains in unit margin. Recommendation: do not apply a uniform price increase; consider segmentation by channel or customer tier."
  );

  // ── PRI-D5 : SaaS per-user → usage-based pricing ─────────────────────────
  pa("PRI-D5",
    "Matrice Opportunités / Risques avec recommandation.\n\nOPPORTUNITÉS :\n(1) Expansion revenue automatique — les clients qui utilisent davantage paient davantage sans action commerciale.\n(2) Barrière à l'entrée réduite — les petites entreprises accèdent au produit sans engagement fixe, accélérant l'acquisition.\n(3) Alignement valeur-prix — le client paie en proportion de la valeur reçue, ce qui améliore structurellement la rétention.\n(4) Données d'usage précieuses pour prioriser le roadmap produit.\n\nRISQUES :\n(1) Prévisibilité revenue dégradée — la volatilité mensuelle complique la planification et dégrade le multiple boursier SaaS.\n(2) Choc psychologique clients — les factures variables créent de l'anxiété et du churn involontaire.\n(3) Cannibalisation des power users — les plus gros clients peuvent optimiser leur usage pour réduire leurs factures.\n(4) Complexité engineering — la facturation à l'usage nécessite une infrastructure de métering robuste et auditée.\n\nRECOMMANDATION : modèle hybride — abonnement de base mensuel fixe (floor revenue) + surcharge à l'usage au-delà d'un seuil prédéfini. Cela préserve la prévisibilité tout en capturant l'expansion.",
    "Opportunities / Risks matrix with recommendation.\n\nOPPORTUNITIES:\n(1) Automatic expansion revenue — customers who use more pay more without any sales action.\n(2) Reduced entry barrier — small companies access the product without fixed commitment, accelerating acquisition.\n(3) Value-price alignment — customers pay in proportion to value received, structurally improving retention.\n(4) Valuable usage data to prioritize the product roadmap.\n\nRISKS:\n(1) Degraded revenue predictability — monthly volatility complicates planning and degrades the SaaS valuation multiple.\n(2) Customer bill shock — variable invoices create anxiety and involuntary churn.\n(3) Power user cannibalization — largest customers may optimize their usage to reduce their bills.\n(4) Engineering complexity — usage-based billing requires robust and audited metering infrastructure.\n\nRECOMMENDATION: hybrid model — fixed monthly base subscription (floor revenue) + usage surcharge above a predefined threshold. This preserves predictability while capturing expansion revenue."
  );

  // ── MA-D2 : Due diligence podcast network ────────────────────────────────
  pa("MA-D2",
    "Structure en 4 piliers de due diligence stratégique.\n\n1. ATTRACTIVITÉ DU RÉSEAU :\nAudience totale et croissance (DAU/MAU, downloads mensuels, rétention à 30 jours). Qualité et diversité du contenu (niches couvertes, formats, saisonnalité). Monétisation actuelle : CPM moyen, fill rate publicitaire, mix pub/abonnement premium. Barrières à l'imitation (exclusivité hôtes, catalogue propriétaire).\n\n2. RATIONALE STRATÉGIQUE :\nQuelle thèse d'acquisition est documentée ? Contenu exclusif (position défensive vs Spotify/Amazon), audience complémentaire non-overlap, technologie ou data d'écoute, accélération géographique ? La logique doit être MECE et chiffrée.\n\n3. VALORISATION :\n50M€ justifié ? Calculer le multiple implicite sur revenus et EBITDA. Comparer avec transactions récentes dans le secteur audio (Spotify/Anchor, Amazon/Wondery). Analyser la sensibilité aux hypothèses de croissance d'audience.\n\n4. RISQUES CLÉS :\nDépendance aux talents (les hosts partent, l'audience part). Risque de format (le podcast est-il structurellement en croissance ou en plateau ?). Risque d'intégration culturelle. Risques réglementaires sur le contenu.",
    "4-pillar strategic due diligence structure.\n\n1. NETWORK ATTRACTIVENESS:\nTotal audience and growth (DAU/MAU, monthly downloads, 30-day retention). Content quality and diversity (niches covered, formats, seasonality). Current monetization: average CPM, ad fill rate, ad/premium subscription mix. Barriers to imitation (host exclusivity, proprietary catalog).\n\n2. STRATEGIC RATIONALE:\nWhat acquisition thesis is documented? Exclusive content (defensive position vs Spotify/Amazon), complementary non-overlapping audience, listening technology or data, geographic acceleration? The logic must be MECE and quantified.\n\n3. VALUATION:\nIs €50M justified? Calculate the implied multiple on revenues and EBITDA. Compare with recent transactions in the audio sector (Spotify/Anchor, Amazon/Wondery). Analyze sensitivity to audience growth assumptions.\n\n4. KEY RISKS:\nTalent dependency (hosts leave, audience leaves). Format risk (is podcasting structurally growing or plateauing?). Cultural integration risk. Regulatory risks on content."
  );

  // ── MA-D3 : Prix d'acquisition calcul ────────────────────────────────────
  pa("MA-D3",
    "Calcul du prix d'acquisition.\n\nÉtape 1 — Valorisation de base (comparable companies) :\nEBITDA × multiple sectoriel = 15M€ × 12x = 180M€.\n\nÉtape 2 — Premium de contrôle :\nAcquérir le contrôle exige un premium pour convaincre les actionnaires de vendre. Premium de 20% = 180M€ × 1.20 = 216M€.\n\nÉtape 3 — Multiple implicite :\n216M€ / 15M€ EBITDA = 14.4x. Ce multiple de 14.4x est supérieur aux comparables (12x) mais inférieur aux cibles à forte croissance (18-20x). C'est un niveau raisonnable pour une acquisition avec contrôle.\n\nSanity check synergies : si l'acquéreur génère 3M€ EBITDA additionnel via synergies → EBITDA pro-forma = 18M€ × 12x = 216M€. Cela signifie que la totalité du prix payé est justifiée uniquement si les synergies se matérialisent intégralement. Conclusion : le prix est défendable mais conditionné à la réalisation des synergies — risque majeur à documenter dans le business case.",
    "Acquisition price calculation.\n\nStep 1 — Base valuation (comparable companies):\nEBITDA × sector multiple = €15M × 12x = €180M.\n\nStep 2 — Control premium:\nAcquiring control requires a premium to convince shareholders to sell. 20% premium = €180M × 1.20 = €216M.\n\nStep 3 — Implied multiple:\n€216M / €15M EBITDA = 14.4x. This 14.4x multiple is above comparables (12x) but below high-growth targets (18-20x). It is a reasonable level for a control acquisition.\n\nSynergy sanity check: if the acquirer generates €3M additional EBITDA via synergies → pro-forma EBITDA = €18M × 12x = €216M. This means the full price paid is justified only if synergies fully materialize. Conclusion: the price is defensible but conditional on synergy realization — a major risk to document in the business case."
  );

  // ── MA-D4 : Synergies framework 45s ──────────────────────────────────────
  pa("MA-D4",
    "Framework : 3 catégories × 2 niveaux de validation.\n\n3 CATÉGORIES DE SYNERGIES :\n(1) Revenus — cross-sell produits et marchés, pricing power accru grâce à la taille, accès à de nouveaux segments clients.\n(2) Coûts — élimination des doublons fonctionnels (RH, IT, immobilier), économies d'achats groupés, rationalisation des fonctions support.\n(3) Financières — capacité d'endettement améliorée grâce à la taille, optimisation fiscale de groupe, accès à de meilleures conditions de crédit.\n\n2 NIVEAUX DE VALIDATION pour chaque synergie identifiée :\n(a) Qualification — timeline de réalisation (M+12, M+24, M+36), responsable interne identifié (sponsor), niveau de risque (faible/moyen/élevé).\n(b) Quantification — montant estimé en M€, one-time cost pour réaliser la synergie, NPV nette.\n\nRègle des 70% : en pratique, 70% des synergies annoncées ne se matérialisent pas dans les délais prévus. Discipline : n'inclure que les synergies coûts dans le business case initial. Les synergies revenus sont traitées comme upside optionnel.",
    "Framework: 3 categories × 2 validation levels.\n\n3 SYNERGY CATEGORIES:\n(1) Revenue — cross-sell products and markets, increased pricing power from scale, access to new customer segments.\n(2) Cost — elimination of functional duplicates (HR, IT, real estate), group purchasing savings, support function rationalization.\n(3) Financial — improved debt capacity from scale, group tax optimization, access to better credit terms.\n\n2 VALIDATION LEVELS for each identified synergy:\n(a) Qualification — realization timeline (M+12, M+24, M+36), identified internal owner (sponsor), risk level (low/medium/high).\n(b) Quantification — estimated amount in €M, one-time cost to realize the synergy, net NPV.\n\n70% Rule: in practice, 70% of announced synergies do not materialize within planned timelines. Discipline: only include cost synergies in the initial business case. Revenue synergies are treated as optional upside."
  );

  // ── OPS-D3 : Goulots entrepôt ────────────────────────────────────────────
  pa("OPS-D3",
    "Analyse des goulots d'un entrepôt à 67% d'utilisation.\n\nContexte : taux d'utilisation moyen = 10 000 / 15 000 = 67%. Attention : un taux moyen confortable peut masquer des saturations locales et horaires sévères (pics d'arrivées le matin, pic expédition en fin d'après-midi).\n\nAnalyse des 5 étapes du flux de traitement :\n(1) Réception — déchargement, vérification, scan entrée : goulot si arrivées groupées en fin de nuit.\n(2) Stockage et picking — localisation, prélèvement, acheminement vers les convoyeurs : goulot si plan de rangement non optimisé (ABC analysis absente).\n(3) Emballage et tri — conditionnement, étiquetage, tri par destination : goulot si trop de SKU ou trop de destinations.\n(4) Expédition — palettisation, chargement, scan sortie : goulot si quais insuffisants aux heures de pointe.\n(5) Systèmes IT — WMS, scanneurs, connectivité réseau : goulot invisible si le WMS tombe ou ralentit.\n\nMéthodologie recommandée : value stream mapping pour mesurer le temps de cycle et le taux d'attente à chaque étape. L'étape avec le plus grand ratio temps d'attente / temps de valeur ajoutée est le vrai goulot.",
    "Bottleneck analysis for a warehouse at 67% utilization.\n\nContext: average utilization rate = 10,000 / 15,000 = 67%. Caution: a comfortable average rate can mask severe local and time-based saturations (morning arrival peaks, late-afternoon dispatch peaks).\n\nAnalysis of 5 processing flow steps:\n(1) Reception — unloading, verification, inbound scan: bottleneck if deliveries cluster overnight.\n(2) Storage and picking — location, retrieval, routing to conveyors: bottleneck if storage layout is not optimized (ABC analysis absent).\n(3) Packing and sorting — packaging, labeling, sorting by destination: bottleneck if too many SKUs or destinations.\n(4) Dispatch — palletizing, loading, outbound scan: bottleneck if insufficient docks at peak hours.\n(5) IT systems — WMS, scanners, network connectivity: invisible bottleneck if WMS crashes or slows down.\n\nRecommended methodology: value stream mapping to measure cycle time and wait rate at each step. The step with the highest ratio of wait time to value-added time is the real bottleneck."
  );

  // ── OPS-D4 : Coût arrêts machine ─────────────────────────────────────────
  pa("OPS-D4",
    "Calcul du coût annuel des arrêts non-planifiés.\n\nHeures totales dans une année : 365 jours × 24h = 8 760h.\n\nÉtape 1 — Arrêts actuels :\n8 760h × (1 - 87%) = 8 760h × 13% = 1 139h d'arrêt par an.\n\nÉtape 2 — Arrêts autorisés (cible 95% uptime) :\n8 760h × (1 - 95%) = 8 760h × 5% = 438h d'arrêt cible.\n\nÉtape 3 — Gap d'arrêts non-planifiés à éliminer :\n1 139h - 438h = 701h à récupérer.\n\nÉtape 4 — Coût du gap :\n701h × 5 000€/h = 3 505 000€ ≈ 3.5M€/an.\n\nConclusion : le gap de 8 points de pourcentage d'uptime représente 3.5M€ de pertes annuelles. Ce chiffre constitue la borne supérieure du budget investissement maintenance préventive, GMAO ou TPM (Total Productive Maintenance) justifiable pour atteindre la cible de 95%. Tout investissement inférieur à 3.5M€ avec un ROI à 1 an est mécaniquement rentable.",
    "Annual unplanned downtime cost calculation.\n\nTotal hours in a year: 365 days × 24h = 8,760h.\n\nStep 1 — Current downtime:\n8,760h × (1 - 87%) = 8,760h × 13% = 1,139h of downtime per year.\n\nStep 2 — Allowed downtime (95% uptime target):\n8,760h × (1 - 95%) = 8,760h × 5% = 438h of target downtime.\n\nStep 3 — Unplanned downtime gap to eliminate:\n1,139h - 438h = 701h to recover.\n\nStep 4 — Gap cost:\n701h × €5,000/h = €3,505,000 ≈ €3.5M/year.\n\nConclusion: the 8-percentage-point uptime gap represents €3.5M in annual losses. This figure sets the upper bound for the justifiable investment budget in preventive maintenance, CMMS, or TPM (Total Productive Maintenance) to reach the 95% target. Any investment below €3.5M with a 1-year ROI is mechanically profitable."
  );

  // ── OPS-D5 : TIMWOOD call center ─────────────────────────────────────────
  pa("OPS-D5",
    "Application des 7 gaspillages LEAN (TIMWOOD) à un call center.\n\nT — Transport : transfert de données entre systèmes non-intégrés (CRM, ticketing, facturation) — l'agent saisit plusieurs fois la même information dans des outils différents sans passerelle.\n\nI — Inventaire : backlog de tickets non traités, file d'attente de clients en attente d'un rappel, emails non traités.\n\nM — Mouvement : navigation entre 5 à 8 écrans différents pendant un appel, alt-tab permanent entre applications disparates.\n\nW — Wait (Attente) : client en attente dans un IVR trop long, agent en attente d'une validation manager pour traiter une demande hors-standard.\n\nO — Overproduction : demandes simples qui auraient pu être résolues en self-service (FAQ, chatbot, espace client) mais arrivent quand même en live, consommant du temps agent à forte valeur.\n\nO — Over-processing : scripts imposés trop longs, checklists de conformité excessives, validation multi-niveaux qui allongent le TMA sans valeur perçue par le client.\n\nD — Défauts : erreurs de saisie, mauvaise qualification du motif d'appel, réponse incorrecte nécessitant un deuxième contact et un re-traitement complet.",
    "Application of the 7 LEAN wastes (TIMWOOD) to a call center.\n\nT — Transport: data transfer between non-integrated systems (CRM, ticketing, billing) — the agent enters the same information multiple times across different tools with no integration.\n\nI — Inventory: backlog of unprocessed tickets, queue of customers waiting for a callback, unprocessed emails.\n\nM — Motion: navigation between 5 to 8 different screens during a call, constant alt-tabbing between disparate applications.\n\nW — Waiting: customer stuck in an overly long IVR, agent waiting for manager approval to handle a non-standard request.\n\nO — Overproduction: simple requests that could have been resolved via self-service (FAQ, chatbot, customer portal) but still reach live agents, consuming high-value agent time.\n\nO — Over-processing: overly long imposed scripts, excessive compliance checklists, multi-level validations that increase AHT with no perceived value to the customer.\n\nD — Defects: data entry errors, incorrect call reason classification, wrong answer requiring a second contact and full rework."
  );

  // ── STG-D2 : Retailer vs Amazon ───────────────────────────────────────────
  pa("STG-D2",
    "Stratégie de défense en 3 horizons temporels.\n\nCOURT TERME (0-12 mois) — Renforcer l'avantage expérientiel :\nNe pas essayer de concurrencer Amazon sur le prix ou la vitesse de livraison (terrain perdu d'avance). Se concentrer sur ce que le digital ne peut pas répliquer : conseil humain expert en magasin, possibilité d'essai physique du produit, retour immédiat sans friction, Click & Collect optimisé. Programme de fidélité émotionnel (pas uniquement des points remboursables).\n\nMOYEN TERME (12-36 mois) — Construire un omnicanal authentique :\nStock unifié online/offline, commande en ligne avec retrait ou retour en magasin sans friction. Se spécialiser sur des catégories à forte expertise où Amazon reste généraliste et où le conseil humain est différenciant (sport technique, cuisine gastronomique, bricolage complexe, jardinage).\n\nLONG TERME (36 mois+) — Créer des actifs non-comparables :\nDévelopper des marques propres exclusives non référençables sur Amazon. Créer des services à valeur ajoutée (installation, maintenance par abonnement, conseil personnalisé payant). Nouer des partenariats locaux (artisans, experts, communautés).\n\nConclusion : le retailer ne doit jamais se battre sur le terrain d'Amazon. La victoire passe par les angles où Amazon est structurellement faible : la relation humaine, la confiance locale et l'expertise de niche.",
    "3-horizon defense strategy.\n\nSHORT TERM (0-12 months) — Reinforce the experiential advantage:\nDo not try to compete with Amazon on price or delivery speed (a battle already lost). Focus on what digital cannot replicate: expert human advice in-store, physical product trial, frictionless immediate returns, optimized Click & Collect. Emotional loyalty program (not just redeemable points).\n\nMEDIUM TERM (12-36 months) — Build genuine omnichannel:\nUnified online/offline inventory, frictionless order-online-pickup-or-return-in-store. Specialize in high-expertise categories where Amazon remains generalist and where human advice is differentiating (technical sports, gourmet cooking, complex DIY, gardening).\n\nLONG TERM (36+ months) — Create non-comparable assets:\nDevelop exclusive private label brands not listable on Amazon. Create value-added services (installation, subscription maintenance, paid personalized advice). Build local partnerships (craftspeople, experts, communities).\n\nConclusion: the retailer must never fight on Amazon's turf. Victory comes from angles where Amazon is structurally weak: human relationships, local trust, and niche expertise."
  );

  // ── STG-D3 : Banque vs néobanque ─────────────────────────────────────────
  pa("STG-D3",
    "3 axes de différenciation stratégique.\n\nAXE 1 — Moments de vie à fort enjeu :\nUne grande banque accompagne ses clients dans les projets complexes requérant expertise et confiance — immobilier, retraite, succession, optimisation patrimoniale, rachat de crédit. Les néobanques n'ont pas les licences, les bilans ni les conseillers pour adresser ces marchés. C'est la zone de valeur non-contestée et structurellement défendable.\n\nAXE 2 — Solidité et confiance institutionnelle :\nEn période de crise (turbulences bancaires, récession, hausse des taux), les clients arbitrent massivement vers la solidité. La garantie des dépôts, la notation crédit investment grade, et une réputation centenaire sont des actifs que les néobanques ne peuvent pas répliquer en moins de 10 ans. Ce capital confiance est le moat le plus durable.\n\nAXE 3 — Conseil humain expert pour clients patrimoniaux :\nLes clients avec un patrimoine supérieur à 100k€ valorisent l'accès à un conseiller dédié, joignable, qui connaît leur situation personnelle et fiscale dans sa globalité. Ce segment représente 20% des clients et 80% de la valeur. C'est un segment structurellement non-attaquable par les néobanques dont le modèle économique repose sur la scalabilité digitale.",
    "3 axes of strategic differentiation.\n\nAXIS 1 — High-stakes life moments:\nA major bank supports its clients through complex projects requiring expertise and trust — real estate, retirement, succession, wealth optimization, loan restructuring. Neobanks lack the licenses, balance sheets, and advisors to address these markets. This is the uncontested and structurally defensible value zone.\n\nAXIS 2 — Institutional solidity and trust:\nDuring periods of crisis (banking turbulences, recession, rate spikes), clients shift massively toward solidity. Deposit guarantees, investment-grade credit ratings, and a century-long reputation are assets that neobanks cannot replicate in under 10 years. This trust capital is the most durable moat.\n\nAXIS 3 — Expert human advice for wealth management clients:\nClients with assets above €100k value access to a dedicated, reachable advisor who knows their complete personal and tax situation. This segment represents 20% of clients and 80% of value. It is a segment structurally unassailable by neobanks whose business model rests on digital scalability."
  );

  // ── STG-D4 : OpenAI vs Microsoft ─────────────────────────────────────────
  pa("STG-D4",
    "Structure de la menace réelle en 3 niveaux.\n\n1. SUBSTITUTION DIRECTE — limitée à court terme :\nGPT-for-Word ou un équivalent ne peut pas remplacer l'infrastructure M365 (SharePoint, Teams, Exchange, Active Directory) profondément intégrée dans les entreprises. Les switching costs sont colossaux — migrations de données, requalification des équipes, reconfiguration des flux. La substitution frontale à 2-3 ans est un scénario marginal.\n\n2. COMMODITISATION DES FONCTIONS CORE — menace réelle à 3-5 ans :\nSi OpenAI permet de reproduire 80% des fonctions d'Excel ou de Word via une API à 10% du coût de M365, les fonctions premium perdent leur justification tarifaire. La menace n'est pas le remplacement mais la pression sur les prix et l'érosion des marges M365 Copilot.\n\n3. GUERRE POUR LES ENTREPRISES — M365 Copilot vs GPT-for-Work :\nMicrosoft a répondu avec Copilot intégré dans M365. Mais OpenAI peut cibler directement les DSI avec une solution verticale moins chère et plus ouverte. La vraie compétition est un jeu B2B enterprise.\n\nCONCLUSION : la vraie menace pour Microsoft est structurelle, pas frontale. Microsoft a investi 13Md$ dans OpenAI mais si OpenAI se positionne comme compétiteur direct, Microsoft perd simultanément son partenaire technologique et affronte un concurrent qui connaît ses architectures, ses failles et ses clients.",
    "Real threat structure at 3 levels.\n\n1. DIRECT SUBSTITUTION — limited in the short term:\nGPT-for-Word or an equivalent cannot replace the M365 infrastructure (SharePoint, Teams, Exchange, Active Directory) deeply embedded in enterprises. Switching costs are massive — data migrations, team retraining, workflow reconfiguration. Frontal substitution within 2-3 years is a marginal scenario.\n\n2. COMMODITIZATION OF CORE FUNCTIONS — real threat in 3-5 years:\nIf OpenAI allows replicating 80% of Excel or Word functions via an API at 10% of M365 cost, premium functions lose their pricing justification. The threat is not replacement but price pressure and erosion of M365 Copilot margins.\n\n3. ENTERPRISE BATTLE — M365 Copilot vs GPT-for-Work:\nMicrosoft has responded with Copilot integrated into M365. But OpenAI can directly target CIOs with a cheaper and more open vertical solution. The real competition is a B2B enterprise game.\n\nCONCLUSION: the real threat to Microsoft is structural, not frontal. Microsoft invested $13Bn in OpenAI, but if OpenAI positions itself as a direct competitor, Microsoft simultaneously loses its technology partner and faces a competitor that knows its architectures, its vulnerabilities, and its customers."
  );

pa('AI-D4',
    "DIAGNOSTIC ACTUEL\n" +
    "Cartographier le portefeuille : volumes contractuels, nombre de fournisseurs, poids des top-20, taux de non-conformité et coût associé. Identifier les processus manuels (revue clauses, benchmarking, renouvellements).\n\n" +
    "CAS D'USAGE IA\n" +
    "1. Extraction NLP : lecture automatique des clauses, détection d'écarts vs standards internes.\n" +
    "2. Alertes automatiques : dates d'expiration, seuils de prix, risques fournisseur.\n" +
    "3. Benchmarking prix : comparaison automatique vs marché, identification des contrats hors-marché.\n" +
    "4. Consolidation fournisseurs : clustering pour regrouper achats similaires et renégocier en volume.\n\n" +
    "ESTIMATION DES GAINS\n" +
    "Savings typiques : 3 à 8% du portefeuille achats. Sur 200 M€ de spend : 6 à 16 M€/an. Gains additionnels : réduction FTE revue contrats (-30% temps) et diminution litiges (-20%).\n\n" +
    "INVESTISSEMENT\n" +
    "Licence outil NLP/CLM : 150-300 k€/an. Intégration ERP + data : 100-200 k€ one-shot. Total : 200-500 k€/an.\n\n" +
    "RECOMMANDATION\n" +
    "GO si portefeuille > 100 M€ (ROI > 3x en an 1). Commencer par un pilote sur les 50 contrats à plus fort enjeu. Stop si portefeuille < 30 M€ (ROI insuffisant, prioriser la négociation manuelle).",
    "CURRENT DIAGNOSTIC\n" +
    "Map the portfolio: contract volumes, number of suppliers, top-20 weight, non-compliance rate and associated cost. Identify manual processes (clause review, benchmarking, renewals).\n\n" +
    "AI USE CASES\n" +
    "1. NLP extraction: automated clause reading, deviation detection vs internal standards.\n" +
    "2. Automated alerts: expiry dates, price thresholds, supplier risk signals.\n" +
    "3. Price benchmarking: automatic comparison vs market, identification of off-market contracts.\n" +
    "4. Supplier consolidation: clustering to group similar purchases and renegotiate at volume.\n\n" +
    "ESTIMATED GAINS\n" +
    "Typical savings: 3-8% of procurement portfolio. On €200M spend: €6-16M/year. Additional gains: -30% FTE time on contract review, -20% on disputes.\n\n" +
    "INVESTMENT\n" +
    "NLP/CLM tool license: €150-300K/year. ERP + data integration: €100-200K one-shot. Total: €200-500K/year.\n\n" +
    "RECOMMENDATION\n" +
    "GO if portfolio > €100M (ROI > 3x in year 1). Start with a pilot on the 50 highest-stakes contracts. Stop if portfolio < €30M (insufficient ROI, prioritize manual negotiation)."
  );

  // ── AI-D5 — Translation : recall vs precision ──
  pa('AI-D5',
    "RECALL (SENSIBILITE) = 94%\n" +
    "Sur 100 fraudes réelles, le modèle en détecte 94 et en manque 6. Le recall mesure la capacité à ne pas laisser passer une fraude. Un recall élevé est prioritaire quand le coût d'une fraude non détectée est très élevé.\n\n" +
    "PRECISION = 88%\n" +
    "Sur 100 alertes déclenchées, 88 sont de vraies fraudes et 12 sont des fausses alertes (faux positifs). Une precision basse génère du travail d'investigation inutile et dégrade l'expérience client si des transactions légitimes sont bloquées.\n\n" +
    "IMPLICATION PORTEFEUILLE\n" +
    "Sur un portefeuille de 1 Md€ exposé, les 6% de fraudes non détectées représentent environ 60 M€ de pertes potentielles annuelles (sous hypothèse de taux de fraude de 1%).\n\n" +
    "TENSION RECALL / PRECISION\n" +
    "Abaisser le seuil de détection améliore le recall mais dégrade la precision (plus de fausses alertes). La calibration du seuil dépend de la priorité client : minimiser les pertes fraude (favoriser recall) ou minimiser les frictions client (favoriser precision).\n\n" +
    "RECOMMANDATION\n" +
    "Présenter les deux métriques à l'interviewer comme des leviers opposés. En contexte banking high-value, le recall de 94% est excellent ; la precision de 88% est acceptable mais peut être améliorée par post-filtrage.",
    "RECALL (SENSITIVITY) = 94%\n" +
    "Out of 100 actual fraud cases, the model detects 94 and misses 6. Recall measures the ability not to let fraud slip through. High recall is a priority when the cost of an undetected fraud is very high.\n\n" +
    "PRECISION = 88%\n" +
    "Out of 100 triggered alerts, 88 are true fraud cases and 12 are false positives. Low precision creates unnecessary investigation workload and degrades customer experience if legitimate transactions are blocked.\n\n" +
    "PORTFOLIO IMPLICATION\n" +
    "On a €1B exposed portfolio, the 6% of undetected fraud represents approximately €60M in potential annual losses (assuming a 1% fraud rate).\n\n" +
    "RECALL / PRECISION TENSION\n" +
    "Lowering the detection threshold improves recall but degrades precision (more false positives). Threshold calibration depends on client priority: minimize fraud losses (favour recall) or minimize customer friction (favour precision).\n\n" +
    "RECOMMENDATION\n" +
    "Present both metrics to the interviewer as opposing levers. In a high-value banking context, 94% recall is excellent; 88% precision is acceptable but can be improved through post-filtering."
  );

  // ── AI-D6 — Structuring : risques ML vs actuaires ──
  pa('AI-D6',
    "RISQUES DU REMPLACEMENT\n" +
    "1. Réglementaire : l'ACPR (superviseur français) exige l'explicabilité des décisions tarifaires. Les modèles boite noire (XGBoost, réseaux de neurones) peuvent être non conformes sans couche XAI.\n" +
    "2. Biais et discrimination : un modèle entrainé sur données historiques peut perpétuer des discriminations (genre, zone géographique) et exposer l'assureur à des risques juridiques.\n" +
    "3. Fragilité hors-distribution : les modèles ML dégradent leur performance sur des événements non observés en training (crise, pandémie, risques émergents) là où un actuaire raisonne.\n" +
    "4. Remplacement partiel seulement : la tarification de risques rares ou nouveaux (cyber, pandémie) nécessite un jugement expert non remplaçable.\n" +
    "5. Résistance interne : perte de savoir-faire actuariel difficile à reconstituer si le modèle échoue.\n\n" +
    "CONDITIONS DE SUCCES\n" +
    "Modèles interprétables (SHAP, LIME, GAM) pour satisfaire l'ACPR. Validation actuarielle obligatoire sur chaque segment. Déploiement graduel : commencer par les lignes de produits standardisées (auto, habitation) avant les risques complexes. Gouvernance data robuste : qualité et fraicheur des données en production.\n\n" +
    "RECOMMANDATION\n" +
    "Augmenter les actuaires avec l'IA, pas les remplacer. Les actuaires se concentrent sur la modélisation des risques extrêmes, la validation des modèles ML et la relation réglementaire. Horizon réaliste : 30-40% de gain de productivité actuarielle, pas de suppression de poste.",
    "RISKS OF REPLACEMENT\n" +
    "1. Regulatory: the ACPR (French supervisor) requires explainability of pricing decisions. Black-box models (XGBoost, neural networks) may be non-compliant without an XAI layer.\n" +
    "2. Bias and discrimination: a model trained on historical data may perpetuate discrimination (gender, geography) and expose the insurer to legal risk.\n" +
    "3. Out-of-distribution fragility: ML models degrade on events not observed during training (crises, pandemics, emerging risks) where an actuary can reason from first principles.\n" +
    "4. Only partial replacement: pricing rare or novel risks (cyber, pandemic) requires expert judgment that cannot be replaced.\n" +
    "5. Internal resistance: loss of actuarial know-how that is difficult to reconstitute if the model fails.\n\n" +
    "SUCCESS CONDITIONS\n" +
    "Interpretable models (SHAP, LIME, GAM) to satisfy the ACPR. Mandatory actuarial validation on each segment. Gradual deployment: start with standardized product lines (auto, home) before complex risks. Robust data governance: quality and freshness of production data.\n\n" +
    "RECOMMENDATION\n" +
    "Augment actuaries with AI, do not replace them. Actuaries focus on extreme risk modelling, ML model validation and the regulatory relationship. Realistic horizon: 30-40% actuarial productivity gain, no headcount reduction."
  );

  // ── AI-D7 — Brainstorming : 6 cas IA générative en banque d'investissement ──
  pa('AI-D7',
    "6 CAS D'USAGE DE L'IA GENERATIVE EN BANQUE D'INVESTISSEMENT\n\n" +
    "1. PITCHBOOKS AUTOMATIQUES\n" +
    "Génération de slides personnalisées à partir de templates internes + données financières du client cible. Réduit de 60-70% le temps analyst sur les pitches répétitifs.\n\n" +
    "2. ANALYSE DE DUE DILIGENCE\n" +
    "Lecture et synthèse automatique de data rooms (contrats, états financiers, NDA). Extraction des clauses à risque, points d'attention, KPIs financiers clés sur des milliers de pages en minutes.\n\n" +
    "3. SYNTHESE EARNINGS CALLS\n" +
    "Transcription et résumé structuré des earnings calls (guidances, surprises, langage du management). Alertes automatiques sur déviations vs consensus pour les équipes sales & trading.\n\n" +
    "4. CODING ASSISTANCE POUR LES QUANTS\n" +
    "Copilote de code (Python, R, MATLAB) pour la modélisation de produits dérivés, backtesting de stratégies, génération de scripts de traitement de données. Accélère les cycles de recherche.\n\n" +
    "5. CLIENT INTELLIGENCE PERSONNALISEE\n" +
    "Génération de briefings client avant chaque réunion : actualité récente, mouvements de portefeuille, opportunités de cross-sell identifiées. Améliore la qualité des interactions relationship managers.\n\n" +
    "6. REGULATORY REPORTING\n" +
    "Automatisation de la production de rapports BCBS 239, EMIR, MiFID II. Réconciliation des données réglementaires, détection d'anomalies et génération automatique des formulaires de déclaration.",
    "6 GENERATIVE AI USE CASES IN INVESTMENT BANKING\n\n" +
    "1. AUTOMATED PITCHBOOKS\n" +
    "Personalised slide generation from internal templates + target company financial data. Reduces analyst time on repetitive pitches by 60-70%.\n\n" +
    "2. DUE DILIGENCE DOCUMENT ANALYSIS\n" +
    "Automated reading and synthesis of data rooms (contracts, financial statements, NDAs). Extraction of risk clauses, red flags and key financial KPIs across thousands of pages in minutes.\n\n" +
    "3. EARNINGS CALL SUMMARISATION\n" +
    "Transcription and structured summary of earnings calls (guidance, surprises, management language). Automated alerts on deviations vs consensus for sales and trading teams.\n\n" +
    "4. CODING ASSISTANCE FOR QUANTS\n" +
    "Code copilot (Python, R, MATLAB) for derivatives modelling, strategy backtesting and data processing script generation. Accelerates research cycles.\n\n" +
    "5. PERSONALISED CLIENT INTELLIGENCE\n" +
    "Generation of client briefings before each meeting: recent news, portfolio movements, identified cross-sell opportunities. Improves relationship manager interaction quality.\n\n" +
    "6. REGULATORY REPORTING\n" +
    "Automation of BCBS 239, EMIR and MiFID II report production. Regulatory data reconciliation, anomaly detection and automated generation of declaration forms."
  );

  // ── EXH-D3 — Exhibit : Waterfall EBITDA vs EBIT ──
  pa('EXH-D3',
    "CALCULS\n" +
    "EBITDA = Revenue - COGS - SG&A = 100 - 40 - 25 = 35 (marge EBITDA : 35%)\n" +
    "EBIT = EBITDA - D&A + Other = 35 - 10 + 5 = 30 (marge EBIT : 30%)\n\n" +
    "ANALYSE\n" +
    "1. Marge EBITDA de 35% : niveau solide, au-dessus de la médiane sectorielle pour la plupart des industries B2B. Indique une bonne maitrise des coûts opérationnels courants.\n" +
    "2. D&A élevée (-10, soit 10% du revenue) : signal d'une base d'actifs intensifs (industrie manufacturière, infrastructure, immobilier). À creuser : est-ce du capex de croissance ou de maintenance ?\n" +
    "3. Other Income +5 (5% du revenue) : élément non-récurrent probable (cession d'actif, gain de change, reprise de provision). À exclure de l'analyse normative pour obtenir l'EBIT récurrent = 25 (marge 25%).\n\n" +
    "CONCLUSION\n" +
    "La performance opérationnelle récurrente est de 25% de marge EBIT normalisée. Le chiffre de 30% est flatté par un one-off. Prochaine question à poser : nature du Other Income et niveau de capex maintenance.",
    "CALCULATIONS\n" +
    "EBITDA = Revenue - COGS - SG&A = 100 - 40 - 25 = 35 (EBITDA margin: 35%)\n" +
    "EBIT = EBITDA - D&A + Other = 35 - 10 + 5 = 30 (EBIT margin: 30%)\n\n" +
    "ANALYSIS\n" +
    "1. 35% EBITDA margin: solid level, above the sector median for most B2B industries. Indicates good control of current operating costs.\n" +
    "2. High D&A (-10, i.e. 10% of revenue): signal of an asset-intensive base (manufacturing, infrastructure, real estate). Worth exploring: is this growth or maintenance capex?\n" +
    "3. Other Income +5 (5% of revenue): likely non-recurring item (asset disposal, FX gain, provision reversal). Must be excluded from normative analysis to obtain recurring EBIT = 25 (25% margin).\n\n" +
    "CONCLUSION\n" +
    "Recurring operating performance is a 25% normalised EBIT margin. The 30% figure is flattered by a one-off. Next question to ask: nature of Other Income and maintenance capex level."
  );

  // ── EXH-D4 — Exhibit : Scatter GDP vs consulting demand ──
  pa('EXH-D4',
    "LECTURE DU SCATTER\n" +
    "Corrélation positive générale entre croissance PIB et demande consulting : les marchés à forte croissance génèrent davantage de transformation, donc davantage de missions.\n\n" +
    "ANALYSE DES OUTLIERS\n" +
    "Allemagne (PIB fort, demande faible) : anomalie structurelle. La culture Mittelstand valorise l'autosuffisance et la discrétion. Les entreprises allemandes font moins appel à des cabinets externes, préférant internaliser l'expertise. Signal : marché difficile à pénétrer, nécessite une approche par les grandes corporates et les associations professionnelles.\n\n" +
    "Inde (PIB fort, demande forte) : marché prioritaire pour l'expansion. Double moteur : croissance économique rapide + appétit fort pour l'expertise externe dans les transformations digitales et les fusions-acquisitions transfrontalières.\n\n" +
    "France (PIB faible, demande moyenne) : marché résilient et non-cyclique. La demande consulting ne suit pas le PIB, probablement soutenue par les réformes réglementaires, la transformation du secteur public et la compliance. Valeur de portefeuille : stabilisateur en période de ralentissement.\n\n" +
    "RECOMMANDATION STRATEGIQUE\n" +
    "Prioriser l'expansion en Inde (croissance + appétit). Maintenir la France comme base stable. Adapter l'approche Allemagne (partenariats locaux, offres spécifiques PME).",
    "READING THE SCATTER\n" +
    "Overall positive correlation between GDP growth and consulting demand: high-growth markets generate more transformation activity and therefore more assignments.\n\n" +
    "OUTLIER ANALYSIS\n" +
    "Germany (high GDP, low demand): structural anomaly. Mittelstand culture values self-sufficiency and discretion. German companies rely less on external consultants, preferring to internalise expertise. Signal: hard-to-penetrate market, requires an approach through large corporates and professional associations.\n\n" +
    "India (high GDP, high demand): priority market for expansion. Dual engine: rapid economic growth + strong appetite for external expertise in digital transformations and cross-border M&A.\n\n" +
    "France (low GDP, medium demand): resilient and non-cyclical market. Consulting demand does not track GDP, likely sustained by regulatory reforms, public sector transformation and compliance. Portfolio value: stabiliser during slowdowns.\n\n" +
    "STRATEGIC RECOMMENDATION\n" +
    "Prioritise expansion in India (growth + appetite). Maintain France as a stable base. Adapt Germany approach (local partnerships, SME-specific offerings)."
  );

  // ── EXH-D5 — Exhibit : Parts de marché 2020→2024 ──
  pa('EXH-D5',
    "5 CONCLUSIONS CLES\n\n" +
    "1. CONSOLIDATION DU MARCHE : la part des Autres recule de 15% à 14%, signalant une concentration en cours. Les acteurs établis captent la croissance aux dépens des petits.\n\n" +
    "2. EROSION MARQUEE DU LEADER A : perte de 7 points en 4 ans (45% → 38%), soit environ -1,75 pt/an. Si la tendance se poursuit, A passe sous le seuil psychologique de 35% dans 2 ans, fragilisant son leadership.\n\n" +
    "3. B PLUS MENAÇANT QUE C : B gagne +5 pts (25% → 30%) contre +3 pts pour C (15% → 18%). B croît presque 2x plus vite et s'approche de la zone de leadership. C est un challenger secondaire.\n\n" +
    "4. B ET C CAPTURES LA CROISSANCE D'A : les 7 pts perdus par A se retrouvent presque intégralement chez B (+5) et C (+3), moins 1 pt d'erosion des Autres. La redistribution est directe.\n\n" +
    "5. SEUIL CRITIQUE POUR A : si A franchit 35%, B peut revendiquer un leadership partagé et casser la dynamique commerciale (référencements, pricing power, talents).\n\n" +
    "IMPLICATIONS STRATEGIQUES POUR A\n" +
    "Analyser d'urgence les raisons de l'érosion (prix, innovation, distribution, satisfaction). Envisager une réponse offensive : acquisition de C, relancement produit ou guerre des prix ciblée sur les segments où B progresse.",
    "5 KEY CONCLUSIONS\n\n" +
    "1. MARKET CONSOLIDATION: Others' share falls from 15% to 14%, signalling ongoing concentration. Established players are capturing growth at the expense of smaller ones.\n\n" +
    "2. MARKED EROSION OF LEADER A: loss of 7 points in 4 years (45% to 38%), approximately -1.75 pts/year. If the trend continues, A falls below the psychological 35% threshold in 2 years, weakening its leadership.\n\n" +
    "3. B MORE THREATENING THAN C: B gains +5 pts (25% to 30%) vs. +3 pts for C (15% to 18%). B grows almost 2x faster and is approaching the leadership zone. C is a secondary challenger.\n\n" +
    "4. B AND C CAPTURE A'S GROWTH: the 7 pts lost by A are almost entirely captured by B (+5) and C (+3), minus 1 pt of Others' erosion. The redistribution is direct.\n\n" +
    "5. CRITICAL THRESHOLD FOR A: if A crosses 35%, B can claim shared leadership and break commercial dynamics (listings, pricing power, talent attraction).\n\n" +
    "STRATEGIC IMPLICATIONS FOR A\n" +
    "Urgently analyse the reasons for erosion (pricing, innovation, distribution, satisfaction). Consider an offensive response: acquisition of C, product relaunch or targeted price war on segments where B is gaining."
  );

  // ── BR-D5 — Brainstorming : 6 leviers monétisation post-vente auto ──
  pa('BR-D5',
    "6 LEVIERS DE MONETISATION POST-VENTE POUR UN CONSTRUCTEUR AUTO\n\n" +
    "1. SERVICES CONNECTES PAR ABONNEMENT\n" +
    "Navigation premium, assistance conducteur avancée (ADAS upgrades OTA), wi-fi embarqué, intégration streaming. Modèle SaaS : 10-30€/mois. Exemple Tesla Full Self-Driving, BMW Connected Drive.\n\n" +
    "2. MAINTENANCE PREDICTIVE\n" +
    "Analyse télématique des données véhicule pour anticiper pannes et proposer des rendez-vous atelier au bon moment. Augmente la fréquence de passage en concession officielle et le panier moyen pièces/main-d'oeuvre.\n\n" +
    "3. ASSURANCE TELEMATIQUE\n" +
    "Offre d'assurance basée sur l'usage (UBI : Usage-Based Insurance). Le constructeur collecte les données de conduite et propose une assurance compétitive aux bons conducteurs. Marché estimé à 100 Md$ à 2030.\n\n" +
    "4. FINANCEMENT CAPTIVE\n" +
    "LOA, LLD, crédit-auto via la filiale financière du groupe. Marges financières supérieures à la vente nette. Levier de rétention : le client reste dans l'écosystème constructeur pour le renouvellement.\n\n" +
    "5. MARKETPLACE ACCESSOIRES ET PERSONNALISATION\n" +
    "Plateforme en ligne de vente d'accessoires certifiés, customisation esthétique, options activables à distance (sièges chauffants, puissance moteur). Marge brute 40-60% vs 10-15% sur véhicule neuf.\n\n" +
    "6. DONNEES B2B ANONYMISEES\n" +
    "Vente de données de mobilité agrégées et anonymisées à des acteurs tiers (collectivités, assureurs, urbanistes, annonceurs géolocalisés). Flux récurrent à très haute marge, sous réserve RGPD.",
    "6 POST-SALE MONETISATION LEVERS FOR AN AUTOMOTIVE MANUFACTURER\n\n" +
    "1. CONNECTED SERVICES BY SUBSCRIPTION\n" +
    "Premium navigation, advanced driver assistance (OTA ADAS upgrades), in-car wi-fi, streaming integration. SaaS model: €10-30/month. Examples: Tesla Full Self-Driving, BMW Connected Drive.\n\n" +
    "2. PREDICTIVE MAINTENANCE\n" +
    "Telematic analysis of vehicle data to anticipate breakdowns and propose workshop appointments at the right time. Increases official dealership visit frequency and average parts/labour basket.\n\n" +
    "3. TELEMATICS-BASED INSURANCE\n" +
    "Usage-Based Insurance (UBI) offering. The manufacturer collects driving data and offers competitive insurance to good drivers. Market estimated at $100B by 2030.\n\n" +
    "4. CAPTIVE FINANCE\n" +
    "Leasing (PCP, PCH), auto credit via the group's financial subsidiary. Financial margins higher than outright sale. Retention lever: the customer stays in the manufacturer ecosystem for renewal.\n\n" +
    "5. ACCESSORIES AND PERSONALISATION MARKETPLACE\n" +
    "Online platform for certified accessories, aesthetic customisation, remotely activatable options (heated seats, engine power). Gross margin 40-60% vs 10-15% on new vehicle.\n\n" +
    "6. ANONYMISED B2B DATA\n" +
    "Sale of aggregated and anonymised mobility data to third parties (local authorities, insurers, urban planners, geo-targeted advertisers). Recurring high-margin stream, subject to GDPR compliance."
  );

  // ── BR-D6 — Brainstorming : 5 risques IA générative en RH ──
  pa('BR-D6',
    "5 RISQUES DU DEPLOIEMENT D'IA GENERATIVE EN RH\n\n" +
    "1. DISCRIMINATION ALGORITHMIQUE AU RECRUTEMENT\n" +
    "Un modele entraine sur des CV historiques reproduit les biais de sélection passés (genre, origine, école). Risque juridique fort (discrimination à l'embauche, article L.1132-1 du Code du travail) et risque de réputation. Obligation de démontrabilité et d'audit régulier.\n\n" +
    "2. CONFIDENTIALITE DES DONNEES ET FUITE VERS DES SERVEURS TIERS\n" +
    "Les outils GenAI grand public (ChatGPT, Copilot non sécurisé) peuvent ingérer des données personnelles de salariés et les exposer en dehors du SI de l'entreprise. Violation potentielle du RGPD (données sensibles catégorie 9 : santé, syndicats).\n\n" +
    "3. DESHUMANISATION DU LIEN RH\n" +
    "L'automatisation des entretiens, feedbacks et décisions de mobilité interne réduit la qualité de la relation managériale. Risque de désinvestissement des équipes et de perte de confiance dans la fonction RH.\n\n" +
    "4. RESISTANCE AU CHANGEMENT ET RISQUE SOCIAL\n" +
    "Perception par les salariés d'une automatisation menaçant les emplois RH. Risque de conflit social, d'actions syndicales ou de mouvement collectif contre le déploiement. Nécessite une conduite du changement structurée.\n\n" +
    "5. CONFORMITE ET AUDITABILITE CNIL / CODE DU TRAVAIL\n" +
    "Les décisions RH automatisées (scoring candidat, évaluation performance) doivent être explicables et contestables (droit à l'explication RGPD art. 22). La CNIL peut sanctionner jusqu'à 4% du CA mondial. Obligation de tenir un registre des traitements IA.",
    "5 RISKS OF GENERATIVE AI DEPLOYMENT IN HR\n\n" +
    "1. ALGORITHMIC DISCRIMINATION IN RECRUITMENT\n" +
    "A model trained on historical CVs reproduces past selection biases (gender, origin, school). Strong legal risk (hiring discrimination) and reputational risk. Demonstrability and regular auditing obligations.\n\n" +
    "2. DATA CONFIDENTIALITY AND LEAKAGE TO THIRD-PARTY SERVERS\n" +
    "Consumer GenAI tools (unprotected ChatGPT, Copilot) may ingest employee personal data and expose it outside the company's information system. Potential GDPR violation (sensitive data category 9: health, union membership).\n\n" +
    "3. DEHUMANISATION OF THE HR RELATIONSHIP\n" +
    "Automating interviews, feedback and internal mobility decisions reduces the quality of the managerial relationship. Risk of team disengagement and loss of trust in the HR function.\n\n" +
    "4. CHANGE RESISTANCE AND SOCIAL RISK\n" +
    "Employee perception that automation threatens HR jobs. Risk of labour disputes, union action or collective movement against the deployment. Requires structured change management.\n\n" +
    "5. CNIL / LABOUR CODE COMPLIANCE AND AUDITABILITY\n" +
    "Automated HR decisions (candidate scoring, performance evaluation) must be explainable and contestable (GDPR right to explanation, art. 22). The CNIL can fine up to 4% of global revenue. Obligation to maintain an AI processing register."
  );

  // ── BR-D7 — Brainstorming : réduction gaspillage alimentaire fast-food ──
  pa('BR-D7',
    "OBJECTIF : -30% DE GASPILLAGE ALIMENTAIRE — 3 CATEGORIES\n\n" +
    "A. PREVENTION PAR LA PREVISION\n" +
    "Forecasting IA : modeles de prévision de la demande horaire intégrant météo, événements locaux, historique de vente. Réduction de la surproduction de 20 à 40% selon les pilots observés dans le secteur.\n" +
    "Production à la demande : réduire les lots de cuisson précautionnaires, allonger les cycles de réapprovisionnement en cuisine grâce à une meilleure visibilité.\n\n" +
    "B. VALORISATION DES INVENDUS\n" +
    "Partenariat Too Good To Go ou application maison : vente des invendus du soir à prix réduit 1-2h avant fermeture. Génère du revenu additionnel tout en évitant la mise en déchets.\n" +
    "Don alimentaire : convention avec Banques Alimentaires pour les invendus non commercialisables. Avantage fiscal (déduction 60% de la valeur du don) et bénéfice image.\n\n" +
    "C. AMELIORATION DES OPERATIONS\n" +
    "Traçabilité déchets avec pesée systématique par poste de travail : identifier les étapes de la chaîne qui génèrent le plus de pertes (épluchage, découpe, cuisson, service).\n" +
    "Formation des équipes : protocoles de FIFO (premier entré, premier sorti), gestion des dates de péremption, standardisation des portions.\n\n" +
    "SEQUENCEMENT\n" +
    "Commencer par le forecasting IA (impact le plus fort) et la traçabilité (diagnostic de base). Puis déployer les partenariats invendus. Horizon 12 mois pour atteindre -30%.",
    "OBJECTIVE: -30% FOOD WASTE — 3 CATEGORIES\n\n" +
    "A. PREVENTION THROUGH FORECASTING\n" +
    "AI forecasting: demand prediction models integrating weather, local events and sales history. Overproduction reduction of 20-40% according to sector pilots.\n" +
    "Demand-driven production: reduce precautionary cooking batches, extend kitchen replenishment cycles with better visibility.\n\n" +
    "B. UNSOLD ITEM VALORISATION\n" +
    "Too Good To Go partnership or in-house app: sale of evening unsold items at reduced price 1-2 hours before closing. Generates additional revenue while avoiding waste.\n" +
    "Food donation: agreement with food banks for non-commercialisable unsold items. Tax benefit (60% deduction of donation value) and image benefit.\n\n" +
    "C. OPERATIONS IMPROVEMENT\n" +
    "Waste tracking with systematic weighing by workstation: identify the chain steps generating the most losses (peeling, cutting, cooking, service).\n" +
    "Team training: FIFO protocols (first in, first out), expiry date management, portion standardisation.\n\n" +
    "SEQUENCING\n" +
    "Start with AI forecasting (highest impact) and waste tracking (baseline diagnostic). Then deploy unsold partnerships. 12-month horizon to achieve -30%."
  );

  // ── SYN-D4 — Synthesis : growth case 3 leviers ──
  pa('SYN-D4',
    "SCRIPT ANSWER-FIRST (30 secondes)\n\n" +
    "Recommandation : les 3 leviers génèrent 26 M€ de gains cumulés à horizon 18 mois.\n\n" +
    "SEQUENCEMENT OPTIMAL\n" +
    "Etape 1 — Levier 3 en priorité (3 M€ en 3 mois) : quick win qui démontre la faisabilité, finance les investissements des leviers suivants et crée une dynamique positive avec le management.\n" +
    "Etape 2 — Levier 1 en parallèle dès le mois 2 (8 M€ en 6 mois) : impact fort et délai court, à lancer rapidement après la validation du levier 3.\n" +
    "Etape 3 — Levier 2 sur le moyen terme (15 M€ en 18 mois) : le plus grand potentiel mais le délai le plus long, à préparer en parallèle sans attendre.\n\n" +
    "REGLE D'EXECUTION\n" +
    "Ne jamais séquencer uniquement en série : L1 et L2 peuvent être lancés en parallèle dès le mois 2. Le séquencement proposé maximise le NPV des flux de trésorerie et minimise le risque de retard.\n\n" +
    "EN UNE PHRASE\n" +
    "26 M€ à 18 mois, quick win L3 d'abord pour créer l'élan, L1 et L2 en parallèle pour maximiser la valeur.",
    "ANSWER-FIRST SCRIPT (30 seconds)\n\n" +
    "Recommendation: the 3 levers generate €26M in cumulative gains over an 18-month horizon.\n\n" +
    "OPTIMAL SEQUENCING\n" +
    "Step 1 — Lever 3 first (€3M in 3 months): quick win that demonstrates feasibility, funds investment for subsequent levers and creates positive management momentum.\n" +
    "Step 2 — Lever 1 in parallel from month 2 (€8M in 6 months): strong impact and short timeline, to be launched quickly after Lever 3 validation.\n" +
    "Step 3 — Lever 2 over the medium term (€15M in 18 months): largest potential but longest timeline, to be prepared in parallel without waiting.\n\n" +
    "EXECUTION RULE\n" +
    "Never sequence purely in series: L1 and L2 can be launched in parallel from month 2. The proposed sequencing maximises NPV of cash flows and minimises delay risk.\n\n" +
    "IN ONE SENTENCE\n" +
    "€26M at 18 months, quick win L3 first to build momentum, L1 and L2 in parallel to maximise value."
  );

  // ── SYN-D5 — Synthesis : rattraper l'absence de quantification ──
  pa('SYN-D5',
    "SCRIPT DE RATTRAPAGE — QUANTIFICATION EN SYNTHESE FINALE\n\n" +
    "PRINCIPE\n" +
    "Ne pas s'excuser de l'absence de chiffres : intégrer les estimations directement dans la synthèse, avec les mots de précaution appropriés.\n\n" +
    "FORMULATION TYPE\n" +
    "'Pour mettre des chiffres sur cette structure : sous hypothèse que [donnée de l'énoncé], le levier A représente de l'ordre de X M€ par an, le levier B environ Y M€. Au total, l'impact potentiel est de l'ordre de Z M€, à affiner lors de la phase de due diligence.'\n\n" +
    "MOTS A UTILISER\n" +
    "'De l'ordre de', 'sous hypothèse que', 'en première approximation', 'à affiner', 'fourchette indicative'. Ces formulations montrent la rigueur sans prétendre à une précision non justifiée.\n\n" +
    "UTILISER LES CHIFFRES DE L'ENONCE\n" +
    "Toujours ancrer les estimations sur les données fournies par l'interviewer. Ne jamais inventer une base de calcul. Si aucun chiffre n'est disponible, poser une hypothèse explicite et demander confirmation.\n\n" +
    "REGLE cabinet de conseil\n" +
    "Une synthèse sans chiffre n'est pas une synthèse : c'est une liste. L'objectif d'une synthèse est de donner une recommandation actionnelle avec un ordre de grandeur de l'enjeu. Sans chiffre, le client ne peut pas décider.",
    "RECOVERY SCRIPT — QUANTIFICATION IN FINAL SYNTHESIS\n\n" +
    "PRINCIPLE\n" +
    "Do not apologise for the absence of numbers: integrate estimates directly into the synthesis with appropriate qualification language.\n\n" +
    "TEMPLATE PHRASING\n" +
    "'To put numbers on this structure: assuming [data from the case], lever A represents in the order of €XM per year, lever B approximately €YM. In total, the potential impact is in the order of €ZM, to be refined during the due diligence phase.'\n\n" +
    "WORDS TO USE\n" +
    "'In the order of', 'assuming that', 'as a first approximation', 'to be refined', 'indicative range'. These formulations demonstrate rigour without claiming unjustified precision.\n\n" +
    "USE THE CASE'S OWN NUMBERS\n" +
    "Always anchor estimates on data provided by the interviewer. Never invent a calculation base. If no numbers are available, state an explicit assumption and request confirmation.\n\n" +
    "cabinet de conseil RULE\n" +
    "A synthesis without numbers is not a synthesis: it is a list. The goal of a synthesis is to give an actionable recommendation with an order of magnitude of the stakes. Without numbers, the client cannot decide."
  );

  // ── SYN-D6 — Synthesis : one more minute, profitability ──
  pa('SYN-D6',
    "SCRIPT COMPLET — SYNTHESE 60 SECONDES\n\n" +
    "[0-15s] SITUATION\n" +
    "'Ce cas montre un problème de coûts, pas de revenus : le revenue est stable, donc la dégradation de la profitabilité vient intégralement d'une hausse des coûts énergie de 20 M€.'\n\n" +
    "[15-35s] 3 ACTIONS COURT TERME\n" +
    "'En court terme, trois actions : un, renégocier immédiatement les contrats énergie — chez les grands industriels, des économies de 5 à 10% sont atteignables en 3 mois par mise en concurrence. Deux, lancer un audit d'efficience énergétique — quick wins sur l'éclairage, la climatisation, les équipements non critiques. Trois, explorer la substitution énergétique là où elle est techniquement faisable.'\n\n" +
    "[35-50s] MOYEN TERME\n" +
    "'À moyen terme, mettre en place un hedging sur les prix de l'énergie pour absorber la volatilité et sécuriser les marges.'\n\n" +
    "[50-60s] IMPACT FINANCIER\n" +
    "'L'objectif est de récupérer 10 à 15 M€ sur les 20 M€ de dérive dans les 12 prochains mois, ce qui ramènerait la marge opérationnelle à un niveau proche du niveau historique.'\n\n" +
    "POINTS DE STYLE\n" +
    "Toujours chiffrer l'objectif final. Ne pas se perdre dans les détails. Finir sur l'impact business, pas sur la liste des actions.",
    "FULL SCRIPT — 60-SECOND SYNTHESIS\n\n" +
    "[0-15s] SITUATION\n" +
    "'This case shows a cost problem, not a revenue problem: revenue is stable, so the profitability deterioration comes entirely from a €20M energy cost increase.'\n\n" +
    "[15-35s] 3 SHORT-TERM ACTIONS\n" +
    "'In the short term, three actions: one, immediately renegotiate energy contracts — for large industrials, savings of 5-10% are achievable in 3 months through competitive tendering. Two, launch an energy efficiency audit — quick wins on lighting, air conditioning and non-critical equipment. Three, explore energy substitution where technically feasible.'\n\n" +
    "[35-50s] MEDIUM TERM\n" +
    "'In the medium term, implement energy price hedging to absorb volatility and protect margins.'\n\n" +
    "[50-60s] FINANCIAL IMPACT\n" +
    "'The objective is to recover €10-15M out of the €20M cost drift in the next 12 months, which would bring the operating margin back close to its historical level.'\n\n" +
    "STYLE POINTS\n" +
    "Always quantify the final objective. Do not get lost in details. Finish on the business impact, not the action list."
  );

  // ── REC-D2 — Recommendation : Acquisition vs Build ──
  pa('REC-D2',
    "TABLEAU COMPARATIF\n" +
    "Acquisition : 50 M€, disponible en 6 mois, certitude élevée (actifs tangibles existants), TCO 3 ans = 50 M€ + intégration (~5 M€) = 55 M€.\n" +
    "Build interne : 20 M€, disponible en 24 mois, certitude faible (délais tech, recrutement), TCO 3 ans = 20 M€ + coûts opex récurrents + risque de dépassement = 30-45 M€.\n\n" +
    "VALEUR DU TIME-TO-MARKET\n" +
    "Si la capacité génère 10 M€/an de valeur (nouvelles ventes, économies, etc.), l'écart de 18 mois entre build et acquire représente 15 M€ de valeur non capturée. Le coût réel du build devient 20 + 15 = 35 M€, soit seulement 15 M€ de moins que l'acquisition.\n" +
    "En ajoutant le risque d'échec du build (probabilité estimée 30-50% dans les projets tech), la valeur espérée du build est encore plus faible.\n\n" +
    "RECOMMANDATION\n" +
    "Acquérir si : (1) les actifs tangibles de la startup sont avérés et transférables, (2) le time-to-market est stratégique pour le business, (3) l'équipe fondatrice est rétentionnable.\n" +
    "Build si : les besoins sont très spécifiques au contexte interne et non couverts par la startup, ou si l'évaluation à 50 M€ est excessive vs les actifs réels.\n\n" +
    "RECOMMANDATION FINALE\n" +
    "Acquérir. 50 M€ est justifiable si le time-to-market vaut > 10 M€/an. Lancer la due diligence en priorité sur la qualité du code, la rétention de l'équipe et la propriété intellectuelle.",
    "COMPARISON TABLE\n" +
    "Acquisition: €50M, available in 6 months, high certainty (existing tangible assets), 3-year TCO = €50M + integration (~€5M) = €55M.\n" +
    "Internal build: €20M, available in 24 months, low certainty (tech delays, recruitment), 3-year TCO = €20M + recurring opex + overrun risk = €30-45M.\n\n" +
    "TIME-TO-MARKET VALUE\n" +
    "If the capability generates €10M/year in value (new sales, savings, etc.), the 18-month gap between build and acquire represents €15M in uncaptured value. The true cost of build becomes €20M + €15M = €35M, only €15M less than acquisition.\n" +
    "Adding the build failure risk (estimated 30-50% probability in tech projects), the expected value of build is even lower.\n\n" +
    "RECOMMENDATION\n" +
    "Acquire if: (1) the startup's tangible assets are proven and transferable, (2) time-to-market is strategically critical to the business, (3) the founding team is retainable.\n" +
    "Build if: requirements are very specific to the internal context and not covered by the startup, or if the €50M valuation is excessive vs. actual assets.\n\n" +
    "FINAL RECOMMENDATION\n" +
    "Acquire. €50M is justifiable if time-to-market is worth > €10M/year. Launch due diligence prioritising code quality, team retention and intellectual property ownership."
  );

  // ── REC-D3 — Recommendation : allocation budget 30 M€ sur 5 marchés ──
  pa('REC-D3',
    "TABLEAU D'ALLOCATION\n" +
    "Marché A : ROI 3x, investissement 15 M€ → retour 45 M€. Priorité 1.\n" +
    "Marché B : ROI 2,5x, investissement 8 M€ → retour 20 M€. Priorité 2.\n" +
    "Marché C : ROI 1,5x, investissement 7 M€ → retour 10,5 M€. Priorité 3.\n" +
    "Total alloué : 15 + 8 + 7 = 30 M€. Budget épuisé.\n" +
    "Marchés D et E : ROI < 1x → destruction de valeur. A exclure.\n\n" +
    "ROI DE PORTEFEUILLE\n" +
    "Retour total : 45 + 20 + 10,5 = 75,5 M€. Investissement : 30 M€. ROI portefeuille = 2,5x.\n\n" +
    "JUSTIFICATION DE L'EXCLUSION DE D ET E\n" +
    "Un ROI < 1x signifie que chaque euro investi rapporte moins d'un euro. Ce n'est pas un problème de priorité budgétaire : c'est de la destruction de valeur absolue. Il vaut mieux ne pas investir et conserver les 30 M€ sur A, B, C que de diluer le ROI du portefeuille.\n\n" +
    "NUANCE STRATEGIQUE\n" +
    "Si D ou E présentent un intérêt stratégique non financier (présence géographique défensive, réglementation future, accès à des ressources), les revisiter séparément avec un budget stratégique dédié, hors de cette enveloppe de 30 M€.\n\n" +
    "RECOMMANDATION FINALE\n" +
    "Allouer 30 M€ sur A/B/C, ROI portefeuille 2,5x. Exclure D et E de cette allocation. Revisiter en comité stratégique si justification non financière identifiée.",
    "ALLOCATION TABLE\n" +
    "Market A: ROI 3x, investment €15M → return €45M. Priority 1.\n" +
    "Market B: ROI 2.5x, investment €8M → return €20M. Priority 2.\n" +
    "Market C: ROI 1.5x, investment €7M → return €10.5M. Priority 3.\n" +
    "Total allocated: €15M + €8M + €7M = €30M. Budget exhausted.\n" +
    "Markets D and E: ROI < 1x → value destruction. Exclude.\n\n" +
    "PORTFOLIO ROI\n" +
    "Total return: €45M + €20M + €10.5M = €75.5M. Investment: €30M. Portfolio ROI = 2.5x.\n\n" +
    "JUSTIFICATION FOR EXCLUDING D AND E\n" +
    "A ROI < 1x means every euro invested returns less than one euro. This is not a budgetary priority issue: it is absolute value destruction. It is better not to invest and keep the €30M on A, B, C than to dilute the portfolio ROI.\n\n" +
    "STRATEGIC NUANCE\n" +
    "If D or E present a non-financial strategic interest (defensive geographic presence, future regulation, resource access), revisit them separately with a dedicated strategic budget, outside this €30M envelope.\n\n" +
    "FINAL RECOMMENDATION\n" +
    "Allocate €30M across A/B/C, portfolio ROI 2.5x. Exclude D and E from this allocation. Revisit in strategic committee if non-financial justification is identified."
  );

  // ── ADV-D1 — Blind case : identifier le type de cas ──
  pa('ADV-D1',
    "PROTOCOLE EN 3 ETAPES — MINUTE 1\n\n" +
    "ETAPE 1 — QUESTIONS DE CLARIFICATION (20 secondes)\n" +
    "Poser 2 questions maximales, ciblées :\n" +
    "- 'Est-ce que la baisse de profit vient principalement d'une baisse de revenus, d'une hausse de coûts, ou des deux ?'\n" +
    "- 'Ce phénomène est-il récent (6-12 mois) ou structurel (plusieurs années) ?'\n" +
    "Ces deux questions permettent d'orienter vers profitability (revenue), profitability (coûts) ou un cas de transformation plus profond.\n\n" +
    "ETAPE 2 — LIRE LES INDICES FOURNIS (15 secondes)\n" +
    "Service company = aucun actif physique de production. Les coûts sont dominés par les people costs (salaires, sous-traitance) et les loyers/infra. Il n'y a pas de COGS manufacturing. La marge brute est structurellement haute (60-80%), donc si la profitabilité baisse, chercher d'abord du côté des Opex et des charges RH.\n\n" +
    "ETAPE 3 — ANNONCER LE CADRE D'ANALYSE (25 secondes)\n" +
    "'Je vais décomposer le problème selon le cadre Profit = Revenue - Costs. Je commence par identifier quelle branche est impactée, puis je creuserai les sous-composantes. Pour une service company, mon hypothèse principale est une hausse des coûts fixes ou variables liés aux ressources humaines ou à l'organisation.'\n\n" +
    "ERREUR A EVITER\n" +
    "Ne pas plaquer un cadre MECE en aveugle sans d'abord qualifier le problème. La question de clarification remplace les 30 secondes de silence gênant.",
    "3-STEP PROTOCOL — MINUTE 1\n\n" +
    "STEP 1 — CLARIFICATION QUESTIONS (20 seconds)\n" +
    "Ask 2 targeted questions maximum:\n" +
    "- 'Is the profit decline coming primarily from falling revenue, rising costs, or both?'\n" +
    "- 'Is this phenomenon recent (6-12 months) or structural (multiple years)?'\n" +
    "These two questions direct toward profitability (revenue), profitability (costs) or a deeper transformation case.\n\n" +
    "STEP 2 — READ THE PROVIDED CLUES (15 seconds)\n" +
    "Service company = no physical production assets. Costs are dominated by people costs (salaries, subcontracting) and rent/infrastructure. No manufacturing COGS. Gross margin is structurally high (60-80%), so if profitability declines, look first at Opex and HR charges.\n\n" +
    "STEP 3 — ANNOUNCE THE ANALYTICAL FRAMEWORK (25 seconds)\n" +
    "'I will break down the problem using the Profit = Revenue - Costs framework. I will start by identifying which branch is impacted, then drill into sub-components. For a service company, my primary hypothesis is an increase in fixed or variable costs related to human resources or organisational structure.'\n\n" +
    "MISTAKE TO AVOID\n" +
    "Do not blindly apply a MECE framework without first qualifying the problem. The clarification question replaces the awkward 30-second silence."
  );

  // ── ADV-D2 — Trap case : revenus +20% mais management inquiet ──
  pa('ADV-D2',
    "4 PIEGES DANS LA STRUCTURE INITIALE\n\n" +
    "PIEGE 1 — VOLUME VS VALEUR : MIX PRODUIT\n" +
    "Une croissance revenue de 20% peut masquer un glissement de mix vers des segments moins rentables. Si le volume de produits A (marge 40%) stagne et que la croissance vient de produits B (marge 15%), le revenue monte mais la marge en valeur absolue baisse. Vérifier : décomposer la croissance par segment, ligne de produit et géographie.\n\n" +
    "PIEGE 2 — ABSORPTION DES COUTS FIXES INSUFFISANTE\n" +
    "Si les coûts ont augmenté de 30% pour soutenir une croissance revenue de 20%, la marge opérationnelle se dégrade malgré la hausse du chiffre d'affaires. Vérifier : évolution des coûts fixes (infrastructure, effectifs) et variables en parallèle du revenue.\n\n" +
    "PIEGE 3 — CROISSANCE NON RENTABLE : CAC > LTV\n" +
    "La croissance peut être achetée par des remises commerciales, des dépenses marketing excessives ou des conditions de paiement trop favorables. Si le coût d'acquisition client (CAC) dépasse la valeur vie client (LTV), la croissance détruit de la valeur. Vérifier : CAC, taux de rétention, LTV.\n\n" +
    "PIEGE 4 — CONCENTRATION DE LA CROISSANCE\n" +
    "Si 80% de la croissance de 20% est portée par 1 ou 2 clients, le risque de concentration est maximal. La perte de ce client retournerait immédiatement la tendance. Vérifier : part des top-5 clients dans la croissance incrémentale.\n\n" +
    "LECON METHODOLOGIQUE\n" +
    "Revenue = prix × volume × mix × géographies. Ne jamais analyser le revenue comme une ligne unique. Toujours décomposer avant de conclure.",
    "4 TRAPS IN THE INITIAL STRUCTURE\n\n" +
    "TRAP 1 — VOLUME VS VALUE: PRODUCT MIX\n" +
    "20% revenue growth may conceal a mix shift toward less profitable segments. If volume of product A (40% margin) stagnates and growth comes from product B (15% margin), revenue rises but absolute margin value falls. Check: decompose growth by segment, product line and geography.\n\n" +
    "TRAP 2 — INSUFFICIENT FIXED COST ABSORPTION\n" +
    "If costs grew 30% to support 20% revenue growth, operating margin deteriorates despite the top-line increase. Check: evolution of fixed costs (infrastructure, headcount) and variable costs in parallel with revenue.\n\n" +
    "TRAP 3 — UNPROFITABLE GROWTH: CAC > LTV\n" +
    "Growth may be bought through commercial discounts, excessive marketing spend or overly favourable payment terms. If Customer Acquisition Cost (CAC) exceeds Customer Lifetime Value (LTV), growth destroys value. Check: CAC, retention rate, LTV.\n\n" +
    "TRAP 4 — GROWTH CONCENTRATION\n" +
    "If 80% of the 20% growth is driven by 1 or 2 clients, concentration risk is maximum. Losing that client would immediately reverse the trend. Check: share of top-5 clients in incremental growth.\n\n" +
    "METHODOLOGICAL LESSON\n" +
    "Revenue = price x volume x mix x geographies. Never analyse revenue as a single line. Always decompose before concluding."
  );

  // ── ADV-D3 — Synthesis : récupérer d'un blocage mathématique ──
  pa('ADV-D3',
    "SCRIPT COMPLET — BLOCAGE MATHEMATIQUE (45 secondes)\n\n" +
    "[0-5s] TRANSPARENCE IMMEDIATE\n" +
    "'Je ne veux pas avancer un chiffre incorrect, donc je vais raisonner à voix haute et donner une fourchette.'\n\n" +
    "[5-25s] FOURCHETTE LARGE + RAISONNEMENT EXPLICITE\n" +
    "'En me basant sur [hypothèse X], je peux estimer que le résultat est de l'ordre de [Y à Z]. Mon raisonnement : [expliquer les étapes de l'approximation en 2-3 phrases maximum]. Je suis moins sûr du facteur [préciser], ce qui explique l'incertitude.'\n\n" +
    "[25-40s] DEMANDER SI CONTINUER OU AFFINER\n" +
    "'Est-ce que cette fourchette est suffisante pour continuer l'analyse, ou préférez-vous que j'affine ce calcul ?'\n\n" +
    "[40-45s] REPRISE\n" +
    "Reprendre le fil de l'analyse sans s'attarder sur le blocage. Ne pas revenir dessus.\n\n" +
    "CE QU'ON DEMONTRE\n" +
    "Sang-froid sous pression, capacité à travailler avec l'incertitude, transparence professionnelle. Le calcul exact importe moins que la démonstration de la méthode.\n\n" +
    "CE QU'ON EVITE ABSOLUMENT\n" +
    "- Silence de 20 secondes sans communiquer\n" +
    "- Avancer une réponse erronée sans le signaler\n" +
    "- Abandonner complètement la branche mathématique\n" +
    "- S'excuser longuement (perd du temps et signe de manque de sang-froid)",
    "FULL SCRIPT — MATHEMATICAL BLOCK (45 seconds)\n\n" +
    "[0-5s] IMMEDIATE TRANSPARENCY\n" +
    "'I do not want to give an incorrect number, so I will reason out loud and provide a range.'\n\n" +
    "[5-25s] WIDE RANGE + EXPLICIT REASONING\n" +
    "'Based on assumption X, I estimate the result is in the order of Y to Z. My reasoning: [explain the approximation steps in 2-3 sentences maximum]. I am less confident about factor [specify], which explains the uncertainty.'\n\n" +
    "[25-40s] ASK TO CONTINUE OR REFINE\n" +
    "'Is this range sufficient to continue the analysis, or would you prefer I refine this calculation?'\n\n" +
    "[40-45s] RESUME\n" +
    "Pick up the thread of the analysis without dwelling on the block. Do not return to it.\n\n" +
    "WHAT YOU DEMONSTRATE\n" +
    "Composure under pressure, ability to work with uncertainty, professional transparency. The exact calculation matters less than the demonstration of method.\n\n" +
    "WHAT TO ABSOLUTELY AVOID\n" +
    "- 20-second silence without communicating\n" +
    "- Advancing an incorrect answer without flagging it\n" +
    "- Completely abandoning the mathematical branch\n" +
    "- Long apologies (wastes time and signals lack of composure)"
  );
})();

