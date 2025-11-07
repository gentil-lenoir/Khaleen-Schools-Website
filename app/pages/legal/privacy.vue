<template>
  <section class="legal-container">
    <div class="legal-header">
      <h1>Politique de Confidentialité</h1>
      <p>Dernière mise à jour : {{ currentDate }}</p>
    </div>
    <div class="legal-content">
      <div class="legal-section">
        <h2>1. Données collectées</h2>
        <p>Nous collectons les données nécessaires au fonctionnement de votre compte et à l'amélioration de nos services.</p>
      </div><AdsterraSimple />
      <div class="legal-section">
        <h2>2. Utilisation des données</h2>
        <p>Vos données sont utilisées pour :</p>
        <ul>
          <li>Fournir et maintenir nos services</li>
          <li>Personnaliser votre expérience</li>
          <li>Communiquer avec vous</li>
        </ul>
      </div>
      <div class="legal-section">
        <h2>3. Protection des données</h2>
        <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données.</p>
      </div>
      <div class="legal-section">
        <h2>4. Cookies</h2>
        <p>Nous utilisons des cookies pour améliorer votre expérience et analyser l'usage de notre plateforme.</p>
      </div>
      <div class="legal-section">
        <h2>5. Vos droits</h2>
        <p>Vous avez le droit d'accéder, de modifier et de supprimer vos données personnelles.</p>
      </div>
      <div class="legal-contact">
        <h3>Contact</h3>
        <p><AdsterraSimple />
          Pour toute question relative à la confidentialité, contactez-nous à
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
  title: "Politique de Confidentialité — Khaleen Schools",
  meta: [
    { name: 'description', content: "Consultez la politique de confidentialité de Khaleen Schools." }
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
