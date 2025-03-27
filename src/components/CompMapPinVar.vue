<script setup>
import { computed } from 'vue'

const props = defineProps({
  mapText: String,
  icone: String, // Exemple : "map-icone-tower.webp"
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
  <div :id="mapPinPosition" class="map-pin">
    <p>{{ mapText }}</p>
    <img v-if="imageSrc" :src="imageSrc" alt="pin" />
  </div>
</template>

<style scoped>
.map-pin {
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
}

img {
  width: 120px;
  height: auto;
  transition: scale 0.5s ease-in-out;
}

p {
  margin-bottom: 10px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.534);
}

.map-pin:hover p {
  opacity: 1;
}

/* Pin qui s''agrandit' */
.map-pin:hover img {
  scale: 1.2;
}
</style>
