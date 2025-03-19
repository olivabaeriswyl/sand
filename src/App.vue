<script setup>
import { ref, computed } from 'vue'
import NotFound from './components/PageNotFound.vue'
import Homepage from './components/Homepage.vue'
import Products from './components/PageProducts.vue'
import Technology from './components/PageTechnology.vue'
import About from './components/PageAbout.vue'

const routes = {
  '/': Homepage,
  '/products': Products,
  '/technology': Technology,
  '/about': About,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <a href="#" id="logo">
            <img src="#" alt="SAND" />
          </a>
        </div>
        <div class="col-lg-7">
          <nav>
            <div>
              <a href="#/technology">La technologie</a>
              <a href="#/products">Produits et Services</a>
              <a href="#">Espaces de rêve</a>
              <a href="#/about">À Propos</a>
            </div>
            <a href="#/client">Espace Client</a>
            <a href="#/sponsor">Devenir Mécène</a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <component :is="currentView" />
  <main></main>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img src="#" alt="SAND" />
          <p>© 2036 SAND. Tous droits réservés.</p>
        </div>
        <div class="col-lg-3">
          <div>
            <p><strong>Compagnie</strong></p>
            <a href="#">Actualités</a>
            <a href="#">Contact</a>
            <a href="#">Mentions légales</a>
          </div>
          <div>
            <p><strong>Suivez nous</strong></p>
            <a href="#">Instagram</a>
            <a href="#">Zao Technology</a>
          </div>
        </div>
        <div class="col-lg-2">
          <div>
            <p><strong>Explorer</strong></p>
            <a href="#/technology">La technologie</a>
            <a href="#/products">Produits et Services</a>
            <a href="#">Espaces de rêve</a>
            <a href="#/about">À Propos</a>
          </div>
          <div>
            <p><strong>Compte</strong></p>
            <a href="#/client">Espace Client</a>
          </div>
          <div>
            <p><strong>Donation</strong></p>
            <a href="#/sponsor">Devenir Mécène</a>
          </div>
        </div>
        <div class="col-lg-1">
          <a href="#logo">
            <img src="#" alt="^" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
