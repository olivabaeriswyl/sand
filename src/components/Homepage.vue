<script setup>
import Quote from './CompQuote.vue'
import LineLayout from './CompLineLayout.vue'
import BaseButton from './CompButton.vue'
import Explore from './UniqueExplore.vue'
import Horizontal from './UniqueHorizontal.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <img src="#" alt="SAND" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-5 offset-lg-1">
        <h3>Imaginez vos nuits,</h3>
      </div>
      <div class="col-lg-5">
        <h3>Réinventez votre monde.</h3>
      </div>
    </div>
  </div>

  <Quote
    compQuote="<strong>Ne laissez plus</strong> vos nuits au hasard. Osez rêver grand. Repoussez les frontières de l'imaginaire, et transformez vos nuits en une expérience unique."
  />

  <div class="container">
    <LineLayout
      compTitle="Bienvenue dans l'ère des rêves contrôlés"
      compText="Notre technologie révolutionnaire repose sur un implant neural de pointe, conçu par nos experts en neurosciences et en intelligence artificielle. Fixé à la base de votre nuque, cet implant synchronise vos cycles de sommeil avec notre base de contrôle intuitive pour créer des rêves sur mesure."
    />
    <LineLayout
      compTitle="Technologie et sécurité : une innovation contrôlée"
      compText="Notre implant est conçu pour une expérience fluide et sécurisée. SAND analyse en temps réel vos phases de sommeil pour déclencher les rêves au moment idéal, garantissant une immersion totale sans perturber votre repos naturel. Chaque implant est soumis à des protocoles de sécurité stricts et peut être mis à jour ou réparé par nos experts."
    />
    <div class="row">
      <div class="col-lg-6 offset-lg-6">
        <BaseButton compButton="En savoir plus" />
      </div>
    </div>
  </div>

  <Explore />

  <Horizontal />

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>Nos offres</h3>
      </div>
      <div class="col-12">
        <p><strong>SAND propose des abonnements adaptés à vos besoins :</strong></p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <h4>Découverte</h4>
        <p>
          <strong>3 rêves par mois</strong> pour explorer en douceur. Choisissez entre la Cité des
          Rêves ou l’Espace Personnel <strong>en fonction de vos besoins</strong>.
        </p>
      </div>
      <div class="col-lg-4">
        <h4>Explorateur</h4>
        <p>
          Rêves personnalisés ou accès à la cité des rêves <strong>10 fois par mois</strong> pour
          une <strong>immersion approfondie</strong>.
        </p>
      </div>
      <div class="col-lg-4">
        <h4>Créateur</h4>
        <p>
          Accès à la Cité des Rêves et à l’Espace Personnel pour
          <strong>façonner votre propre univers</strong>.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <h4>Commandez votre implant dès aujourd’hui et prenez le contrôle de vos rêves.</h4>
      </div>
      <div class="col-lg-4">
        <BaseButton compButton="En savoir plus" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
