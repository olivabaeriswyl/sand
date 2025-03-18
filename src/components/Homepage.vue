<script setup>
import Quote from './Quote.vue'
import LineRow from './LineRow.vue'
import Button from './Button.vue'
</script>

<template>
  <Quote quote="message" />
  <div class="container">
    <LineRow h3="Titre" text="texte" />
    <LineRow h3="Titre" text="texte" />
    <Button button="En savoir plus" />
  </div>
</template>

<style scoped></style>
