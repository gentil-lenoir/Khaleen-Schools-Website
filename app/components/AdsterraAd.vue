<!-- components/AdsterraAd.vue -->
<template>
  <div :id="containerId" class="adsterra-ad"></div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'banner',
    validator: (val) => ['banner', 'header', 'popunder'].includes(val)
  },
  containerId: {
    type: String,
    default: 'adsterra-' + Math.random().toString(36).substr(2, 9)
  }
})

const { $adsterra } = useNuxtApp()

onMounted(() => {
  switch (props.type) {
    case 'banner':
      $adsterra.loadBanner(props.containerId)
      break
    case 'header':
      $adsterra.loadHeader(props.containerId)
      break
    case 'popunder':
      $adsterra.loadPopunder()
      break
  }
})
</script>

<style scoped>
.adsterra-ad {
  margin: 1rem 0;
  text-align: center;
}
</style>