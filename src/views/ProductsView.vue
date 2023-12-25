<script setup>
import ProductsComponent from "../components/products_page_components/ProductsComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <main class="px-16">
    <ProductsComponent />
    <AboutComponent>
      <template #header_h1>
        <h1>Build Together</h1>
      </template>

      <template #header_p>
        <p>Unlocking Career Growth For All</p>
      </template>

      <template #body_p>
        <p>Build Together- Where Opportunities Multiply and Careers Thrive</p>
      </template>

      <template #button>
        <RouterLink
          class="hero_btn bg-custom_orange text-slate-50 rounded-xl items-center justify-center px-5 py-3 w-40 capitalize hover:bg-custom_dark_orange transition-all duration-300"
          to="/products"
          >get started</RouterLink
        >
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
