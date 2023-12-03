<script setup></script>
<template>
  <section
    class="about flex max-w-full flex-wrap flex-col gap-4 py-20 justify-center items-center"
  >
    <header class="flex flex-col items-center text-center gap-4">
      <h2 class="text-custom_orange text-2xl">Build Together</h2>
      <p class="font-bold text-4xl w-fit mb-4">We're obsessed with you at your best</p>
    </header>
    <div class="flex flex-col items-center max-w-full justify-center gap-x-10 gap-y-4">
      <p class="text-custom_card_header text-2xl text-center">
        As career champions, we help you shine brighter and achieve more
      </p>
      <button
        class="bg-custom_orange w-40 px-5 py-3 rounded-xl text-white hover:bg-custom_dark_orange transition-all duration-300"
      >
        Get Started
      </button>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .about {
    padding: 32px 0px;
  }
  header {
    text-align: center;
    gap: 8px;
    margin-bottom: 0px;
  }
  header h2 {
    font-size: 14px;
    line-height: normal;
  }
  header p {
    line-height: normal;
    font-size: 20px;
    margin: 0px;
  }
  .about > div p {
    font-size: 14px;
    line-height: normal;
  }
  .about > div button {
    font-size: 12px;
    width: 134px;
    text-align: center;
  }
}
</style>
