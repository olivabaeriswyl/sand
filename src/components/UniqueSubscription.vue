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
})
</script>

<template>
  <div class="col-lg-6">
    <h4>{{ subscribeTitle }}</h4>
    <div class="row">
      <div class="col-lg-8">
        <p v-html="subscribeText"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div>
          <p>
            <strong>{{ subscribeSubtitle }}</strong>
          </p>
          <p>{{ subscribeInfo }}</p>
          <p>{{ subscribePrice }}</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div>
          <p>
            <strong>{{ subscribeSubtitleTwo }}</strong>
          </p>
          <p>{{ subscribeInfoTwo }}</p>
          <p>{{ subscribePriceTwo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
