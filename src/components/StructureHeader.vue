<script setup>
const applyFilter = (event) => {
  event.target.style.filter = 'url(#grainyEffect)'
}

const removeFilter = (event) => {
  event.target.style.filter = 'none'
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <a href="#" class="hover-link" @mouseenter="applyFilter" @mouseleave="removeFilter">
            <img id="logo" src="../../public/img/logo-sand.svg" alt="SAND" />
          </a>
        </div>
        <div class="col-lg-6">
          <nav>
            <div id="nav-gap">
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
              <a
                href="#/map"
                class="hover-link"
                @mouseenter="applyFilter"
                @mouseleave="removeFilter"
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
            <div id="nav-end-gap">
              <a
                href="#/client"
                @mouseenter="applyFilter"
                @mouseleave="removeFilter"
                class="hover-link"
                >Espace Client</a
              >
              <a
                href="#/sponsor"
                @mouseenter="applyFilter"
                @mouseleave="removeFilter"
                class="hover-link"
                >Devenir Mécène</a
              >
            </div>
          </nav>
        </div>
      </div>
    </div>

    <svg class="filter-svg" style="display: none">
      <defs>
        <filter id="grainyEffect">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
        </filter>
      </defs>
    </svg>
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

#logo {
  width: 180px;
}

a {
  color: var(--color-black-blue);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.15px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.526);
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
  transition: all 0.5s ease-in-out;
}

.hover-link:hover {
  scale: 1.01;
  filter: url(#grainyEffect);
}
</style>
