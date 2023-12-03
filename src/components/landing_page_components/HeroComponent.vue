<script setup>
import hero_image from "@/assets/images/hero_image.png";
</script>
<template>
  <section class="hero flex flex-wrap gap-8 py-20 justify-between">
    <header class="flex flex-col items-start gap-8 w-600">
      <h1 class="capitalize text-6xl font-bold leading-snug">
        shape your future; redefine your career growth
      </h1>
      <p class="text-2xl mb-8">
        Grow your skills, Gain experience, Earn an income, Be employable
      </p>
      <button
        class="hero_btn bg-custom_orange text-slate-50 rounded-xl items-center justify-center px-5 py-3 w-40 capitalize hover:bg-custom_dark_orange transition-all duration-300"
      >
        get started
      </button>
    </header>

    <div class="hero_image w-500 h-450">
      <img class="object-cover" :src="hero_image" alt="Hero image" />
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .hero {
    padding: 30px 0px;
  }
  header {
    gap: 12px;
  }
  header h1 {
    font-size: 24px;
    margin: 0px;
  }
  header p {
    font-size: 14px;
    line-height: normal;
  }
  header button {
    width: 134px;
    font-size: 12px;
  }
  .hero_image {
    padding-top: 30px;
    height: fit-content;
  }
}
</style>
