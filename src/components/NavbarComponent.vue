<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/logo.png";

const route = useRoute();

console.log(route.path);
</script>
<template>
  <nav class="flex flex-wrap gap-8 border py-6 px-16 items-center justify-between">
    <!-- Navigation Logo -->
    <RouterLink to="/">
      <img class="w-10" :src="logo" alt="Logo image" />
    </RouterLink>

    <!-- Navigation Menu Items -->
    <ul
      aria-labelledby="nav_hamburger"
      role="menu"
      class="nav_menu flex gap-10 items-center text-custom_card_header text-xl"
    >
      <li
        class="menu_item transition-all duration-300"
        :class="{ active: route.path === '/' }"
      >
        <RouterLink role="menuitem" to="/">Home</RouterLink>
      </li>
      <li class="menu_item" :class="{ active: route.path === '/about' }">
        <RouterLink role="menuitem" to="/about">About Us</RouterLink>
      </li>
      <li class="menu_item" :class="{ active: route.path === '/products' }">
        <RouterLink role="menuitem" to="/products">Products</RouterLink>
      </li>
      <li class="menu_item" :class="{ active: route.path === '/projects' }">
        <RouterLink role="menuitem" to="/projects">Projects</RouterLink>
      </li>
    </ul>

    <!-- Navigation Join Button -->
    <button
      class="text-custom_orange join_btn p-2 w-160 rounded-xl border-2 border-custom_orange hover:bg-custom_orange hover:text-slate-50 transition-all duration-300"
    >
      Join Us
    </button>
  </nav>
</template>

<style scoped>
.active {
  position: relative;
}
.active::after {
  content: "";
  position: absolute;
  bottom: -3px;
  border-radius: 10px;
  left: 0px;
  height: 3px;
  width: 60%;
  background: rgb(245 119 36);
}
</style>
