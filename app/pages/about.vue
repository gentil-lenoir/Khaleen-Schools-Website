<template>
  <section class="about-page">
    <div class="container">
      <div class="about-header">
        <h1>Révolutionner l'Éducation avec Khaleen Schools</h1>
        <p class="lead">Plateforme tout-en-un de gestion scolaire intelligente, conçue pour les établissements modernes d'Afrique et au-delà.</p>
      </div><AdsterraSimple />

      <div class="about-content">
        <!-- Notre Histoire -->
        <div class="section">
          <h2>🚀 Notre Histoire</h2>
          <p>Née de constats terrain dans les systèmes éducatifs africains, <strong>Khaleen Schools</strong> a été fondée pour répondre aux défis quotidiens des établissements scolaires : gestion administrative complexe, communication fragmentée, et suivi pédagogique limité.</p>
          <p>Notre plateforme fusionne expertise éducative et innovation technologique pour créer un écosystème scolaire connecté, où chaque acteur (direction, enseignants, parents, élèves) trouve sa place dans un environnement unifié et intuitif.</p>
        </div>

        <!-- Ce Que Nous Offrons -->
        <div class="section">
          <h2>🎯 Solutions Complètes</h2>
          <div class="features-grid">
            <div class="feature-card">
              <h3>📊 Gestion Administrative</h3>
              <p>Inscriptions digitalisées, gestion des frais scolaires, emplois du temps dynamiques, et suivi financier en temps réel.</p>
            </div>
            <div class="feature-card">
              <h3>👨‍🏫 Vie Pédagogique</h3>
              <p>Carnet de notes électronique, planning des cours, gestion des devoirs, et outils d'évaluation continus.</p>
            </div>
            <div class="feature-card">
              <h3>💬 Communication Unifiée</h3>
              <p>Messagerie instantanée, notifications automatiques, portail parent dédié, et annonces ciblées.</p>
            </div>
            <div class="feature-card">
              <h3>📈 Analytics & Reporting</h3>
              <p>Tableaux de bord personnalisés, rapports de performance, et indicateurs clés pour la prise de décision.</p>
            </div>
          </div>
        </div><AdsterraSimple />

        <!-- Notre Équipe -->
        <div class="section">
          <h2>👥 L'Équipe Khaleen</h2>
          <p>Notre force réside dans la diversité de notre équipe pluridisciplinaire :</p>
          <ul class="team-list">
            <li><strong>Experts en Pédagogie</strong> - Anciens enseignants et directeurs d'écoles</li>
            <li><strong>Ingénieurs Tech</strong> - Spécialistes en développement cloud et mobile</li>
            <li><strong>Designers UX/UI</strong> - Créateurs d'interfaces intuitives et accessibles</li>
            <li><strong>Support Client</strong> - Équipe dédiée et formée aux enjeux éducatifs</li>
          </ul>
          <p>Nous comprenons les réalités du terrain car certains d'entre nous y avons œuvré pendant des années.</p>
        </div>

        <!-- Nos Valeurs -->
        <div class="section">
          <h2>💫 Nos Engagements</h2>
          <div class="values-grid">
            <div class="value-item">
              <h3>🌍 Accessibilité</h3>
              <p>Interface adaptée aux connexions limitées, multilingue, et responsive sur tous devices.</p>
            </div>
            <div class="value-item">
              <h3>🔒 Sécurité Maximale</h3>
              <p>Protection des données sensibles, conformité RGPD, et sauvegardes automatiques.</p>
            </div>
            <div class="value-item">
              <h3>🔄 Innovation Continue</h3>
              <p>Évolutions basées sur vos retours et les avancées technologiques.</p>
            </div>
            <div class="value-item">
              <h3>🤝 Partenariat</h3>
              <p>Accompagnement personnalisé et formation pour chaque établissement partenaire.</p>
            </div>
          </div>
        </div><AdsterraSimple />

        <!-- Impact & Statistiques -->
        <div class="section stats-section">
          <h2>📊 Notre Impact</h2>
          <div class="stats-grid">
            <div class="stat">
              <div class="stat-number">50+</div>
              <div class="stat-label">Établissements</div>
            </div>
            <div class="stat">
              <div class="stat-number">10,000+</div>
              <div class="stat-label">Utilisateurs</div>
            </div>
            <div class="stat">
              <div class="stat-number">95%</div>
              <div class="stat-label">Satisfaction</div>
            </div>
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support</div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section"><AdsterraSimple />
          <h2>Prêt à transformer votre établissement ?</h2>
          <p>Rejoignez la communauté Khaleen Schools et découvrez comment nous pouvons révolutionner ensemble la gestion de votre école.</p>
          <div class="cta-buttons">
            <a href="/register" class="btn btn-primary">Démarrer l'Essai Gratuit</a>
            <a href="/support" class="btn btn-secondary">Contactez-Nous</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#app'
useHead({
  title: 'À propos — Khaleen Schools | Plateforme de Gestion Scolaire Innovante',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez Khaleen Schools : plateforme tout-en-un de gestion scolaire intelligente pour établissements modernes. Solutions complètes, équipe experte, impact mesurable.' 
    },
    {
      name: 'keywords',
      content: 'gestion scolaire, plateforme éducative, école numérique, Afrique éducation, logiciel école, management scolaire'
    }
  ]
})
</script>

<style scoped>
.about-page { 
  padding: 4rem 0; 
  background: linear-gradient(135deg, var(--surface-ground) 0%, #f8f9fa 100%);
  min-height: 70vh; 
}

.container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 2rem; 
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
}

h1 { 
  font-size: 3rem; 
  margin-bottom: 1.5rem; 
  color: var(--primary-color);
  background: linear-gradient(135deg, var(--primary-color), #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lead { 
  font-size: 1.4rem; 
  color: var(--text-700); 
  margin-bottom: 2rem;
  line-height: 1.6;
}

.section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-700);
  border-left: 4px solid var(--primary-color);
  padding-left: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: var(--primary-600);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.team-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.team-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.team-list li:last-child {
  border-bottom: none;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.value-item {
  text-align: center;
  padding: 1.5rem;
}

.value-item h3 {
  color: var(--primary-600);
  margin-bottom: 1rem;
}

.stats-section {
  background: linear-gradient(135deg, var(--primary-color), #2563eb);
  color: white;
  padding: 3rem;
  border-radius: 16px;
  margin: 4rem 0;
}

.stats-section h2 {
  color: white;
  border-left-color: white;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

.cta-section {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-700);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  h1 { font-size: 2.2rem; }
  .lead { font-size: 1.2rem; }
  .cta-buttons { flex-direction: column; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: 1fr; }
}
</style>