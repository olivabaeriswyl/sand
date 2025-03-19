<script setup></script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <a href="#" id="logo">
            <img src="../img/logo-sand.svg" alt="SAND" />
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
  background-image: url(../img/header-white-background.png), url(../img/header-background.png);
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
}

#nav-gap {
  margin-bottom: 30px;
  display: flex;
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
