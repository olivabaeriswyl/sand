<script setup>
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
      end: '+=2000',
      scrub: 1,
      pin: true,
    },
  })
})
</script>

<template>
  <div class="slider-mask">
    <div class="slider-container">
      <div class="slider-layout">
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
      <!-- <div class="img-background"></div> -->
      <img src="../../public/img/homepage-horizontal.png" alt="" class="horizontal-img" />
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
  height: 100%;
  width: 400vw;
}

.horizontal-img {
  width: 88%;
  height: auto;
  position: absolute;
  top: 30%;
  left: 0;
}

.slider-layout {
  display: flex;
}

.slider-element {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
}

.slider-content {
  width: 60%;
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
</style>
