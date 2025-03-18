<script>
defineProps({
  greetingMessage: String,
})
</script>

<template>
  <div class="row">
    <div class="col-lg-6">
      <h3>{{ h3 }}</h3>
    </div>
    <div class="col-lg-6">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
