<template>
  <div class="landing">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="gradient-sphere sphere-1"></div>
        <div class="gradient-sphere sphere-2"></div>
        <div class="gradient-sphere sphere-3"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="badge animate-badge">
            <span class="version">Version 1.0</span>
            <span class="new">Première Version</span>
          </div>
          <h2>La Plateforme de Gestion Scolaire Nouvelle Génération</h2>
          <p class="hero-description animate-description">
            Une nouvelle génération, une nouvelle technologie, <br>
            Digitalisez votre école sécondaire ou primaire, automatisez des tâches, et recoltez des devoirs et travaux enligne, trouvez un cloud securisé et modérez votre istitution
          </p>
          <div class="hero-actions animate-actions">
            <a href="/register" class="button">
              <span>Essai Gratuit</span>
              <i class="pi pi-arrow-right"></i>
            </a>
            <a href="/register" class="btn-secondary">
              <span>Découvrir</span>
              <i class="pi pi-play"></i>
            </a>
          </div>
          <div class="hero-stats animate-stats">
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Écoles</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50k+</span>
              <span class="stat-label">Utilisateurs</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">99%</span>
              <span class="stat-label">Satisfaction</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="dashboard-preview">
            <div class="main-dashboard animate-dashboard">
              <div class="dashboard-header">
                <div class="header-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="dashboard-content">
                <div class="chart-grid">
                  <div class="mini-chart"></div>
                  <div class="mini-chart"></div>
                  <div class="mini-chart"></div>
                </div>
              </div>
            </div>
            <div class="floating-elements">
              <div class="card analytics floating-card-1">
                <div class="card-content">
                  <div class="chart-preview"></div>
                  <span>Progression des élèves</span>
                </div>
              </div>
              <div class="card notification floating-card-2">
                <div class="card-content">
                  <i class="pi pi-bell"></i>
                  <span>Document sur cloud</span>
                </div>
              </div>
              <div class="card calendar floating-card-3">
                <div class="card-content">
                  <i class="pi pi-calendar"></i>
                  <span>Événements à venir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contacts">
      <div>
        <h3>Email</h3>
        <p class="contact-link"><a href="mailto:khaleen.sites@outlook.com">khaleen.sites@outlook.com</a></p>
        <p class="contact-note">Envoyez-nous des courriers 24h/7</p>
      </div>
      <div>
        <h3>WhatsApp</h3>
        <p class="contact-link"><a href="https://wa.me/243978089552" target="_blank" rel="noopener noreferrer">+243 978 089 552</a></p>
        <p class="contact-note">Ecrivez-nous sur WhatsApp 24h/7</p>
      </div>
      <div>
        <h3>Téléphone (Appel et SMS)</h3>
        <p class="contact-link"><a href="tel:+250729606087">+250 729 606 087</a></p>
        <p class="contact-note">Appelez-nous ou ecrivez-nous des SMS</p>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Fonctionnalités principales</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <div class="feature-hover"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-us">
      <div class="container">
        <h2 class="section-title">Pourquoi choisir Khaleen Schools?</h2>
        <div class="benefits-grid">
          <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="benefit-icon">
              <i :class="benefit.icon"></i>
            </div>
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Block -->
    <section class="block pricing-block">
      <div class="container">
        <div class="block-header">
          <span class="block-tag">Tarification</span>
          <h2 class="section-title">Plans adaptés à chaque établissement</h2>
          <p class="block-description">Choisissez un plan flexible selon la taille et les besoins de votre école.</p>
        </div>
<!-- SECTION CORRIGÉE -->
<div class="pricing-grid">
  <div class="pricing-card" v-for="(plan, index) in pricingPlans" :key="index" 
       :class="{ 'featured': plan.featured }">
    <div class="pricing-content">
      <div class="pricing-header">
        <h3>{{ plan.name }}</h3>
        <div class="price">{{ plan.price }}<span v-if="plan.period">/mois</span></div>
      </div>
      <ul>
        <li v-for="(feature, i) in plan.features" :key="i">{{ feature }}</li>
      </ul>
      <div class="pricing-actions">
        <NuxtLink 
          :to="plan.link" 
          class="button"
          @click="handlePricingClick(plan.name)"
        >
          {{ plan.buttonText }}
        </NuxtLink>
      </div>
    </div>
    <div class="pricing-glow" v-if="plan.featured"></div>
  </div>
</div>      </div>
    </section>

    <!-- FAQ -->
    <section class="block faq-block">
      <div class="container">
        <div class="block-header">
          <span class="block-tag">FAQ</span>
          <h2 class="section-title">Questions fréquentes</h2>
        </div>
        <div class="faq-list">
          <details v-for="(faq, index) in faqs" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
            <summary>{{ faq.question }}</summary>
            <p>{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="block cta-block">
      <div class="container">
        <div class="cta-content">
          <h2 class="section-title">Prêt à transformer votre école?</h2>
          <p>Rejoignez plus de 500 établissements qui font confiance à Khaleen Schools</p>
          <div class="cta-actions">
            <a href="/register" class="btn-primary">Commencer maintenant</a>
            <a href="/contact" class="btn-secondary">Contactez-nous</a>
          </div>
          <div class="cta-glow"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#app'
useHead({
  title: 'Khaleen Schools - Welcome',
  meta: [
    { name: 'description', content: 'Découvrez la mission, l’équipe et les valeurs de Khaleen Schools, plateforme de gestion scolaire innovante.' }
  ]
})

import { ref, onMounted } from 'vue'

const features = ref([
  {
    icon: '📊',
    title: 'Gestion des classes',
    description: 'Organisez facilement vos classes, les emplois du temps et les effectifs.'
  },
  {
    icon: '📚',
    title: 'Suivi pédagogique',
    description: 'Suivez les progrès des élèves et gérez les évaluations en temps réel.'
  },
  {
    icon: '📱',
    title: 'Communication',
    description: 'Restez en contact avec les parents et le personnel via notre portail intégré.'
  }
])

const benefits = ref([
  {
    icon: 'pi pi-star',
    title: 'Simple à utiliser',
    description: 'Interface intuitive conçue pour tous les utilisateurs.'
  },
  {
    icon: 'pi pi-headphones',
    title: 'Support 24/7',
    description: 'Notre équipe est là pour vous aider à tout moment.'
  },
  {
    icon: 'pi pi-shield',
    title: 'Sécurisé',
    description: 'Vos données sont protégées selon les normes les plus strictes.'
  }
])

const pricingPlans = ref([
  {
    name: 'Starter',
    price: '$0',
    period: true,
    features: ['Jusqu\'à 200 élèves', 'Fonctionnalités de base', 'Support communautaire'],
    buttonText: 'Commencer',
    link: '/register?plan=starter',
    featured: false
  },
  {
    name: 'Pro',
    price: '$39',
    period: true,
    features: ['Jusqu\'à 200 élèves', 'Toutes les fonctionnalités', 'Support prioritaire'],
    buttonText: 'Choisir Pro',
    link: '/register?plan=pro',
    featured: false
  },
  {
    name: 'Établissement',
    price: '$99',
    period: true,
    features: ['Nombre illimité des élèves', 'Intégrations personnalisées', 'Service dédié et unique pour vous'],
    buttonText: 'Niveau haut',
    link: '/register?plan=high',
    featured: false
  }
])

const faqs = ref([
  {
    question: 'Comment migrer mes données existantes ?',
    answer: 'Nous proposons des outils d\'import et une assistance dédiée pour migrer les comptes, élèves et historiques.'
  },
  {
    question: 'Le service est-il sécurisé ?',
    answer: 'Oui — chiffrement, sauvegardes régulières et conformité aux normes de protection des données.'
  },
  {
    question: 'Proposez-vous des intégrations ?',
    answer: 'Nous intégrons les principaux LMS, outils de paiement et annuaires SSO.'
  }
])

onMounted(() => {
  // Animation trigger on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.feature-card, .benefit-item, .pricing-card, details').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.landing {
  color: var(--text-color);
  background: var(--surface-ground);
  overflow-x: hidden;
}

.container {
  /* max-width: 1200px; */
  margin-inline: 1rem;
  padding-inline: 1rem;
}

/* Hero Section */
.hero {
  padding: 2rem 0;
  background: linear-gradient(135deg, var(--surface-900) 0%, var(--surface-800) 50%, var(--surface-900) 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gradient-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
}

.sphere-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.sphere-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--primary-400) 0%, transparent 70%);
  bottom: 10%;
  right: 10%;
  animation-delay: 2s;
}

.sphere-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, var(--primary-600) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}

.hero-content {
  max-width: 500px;
  position: relative;
  z-index: 2;
  margin-inline: 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.animate-badge {
  animation: slideInDown 0.8s ease-out;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.animate-title {
  animation: slideInUp 0.8s ease-out 0.2s both;
  color: white;
}

.hero-description {
  font-size: small;
  /* line-height: 1.6; */
  color: var(--surface-200);
  margin-bottom: 2rem;
  max-width: 450px;
  text-align: justify;
}

.animate-description {
  animation: slideInUp 0.8s ease-out 0.4s both;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.animate-actions {
  /* animation: slideInUp 0.8s ease-out 0.6s both; */
  color: white;
}
.button {
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    background-color: gray;
    color: white;
}
.button:hover {
    background-color: rgb(79, 4, 114);
}
.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-400) 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(var(--primary-color), 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(var(--primary-color), 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--surface-0);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.animate-stats {
  animation: slideInUp 0.8s ease-out 0.8s both;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: red;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-400) 100%);
  -webkit-background-clip: text;
}

.stat-label {
  color: var(--surface-300);
  font-size: 0.9rem;
}

/* Hero Visual */
.hero-visual {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  z-index: 1;
}

.dashboard-preview {
  position: relative;
  height: 400px;
}

.main-dashboard {
  background: var(--surface-card);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 250px;
}

.animate-dashboard {
  animation: slideInRight 1s ease-out 0.5s both;
}

.dashboard-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.header-dots {
  display: flex;
  gap: 0.5rem;
}

.header-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--surface-400);
}

.dashboard-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.mini-chart {
  height: 80px;
  background: linear-gradient(135deg, var(--surface-600) 0%, var(--surface-700) 100%);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.mini-chart::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 2s infinite;
}

.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.floating-card-1 {
  animation: float 6s ease-in-out infinite;
  top: 10%;
  right: 10%;
}

.floating-card-2 {
  animation: float 6s ease-in-out infinite 2s;
  bottom: 20%;
  left: 5%;
}

.floating-card-3 {
  animation: float 6s ease-in-out infinite 4s;
  top: 60%;
  right: 20%;
}

.card {
  background: var(--surface-card);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: absolute;
  width: 160px;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
}

.chart-preview {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-400) 100%);
}

/* Features Section */
.features {
  padding: 0;
  background: var(--surface-ground);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-color);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-400) 100%);
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--surface-card);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(30px);
}

.feature-card.animate-in {
  animation: slideInUp 0.6s ease-out forwards;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
}

.feature-hover {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transition: left 0.6s ease;
}

.feature-card:hover .feature-hover {
  left: 100%;
}

/* Why Us Section */
.why-us {
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--surface-800) 0%, var(--surface-900) 100%);
  position: relative;
  overflow: hidden;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-item {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: var(--surface-0);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.benefit-item.animate-in {
  animation: slideInUp 0.6s ease-out forwards;
}

.benefit-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

/* Pricing Section */
.pricing-block {
  padding: 1rem 0;
  background: var(--surface-ground);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.pricing-card {
  background: var(--surface-card);
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  /* position: relative; */
  /* transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); */
  border: 1px solid rgba(255, 255, 255, 0.05);
  opacity: 0;
  transform: translateY(30px);
}

.pricing-card.animate-in {
  animation: slideInUp 0.6s ease-out forwards;
}

.pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.pricing-card.featured {
  background: linear-gradient(135deg, var(--surface-card) 0%, var(--surface-700) 100%);
  border: 1px solid var(--primary-color);
  transform: scale(1.05);
}

.pricing-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.pricing-header {
  margin-bottom: 2rem;
}

.price {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 1rem 0;
}

.price span {
  font-size: 1rem;
  color: var(--text-color-secondary);
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.pricing-card li {
  padding: 0.5rem 0;
  color: var(--text-color-secondary);
}

.pricing-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: radial-gradient(circle at center, rgba(var(--primary-color), 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pricing-card:hover .pricing-glow {
  opacity: 1;
}

/* FAQ Section */
.faq-block {
  padding: 1rem 0;
  background: var(--surface-ground);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

details {
  background: var(--surface-card);
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
}

details.animate-in {
  animation: slideInUp 0.4s ease-out forwards;
}

summary {
  padding: 1.5rem 2rem;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  position: relative;
  transition: background-color 0.3s ease;
}

summary:hover {
  background: rgba(255, 255, 255, 0.02);
}

summary::after {
  content: '+';
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

details[open] summary::after {
  transform: translateY(-50%) rotate(45deg);
}

details p {
  padding: 0 2rem 1.5rem;
  margin: 0;
  color: var(--text-color-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta-block {
  padding: 2rem 0;
  background: linear-gradient(135deg, var(--surface-800) 0%, var(--surface-900) 100%);
  position: relative;
  overflow: hidden;
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.cta-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(var(--primary-color), 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
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

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .hero {
    padding: 4rem 0;
    text-align: center;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-visual {
    position: relative;
    width: 100%;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 3rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }

  .features-grid,
  .benefits-grid,
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-10px);
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
}
.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  border-radius: 8px;
  font-family: 'Segoe UI', sans-serif;
}

.contacts > div {
  flex: 1 1 250px;
  background: linear-gradient(270deg, #002f53 0%, #35004e 100%);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.contacts h3 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: #ffffff;
}

.contact-link a {
  display: inline-block;
  font-size: 1rem;
  color: #ffebfb;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.contact-link a:hover {
  text-decoration: underline;
  color: #dcf2ff;
}

.contact-note {
  font-size: 0.9rem;
  color: #ffcfcf;
}

</style>