<script setup></script>

<template>
  <div id="background-parent">
    <img src="../img/map-icone-licorn.png" alt="" />
    <!-- <img src="../img/error-background.png" alt="" /> -->
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

/*
#background {
  background-image: url(../img/error-background-white.png), url(../img/error-background.png);
  background-position: center;
  background-size: cover;
}

img {
  position: absolute;
  width: 800px;
} */
</style>
