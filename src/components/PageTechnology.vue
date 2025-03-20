<script setup>
import LineLayout from './CompLineLayout.vue'
import Quote from './CompQuote.vue'
import ButtonBase from './CompButton.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Technologie : l’innovation au service de vos rêves</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <img src="#" alt="Photographie de l'implant, rond" />
      </div>
    </div>
    <LineLayout
      compTitle="L'implant Neural SAND : une fusion de science et d'onirisme"
      compText="L’implant SAND est un bijou de technologie avancée, conçu pour interagir en douceur avec votre activité cérébrale. Composé d’une micro-puce en bio-silicium, de neuro-capteurs quantiques et d’un réseau de stimulation synaptique, il module les fréquences cérébrales pour influencer les rêves."
    />
    <div class="row">
      <div class="col-12">
        <h3>Un fonctionnement naturel et intelligent</h3>
      </div>
      <div class="col-lg-4">
        <p>
          Grâce à ses capteurs électro-neuronaux, l’implant analyse en temps réel votre cycle de
          sommeil et identifie le moment idéal pour intervenir. Il établit ensuite une connexion
          cryptée avec notre serveur onirique afin de télécharger le scénario sélectionné et de
          l’intégrer progressivement et tout en douceur dans votre activité cognitive.
        </p>
        <p>
          Cette interaction subtile permet de superposer des images, sons et sensations directement
          dans le cortex onirique, créant ainsi un rêve fluide et réaliste, sans jamais perturber
          votre sommeil profond.
        </p>
      </div>
      <div class="col-lg-8">
        <img
          src="#"
          alt="schéma 1 Analyse du cycle du sommeil, 2 Connexion sécurisée au serveur onirique, 3 Téléchargement du scénario séléctionné, 4 Intégration progressive dans l'activité cognitive, 5 Expérience immersive et fluide"
        />
      </div>
    </div>
  </div>
  <Quote
    compQuote="Laissez-vous guider par SAND et plongez dans un univers où vos nuits deviennent des aventures inoubliables."
  />
  <ButtonBase compButton="Commander l'implant" />
  <div class="container">
    <LineLayout
      compTitle="Simplicité et confort d’utilisation"
      compText="L’implant SAND est conçu pour être facilement posé sur la nuque, à domicile. Son adhésion biomagnétique garantit un maintien optimal, sans inconfort ni nécessité d’intervention médicale. Une simple synchronisation avec l’application SAND permet d’activer ou de désactiver l’implant en un instant."
    />
    <div class="row">
      <div class="col-lg-4 offset-lg-6">
        <img src="#" alt="Implant posé à la base de la nuque" />
      </div>
    </div>
    <LineLayout
      compTitle="Sécurité et confidentialité"
      compText="Nous accordons une importance capitale à votre sécurité et à votre intimité. Toutes les interactions entre l’implant et le serveur central sont cryptées et anonymisées. Seul l’utilisateur a accès à ses préférences et à l’historique de ses rêves."
    />
  </div>
</template>

<style scoped></style>
