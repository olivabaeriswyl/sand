<script setup>
const applyFilter = (event) => {
  event.target.style.filter = 'url(#grainyEffect)'
}

const removeFilter = (event) => {
  event.target.style.filter = 'none'
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <a href="#" class="hover-link" @mouseenter="applyFilter" @mouseleave="removeFilter">
            <img id="footer-logo" src="../../public/img/logo-sand.svg" alt="SAND" />
          </a>
          <p id="footer-rights">© 2036 SAND. Tous droits réservés.</p>
        </div>
        <div class="col-6 col-md-3">
          <div>
            <p class="title"><strong>Compagnie</strong></p>
            <a href="#/news" class="hover-link" @mouseenter="applyFilter" @mouseleave="removeFilter"
              >Actualités</a
            >
            <a
              href="#/contact"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Contact</a
            >
            <a
              href="#/legal"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Mentions légales</a
            >
          </div>
          <div>
            <p class="title title-margin"><strong>Suivez nous</strong></p>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Instagram</a
            >
            <a
              href="#"
              target="_blank"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Zao Technology</a
            >
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div>
            <p class="title"><strong>Explorer</strong></p>
            <a
              href="#/technology"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >La technologie</a
            >
            <a
              href="#/products"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Produits et Services</a
            >
            <a href="#/map" class="hover-link" @mouseenter="applyFilter" @mouseleave="removeFilter"
              >Espaces de rêve</a
            >
            <a
              href="#/about"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >À Propos</a
            >
          </div>
          <div>
            <p class="title title-margin"><strong>Compte</strong></p>
            <a
              href="#/client"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Espace Client</a
            >
          </div>
          <div>
            <p class="title title-margin"><strong>Donation</strong></p>
            <a
              href="#/sponsor"
              class="hover-link"
              @mouseenter="applyFilter"
              @mouseleave="removeFilter"
              >Devenir Mécène</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 20px 0 80px;
  background-position: bottom;
  background-size: cover;
}

.no-background footer {
  pointer-events: none;
  display: none;
}

.salmon footer {
  padding: 300px 0 80px;
  background-image:
    url(../../public/img/footer-background-white.png), url(../../public/img/footer-background.png);
}

.blue footer {
  padding: 300px 0 80px;
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
  transition: font-weight 0.2s ease-in-out;
  transition: scale 0.5s ease-in-out;
  display: block;
  margin-bottom: 10px;
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

.hover-link:hover {
  scale: 1.01;
  filter: url(#grainyEffect);
}
</style>
