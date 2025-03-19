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
    <p>{{ mapText }}</p>
  </div>
</template>
