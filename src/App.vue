<script setup>
import { ref, computed } from 'vue'
import StructureHeader from './components/StructureHeader.vue'
import StructureFooter from './components/StructureFooter.vue'
import NotFound from './components/PageNotFound.vue'
import Homepage from './components/Homepage.vue'
import Products from './components/PageProducts.vue'
import Technology from './components/PageTechnology.vue'
import Map from './components/PageMap.vue'
import About from './components/PageAbout.vue'
import Cursor from './components/UniqueCursor.vue'

const routes = {
  '/': Homepage,
  '/products': Products,
  '/technology': Technology,
  '/map': Map,
  '/about': About,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
  window.scrollTo(0, 0)
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <!-- <Cursor /> -->
  <div
    :class="[
      currentPath == '#/technology' || currentPath == '#/about'
        ? 'blue'
        : currentPath == '#/map'
          ? ''
          : 'salmon',
    ]"
  >
    <div id="header-position">
      <StructureHeader />
    </div>

    <main>
      <component :is="currentView" />
    </main>

    <StructureFooter />
  </div>
</template>

<style scoped>
#header-position {
  position: relative;
  z-index: 2;
}

main {
  position: relative;
  z-index: 1;
}
</style>
