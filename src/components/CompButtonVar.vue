<script setup>
defineProps({
  compButton: String,
})
</script>

<template>
  <div>
    <a href="#">{{ compButton }}</a>
  </div>
</template>

<style scoped>
/* a {
  background: var(--color-salmon);
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 2rem;
} */
</style>
