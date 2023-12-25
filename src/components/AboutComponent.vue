<script setup></script>
<template>
  <section
    class="about flex max-w-full flex-wrap flex-col gap-4 py-20 justify-center items-center"
  >
    <header
      class="flex flex-col items-center text-center gap-4"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <h2 class="text-custom_orange text-2xl">
        <slot name="header_h1"></slot>
      </h2>
      <p class="font-bold text-4xl w-fit mb-4">
        <slot name="header_p"></slot>
      </p>
    </header>
    <div
      class="flex flex-col items-center max-w-[900px] justify-center gap-x-10 gap-y-4"
      data-aos="slide-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <p class="text-custom_card_header text-2xl text-center">
        <slot name="body_p"></slot>
      </p>

      <div class="body_btn mt-4">
        <slot name="button"></slot>
      </div>
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
