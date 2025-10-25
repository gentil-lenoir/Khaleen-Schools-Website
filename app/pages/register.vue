<template>
  <div class="register-page">
    <div class="register-container">
      <!-- En-tête -->
      <div class="register-header">
        <h1 class="register-title">🏫 Enregistrement d'Établissement Scolaire</h1>
        <p class="register-subtitle">
          Créez votre compte institutionnel Khaleen Schools. 
          Tous les champs marqués d'un <span class="required">*</span> sont obligatoires.
        </p>
      </div>

      <!-- Barre de progression -->
      <div class="progress-container">
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
          ></div>
        </div>
        <div class="progress-steps">
          <span 
            v-for="step in steps" 
            :key="step.number"
            :class="['step', { 
              'active': currentStep === step.number, 
              'completed': currentStep > step.number 
            }]"
          >
            {{ step.number }}. {{ step.label }}
          </span>
        </div>
      </div>

      <!-- Formulaire principal -->
      <form @submit.prevent="handleSubmit" class="register-form">
        <!-- Étape 0: Sélection du plan -->
        <div v-if="currentStep === 0" class="form-step">
          <h2 class="step-title">Choisissez Votre Plan</h2>
          <p class="step-description">
            Sélectionnez le plan qui correspond le mieux aux besoins de votre établissement.
          </p>

          <div class="plans-grid">
            <div 
              v-for="plan in pricingPlans" 
              :key="plan.id"
              :class="['plan-card', { 'selected': selectedPlan?.id === plan.id }]"
              @click="selectPlan(plan)"
            >
              <div class="plan-header">
                <h3 class="plan-name">{{ plan.name }}</h3>
                <div class="plan-price">
                  {{ plan.price === 0 ? 'Gratuit' : `$${plan.price}` }}
                  <span v-if="plan.price > 0">/mois</span>
                </div>
              </div>
              <div class="plan-features">
                <div class="feature">
                  <span class="feature-icon">👨‍🎓</span>
                  <span class="feature-text">Jusqu'à {{ plan.maxStudents }} élèves</span>
                </div>
                <div class="feature">
                  <span class="feature-icon">📚</span>
                  <span class="feature-text">{{ plan.features.join(', ') }}</span>
                </div>
                <div class="feature">
                  <span class="feature-icon">🛡️</span>
                  <span class="feature-text">{{ plan.support }}</span>
                </div>
              </div>
              <div class="plan-badge" v-if="plan.recommended">
                Recommandé
              </div>
            </div>
          </div>

          <div v-if="selectedPlan" class="selected-plan-info">
            <h4>Plan sélectionné : <strong>{{ selectedPlan.name }}</strong></h4>
            <p>Limite d'élèves : {{ selectedPlan.maxStudents === 1000000000000 ? 'Illimité' : selectedPlan.maxStudents }}</p>
          </div>
        </div>

        <!-- Étape 1: Informations de base -->
        <div v-if="currentStep === 1" class="form-step">
          <h2 class="step-title">Informations de Base</h2>
          
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                Nom officiel de l'établissement <span class="required">*</span>
              </label>
              <input
                v-model="form.schoolName"
                type="text"
                class="form-input"
                :class="{ 'error': errors.schoolName }"
                placeholder="Ex: Lycée Technique de la Ville"
                @blur="validateField('schoolName')"
              />
              <span v-if="errors.schoolName" class="error-message">{{ errors.schoolName }}</span>
            </div>

            <div class="form-group">
              <label class="form-label">
                Sigle/Acronyme
              </label>
              <input
                v-model="form.acronym"
                type="text"
                class="form-input"
                placeholder="Ex: LTV"
              />
            </div>
          </div>

        <div class="form-group">
          <label class="form-label">
            Logo de l'établissement
          </label>
          <div class="logo-upload">
            <div class="logo-preview" v-if="form.logoPreview">
              <img :src="form.logoPreview" alt="Logo preview" class="logo-image" />
              <button type="button" @click="removeLogo" class="remove-logo">×</button>
            </div>
            <div v-else class="logo-placeholder" @click="triggerFileInput">
              <input
                type="file"
                ref="logoInput"
                @change="handleLogoUpload"
                accept="image/*"
                class="logo-input"
              />
              <div class="upload-content">
                <span class="upload-icon">📷</span>
                <span class="upload-text">Cliquez pour importer le logo</span>
                <span class="upload-hint">PNG, JPG max. 2MB</span>
              </div>
            </div>
          </div>
          <div v-if="logoError" class="error-message">{{ logoError }}</div>
        </div>
          <div class="form-group">
            <label class="form-label">
              Devise/Mission de l'établissement
            </label>
            <textarea
              v-model="form.motto"
              rows="3"
              class="form-textarea"
              placeholder="Ex: Excellence, Discipline, Réussite"
            ></textarea>
          </div>
        </div>

        <!-- Étape 2: Type et catégorie -->
        <div v-if="currentStep === 2" class="form-step">
          <h2 class="step-title">Type d'Établissement</h2>
          
          <div class="form-group">
            <label class="form-label">
              Niveau d'enseignement <span class="required">*</span>
            </label>
            <div class="radio-group">
              <label class="radio-option">
                <input
                  type="radio"
                  v-model="form.educationLevel"
                  value="primary"
                  class="radio-input"
                />
                <span class="radio-custom"></span>
                <span class="radio-label">Primaire</span>
              </label>
              <label class="radio-option">
                <input
                  type="radio"
                  v-model="form.educationLevel"
                  value="secondary"
                  class="radio-input"
                />
                <span class="radio-custom"></span>
                <span class="radio-label">Secondaire</span>
              </label>
              <label class="radio-option">
                <input
                  type="radio"
                  v-model="form.educationLevel"
                  value="mixed"
                  class="radio-input"
                />
                <span class="radio-custom"></span>
                <span class="radio-label">Mixte (Primaire + Secondaire)</span>
              </label>
            </div>
            <span v-if="errors.educationLevel" class="error-message">{{ errors.educationLevel }}</span>
          </div>

          <div class="form-group">
            <label class="form-label">
              Type d'établissement <span class="required">*</span>
            </label>
            <select
              v-model="form.schoolType"
              class="form-select"
              :class="{ 'error': errors.schoolType }"
              @blur="validateField('schoolType')"
            >
              <option value="">Sélectionnez le type</option>
              <option value="public">Public</option>
              <option value="private">Privé</option>
              <option value="confessional">Confessionnel</option>
              <option value="international">International</option>
            </select>
            <span v-if="errors.schoolType" class="error-message">{{ errors.schoolType }}</span>
          </div>

          <div class="form-group">
            <label class="form-label">Religion (si confessionnel)</label>
            <select v-model="form.religion" class="form-select">
              <option value="">Non applicable</option>
              <option value="catholic">Catholique</option>
              <option value="protestant">Protestant</option>
              <option value="muslim">Musulman</option>
              <option value="christian">Chrétien</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">
              Année de fondation
            </label>
            <input
              v-model="form.foundingYear"
              type="number"
              min="1900"
              :max="new Date().getFullYear()"
              class="form-input"
              placeholder="Ex: 1995"
            />
          </div>
        </div>

        <!-- Étape 3: Informations de contact -->
        <div v-if="currentStep === 3" class="form-step">
          <h2 class="step-title">Coordonnées et Contact</h2>
          
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                Adresse email institutionnelle <span class="required">*</span>
              </label>
              <input
                v-model="form.email"
                type="email"
                class="form-input"
                :class="{ 'error': errors.email }"
                placeholder="ex: contact@ecole.edu"
                @blur="validateField('email')"
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label class="form-label">
                Téléphone principal <span class="required">*</span>
              </label>
              <input
                v-model="form.phone"
                type="tel"
                class="form-input"
                :class="{ 'error': errors.phone }"
                placeholder="Ex: +243 XX XXX XXXX"
                @blur="validateField('phone')"
              />
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">
              Adresse physique complète <span class="required">*</span>
            </label>
            <textarea
              v-model="form.address"
              rows="3"
              class="form-textarea"
              :class="{ 'error': errors.address }"
              placeholder="Avenue, Numéro, Quartier, Commune, Ville, Province..."
              @blur="validateField('address')"
            ></textarea>
            <span v-if="errors.address" class="error-message">{{ errors.address }}</span>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Boîte postale</label>
              <input
                v-model="form.poBox"
                type="text"
                class="form-input"
                placeholder="Ex: BP 1234"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Ville <span class="required">*</span></label>
              <input
                v-model="form.city"
                type="text"
                class="form-input"
                :class="{ 'error': errors.city }"
                placeholder="Ex: Kinshasa"
                @blur="validateField('city')"
              />
              <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Province</label>
              <input
                v-model="form.province"
                type="text"
                class="form-input"
                placeholder="Ex: Kinshasa"
              />
            </div>

            <div class="form-group">
              <label class="form-label">Pays <span class="required">*</span></label>
              <select
                v-model="form.country"
                class="form-select"
                :class="{ 'error': errors.country }"
                @blur="validateField('country')"
              >
                <option value="">Sélectionnez le pays</option>
                <option value="drc">République Démocratique du Congo</option>
                <option value="rw">Rwanda</option>
                <option value="other">Autre</option>
              </select>
              <span v-if="errors.country" class="error-message">{{ errors.country }}</span>
            </div>
          </div>
        </div>

        <!-- Étape 4: Effectifs et ressources -->
        <div v-if="currentStep === 4" class="form-step">
          <h2 class="step-title">Effectifs et Ressources</h2>
          
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                Nombre d'élèves approximatif <span class="required">*</span>
              </label>
              <input
                v-model="form.studentCount"
                type="number"
                :min="1"
                :max="selectedPlan?.maxStudents || 1000"
                class="form-input"
                :class="{ 'error': errors.studentCount }"
                :placeholder="`Max: ${selectedPlan?.maxStudents === 999999 ? 'Illimité' : selectedPlan?.maxStudents}`"
                @blur="validateField('studentCount')"
              />
              <span v-if="errors.studentCount" class="error-message">{{ errors.studentCount }}</span>
              <div v-if="selectedPlan" class="plan-limit">
                Limite de votre plan : {{ selectedPlan.maxStudents === 999999 ? 'Illimité' : selectedPlan.maxStudents }} élèves
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">
                Nombre d'enseignants <span class="required">*</span>
              </label>
              <input
                v-model="form.teacherCount"
                type="number"
                min="1"
                class="form-input"
                :class="{ 'error': errors.teacherCount }"
                placeholder="Ex: 25"
                @blur="validateField('teacherCount')"
              />
              <span v-if="errors.teacherCount" class="error-message">{{ errors.teacherCount }}</span>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                Personnel administratif
              </label>
              <input
                v-model="form.adminStaffCount"
                type="number"
                min="0"
                class="form-input"
                placeholder="Ex: 10"
              />
            </div>

            <div class="form-group">
              <label class="form-label">
                Personnel de soutien
              </label>
              <input
                v-model="form.supportStaffCount"
                type="number"
                min="0"
                class="form-input"
                placeholder="Ex: 5"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">
              Budget annuel approximatif (USD)
            </label>
            <select v-model="form.annualBudget" class="form-select">
              <option value="">Sélectionnez une fourchette</option>
              <option value="0-10000">0 - 10,000 USD</option>
              <option value="10000-50000">10,000 - 50,000 USD</option>
              <option value="50000-100000">50,000 - 100,000 USD</option>
              <option value="100000-500000">100,000 - 500,000 USD</option>
              <option value="500000+">500,000 USD et plus</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Source de financement principale</label>
            <select v-model="form.fundingSource" class="form-select">
              <option value="">Sélectionnez</option>
              <option value="government">Gouvernement</option>
              <option value="tuition">Frais de scolarité</option>
              <option value="donations">Dons</option>
              <option value="mixed">Mixte</option>
              <option value="other">Autre</option>
            </select>
          </div>
        </div>

        <!-- Étape 5: Réseaux sociaux -->
        <div v-if="currentStep === 5" class="form-step">
          <h2 class="step-title">Présence en Ligne</h2>
          
          <div class="form-group">
            <label class="form-label">Site web officiel</label>
            <input
              v-model="form.website"
              type="url"
              class="form-input"
              placeholder="https://www.ecole.edu"
            />
          </div>

          <div class="social-grid">
            <div class="form-group">
              <label class="form-label">Facebook</label>
              <input
                v-model="form.socials.facebook"
                type="url"
                class="form-input"
                placeholder="https://facebook.com/ecole"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Twitter/X</label>
              <input
                v-model="form.socials.twitter"
                type="url"
                class="form-input"
                placeholder="https://twitter.com/ecole"
              />
            </div>
            <div class="form-group">
              <label class="form-label">LinkedIn</label>
              <input
                v-model="form.socials.linkedin"
                type="url"
                class="form-input"
                placeholder="https://linkedin.com/school/ecole"
              />
            </div>
            <div class="form-group">
              <label class="form-label">Instagram</label>
              <input
                v-model="form.socials.instagram"
                type="url"
                class="form-input"
                placeholder="https://instagram.com/ecole"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Autres plateformes</label>
            <textarea
              v-model="form.socials.other"
              rows="2"
              class="form-textarea"
              placeholder="YouTube, TikTok, etc."
            ></textarea>
          </div>
        </div>

        <!-- Étape 6: Mot de passe et sécurité -->
        <div v-if="currentStep === 6" class="form-step">
          <h2 class="step-title">Sécurité du Compte</h2>
          
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                Mot de passe <span class="required">*</span>
              </label>
              <input
                v-model="form.password"
                type="password"
                class="form-input"
                :class="{ 'error': errors.password }"
                placeholder="Créez un mot de passe sécurisé"
                @blur="validateField('password')"
              />
              <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
            </div>

            <div class="form-group">
              <label class="form-label">
                Confirmer le mot de passe <span class="required">*</span>
              </label>
              <input
                v-model="form.confirmPassword"
                type="password"
                class="form-input"
                :class="{ 'error': errors.confirmPassword }"
                placeholder="Répétez le mot de passe"
                @blur="validateField('confirmPassword')"
              />
              <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
            </div>
          </div>

          <div class="password-strength" :class="passwordStrength.class">
            Force du mot de passe: {{ passwordStrength.text }}
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="form.termsAccepted"
                class="checkbox-input"
                :class="{ 'error': errors.termsAccepted }"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-text">
                Je certifie que les informations fournies sont exactes et 
                j'accepte les <a href="/terms" class="link">conditions d'utilisation</a> 
                et la <a href="/privacy" class="link">politique de confidentialité</a>.
                <span class="required">*</span>
              </span>
            </label>
            <span v-if="errors.termsAccepted" class="error-message">{{ errors.termsAccepted }}</span>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="form.newsletter"
                class="checkbox-input"
              />
              <span class="checkbox-custom"></span>
              <span class="checkbox-text">
                Je souhaite recevoir des newsletters et des mises à jour sur Khaleen Schools
              </span>
            </label>
          </div>
        </div>

        <!-- Navigation des étapes -->
        <div class="form-navigation">
          <button
            v-if="currentStep > 0"
            type="button"
            @click="previousStep"
            class="nav-button secondary"
          >
            ← Précédent
          </button>
          
          <button
            v-if="currentStep < totalSteps"
            type="button"
            @click="nextStep"
            class="nav-button primary"
            :disabled="!isStepValid"
          >
            Suivant →
          </button>

          <button
            v-if="currentStep === totalSteps"
            type="submit"
            class="nav-button submit"
            :disabled="isLoading || !isFormValid"
          >
            <span v-if="isLoading" class="loader"></span>
            {{ isLoading ? 'Enregistrement...' : 'Finaliser l\'enregistrement' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'

const currentStep = ref(0)
const totalSteps = 6
const isLoading = ref(false)
const selectedPlan = ref(null)

const steps = [
  { number: 0, label: 'Plan' },
  { number: 1, label: 'Informations de base' },
  { number: 2, label: 'Type d\'établissement' },
  { number: 3, label: 'Coordonnées' },
  { number: 4, label: 'Effectifs' },
  { number: 5, label: 'Réseaux sociaux' },
  { number: 6, label: 'Sécurité' }
]

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    maxStudents: 200,
    features: ['Fonctionnalités de base', 'Support communautaire'],
    support: 'Support de base',
    recommended: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 39,
    maxStudents: 200,
    features: ['Toutes les fonctionnalités', 'Support prioritaire'],
    support: 'Support prioritaire 24/7',
    recommended: false
  },
  {
    id: 'high',
    name: 'High',
    price: 99,
    maxStudents: 1000000000000,
    features: ['Fonctionnalités avancées', 'Support dédié'],
    support: 'Support dédié et personnalisé',
    recommended: true
  }
]

const form = reactive({
  // Plan
  selectedPlan: '',
  
  // Étape 1
  schoolName: '',
  acronym: '',
  logo: null,
  logoPreview: '',
  motto: '',
  
  // Étape 2
  educationLevel: '',
  schoolType: '',
  religion: '',
  foundingYear: '',
  
  // Étape 3
  email: '',
  phone: '',
  address: '',
  poBox: '',
  city: '',
  province: '',
  country: '',
  
  // Étape 4
  studentCount: '',
  teacherCount: '',
  adminStaffCount: '',
  supportStaffCount: '',
  annualBudget: '',
  fundingSource: '',
  
  // Étape 5
  website: '',
  socials: {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    other: ''
  },
  
  // Étape 6
  password: '',
  confirmPassword: '',
  termsAccepted: false,
  newsletter: false
})

const errors = reactive({
  selectedPlan: '',
  schoolName: '',
  educationLevel: '',
  schoolType: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
  studentCount: '',
  teacherCount: '',
  password: '',
  confirmPassword: '',
  termsAccepted: ''
})

// Validations
const validations = {
  selectedPlan: (value) => !value ? 'Veuillez sélectionner un plan' : '',
  schoolName: (value) => !value ? 'Le nom de l\'établissement est requis' : '',
  educationLevel: (value) => !value ? 'Veuillez sélectionner le niveau d\'enseignement' : '',
  schoolType: (value) => !value ? 'Veuillez sélectionner le type d\'établissement' : '',
  email: (value) => {
    if (!value) return 'L\'email institutionnel est requis'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Format d\'email invalide'
    return ''
  },
  phone: (value) => !value ? 'Le téléphone est requis' : '',
  address: (value) => !value ? 'L\'adresse est requise' : '',
  city: (value) => !value ? 'La ville est requise' : '',
  country: (value) => !value ? 'Le pays est requis' : '',
  studentCount: (value) => {
    if (!value || value < 1) return 'Le nombre d\'élèves est requis'
    if (selectedPlan.value && value > selectedPlan.value.maxStudents) {
      return `Limite dépassée. Maximum ${selectedPlan.value.maxStudents} élèves pour le plan ${selectedPlan.value.name}`
    }
    return ''
  },
  teacherCount: (value) => !value || value < 1 ? 'Le nombre d\'enseignants est requis' : '',
  password: (value) => {
    if (!value) return 'Le mot de passe est requis'
    if (value.length < 8) return 'Le mot de passe doit contenir au moins 8 caractères'
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      return 'Le mot de passe doit contenir des majuscules, minuscules et chiffres'
    }
    return ''
  },
  confirmPassword: (value) => {
    if (!value) return 'Veuillez confirmer le mot de passe'
    if (value !== form.password) return 'Les mots de passe ne correspondent pas'
    return ''
  },
  termsAccepted: (value) => !value ? 'Vous devez accepter les conditions' : ''
}

const validateField = (field) => {
  errors[field] = validations[field] ? validations[field](form[field]) : ''
}

const isStepValid = computed(() => {
  const stepValidations = {
    0: () => !errors.selectedPlan && form.selectedPlan,
    1: () => !errors.schoolName && form.schoolName,
    2: () => !errors.educationLevel && !errors.schoolType && form.educationLevel && form.schoolType,
    3: () => !errors.email && !errors.phone && !errors.address && !errors.city && !errors.country && 
          form.email && form.phone && form.address && form.city && form.country,
    4: () => !errors.studentCount && !errors.teacherCount && form.studentCount && form.teacherCount,
    5: () => true, // Réseaux sociaux optionnels
    6: () => !errors.password && !errors.confirmPassword && !errors.termsAccepted && 
          form.password && form.confirmPassword && form.termsAccepted
  }
  return stepValidations[currentStep.value] ? stepValidations[currentStep.value]() : true
})

const isFormValid = computed(() => {
  return Object.keys(validations).every(field => !validations[field](form[field]))
})

// Force du mot de passe
const passwordStrength = computed(() => {
  const password = form.password
  if (!password) return { class: '', text: '' }
  
  let strength = 0
  if (password.length >= 8) strength++
  if (/[a-z]/.test(password)) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^a-zA-Z0-9]/.test(password)) strength++
  
  const levels = [
    { class: 'weak', text: 'Faible' },
    { class: 'weak', text: 'Faible' },
    { class: 'medium', text: 'Moyen' },
    { class: 'medium', text: 'Moyen' },
    { class: 'strong', text: 'Fort' },
    { class: 'strong', text: 'Très fort' }
  ]
  
  return levels[Math.min(strength, levels.length - 1)]
})

// Navigation
const nextStep = () => {
  if (isStepValid.value) {
    currentStep.value++
  }
}

const previousStep = () => {
  currentStep.value--
}

// Sélection du plan
const selectPlan = (plan) => {
  selectedPlan.value = plan
  form.selectedPlan = plan.id
  validateField('selectedPlan')
}

// Gestion du logo
const logoInput = ref(null)

// Erreur de logo et helper pour déclencher le input file caché
const logoError = ref('')

const triggerFileInput = () => {
  if (logoInput.value && typeof logoInput.value.click === 'function') {
    logoInput.value.click()
  }
}

const handleLogoUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert('Le fichier est trop volumineux (max 2MB)')
      return
    }
    
    const reader = new FileReader()
    reader.onload = (e) => {
      form.logoPreview = e.target.result
      form.logo = file
    }
    reader.readAsDataURL(file)
  }
}

const removeLogo = () => {
  form.logo = null
  form.logoPreview = ''
  logoError.value = ''
  if (logoInput.value) {
    logoInput.value.value = ''
  }
}
// Téléchargement des données
const downloadData = () => {
  const data = {
    plan: selectedPlan.value,
    schoolInfo: {
      name: form.schoolName,
      acronym: form.acronym,
      motto: form.motto,
      educationLevel: form.educationLevel,
      schoolType: form.schoolType,
      religion: form.religion,
      foundingYear: form.foundingYear
    },
    contact: {
      email: form.email,
      phone: form.phone,
      address: form.address,
      poBox: form.poBox,
      city: form.city,
      province: form.province,
      country: form.country
    },
    staff: {
      students: form.studentCount,
      teachers: form.teacherCount,
      admin: form.adminStaffCount,
      support: form.supportStaffCount
    },
    finances: {
      budget: form.annualBudget,
      funding: form.fundingSource
    },
    socials: form.socials,
    timestamp: new Date().toISOString()
  }

  // Téléchargement JSON
  const jsonData = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `khaleen-school-${form.schoolName.replace(/\s+/g, '-').toLowerCase()}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)

  // Téléchargement PDF (simulé)
  alert('Vos données ont été sauvegardées en JSON. Un PDF de confirmation sera généré après l\'enregistrement complet.')
}

// Soumission
const handleSubmit = async () => {
  if (!isFormValid.value) {
    alert('Veuillez corriger les erreurs avant de soumettre')
    return
  }

  isLoading.value = true
  
  try {
    // Simuler l'envoi des données
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Données soumises:', form)
    
    // Télécharger les données
    downloadData()
    
    alert('Établissement enregistré avec succès! Vos données ont été sauvegardées.')
    
    // Redirection ou reset du formulaire
    // await navigateTo('/dashboard')
    
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement:', error)
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isLoading.value = false
  }
}

// Watch pour la validation en temps réel du nombre d'élèves
watch(() => form.studentCount, () => {
  validateField('studentCount')
})
</script>

<style scoped>
/* Styles existants... */

/* Styles pour les plans */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.plan-card {
  background: #1e293b;
  border: 2px solid #334155;
  border-radius: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.plan-card:hover {
  border-color: #3b82f6;
  transform: translateY(-5px);
}

.plan-card.selected {
  border-color: #10b981;
  background: linear-gradient(135deg, #1e293b 0%, #064e3b 100%);
}

.plan-header {
  text-align: center;
  margin-bottom: 1rem;
}

.plan-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.plan-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
}

.plan-features {
  space-y: 0.75rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.feature-icon {
  font-size: 1.1rem;
}

.feature-text {
  color: #cbd5e1;
  font-size: 0.9rem;
}

.plan-badge {
  position: absolute;
  top: 1rem;
  right: -2rem;
  background: #f59e0b;
  color: white;
  padding: 0.25rem 2rem;
  transform: rotate(45deg);
  font-size: 0.75rem;
  font-weight: 600;
}

.selected-plan-info {
  background: #0f172a;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
}

.step-description {
  color: #94a3b8;
  text-align: center;
  margin-bottom: 2rem;
}

.plan-limit {
  font-size: 0.875rem;
  color: #3b82f6;
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Force du mot de passe */
.password-strength {
  padding: 0.5rem;
  border-radius: 0.375rem;
  text-align: center;
  font-weight: 600;
  margin: 1rem 0;
}

.password-strength.weak {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.password-strength.medium {
  background: #fffbeb;
  color: #d97706;
  border: 1px solid #fed7aa;
}

.password-strength.strong {
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}

/* Responsive */
@media (max-width: 768px) {
  .plans-grid {
    grid-template-columns: 1fr;
  }
  
  .progress-steps {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.8rem;
  }
}

/* Ajouts pour les nouvelles sections */
.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .social-grid {
    grid-template-columns: 1fr;
  }
}
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  padding: 2rem 1rem;
  color: #f8fafc;
}

.register-container {
  max-width: 800px;
  margin: 0 auto;
  background: #1e293b;
  border-radius: 1rem;
  border: 1px solid #334155;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.register-header {
  padding: 2rem;
  background: linear-gradient(135deg, #334155 0%, #475569 100%);
  border-bottom: 1px solid #475569;
}

.register-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.register-subtitle {
  color: #cbd5e1;
  font-size: 1rem;
}

.required {
  color: #ef4444;
}

/* Barre de progression */
.progress-container {
  padding: 1.5rem 2rem;
  background: #1e293b;
  border-bottom: 1px solid #334155;
}

.progress-bar {
  height: 6px;
  background: #334155;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: width 0.3s ease;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.step {
  color: #64748b;
  font-weight: 500;
  transition: color 0.3s ease;
}

.step.active {
  color: #3b82f6;
  font-weight: 600;
}

.step.completed {
  color: #10b981;
}

/* Formulaire */
.register-form {
  padding: 2rem;
}

.form-step {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.step-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
  border-bottom: 2px solid #334155;
  padding-bottom: 0.5rem;
}

/* Grilles */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

/* Groupes de formulaire */
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #e2e8f0;
}

/* Inputs */
.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  color: #f8fafc;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input.error,
.form-textarea.error,
.form-select.error {
  border-color: #ef4444;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

/* Upload de logo */
.logo-upload {
  border: 2px dashed #475569;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  transition: border-color 0.2s ease;
}

.logo-upload:hover {
  border-color: #3b82f6;
}

.logo-preview {
  position: relative;
  display: inline-block;
}

.logo-image {
  max-width: 120px;
  max-height: 120px;
  border-radius: 0.5rem;
}

.remove-logo {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-input {
  display: none;
}

.logo-placeholder {
  cursor: pointer;
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.upload-icon {
  font-size: 2rem;
}

.upload-text {
  font-weight: 500;
  color: #e2e8f0;
}

.upload-hint {
  font-size: 0.875rem;
  color: #94a3b8;
}

/* Radio et Checkbox */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radio-option,
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: background 0.2s ease;
}

.radio-option:hover,
.checkbox-label:hover {
  background: #334155;
}

.radio-input,
.checkbox-input {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #475569;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease;
}

.radio-input:checked + .radio-custom {
  border-color: #3b82f6;
}

.radio-input:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border-radius: 50%;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #475569;
  border-radius: 0.375rem;
  position: relative;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkbox-custom {
  background: #3b82f6;
  border-color: #3b82f6;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.checkbox-text {
  color: #e2e8f0;
  line-height: 1.4;
}

.link {
  color: #60a5fa;
  text-decoration: underline;
}

.link:hover {
  color: #3b82f6;
}

/* Messages d'erreur */
.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Navigation */
.form-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #334155;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button.secondary {
  background: #475569;
  color: #e2e8f0;
}

.nav-button.secondary:hover:not(:disabled) {
  background: #64748b;
}

.nav-button.primary {
  background: #3b82f6;
  color: white;
}

.nav-button.primary:hover:not(:disabled) {
  background: #2563eb;
}

.nav-button.submit {
  background: #10b981;
  color: white;
}

.nav-button.submit:hover:not(:disabled) {
  background: #059669;
}

/* Loader */
.loader {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .register-container {
    margin: 0 0.5rem;
  }
  
  .register-header,
  .register-form {
    padding: 1.5rem;
  }
  
  .form-grid,
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .progress-steps {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-navigation {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
