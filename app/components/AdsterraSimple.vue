<!-- components/AdsterraSimple.vue -->
<template>
  <div>
    <ClientOnly>
      <!-- Native Banner -->
      <div :id="`container-${nativeKey}`" class="adsterra-native"></div>
      <script 
        async 
        data-cfasync="false" 
        :src="`//pl28003514.effectivegatecpm.com/${nativeKey}/invoke.js`"
      ></script>

      <!-- Social Bar -->
      <script 
        type='text/javascript' 
        :src="`//pl28003490.effectivegatecpm.com/22/cd/2c/${socialKey}.js`"
      ></script>
    </ClientOnly>
  </div>
</template>

<script setup>
const nativeKey = '659cc23355304b9d302d2283f845aa9b'
const socialKey = '22cd2ccb8a05c1515a242d2a03acc0a7'
</script>

<style scoped>
.adsterra-native {
  margin: 2rem 0;
  text-align: center;
  padding: 1rem;
}
</style>