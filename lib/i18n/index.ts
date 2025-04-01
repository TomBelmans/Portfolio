// Fix the i18n initialization to properly handle arrays
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      about: "About",
      studie: "Education",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",

      // Hero section
      fullStackDeveloper: "Full Stack Developer",
      heroDescription:
          "Building digital experiences with modern technologies. Focused on creating elegant solutions to complex problems.",
      profilePictureAlt: "My profile picture",

      // Projects section
      projectsTitle: "Projects",
      ecommerceTitle: "E-commerce Platform",
      ecommerceDescription: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
      taskAppTitle: "Task Management App",
      taskAppDescription: "A real-time task management application with team collaboration features.",
      chatInterfaceTitle: "AI Chat Interface",
      chatInterfaceDescription: "An AI-powered chat interface with natural language processing capabilities.",
      viewOnGithub: "View on GitHub",

      // Project details
      projectDetails: {
        viewDetails: "Click to view details",
        challenge: "The Challenge",
        solution: "The Solution",
        keyFeatures: "Key Features",
        technologiesUsed: "Technologies Used",
        liveDemo: "Live Demo",
        viewCode: "View Code",
        portfolio: {
          title: "Personal Portfolio",
          shortDescription: "My developer portfolio built with Next.js and Tailwind CSS",
          description: "A modern, responsive portfolio website to showcase my projects and skills as a developer.",
          challenge:
              "Creating a portfolio that effectively showcases my work while providing a smooth user experience.",
          solution: "Leveraged Next.js for fast page loads and SEO benefits, with Tailwind CSS for responsive design.",
          features: [
            "Responsive design that works on all devices",
            "Project showcase with detailed views",
            "Dark/light mode toggle",
            "Contact form with validation",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        },
        ecommerce: {
          title: "E-Commerce Platform",
          shortDescription: "A full-featured online store with product catalog and checkout",
          description:
              "An e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
          challenge: "Building a secure, performant e-commerce platform with a seamless checkout experience.",
          solution: "Integrated Stripe for payments and implemented server-side rendering for SEO and performance.",
          features: [
            "Product catalog with filtering and search",
            "User authentication and profiles",
            "Shopping cart with persistent storage",
            "Secure checkout with Stripe",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "Stripe API", "Prisma", "PostgreSQL"],
        },
        dashboard: {
          title: "Analytics Dashboard",
          shortDescription: "Interactive dashboard for visualizing business metrics",
          description:
              "A data visualization dashboard that helps businesses track key performance indicators and metrics.",
          challenge: "Creating intuitive visualizations for complex data sets that update in real-time.",
          solution: "Used D3.js for custom charts and Firebase for real-time data updates.",
          features: [
            "Real-time data updates",
            "Interactive charts and graphs",
            "Customizable dashboard layouts",
            "Export reports as PDF or CSV",
          ],
          technologies: ["React", "D3.js", "TypeScript", "Firebase", "Recharts"],
        },
      },

      // Tech stack section
      techStackTitle: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",

      // Studies section
      studies: {
        title: "Education",
        timeline: "Educational Timeline",
        degree: "Degree",
        institution: "Institution",
        duration: "Duration",
        description: "Description",
        course: "Subjects",
        items: [
          {
            degree: "Associates degree in Software and Application Development",
            institution: "Thomas More Kempen",
            location: "Geel, Belgium",
            duration: "2022 - 2025",
            description: "Focused on the fundamentals of software engineering and programming principles.",
            courses: [
              "Object-Oriented Programming",
              "Database Systems",
              "Web Development",
              "Software Engineering",
            ],
          },
          {
            degree: "Mechanical Design Techniques",
            institution: "Sint-Paulus Technical Institute",
            location: "Mol, Belgium",
            duration: "1992 - 1998",
            description: "Technical education focused on mechanical processing and design, CNC machining, and blueprint reading.",
            courses: [
              "Turning",
              "Milling",
              "AutoCAD",
              "Geometry",
              "Pneumatics",
              "Hydraulics",
            ],
          },
        ],
      },

      // Contact section
      getInTouch: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      sendMessage: "Send Message",
      sending: "Sending...",
      thankYouMessage: "Thanks for your message! I'll get back to you soon.",
      errorMessage: "Something went wrong. Please try again.",

      // Footer
      copyright: "© {{year}} Tom Belmans. All rights reserved.",
      termsOfService: "Terms of Service",
      privacy: "Privacy",
    },
  },
  fr: {
    translation: {
      // Navigation
      about: "À propos",
      studie: "Éducation",
      projects: "Projets",
      contact: "Contact",
      resume: "Currículum Vitae",

      // Hero section
      fullStackDeveloper: "Développeur Full Stack",
      heroDescription:
          "Création d'expériences numériques avec des technologies modernes. Concentré sur la création de solutions élégantes à des problèmes complexes.",
      profilePictureAlt: "Mon image de profil",

      // Projects section
      projectsTitle: "Projets",
      ecommerceTitle: "Plateforme E-commerce",
      ecommerceDescription:
          "Une plateforme e-commerce full-stack construite avec Next.js, Prisma et l'intégration Stripe.",
      taskAppTitle: "Application de Gestion des Tâches",
      taskAppDescription:
          "Une application de gestion des tâches en temps réel avec des fonctionnalités de collaboration d'équipe.",
      chatInterfaceTitle: "Interface de Chat IA",
      chatInterfaceDescription:
          "Une interface de chat alimentée par l'IA avec des capacités de traitement du langage naturel.",
      viewOnGithub: "Voir sur GitHub",

      // Project details
      projectDetails: {
        viewDetails: "Cliquez pour voir les détails",
        challenge: "Le Défi",
        solution: "La Solution",
        keyFeatures: "Fonctionnalités Clés",
        technologiesUsed: "Technologies Utilisées",
        liveDemo: "Démo en Direct",
        viewCode: "Voir le Code",
        portfolio: {
          title: "Portfolio Personnel",
          shortDescription: "Mon portfolio de développeur construit avec Next.js et Tailwind CSS",
          description:
              "Un site web de portfolio moderne et réactif pour présenter mes projets et compétences en tant que développeur.",
          challenge:
              "Créer un portfolio qui présente efficacement mon travail tout en offrant une expérience utilisateur fluide.",
          solution:
              "Utilisation de Next.js pour des chargements de page rapides et des avantages SEO, avec Tailwind CSS pour un design réactif.",
          features: [
            "Design réactif qui fonctionne sur tous les appareils",
            "Présentation de projets avec vues détaillées",
            "Bascule mode sombre/clair",
            "Formulaire de contact avec validation",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        },
        ecommerce: {
          title: "Plateforme E-commerce",
          shortDescription: "Une boutique en ligne complète avec catalogue de produits et paiement",
          description:
              "Une plateforme e-commerce avec des listes de produits, un panier d'achat, une authentification utilisateur et un traitement des paiements.",
          challenge:
              "Construire une plateforme e-commerce sécurisée et performante avec une expérience de paiement fluide.",
          solution:
              "Intégration de Stripe pour les paiements et mise en œuvre du rendu côté serveur pour le SEO et les performances.",
          features: [
            "Catalogue de produits avec filtrage et recherche",
            "Authentification et profils utilisateurs",
            "Panier d'achat avec stockage persistant",
            "Paiement sécurisé avec Stripe",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "API Stripe", "Prisma", "PostgreSQL"],
        },
        dashboard: {
          title: "Tableau de Bord Analytique",
          shortDescription: "Tableau de bord interactif pour visualiser les métriques commerciales",
          description:
              "Un tableau de bord de visualisation de données qui aide les entreprises à suivre les indicateurs de performance clés et les métriques.",
          challenge:
              "Créer des visualisations intuitives pour des ensembles de données complexes qui se mettent à jour en temps réel.",
          solution:
              "Utilisation de D3.js pour des graphiques personnalisés et Firebase pour des mises à jour en temps réel.",
          features: [
            "Mises à jour de données en temps réel",
            "Graphiques et diagrammes interactifs",
            "Dispositions de tableau de bord personnalisables",
            "Exportation de rapports en PDF ou CSV",
          ],
          technologies: ["React", "D3.js", "TypeScript", "Firebase", "Recharts"],
        },
      },

      // Tech stack section
      techStackTitle: "Stack Technique",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Outils",

      // Studies section
      studies: {
        title: "Éducation",
        timeline: "Parcours Éducatif",
        degree: "Diplôme",
        institution: "Institution",
        duration: "Durée",
        description: "Description",
        course: "Sujets",
        items: [
          {
            degree: "Diplôme d'associé en développement de logiciels et d'applications",
            institution: "Thomas More Kempen",
            location: "Geel, Belgique",
            duration: "2022 - 2025",
            description: "Axé sur les fondamentaux de l'ingénierie logicielle et les principes de programmation.",
            courses: [
              "Programmation orientée objet",
              "Systèmes de bases de données",
              "Développement Web",
              "Ingénierie logicielle",
            ],
          },
          {
            degree: "Techniques de conception mécanique",
            institution: "Institut Technique Sint-Paulus",
            location: "Mol, Belgique",
            duration: "1992 - 1998",
            description: "Formation technique axée sur le traitement mécanique et la conception, la programmation CNC et la lecture de plans.",
            courses: [
              "Tournage",
              "Fraisage",
              "AutoCAD",
              "Géométrie",
              "Pneumatique",
              "Hydraulique",
            ],
          },
        ],
      },

      // Contact section
      getInTouch: "Contactez-moi",
      name: "Nom",
      email: "Email",
      message: "Message",
      sendMessage: "Envoyer le Message",
      sending: "Envoi en cours...",
      thankYouMessage: "Merci pour votre message! Je vous répondrai bientôt.",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",

      // Footer
      copyright: "© {{year}} Tom Belmans. Tous droits réservés.",
      termsOfService: "Conditions d'Utilisation",
      privacy: "Confidentialité",
    },
  },
  de: {
    translation: {
      // Navigation
      about: "Über",
      studie: "Ausbildung",
      projects: "Projekte",
      contact: "Kontakt",
      resume: "Lebenslauf",

      // Hero section
      fullStackDeveloper: "Full-Stack-Entwickler",
      heroDescription:
          "Ich kreiere digitale Erlebnisse mit modernen Technologien und konzentriere mich darauf, elegante Lösungen für komplexe Probleme zu entwickeln.",
      profilePictureAlt: "Mein Profilbild",

      // Projects section
      projectsTitle: "Projekte",
      ecommerceTitle: "E-Commerce-Plattform",
      ecommerceDescription:
          "Eine Full-Stack-E-Commerce-Plattform, entwickelt mit Next.js, Prisma und Stripe-Integration.",
      taskAppTitle: "Aufgabenverwaltungs-App",
      taskAppDescription: "Eine Echtzeit-Aufgabenverwaltungs-App mit Team-Kollaborationsfunktionen.",
      chatInterfaceTitle: "KI-Chat-Interface",
      chatInterfaceDescription: "Ein KI-basiertes Chat-Interface mit Fähigkeiten zur natürlichen Sprachverarbeitung.",
      viewOnGithub: "Auf GitHub ansehen",

      // Project details
      projectDetails: {
        viewDetails: "Klicken Sie für Details",
        challenge: "Die Herausforderung",
        solution: "Die Lösung",
        keyFeatures: "Hauptfunktionen",
        technologiesUsed: "Verwendete Technologien",
        liveDemo: "Live-Demo",
        viewCode: "Code ansehen",
        portfolio: {
          title: "Persönliches Portfolio",
          shortDescription: "Mein Entwickler-Portfolio, erstellt mit Next.js und Tailwind CSS",
          description:
              "Eine moderne, responsive Portfolio-Website zur Präsentation meiner Projekte und Fähigkeiten als Entwickler.",
          challenge:
              "Ein Portfolio erstellen, das meine Arbeit effektiv präsentiert und gleichzeitig eine reibungslose Benutzererfahrung bietet.",
          solution:
              "Nutzung von Next.js für schnelle Seitenladezeiten und SEO-Vorteile, mit Tailwind CSS für responsives Design.",
          features: [
            "Responsives Design, das auf allen Geräten funktioniert",
            "Projektpräsentation mit detaillierten Ansichten",
            "Umschaltung zwischen Hell- und Dunkelmodus",
            "Kontaktformular mit Validierung",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        },
        ecommerce: {
          title: "E-Commerce-Plattform",
          shortDescription: "Ein vollständiger Online-Shop mit Produktkatalog und Checkout",
          description:
              "Eine E-Commerce-Plattform mit Produktlisten, Warenkorb, Benutzerauthentifizierung und Zahlungsabwicklung.",
          challenge: "Aufbau einer sicheren, leistungsstarken E-Commerce-Plattform mit nahtloser Checkout-Erfahrung.",
          solution:
              "Integration von Stripe für Zahlungen und Implementierung von serverseitigem Rendering für SEO und Performance.",
          features: [
            "Produktkatalog mit Filterung und Suche",
            "Benutzerauthentifizierung und -profile",
            "Warenkorb mit persistenter Speicherung",
            "Sicherer Checkout mit Stripe",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "Stripe API", "Prisma", "PostgreSQL"],
        },
        dashboard: {
          title: "Analytisches Dashboard",
          shortDescription: "Interaktives Dashboard zur Visualisierung von Geschäftskennzahlen",
          description:
              "Ein Datenvisualisierungs-Dashboard, das Unternehmen hilft, wichtige Leistungsindikatoren und Metriken zu verfolgen.",
          challenge:
              "Intuitive Visualisierungen für komplexe Datensätze erstellen, die sich in Echtzeit aktualisieren.",
          solution: "Verwendung von D3.js für benutzerdefinierte Diagramme und Firebase für Echtzeit-Updates.",
          features: [
            "Echtzeit-Datenaktualisierungen",
            "Interaktive Diagramme und Grafiken",
            "Anpassbare Dashboard-Layouts",
            "Export von Berichten als PDF oder CSV",
          ],
          technologies: ["React", "D3.js", "TypeScript", "Firebase", "Recharts"],
        },
      },

      // Tech stack section
      techStackTitle: "Tech-Stack",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",

      // Studies section
      studies: {
        title: "Ausbildung",
        timeline: "Bildungsweg",
        degree: "Abschluss",
        institution: "Institution",
        duration: "Zeitraum",
        description: "Beschreibung",
        course: "Themen",
        items: [
          {
            degree: "Associierter Abschluss in Software- und Anwendungsentwicklung",
            institution: "Thomas More Kempen",
            location: "Geel, Belgien",
            duration: "2022 - 2025",
            description: "Fokussiert auf die Grundlagen der Softwareentwicklung und Programmierprinzipien.",
            courses: [
              "Objektorientierte Programmierung",
              "Datenbanksysteme",
              "Webentwicklung",
              "Softwaretechnik",
            ],
          },
          {
            degree: "Mechanische Gestaltungstechniken",
            institution: "Technisches Institut Sint-Paulus",
            location: "Mol, Belgien",
            duration: "1992 - 1998",
            description: "Technische Ausbildung mit Schwerpunkt auf mechanischer Bearbeitung und Gestaltung, CNC-Bearbeitung und dem Lesen von Bauplänen.",
            courses: [
              "Drehen",
              "Fräsen",
              "AutoCAD",
              "Geometrie",
              "Pneumatik",
              "Hydraulik",
            ],
          },
        ],
      },

      // Contact section
      getInTouch: "Kontakt aufnehmen",
      name: "Name",
      email: "E-Mail-Adresse",
      message: "Nachricht",
      sendMessage: "Nachricht senden",
      sending: "Senden...",
      thankYouMessage: "Danke für deine Nachricht! Ich werde mich bald bei dir melden.",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",

      // Footer
      copyright: "© {{year}} Tom Belmans. Alle Rechte vorbehalten.",
      termsOfService: "Nutzungsbedingungen",
      privacy: "Datenschutz",
    },
  },
  nl: {
    translation: {
      // Navigation
      about: "Over",
      studie: "Opleiding",
      projects: "Projecten",
      contact: "Contact",
      resume: "Currículum Vitae",

      // Hero section
      fullStackDeveloper: "Full Stack Ontwikkelaar",
      heroDescription:
          "Digitale ervaringen bouwen met moderne technologieën. Gericht op het creëren van elegante oplossingen voor complexe problemen.",
      profilePictureAlt: "Mijn profielfoto",

      // Projects section
      projectsTitle: "Projecten",
      ecommerceTitle: "E-commerce Platform",
      ecommerceDescription: "Een full-stack e-commerce platform gebouwd met Next.js, Prisma en Stripe integratie.",
      taskAppTitle: "Taakbeheer Applicatie",
      taskAppDescription: "Een realtime taakbeheer applicatie met teamsamenwerkingsfuncties.",
      chatInterfaceTitle: "AI Chat Interface",
      chatInterfaceDescription: "Een door AI aangedreven chat-interface met natuurlijke taalverwerkingsmogelijkheden.",
      viewOnGithub: "Bekijk op GitHub",

      // Project details
      projectDetails: {
        viewDetails: "Klik om details te bekijken",
        challenge: "De Uitdaging",
        solution: "De Oplossing",
        keyFeatures: "Belangrijkste Functies",
        technologiesUsed: "Gebruikte Technologieën",
        liveDemo: "Live Demo",
        viewCode: "Bekijk Code",
        portfolio: {
          title: "Persoonlijk Portfolio",
          shortDescription: "Mijn ontwikkelaarsportfolio gebouwd met Next.js en Tailwind CSS",
          description:
              "Een moderne, responsieve portfolio-website om mijn projecten en vaardigheden als ontwikkelaar te presenteren.",
          challenge:
              "Een portfolio creëren dat mijn werk effectief presenteert en tegelijkertijd een soepele gebruikerservaring biedt.",
          solution:
              "Gebruik van Next.js voor snelle paginalaadtijden en SEO-voordelen, met Tailwind CSS voor responsief ontwerp.",
          features: [
            "Responsief ontwerp dat werkt op alle apparaten",
            "Projectpresentatie met gedetailleerde weergaven",
            "Donker/licht modus schakelaar",
            "Contactformulier met validatie",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
        },
        ecommerce: {
          title: "E-commerce Platform",
          shortDescription: "Een volwaardige webwinkel met productcatalogus en afrekenen",
          description:
              "Een e-commerce platform met productlijsten, winkelwagen, gebruikersauthenticatie en betalingsverwerking.",
          challenge: "Een veilig, performant e-commerce platform bouwen met een naadloze checkout-ervaring.",
          solution:
              "Integratie van Stripe voor betalingen en implementatie van server-side rendering voor SEO en prestaties.",
          features: [
            "Productcatalogus met filtering en zoeken",
            "Gebruikersauthenticatie en -profielen",
            "Winkelwagen met persistente opslag",
            "Veilig afrekenen met Stripe",
          ],
          technologies: ["Next.js", "React", "Tailwind CSS", "Stripe API", "Prisma", "PostgreSQL"],
        },
        dashboard: {
          title: "Analytisch Dashboard",
          shortDescription: "Interactief dashboard voor het visualiseren van bedrijfsmetrieken",
          description:
              "Een datavisualisatie-dashboard dat bedrijven helpt bij het bijhouden van belangrijke prestatie-indicatoren en metrieken.",
          challenge: "Intuïtieve visualisaties creëren voor complexe datasets die in realtime worden bijgewerkt.",
          solution: "Gebruik van D3.js voor aangepaste grafieken en Firebase voor realtime updates.",
          features: [
            "Realtime data-updates",
            "Interactieve grafieken en diagrammen",
            "Aanpasbare dashboard-layouts",
            "Exporteren van rapporten als PDF of CSV",
          ],
          technologies: ["React", "D3.js", "TypeScript", "Firebase", "Recharts"],
        },
      },

      // Tech stack section
      techStackTitle: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",

      // Studies section
      studies: {
        title: "Opleiding",
        timeline: "Opleidingstraject",
        degree: "Diploma",
        institution: "Instelling",
        duration: "Periode",
        description: "Beschrijving",
        course: "Vakken",
        items: [
          {
            degree: "Graduaat Software- en applicatieontwikkeling",
            institution: "Thomas More Kempen",
            location: "Geel, België",
            duration: "2022 - 2025",
            description: "Gericht op software engineering fundamenten en programmeringsprincipes.",
            courses: [
              "Objectgeoriënteerd Programmeren",
              "Databasesystemen",
              "Webontwikkeling",
              "Software Engineering",
            ],
          },
          {
            degree: "Mechanische vormgevingstechnieken",
            institution: "Technisch Instituut Sint-Paulus",
            location: "Mol, België",
            duration: "1992 - 1998",
            description: "Technische opleiding met een focus op mechanische bewerking en vormgeving, CNC en planlezen.",
            courses: ["Draaien", "Frezen", "AutoCAD", "Meetkunde", "Pneumatica", "Hydraulica"],
          },
        ],
      },

      // Contact section
      getInTouch: "Neem Contact Op",
      name: "Naam",
      email: "E-mail",
      message: "Bericht",
      sendMessage: "Verstuur Bericht",
      sending: "Versturen...",
      thankYouMessage: "Bedankt voor je bericht! Ik neem binnenkort contact met je op.",
      errorMessage: "Er is iets misgegaan. Probeer het opnieuw.",

      // Footer
      copyright: "© {{year}} Tom Belmans. Alle rechten voorbehouden.",
      termsOfService: "Servicevoorwaarden",
      privacy: "Privacy",
    },
  },
}

// Initialize i18next
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // React already escapes values
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
    })

export default i18n