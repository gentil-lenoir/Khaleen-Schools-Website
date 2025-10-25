<template>
  <section class="legal-container">
    <div class="legal-header">
      <h1>Conditions Générales d'Utilisation</h1>
      <p>Dernière mise à jour : {{ currentDate }}</p>
    </div>
    <div class="legal-content">
      <div class="legal-section">
        <h2>1. Acceptation des conditions</h2>
        <p>En utilisant Khaleen, vous acceptez les présentes conditions d'utilisation.</p>
      </div>
      <div class="legal-section">
        <h2>2. Services fournis</h2>
        <p>Khaleen offre une plateforme de gestion scolaire moderne et intuitive.</p>
      </div>
      <div class="legal-section">
        <h2>3. Compte utilisateur</h2>
        <p>Vous êtes responsable de la confidentialité de votre compte et de votre mot de passe.</p>
      </div>
      <div class="legal-section">
        <h2>4. Propriété intellectuelle</h2>
        <p>Vous conservez tous les droits sur le contenu que vous créez avec Khaleen.</p>
      </div>
      <div class="legal-section">
        <h2>5. Limitations de responsabilité</h2>
        <p>Khaleen ne peut être tenu responsable des interruptions de service ou des pertes de données.</p>
      </div>
      <div class="legal-section">
        <h2>6. Modifications des conditions</h2>
        <p>Nous nous réservons le droit de modifier ces conditions à tout moment.</p>
      </div>
      <div class="legal-contact">
        <h3>Questions</h3>
        <p>
          Pour toute question concernant ces conditions, contactez-nous à
          <a href="mailto:khaleen.sites@outlook.com">khaleen.sites@outlook.com</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#app'
import { ref } from 'vue'
const currentDate = ref(new Date().toLocaleDateString('fr-FR'))
useHead({
  title: "Conditions Générales d'Utilisation — Khaleen Schools",
  meta: [
    { name: 'description', content: "Consultez les conditions générales d'utilisation de Khaleen Schools." }
  ]
})
</script>

<style scoped>
.legal-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #ffffff;
}

.legal-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #2d2d2d;
}

.legal-header h1 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #6c63ff, #4a40e5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}

.legal-header p {
  color: #a0a0a0;
  font-size: 1.1rem;
}

.legal-content {
  background: #1e1e1e;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #2d2d2d;
}

.legal-section {
  margin-bottom: 2.5rem;
}

.legal-section h2 {
  color: #6c63ff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.legal-section p {
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.legal-contact {
  background: rgba(108, 99, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid rgba(108, 99, 255, 0.2);
  margin-top: 2rem;
}

.legal-contact h3 {
  color: #6c63ff;
  margin-bottom: 1rem;
}

.legal-contact a {
  color: #6c63ff;
  text-decoration: none;
}

.legal-contact a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 2rem;
  }
  
  .legal-content {
    padding: 1.5rem;
  }
}
</style>
