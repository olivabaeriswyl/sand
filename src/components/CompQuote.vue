<script setup>
defineProps({
  compQuote: String,
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <h3 v-html="compQuote"></h3>
      </div>
    </div>
  </div>
</template>
