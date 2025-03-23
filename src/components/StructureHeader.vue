<script setup>
// import { ref, provide } from 'vue'
// const logoButton = ref(null)
// provide('logoButton', logoButton)
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <a href="#" id="logo" ref="logoButton">
            <img src="../../public/img/logo-sand.svg" alt="SAND" />
          </a>
        </div>
        <div class="col-lg-6">
          <nav>
            <div id="nav-gap">
              <a href="#/technology">La technologie</a>
              <a href="#/products">Produits et Services</a>
              <a href="#/map">Espaces de rêve</a>
              <a href="#/about">À Propos</a>
            </div>
            <div id="nav-end-gap">
              <a href="#/client">Espace Client</a>
              <a href="#/sponsor">Devenir Mécène</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 60px 0 100px;
  background-image:
    url(../../public/img/header-white-background.png), url(../../public/img/header-background.png);
  background-position: top;
  background-size: cover;
}

.blue header {
  background-image:
    url(../../public/img/header-white-background.png),
    url(../../public/img/header-background-blue.png);
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
  text-shadow: 0 0 6px white;
}

#nav-gap {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#nav-end-gap {
  display: flex;
  justify-content: end;
  gap: 8%;
}

#nav-end-gap a {
  font-weight: 700;
  transition: font-weight 0.2s;
}

a:hover,
#nav-end-gap a:hover {
  font-weight: 800;
}
</style>
