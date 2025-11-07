<template>
  <div>
    <Analytics/>
    <NuxtLayout />
    <ClientOnly>
      <div id="adsterra-native"></div>
    </ClientOnly>  </div>
</template>


<script setup>
import { useHead } from '#app'
import { Analytics } from '@vercel/analytics/nuxt'

useHead({
  title: 'Khaleen Schools - Plateforme de modernisation et de digitalisation de Gestion Scolaire Nouvelle Génération',
  meta: [
    { 
      name: 'description', 
      content: 'Khaleen Schools révolutionne la gestion scolaire avec une plateforme tout-en-un intuitive. Gérez classes, élèves, communications et données en temps réel. Solution cloud sécurisée pour écoles primaires et secondaires.' 
    },
    { 
      name: 'keywords', 
      content: 'gestion scolaire, école numérique, plateforme éducative, administration scolaire, Khaleen Schools, gestion établissement, école primaire, école secondaire, cloud éducation' 
    },
    { 
      name: 'author', 
      content: 'Khaleen Schools' 
    },
    { 
      name: 'robots', 
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' 
    }
  ],
  link: [
    { 
      rel: 'canonical', 
      href: 'https://schools.khaleen.com' 
    },
    { 
      rel: 'icon', 
      type: 'image/x-icon', 
      href: '/favicon.png' 
    },
    { 
      rel: 'apple-touch-icon', 
      sizes: '180x180', 
      href: '/favicon.png' 
    }
  ],
  // Open Graph pour les réseaux sociaux
  og: {
    title: 'Khaleen Schools - Gestion Scolaire Intelligente',
    description: 'Plateforme cloud innovante pour automatiser la gestion de votre établissement scolaire. Essayez gratuitement !',
    type: 'website',
    url: 'https://schools.khaleen.com',
    image: 'https://schools.khaleen.com/favicon.png',
    site_name: 'Khaleen Schools'
  },
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Khaleen Schools',
        url: 'https://schools.khaleen.com',
        logo: 'https://schools.khaleen.com/favicon.png',
        description: 'Plateforme de gestion scolaire innovante pour les établissements primaires et secondaires',
        foundingDate: '2025',
        founder: {
          '@type': 'Organization',
          name: 'Khaleen Scools Tech'
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'DRC'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'khaleen.sites@outlook.com',
          availableLanguage: ['French', 'English']
        },
        sameAs: [
          'https://web.facebook.com/profile.php?id=61581755805172',
          'https://wa.me/2439780895522',
          'https://www.linkedin.com/events/creatipondekhaleen7385367062753218560'
        ],
        offers: {
          '@type': 'Offer',
          category: 'SoftwareAsAService',
          name: 'Platforme de Gestion et digitalisation/automatisation Scolaire',
          description: 'Solution cloud complète pour la gestion des établissements scolaires'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Khaleen Schools Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web Browser',
        description: 'Application web de gestion scolaire en temps réel',
        offers: {
          '@type': 'Offer',
          price: '99',
          priceCurrency: 'USD'
        }
      })
    }
  ],
  // Autres balises importantes
  noscript: [
    {
      innerHTML: 'Khaleen Schools nécessite JavaScript pour fonctionner correctement. Veuillez activer JavaScript dans votre navigateur.'
    }
  ],
  style: [
    {
      innerHTML: `/* Critical CSS inline pour améliorer les performances */`
    }
  ]
})

// Configuration supplémentaire pour les performances
useHead({
  htmlAttrs: {
    lang: 'fr',
    class: 'scroll-smooth'
  },
  bodyAttrs: {
    class: 'antialiased font-sans'
  }
})
</script>
