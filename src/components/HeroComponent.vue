<script setup></script>
<template>
  <section class="hero flex flex-wrap gap-8 py-20 justify-between">
    <header class="flex flex-col items-start gap-8 w-600">
      <h1 class="capitalize text-6xl font-bold leading-snug">
        <slot name="header_h1"></slot>
      </h1>
      <p class="text-2xl mb-8">
        <slot name="header_p"></slot>
      </p>

      <div class="hero_button">
        <slot name="button"></slot>
      </div>
    </header>

    <div class="hero_image w-500 h-450">
      <slot name="hero_image"></slot>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 1200px) {
  .hero {
    justify-content: center;
  }
}
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
