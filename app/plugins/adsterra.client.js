// plugins/adsterra.client.js
export default defineNuxtPlugin((nuxtApp) => {
  // Configuration Adsterra
  const adsterraConfig = {
    bannerKey: 'TA_CLE_BANNER',
    popunderKey: 'TA_CLE_POPUNDER', 
    headerKey: 'TA_CLE_HEADER'
  }

  // Fonction pour charger les bannières
  const loadAdsterraBanner = (key, width = 300, height = 250, containerId = 'adsterra-banner') => {
    if (typeof window === 'undefined') return // Only client-side
    
    const container = document.getElementById(containerId)
    if (!container) return

    const script = document.createElement('script')
    script.innerHTML = `
      atOptions = {
        'key': '${key}',
        'format': 'iframe',
        'height': ${height},
        'width': ${width},
        'params': {}
      };
      document.write('<scr' + 'ipt type="text/javascript" src="https://www.profitabledisplaynetwork.com/${key}/invoke.js"></scr' + 'ipt>');
    `
    container.appendChild(script)
  }

  // Fonction pour popunder
  const loadAdsterraPopunder = (key) => {
    if (typeof window === 'undefined') return
    
    // Éviter de montrer le popunder trop souvent
    if (sessionStorage.getItem('adsterra_popunder_shown')) return

    const script = document.createElement('script')
    script.src = `https://www.profitabledisplaynetwork.com/${key}/invoke.js`
    script.async = true
    document.head.appendChild(script)

    sessionStorage.setItem('adsterra_popunder_shown', 'true')
  }

  // Exposer les fonctions globalement
  return {
    provide: {
      adsterra: {
        loadBanner: (containerId, key = adsterraConfig.bannerKey) => 
          loadAdsterraBanner(key, 300, 250, containerId),
        
        loadHeader: (containerId, key = adsterraConfig.headerKey) => 
          loadAdsterraBanner(key, 728, 90, containerId),
        
        loadPopunder: (key = adsterraConfig.popunderKey) => 
          loadAdsterraPopunder(key)
      }
    }
  }
})