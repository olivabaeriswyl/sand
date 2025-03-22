<script setup>
import BaseButton from './CompButton.vue'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.slider-container', {
    x: '-75%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.slider-mask',
      start: 'top top',
      end: '+=2000' /* Ajuste la longueur du scroll */,
      scrub: 1,
      pin: true,
    },
  })
})
</script>

<template>
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg-12 section-parent">
        <div class="section">
          <h3>La Cité des Rêves: un univers en constante évolution</h3>
        </div>
        <div class="section">
          <p>
            Plongez dans un espace collectif où chaque rêveur contribue à façonner un monde sans
            limites.
          </p>
        </div>
        <div class="section">
          <p>
            La Neurosphère vous permet d'interagir avec d'autres utilisateurs, d'explorer ensemble
            et de découvrir une réalité onirique partagée.
          </p>
        </div>
        <div class="section">
          <p>
            Chaque nuit devient une aventure, un lieu d'exploration et de rencontres inoubliables.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <BaseButton compButton="En savoir plus" />
      </div>
    </div>
  </div> -->
  <div class="slider-mask">
    <div class="slider-container">
      <div class="slider-element">
        <div class="slider-content">
          <h3>La Cité des Rêves: un univers en constante évolution</h3>
        </div>
      </div>
      <div class="slider-element">
        <div class="slider-content">
          <p>
            Plongez dans un espace collectif où chaque rêveur contribue à façonner un monde sans
            limites.
          </p>
        </div>
      </div>
      <div class="slider-element">
        <div class="slider-content">
          <p>
            La Neurosphère vous permet d'interagir avec d'autres utilisateurs, d'explorer ensemble
            et de découvrir une réalité onirique partagée.
          </p>
        </div>
      </div>
      <div class="slider-element">
        <div class="slider-content">
          <p>
            Chaque nuit devient une aventure, un lieu d'exploration et de rencontres inoubliables.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-mask {
  overflow: hidden;
  height: 100vh;
}

.slider-container {
  padding: 180px;
  display: flex;
  height: 100%;
  width: 400vw;
}

.slider-element {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
}

.slider-content {
  width: 60%; /* Définit la largeur du contenu */
}

@media (max-width: 576px) {
  .slider-content {
    width: 90%;
  }
}

@media (min-width: 992px) {
  .slider-content {
    width: 40%;
  }
}

/* width: 570px; */
/* .section-parent {
  display: flex;
} */
</style>
