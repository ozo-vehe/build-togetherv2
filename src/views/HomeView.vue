<script setup>
import AboutComponent from "../components/AboutComponent.vue";
import BenefitsComponent from "../components/landing_page_components/BenefitsComponent.vue";
import ContactUsComponent from "../components/landing_page_components/ContactUsComponent.vue";
import GrowthComponent from "../components/landing_page_components/GrowthComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import ProductsComponent from "../components/landing_page_components/ProductsComponent.vue";
import QuestionsComponent from "../components/landing_page_components/QuestionsComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import hero_image from "@/assets/images/hero_image.png";
import { useRouter, RouterLink } from "vue-router";

const router = useRouter();

const changeRoute = () => {
  // router.push
  router.push({ path: "/products" });
};
</script>

<template>
  <Transition name="slide-fade" appear>
    <main class="home_view px-16">
      <!-- <HeroComponent /> -->
      <HeroComponent class="hero_component">
        <template #header_h1>
          <h1>shape your future; redefine your career growth</h1>
        </template>

        <template #header_p>
          <p>Grow your skills, Gain experience, Earn an income, Be employable</p>
        </template>

        <template #button>
          <!-- <RouterLink to="/products">get started</RouterLink> -->
          <ButtonComponent @click.prevent="changeRoute" text="get started" />
        </template>

        <template #hero_image>
          <img class="object-cover" :src="hero_image" alt="Hero image" />
        </template>
      </HeroComponent>
      <GrowthComponent class="growth_component" />
      <BenefitsComponent />
      <ProductsComponent />
      <AboutComponent
        class="about_component"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
      >
        <template #header_h1>
          <h1>Build Together</h1>
        </template>

        <template #header_p>
          <p>We’re obsessed with you at your best</p>
        </template>

        <template #body_p>
          <p>As career champions, we help you shine brighter and achieve more</p>
        </template>

        <template #button>
          <RouterLink
            class="hero_btn bg-custom_orange text-slate-50 rounded-xl items-center justify-center px-5 py-3 w-40 capitalize hover:bg-custom_dark_orange transition-all duration-300"
            to="/products"
            >get started</RouterLink
          >
        </template>
      </AboutComponent>
      <ContactUsComponent />
      <QuestionsComponent />
    </main>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
@media screen and (max-width: 768px) {
  main {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
