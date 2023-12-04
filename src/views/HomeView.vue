<script setup>
import AboutComponent from "../components/landing_page_components/AboutComponent.vue";
import BenefitsComponent from "../components/landing_page_components/BenefitsComponent.vue";
import ContactUsComponent from "../components/landing_page_components/ContactUsComponent.vue";
import GrowthComponent from "../components/landing_page_components/GrowthComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import ProductsComponent from "../components/landing_page_components/ProductsComponent.vue";
import QuestionsComponent from "../components/landing_page_components/QuestionsComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import hero_image from "@/assets/images/hero_image.png";
</script>

<template>
  <main class="px-16">
    <!-- <HeroComponent /> -->
    <HeroComponent>
      <template #header_h1>
        <h1>shape your future; redefine your career growth</h1>
      </template>

      <template #header_p>
        <p>Grow your skills, Gain experience, Earn an income, Be employable</p>
      </template>

      <template #button>
        <ButtonComponent text="get started" />
      </template>

      <template #hero_image>
        <img class="object-cover" :src="hero_image" alt="Hero image" />
      </template>
    </HeroComponent>
    <GrowthComponent />
    <BenefitsComponent />
    <ProductsComponent />
    <AboutComponent />
    <ContactUsComponent />
    <QuestionsComponent />
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
