<script setup>
import { RouterView, useRoute } from "vue-router";
import { watch, onMounted } from "vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

// Get access to the route from imported useRoute()
const route = useRoute();
const change_bg = (current_route) => {
  if (current_route === "/insights") {
    document.querySelector("body").style.backgroundColor = "#FEF1E9";
    document.querySelector("nav").style.backgroundColor = "#FEF1E9";
  } else {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("nav").style.backgroundColor = "white";
  }
};

onMounted(() => {
  document.querySelector("nav").style.backgroundColor = "white";
  watch(
    () => route.path,
    (to) => {
      change_bg(to);
    }
  );
});
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
