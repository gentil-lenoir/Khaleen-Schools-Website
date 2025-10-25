<template>
  <section class="about-page">
    <div class="container">
      <h1>À propos de Khaleen Schools</h1>
      <p class="lead">Khaleen Schools est une plateforme innovante dédiée à la gestion moderne des établissements scolaires.</p>
      <div class="about-content">
        <h2>Notre mission</h2>
        <p>Faciliter la gestion administrative, pédagogique et la communication au sein des écoles grâce à des outils numériques performants, accessibles et sécurisés.</p>
        <h2>Notre équipe</h2>
        <p>Nous sommes une équipe passionnée d’experts en éducation, technologie et design, engagée à accompagner les écoles dans leur transformation digitale.</p>
        <h2>Nos valeurs</h2>
        <ul>
          <li>Innovation continue</li>
          <li>Simplicité d’utilisation</li>
          <li>Respect de la confidentialité</li>
          <li>Support humain et réactif</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#app'
useHead({
  title: 'À propos — Khaleen Schools',
  meta: [
    { name: 'description', content: 'Découvrez la mission, l’équipe et les valeurs de Khaleen Schools, plateforme de gestion scolaire innovante.' }
  ]
})
</script>

<style scoped>
.about-page { padding: 4rem 0; background: var(--surface-ground); min-height: 70vh; }
.container { max-width: 900px; margin: 0 auto; padding: 0 2rem; }
h1 { font-size: 2.5rem; margin-bottom: 1rem; color: var(--primary-color); }
.lead { font-size: 1.2rem; color: var(--text-700); margin-bottom: 2rem; }
.about-content h2 { margin-top: 2rem; color: var(--primary-700); }
.about-content ul { margin: 1rem 0 0 1.5rem; color: var(--text-600); }
</style>
