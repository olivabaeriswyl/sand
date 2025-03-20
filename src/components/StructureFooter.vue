<script setup></script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <img src="../img/logo-sand.svg" alt="SAND" />
          <p>© 2036 SAND. Tous droits réservés.</p>
        </div>
        <div class="col-lg-3">
          <div>
            <p><strong>Compagnie</strong></p>
            <a href="#/news">Actualités</a>
            <a href="#/contact">Contact</a>
            <a href="#/legal">Mentions légales</a>
          </div>
          <div>
            <p><strong>Suivez nous</strong></p>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
            <a href="#" target="_blank">Zao Technology</a>
          </div>
        </div>
        <div class="col-lg-2">
          <div>
            <p><strong>Explorer</strong></p>
            <a href="#/technology">La technologie</a>
            <a href="#/products">Produits et Services</a>
            <a href="#/map">Espaces de rêve</a>
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
footer {
  padding: 300px 0 80px;
  background-image: url(../img/footer-background-white.png), url(../img/footer-background.png);
  background-position: top;
  background-size: cover;
}

img {
  width: 180px;
}

a {
  color: var(--color-black-blue);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.15px;
  text-decoration: none;
  transition: font-weight 0.2s;
  display: block;
}

a:hover {
  font-weight: 800;
}

a,
p {
  text-shadow: 0 0 6px white;
}
</style>
