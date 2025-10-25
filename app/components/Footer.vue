
<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="col">
        <div class="brand">
          <img src="/favicon.png" alt="Khaleen Logo">
          <span style="font-size: xx-large; font-weight: bold;">Khaleen Schools</span>
        </div>
        <p class="desc">
          <strong>Khaleen Schools</strong> est une Entreprise moderne qui digitalise la gestion et la presence des écoles secondaires, automatise des tâches et garde des documents en toute securité
        </p>
      </div>

      <div class="col">
        <h3>Produits</h3>
        <ul>
          <li><a href="https://khaleen.com">Khaleen</a></li>
          <li><a href="https://netapear.khaleen.com">NetApear</a></li>
          <li><a href="https://blocplan.khaleen.com">BlocPlan</a></li>
          <li><a href="#">Khaleen API</a></li>
        </ul>
      </div>

      <div class="col">
        <h3>Ressources</h3>
        <ul>
          <li><a href="/about">À propos</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/legal/privacy">Politique de confidentialité</a></li>
          <li><a href="/legal/terms">Conditions generales d'utilisation</a></li>
        </ul>
      </div>

      <div class="col">
        <h3>Contact</h3>
        <ul>
          <li><a href="mailto:khaleen.sites@outlook.com">✉️ khaleen.sites@outlook.com</a></li>
          <li><a href="/contact">Contactez-nous, engagez-nous</a></li>
          <li><a href="https://wa.me/243978089552?text=Salut, Je veux savoir plus sur Khaleen">📞 +243 978 089 552</a></li>
        </ul>
        <div class="socials">
          <a href="https://web.facebook.com/profile.php?id=61581755805172">Facebook</a>
          <a href="https://www.linkedin.com/events/creatipondekhaleen7385367062753218560">LinkedIn</a>
          <a href="https://wa.me/243978089552?text=Salut, Je veux savoir plus sur Khaleen">WhatsApp</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">© <span>{{ new Date().getFullYear() }}</span> Khaleen Schools Technologies. Tous droits réservés.</div>
  </footer>
</template>

<script setup>
// Simple footer component for Nuxt 4 - no external deps
</script>

<style scoped>
.site-footer{ 
  background: linear-gradient(270deg, #322433, #25253b );
  color:#d1d5db; padding:40px 20px 24px }
.footer-inner{ margin:0 auto; display:grid; grid-template-columns:repeat(1,1fr); gap:24px }
.col .brand{ display:flex; gap:8px; align-items:center; font-weight:600; color:#fff }
.col .brand img{ width:32px; height:32px }
.col h3{ color:#fff; margin-bottom:8px }
.col ul{ list-style:none; padding:0; margin:0 }
.col ul li{ margin-bottom:8px }
.col a{ color:#d1d5db; text-decoration:underline; text-decoration-color: rgb(122, 122, 122);}
.col a:hover{ color:#fff }
.desc{ text-align: justify; color: white;}
.socials{ margin-top:12px; display:flex; gap:12px }
.footer-bottom{ border-top:1px solid #1f2937; margin-top:24px; border-top: 1px solid white; padding-top:16px; text-align:center; color:#9ca3af; font-size:14px }

@media(min-width:768px){
  .footer-inner{ grid-template-columns:repeat(4,1fr) }
}
</style>

