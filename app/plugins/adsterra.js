// plugins/adsterra.js
export default defineNuxtPlugin((nuxtApp) => {
  // Configuration Adsterra
  const adsterraConfig = {
    bannerKey: 'TA_CLE_BANNER',
    popunderKey: 'TA_CLE_POPUNDER',
    headerKey: 'TA_CLE_HEADER'
  };

  // Fonction pour injecter le script
  const loadAdsterraScript = (key, format, height, width) => {
    const script = document.createElement('script');
    script.innerHTML = `
      atOptions = {
        'key' : '${key}',
        'format' : '${format}',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
      document.write('<scr' + 'ipt type="text/javascript" src="http' + 
      (location.protocol === 'https:' ? 's' : '') + 
      '://www.profitabledisplaynetwork.com/${key}/invoke.js"></scr' + 'ipt>');
    `;
    return script;
  };

  // Exposer les fonctions globalement
  return {
    provide: {
      adsterra: {
        loadBanner: (containerId) => {
          if (process.client) {
            const container = document.getElementById(containerId);
            if (container) {
              const script = loadAdsterraScript(adsterraConfig.bannerKey, 'iframe', 250, 300);
              container.appendChild(script);
            }
          }
        },
        loadHeader: (containerId) => {
          if (process.client) {
            const container = document.getElementById(containerId);
            if (container) {
              const script = loadAdsterraScript(adsterraConfig.headerKey, 'iframe', 90, 728);
              container.appendChild(script);
            }
          }
        }
      }
    }
  };
});