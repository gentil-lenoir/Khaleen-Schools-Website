<template>
  <div class="support-page">
    <div class="container">
      <!-- En-tête -->
      <div class="support-header">
        <h1>Support &amp; Assistance</h1>
        <p class="lead">
          Retrouvez ici les réponses aux questions fréquentes et contactez notre équipe si besoin.
        </p>
      </div>

      <!-- Section FAQ -->
      <section class="faq-section">
        <h2>FAQ</h2>
        <ul class="faq-list">
          <li>
            <strong>Comment créer un compte école ?</strong>
            <p>Rendez-vous sur la page d’enregistrement et remplissez le formulaire avec les informations de votre établissement.</p>
          </li>
          <li>
            <strong>Comment modifier mes informations ?</strong>
            <p>Après connexion, accédez à votre tableau de bord et cliquez sur “Paramètres”.</p>
          </li>
          <li>
            <strong>Comment contacter le support ?</strong>
            <p>
              Utilisez le formulaire ci-dessous ou envoyez-nous un email à
              <a href="mailto:khaleen.sites@outlook.com">khaleen.sites@outlook.com</a>.
            </p>
          </li>
        </ul>
      </section>

      <!-- Formulaire de contact -->
      <section class="contact-section">
        <h2>Contactez le support</h2>
        <form class="support-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom complet</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="Votre nom complet"
            />
          </div>

          <div class="form-group">
            <label for="email">Adresse e-mail</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="Votre e-mail"
            />
          </div>

          <div class="form-group">
            <label for="subject">Sujet</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="form-input"
              placeholder="Ex : Problème de connexion sur Khaleen Schools"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              class="form-textarea"
              placeholder="Décrivez votre problème ou question..."
            ></textarea>
          </div>

          <button type="submit" class="btn-primary" :disabled="isSending">
            <span v-if="isSending" class="loader"></span>
            {{ isSending ? 'Envoi en cours...' : 'Envoyer le message' }}
          </button>

          <div v-if="success" class="success-box">
            <strong>Message envoyé !</strong>
            <p>Notre équipe vous répondra sous 24h.</p>
          </div>
        </form>
      </section>

      <!-- Infos de contact -->
      <aside class="support-info">
        <h3>Assistance directe</h3>
        <p>Email : <a href="mailto:khaleen.sites@outlook.com">khaleen.sites@outlook.com</a></p>
        <p>Téléphone : +250 729 606 087</p>
        <p>WhatsApp : +243 978 089 552</p>
        <p>Disponible du lundi au vendredi, 8h-18h</p>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const success = ref(false)

const handleSubmit = async () => {
  success.value = false
  isSending.value = true
  await new Promise(resolve => setTimeout(resolve, 1200)) // Simulation d'envoi
  success.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  isSending.value = false
}
</script>

<style scoped>
.support-page {
  background: var(--surface-ground, #f8fafc);
  min-height: 70vh;
  padding: 3rem 0;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.support-header {
  text-align: center;
  margin-bottom: 2rem;
}
.support-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color, #0284c7);
}
.lead {
  font-size: 1.1rem;
  color: #475569;
}
.faq-section {
  margin-bottom: 2.5rem;
}
.faq-list {
  list-style: none;
  padding: 0;
}
.faq-list li {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(2,6,23,0.06);
}
.contact-section {
  margin-bottom: 2.5rem;
}
.support-form {
  background: #fff;
  border: 1px solid #e6eef7;
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 0 4px 16px rgba(2,6,23,0.05);
  max-width: 550px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1rem;
}
.form-input,
.form-textarea {
  width: 90%;
  padding: 0.7rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #0f172a;
  outline: none;
}
.form-input:focus,
.form-textarea:focus {
  border-color: #0ea5a4;
  box-shadow: 0 0 0 2px rgba(14,165,164,0.15);
}
.form-textarea {
  resize: vertical;
}
.btn-primary {
  background: linear-gradient(90deg,#0ea5a4,#0284c7);
  color: #fff;
  padding: 0.65rem 1.1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.loader {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.6rem;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.success-box {
  margin-top: 1rem;
  background: #ecfeff;
  border: 1px solid #67e8f9;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #0f172a;
}
.support-info {
  background: linear-gradient(180deg,#0f172a,#0b1220);
  color: #e6eef7;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 2.5rem;
  text-align: center;
}
.support-info a {
  color: #7dd3fc;
}
@media (max-width: 700px) {
  .container {
    padding: 0 0.75rem;
  }
  .support-form {
    max-width: 100%;
  }
}
</style>
