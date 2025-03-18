<script setup>
import LineLayout from './CompLineLayout.vue'
import ButtonBase from './CompButton.vue'
import ButtonVar from './CompButton.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Nos produits et services</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-3">
        <h3>L'implant Neural SAND</h3>
      </div>
      <div class="col-lg-3">
        <img src="#" alt="Photographie de l'implant" />
      </div>
      <div class="col-lg-6">
        <p>
          Un dispositif innovant, placé à la base de votre nuque, qui module les zones cérébrales
          impliquées dans le rêve pour une immersion totale. Il est conçu pour offrir une expérience
          stable et personnalisée.
        </p>
        <p>
          <strong>Attention:</strong> vous devez avoir un implant en votre possession pour pouvoir
          profiter d’un abonnement
        </p>
        <ButtonBase compButton="Commander l'implant" />
        <ButtonVar compButton="En savoir plus" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h3>Nos abonnements</h3>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
