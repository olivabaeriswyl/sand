<script setup>
defineProps({
  compButton: String,
  buttonLink: String,
})
</script>

<template>
  <div>
    <a :href="buttonLink">{{ compButton }}</a>
  </div>
</template>

<style scoped>
a {
  font-size: 1rem;
  font-weight: 800;
  color: white;
  text-decoration: none;
  background: var(--color-salmon);
  padding: 10px 40px;
  border: var(--color-salmon) solid 2px;
  border-radius: 40px;
  transition: all 0.4s ease-in-out;
  display: inline-block;
}

a:hover {
  color: var(--color-salmon);
  background: white;
}
</style>
