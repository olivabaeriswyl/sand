<script setup>
import Values from './UniqueValues.vue'
import Question from './CompQuestion.vue'
import Quote from './CompQuote.vue'
import ButtonBase from './CompButton.vue'
</script>

<template>
  <div id="backround-implant">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>Qui sommes nous</h2>
        </div>
        <div class="col-lg-6">
          <p>
            Chez SAND, nous sommes des passionnés de l’esprit humain, de ses mystères et de ses
            possibilités infinies. Notre ambition : offrir à chacun le pouvoir de contrôler ses
            rêves et d'explorer l'imaginaire sans limite.
          </p>
        </div>
        <div class="col-lg-6">
          <img
            src="../../public/img/about-scientist.png"
            alt="Scientifique passionné"
            id="img-scientist"
          />
        </div>
      </div>
    </div>
    <div id="ani-values-background">
      <Values />
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="question-parent">
          <div id="question-one">
            <Question
              question="Pourquoi certains rêves paraissent-ils si réels ?"
              answer="Cela peut être dû à l'intensité des émotions vécues durant le rêve, ou à la ressemblance avec des expériences réelles. Le cerveau active les mêmes zones que celles utilisées pendant les expériences vécues."
            />
          </div>
          <div id="question-two">
            <Question
              question="Qu’est-ce qu’un rêve lucide et comment se produit-il ?"
              answer="Un rêve lucide est un rêve où le rêveur prend conscience qu'il rêve et peut parfois contrôler le rêve. Cela survient quand le cerveau reconnaît les incohérences ou les signes d'un rêve."
            />
          </div>
        </div>
        <div id="question-three">
          <Question
            question="Comment les chercheurs ont-ils découvert une technologie liée ?"
            answer="Nos équipes se sont basées sur les avancées en neurosciences et en interfaces cerveau-machine pour développer un implant capable d’interagir avec les cycles du sommeil. Des études approfondies sur les états modifiés de conscience et l’activité cérébrale nocturne ont permis d’identifier les moments idéaux pour insérer un scénario onirique personnalisé."
          />
        </div>
      </div>
    </div>
  </div>
  <Quote
    compQuote="Les rêves sont des mondes à explorer. Avec SAND, chacun peut les façonner à son image."
  />
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <h3>Une leader visionnaire</h3>
      </div>
      <div class="col-lg-4">
        <img
          src="../../public/img/about-boss.png"
          alt="Photographie de la directrice, souriante"
          id="img-boss"
        />
      </div>
      <div class="col-lg-4">
        <p>
          Notre fondatrice, Natasha Perrier, est une pionnière de l’innovation onirique. Passionnée
          par la neurologie et les états de conscience, elle a rassemblé une équipe d’experts pour
          concrétiser cette vision : faire du rêve un terrain d'exploration accessible à tous.
        </p>
        <ButtonBase buttonLink="#/sponsor" compButton="Devenir mécène" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Forcer image dans bootstrap */
#img-boss {
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  #img-boss {
    width: 60%;
    height: auto;
  }
}

#img-scientist {
  width: 60%;
  height: auto;
}

/* Questions */
.question-parent {
  display: flex;
  justify-content: space-around;
}

#question-three {
  margin-top: -200px;
  margin-left: 200px;
}

#question-two {
  margin-top: 200px;
}

@media (max-width: 576px) {
  .question-parent {
    flex-direction: column;
  }

  #question-one {
    margin: 0;
  }

  #question-two {
    margin-top: 0;
  }

  #question-three {
    margin-top: 0;
    margin-left: 0;
  }
}

/* Fond */
#backround-implant {
  background-image: url(../../public/img/about-background-values.png);
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

#ani-values-background {
  padding-bottom: 120px;
}
</style>
