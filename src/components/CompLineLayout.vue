<script setup>
defineProps({
  compTitle: String,
  compText: String,
})
</script>

<template>
  <div class="row">
    <div class="col-lg-6">
      <h3>{{ compTitle }}</h3>
    </div>
    <div class="col-lg-6">
      <p>{{ compText }}</p>
    </div>
  </div>
</template>
