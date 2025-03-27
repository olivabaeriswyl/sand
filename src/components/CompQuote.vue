<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ButtonBase from './CompButton.vue'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  compQuote: String,
})

const quoteContainer = ref(null)

onMounted(() => {
  if (!quoteContainer.value) return

  gsap.fromTo(
    quoteContainer.value,
    { opacity: 0, y: 50 }, // Départ : invisible et décalé vers le bas
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: quoteContainer.value,
        start: 'top 50%', // Déclenchement à mi-écran
        toggleActions: 'play reverse play reverse', // Réversible au scroll
      },
    },
  )
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill()) // Nettoyage GSAP
})
</script>

<template>
  <div id="quote-background" ref="quoteContainer">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h3 v-html="compQuote"></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#quote-background {
  background-image:
    url(../../public/img/quote-background-white.webp), url(../../public/img/quote-background.webp);
  background-position: center;
  background-size: cover;
  padding: 160px 0;
  margin-bottom: 120px;
  opacity: 0; /* Caché par défaut pour l'effet */
  transform: translateY(50px); /* Décalage initial */
}

.blue #quote-background {
  background-image:
    url(../../public/img/quote-background-white.webp),
    url(../../public/img/quote-background-blue.webp);
}
</style>
