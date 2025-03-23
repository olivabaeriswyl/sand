<script setup></script>

<template>
  <div id="background-parent">
    <div id="background"></div>
    <img src="../../public/img/map-icone-licorn.png" alt="" />
    <div class="container">
      <div class="row">
        <div class="col-12" id="direction">
          <div>
            <p id="error">404</p>
            <p>Page non trouvée, peut-être se trouve-elle dans vos rêves ?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#error {
  font-size: 290px;
  font-weight: 100;
  color: var(--color-salmon);
  margin: 0;
  line-height: 1;
}

#direction {
  position: relative;
  display: flex;
  justify-content: center;
}

#background-parent {
  position: relative;
}

img {
  position: absolute;
  right: 100px;
  width: 78px;
  height: auto;
  rotate: -15deg;
}

@media (max-width: 576px) {
  #error {
    font-size: 200px;
  }
}

@media (max-width: 400px) {
  #error {
    font-size: 100px;
  }
}

/* #background {
  background-image:
    url(../../public/img/error-background-white.png), url(../../public/img/error-background.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  height: 100vh;
  width: 100vw;
} */
</style>
