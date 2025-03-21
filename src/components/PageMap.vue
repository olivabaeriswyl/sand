<script setup>
import MapValues from './CompMapValues.vue'
import MapPin from './CompMapPin.vue'
import MapPinVar from './CompMapPinVar.vue'
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>
            Entrez dans SAND et choisissez votre destin onirique : une escapade intime ou une épopée
            partagée dans la Cité des Rêves.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h2>Espace Personnel : vos rêves, votre univers</h2>
        </div>
        <div class="col-6">
          <h2>La Cité des Rêves : un monde collectif et évolutif</h2>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h2>Espace Personnel : vos rêves, votre univers</h2>
          <MapPinVar
            mapText="Grâce à l’implant SAND et à notre application intuitive, vous pouvez programmer vos rêves avant de sombrer dans le sommeil."
          />
          <MapPin
            mapText="Définissez vos préférences : choisissez votre décor, les personnages qui vous accompagnent et le scénario que vous souhaitez vivre à l’avance."
          />
          <MapPin
            mapText="L’expérience reste immersive : une fois endormi, tout se déroule comme un rêve naturel, et vous pouvez ou non prendre conscience que vous rêvez."
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <MapValues
            MapValue="Personnalisation totale"
            MapText="Choisissez votre monde, vos personnages, vos actions."
          />
          <MapValues
            MapValue="Expérience fluide"
            MapText="Laissez votre subconscient explorer ou déclenchez un rêve lucide."
          />
          <MapValues
            MapValue="Évasion garantie"
            MapText="Vivez des aventures inédites sans contraintes."
          />
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <h2>La Cité des Rêves : un monde collectif et évolutif</h2>
        </div>
      </div>
    </div>
  </div>

  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h2>Espace Personnel : vos rêves, votre univers</h2>
        </div>
        <div class="col-6">
          <h2>La Cité des Rêves : un monde collectif et évolutif</h2>
          <MapPinVar
            mapText="La Cité des Rêves est un espace partagé où les songes des utilisateurs se mêlent et évoluent en fonction d’un scénario de base programmé par défaut."
          />
          <MapPin
            mapText="Grâce à la Neurosphère, les implants se synchronisent pour permettre une immersion collective fluide et naturelle."
          />
          <MapPin
            mapText="Chaque rêve influence la structure et l’ambiance de la cité, la rendant dynamique et en perpétuelle transformation. Ce monde onirique évolue donc constamment selon les interactions et les créations de ses habitants."
          />
          <div>
            <MapValues
              MapValue="Un espace collectif"
              MapText="Les utilisateurs connectés à la neurosphère fusionnent leurs rêves pour créer un univers unique."
            />
            <MapValues
              MapValue="Un scénario évolutif"
              MapText="Chaque nuit, la cité se réinvente, influencée par l’imaginaire collectif."
            />
            <MapValues
              MapValue="Un rêve interactif"
              MapText="Modifiez certaines parties de l’environnement et interagissez avec d’autres rêveurs."
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="structure">
    <div class="box box-personal">
      <div>
        <h2>Espace Personnel : vos rêves, votre univers</h2>
        <div>
          <MapPinVar
            mapText="Grâce à l’implant SAND et à notre application intuitive, vous pouvez programmer vos rêves avant de sombrer dans le sommeil."
          />
          <MapPin
            mapText="Définissez vos préférences : choisissez votre décor, les personnages qui vous accompagnent et le scénario que vous souhaitez vivre à l’avance."
          />
          <MapPin
            mapText="L’expérience reste immersive : une fois endormi, tout se déroule comme un rêve naturel, et vous pouvez ou non prendre conscience que vous rêvez."
          />
        </div>
      </div>
      <div>
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
      <div>
        <h2>La Cité des Rêves : un monde collectif et évolutif</h2>
        <div>
          <MapPinVar
            mapText="La Cité des Rêves est un espace partagé où les songes des utilisateurs se mêlent et évoluent en fonction d’un scénario de base programmé par défaut."
          />
          <MapPin
            mapText="Grâce à la Neurosphère, les implants se synchronisent pour permettre une immersion collective fluide et naturelle."
          />
          <MapPin
            mapText="Chaque rêve influence la structure et l’ambiance de la cité, la rendant dynamique et en perpétuelle transformation. Ce monde onirique évolue donc constamment selon les interactions et les créations de ses habitants."
          />
        </div>
      </div>
      <div>
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
.box-personal {
  background-color: var(--color-salmon);
}

.box-city {
  background-color: var(--color-light-blue);
}
</style>
