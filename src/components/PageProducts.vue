<script setup>
import ButtonBase from './CompButton.vue'
import ButtonVar from './CompButtonVar.vue'
import Subscription from './UniqueSubscription.vue'
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Nos produits et services</h2>
      </div>
    </div>
    <div class="row section-margin">
      <div class="col-lg-3">
        <h3>L'implant Neural SAND</h3>
      </div>
      <div class="col-lg-3">
        <img
          id="implant-size"
          src="../../public/img/products-implant.png"
          alt="Photographie de l'implant"
        />
      </div>
      <div class="col-lg-6">
        <p>
          Un dispositif innovant, placé à la base de votre nuque, qui module les zones cérébrales
          impliquées dans le rêve pour une immersion totale. Il est conçu pour offrir une expérience
          stable et personnalisée.
        </p>
        <p id="implant-text-margin">
          <strong>Attention:</strong> vous devez avoir un implant en votre possession pour pouvoir
          profiter d’un abonnement
        </p>
        <div class="button-place">
          <ButtonBase buttonLink="#/commande" compButton="Commander l'implant" />
          <ButtonVar buttonLink="#/technology" compButton="En savoir plus" />
        </div>
      </div>
    </div>
    <div class="row section-margin">
      <div class="col-12">
        <h3>Nos abonnements</h3>
      </div>
      <Subscription
        subscribeTitle="Espace Perso"
        subscribeText="Rêvez dans <strong>l’espace personnel</strong> et <strong>personnalisez le</strong> grâce au catalogue des rêves."
        subscribeSubtitle="Découverte"
        subscribeInfo="3 rêves par mois"
        subscribePrice="25.-/mois"
        subscribeSubtitleTwo="Explorateur"
        subscribeInfoTwo="10 rêves par mois"
        subscribePriceTwo="60.-/mois"
        card="card-color"
        cardTwo="card-color"
      />
      <Subscription
        subscribeTitle="Cité des rêves"
        subscribeText="<strong>Rêvez dans la cité</strong> et <strong>explorez</strong> en chaque recoins."
        subscribeSubtitle="Découverte"
        subscribeInfo="3 explorations par mois"
        subscribePrice="25.-/mois"
        subscribeSubtitleTwo="Explorateur"
        subscribeInfoTwo="10 explorations par mois"
        subscribePriceTwo="60.-/mois"
        card="card-color"
        cardTwo="card-color"
      />
      <Subscription
        subscribeTitle="Créateur"
        subscribeText="Choisissez le rêve qui vous convient <strong>en fonction de vos préférences</strong> de la nuit."
        subscribeSubtitle="Découverte"
        subscribeInfo="3 rêves et 3 explorations par mois"
        subscribePrice="45.-/mois"
        subscribeSubtitleTwo="Explorateur"
        subscribeInfoTwo="10 rêves et 10 explorations par mois"
        subscribePriceTwo="110.-/mois"
        card="card-color"
        cardTwo="card-color"
      />
      <Subscription
        subscribeTitle="Rêve unique"
        subscribeText="Découvrez l’expérience avec <strong>un rêve à choix</strong> dans l’espace personnel ou dans la cité des rêves."
        subscribeSubtitle="Test"
        subscribeInfo="1 rêve ou 1 exploration"
        subscribePrice="10.-"
        card="card-color"
      />
      <div class="col-lg-6 offset-lg-6 button-place" id="button-place-margin">
        <ButtonBase buttonLink="#/subscribe" compButton="Définir un abonnement" />
        <ButtonVar buttonLink="#/map" compButton="En savoir plus" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <h3>L'appilcation SAND</h3>
        <p>
          Gratuite et intuitive, elle vous permet de lancer et personnaliser vos rêves en quelques
          clics : choix du scénario, du lieu et des personnages.
        </p>
        <h4>Téléchargez dès maintenant l’application SAND et prenez le contrôle de vos nuits.</h4>
        <ButtonBase buttonLink="#/technology" compButton="Téléchargez l'application" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 offset-lg-6">
        <h3>Service d’entretien et de réparation</h3>
        <p>
          Votre implant a besoin d’une mise à jour ou a subi des dommages ? Notre équipe d’experts
          est disponible pour assurer son bon fonctionnement et prolonger sa durabilité.
        </p>
        <ButtonBase buttonLink="#/service" compButton="Contacter le service" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#implant-size {
  width: 80%;
  height: auto;
}

#implant-text-margin {
  margin-top: 200px 0 60px;
}

.button-place {
  display: flex;
  justify-content: space-between;
}

#button-place-margin {
  margin-top: 40px;
}

.section-margin {
  margin-bottom: 180px;
}
</style>
