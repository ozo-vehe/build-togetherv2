<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/logo.png";
import { ref, reactive } from "vue";

const route = useRoute();
let menu_open = ref(false);

const nav_links = reactive([
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Insights",
    to: "/insights",
  },
]);

// Fixed position for the navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 70) {
    navbar.style.position = "fixed";
    navbar.style.borderBottom = "1px solid #e5e5e5";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1000";
  } else {
    navbar.style.position = "relative";
    navbar.style.borderBottom = "none";
  }
});
</script>
<template>
  <nav class="flex flex-wrap gap-8 py-6 px-16 items-center justify-between">
    <!-- Navigation Logo -->
    <RouterLink to="/">
      <img class="w-10" :src="logo" alt="Logo image" />
    </RouterLink>

    <!-- Navigation Hamburger -->
    <div class="nav_hamburger">
      <div class="nav_hamburger_icon" @click="menu_open = !menu_open">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M3 12.5H21M3 6.5H21M3 18.5H21"
            stroke="#202020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- Navigation Hamburger Menu -->
      <div
        class="nav_hamburger_menu fixed z-20 top-0 left-0 w-full h-screen flex justify-end bg-custom_card_header/20"
        v-if="menu_open"
      >
        <div
          class="nav_menu w-[70%] h-500 flex items-end flex-col text-slate-50 p-6 bg-[#192f41] text-xl"
        >
          <div class="nav_hamburger_menu_header w-fit" @click="menu_open = !menu_open">
            <svg
              class="w-8 h-8 bg-custom_orange rounded-[4px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 7L7 17M7 7L17 17"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <ul class="flex flex-col gap-6 py-6 pr-6 w-full">
            <li
              @click="menu_open = !menu_open"
              class="menu_item"
              :class="{ 'text-custom_orange': route.path === link.to }"
              v-for="(link, index) in nav_links"
              :key="index"
            >
              <RouterLink role="menuitem" :to="link.to">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Navigation Menu Items -->
    <ul class="nav_menu flex gap-10 items-center text-custom_card_header text-xl">
      <li
        class="menu_item"
        :class="{ active: route.path === link.to }"
        v-for="(link, index) in nav_links"
        :key="index"
      >
        <RouterLink role="menuitem" :to="link.to">{{ link.name }}</RouterLink>
      </li>
    </ul>

    <!-- Navigation Join Button -->
    <RouterLink
      to="/products"
      class="text-custom_orange join_btn p-2 w-160 rounded-xl border-2 border-custom_orange hover:bg-custom_orange hover:text-slate-50 transition-all duration-300 capitalize text-center text-[16px]"
    >
      Join us
    </RouterLink>
  </nav>
</template>

<style scoped>
.active {
  position: relative;
}

.nav_hamburger {
  display: none;
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

@media screen and (max-width: 810px) {
  nav {
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    width: 100%;
    z-index: 1000;
    /* background-color: white; */
  }

  .nav_hamburger {
    display: block;
    cursor: pointer;
  }

  .join_btn,
  nav > ul {
    display: none;
  }
}
</style>
