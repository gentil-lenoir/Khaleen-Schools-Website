<template>
  <div class="welcome-container">
    <!-- Animation de fleurs -->
    <div class="flowers-container">
      <div 
        v-for="(flower, index) in flowers" 
        :key="index"
        class="flower"
        :class="`flower-${flower.type}`"
        :style="{
          left: flower.x + '%',
          animationDelay: flower.delay + 's',
          transform: `scale(${flower.scale}) rotate(${flower.rotation}deg)`
        }"
      >
        <div class="petals"></div>
        <div class="center"></div>
        <div class="stem"></div>
        <div class="leaf"></div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="welcome-content">
      <div class="success-animation">
        <div class="checkmark">✓</div>
      </div>
      
      <h1 class="welcome-title">Bienvenue sur notre téchnologie <span style="text-decoration: underline;">Khaleen Schools</span></h1>
    
      <div class="downloads">
        <h2 style="font-size: x-large; font-weight: bold; color: green;">Téléchargez : </h2>
        <div class="download-lists">
            <div>
                <h3>Livre PDF des instructions pour configurer Khaleen Schools sur votre environement</h3>
                <a href="#" download="#">Télécharger</a>
            </div>
            <div>
                <h3>Un tutoriel vidéo pour Configurer Khaleen Schools sur votre environement</h3>
                <a href="#" download="#">Télécharger</a> <br>
                <a href="#" >Lire sur Youtube</a>
            </div>
            <div>
                <h3>Visite le support de Configuration</h3>
                <a href="#">Visiter</a>
            </div>
        </div>
      </div>

      <div>
        <h2 style="font-weight: bold; color: green;">Les fichiers nécessaires pour Utiliser Khaleen Schools</h2>
        <p style="color: red; font-weight: bold; font-style: italic;">Télécharge-en un, c'est obligatoire</p>
        <p>Ces fichiers, c'est l'ensem,ble des fichiers de configuration, des vidéos  et de Tutoriels, Applications de burreau pour Windows, MacOs, et Linux, et des applications Mobiles pour iOs et Android, il sera téléchargé en zip, vous allez donc le dézipper pour le partager et utiliser</p>

        <div class="files-link">
            <div>
                <h2>Fichiers français</h2>
                <a href="#" download="#" class="download-btn">Télecharger</a>
            </div>
            <div>
                <h2>Fichiers Anglais</h2>
                <a href="#" download="#" class="download-btn">Télecharger</a>
            </div>
        </div>
      </div>


      <div class="support-info">
        <p>🛟 <strong>Besoin d'aide ?</strong> Contactez notre support : 
          <a href="mailto:khaleen.sites@outlook.com">khaleen.sites@outlook.com</a> <br>
          ou écrivez nous sur notre support WhatsApp : 
          <a href="https://wa.me/243978089552">+243 978 089 552</a>
        </p>
      </div>
    </div>

    <!-- Confettis -->
    <div class="confetti-container">
      <div 
        v-for="(confetti, index) in confettis" 
        :key="'confetti-' + index"
        class="confetti"
        :style="{
          left: confetti.x + 'vw',
          backgroundColor: confetti.color,
          animationDelay: confetti.delay + 's',
          transform: `rotate(${confetti.rotation}deg)`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Créer les fleurs animées
const createFlowers = () => {
  const flowerTypes = [1, 2, 3]
  const newFlowers = []
  
  for (let i = 0; i < 12; i++) {
    newFlowers.push({
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      x: Math.random() * 100,
      delay: Math.random() * 6,
      scale: 0.4 + Math.random() * 0.6,
      rotation: Math.random() * 360
    })
  }
  
  flowers.value = newFlowers
}

// Créer les confettis
const createConfettis = () => {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd']
  const newConfettis = []
  
  for (let i = 0; i < 60; i++) {
    newConfettis.push({
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 4,
      rotation: Math.random() * 360
    })
  }
  
  confettis.value = newConfettis
}

// Redirection vers la page de téléchargement
const goToDownloadPage = async () => {
  loading.value = true
  
  try {
    // Simuler un petit délai pour l'animation
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Redirection vers la route /download/files
    router.push('/download/files')
    
  } catch (error) {
    console.error('Erreur lors de la redirection:', error)
    alert('Erreur lors de la redirection. Veuillez réessayer.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
h1, h2, h3 {
    color: black;
    font-weight: 400;
}
p {
    color: black;
    font-weight: lighter;
}
.download-lists {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.582);
    padding-block-end: 1rem;
}
.download-lists div {
    background-color: rgba(128, 128, 128, 0.116);
    box-shadow: 0px 0px 5px black;
    border-radius: 20px;
    /* margin-block-end: 1.5rem; */
}
/* .download-lists div:hover{
    cursor: pointer;
} */
/* .download-lists div a{
    color: blue;
    text-decoration: none;
    font-weight: bold;
    margin-block: 1rem;
} */

.files-link {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.files-link div {
    border: 1px solid rgba(128, 128, 128, 0.185);
    padding: 0 2rem 2rem 2rem;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.37);
}
.files-link div h2 {
    font-size: large;
}

.welcome-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
}

/* Animations de fleurs */
.flowers-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.flower {
  position: absolute;
  animation: float 10s ease-in-out infinite;
  opacity: 0.8;
}

.flower-1 .petals {
  width: 35px;
  height: 35px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  border-radius: 50% 50% 40% 40%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.flower-2 .petals {
  width: 28px;
  height: 28px;
  background: linear-gradient(45deg, #4ecdc4, #6ef0e8);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.flower-3 .petals {
  width: 22px;
  height: 22px;
  background: linear-gradient(45deg, #feca57, #ffdf91);
  border-radius: 40% 50% 50% 40%;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.center {
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #ffd700, #ffed4e);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.stem {
  width: 4px;
  height: 50px;
  background: linear-gradient(to bottom, #2ecc71, #27ae60);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 2px 2px;
}

.leaf {
  width: 18px;
  height: 10px;
  background: linear-gradient(45deg, #27ae60, #2ecc71);
  border-radius: 50% 0 50% 50%;
  position: absolute;
  top: 70%;
  left: 70%;
  transform: rotate(45deg);
  animation: leaf-sway 3s ease-in-out infinite;
}

@keyframes leaf-sway {
  0%, 100% { transform: rotate(45deg) scale(1); }
  50% { transform: rotate(50deg) scale(1.1); }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-15px) rotate(2deg);
  }
  66% {
    transform: translateY(-8px) rotate(-1deg);
  }
}

/* Contenu principal */
.welcome-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  text-align: center;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  max-width: 650px;
  width: 100%;
  position: relative;
  z-index: 10;
  animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animation de succès */
.success-animation {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #10b981, #34d399);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  animation: 
    scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both,
    pulse 2s ease-in-out infinite 1s;
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.success-animation .checkmark {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.welcome-title {
  color: #1f2937;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2, #667eea);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.welcome-subtitle {
  color: #6b7280;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.7;
  font-weight: 400;
}

/* Section des clés */
.keys-info {
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.key-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.key-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.key-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.8rem;
  display: block;
  font-size: 1rem;
}

.key-value {
  background: #1f2937;
  color: #10b981;
  padding: 1rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  word-break: break-all;
  font-size: 0.95rem;
  border: 2px solid #374151;
  display: block;
  width: 100%;
  line-height: 1.4;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.key-value.secret {
  color: #ef4444;
  border-color: #ef4444;
}

.warning {
  color: #ef4444;
  margin-top: 0.8rem;
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Bouton de redirection */
.download-section {
  margin: 2.5rem 0;
}

.download-btn {
  position: relative;
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 60px;
  font-size: 1rem;
  text-decoration: none;
  /* font-weight: 600; */
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
  min-width: 320px;
  animation: gradientShift 3s ease-in-out infinite;
  box-shadow: 
    0 10px 30px rgba(16, 185, 129, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.download-btn:hover:not(:disabled) {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 
    0 20px 40px rgba(16, 185, 129, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.3);
}

.download-btn:active:not(:disabled) {
  transform: translateY(-1px) scale(1);
}

.download-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  animation: none;
}
.download-btn:hover {
    text-decoration: underline;
    color: #f4ff93;
}
.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

.btn-icon {
  font-size: 1.6rem;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
}

.btn-arrow {
  font-size: 1.6rem;
  animation: bounce 2s infinite;
  filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(6px);
  }
  60% {
    transform: translateX(3px);
  }
}

.btn-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: left 0.7s ease-in-out;
}

.download-btn:hover .btn-glow {
  left: 100%;
}

.download-info {
  color: #6b7280;
  margin-top: 1.2rem;
  font-size: 1rem;
  font-weight: 400;
}

/* Prochaines étapes */
.next-steps {
  background: linear-gradient(135deg, #dbeafe, #e0f2fe);
  border: 1px solid #93c5fd;
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: left;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.next-steps h3 {
  color: #1e40af;
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
}

.next-steps ul {
  list-style: none;
  padding-left: 0;
}

.next-steps li {
  padding: 0.6rem 0;
  color: #374151;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

/* Support info */
.support-info {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.support-info p {
  color: #6b7280;
  font-size: 0.95rem;
}

.support-info a, .download-lists div a{
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
}

.support-info a:hover, .download-lists div a:hover {
  text-decoration: underline;
}

/* Confettis */
.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.confetti {
  position: absolute;
  width: 12px;
  height: 12px;
  opacity: 0;
  border-radius: 2px;
  animation: confetti-fall 6s linear infinite;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .welcome-content {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .welcome-title {
    font-size: 2.2rem;
  }
  
  .download-btn {
    min-width: 280px;
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }
  
  .keys-info {
    padding: 1.5rem;
  }
  
  .key-value {
    font-size: 0.85rem;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .welcome-title {
    font-size: 1.8rem;
  }
  
  .download-btn {
    min-width: 250px;
    padding: 1rem 2rem;
  }
  
  .btn-content {
    gap: 0.6rem;
  }
}
</style>