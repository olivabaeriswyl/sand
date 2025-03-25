<script setup>
import MapValues from './CompMapValues.vue'
import MapPin from './CompMapPin.vue'
import MapPinVar from './CompMapPinVar.vue'
</script>

<template>
  <div class="structure">
    <div class="box box-personal">
      <div class="box-map box-personal-map">
        <h2>Espace Personnel : vos rêves, votre univers</h2>
        <div class="pin-parent">
          <MapPinVar
            mapText="Grâce à l’implant SAND et à notre application intuitive, vous pouvez programmer vos rêves avant de sombrer dans le sommeil."
            icone="map-icone-castle.png"
            mapPinPosition="pin-castle"
          />
          <MapPin
            mapText="Définissez vos préférences : choisissez votre décor, les personnages qui vous accompagnent et le scénario que vous souhaitez vivre à l’avance."
            icone="map-icone-licorn.png"
            mapPinPosition="pin-licorn"
          />
          <MapPin
            mapText="L’expérience reste immersive : une fois endormi, tout se déroule comme un rêve naturel, et vous pouvez ou non prendre conscience que vous rêvez."
            icone="map-icone-dragon.png"
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
        <h2>La Cité des Rêves : un monde collectif et évolutif</h2>
        <div class="pin-parent">
          <MapPinVar
            mapText="La Cité des Rêves est un espace partagé où les songes des utilisateurs se mêlent et évoluent en fonction d’un scénario de base programmé par défaut."
            icone="map-icone-chest.png"
            mapPinPosition="pin-chest"
          />
          <MapPin
            mapText="Grâce à la Neurosphère, les implants se synchronisent pour permettre une immersion collective fluide et naturelle."
            icone="map-icone-trolls.png"
            mapPinPosition="pin-trolls"
          />
          <MapPin
            mapText="Chaque rêve influence la structure et l’ambiance de la cité, la rendant dynamique et en perpétuelle transformation. Ce monde onirique évolue donc constamment selon les interactions et les créations de ses habitants."
            icone="map-icone-tower.png"
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
.structure {
  display: flex;
}

.box {
  padding: 40px 10px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: flex-grow 0.3s ease-in-out;
  overflow: hidden;
  height: 100vh;
}

.box:hover {
  flex-grow: 3;
}

.box-personal {
  background: url(../../public/img/map-blue.png), var(--color-salmon);
  background-position: left center;
  background-size: cover;
}

.box-city {
  background: url(../../public/img/map-salmon.png), var(--color-light-blue);
  background-position: right center;
  background-size: cover;
}

.box-value {
  display: flex;
  justify-content: space-between;
}

.box-map {
  display: flex;
  align-items: center;
  padding-bottom: 300px;
}

.box-city-map {
  flex-direction: row-reverse;
}
/* Titre */
.structure:hover h2 {
  font-size: 36px;
  rotate: 90deg;
}

h2 {
  width: 360px;
  rotate: 0deg;
  transition: all 0.5s;
}

.box:hover h2 {
  rotate: 0deg;
}

/* Position pins */
.pin-parent {
  position: relative;
}

#pin-castle {
  position: absolute;
  top: 20vh;
  right: -15vw;
}

#pin-licorn {
  position: absolute;
  top: 40vh;
  right: 5vw;
}

#pin-dragon {
  position: absolute;
  top: 50vh;
  right: -25vw;
}

#pin-chest {
  position: absolute;
  top: 0;
  right: -15vw;
}

#pin-trolls {
  position: absolute;
  top: 40vh;
  right: -6vw;
}

#pin-tower {
  position: absolute;
  top: 48vh;
  right: -35vw;
}
</style>
