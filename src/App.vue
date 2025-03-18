<script setup>
import Homepage from './components/Homepage.vue'
import Button from './components/CompButton.vue'
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <img src="#" alt="SAND" />
        </div>
        <div class="col-lg-7">
          <div>
            <a href="#">La technologie</a>
            <a href="#">Produits et Services</a>
            <a href="#">Espaces de rêve</a>
            <a href="#">À Propos</a>
          </div>
          <a href="#">Espace Client</a>
          <a href="#">Devenir Mécène</a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <Button compButton="En savoir plus" />
    <Homepage />
  </main>

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
            <a href="#">La technologie</a>
            <a href="#">Produits et Services</a>
            <a href="#">Espaces de rêve</a>
            <a href="#">À Propos</a>
          </div>
          <div>
            <p><strong>Compte</strong></p>
            <a href="#">Espace Client</a>
          </div>
          <div>
            <p><strong>Donation</strong></p>
            <a href="#">Devenir Mécène</a>
          </div>
        </div>
        <div class="col-lg-1">
          <img src="#" alt="^" />
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
