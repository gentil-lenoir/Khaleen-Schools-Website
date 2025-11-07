<!-- AdsterraDirect.vue - Version optimisée avec multiples emplacements -->
<template>
  <div>
    <!-- Bannière 300x250 TOP -->
    <div class="adsterra-banner" style="margin: 2rem 0; text-align: center;">
      <script type="text/javascript">
        atOptions = {
          'key' : 'b216f02fad36e6d4eb95eda8c8591d36',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      </script>
      <script type="text/javascript" src="//www.highperformanceformat.com/b216f02fad36e6d4eb95eda8c8591d36/invoke.js"></script>
    </div>

    <!-- Native Banner TOP -->
    <div class="adsterra-native" style="margin: 2rem 0; text-align: center;">
      <script 
        async 
        data-cfasync="false" 
        src="//pl28003514.effectivegatecpm.com/659cc23355304b9d302d2283f845aa9b/invoke.js"
      ></script>
      <div id="container-659cc23355304b9d302d2283f845aa9b"></div>
    </div>

    <!-- Bannière 468x60 MIDDLE -->
    <div class="adsterra-banner" style="margin: 3rem 0; text-align: center;">
      <script type="text/javascript">
        atOptions = {
          'key' : 'ebb0acec43e8ed9f14f735ffc4443fd0',
          'format' : 'iframe',
          'height' : 60,
          'width' : 468,
          'params' : {}
        };
      </script>
      <script type="text/javascript" src="//www.highperformanceformat.com/ebb0acec43e8ed9f14f735ffc4443fd0/invoke.js"></script>
    </div>

    <!-- Native Banner BOTTOM -->
    <div class="adsterra-native" style="margin: 3rem 0; text-align: center;">
      <script 
        async 
        data-cfasync="false" 
        src="//pl28003514.effectivegatecpm.com/659cc23355304b9d302d2283f845aa9b/invoke.js"
      ></script>
      <div id="container-bottom-659cc23355304b9d302d2283f845aa9b"></div>
    </div>

    <!-- Social Bar -->
    <div style="margin: 2rem 0;">
      <script 
        type='text/javascript' 
        src='//pl28003490.effectivegatecpm.com/22/cd/2c/22cd2ccb8a05c1515a242d2a03acc0a7.js'
      ></script>
    </div>
  </div>
</template>

<script setup>
// Clés pour référence (optionnel)
const bannerKeys = {
  small: 'b216f02fad36e6d4eb95eda8c8591d36', // 300x250
  medium: 'ebb0acec43e8ed9f14f735ffc4443fd0', // 468x60
  native: '659cc23355304b9d302d2283f845aa9b',
  social: '22cd2ccb8a05c1515a242d2a03acc0a7'
}
</script>

<style scoped>
.adsterra-banner, .adsterra-native {
  margin: 1rem 0;
  text-align: center;
  padding: 0;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

/* Responsive design */
@media (max-width: 768px) {
  .adsterra-banner, .adsterra-native {
    margin: 0.5rem 0;
    padding: 0;
  }
}
</style>