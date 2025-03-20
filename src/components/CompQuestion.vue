<script setup>
defineProps({
  question: String,
  answer: String,
})
</script>

<template>
  <div>
    <h4>{{ question }}</h4>
    <p>{{ answer }}</p>
  </div>
</template>

<style scoped>
div {
  background-image: url(../img/question-blue.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 180px 80px;
  width: 470px;
}

/* url(../img/question-salmon.png) */
</style>
