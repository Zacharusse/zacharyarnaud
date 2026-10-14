/**
 * ====================================================================
 * PORTFOLIO LEAGUE OF LEGENDS - ZACHARY ARNAUD
 * Données bilingues Français / Anglais (EN par défaut)
 * ====================================================================
 */

window.CHAMPION_DATA_MAP = {
  // ==================================================================
  // VERSION ANGLAISE (VERSION PRIORITAIRE PAR DÉFAUT AU LANCEMENT)
  // ==================================================================
  en: {
    id: "zachary-arnaud",
    name: "ZACHARY ARNAUD",
    subtitle: "MARKETING STRATEGY & BUSINESS DEVELOPMENT",
    tagline: "PLAYER PROFILE / TALENT",
    pageTitle: "Zachary Arnaud - Marketing Strategy & Business Development",

    nav: {
      overview: "OVERVIEW",
      abilities: "SKILLS",
      experiences: "EXPERIENCE",
      contactBtn: "CONTACT ME"
    },

    role: {
      id: "strategist",
      label: "ROLE",
      name: "STRATEGIST & BUSINESS DEV",
      description: "Opportunity creation, commercial storytelling, marketing strategy and partnerships in gaming and esports."
    },

    experience: {
      label: "EXPERIENCE",
      value: "2 YEARS OF EXPERIENCE",
      level: 2,
      max: 3,
      subtext: "International work-study at NODWIN Gaming"
    },

    biography: `Passionate about the gaming universe, I specialize in marketing and business development. Holding an MBA from Gaming Campus and backed by two years of work-study at NODWIN Gaming, I thrive on understanding a project's core challenges to formulate creative concepts and build compelling pitch presentations. My goal: creating strong, lasting bridges between brands, publishers, and their gaming communities.`,
    seeMore: "READ MORE",
    seeLess: "READ LESS",

    heroSplash: "assets/zachary_hero_splash.jpg",

    masteryTag: "CHANNELS & CONTACT:",
    contacts: [
      { type: "link", label: "LINKEDIN", url: "https://www.linkedin.com/in/zachary-arnaud-95335a22b/" },
      { type: "text", label: "EMAIL", value: "zacharyarnaud7@gmail.com" },
      { type: "text", label: "PHONE", value: "+33 7 83 22 39 74" }
    ],

    contactModal: {
      tagline: "GET IN TOUCH",
      title: "LET'S TALK!",
      message: "I would be more than happy to discuss your projects, collaboration opportunities, or just chat about gaming, strategy, and esports!",
      openLabel: "OPEN →",
      copyLabel: "COPY",
      copiedLabel: "COPIED!",
      emailLabel: "EMAIL",
      phoneLabel: "PHONE",
      emotes: [
        "assets/emotes/emote_owl_heart.png",
        "assets/emotes/emote_bee_happy.png",
        "assets/emotes/emote_cat_excited.png",
        "assets/emotes/emote_leona_pray.png",
        "assets/emotes/emote_blitz_question.png"
      ],
      rareEmote: {
        src: "assets/emotes/emote_t1_goat.png",
        chance: 0.03 // Taux de drop ajusté à 3% (Easter egg rare)
      }
    },

    abilitiesHeading: "SKILLS",
    abilities: [
      {
        name: "Market Intelligence & Analysis",
        icon: "assets/icons/caitlyn_r.png",
        image: "assets/projects/esports_stage_player.jpg",
        description: "Constantly monitoring gaming and esports ecosystems: identifying emerging trends, analyzing player expectations, and benchmarking competitors to uncover high-impact project opportunities."
      },
      {
        name: "Presentations & Storytelling",
        icon: "assets/icons/runebook_blue.png",
        image: "assets/projects/comic_con_vision_slide.jpg",
        description: "Transforming insights and complex data into clear, visual, high-impact pitch decks. Structuring compelling narratives to elevate projects, address hesitations, and inspire client commitment."
      },
      {
        name: "Creative Concepts & Worldbuilding",
        icon: "assets/icons/hwei_p.png",
        image: "assets/projects/cite_des_pixels_palace.jpg",
        description: "Crafting original ideas and authentic storylines that genuinely resonate with gamers. Finding the ideal angle to seamlessly connect a brand with a game's universe without disrupting the community experience."
      },
      {
        name: "Project Management & Team Spirit",
        icon: "assets/icons/ryze_r.png",
        image: "assets/projects/ligue_poro_banner.jpg",
        description: "Coordinating cross-functional workflows across artists, developers, stage crews, and content creators. Maintaining strict production schedules, fostering constructive team morale, and swiftly handling unexpected obstacles."
      },
      {
        name: "Partnerships & Sponsorships",
        icon: "assets/icons/player_behavior.jpg",
        image: "assets/projects/evo_singapore.jpg",
        description: "Understanding brand objectives to design tailored sponsorship packages and relevant activations. Structuring win-win agreements that deliver tangible event value and genuine audience engagement."
      }
    ],

    experiencesHeading: {
      line1: "EXPERIENCE",
      line2: "& PROJECTS"
    },
    experiences: [
      {
        title: "NODWIN GAMING",
        role: "Marketing & Business Development Assistant (Work-Study)",
        period: "2024 – 2026",
        location: "International / Remote & Lyon",
        splash: "assets/experiences/nodwin_collage_splash.jpg",
        thumbnail: "assets/experiences/nodwin_logo_thumb.png",
        logo: "assets/experiences/nodwin_logo_thumb.png",
        summary: "Global agency specializing in gaming, esports, and entertainment.",
        highlights: [
          "Conceived and produced over 100 commercial pitch presentations in English for international clients.",
          "Directly contributed to winning the Delta Force RFP to build the game's esports and community ecosystem across Europe.",
          "Provided strategic input on tier-1 projects: EVO championships (France, Singapore), Comic Con, Ligue de Football Professionnel (LFP), McDonald's, PUBG Mobile, AOC...",
          "Daily collaboration in English with cross-functional teams around the globe."
        ]
      },
      {
        title: "LA CITÉ DES PIXELS",
        role: "Lead Storytelling & Lore",
        period: "2023 – 2024",
        location: "Gaming Campus (Lyon)",
        splash: "assets/experiences/cite_des_pixels_splash.jpg",
        thumbnail: "assets/experiences/cite_des_pixels_logo.png",
        logo: "assets/experiences/cite_des_pixels_logo.png",
        summary: "Europe's largest Minecraft charity LAN event, supporting UNICEF.",
        highlights: [
          "End-to-end design of the narrative universe: event lore, character backstories, dialogues, and official logbook.",
          "Cross-functional team collaboration over 9 months with artists, video/sound directors, developers, broadcast technicians, and PR teams.",
          "€71,000 raised for UNICEF and over 2 million cumulative views on Twitch.",
          "Hosted prominent creators (TheGuill, Ponk, Aypierre, Bichard) and received public recognition from ZeratoR."
        ]
      },
      {
        title: "TEAM ALKYA",
        role: "Esports Manager (League of Legends)",
        period: "2023 – 2025",
        location: "Lyon & French Amateur Circuit",
        splash: "assets/experiences/team_alkya_outing.jpg",
        thumbnail: "assets/experiences/team_alkya_logo.png",
        logo: "assets/experiences/team_alkya_logo.png",
        summary: "Management and performance guidance for two League of Legends rosters across collegiate and amateur circuits.",
        highlights: [
          "Managed two League of Legends rosters competing in Ligue Poro (official Riot Games France collegiate circuit) and various amateur tournaments.",
          "Organized training schedules (scrims), managed tournament registrations, and coordinated with association directors.",
          "Fostered positive team morale and performance under competitive conditions: organized bootcamps and created tailored tracking dashboards for transparent communication."
        ]
      },
      {
        title: "CHALLENGE WANADEV",
        role: "Marketing Strategy & Acquisition",
        period: "March 2026",
        location: "Lyon (WanadevStudio)",
        splash: "assets/experiences/wanadev_species_unknown_splash.jpg",
        thumbnail: "assets/experiences/wanadev_logo.png",
        logo: "assets/experiences/wanadev_logo.png",
        summary: "Real-world study challenge for Lyon game studio WanadevStudio on their title Species Unknown.",
        highlights: [
          "In-depth market positioning analysis for Species Unknown, competitive benchmarking, and core audience profiling.",
          "Formulated a go-to-market strategy and digital acquisition channels to power early-access launch.",
          "Managed a multidisciplinary team combining student artists and business strategists.",
          "Selected as one of two winning projects by the WanadevStudio team and commended by agency professionals as 'surgical' for its rigor and strategic depth."
        ]
      },
      {
        title: "NOTOX SURF",
        role: "Investor Pitch Deck & Fundraising Strategy",
        period: "2025",
        location: "Anglet, France",
        splash: "assets/experiences/notox_beach_splash.jpg",
        thumbnail: "assets/experiences/notox_logo.png",
        logo: "assets/experiences/notox_logo.png",
        summary: "Design of the investor pitch deck for NOTOX, a pioneering brand in eco-friendly, high-performance surfboards.",
        highlights: [
          "Deep immersion into the NOTOX universe: integrating ecological commitments, technical DNA (bio-based materials, cork, flax fiber), and aesthetic art direction.",
          "Comprehensive creation of an impactful, visual pitch deck to translate technological innovation into clear investment value.",
          "Direct, close collaboration with the founder to structure strategic, commercial, and financial storytelling.",
          "Major financial success: exceeded the initial €100,000 target by raising over €130,000 during the funding round."
        ]
      },
      {
        title: "BIND: CYBER RUNNER",
        role: "Marketing, Worldbuilding & Lore",
        period: "Academic Project (6 months)",
        location: "Lyon, France",
        splash: "assets/experiences/bind_cyber_runner_splash.jpg",
        thumbnail: "assets/experiences/bind_logo.png",
        logo: "assets/experiences/bind_logo.png",
        summary: "Video game development in studio immersion over ~6 months within a multidisciplinary team of 20 students (artists, programmers, and marketing crew).",
        highlights: [
          "Full design of cyberpunk worldbuilding and narrative writing as Lead Lore Writer.",
          "Crafted the comprehensive marketing strategy, managed external communications, and produced the official release trailer.",
          "Drove team cohesion and organized weekly social activities to nurture group morale across the 20-student studio.",
          "Commended by the industry jury and awarded an official title for best marketing and trailer."
        ]
      },
      {
        title: "GAMING CAMPUS",
        role: "MBA Esports Business & Marketing Management",
        period: "2021 – 2026",
        location: "Lyon, France",
        splash: "assets/experiences/gaming_campus_splash.jpg",
        thumbnail: "assets/experiences/gaming_campus_logo.png",
        logo: "assets/experiences/gaming_campus_logo.png",
        summary: "Specialized degree program in video game and esports management (RNCP Level 7 Certification).",
        highlights: [
          "Bachelor in Video Game and Esports Management (2021–2024).",
          "MBA in Esports Business & Marketing Management (2024–2026).",
          "Project-based learning supervised by industry professionals: strategic marketing, brand partnerships, esports economics, and commercial operations.",
          "Developed and defended strategic pitch projects during the MBA in front of executives from top-tier organizations (G2 Esports, Team Vitality, Karmine Corp, Team Falcons)."
        ]
      }
    ],

    footer: `Portfolio designed by <strong>Zachary Arnaud</strong>. Inspired by the League of Legends universe. League of Legends & Riot Games are trademarks of Riot Games, Inc.`
  },

  // ==================================================================
  // VERSION FRANÇAISE
  // ==================================================================
  fr: {
    id: "zachary-arnaud",
    name: "ZACHARY ARNAUD",
    subtitle: "STRATÉGIE MARKETING & DÉVELOPPEMENT COMMERCIAL",
    tagline: "PROFIL JOUEUR / TALENT",
    pageTitle: "Zachary Arnaud - Stratégie Marketing & Développement Commercial",

    nav: {
      overview: "VUE D'ENSEMBLE",
      abilities: "COMPÉTENCES",
      experiences: "EXPÉRIENCES",
      contactBtn: "ME CONTACTER"
    },

    role: {
      id: "strategist",
      label: "RÔLE",
      name: "STRATÈGE & BUSINESS DEV",
      description: "Création d'opportunités, storytelling commercial, stratégie marketing et partenariats dans le jeu vidéo et l'esport."
    },

    experience: {
      label: "EXPÉRIENCE",
      value: "2 ANS D'EXPÉRIENCE",
      level: 2,
      max: 3,
      subtext: "Alternance internationale chez NODWIN Gaming"
    },

    biography: `Passionné par l'univers du jeu vidéo, j'évolue dans le marketing et le développement commercial. Diplômé d'un MBA au Gaming Campus et fort de deux ans en alternance chez NODWIN Gaming, j'aime comprendre les enjeux d'un projet pour imaginer des concepts créatifs et construire des présentations convaincantes. Mon objectif: créer des ponts solides entre les marques, les éditeurs et leurs communautés de joueurs.`,
    seeMore: "VOIR PLUS",
    seeLess: "VOIR MOINS",

    heroSplash: "assets/zachary_hero_splash.jpg",

    masteryTag: "RÉSEAUX & CONTACT:",
    contacts: [
      { type: "link", label: "LINKEDIN", url: "https://www.linkedin.com/in/zachary-arnaud-95335a22b/" },
      { type: "text", label: "EMAIL", value: "zacharyarnaud7@gmail.com" },
      { type: "text", label: "TÉLÉPHONE", value: "+33 7 83 22 39 74" }
    ],

    contactModal: {
      tagline: "PRENONS CONTACT",
      title: "DISCUTONS ENSEMBLE !",
      message: "Je serais plus qu'heureux d'échanger avec vous sur vos projets, des opportunités de collaboration ou simplement pour discuter gaming, stratégie et esport !",
      openLabel: "OUVRIR →",
      copyLabel: "COPIER",
      copiedLabel: "COPIÉ !",
      emailLabel: "EMAIL",
      phoneLabel: "TÉLÉPHONE",
      emotes: [
        "assets/emotes/emote_owl_heart.png",
        "assets/emotes/emote_bee_happy.png",
        "assets/emotes/emote_cat_excited.png",
        "assets/emotes/emote_leona_pray.png",
        "assets/emotes/emote_blitz_question.png"
      ],
      rareEmote: {
        src: "assets/emotes/emote_t1_goat.png",
        chance: 0.03 // Taux de drop ajusté à 3% (Easter egg rare)
      }
    },

    abilitiesHeading: "COMPÉTENCES",
    abilities: [
      {
        name: "Veille & Analyse de Marché",
        icon: "assets/icons/caitlyn_r.png",
        image: "assets/projects/esports_stage_player.jpg",
        description: "Observer en permanence ce qui se passe dans le gaming et l'esport: repérer les nouvelles tendances, analyser les attentes des joueurs et étudier la concurrence pour identifier les meilleures opportunités de projets."
      },
      {
        name: "Présentations & Storytelling",
        icon: "assets/icons/runebook_blue.png",
        image: "assets/projects/comic_con_vision_slide.jpg",
        description: "Transformer des idées et des données en présentations claires, visuelles et percutantes. Structurer un discours pour valoriser un projet, lever les doutes et donner envie aux clients de s'engager."
      },
      {
        name: "Idées Créatives & Univers",
        icon: "assets/icons/hwei_p.png",
        image: "assets/projects/cite_des_pixels_palace.jpg",
        description: "Imaginer des concepts originaux et des récits qui parlent aux joueurs. Trouver le bon angle pour connecter naturellement une marque à l'univers d'un jeu, sans dénaturer l'expérience communautaire."
      },
      {
        name: "Organisation & Esprit d'Équipe",
        icon: "assets/icons/ryze_r.png",
        image: "assets/projects/ligue_poro_banner.jpg",
        description: "Coordonner le travail entre profils variés (artistes, développeurs, régisseurs, créateurs de contenu). Tenir les plannings, garder une ambiance constructive et s'adapter rapidement aux imprévus."
      },
      {
        name: "Partenariats & Collaborations",
        icon: "assets/icons/player_behavior.jpg",
        image: "assets/projects/evo_singapore.jpg",
        description: "Comprendre les objectifs d'une marque pour concevoir des offres de sponsoring et des activations pertinentes. Bâtir des accords équilibrés, utiles pour l'événement et engageants pour le public."
      }
    ],

    experiencesHeading: {
      line1: "EXPÉRIENCES",
      line2: "& PROJETS"
    },
    experiences: [
      {
        title: "NODWIN GAMING",
        role: "Assistant Marketing & Commercial (Alternance)",
        period: "2024 – 2026",
        location: "International / Télétravail & Lyon",
        splash: "assets/experiences/nodwin_collage_splash.jpg",
        thumbnail: "assets/experiences/nodwin_logo_thumb.png",
        logo: "assets/experiences/nodwin_logo_thumb.png",
        summary: "Agence internationale spécialisée dans le jeu vidéo, l'esport et le divertissement.",
        highlights: [
          "Conception de plus de 100 présentations commerciales en anglais pour des clients internationaux.",
          "Contribution directe au gain de l'appel d'offres Delta Force pour structurer l'écosystème esport et communautaire du jeu en Europe.",
          "Apport stratégique sur des projets majeurs: tournois EVO (France, Singapour), Comic Con, Ligue de Football Professionnel (LFP), McDonald's, PUBG Mobile, AOC...",
          "Travail quotidien en anglais en collaboration avec des équipes tout autour du monde."
        ]
      },
      {
        title: "LA CITÉ DES PIXELS",
        role: "Responsable Storytelling & Lore",
        period: "2023 – 2024",
        location: "Gaming Campus (Lyon)",
        splash: "assets/experiences/cite_des_pixels_splash.jpg",
        thumbnail: "assets/experiences/cite_des_pixels_logo.png",
        logo: "assets/experiences/cite_des_pixels_logo.png",
        summary: "La plus grande LAN caritative Minecraft d'Europe, au profit de l'UNICEF.",
        highlights: [
          "Création complète de l'univers narratif: histoire, personnages, dialogues et journal de bord de l'événement.",
          "Travail en équipe pendant 9 mois avec des artistes, réalisateurs vidéo/son, développeurs, régisseurs et équipes de communication.",
          "71 000 € récoltés pour l'UNICEF et plus de 2 millions de vues cumulées sur Twitch.",
          "Accueil de créateurs reconnus (TheGuill, Ponk, Aypierre, Bichard) et projet salué par ZeratoR."
        ]
      },
      {
        title: "TEAM ALKYA",
        role: "Manager Esport (League of Legends)",
        period: "2023 – 2025",
        location: "Lyon & Scène Compétitive Amateure",
        splash: "assets/experiences/team_alkya_outing.jpg",
        thumbnail: "assets/experiences/team_alkya_logo.png",
        logo: "assets/experiences/team_alkya_logo.png",
        summary: "Gestion et accompagnement de deux équipes League of Legends sur les circuits étudiant et amateur.",
        highlights: [
          "Management de deux équipes League of Legends engagées en Ligue Poro (championnat étudiant officiel de Riot Games France) et sur divers tournois amateurs.",
          "Organisation des entraînements (scrims), gestion administrative des inscriptions en tournois et coordination avec les responsables de l'association.",
          "Préservation d'une cohésion d'équipe positive et motivante en compétition: organisation de bootcamps et mise en place de dossiers de suivi personnalisés pour fluidifier la communication."
        ]
      },
      {
        title: "CHALLENGE WANADEV",
        role: "Stratégie Marketing & Acquisition",
        period: "Mars 2026",
        location: "Lyon (WanadevStudio)",
        splash: "assets/experiences/wanadev_species_unknown_splash.jpg",
        thumbnail: "assets/experiences/wanadev_logo.png",
        logo: "assets/experiences/wanadev_logo.png",
        summary: "Cas réel mené dans le cadre de mes études pour le studio lyonnais WanadevStudio sur le jeu Species Unknown.",
        highlights: [
          "Analyse approfondie du positionnement de Species Unknown, benchmark des concurrents directs et cartographie de la communauté cible.",
          "Recommandation d'un plan marketing et de canaux d'acquisition digitaux pour soutenir le lancement en accès anticipé.",
          "Management d'une équipe pluridisciplinaire d'étudiants artistes et business.",
          "Projet sélectionné parmi les deux vainqueurs par l'équipe de WanadevStudio et salué par des professionnels d'agence, qualifié de « chirurgical » pour sa rigueur et sa pertinence."
        ]
      },
      {
        title: "NOTOX SURF",
        role: "Pitch Deck & Stratégie Levée de Fonds",
        period: "2025",
        location: "Anglet, France",
        splash: "assets/experiences/notox_beach_splash.jpg",
        thumbnail: "assets/experiences/notox_logo.png",
        logo: "assets/experiences/notox_logo.png",
        summary: "Conception du pitch deck investisseurs pour la levée de fonds de NOTOX, marque pionnière de planches de surf éco-responsables et haute performance.",
        highlights: [
          "Immersion dans l'univers NOTOX: assimilation des valeurs environnementales, de l'ADN technique (matériaux biosourcés, liège, lin) et de la direction artistique.",
          "Conception intégrale d'un pitch deck percutant et visuel pour vulgariser l'innovation technologique et convaincre les investisseurs.",
          "Collaboration étroite et directe avec le fondateur pour structurer le storytelling stratégique, commercial et financier.",
          "Succès financier majeur: dépassement de l'objectif initial de 100 000 € avec plus de 130 000 € récoltés lors de la levée de fonds."
        ]
      },
      {
        title: "BIND: CYBER RUNNER",
        role: "Marketing, Worldbuilding & Lore",
        period: "Projet d'études (6 mois)",
        location: "Lyon, France",
        splash: "assets/experiences/bind_cyber_runner_splash.jpg",
        thumbnail: "assets/experiences/bind_logo.png",
        logo: "assets/experiences/bind_logo.png",
        summary: "Développement d'un jeu vidéo en immersion studio sur ~6 mois au sein d'une équipe pluridisciplinaire d'une vingtaine d'étudiants (artistes, développeurs et équipe marketing).",
        highlights: [
          "Conception intégrale du worldbuilding, de l'univers cyberpunk et de l'écriture narrative du jeu en tant que responsable lore.",
          "Élaboration de la stratégie marketing globale, pilotage de la communication externe et réalisation du trailer de lancement.",
          "Animation de la cohésion d'équipe et organisation d'activités régulières pour dynamiser la vie du groupe au sein d'un studio de 20 étudiants.",
          "Projet félicité par le jury professionnel et récompensé par un titre officiel pour son marketing et son trailer."
        ]
      },
      {
        title: "GAMING CAMPUS",
        role: "MBA Esports Business & Marketing Management",
        period: "2021 – 2026",
        location: "Lyon, France",
        splash: "assets/experiences/gaming_campus_splash.jpg",
        thumbnail: "assets/experiences/gaming_campus_logo.png",
        logo: "assets/experiences/gaming_campus_logo.png",
        summary: "Cursus spécialisé en management du jeu vidéo et de l'esport (Titre RNCP Niveau 7).",
        highlights: [
          "Bachelor Management des Jeux Vidéo et de l'Esport (2021–2024).",
          "MBA Esports Business & Marketing Management (2024–2026).",
          "Apprentissage par projets réels encadrés par des professionnels du secteur: marketing stratégique, partenariats, économie de l'esport et gestion commerciale.",
          "Conception et soutenance de projets stratégiques durant le MBA face à des professionnels d'équipes majeures (G2 Esports, Team Vitality, Karmine Corp, Team Falcons)."
        ]
      }
    ],

    footer: `Portfolio conçu par <strong>Zachary Arnaud</strong>. Inspiré de l'univers de League of Legends. League of Legends et Riot Games sont des marques déposées de Riot Games, Inc.`
  }
};

// Pointeur par défaut pointant sur la version anglaise (prioritaire)
window.CHAMPION_DATA = window.CHAMPION_DATA_MAP.en;
