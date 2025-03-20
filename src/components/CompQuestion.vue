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

<style scoped></style>
