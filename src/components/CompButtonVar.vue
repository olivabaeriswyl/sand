<script setup>
defineProps({
  compButton: String,
  buttonLink: String,
})

const applyFilter = (event) => {
  event.target.style.filter = 'url(#grainyEffect)'
}

const removeFilter = (event) => {
  event.target.style.filter = 'none'
}
</script>

<template>
  <div>
    <a :href="buttonLink" @mouseenter="applyFilter" @mouseleave="removeFilter">{{ compButton }}</a>
  </div>
</template>

<style scoped>
a {
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-salmon);
  text-decoration: none;
  background: white;
  padding: 10px 40px;
  border: var(--color-salmon) solid 2px;
  border-radius: 40px;
  transition: all 0.4s ease-in-out;
  display: inline-block;
}

a:hover {
  color: white;
  background: var(--color-salmon);
  scale: 1.02;
  filter: url(#grainyEffect);
}
</style>
