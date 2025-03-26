<script setup>
// import { ref, provide } from 'vue'
// const logoButton = ref(null)
// provide('logoButton', logoButton)
import { onMounted } from 'vue'

const applyFilter = (element) => {
  // Appliquer le filtre grainyEffect
  element.style.filter = 'url(#grainyEffect)'
}

const resetFilter = (element) => {
  // Réinitialiser le filtre
  element.style.filter = 'none'
}

onMounted(() => {
  // Référence des éléments
  const link = document.querySelector('.link')
  const navGap = document.querySelector('#nav-end-gap')

  // Appliquer et réinitialiser le filtre au hover
  if (link) {
    link.addEventListener('mouseenter', () => applyFilter(link))
    link.addEventListener('mouseleave', () => resetFilter(link))
  }

  if (navGap) {
    navGap.addEventListener('mouseenter', () => applyFilter(navGap))
    navGap.addEventListener('mouseleave', () => resetFilter(navGap))
  }
})
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
              <a href="#/technology" class="link">La technologie</a>
              <a href="#/products" class="link">Produits et Services</a>
              <a href="#/map" class="link">Espaces de rêve</a>
              <a href="#/about" class="link">À Propos</a>
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
  padding: 60px 0 10px;
  background-position: top;
  background-size: cover;
}

.no-background footer {
  padding: 60px 0 100px;
}

.salmon header {
  padding: 60px 0 100px;
  background-image:
    url(../../public/img/header-white-background.png), url(../../public/img/header-background.png);
}

.blue header {
  padding: 60px 0 100px;
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
  transition: filter 1s ease-in-out;
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
  transition: filter 1s ease-in-out;
}

a:hover,
#nav-end-gap a:hover {
  filter: url(../assets/img/cursor.svg);
}
</style>
