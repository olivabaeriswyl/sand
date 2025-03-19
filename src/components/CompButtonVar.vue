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
a {
  font-size: 1rem;
  font-weight: 800;
  color: var(--color-salmon);
  text-decoration: none;
  background: white;
  padding: 10px 40px;
  border: var(--color-salmon) solid 2px;
  border-radius: 40px;
  transition: all 0.4s;
  display: inline-block;
}

a:hover {
  color: white;
  background: var(--color-salmon);
}
</style>
