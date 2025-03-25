<script setup>
defineProps({
  mapValue: String,
  mapText: String,
})
</script>

<template>
  <div class="map-value">
    <p>
      <strong>{{ mapValue }}</strong>
    </p>
    <p id="text">{{ mapText }}</p>
  </div>
</template>

<style scoped>
.map-value #text {
  opacity: 0;
  transition: opacity 0.5s;
}

.map-value:hover #text {
  opacity: 1;
}
</style>
