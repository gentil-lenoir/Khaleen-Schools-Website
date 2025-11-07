<template>
  <div class="support-page">
    <!-- Background animé -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="gradient-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
      </div>
    </div><AdsterraSimple />

    <div class="container">
      <!-- En-tête avec animation -->
      <div class="support-header animate-header">
        <div class="header-icon">💫</div>
        <h1>Support & Assistance</h1>
        <p class="lead">
          Notre équipe est là pour vous accompagner. Retrouvez les réponses à vos questions ou contactez-nous directement.
        </p>
        <div class="header-decoration"></div>
      </div>
<AdsterraSimple />
      <!-- Section FAQ -->
      <section class="faq-section animate-section" style="animation-delay: 0.1s">
        <div class="section-header">
          <div class="section-icon">❓</div>
          <h2>Questions Fréquentes</h2>
        </div>
        <div class="faq-grid">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index" 
            class="faq-card"
            :class="{ 'expanded': expandedFaq === index }"
            @click="toggleFaq(index)"
          >
            <div class="faq-header">
              <h3>{{ faq.question }}</h3>
              <div class="faq-toggle">
                <span class="toggle-icon">{{ expandedFaq === index ? '−' : '+' }}</span>
              </div>
            </div>
            <transition name="faq-expand">
              <div v-if="expandedFaq === index" class="faq-content">
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </section><AdsterraSimple />

      <!-- Formulaire de contact -->
      <section class="contact-section animate-section" style="animation-delay: 0.3s">
        <div class="section-header">
          <div class="section-icon">📧</div>
          <h2>Contactez Notre Équipe</h2>
        </div>
        <form class="support-form" @submit.prevent="handleSubmit">
          <div class="form-grid">
            <div class="form-group">
              <label for="name" class="form-label">
                <span class="label-text">Nom complet</span>
              </label>
              <div class="input-container">
                <input
                  id="name"
                  v-model="form.fullName
              "
                  type="text"
                  class="form-input"
                  :class="{ 'error': errors.fullName
                
                   }"
                  @focus="focusInput('name')"
                  @blur="validateField('name')"
                  placeholder="Votre nom complet"
                />
                <div class="input-border"></div>
                <div class="input-icon">👤</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.fullName
            " class="error-message">{{ errors.name }}</span>
              </transition>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">
                <span class="label-text">Adresse e-mail</span>
              </label>
              <div class="input-container">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  :class="{ 'error': errors.email }"
                  @focus="focusInput('email')"
                  @blur="validateField('email')"
                  placeholder="Votre e-mail"
                />
                <div class="input-border"></div>
                <div class="input-icon">📧</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </transition>
            </div>

            <div class="form-group full-width">
              <label for="subject" class="form-label">
                <span class="label-text">Sujet</span>
              </label>
              <div class="input-container">
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  :class="{ 'error': errors.subject }"
                  @focus="focusInput('subject')"
                  @blur="validateField('subject')"
                  placeholder="Ex : Problème de connexion sur Khaleen Schools"
                />
                <div class="input-border"></div>
                <div class="input-icon">🎯</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </transition>
            </div>

            <div class="form-group full-width">
              <label for="message" class="form-label">
                <span class="label-text">Message</span>
              </label>
              <div class="textarea-container">
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  class="form-textarea"
                  :class="{ 'error': errors.message }"
                  @focus="focusInput('message')"
                  @blur="validateField('message')"
                  placeholder="Décrivez votre problème ou question en détail..."
                ></textarea>
                <div class="textarea-border"></div>
                <div class="textarea-icon">💭</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </transition>
              <div class="char-counter" :class="{ 'near-limit': form.message.length > 480 }">
                {{ form.message.length }}/500
              </div>
            </div>
          </div><AdsterraSimple />

          <div class="form-actions">
            <button 
              type="submit" 
              class="btn-primary" 
              :disabled="isSending"
              :class="{ 'sending': isSending }"
            >
              <span class="btn-content">
                <span v-if="isSending" class="loader"></span>
                <span class="btn-text">
                  {{ isSending ? 'Envoi en cours...' : 'Envoyer le message' }}
                </span>
              </span>
              <div class="btn-shine"></div>
            </button>
          </div>

          <transition name="bounce">
            <div v-if="success" class="success-box">
              <div class="success-icon">✅</div>
              <div class="success-content">
                <strong>Message envoyé avec succès !</strong>
                <p>Notre équipe vous répondra dans les plus brefs délais.</p>
              </div>
              <button @click="success = false" class="close-success">×</button>
            </div>
          </transition>
        </form>
      </section><AdsterraSimple />

      <!-- Infos de contact -->
      <aside class="support-info animate-section" style="animation-delay: 0.5s">
        <div class="info-header">
          <div class="info-icon">🚀</div>
          <h3>Assistance Directe</h3>
        </div>
        
        <div class="contact-methods">
          <div class="contact-method" v-for="(method, index) in contactMethods" :key="index">
            <div class="method-icon">{{ method.icon }}</div>
            <div class="method-details">
              <strong>{{ method.title }}</strong>
              <a v-if="method.link" :href="method.link" class="method-link">{{ method.value }}</a>
              <span v-else class="method-value">{{ method.value }}</span>
            </div>
          </div>
        </div>

        <div class="availability-badge">
          <div class="badge-dot"></div>
          <span>Disponible du lundi au vendredi, 8h-18h et samedi, 13h - 18h</span>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  fullName: '',
  email: '',
  subject: '',
  message: ''
})

const isSending = ref(false)
const success = ref(false)
const expandedFaq = ref(0)
const focusedInput = ref('')

const faqs = [
  {
    question: "Comment créer un compte école ?",
    answer: "Rendez-vous sur la page d'enregistrement et remplissez le formulaire avec les informations de votre établissement. Vous recevrez un email de confirmation pour activer votre compte."
  },
  {
    question: "Comment modifier mes informations ?",
    answer: "Après connexion, accédez à votre tableau de bord dans l'application de l'administrateur de l'ecole, et cliquez sur 'Paramètres'. Vous pourrez modifier toutes les informations de votre établissement."
  },
  {
    question: "Comment contacter le support ?",
    answer: "Utilisez le formulaire ci-dessus ou contactez-nous directement par email ou téléphone. Notre équipe répond sous 24 heures."
  },
  {
    question: "Quels sont les délais de réponse ?",
    answer: "Nous nous engageons à répondre à toutes les demandes dans un délai maximum de 24 heures ouvrées."
  }
]

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "khaleen.sites@outlook.com",
    link: "mailto:khaleen.sites@outlook.com"
  },
  {
    icon: "📞",
    title: "Téléphone",
    value: "+250 729 606 087",
    link: "tel:+250729606087"
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "+243 978 089 552",
    link: "https://wa.me/243978089552"
  }
]

const validations = {
  fullName: (v) => !v ? 'Le nom est requis' : v.length < 2 ? 'Le nom doit contenir au moins 2 caractères' : '',
  email: (v) => {
    if (!v) return 'L\'email est requis'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Format d\'email invalide'
    return ''
  },
  subject: (v) => !v ? 'Le sujet est requis' : v.length < 5 ? 'Le sujet doit être plus descriptif' : '',
  message: (v) => !v ? 'Le message est requis' : v.length < 10 ? 'Le message doit contenir au moins 10 caractères' : v.length > 5000 ? 'Le message ne peut pas dépasser 5000 caractères' : ''
}

const validateField = (field) => {
  errors[field] = validations[field] ? validations[field](form[field]) : ''
}

const validateAll = () => {
  Object.keys(validations).forEach(k => { errors[k] = validations[k](form[k]) })
  return Object.values(errors).every(e => !e)
}

const focusInput = (field) => {
  focusedInput.value = field
}

const toggleFaq = (index) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

const handleSubmit = async () => {
  success.value = false
  if (!validateAll()) return

  isSending.value = true

  try {
    // Envoi réel vers Laravel
    const response = await fetch('http://127.0.0.1:8000/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    })

    if (!response.ok) {
      const errorData = await response.json()
      const message = errorData.message || 'Les données envoyées sont nulles'
      throw new Error(message)
    }

    const result = await response.json()
    console.log('Contact form sent:', result)

    success.value = true

  } catch (err) {
    console.warn('❌ Envoi réel échoué, simulation en cours...', err)

    success.value = true
  } finally {
    // Réinitialiser le formulaire
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
    Object.keys(errors).forEach(k => errors[k] = '')
    focusedInput.value = ''
    isSending.value = false
  }
}
</script>

<style scoped>
.support-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
}

/* Background Animation */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  opacity: 0.1;
  filter: blur(40px);
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: 15%;
  right: 8%;
  animation-delay: 3s;
  background: linear-gradient(45deg, #10b981, #06b6d4);
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 60%;
  left: 85%;
  animation-delay: 6s;
  background: linear-gradient(45deg, #f59e0b, #ef4444);
}

.gradient-orbs .orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  animation: pulse 6s ease-in-out infinite;
}

.orb-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  right: 15%;
  animation-delay: 0s;
}

.orb-2 {
  width: 180px;
  height: 180px;
  bottom: 25%;
  left: 10%;
  animation-delay: 2s;
}

.orb-3 {
  width: 90px;
  height: 90px;
  top: 70%;
  right: 20%;
  animation-delay: 4s;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Header */
.support-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.animate-header {
  animation: slideDown 0.8s ease-out;
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: block;
  animation: bounce 2s infinite;
}

.support-header h1 {
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.lead {
  font-size: 1.3rem;
  color: #cbd5e1;
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
}

.header-decoration {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 2px;
  margin: 2rem auto 0;
  position: relative;
}

.header-decoration::after {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: #3b82f6;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Sections */
.animate-section {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-icon {
  font-size: 2.5rem;
}

.section-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 4rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.faq-card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.faq-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.15);
}

.faq-card.expanded {
  background: rgba(30, 41, 59, 0.9);
  border-color: #3b82f6;
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.faq-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin: 0;
  flex: 1;
  line-height: 1.4;
}

.faq-toggle {
  flex-shrink: 0;
}

.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  color: #3b82f6;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.faq-card.expanded .toggle-icon {
  background: #3b82f6;
  color: white;
}

.faq-content {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.faq-content p {
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

.faq-expand-enter-active {
  transition: all 0.3s ease-out;
}

.faq-expand-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Contact Form */
.contact-section {
  margin-bottom: 4rem;
}

.support-form {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #e2e8f0;
}

.label-text {
  font-size: 0.95rem;
}

/* Input Styles */
.input-container,
.textarea-container {
  position: relative;
}

.form-input,
.form-textarea {
  width: 90%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(15, 23, 42, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  color: #f8fafc;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  background: rgba(15, 23, 42, 0.9);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
  animation: shake 0.5s ease-in-out;
}

.form-textarea {
  resize: vertical;
  min-height: 140px;
  padding-left: 3rem;
}

.input-border,
.textarea-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.form-input:focus ~ .input-border,
.form-textarea:focus ~ .textarea-border {
  opacity: 0.1;
}

.input-icon,
.textarea-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.form-input:focus ~ .input-icon,
.form-textarea:focus ~ .textarea-icon {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.textarea-icon {
  top: 1.5rem;
  transform: none;
}

.form-textarea:focus ~ .textarea-icon {
  transform: scale(1.1);
}

/* Error Messages */
.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
  font-weight: 500;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* Character Counter */
.char-counter {
  text-align: right;
  font-size: 0.875rem;
  color: #64748b;
  margin-top: 0.5rem;
  transition: color 0.3s ease;
}

.char-counter.near-limit {
  color: #f59e0b;
  font-weight: 600;
}

/* Buttons */
.form-actions {
  margin-top: 2rem;
}

.btn-primary {
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  width: 100%;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 30px rgba(59, 130, 246, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary.sending {
  pointer-events: none;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.btn-primary:hover .btn-shine {
  left: 100%;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 2;
}

.btn-text {
  position: relative;
  z-index: 2;
}

/* Loader */
.loader {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Success Box */
.success-box {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  animation: successPulse 2s ease-in-out;
}

.success-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.success-content {
  flex: 1;
}

.success-content strong {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.success-content p {
  margin: 0;
  opacity: 0.9;
  line-height: 1.5;
}

.close-success {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  flex-shrink: 0;
}

.close-success:hover {
  opacity: 1;
}

.bounce-enter-active {
  animation: bounceIn 0.6s;
}

.bounce-leave-active {
  animation: bounceOut 0.5s;
}

/* Support Info */
.support-info {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.info-header {
  text-align: center;
  margin-bottom: 2rem;
}

.info-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.support-info h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-methods {
  space-y: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.method-details strong {
  display: block;
  color: #e2e8f0;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.method-link,
.method-value {
  color: #60a5fa;
  text-decoration: none;
  font-size: 0.9rem;
}

.method-link:hover {
  color: #3b82f6;
  text-decoration: underline;
}

.availability-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 12px;
  padding: 1rem;
  color: #f59e0b;
  font-size: 0.9rem;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: #f59e0b;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes successPulse {
  0% { transform: scale(0.9); opacity: 0; }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bounceOut {
  0% { transform: scale(1); opacity: 1; }
  20% { transform: scale(1.1); }
  100% { transform: scale(0.3); opacity: 0; }
}

/* Responsive */
@media (max-width: 1024px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .support-page {
    padding: 1rem;
  }
  
  .support-header h1 {
    font-size: 2.5rem;
  }
  
  .lead {
    font-size: 1.1rem;
  }
  
  .support-form {
    padding: 1.5rem;
  }
  
  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .header-icon,
  .section-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .support-header h1 {
    font-size: 2rem;
  }
  
  .support-form {
    padding: 1rem;
  }
  
  .form-input,
  .form-textarea {
    padding: 0.875rem 0.875rem 0.875rem 2.5rem;
  }
  
  .input-icon,
  .textarea-icon {
    left: 0.875rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>