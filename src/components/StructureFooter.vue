<script setup>
// import { inject } from 'vue'
// const logoButton = inject('logoButton')
// const scrollToTop = () => {
//   if (logoButton?.value) {
//     logoButton.value.scrollIntoView({ behavior: 'smooth' })
//   }
// }
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img id="footer-logo" src="../../public/img/logo-sand.svg" alt="SAND" />
          <p id="footer-rights">© 2036 SAND. Tous droits réservés.</p>
        </div>
        <div class="col-lg-3">
          <div>
            <p class="title"><strong>Compagnie</strong></p>
            <a href="#/news">Actualités</a>
            <a href="#/contact">Contact</a>
            <a href="#/legal">Mentions légales</a>
          </div>
          <div>
            <p class="title title-margin"><strong>Suivez nous</strong></p>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            <a href="#" target="_blank">Zao Technology</a>
          </div>
        </div>
        <div class="col-lg-2">
          <div>
            <p class="title"><strong>Explorer</strong></p>
            <a href="#/technology">La technologie</a>
            <a href="#/products">Produits et Services</a>
            <a href="#/map">Espaces de rêve</a>
            <a href="#/about">À Propos</a>
          </div>
          <div>
            <p class="title title-margin"><strong>Compte</strong></p>
            <a href="#/client">Espace Client</a>
          </div>
          <div>
            <p class="title title-margin"><strong>Donation</strong></p>
            <a href="#/sponsor">Devenir Mécène</a>
          </div>
        </div>
        <div class="col-lg-1">
          <button @click="scrollToTop">
            <img src="../../public/img/arrow.svg" alt="^" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 300px 0 80px;
  background-image:
    url(../../public/img/footer-background-white.png), url(../../public/img/footer-background.png);
  background-position: bottom;
  background-size: cover;
}

.blue footer {
  background-image:
    url(../../public/img/footer-background-white.png),
    url(../../public/img/footer-background-blue.png);
}

#footer-logo {
  width: 180px;
}

#footer-rights {
  margin: 0;
}

a {
  color: var(--color-black-blue);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.15px;
  text-decoration: none;
  transition: font-weight 0.2s;
  display: block;
  margin-bottom: 10px;
}

a:hover {
  font-weight: 800;
}

a,
p {
  text-shadow: 0 0 6px white;
}

.title {
  margin-bottom: 20px;
}

.title-margin {
  margin-top: 40px;
}
</style>
