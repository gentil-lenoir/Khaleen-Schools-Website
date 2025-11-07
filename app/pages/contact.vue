<template>
  <div class="contact-page">
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
    </div>

    <div class="contact-container">
      <!-- Header avec animation -->
      <header class="contact-header animate-header">
        <div class="header-icon">💬</div>
        <h1>Contactez Khaleen Schools</h1>
        <p>Une question ? Un besoin d'information ? Notre équipe vous répond sous 24h.</p>
        <div class="header-decoration"></div>
      </header>

      <!-- Contenu principal -->
      <div class="contact-content">
        <!-- Formulaire -->
        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-grid">
            <div class="form-group animate-form" style="animation-delay: 0.1s">
              <label for="fullName" class="form-label">
                <span class="label-text">Nom complet</span>
                <span class="required">*</span>
              </label>
              <div class="input-container">
                <input 
                  id="fullName" 
                  v-model="form.fullName" 
                  type="text" 
                  class="form-input" 
                  :class="{ error: errors.fullName }" 
                  @blur="validateField('fullName')" 
                  @focus="focusInput('fullName')"
                  placeholder="Ex: Jean Dupont" 
                />
                <div class="input-border"></div>
                <div class="input-icon">👤</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.fullName" class="error-message">{{ errors.fullName }}</span>
              </transition>
            </div>

            <div class="form-group animate-form" style="animation-delay: 0.2s">
              <label for="email" class="form-label">
                <span class="label-text">Email</span>
                <span class="required">*</span>
              </label>
              <div class="input-container">
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  class="form-input" 
                  :class="{ error: errors.email }" 
                  @blur="validateField('email')" 
                  @focus="focusInput('email')"
                  placeholder="contact@ecole.edu" 
                />
                <div class="input-border"></div>
                <div class="input-icon">📧</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </transition>
            </div>

            <div class="form-group animate-form" style="animation-delay: 0.3s">
              <label for="phone" class="form-label">
                <span class="label-text">Téléphone</span>
              </label>
              <div class="input-container">
                <input 
                  id="phone" 
                  v-model="form.phone" 
                  type="tel" 
                  class="form-input" 
                  @focus="focusInput('phone')"
                  placeholder="+243 XX XXX XXXX" 
                />
                <div class="input-border"></div>
                <div class="input-icon">📞</div>
              </div>
            </div>

            <div class="form-group animate-form" style="animation-delay: 0.4s">
              <label for="subject" class="form-label">
                <span class="label-text">Sujet</span>
                <span class="required">*</span>
              </label>
              <div class="input-container">
                <input 
                  id="subject" 
                  v-model="form.subject" 
                  type="text" 
                  class="form-input" 
                  :class="{ error: errors.subject }" 
                  @blur="validateField('subject')" 
                  @focus="focusInput('subject')"
                  placeholder="Ex: Demande d'information" 
                />
                <div class="input-border"></div>
                <div class="input-icon">🎯</div>
              </div>
              <transition name="slide-fade">
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </transition>
            </div>
          </div>

          <div class="form-group animate-form" style="animation-delay: 0.5s">
            <label for="message" class="form-label">
              <span class="label-text">Message</span>
              <span class="required">*</span>
            </label>
            <div class="textarea-container">
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="6" 
                class="form-textarea" 
                :class="{ error: errors.message }" 
                @blur="validateField('message')" 
                @focus="focusInput('message')"
                placeholder="Décrivez votre demande en détail..." 
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

          <div class="form-actions animate-form" style="animation-delay: 0.6s">
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

            <button 
              type="button" 
              class="btn-secondary" 
              @click="resetForm" 
              :disabled="isSending"
            >
              <span class="btn-text">Réinitialiser</span>
            </button>
          </div>

          <transition name="bounce">
            <div v-if="success" class="success-box">
              <div class="success-icon">✅</div>
              <div class="success-content">
                <strong>Message envoyé avec succès !</strong>
                <p>Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.</p>
              </div>
              <button @click="success = false" class="close-success">×</button>
            </div>
          </transition>
        </form><AdsterraSimple />

        <!-- Sidebar de contact -->
        <aside class="contact-aside animate-aside">
          <div class="aside-header">
            <div class="aside-icon">🏫</div>
            <h3>Nos Coordonnées</h3>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-details">
                <strong>Adresse</strong>
                <p>Gisozi/Kigali/Rwanda <br> Kisasu N°93/Ndosho/Goma/RDCongo</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-details">
                <strong>Email</strong>
                <p>
                  <a href="mailto: khaleen.sites@outlook.com" class="contact-link">
                    khaleen.sites@outlook.com
                  </a>
                </p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-details">
                <strong>WhatsApp</strong>
                <p>
                  <a href="https://wa.me/243978089552?text=Bonjour depuis le support de Khaleen Schools" class="contact-link">
                    +243 978 089 552
                  </a>
                </p>
              </div>
            </div><AdsterraSimple />

            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div class="contact-details">
                <strong>Horaires</strong>
                <p>Lun - Ven: 8h00 - 18h00<br>Sam: 13h00 - 18h00</p>
              </div>
            </div>
          </div>

          <div class="support-badge">
            <div class="badge-icon">⚡</div>
            <div class="badge-content">
              <strong>Support Réactif</strong>
              <span>Réponse sous 24h</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
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
const focusedInput = ref('')

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

const handleSubmit = async () => {
  success.value = false
  if (!validateAll()) return

  isSending.value = true

  try {
    const response = await fetch('http://127.0.0.1:8000/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form) // Assure-toi que `form` contient bien les données
    })

    if (!response.ok) {
      const errorData = await response.json()
      const message = errorData.message || 'Les données envoyées sont nulles'
      throw new Error(message)
    }

    const result = await response.json()
    console.log('Contact form sent:', result)

    success.value = true
    resetForm(false)

  } catch (err) {
    console.error('Erreur lors de la soumission:', err)
    alert('❌ ' + err.message)
  } finally {
    isSending.value = false
  }
}

const resetForm = (clearSuccess = true) => {
  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.subject = ''
  form.message = ''
  Object.keys(errors).forEach(k => errors[k] = '')
  focusedInput.value = ''
  if (clearSuccess) success.value = false
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
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
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: 20%;
  right: 10%;
  animation-delay: 2s;
  background: linear-gradient(45deg, #10b981, #06b6d4);
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 80%;
  animation-delay: 4s;
  background: linear-gradient(45deg, #f59e0b, #ef4444);
}

.gradient-orbs {
  position: absolute;
  width: 100%;
  height: 100%;
}

.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  animation: pulse 4s ease-in-out infinite;
}

.orb-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  right: 20%;
  animation-delay: 0s;
}

.orb-2 {
  width: 150px;
  height: 150px;
  bottom: 30%;
  left: 15%;
  animation-delay: 1.5s;
}

.orb-3 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 10%;
  animation-delay: 3s;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Header */
.contact-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.animate-header {
  animation: slideDown 0.8s ease-out;
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: block;
  animation: bounce 2s infinite;
}

.contact-header h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 1rem 0;
  line-height: 1.1;
}

.contact-header p {
  font-size: 1.2rem;
  color: #cbd5e1;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

/* Layout */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  align-items: start;
}

/* Formulaire */
.contact-form {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.animate-form {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #e2e8f0;
}

.label-text {
  font-size: 0.95rem;
}

.required {
  color: #ef4444;
  font-size: 1.2rem;
}

/* Input Containers */
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
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
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
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
  position: relative;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  flex: 1;
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

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.btn-primary:disabled,
.btn-secondary:disabled {
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

/* Sidebar */
.contact-aside {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05);
}

.animate-aside {
  animation: slideInRight 0.8s ease-out 0.2s both;
}

.aside-header {
  text-align: center;
  margin-bottom: 2rem;
}

.aside-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.contact-aside h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0;
  background: linear-gradient(135deg, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-info {
  space-y: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-icon {
  font-size: 1.2rem;
  opacity: 0.8;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.contact-details strong {
  display: block;
  color: #e2e8f0;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.contact-details p {
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-link {
  color: #60a5fa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #3b82f6;
  text-decoration: underline;
}

.support-badge {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: glow 2s ease-in-out infinite alternate;
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-content {
  flex: 1;
}

.badge-content strong {
  display: block;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.badge-content span {
  font-size: 0.85rem;
  opacity: 0.9;
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

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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

@keyframes glow {
  from {
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
  }
  to {
    box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-aside {
    order: -1;
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 1rem;
  }
  
  .contact-header h1 {
    font-size: 2.5rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
  
  .header-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .contact-header p {
    font-size: 1rem;
  }
  
  .contact-form {
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
}
</style>