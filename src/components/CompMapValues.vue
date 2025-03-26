<script setup>
defineProps({
  mapValue: String,
  mapText: String,
})
</script>

<template>
  <div class="map-value">
    <p id="title-value">
      <strong>{{ mapValue }}</strong>
    </p>
    <p id="text">{{ mapText }}</p>
  </div>
</template>

<style scoped>
.map-value {
  width: 30dvw;
}

.map-value #text {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.map-value:hover #text {
  opacity: 1;
}

/* Titre qui rapetissit */
#title-value {
  transition: scale 0.5s ease-in-out;
  transform-origin: center left;
}

.map-value:hover #title-value {
  scale: 0.8;
}
</style>
