<script setup></script>

<template>
  <div class="structure">
    <div class="box box-vision">
      <h3>Notre vision</h3>
      <p>
        Tout a commencé avec une idée simple : et si nous pouvions transformer nos nuits en une
        expérience extraordinaire ? Inspirés par les rêves lucides et les avancées en neurosciences,
        nous avons développé une technologie permettant à chacun de maîtriser son univers onirique.
      </p>
      <img src="../../public/img/about-employee.webp" alt="Employés qui discutent" />
    </div>
    <div class="box box-engagement">
      <h3>Notre engagement</h3>
      <p>
        Tout a commencé avec une idée simple : et si nous pouvions transformer nos nuits en une
        expérience extraordinaire ? Inspirés par les rêves lucides et les avancées en neurosciences,
        nous avons développé une technologie permettant à chacun de maîtriser son univers onirique.
      </p>
      <img src="../../public/img/about-engagement.webp" alt="" />
    </div>
  </div>
</template>

<style scoped>
.structure {
  display: flex;
  margin-top: 120px;
  margin-bottom: 120px;
}

.box {
  padding: 40px 10px;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: flex-grow 0.3s ease-in-out;
  padding: 20px;
  overflow: hidden;
  height: 520px;
}

.box:hover {
  flex-grow: 3;
}

.box-vision {
  background-color: var(--color-light-blue);
  display: flex;
  position: relative;
}

.box-engagement {
  background: var(--color-salmon);
  display: flex;
  flex-direction: row-reverse;
  position: relative;
}

.box-engagement h3 {
  text-align: end;
}

p {
  width: 380px;
}

h3 {
  width: 30vw;
  flex-shrink: 0;
}

.box p {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.box:hover p {
  opacity: 1;
}

.box-vision img {
  width: 250px;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.box-engagement img {
  width: auto;
  height: 250px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.structure img {
  transition: all 0.2s ease-in-out;
}

.structure:hover img {
  opacity: 0;
}

@media (min-width: 576px) and (max-width: 1142px) {
  .box {
    height: 600px;
  }
}

@media (max-width: 576px) {
  .structure {
    flex-direction: column;
  }

  .box p {
    opacity: 1;
  }

  .box img {
    opacity: 0;
  }
}
</style>
