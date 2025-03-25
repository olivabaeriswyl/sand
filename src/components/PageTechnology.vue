<script setup>
import LineLayout from './CompLineLayout.vue'
import Quote from './CompQuote.vue'
import ButtonBase from './CompButton.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

// Apparition schéma au scroll
onMounted(() => {
  gsap.utils.toArray('.schema-img').forEach((img, index) => {
    gsap.to(img, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: img,
        start: 'end 60%',
        end: 'center 30%',
        scrub: true,
        stagger: 0.5,
      },
    })
  })
})

// Animation implant au scroll
onMounted(() => {
  const gif = document.querySelector('#gif-implant')
  const endImage = document.querySelector('#end-implant')

  if (gif && endImage) {
    gsap.to(gif, {
      opacity: 0,
      scrollTrigger: {
        trigger: gif,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      },
    })

    gsap.to(endImage, {
      opacity: 1,
      scrollTrigger: {
        trigger: gif,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
      },
    })
  } else {
    console.warn("L'un des éléments n'a pas été trouvé.")
  }
})
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Technologie : l’innovation au service de vos rêves</h2>
      </div>
    </div>
  </div>

  <div id="background-implant">
    <div class="container">
      <div class="row">
        <div class="col-12 animation-implant">
          <div id="position-implant-static">
            <img
              id="gif-implant"
              src="../../public/img/technology-implant.gif"
              alt="Animation de l'implant, rond"
            />
            <img
              id="end-implant"
              src="../../public/img/technology-implant.png"
              alt="implant rond"
            />
          </div>
        </div>
      </div>
      <div class="section-margin">
        <LineLayout
          compTitle="L'implant Neural SAND : une fusion de science et d'onirisme"
          compText="L’implant SAND est un bijou de technologie avancée, conçu pour interagir en douceur avec votre activité cérébrale. Composé d’une micro-puce en bio-silicium, de neuro-capteurs quantiques et d’un réseau de stimulation synaptique, il module les fréquences cérébrales pour influencer les rêves."
        />
      </div>
      <div class="row section-margin">
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
            Cette interaction subtile permet de superposer des images, sons et sensations
            directement dans le cortex onirique, créant ainsi un rêve fluide et réaliste, sans
            jamais perturber votre sommeil profond.
          </p>
        </div>
        <div class="col-lg-8 schema-animation">
          <img class="schema-img img-one" src="../../public/img/technology-schema-one.png" alt="" />
          <img class="schema-img img-two" src="../../public/img/technology-schema-two.png" alt="" />
          <img
            class="schema-img img-three"
            src="../../public/img/technology-schema-three.png"
            alt=""
          />
          <img
            class="schema-img img-four"
            src="../../public/img/technology-schema-four.png"
            alt=""
          />
          <img class="schema-img img-end" src="../../public/img/technology-schema-end.png" alt="" />
        </div>
      </div>
    </div>
  </div>

  <Quote
    compQuote="Laissez-vous guider par SAND et plongez dans un univers où vos nuits deviennent des aventures inoubliables."
  />
  <div id="background-confort">
    <div class="container">
      <LineLayout
        compTitle="Simplicité et confort d’utilisation"
        compText="L’implant SAND est conçu pour être facilement posé sur la nuque, à domicile. Son adhésion biomagnétique garantit un maintien optimal, sans inconfort ni nécessité d’intervention médicale. Une simple synchronisation avec l’application SAND permet d’activer ou de désactiver l’implant en un instant."
      />
      <div class="row">
        <div class="col-lg-4 offset-lg-6">
          <img
            class="section-margin person-img"
            src="../../public/img/technology-person.gif"
            alt="Implant posé à la base de la nuque"
          />
        </div>
      </div>
      <LineLayout
        compTitle="Sécurité et confidentialité"
        compText="Nous accordons une importance capitale à votre sécurité et à votre intimité. Toutes les interactions entre l’implant et le serveur central sont cryptées et anonymisées. Seul l’utilisateur a accès à ses préférences et à l’historique de ses rêves."
      />
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-6">
        <ButtonBase buttonLink="#/commande" compButton="Commander l'implant" id="button-base" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fond */
#background-implant {
  background-image:
    url(../../public/img/technology-background-implant-white.png),
    url(../../public/img/technology-background-implant.png);
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

#background-confort {
  background-image:
    url(../../public/img/technology-background-confort-white.png),
    url(../../public/img/technology-background-confort.png);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

/* Animation implant au scroll */
#position-implant-static {
  position: relative;
}

#end-implant {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

#gif-implant {
  position: relative;
  z-index: 1;
}

.animation-implant {
  display: flex;
  justify-content: center;
}

.animation-implant img {
  width: auto;
  height: 460px;
}

/* Marges */
.section-margin {
  margin-bottom: 120px;
}

#button-base {
  margin-top: -260px;
}

/* Forcer image dans la div */
.person-img {
  width: auto;
  height: 460px;
}

/* Apparition schéma au scroll */
.schema-img {
  width: 100%;
  height: auto;
  opacity: 0;
  transform: translateY(-50px);
}

.schema-animation {
  position: relative;
  height: 300px;
}

.img-one {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 3px;
}

.img-two {
  z-index: 4;
  position: absolute;
  top: 0;
  left: 4px;
}

.img-three {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 5px;
}

.img-four {
  z-index: 2;
  position: absolute;
  top: 4px;
  left: 0;
}

.img-end {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 8px;
}

@media (max-width: 992px) {
  .schema-animation {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .schema-animation {
    height: 300px;
  }
}

@media (min-width: 1400px) {
  .schema-animation {
    height: 600px;
  }
}
</style>
