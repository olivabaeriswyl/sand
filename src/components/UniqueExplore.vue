<script setup>
import { ref } from 'vue'

const hoveredText = ref(false)
</script>

<template>
  <div class="background" :class="hoveredText">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3>Explorez l’impossible</h3>
        </div>
        <div class="col-12">
          <h4>Avec SAND, vous accédez à un catalogue infini de rêves, adapté à vos envies.</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <p id="travel" @mouseover="hoveredText = 'travel'" @mouseleave="hoveredText = null">
            <strong>Voyagez</strong> dans des galaxies lointaines, <strong>explorez</strong> des
            mondes fantastiques ou <strong>plongez</strong> au fond des océans.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <p id="wizard" @mouseover="hoveredText = 'wizard'" @mouseleave="hoveredText = null">
            Expérimentez des <strong>sensations uniques</strong> : incarner un super-héros,
            maîtriser la magie ou revivre une époque révolue. Tout est possible !
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 offset-lg-8">
          <p id="peace" @mouseover="hoveredText = 'peace'" @mouseleave="hoveredText = null">
            <strong>Trouvez la paix</strong> en transformant vos cauchemars en songes apaisants, en
            surmontant vos peurs ou en apaisant votre stress.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url(../../public/img/homepage-explore.png);
  background-position: bottom;
  background-size: auto 70%;
  background-repeat: no-repeat;
  padding-bottom: 300px;
  transition: background-image 0.5s ease;
}

.background.wizard {
  background-image: url(../../public/img/homepage-explore-wizard.png);
}

.background.travel {
  background-image: url(../../public/img/homepage-explore-travel.png);
}

.background.peace {
  background-image: url(../../public/img/homepage-explore-peace.png);
}

h4 {
  margin: 0 0 80px;
}

@media (min-width: 1300px) {
  .background {
    background-size: auto 90%;
  }
}

@media (max-width: 768px) {
  .background {
    background-image: url(../../public/img/homepage-explore-mobile.png);
  }
}
</style>
