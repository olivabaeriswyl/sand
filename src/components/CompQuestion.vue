<script setup>
defineProps({
  question: String,
  answer: String,
})
</script>

<template>
  <div id="group">
    <div id="question">
      <h4>{{ question }}</h4>
    </div>
    <div id="answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<style scoped>
#question {
  background-image: url(../../public/img/question-blue.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  position: absolute;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  padding: 0 80px;
}

#answer {
  background-image: url(../../public/img/question-salmon.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 220px 40px;
  opacity: 0;
  transition: all 0.5s;
}

#group {
  width: 470px;
  height: auto;
  position: relative;
}

#group:hover #question {
  opacity: 0;
}

#group:hover #answer {
  opacity: 1;
}
</style>
