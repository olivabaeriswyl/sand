<script setup>
import { computed } from 'vue'

const props = defineProps({
  mapText: String,
  icone: String, // Exemple : "map-icone-tower.png"
  mapPinPosition: String,
})

const imageSrc = computed(() => {
  if (!props.icone) return ''

  return props.icone.startsWith('http')
    ? props.icone
    : new URL(`/src/assets/img/${props.icone}`, import.meta.url).href
})
</script>

<template>
  <div :id="mapPinPosition">
    <p>{{ mapText }}</p>
    <img v-if="imageSrc" :src="imageSrc" alt="pin" />
  </div>
</template>

<style scoped>
div {
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 120px;
  height: auto;
}

p {
  margin-bottom: 10px;
}
</style>
