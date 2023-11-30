<script setup>
import AboutComponent from '../components/landing_page_components/AboutComponent.vue';
import BenefitsComponent from '../components/landing_page_components/BenefitsComponent.vue';
import ContactUsComponent from '../components/landing_page_components/ContactUsComponent.vue';
import GrowthComponent from '../components/landing_page_components/GrowthComponent.vue';
import HeroComponent from '../components/landing_page_components/HeroComponent.vue';
import ProductsComponent from '../components/landing_page_components/ProductsComponent.vue';
import QuestionsComponent from '../components/landing_page_components/QuestionsComponent.vue';
</script>

<template>
  <main class="px-16">
    <HeroComponent />
    <GrowthComponent />
    <BenefitsComponent />
    <ProductsComponent />
    <AboutComponent />
    <ContactUsComponent />
    <QuestionsComponent />
  </main>
</template>
