<script setup>
import HeroComponent from "@/components/HeroComponent.vue";
import hero_image from "@/assets/images/about_hero.png";
import StoryComponent from "../components/about_page_components/StoryComponent.vue";
import CountriesComponent from "../components/about_page_components/CountriesComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
</script>
<template>
  <main class="px-16">
    <HeroComponent>
      <template #header_h1>
        <h1>Empowering Tech Talents Worldwide</h1>
      </template>

      <template #header_p>
        <p>
          Build Together is on a mission to tackle growth hurdles for aspiring tech
          enthusiasts, fostering a collaborative environment. <br /><br />
          Our Vision is to empower talents globally, propelling them to become drivers of
          innovation, success, and positive change in the tech ecosystem
        </p>
      </template>

      <template #hero_image>
        <img class="object-cover" :src="hero_image" alt="Hero image" />
      </template>
    </HeroComponent>
    <StoryComponent />
    <CountriesComponent />
    <AboutComponent>
      <template #header_h1>
        <h1>Build Together</h1>
      </template>

      <template #header_p>
        <p>The Team</p>
      </template>

      <template #body_p>
        <p>
          We are a team on a journey to create something lasting, embracing the
          opportunity to learn something new every single day
        </p>
      </template>
    </AboutComponent>
  </main>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  main {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
