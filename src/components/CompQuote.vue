<script setup>
defineProps({
  compQuote: String,
})

import ButtonBase from './CompButton.vue'
</script>

<template>
  <div id="quote-background">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <h3 v-html="compQuote"></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#quote-background {
  background-image:
    url(../../public/img/quote-background-white.png), url(../../public/img/quote-background.png);
  background-position: center;
  background-size: cover;
  padding: 160px 0;
  margin-bottom: 120px;
}

.blue #quote-background {
  background-image:
    url(../../public/img/quote-background-white.png),
    url(../../public/img/quote-background-blue.png);
}
</style>
