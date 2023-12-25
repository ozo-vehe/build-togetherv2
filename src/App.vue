<script setup>
import { RouterView } from "vue-router";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>

<template>
  <NavbarComponent />
  <Transition name="slide-fade" appear>
    <RouterView />
  </Transition>
  <FooterComponent />
</template>

<style scoped>
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
</style>
