<script setup>
defineProps({
  mapValue: String,
  mapText: String,
})
</script>

<template>
  <div>
    <p>
      <strong>{{ mapValue }}</strong>
    </p>
    <p id="text">{{ mapText }}</p>
  </div>
</template>

<style scoped>
div #text {
  opacity: 0;
}

div:hover #text {
  opacity: 1;
}
</style>
