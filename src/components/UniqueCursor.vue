<script setup>
import { ref } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const updateMousePosition = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}
</script>

<template>
  <div @mousemove="updateMousePosition" class="container">
    <svg class="filter-svg">
      <!-- Définition du filtre -->
      <defs>
        <filter id="grainyEffect">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
        </filter>
      </defs>

      <!-- Fond normal -->
      <rect width="100%" height="100%" fill="white" />

      <!-- Cercle avec l'effet grainé qui suit la souris -->
      <circle :cx="mouseX" :cy="mouseY" r="50" filter="url(#grainyEffect)" fill="white" />
    </svg>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
}

.filter-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  background-color: white;
}
</style>
