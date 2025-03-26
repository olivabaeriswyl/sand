<script setup>
import Quote from './CompQuote.vue'
import LineLayout from './CompLineLayout.vue'
import ButtonBase from './CompButton.vue'
import Explore from './UniqueExplore.vue'
import Horizontal from './UniqueHorizontal.vue'
</script>

<template>
  <img id="sandman" src="../../public/img/home-sandman.png" alt="" />
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1">
        <div class="row section-margin-header">
          <div class="col-12">
            <img class="img-inside" src="../../public/img/logo-big.svg" alt="SAND" />
          </div>
          <div class="col-md-6">
            <h3 class="slogan">Imaginez vos nuits,</h3>
          </div>
          <div class="col-md-6">
            <h3 class="slogan" id="slogan-right">Réinventez votre monde.</h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Quote
    compQuote="Ne laissez plus vos nuits au hasard. Osez rêver grand.<br/> <strong>Repoussez les frontières de l'imaginaire</strong>, et transformez vos nuits en une <strong>expérience unique</strong>."
  />

  <div id="animation-background-implant">
    <div class="container">
      <LineLayout
        compTitle="Bienvenue dans l'ère des rêves contrôlés"
        compText="Notre technologie révolutionnaire repose sur un implant neural de pointe, conçu par nos experts en neurosciences et en intelligence artificielle. Fixé à la base de votre nuque, cet implant synchronise vos cycles de sommeil avec notre base de contrôle intuitive pour créer des rêves sur mesure."
      />
      <div class="row">
        <div class="col-4 col-lg-2 offset-2 offset-lg-4">
          <img class="img-inside" src="../../public/img/homepage-implant.png" alt="implant" />
        </div>
      </div>
      <LineLayout
        compTitle="Technologie et sécurité : une innovation contrôlée"
        compText="Notre implant est conçu pour une expérience fluide et sécurisée. SAND analyse en temps réel vos phases de sommeil pour déclencher les rêves au moment idéal, garantissant une immersion totale sans perturber votre repos naturel. Chaque implant est soumis à des protocoles de sécurité stricts et peut être mis à jour ou réparé par nos experts."
      />
      <div class="row section-margin">
        <div class="col-lg-6 offset-lg-6">
          <ButtonBase buttonLink="#/technology" compButton="En savoir plus" />
        </div>
      </div>
    </div>
  </div>

  <Explore />

  <Horizontal />
  <div class="container">
    <div class="row">
      <div class="col-12" id="button-center">
        <ButtonBase buttonLink="#/map" compButton="En savoir plus" />
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>Nos offres</h3>
      </div>
      <div class="col-12">
        <p id="text-margin">
          <strong>SAND propose des abonnements adaptés à vos besoins :</strong>
        </p>
      </div>
    </div>
    <div class="row" id="offers-margin">
      <div class="col-lg-4">
        <div class="card-color">
          <h4>Découverte</h4>
          <p>
            <strong>3 rêves par mois</strong> pour explorer en douceur. Choisissez entre la Cité des
            Rêves ou l’Espace Personnel <strong>en fonction de vos besoins</strong>.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-color">
          <h4>Explorateur</h4>
          <p>
            Rêves personnalisés ou accès à la cité des rêves <strong>10 fois par mois</strong> pour
            une <strong>immersion approfondie</strong>.
          </p>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card-color">
          <h4>Créateur</h4>
          <p>
            Accès à la Cité des Rêves et à l’Espace Personnel pour
            <strong>façonner votre propre univers</strong>.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <h4>Commandez votre implant dès aujourd’hui et prenez le contrôle de vos rêves.</h4>
      </div>
      <div class="col-lg-4">
        <ButtonBase buttonLink="#/products" compButton="En savoir plus" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Présentation implant */
#animation-background-implant {
  background-image:
    url(../../public/img/homepage-background-implant-white.png),
    url(../../public/img/homepage-background-implant.png);
  background-position: center;
  background-size: cover;
}

/* Image header effet */
#sandman {
  height: auto;
  width: auto;
  position: absolute;
  max-width: 100%;
  top: -180px;
}

/* Autre */
.img-inside {
  width: 100%;
  height: 100%;
}

#slogan-right {
  text-align: end;
}

.section-margin-header {
  margin-top: 180px;
  margin-bottom: 180px;
}

.section-margin {
  margin-bottom: 180px;
}

#button-center {
  display: flex;
  justify-content: center;
  position: relative;
  top: -100px;
  z-index: 10;
}

#text-margin {
  margin: 0 0 40px;
}

.card-color {
  background: var(--color-light-blue);
  padding: 10px 20px;
  border-radius: 12px;
}

h4 {
  margin: 0 0 10px;
}

#offers-margin {
  margin-bottom: 60px;
}

@media (max-width: 992px) {
  .card-color {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .slogan {
    font-size: 2rem;
  }

  #slogan-right {
    text-align: left;
  }

  .section-margin-header {
    margin-top: 100px;
  }

  #sandman {
    top: -120px;
  }

  .slogan {
    margin: 0;
  }
}

@media (max-width: 576px) {
  .section-margin-header {
    margin-top: 100px;
  }
}
</style>
