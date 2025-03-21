<script setup>
defineProps({
  subscribeTitle: String,
  subscribeText: String,
  subscribeSubtitle: String,
  subscribeInfo: String,
  subscribePrice: String,
  subscribeSubtitleTwo: String,
  subscribeInfoTwo: String,
  subscribePriceTwo: String,
  card: String,
  cardTwo: String,
})
</script>

<template>
  <div class="col-lg-6">
    <h4>{{ subscribeTitle }}</h4>
    <div class="row">
      <div class="col-lg-8 presentation-text">
        <p v-html="subscribeText"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div :class="card">
          <p class="subtitle-margin">
            <strong>{{ subscribeSubtitle }}</strong>
          </p>
          <p>{{ subscribeInfo }}</p>
          <p class="price">{{ subscribePrice }}</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div :class="cardTwo">
          <p class="subtitle-margin">
            <strong>{{ subscribeSubtitleTwo }}</strong>
          </p>
          <p>{{ subscribeInfoTwo }}</p>
          <p class="price">{{ subscribePriceTwo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin: 0 0;
}

.subtitle-margin {
  margin-bottom: 0px;
}

.price {
  color: var(--color-salmon);
  font-weight: 700;
  margin-top: 10px;
}

.card-color {
  background: var(--color-light-blue);
  padding: 10px 20px;
  border-radius: 12px;
}

h4 {
  margin-bottom: 0;
}

.presentation-text p {
  margin: 0 0 40px;
}
</style>
