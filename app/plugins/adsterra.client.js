// plugins/adsterra.client.js - VERSION FINALE
export default defineNuxtPlugin((nuxtApp) => {
  // Vérifier si déjà initialisé
  if (nuxtApp.$adsterra) return
  
  const adsterraConfig = {
    nativeBanner: '659cc23355304b9d302d2283f845aa9b',
    socialBar: '22cd2ccb8a05c1515a242d2a03acc0a7'
  }

  const loadNativeBanner = (containerId = 'adsterra-native') => {
    if (typeof window === 'undefined') return
    
    const container = document.getElementById(containerId)
    if (!container) return

    // Créer le container si inexistant
    if (!container.querySelector('#container-' + adsterraConfig.nativeBanner)) {
      const nativeContainer = document.createElement('div')
      nativeContainer.id = 'container-' + adsterraConfig.nativeBanner
      container.appendChild(nativeContainer)
    }

    // Charger le script
    const script = document.createElement('script')
    script.async = true
    script.setAttribute('data-cfasync', 'false')
    script.src = `//pl28003514.effectivegatecpm.com/${adsterraConfig.nativeBanner}/invoke.js`
    
    container.appendChild(script)
  }

  const loadSocialBar = () => {
    if (typeof window === 'undefined') return

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `//pl28003490.effectivegatecpm.com/22/cd/2c/${adsterraConfig.socialBar}.js`
    
    document.head.appendChild(script)
  }

  nuxtApp.provide('adsterra', {
    loadNativeBanner,
    loadSocialBar
  })

  // Charger automatiquement après le rendu
  nuxtApp.hook('app:mounted', () => {
    setTimeout(() => {
      loadNativeBanner()
      loadSocialBar()
    }, 2000)
  })
})