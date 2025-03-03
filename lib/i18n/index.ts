import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      about: "About",
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

      // Tech stack section
      techStackTitle: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",

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

      // Tech stack section
      techStackTitle: "Stack Technique",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Outils",

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
      chatInterfaceDescription:
          "Ein KI-basiertes Chat-Interface mit Fähigkeiten zur natürlichen Sprachverarbeitung.",
      viewOnGithub: "Auf GitHub ansehen",

      // Tech stack section
      techStackTitle: "Tech-Stack",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",

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

      // Tech stack section
      techStackTitle: "Tech Stack",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",

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

