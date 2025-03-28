<script setup>
import MapValues from './CompMapValues.vue'
import MapPin from './CompMapPin.vue'
import MapPinVar from './CompMapPinVar.vue'
</script>

<template>
  <div class="structure">
    <div class="box box-personal">
      <div class="box-map box-personal-map">
        <h2>Espace Personnel <span>: vos rêves, votre univers</span></h2>
        <div class="pin-parent">
          <MapPinVar
            mapText="Grâce à l’implant SAND et à notre application intuitive, vous pouvez programmer vos rêves avant de sombrer dans le sommeil."
            icone="map-icone-castle.webp"
            mapPinPosition="pin-castle"
          />
          <MapPin
            mapText="Définissez vos préférences : choisissez votre décor, les personnages qui vous accompagnent et le scénario que vous souhaitez vivre à l’avance."
            icone="map-icone-licorn.webp"
            mapPinPosition="pin-licorn"
          />
          <MapPin
            mapText="L’expérience reste immersive : une fois endormi, tout se déroule comme un rêve naturel, et vous pouvez ou non prendre conscience que vous rêvez."
            icone="map-icone-dragon.webp"
            mapPinPosition="pin-dragon"
          />
        </div>
      </div>
      <div class="box-value">
        <MapValues
          mapValue="Personnalisation totale"
          mapText="Choisissez votre monde, vos personnages, vos actions."
        />
        <MapValues
          mapValue="Expérience fluide"
          mapText="Laissez votre subconscient explorer ou déclenchez un rêve lucide."
        />
        <MapValues
          mapValue="Évasion garantie"
          mapText="Vivez des aventures inédites sans contraintes."
        />
      </div>
    </div>

    <div class="box box-city">
      <div class="box-map box-city-map">
        <h2>La Cité des Rêves <span>: un monde collectif et évolutif</span></h2>
        <div class="pin-parent">
          <MapPinVar
            mapText="La Cité des Rêves est un espace partagé où les songes des utilisateurs se mêlent et évoluent en fonction d’un scénario de base programmé par défaut."
            icone="map-icone-chest.webp"
            mapPinPosition="pin-chest"
          />
          <MapPin
            mapText="Grâce à la Neurosphère, les implants se synchronisent pour permettre une immersion collective fluide et naturelle."
            icone="map-icone-trolls.webp"
            mapPinPosition="pin-trolls"
          />
          <MapPin
            mapText="Chaque rêve influence la structure et l’ambiance de la cité, la rendant dynamique et en perpétuelle transformation. Ce monde onirique évolue donc constamment selon les interactions et les créations de ses habitants."
            icone="map-icone-tower.webp"
            mapPinPosition="pin-tower"
          />
        </div>
      </div>
      <div class="box-value">
        <MapValues
          mapValue="Un espace collectif"
          mapText="Les utilisateurs connectés à la neurosphère fusionnent leurs rêves pour créer un univers unique."
        />
        <MapValues
          mapValue="Un scénario évolutif"
          mapText="Chaque nuit, la cité se réinvente, influencée par l’imaginaire collectif."
        />
        <MapValues
          mapValue="Un rêve interactif"
          mapText="Modifiez certaines parties de l’environnement et interagissez avec d’autres rêveurs."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Fonctionnement de base */
* {
  box-sizing: border-box;
}

.structure {
  margin-top: -150px;
  display: flex;
}

.box {
  padding: 120px 20px 40px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: flex-grow 0.5s ease-in-out;
  overflow: hidden;
  height: 100dvh;
  width: 100dvw;
  position: relative;
}

.box:hover {
  flex-grow: 3;
}

.box:hover .pin-parent,
.box:hover .box-value {
  opacity: 1;
  transition: opacity 0.5s 0.3s ease-in-out;
}

.box:not(:hover) .pin-parent,
.box:not(:hover) .box-value {
  opacity: 0;
  transition: opacity 0.2s 0s ease-in-out;
}

.pin-parent {
  position: absolute;
}

/* Map de fond */
.box-personal {
  left: 0;
  background: url(../../public/img/map-blue.webp), var(--color-salmon);
  background-position: left center;
  background-size: cover;
}

.box-city {
  right: 0;
  background: url(../../public/img/map-salmon.webp), var(--color-light-blue);
  background-position: right center;
  background-size: cover;
}

/* Layout des éléments */
.box-value {
  display: flex;
  justify-content: space-between;
}

.box-map {
  display: flex;
  align-items: center;
}

.box-city-map {
  flex-direction: row-reverse;
}
/* Titre */
.structure:hover h2 {
  font-size: 36px;
  rotate: 90deg;
  width: 380px;
}

h2 {
  width: 480px;
  rotate: 0deg;
  transition: all 0.5s ease-in-out;
  transform-origin: left center;
}

.box:hover h2 {
  rotate: 0deg;
}

/* Titre raccourcit */
span {
  transition: opacity 0.2s ease-in-out;
}

.structure:hover .box:not(:hover) span {
  opacity: 0;
}

/* Position pins */
.map-pin {
  position: absolute;
}

#pin-castle {
  top: 8dvh;
  left: 30dvw;
}

#pin-licorn {
  top: 30dvh;
  left: 10dvw;
}

#pin-dragon {
  top: 36dvh;
  left: 36dvw;
}

#pin-chest {
  top: -5dvh;
  right: 30dvw;
}

#pin-trolls {
  top: 36dvh;
  right: 38dvw;
}

#pin-tower {
  top: 30dvh;
  right: 8dvw;
}

@media (max-width: 1260px) {
  #pin-dragon {
    top: 36dvh;
    left: 40dvw;
  }

  #pin-chest {
    top: -5dvh;
    right: 34dvw;
  }

  #pin-trolls {
    top: 36dvh;
    right: 38dvw;
  }
}

@media (max-width: 1146px) {
  #pin-dragon {
    top: 30dvh;
    left: 40dvw;
  }

  #pin-trolls {
    top: 34dvh;
    right: 20dvw;
  }

  #pin-tower {
    top: 10dvh;
    right: 8dvw;
  }
}

@media (max-width: 1000px) {
  #pin-castle {
    top: 0dvh;
    left: 22dvw;
  }

  #pin-licorn {
    top: 26dvh;
    left: 26dvw;
  }

  #pin-dragon {
    top: 52dvh;
    left: 28dvw;
  }

  #pin-chest {
    top: 5dvh;
    right: 0dvw;
  }

  #pin-trolls {
    top: 32dvh;
    right: -2dvw;
  }

  #pin-tower {
    top: 54dvh;
    right: 4dvw;
  }

  h2 {
    width: 380px;
  }

  .box-value {
    display: flex;
    flex-direction: column;
  }

  .structure:hover h2 {
    font-size: 26px;
  }
}

@media (max-width: 825px) {
  #pin-castle {
    top: 0dvh;
    left: 38dvw;
  }

  #pin-licorn {
    top: 20dvh;
    left: 20dvw;
  }

  #pin-dragon {
    top: 32dvh;
    left: 46dvw;
  }

  #pin-chest {
    top: 4dvh;
    right: 18dvw;
  }

  #pin-trolls {
    top: 26dvh;
    right: -2dvw;
  }

  #pin-tower {
    top: 40dvh;
    right: 26dvw;
  }
}

@media (max-width: 825px) {
  .structure {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  #pin-castle {
    top: 0dvh;
    left: 24dvw;
  }

  #pin-licorn {
    top: 20dvh;
    left: 22dvw;
  }

  #pin-dragon {
    top: 42dvh;
    left: 22dvw;
  }

  #pin-chest {
    top: 4dvh;
    right: 0;
  }

  #pin-trolls {
    top: 30dvh;
    right: 0;
  }

  #pin-tower {
    top: 50dvh;
    right: 0;
  }
}

/* Marges haut sur header */
@media (max-width: 992px) {
  .structure {
    margin-top: -208px;
  }

  .box {
    padding: 160px 20px 40px;
  }
}
</style>
