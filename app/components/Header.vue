<template>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/">
        <img class="brand-logo" src="/favicon.png" alt="Khaleen logo" />
        <span class="brand-title">Khaleen Schools</span>
      </a>

      <nav class="actions" aria-label="Main navigation">
        <ul class="nav-list">
          <li><NuxtLink to="/" class="nav-link">Accueil</NuxtLink></li>
          <li><NuxtLink to="/support" class="nav-link">Support</NuxtLink></li>
          <li><NuxtLink to="/register" class="nav-link">S'inscrire</NuxtLink></li>
          <li><NuxtLink to="/contact" class="nav-link">Contactez-nous</NuxtLink></li>
        </ul>
      </nav>

      <div id="google_translate_element" style="margin-left:1rem;"></div>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-controls="mobile-menu" aria-label="Ouvrir le menu">
        <span class="burger"></span>
      </button>
    </div>

    <div id="mobile-menu" class="mobile-menu" v-show="mobileOpen">
      <nav aria-label="Mobile navigation">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/register">S'inscrire</a></li>
          <li><a href="/contact">Contactez-nous</a></li>
          <!-- mobile auth links removed -->
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const mobileOpen = ref(false)

onMounted(() => {
  if (!window.googleTranslateElementInit) {
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'fr,en,ar,es',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
      }, 'google_translate_element');
    }
    const gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
  }
})

// Optionnel: Fonction pour charger les traductions via Google Translate API
const loadTranslations = async (langCode) => {
  try {
    const response = await fetch(`/api/translate?lang=${langCode}`)
    const translations = await response.json()
    // Mettre à jour les traductions
  } catch (error) {
    console.error('Error loading translations:', error)
  }
}
</script>

<style scoped>
:root{
  --header-bg: #07070a; /* deeper dark */
  --accent: #7c5cff; /* slightly brighter accent */
  --muted: #9aa3b2; /* muted text on dark */
  --glass-shadow: 0 8px 30px rgba(2,6,23,0.7);
  --border-muted: rgba(255,255,255,0.04);
}
 .site-header{
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   background: var(--header-bg);
   backdrop-filter: blur(6px);
   z-index: 99999; /* élevé pour rester au-dessus des widgets externes */
   box-shadow: var(--glass-shadow);
 }
.header-inner{
  max-width:1100px;
  margin:0 auto;
  display:flex;
  align-items:center;
  justify-content: space-around;
  gap:16px;
  padding:12px 18px;
}
.brand{ display:flex; align-items:center; gap:10px; text-decoration:none }
.brand-logo{ width:36px; height:36px; border-radius:6px; object-fit:cover }
.brand-title{ color:#fff; font-weight:700; letter-spacing:0.2px }

/* Styles pour le widget Google Translate */
:global(.goog-te-banner-frame) {
  display: none !important;
}

:global(.goog-te-gadget) {
  color: transparent !important;
  font-size: 0px !important;
}

:global(.goog-te-gadget .goog-te-combo) {
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--border-muted);
  background: rgba(61, 0, 97, 0.9);
  font-size: 14px;
}

:global(.VIpgJd-ZVi9od-ORHb-OEVmcd) {
  display: none !important;
}

:global(.VIpgJd-ZVi9od-l4eHX-hSRGPd) {
  display: none !important;
}

.nav{ margin-left:12px; margin-right:auto }
.nav-list{ display:flex; gap:18px; list-style:none; margin:0; padding:0; align-items:center }
.nav-link{ color:var(--muted); background-color: #0202575e; color: white; font-weight: 500; text-decoration:none; padding:8px 6px; border-radius:10px; letter-spacing: 1px; }
.nav-link:hover{ color:#fff; background:rgba(255,255,255,0.03) }

.actions{ display:flex; gap:10px }
.btn{ display:inline-block; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:600 }
.btn-outline{ color:var(--muted); border:1px solid var(--border-muted); background:transparent }
.btn-outline:hover{ color:#fff; border-color:rgba(255,255,255,0.12) }
.btn-primary{ background:var(--accent); color:white }
.btn-primary:hover{ filter:brightness(0.95) }

.mobile-toggle{ display:none; background:transparent; border:0; padding:8px }
.mobile-toggle .burger{ width:22px; height:2px; background:var(--muted); position:relative; display:block }
.mobile-toggle .burger::before, .mobile-toggle .burger::after{ content:''; position:absolute; left:0; width:22px; height:2px; background:var(--muted) }
.mobile-toggle .burger::before{ top:-7px }
.mobile-toggle .burger::after{ top:7px }

.mobile-menu{ display:none; background:linear-gradient(180deg, rgba(7,7,10,0.98), rgba(7,7,10,0.98)); padding:12px 18px; border-top:1px solid var(--border-muted) }
.mobile-menu ul{ list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px }
.mobile-menu a{ color:var(--muted); text-decoration:none; padding:8px 6px; display:block }
.mobile-actions .btn-primary{ width:100%; text-align:center }

.lang-selector {
  position: relative;
  margin-left: 1rem;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  color: var(--muted);
  border: 1px solid var(--border-muted);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.arrow {
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.arrow-up {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: var(--header-bg);
  border: 1px solid var(--border-muted);
  border-radius: 8px;
  padding: 0.5rem;
  min-width: 160px;
  list-style: none;
  margin: 0;
  box-shadow: var(--glass-shadow);
}

.lang-option {
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  color: var(--muted);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.lang-option:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.lang-option.active {
  background: var(--accent);
  color: white;
}

@media (max-width: 820px){
  .nav{ display:none }
  .actions{ display:none }
  .mobile-toggle{ display:block }
  .mobile-menu{ display:block }
  
  .lang-selector {
    margin: 1rem 0;
  }
  
  .lang-btn {
    width: 100%;
    justify-content: space-between;
  }
  
  .lang-menu {
    position: static;
    margin-top: 0.5rem;
    width: 100%;
  }
}

/* Google Translate widget fixes: empêcher les éléments injectés de recouvrir le header */
.goog-te-banner-frame.skiptranslate { display: none !important; }
.goog-te-menu-frame { z-index: 9998 !important; /* menu dropdown under header */ }
#google_translate_element { z-index: 0;}
body { top: 0 !important; }
.skiptranslate { top: 0 !important; }

/* Ensure visible focus states for accessibility */
.nav-link:focus, .btn:focus, .mobile-menu a:focus{ outline:2px solid rgba(124,92,255,0.14); outline-offset:3px }
</style>