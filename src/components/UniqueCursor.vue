<script setup>
import { ref, onMounted } from 'vue'

const mouseX = ref(0)
const mouseY = ref(0)

const updateMousePosition = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

onMounted(() => {
  // Écouter les mouvements de la souris sur toute la fenêtre
  window.addEventListener('mousemove', updateMousePosition)
})
</script>

<template>
  <div class="cursor-container">
    <svg class="filter-svg">
      <!-- Définition du filtre -->
      <defs>
        <filter id="grainyEffect">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
        </filter>
      </defs>

      <!-- Fond normal -->
      <rect width="100%" height="100%" fill="transparent" />

      <!-- Cercle avec l'effet grainé qui suit la souris -->
      <circle :cx="mouseX" :cy="mouseY" r="50" filter="url(#grainyEffect)" fill="#FF957D" />
    </svg>
  </div>
</template>

<style scoped>
.cursor-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}

.filter-svg {
  width: 100%;
  height: 100%;
}
</style>
